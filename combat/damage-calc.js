/* ==== SOMMAIRE ====
   Calcul des dégâts et de la vitesse effective. Repères :
   - statMultiplier / accuracyStageMultiplier : conversion stage (-6..+6) → multiplicateur
   - rollCrit : tirage du coup critique
   - moveEffectiveness : multiplicateur de type (avec les cas spéciaux : Querelleur vs Spectre...)
   - computeDamage : calcul complet des dégâts d'un coup (LE plus gros morceau du fichier — c'est
     ici que sont branchés presque tous les multiplicateurs liés aux talents/objets/météo/terrain)
   - effectiveSpeed : vitesse réelle d'un combattant (talents/objets/statut/météo inclus)
==== */
function statMultiplier(stage){
  return stage>=0 ? (2+stage)/2 : 2/(2-stage);
}
function accuracyStageMultiplier(stage){
  const s = Math.max(-6, Math.min(6, stage||0));
  return s>=0 ? (3+s)/3 : 3/(3-s);
}
const CRIT_CHANCE = 1/16;
// Tire au sort si le coup est critique (chance de base 1/16, modifiée par talents/objets).
// Type d'attaque imposé par la Plaque (Jugement) ou la Mémoire (Multi-Coups) tenue ; null sinon.
const ITEM_TYPE_KEYS = {
  fire:'feu', water:'eau', grass:'plante', electric:'electrik', ice:'glace', fighting:'combat', poison:'poison', ground:'sol',
  flying:'vol', psychic:'psy', bug:'insecte', rock:'roche', ghost:'fantome', dragon:'dragon', dark:'tenebres', steel:'acier', fairy:'fee',
  flame:'feu', splash:'eau', meadow:'plante', zap:'electrik', sky:'vol', toxic:'poison', earth:'sol', stone:'roche', insect:'insecte',
  spooky:'fantome', iron:'acier', mind:'psy', icicle:'glace', fist:'combat', draco:'dragon', dread:'tenebres', pixie:'fee',
  shock:'electrik', burn:'feu', chill:'glace', douse:'eau'
};
// kind : 'plate' (Jugement), 'memory' (Coup Varia-Type) ou 'drive' (Techno-Buster) ; seul l'objet du bon genre compte.
function itemMoveType(item, kind){
  if(!item || !item.sprite) return null;
  const m = String(item.sprite).match(/([a-z]+)-(plate|memory|drive)/);
  if(!m || (kind && kind!==true && m[2]!==kind)) return null;
  return ITEM_TYPE_KEYS[m[1]] || null;
}
// Type de Puissance Cachée : calculé à partir des IV du combattant (31 partout = Ténèbres), ou d'après son nom s'il n'en a pas.
const HIDDEN_POWER_TYPES = ['combat','vol','poison','sol','roche','insecte','fantome','acier','feu','eau','plante','electrik','psy','glace','dragon','tenebres'];
function hiddenPowerType(c){
  const iv = c.ivs;
  if(iv){
    const bit = k => (iv[k]===undefined ? 31 : iv[k]) % 2;
    const n = bit('hp') + 2*bit('atk') + 4*bit('def') + 8*bit('spe') + 16*bit('spa') + 32*bit('spd');
    return HIDDEN_POWER_TYPES[Math.floor(n*15/63)];
  }
  let h = 0; for(const ch of String(c.name)) h = (h*31 + ch.charCodeAt(0)) % 997;
  return HIDDEN_POWER_TYPES[h % 16];
}
// Poids en kg d'un combattant (table POKEMON_WEIGHT en hectogrammes ; 50 kg par défaut).
function weightKg(c){
  const w = (typeof POKEMON_WEIGHT!=='undefined') ? POKEMON_WEIGHT[c.name] : null;
  return Math.max(0.1, (w||500)/10);
}
function rollCrit(attacker, defender, move){
  if(defender.ability==='Coque Armure' || defender.ability==='Armurbaston') return false;
  if(battleState && battleState.luckyChant){ const cl = locateActiveSlot(defender); if(cl && battleState.luckyChant[cl.side]>0) return false; }
  if(move && move.alwaysCrit) return true;
  if(attacker.ability==='Sans Pitié' && defender.status==='poison') return true;
  let chance = CRIT_CHANCE;
  if(move && move.critRate) chance = [CRIT_CHANCE, 1/8, 1/2, 1][Math.min(3, move.critRate)];
  if(attacker.ability==='Sniper') chance *= 1;
  if(defender.ability==='Écaille Spéciale') chance *= 4;
  if(attacker.critBoost) chance *= 4;
  if(attacker.heldItem==='griffeTranchante') chance *= 2;
  return Math.random() < chance;
}
// Vrai si un combattant présent a Air Lock/Ciel Gris (annule tous les effets de météo).
function weatherNullified(){
  if(!battleState) return false;
  const check = c => c.ability==='Air Lock' || c.ability==='Ciel Gris';
  return [...alivePlayerCombatants(), ...aliveFoeCombatants()].some(check);
}
// Vrai si un combattant actif autre que "exclude" possède le talent donné (Fléau Épée/Tablette/
// Perle/Récipient : réduisent une statistique de tous les autres Pokémon présents sauf eux-mêmes).
function otherActiveHasAbility(name, exclude){
  if(!battleState) return false;
  return [...alivePlayerCombatants(), ...aliveFoeCombatants()].some(c=>c!==exclude && c.ability===name);
}
// Stat (atk/def/spa/spd/spe) boostée de 30% (Protosynthèse sous Zénith / Quark Chargée sous Zone
// Électrique) : celle qui a la plus haute valeur de base parmi les 5 (hors PV) chez ce combattant.
function protoBoostStat(c){
  if(!c || !c.ability) return null;
  const active = (c.ability==='Protosynthèse' && battleState && !weatherNullified() && battleState.weather && battleState.weather.type==='soleil')
    || (c.ability==='Quark Chargée' && battleState && battleState.terrain && battleState.terrain.type==='electric');
  if(!active) return null;
  const keys = ['atk','def','spa','spd','spe'];
  let best = keys[0];
  keys.forEach(k=>{ if(c.stats[k] > c.stats[best]) best = k; });
  return best;
}
// Multiplicateur d'efficacité de type d'un coup, avec les cas spéciaux : superEffectiveVs forcé,
// bypassTypeImmunity (ex. Mille Flèches), et Querelleur (Normal/Combat touche les Spectre).
function moveEffectiveness(move, defTypes, attacker, defender){
  const atkTypes = move.type2 ? [move.type, move.type2] : [move.type];
  let eff = 1;
  defTypes.forEach(dt=>{
    if(move.superEffectiveVs===dt){ eff *= 2; return; }
    let v = 1;
    atkTypes.forEach(t=>{
      const chart = TYPE_CHART[t];
      v *= (chart && chart[dt]!==undefined) ? chart[dt] : 1;
    });
    if(move.bypassTypeImmunity && v===0) v = 1;
    if(attacker && attacker.ability==='Querelleur' && dt==='fantome' && (move.type==='normal'||move.type==='combat') && v===0) v = 1;
    if(defender && defender.foresighted && dt==='fantome' && (move.type==='normal'||move.type==='combat') && v===0) v = 1;
    if(defender && defender.miracleEyed && dt==='tenebres' && move.type==='psy' && v===0) v = 1;
    if(defender && (defender.smackDown || (battleState && battleState.gravityTurns>0)) && dt==='vol' && move.type==='sol' && v===0) v = 1;
    eff *= v;
  });
  return eff;
}
// Calcule les dégâts d'un coup : formule officielle (niveau/puissance/stats/STAB/efficacité/
// variance/critique) puis tous les multiplicateurs de talents, objets, météo et terrain.
function computeDamage(attacker, move, defender){
  if(move.fixedDamage){
    return { dmg: move.fixedDamage, eff: 1, crit:false };
  }
  if(move.metalBurst) return { dmg: Math.max(1, Math.round(1.5*((attacker.lastPhysDamage||0)+(attacker.lastSpecDamage||0)))), eff:1, crit:false };
  if(move.finalGambit) return { dmg: Math.max(1, attacker.hp), eff:1, crit:false };
  const crit = rollCrit(attacker, defender, move);
  const atkBase = move.useTargetAtk ? defender.stats.atk : (move.useDefenseForAtk ? attacker.stats.def : (move.cat==='phys' ? attacker.stats.atk : attacker.stats.spa));
  const wonderRoom = !!(battleState && battleState.wonderRoomTurns>0);
  const targetPhysDef = (move.cat==='phys' || move.targetDefStat==='def') !== wonderRoom;
  const defBase = targetPhysDef ? defender.stats.def : defender.stats.spd;
  let atkStage = move.useTargetAtk ? defender.stages.atk : (move.useDefenseForAtk ? attacker.stages.def : (move.cat==='phys' ? attacker.stages.atk : attacker.stages.spa));
  let defStage = targetPhysDef ? defender.stages.def : defender.stages.spd;
  if(crit){ atkStage = Math.max(0, atkStage); defStage = Math.min(0, defStage); }
  if(move.ignoreTargetStages) defStage = 0;
  const ruinAtkStat = move.cat==='phys' ? 'atk' : 'spa';
  const ruinAtkAbility = ruinAtkStat==='atk' ? 'Fléau Tablette' : 'Fléau Récipient';
  const ruinAtkMult = otherActiveHasAbility(ruinAtkAbility, attacker) ? 0.75 : 1;
  const protoAtkStat = protoBoostStat(attacker);
  const protoAtkMult = protoAtkStat===ruinAtkStat ? 1.3 : 1;
  const atkStat = atkBase * statMultiplier(atkStage) * (attacker.heldItem==='bandeauChoix' && move.cat==='phys' ? 1.5 : (attacker.heldItem==='lunettesChoix' && move.cat==='spec' ? 1.5 : 1)) * ruinAtkMult * protoAtkMult;
  const terrainNow = battleState ? battleState.terrain : null;
  const ruinDefStat = move.cat==='phys' ? 'def' : 'spd';
  const ruinDefAbility = ruinDefStat==='def' ? 'Fléau Épée' : 'Fléau Perle';
  const ruinDefMult = otherActiveHasAbility(ruinDefAbility, defender) ? 0.75 : 1;
  const protoDefStat = protoBoostStat(defender);
  const protoDefMult = protoDefStat===ruinDefStat ? 1.3 : 1;
  const defStat = defBase * statMultiplier(defStage) * (defender.heldItem==='vesteCombat' && move.cat==='spec' ? 1.5 : 1) * (defender.ability==='Robe Feuillue' && terrainNow && terrainNow.type==='grassy' ? 1.5 : 1) * ruinDefMult * protoDefMult;
  const atkTypes = attacker.transformedTypes || attacker.types;
  const defTypes = defender.transformedTypes || defender.types;
  const hasStab = atkTypes.includes(move.type) || (move.type2 && atkTypes.includes(move.type2));
  const teraStabBonus = attacker.teraActive && attacker.types.includes(move.type);
  const stab = hasStab ? (attacker.ability==='Adaptabilité' || teraStabBonus ? 2 : 1.5) : 1;
  const eff = moveEffectiveness(move, defTypes, attacker, defender);
  const variance = 0.85 + Math.random()*0.3;
  const burnPenalty = (attacker.status==='brulure' && move.cat==='phys' && attacker.ability!=='Cran') ? 0.5 : 1;
  const critMult = crit ? (attacker.ability==='Sniper' ? 2.25 : 1.5) : 1;

  let abilityMult = 1;
  if(attacker.ability==='Cran' && attacker.status) abilityMult *= 1.5;
  const lowHp = attacker.hp <= attacker.maxHp/3;
  if(lowHp){
    if(attacker.ability==='Engrais' && move.type==='plante') abilityMult *= 1.5;
    if(attacker.ability==='Brasier' && move.type==='feu') abilityMult *= 1.5;
    if(attacker.ability==='Torrent' && move.type==='eau') abilityMult *= 1.5;
    if(attacker.ability==='Essaim' && move.type==='insecte') abilityMult *= 1.5;
  }
  if(attacker.ability==='Technicien' && move.power>0 && move.power<=60) abilityMult *= 1.5;
  if(attacker.ability==='Poing de Fer' && /Poing|Punch|Poings|Pisto-Poing|Poing-Éclair/i.test(move.name)) abilityMult *= 1.2;
  if(attacker.ability==='Torche' && move.type==='feu' && attacker.torchActivated) abilityMult *= 1.5;
  if(defender.ability==='Isograisse' && (move.type==='feu'||move.type==='glace')) abilityMult *= 0.5;
  if(defender.ability==='Filtre' && eff>1) abilityMult *= 0.75;
  if(defender.ability==='Armure Prisme' && eff>1) abilityMult *= 0.75;
  if(attacker.ability==='Force Neurale' && eff>1) abilityMult *= 1.25;
  if(defender.ability==='Écume' && move.type==='feu') abilityMult *= 0.5;
  if(attacker.ability==='Écume' && move.type==='eau') abilityMult *= 2;
  if(attacker.ability==='Transistor' && move.type==='electrik') abilityMult *= 1.5;
  if(attacker.ability==="Mâchoire du Dragon" && move.type==='dragon') abilityMult *= 1.5;
  if(defender.ability==='Écailles Glacées' && move.cat==='spec') abilityMult *= 0.5;
  if(attacker.ability==='Punk Rock' && move.sound) abilityMult *= 1.3;
  if(defender.ability==='Punk Rock' && move.sound) abilityMult *= 0.5;
  if(attacker.ability==='Instinct Gorille' && move.cat==='phys') abilityMult *= 1.5;
  if(defender.reflectTurns>0 && move.cat==='phys') abilityMult *= 0.5;
  if(defender.lightScreenTurns>0 && move.cat==='spec') abilityMult *= 0.5;
  if(attacker.heldItem==='orbeVie' && move.power>0) abilityMult *= 1.3;
  if(defender.ability==='Fourrure' && move.cat==='phys') abilityMult *= 0.5;
  if(attacker.ability==='Mâchouille' && move.bite) abilityMult *= 1.5;
  if(attacker.ability==='Méga-Lanceur' && move.pulse) abilityMult *= 1.5;
  if(attacker.ability==='Griffe Solide' && move.cat==='phys') abilityMult *= 1.3;
  if(attacker.ability==='Incisif' && move.slicing) abilityMult *= 1.5;
  if(defender.ability==='Sel Purifiant' && move.type==='fantome') abilityMult *= 0.5;
  if(move.superEffBoost && eff>1) abilityMult *= 1.33;
  if(battleState){
    const fieldMons = [...alivePlayerCombatants(), ...aliveFoeCombatants()];
    const auraBreak = fieldMons.some(c=>c.ability==='Rupture Aura');
    if(move.type==='tenebres' && fieldMons.some(c=>c.ability==='Aura Sombre')) abilityMult *= auraBreak ? 0.75 : 1.33;
    if(move.type==='fee' && fieldMons.some(c=>c.ability==='Aura Féérique')) abilityMult *= auraBreak ? 0.75 : 1.33;
    if(move.type==='acier' && attacker.ability!=="Esprit d'Acier"){
      const loc = locateActiveSlot(attacker);
      const allies = loc && loc.side==='player' ? alivePlayerCombatants() : aliveFoeCombatants();
      if(allies.some(c=>c.ability==="Esprit d'Acier")) abilityMult *= 1.5;
    }
    if(move.type==='acier' && attacker.ability==="Esprit d'Acier") abilityMult *= 1.5;
  }

  let weatherMult = 1;
  const weather = (battleState && !weatherNullified()) ? battleState.weather : null;
  if(weather){
    if(weather.type==='pluie'){
      if(move.type==='eau') weatherMult *= 1.5;
      else if(move.type==='feu') weatherMult *= 0.5;
    } else if(weather.type==='soleil'){
      if(move.type==='feu') weatherMult *= 1.5;
      else if(move.type==='eau') weatherMult *= 0.5;
    }
  }

  if(battleState && battleState.waterSportTurns>0 && move.type==='feu') weatherMult *= 0.33;
  if(battleState && battleState.mudSportTurns>0 && move.type==='electrik') weatherMult *= 0.33;

  let terrainMult = 1;
  const terrain = battleState ? battleState.terrain : null;
  if(terrain){
    if(terrain.type==='grassy' && move.type==='plante') terrainMult *= 1.3;
    else if(terrain.type==='electric' && move.type==='electrik') terrainMult *= 1.3;
    else if(terrain.type==='psychic' && move.type==='psy') terrainMult *= 1.3;
    else if(terrain.type==='misty' && move.type==='dragon') terrainMult *= 0.5;
  }

  let effectivePower = move.power;
  if(move.lowHpBoost){
    const hpFrac = Math.max(0.001, attacker.hp/attacker.maxHp);
    effectivePower = Math.round(move.power * (1 + (1-hpFrac)*4));
  }
  if(move.highHpBoost){
    const hpFrac = Math.max(0.001, attacker.hp/attacker.maxHp);
    effectivePower = Math.max(1, Math.round(move.power * hpFrac));
  }
  if(move.facadeBoost && attacker.status) effectivePower *= 2;
  if(move.escalate) effectivePower *= Math.pow(2, attacker.streak||0);
  if(move.echoed) effectivePower = Math.min(200, move.power*(1+(attacker.streak||0)));
  if(move.targetHpPower) effectivePower = Math.max(1, Math.floor(move.targetHpPower*defender.hp/defender.maxHp));
  if(move.boostPower){
    const raised = ['atk','def','spa','spd','spe','acc','eva'].reduce((a,k)=>a+Math.max(0,attacker.stages[k]||0),0);
    effectivePower = move.power + move.boostPower*raised;
  }
  if(move.punishmentPower){
    const raised = ['atk','def','spa','spd','spe','acc','eva'].reduce((a,k)=>a+Math.max(0,defender.stages[k]||0),0);
    effectivePower = Math.min(200, 60+20*raised);
  }
  if(move.hitsPower) effectivePower = Math.min(350, 50+50*(attacker.hitsTaken||0));
  if(move.powerChance && Math.random()<move.powerChance) effectivePower *= 2;
  if(move.roundBoost && battleState && battleState.roundUsed) effectivePower *= 2;
  if(move.fusion && battleState && battleState.fusionUsed && battleState.fusionUsed!==move.fusion) effectivePower *= 2;
  if(move.ppPower){
    const list = attacker.moveObjs || attacker.moves || [];
    const idx = list.indexOf(move);
    const left = (attacker.ppCur && idx>=0) ? attacker.ppCur[idx] : 0;
    effectivePower = [200,80,60,50,40][Math.max(0,Math.min(4,left))];
  }
  if(move.weightPower){
    const wu = weightKg(attacker), wt = weightKg(defender);
    if(move.weightPower==='heavy'){ const r = wu/wt; effectivePower = r>=5?120:r>=4?100:r>=3?80:r>=2?60:40; }
    else effectivePower = wt>=200?120:wt>=100?100:wt>=50?80:wt>=25?60:wt>=10?40:20;
  }
  if(attacker.helped) effectivePower *= 1.5;
  if(move.powerIf){
    const terr = battleState && battleState.terrain ? battleState.terrain.type : null;
    const cond = {
      targetStatus: !!defender.status, targetPoisoned: defender.status==='poison', targetParalyzed: defender.status==='paralysie',
      targetAsleep: defender.status==='sommeil', targetHalfHp: defender.hp <= defender.maxHp/2, userNoItem: !attacker.heldItem,
      targetDynamaxed: !!defender.dynamaxed, electricTerrain: terr==='electric', mistyTerrain: terr==='misty',
      userFirst: !!attacker.movedFirst, userHit: !!attacker.hitThisTurn,
      psychicTerrain: terr==='psychic', gravity: !!(battleState && battleState.gravityTurns>0),
      userLastFailed: !!attacker.prevMoveFailed, userStatLowered: !!attacker.loweredThisTurn,
      allyFainted: (()=>{ if(!battleState||!battleState.faintTurn) return false; const al = locateActiveSlot(attacker); return !!(al && battleState.faintTurn[al.side]===(battleState.turnNo||0)-1); })()
    }[move.powerIf];
    if(cond) effectivePower *= (move.powerMult || 2);
  }
  if(move.speedPower){
    const us = Math.max(1, effectiveSpeed(attacker)), them = Math.max(1, effectiveSpeed(defender));
    if(move.speedPower==='gyro') effectivePower = Math.min(150, Math.floor(25*them/us)+1);
    else { const r = us/them; effectivePower = r>=4 ? 150 : r>=3 ? 120 : r>=2 ? 80 : r>=1 ? 60 : 40; }
  }
  if(move.variablePower){
    effectivePower = 30 + Math.floor(Math.random()*61);
  }
  const base = ((2*LEVEL/5+2) * effectivePower * (atkStat/defStat)) / 50 + 2;
  const dmg = Math.max(1, Math.round(base * stab * eff * variance * burnPenalty * critMult * abilityMult * weatherMult * terrainMult));
  return { dmg, eff, crit };
}

// Vitesse réelle d'un combattant pour déterminer l'ordre de jeu (stages, statut, talents, objets, météo).
function effectiveSpeed(c){
  let spe = c.stats.spe * statMultiplier(c.stages.spe);
  if(c.status && c.ability==='Pied Véloce') spe *= 1.5;
  else if(c.status==='paralysie') spe *= 0.5;
  if(c.heldItem==='mouchoirChoix') spe *= 1.5;
  if(battleState && battleState.tailwind){ const tl = locateActiveSlot(c); if(tl && battleState.tailwind[tl.side]>0) spe *= 2; }
  if(battleState && battleState.pledgeFx){ const pl = locateActiveSlot(c); if(pl && battleState.pledgeFx[pl.side].swamp>0) spe *= 0.25; }
  if(protoBoostStat(c)==='spe') spe *= 1.5;
  const weather = weatherNullified() ? null : (battleState ? battleState.weather : null);
  if(weather){
    if(weather.type==='soleil' && c.ability==='Chlorophylle') spe *= 2;
    if(weather.type==='pluie' && c.ability==='Glissade') spe *= 2;
    if(weather.type==='sable' && c.ability==='Baigne Sable') spe *= 2;
  }
  return spe;
}
