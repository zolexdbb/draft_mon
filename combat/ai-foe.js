/* ==== IA des dresseurs adverses : choix des 4 attaques d'un Pokémon généré, choix du coup/de la
   cible à chaque tour, changements de Pokémon volontaires et remplaçants après un K.O. ====
   Le comportement dépend d'un niveau d'IA (foeAiLevel) qui monte avec l'étage :
   - 0 : étages 1-4, tirage au sort pondéré par un score simple (efficacité, STAB, puissance)
   - 1 : étages 5-9, dégâts réellement estimés (computeDamage), repère les K.O., favorise fortement le meilleur coup
   - 2 : étages 10-19 (et Mini-Boss / Boss dès leur premier passage), choisit presque toujours le meilleur coup,
         monte ses stats / soigne / pose pièges et statuts intelligemment, et change de Pokémon quand il est mal placé
   - 3 : étages 20+ (et Boss avancés), connaît les capacités de ton Pokémon actif pour anticiper les dégâts, change
         plus souvent et plus finement, protège son Pokémon face aux capacités à charge
   ==== */
const AI_TYPES = ['normal','feu','eau','plante','electrik','vol','poison','sol','insecte','combat','glace','psy','fantome','roche','dragon','acier','tenebres','fee'];

// Niveau d'IA du combat en cours (voir le sommaire du fichier).
function foeAiLevel(bs){
  bs = bs || battleState;
  const floor = (typeof towerFloor!=='undefined' && towerFloor) ? towerFloor : 1;
  let lvl = floor<5 ? 0 : (floor<12 ? 1 : (floor<25 ? 2 : 3));
  const boss = !!(bs && ((bs.trainer && bs.trainer.boss) || (bs.trainer2 && bs.trainer2.boss)));
  const mini = !!(bs && ((bs.trainer && bs.trainer.miniBoss) || (bs.trainer2 && bs.trainer2.miniBoss)));
  if(boss) lvl = Math.min(3, Math.max(2, lvl+1));
  else if(mini) lvl = Math.min(3, lvl+1);
  return lvl;
}

