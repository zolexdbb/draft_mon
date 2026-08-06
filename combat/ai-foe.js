/* ==== IA des dresseurs adverses : choix des 4 attaques d'un Pokémon généré, et choix du
   coup/de la cible à chaque tour de combat. ==== */
// Sélectionne les 4 attaques d'un Pokémon généré (dresseur/tour) à partir de son movepool complet : privilégie le STAB, ajoute de la couverture, et un peu de statut aux étages avancés.
function pickSmartMoves(movepool, sp, floor){
  const damaging = movepool.filter(id => MOVES[id].cat !== 'status' && MOVES[id].power > 0);
  const statusMoves = movepool.filter(id => MOVES[id].cat === 'status');
  const stab = damaging.filter(id => sp.types.includes(MOVES[id].type));
  const nonStab = damaging.filter(id => !sp.types.includes(MOVES[id].type));
  const sortedStab = stab.sort((a,b)=>MOVES[b].power-MOVES[a].power);
  const sortedNonStab = nonStab.sort((a,b)=>MOVES[b].power-MOVES[a].power);
  const statusCount = floor >= 5 ? 1 : 0;
  const picked = [...sortedStab.slice(0,2), ...sortedNonStab.slice(0,2-Math.min(2,sortedStab.length)+2)];
  const usefulStatus = statusMoves.filter(id => {
    const eff = MOVES[id].effect;
    return eff && (eff.status || eff.heal || eff.selfBoost);
  });
  const finalMoves = [...new Set([...picked, ...usefulStatus.slice(0,statusCount)])].slice(0,4);
  while(finalMoves.length < 4 && movepool.length > finalMoves.length){
    const remaining = movepool.filter(id => !finalMoves.includes(id));
    if(remaining.length === 0) break;
    finalMoves.push(remaining[0]);
  }
  return finalMoves.slice(0,4);
}

// Choisit le meilleur Pokémon de remplacement d'un dresseur adverse au KO (IA "excellente" des Maîtres de Type) : maximise son avantage de type offensif/défensif contre le Pokémon du joueur.
function bestFoeSwitchIdx(foeTeam, player, excludeIdxs){
  excludeIdxs = excludeIdxs || [];
  const alive = foeTeam.map((c,i)=>({c,i})).filter(x=>x.c.hp>0 && !excludeIdxs.includes(x.i));
  if(alive.length===0) return -1;
  const scored = alive.map(({c,i})=>{
    const offense = Math.max(...c.types.map(t=>getMult(t, player.types)));
    const defense = Math.max(...player.types.map(t=>getMult(t, c.types)));
    return { i, score: offense - defense*0.5 };
  });
  return scored.reduce((best,s)=> s.score>best.score ? s : best).i;
}

// Note un coup donné contre une cible donnée (efficacité de type, STAB, stat d'attaque, PV de la cible/du lanceur...) — plus le score est haut, plus l'IA a de chances de le choisir.
function scoreFoeMoveVsTarget(foe, mv, target){
  if(mv.fixedDamage){ return getMult(mv.type, target.types)>0 ? 8 : 0; }

  if(mv.cat === 'status'){
    const eff = mv.effect||{};
    const hpRatioFoe = foe.hp / foe.maxHp;
    if(eff.heal){
      return hpRatioFoe < 0.4 ? 50 - hpRatioFoe*80 : (hpRatioFoe < 0.7 ? 8 : 1);
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

// Point d'entrée appelé chaque tour pour un combattant adverse : filtre les coups jouables (PP, entrave, Choix...), note chaque paire coup/cible via scoreFoeMoveVsTarget, puis choisit le meilleur (Maître de Type) ou tire au sort pondéré (dresseur normal).
function chooseFoeMove(foe, possibleTargets, excellent){
  let moves = foe.disabledMove ? foe.moveObjs.filter(mv=>mv.name!==foe.disabledMove.name) : foe.moveObjs;
  if(foe.lockedMove) moves = foe.moveObjs.filter(mv=>mv.name===foe.lockedMove.name);
  if(moves.length===0) moves = foe.moveObjs;
  if(foe.ppCur){
    const withPP = moves.filter(mv => (foe.ppCur[foe.moveObjs.indexOf(mv)]||0) > 0);
    if(withPP.length > 0) moves = withPP;
    else return { move: STRUGGLE_MOVE, target: possibleTargets[0] };
  }
  if(foe.chargingMove){
    moves = moves.filter(mv=>mv===foe.chargingMove);
    if(moves.length===0) moves = [foe.chargingMove];
  }

  const scored = [];
  moves.forEach(mv=>{
    if(mv.target==='self'){
      scored.push({ mv, target: possibleTargets[0], score: scoreFoeMoveVsTarget(foe, mv, possibleTargets[0]) });
    } else {
      possibleTargets.forEach(t=> scored.push({ mv, target: t, score: scoreFoeMoveVsTarget(foe, mv, t) }));
    }
  });

  const valid = scored.filter(s => s.score > 0);
  let chosen;
  if(valid.length === 0){
    chosen = { mv: rand(moves), target: possibleTargets[0] };
  } else if(excellent){
    chosen = valid.reduce((best,s)=> s.score>best.score ? s : best);
  } else {
    const total = valid.reduce((a,s)=>a+s.score,0);
    let r = Math.random()*total;
    chosen = valid[valid.length-1];
    for(const s of valid){ r-=s.score; if(r<=0){ chosen = s; break; } }
  }
  if(foe.ppCur){
    const idx = foe.moveObjs.indexOf(chosen.mv);
    if(idx>=0 && foe.ppCur[idx]>0) foe.ppCur[idx]--;
  }
  return { move: chosen.mv, target: chosen.target };
}