/* ---------- Choix des 4 attaques d'un Pokémon généré ---------- */
// Capacités que l'IA évite de donner à ses Pokémon (trop aléatoires, conditionnelles ou à double tranchant).
function foeMoveIsUnreliable(m){
  return !!(m.ohko || m.fixedDamage || m.selfDestruct || m.lastResort || m.focusPunch || m.firstTurnOnly || m.requiresStatus ||
    m.sleepOnly || m.requiresAteBerry || m.requiresPhysHit || m.suckerPunch || m.metalBurst || m.finalGambit || m.endsTerrain ||
    m.requiresTargetItem || m.selfSleepOnly || m.fling || m.naturalGift || m.bide);
}
// Valeur brute d'une capacité offensive pour un Pokémon donné (puissance x précision x STAB, malus de recharge/charge/contrecoup).
function foeMoveValue(mv, sp, roleCat){
  let v = mv.power * (mv.neverMiss ? 1 : (mv.accuracy===undefined ? 1 : mv.accuracy));
  if(mv.multiHit) v *= ((mv.multiHit.min||1) + (mv.multiHit.max||1)) / 2;
  if(mv.recharge) v *= 0.55;
  if(mv.charge && !mv.semiInvuln) v *= 0.6;
  if(mv.charge && mv.semiInvuln) v *= 0.7;
  if(mv.recoil || mv.recoilMaxHp) v *= 0.9;
  if(mv.rampage) v *= 0.8;
  if(mv.priority>0) v *= 1.15;
  if(sp.types.includes(mv.type)) v *= 1.5;
  if(roleCat && mv.cat!==roleCat) v *= 0.55;
  return v;
}
// Intérêt d'une capacité de statut pour un Pokémon (0 = jamais choisie) : soin, montée de stats, pièges, statuts, écrans...
function foeUtilityScore(mv, sp, roleCat, bulky){
  const e = mv.effect || {};
  const b = sp.base || {};
  const acc = mv.accuracy===undefined ? 1 : mv.accuracy;
  if(e.heal && e.heal>=0.5 && !e.weatherDependent) return bulky ? 34 : 22;
  if(e.roost) return bulky ? 30 : 20;
  if(e.selfBoost){
    const boosts = e.selfBoost.filter(x=>x.stages>0);
    const total = boosts.reduce((a,x)=>a+x.stages,0);
    const relevant = boosts.some(x=> (x.stat==='atk' && roleCat!=='spec') || (x.stat==='spa' && roleCat!=='phys') ||
      (x.stat==='spe' && (b.spe||0)<105) || (bulky && (x.stat==='def' || x.stat==='spd')));
    return (relevant && total>=2) ? 30 : (relevant ? 16 : 0);
  }
  if(e.hazard){ return e.hazard==='rocks' ? 26 : (e.hazard==='spikes' ? 17 : (e.hazard==='toxic' ? 15 : 12)); }
  if(e.status){
    const st = e.status;
    const base = st==='sommeil' ? 24 : (st==='paralysie' ? 20 : (st==='brulure' ? (roleCat==='spec' ? 6 : 18) : (st==='poison' ? 17 : (st==='gel' ? 14 : 9))));
    return base * acc;
  }
  if(e.substitute) return bulky ? 12 : 14;
  if(e.leechSeed) return bulky ? 17 : 12;
  if(e.trickRoom) return (b.spe||100)<=55 ? 26 : 0;
  if(e.tailwind) return (b.spe||100)<95 ? 10 : 0;
  if(e.reflect && !e.lightScreen) return roleCat==='spec' ? 6 : 12;
  if(e.lightScreen && !e.reflect) return roleCat==='phys' ? 6 : 12;
  if(e.weather){
    const matches = (e.weather==='pluie' && sp.types.includes('eau')) || (e.weather==='soleil' && sp.types.includes('feu')) ||
      (e.weather==='sable' && (sp.types.includes('roche') || sp.types.includes('sol') || sp.types.includes('acier')));
    return matches ? 16 : 0;
  }
  return 0;
}
// Sélectionne les 4 attaques d'un Pokémon généré (dresseur/tour) : meilleur STAB de chaque type, couverture des types
// non touchés super efficacement, puis 0 à 2 capacités utilitaires selon l'étage (soin, montée de stats, pièges, statut).
function pickSmartMoves(movepool, sp, floor){
  const base = sp.base || {};
  const atk = base.atk||0, spa = base.spa||0;
  const roleCat = atk >= spa*1.15 ? 'phys' : (spa >= atk*1.15 ? 'spec' : null);
  const bulky = ((base.hp||0) + (base.def||0) + (base.spd||0)) >= 270 && (base.spe||0) < 80;
  const pool = [...new Set(movepool)].filter(id=>MOVES[id]);
  const damaging = pool.filter(id=>{ const m = MOVES[id]; return m.cat!=='status' && m.power>0 && !foeMoveIsUnreliable(m); });
  const value = id => foeMoveValue(MOVES[id], sp, roleCat);
  damaging.sort((a,b)=>value(b)-value(a));
  const utilSlots = floor >= 14 ? 2 : (floor >= 5 ? 1 : 0);
  const attackSlots = 4 - utilSlots;

  const picked = [];
  // 1) meilleur STAB de chacun des types du Pokémon
  sp.types.forEach(t=>{
    const best = damaging.find(id=>MOVES[id].type===t && !picked.includes(id));
    if(best && picked.length<attackSlots) picked.push(best);
  });
  // 2) couverture : types adverses non encore touchés super efficacement
  const covered = new Set();
  const markCovered = id => AI_TYPES.forEach(d=>{ if(getMult(MOVES[id].type,[d])>1) covered.add(d); });
  picked.forEach(markCovered);
  while(picked.length < attackSlots){
    let best = null, bestScore = -1;
    damaging.forEach(id=>{
      if(picked.includes(id)) return;
      const t = MOVES[id].type;
      const gain = AI_TYPES.filter(d=>!covered.has(d) && getMult(t,[d])>1).length;
      const sameTypeCount = picked.filter(p=>MOVES[p].type===t).length;
      const score = value(id) * (1 + 0.14*gain) * (sameTypeCount>=1 ? 0.6 : 1);
      if(score>bestScore){ bestScore = score; best = id; }
    });
    if(!best) break;
    picked.push(best); markCovered(best);
  }
  // 3) capacités utilitaires
  const utils = [];
  if(utilSlots>0){
    const used = new Set();
    const ranked = pool.filter(id=>MOVES[id].cat==='status' && !['swallow','wish','present','sleeptalk'].includes(id))
      .map(id=>({id, s: foeUtilityScore(MOVES[id], sp, roleCat, bulky)}))
      .filter(x=>x.s>=12)
      .sort((a,b)=>b.s-a.s);
    ranked.forEach(x=>{
      if(utils.length>=utilSlots) return;
      const e = MOVES[x.id].effect || {};
      const kind = Object.keys(e)[0];
      if(used.has(kind)) return;
      used.add(kind); utils.push(x.id);
    });
  }
  const finalMoves = [...new Set([...picked, ...utils])];
  // 4) compléter avec les meilleures capacités restantes
  [...damaging, ...pool].forEach(id=>{ if(finalMoves.length<4 && !finalMoves.includes(id)) finalMoves.push(id); });
  return finalMoves.slice(0,4);
}

/* ---------- Estimation des dégâts et des rapports de force ---------- */
// Vrai si un talent du défenseur annule totalement la capacité (Lévitation, Absorbe-Eau, Absorbe-Volt, Torche, Corps Cuit, Anti-Bombe).
function foeAbilityBlocks(mv, t){
  const ab = t.ability;
  if(!ab) return false;
  if(ab==='Lévitation' && mv.type==='sol' && !mv.bypassTypeImmunity && !t.smackDown && !(battleState && battleState.gravityTurns>0)) return true;
  if(ab==='Absorbe-Eau' && mv.type==='eau') return true;
  if(ab==='Absorbe-Volt' && mv.type==='electrik') return true;
  if((ab==='Torche' || ab==='Corps Cuit') && mv.type==='feu') return true;
  if(ab==='Anti-Bombe' && mv.ballBomb) return true;
  return false;
}
// Dégâts moyens attendus d'une capacité (précision et frappes multiples comprises), 0 pour une capacité de statut ou inefficace.
function foeExpectedDamage(attacker, mv, target){
  if(!mv || mv.cat==='status') return 0;
  if(!(mv.power>0) && !mv.fixedDamage && !mv.ohko) return 0;
  if(mv.ohko) return target.hp * 0.3;
  if(foeAbilityBlocks(mv, target)) return 0;
  let d = 0;
  try{ d = computeDamage(attacker, mv, target).dmg || 0; }catch(e){ d = 0; }
  if(mv.multiHit) d *= ((mv.multiHit.min||1) + (mv.multiHit.max||1)) / 2;
  const acc = mv.neverMiss ? 1 : (mv.accuracy===undefined ? 1 : mv.accuracy);
  return d * acc;
}
// Vrai si `a` agira avant `b` à priorité égale (Distorsion inverse l'ordre).
function foeOutspeeds(a, b){
  const sa = effectiveSpeed(a), sb = effectiveSpeed(b);
  return (battleState && battleState.trickRoomTurns>0) ? sa<sb : sa>sb;
}
// Capacités que l'IA suppose à ton Pokémon : niveau 3 = ses vraies capacités offensives, sinon des coups STAB génériques.
function foePlayerMoves(player, level){
  const real = (player.moves||[]).filter(m=>m && m.cat!=='status' && m.power>0);
  if(level>=3 && real.length) return real;
  const phys = (player.stats.atk*statMultiplier(player.stages.atk||0)) >= (player.stats.spa*statMultiplier(player.stages.spa||0));
  const types = player.transformedTypes || player.types;
  return types.map(t=>({ name:'?', type:t, power:80, cat: phys?'phys':'spec', accuracy:1 }));
}
// Part des PV actuels du Pokémon adverse que ton Pokémon peut lui retirer en un coup.
function foeThreatFrac(foe, player, level){
  let best = 0;
  foePlayerMoves(player, level).forEach(mv=>{ best = Math.max(best, foeExpectedDamage(player, mv, foe)); });
  return best / Math.max(1, foe.hp);
}
// Rapport de force entre un Pokémon adverse (actif ou en réserve) et ton Pokémon actif.
function foeMatchup(c, player, level){
  let off = 0;
  (c.moveObjs||[]).forEach(mv=>{ off = Math.max(off, foeExpectedDamage(c, mv, player)); });
  off /= Math.max(1, player.hp);
  const inc = foeThreatFrac(c, player, level);
  const faster = foeOutspeeds(c, player);
  let score = Math.min(off,1.5) - Math.min(inc,1.5);
  if(faster && off>=1) score += 1; else if(!faster && inc>=1) score -= 1;
  return { off, inc, faster, score };
}

// Choisit le meilleur Pokémon de remplacement d'un dresseur adverse au KO : maximise son avantage contre ton Pokémon
// (niveau 2+ : dégâts réellement estimés dans les deux sens ; sinon simple avantage de types).
function bestFoeSwitchIdx(foeTeam, player, excludeIdxs, level){
  excludeIdxs = excludeIdxs || [];
  const alive = foeTeam.map((c,i)=>({c,i})).filter(x=>x.c.hp>0 && !excludeIdxs.includes(x.i));
  if(alive.length===0) return -1;
  if(!player) return alive[0].i;
  const scored = alive.map(({c,i})=>{
    if(level>=2){
      const m = foeMatchup(c, player, level);
      return { i, score: m.score + (c.hp/c.maxHp - 1)*0.4 };
    }
    const offense = Math.max(...c.types.map(t=>getMult(t, player.types)));
    const defense = Math.max(...player.types.map(t=>getMult(t, c.types)));
    return { i, score: offense - defense*0.5 };
  });
  return scored.reduce((best,s)=> s.score>best.score ? s : best).i;
}

// Changement de Pokémon volontaire (niveau 2+, combat simple) : renvoie l'index du remplaçant, ou -1 pour rester.
// L'IA change quand son Pokémon est mal placé (il fait peu de dégâts et en subit beaucoup, ou ses stats sont tombées)
// et qu'un coéquipier encaisse le coup en gagnant nettement le duel ; jamais deux tours de suite.
function foeConsiderSwitch(level){
  const bs = battleState;
  if(level<2 || !bs || bs.isDouble || bs.fActive==null) return -1;
  const foe = bs.foe[bs.fActive];
  const player = alivePlayerCombatants()[0];
  if(!foe || !player || foe.hp<=0) return -1;
  if(foe.trapped || foe.mustRecharge || foe.chargingMove || (foe.lockedMove && !(foe.heldItem && ITEMS[foe.heldItem] && ITEMS[foe.heldItem].choiceLock)) || foe.dynamaxed || (foe.contMove && (foe.contTurns>0 || foe.contMove.bide))) return -1;
  const maxSwitches = level>=3 ? 3 : 2;
  if((bs.foeSwitchCount||0) >= maxSwitches) return -1;
  const turnNo = bs.turnNo || 0;
  if(bs.foeLastSwitchTurn!==undefined && turnNo - bs.foeLastSwitchTurn < 2) return -1;
  if(foe.hp/foe.maxHp <= 0.3) return -1;
  const bench = bs.foe.map((c,i)=>({c,i})).filter(x=>x.i!==bs.fActive && x.c.hp>0 && x.c.hp/x.c.maxHp>=0.35);
  if(!bench.length) return -1;
  const cur = foeMatchup(foe, player, level);
  const mainStage = (foe.stats.atk >= foe.stats.spa) ? (foe.stages.atk||0) : (foe.stages.spa||0);
  const trouble = (cur.off < 0.3 && cur.inc >= 0.4) || (cur.inc >= 1.0 && !(cur.faster && cur.off>=1)) || (mainStage <= -2 && cur.inc >= 0.3);
  if(!trouble) return -1;
  const need = level>=3 ? 0.45 : 0.65;
  let best = null;
  bench.forEach(({c,i})=>{
    const m = foeMatchup(c, player, level);
    if(m.inc >= 0.65) return;
    if(m.score - cur.score < need) return;
    if(!best || m.score>best.score) best = { i, score:m.score };
  });
  if(!best) return -1;
  return Math.random() < (level>=3 ? 0.75 : 0.45) ? best.i : -1;
}

/* ---------- Note d'un coup contre une cible ---------- */
// Ancien score simple (niveaux 0) : efficacité de type, STAB, stat d'attaque et puissance.
function legacyFoeScore(foe, mv, target){
  if(mv.fixedDamage){ return getMult(mv.type, target.types)>0 ? 8 : 0; }

  if(mv.cat === 'status'){
    const eff = mv.effect||{};
    const hpRatioFoe = foe.hp / foe.maxHp;
    if(eff.heal){
      return hpRatioFoe < 0.4 ? 50 - hpRatioFoe*80 : (hpRatioFoe < 0.7 ? 8 : 1);
    }
    if(eff.hazard){
      const h = (typeof hazardsOf==='function') ? hazardsOf('player') : null;
      if(!h) return 1;
      const full = eff.hazard==='rocks' ? h.rocks : eff.hazard==='spikes' ? h.spikes>=3 : eff.hazard==='toxic' ? h.toxic>=2 : h.web;
      return full ? 0 : (eff.hazard==='rocks' ? 16 : 12);
    }
    if(eff.status){
      const hpRatioTarget = target.hp / target.maxHp;
      if(eff.status === 'confusion'){
        return target.confuseCounter > 0 ? 1 : (hpRatioTarget > 0.4 ? 12 : 4);
      }
      return target.status ? 1 : (hpRatioTarget > 0.3 ? 16 : 3);
    }
    if(eff.selfBoost){
      const stat = eff.selfBoost[0].stat;
      const cur = foe.stages[stat]||0;
      return cur >= 3 ? 1 : (hpRatioFoe > 0.5 ? 14 : 3);
    }
    if(eff.foeBoost){
      const stat = eff.foeBoost[0].stat;
      const cur = target.stages[stat]||0;
      return cur <= -3 ? 1 : 10;
    }
    return 1;
  }

  const eff = getMult(mv.type, target.types);
  if(eff === 0) return 0;

  let score = 10 * eff;

  if(foe.types.includes(mv.type)) score *= 1.4;

  const foeAtkEff = foe.stats.atk * statMultiplier(foe.stages.atk||0);
  const foeSpaEff = foe.stats.spa * statMultiplier(foe.stages.spa||0);
  const isPhys = mv.cat === 'phys';
  if(isPhys && foeAtkEff > foeSpaEff*1.2) score *= 1.3;
  if(!isPhys && foeSpaEff > foeAtkEff*1.2) score *= 1.3;

  score *= (mv.power / 55);

  if(mv.recoil && (foe.hp/foe.maxHp) < 0.3) score *= 0.4;

  return score;
}
// Nombre de Pokémon du joueur encore en réserve (pour décider de poser des pièges).
function foePlayerBenchCount(){
  const bs = battleState;
  if(!bs) return 0;
  const active = [bs.pActive, bs.pActive2].filter(x=>x!=null);
  return bs.player.filter((c,i)=>c.hp>0 && !active.includes(i)).length;
}
// Note un coup de statut pour l'IA avancée (niveau 1+).
function advancedStatusScore(foe, mv, target, level){
  const bs = battleState;
  const eff = mv.effect || {};
  const hpF = foe.hp / foe.maxHp;
  const acc = mv.accuracy===undefined ? 1 : mv.accuracy;
  const threat = foeThreatFrac(foe, target, level);              // part de ses PV actuels que tu peux lui retirer en un coup
  const threatMax = threat * foe.hp / foe.maxHp;                  // part de ses PV max
  const loc = locateActiveSlot(foe);
  const mySide = loc ? loc.side : 'foe';
  let score = 1;
  if(eff.heal || eff.roost){
    if(hpF >= 0.75) return 1;
    const healed = eff.heal || 0.5;
    if(threatMax >= hpF + healed) return 3;
    return hpF < 0.4 ? 55 : (hpF < 0.6 ? 38 : 12);
  }
  if(eff.rest){
    if(foe.status && hpF < 0.6) return 30;
    return (hpF < 0.4 && !foe.status && threatMax < 0.7) ? 34 : 1;
  }
  if(eff.hazard){
    const h = (typeof hazardsOf==='function') ? hazardsOf('player') : null;
    if(!h || foePlayerBenchCount()===0) return 0;
    const full = eff.hazard==='rocks' ? h.rocks : eff.hazard==='spikes' ? h.spikes>=3 : eff.hazard==='toxic' ? h.toxic>=2 : h.web;
    if(full) return 0;
    return (eff.hazard==='rocks' ? 24 : (eff.hazard==='spikes' ? 18 : 14)) + Math.min(6, foePlayerBenchCount()*2);
  }
  if(eff.selfBoost){
    const useful = eff.selfBoost.filter(b=>{
      if(b.stages<=0) return false;
      if(b.stat==='atk') return foe.stats.atk >= foe.stats.spa*0.9;
      if(b.stat==='spa') return foe.stats.spa >= foe.stats.atk*0.9;
      if(b.stat==='spe') return !foeOutspeeds(foe, target);
      return true;
    });
    if(!useful.length) return 1;
    const cur = useful.reduce((a,b)=>a+(foe.stages[b.stat]||0),0) / useful.length;
    if(cur >= 4) return 1;
    const safe = threat < 0.5 && hpF > 0.55;
    return safe ? Math.max(6, 32 - cur*5) : (hpF > 0.75 && threat < 0.8 ? 9 : 2);
  }
  if(eff.status){
    const st = eff.status;
    if(target.status || (st==='confusion' && target.confuseCounter>0)) return 1;
    if(target.substitute>0) return 1;
    const tt = target.transformedTypes || target.types;
    if(mv.type==='electrik' && getMult('electrik', tt)===0) return 0;
    if((st==='paralysie' && tt.includes('electrik')) || (st==='brulure' && tt.includes('feu')) || (st==='poison' && (tt.includes('poison') || tt.includes('acier'))) || (st==='gel' && tt.includes('glace'))) return 0;
    if(mv.powder && tt.includes('plante')) return 0;
    if(st==='sommeil' && bs.player.some(c=>c.hp>0 && c.status==='sommeil')) return 1;
    if(target.hp/target.maxHp < 0.3) return 3;
    let base = st==='sommeil' ? 34 : (st==='paralysie' ? (foeOutspeeds(target, foe) ? 32 : 20) : (st==='brulure' ? (target.stats.atk >= target.stats.spa ? 28 : 10) : (st==='poison' ? 22 : (st==='confusion' ? 14 : 18))));
    return base * acc;
  }
  if(eff.leechSeed){
    const tt = target.transformedTypes || target.types;
    return (target.seeded || tt.includes('plante')) ? 0 : (hpF>0.4 ? 14 : 3);
  }
  if(eff.substitute){
    return (foe.substitute>0 || hpF<=0.55) ? 1 : (level>=2 ? 15 : 4);
  }
  if(eff.foeBoost){
    const stat = eff.foeBoost[0].stat;
    const cur = target.stages[stat]||0;
    return cur <= -2 ? 1 : 8;
  }
  if(eff.reflect || eff.lightScreen){
    const phys = target.stats.atk >= target.stats.spa;
    const has = eff.reflect ? foe.reflectTurns>0 : foe.lightScreenTurns>0;
    if(has) return 0;
    if(eff.reflect && eff.lightScreen) return 10;
    return (eff.reflect === phys) ? 18 : 6;
  }
  if(eff.tailwind){
    const active = bs.tailwind && bs.tailwind[mySide]>0;
    return (!active && !foeOutspeeds(foe, target) && level>=2) ? 22 : 1;
  }
  if(eff.trickRoom){
    if(bs.trickRoomTurns>0) return 1;
    return (!foeOutspeeds(foe, target) && level>=2) ? 24 : 1;
  }
  if(eff.weather){
    const cur = bs.weather && bs.weather.type;
    if(cur===eff.weather) return 0;
    const matches = (eff.weather==='pluie' && foe.types.includes('eau')) || (eff.weather==='soleil' && foe.types.includes('feu')) || (eff.weather==='sable' && (foe.types.includes('roche')||foe.types.includes('sol')||foe.types.includes('acier')));
    return matches ? 18 : (level>=2 ? 5 : 1);
  }
  if(eff.tauntBlock){
    const statusCount = (target.moves||[]).filter(m=>m && m.cat==='status').length;
    return (level>=2 && statusCount>=2 && !(target.tauntTurns>0)) ? 14 : 1;
  }
  if(eff.forceSwitch){
    const sum = AI_STAGE_KEYS.reduce((a,k)=>a+(target.stages[k]||0),0);
    return (level>=2 && sum>=2 && foePlayerBenchCount()>0) ? 26 : 1;
  }
  if(eff.haze){
    const sum = AI_STAGE_KEYS.reduce((a,k)=>a+(target.stages[k]||0),0);
    return sum>=3 ? 24 : 1;
  }
  if(eff.protect){
    if(level<3 || (foe.protectChain||0)>0) return 0;
    return (target.chargingMove || target.dynamaxed || target.mustRecharge) ? 30 : 3;
  }
  return score;
}
const AI_STAGE_KEYS = ['atk','def','spa','spd','spe'];
// Note un coup donné contre une cible donnée — plus le score est haut, plus l'IA a de chances de le choisir.
function scoreFoeMoveVsTarget(foe, mv, target, level){
  level = level || 0;
  if(level<1) return legacyFoeScore(foe, mv, target);
  if(mv.cat === 'status'){
    let s = advancedStatusScore(foe, mv, target, level);
    const eff = mv.effect || {};
    if(s>1 && foe.lastMoveUsed===mv && !eff.heal && !eff.roost && !eff.rest) s *= 0.25;   // évite de répéter un coup de statut
    return s;
  }
  const dmg = foeExpectedDamage(foe, mv, target);
  if(dmg<=0) return 0;
  const frac = Math.min(1.3, dmg / Math.max(1, target.hp));
  let score = 14 + 36*frac;
  const acc = mv.neverMiss ? 1 : (mv.accuracy===undefined ? 1 : mv.accuracy);
  const ko = dmg*0.85 >= target.hp && acc >= 0.85;
  if(ko){
    score += 28;
    if(effectivePriority(foe, mv)>0 && foeOutspeeds(target, foe)) score += 24;
  }
  if(mv.selfDestruct && foe.hp/foe.maxHp >= 0.3) score *= 0.15;
  if(mv.recharge && !ko) score *= 0.6;
  if(mv.charge && !ko) score *= 0.6;
  if(mv.rampage) score *= 0.85;
  if(mv.recoil && foe.hp/foe.maxHp < 0.3) score *= 0.4;
  return score;
}

// Point d'entrée appelé chaque tour pour un combattant adverse : filtre les coups jouables (PP, entrave, Choix...), note chaque paire
// coup/cible via scoreFoeMoveVsTarget, puis choisit (tirage pondéré au niveau 0-1, quasi toujours le meilleur dès le niveau 2).
// Le 3e paramètre est le niveau d'IA (un booléen `true` équivaut à l'ancienne « IA excellente », soit le niveau 2).
function chooseFoeMove(foe, possibleTargets, level, excellent){
  if(level===true){ level = 2; excellent = true; }
  level = level || 0;
  let moves = foe.disabledMove ? foe.moveObjs.filter(mv=>mv.name!==foe.disabledMove.name) : foe.moveObjs;
  if(foe.tormented && foe.lastMoveUsed){
    const varied = moves.filter(mv=>mv.name!==foe.lastMoveUsed.name);
    if(varied.length) moves = varied;
  }
  if(foe.lockedMove) moves = foe.moveObjs.filter(mv=>mv.name===foe.lockedMove.name);
  if(moves.length===0) moves = foe.moveObjs;
  if(foe.ppCur){
    const withPP = moves.filter(mv => (foe.ppCur[foe.moveObjs.indexOf(mv)]||0) > 0);
    if(withPP.length > 0) moves = withPP;
    else return { move: STRUGGLE_MOVE, target: possibleTargets[0] };
  }
  if(foe.contMove && (foe.contTurns>0 || foe.contMove.bide)){
    return { move: foe.contMove, target: possibleTargets[0] };
  }
  if(foe.chargingMove){
    moves = moves.filter(mv=>mv===foe.chargingMove);
    if(moves.length===0) moves = [foe.chargingMove];
  }
  if(foe.heldItem==='vesteCombat'){
    const attacks = moves.filter(mv=>mv.cat!=='status');
    if(attacks.length) moves = attacks;
  }

  const scored = [];
  moves.forEach(mv=>{
    if(mv.target==='self'){
      scored.push({ mv, target: possibleTargets[0], score: scoreFoeMoveVsTarget(foe, mv, possibleTargets[0], level) });
    } else {
      possibleTargets.forEach(t=> scored.push({ mv, target: t, score: scoreFoeMoveVsTarget(foe, mv, t, level) }));
    }
  });

  const valid = scored.filter(s => s.score > 0);
  let chosen;
  if(valid.length === 0){
    chosen = { mv: rand(moves), target: possibleTargets[0] };
  } else if(level>=3 || excellent){
    // niveau 3 et Maîtres de Type : quasi toujours le meilleur coup (léger bruit pour rester imprévisible)
    const noise = 0.06;
    chosen = valid.reduce((best,s)=>{
      const v = s.score * (1 - noise + Math.random()*noise*2);
      return (!best || v>best.v) ? { ...s, v } : best;
    }, null);
  } else {
    // niveau 2 : score au cube ; niveau 1 : au carré ; niveau 0 : tirage proportionnel au score
    const power = level>=2 ? 3 : (level>=1 ? 2 : 1);
    const weight = s => Math.pow(s.score, power);
    const total = valid.reduce((a,s)=>a+weight(s),0);
    let r = Math.random()*total;
    chosen = valid[valid.length-1];
    for(const s of valid){ r-=weight(s); if(r<=0){ chosen = s; break; } }
  }
  if(foe.ppCur){
    const idx = foe.moveObjs.indexOf(chosen.mv);
    if(idx>=0 && foe.ppCur[idx]>0) foe.ppCur[idx]--;
  }
  return { move: chosen.mv, target: chosen.target };
}
