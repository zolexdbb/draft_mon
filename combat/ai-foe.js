/* ==== combat/ai-foe.js (généré depuis index.html) ==== */
function pickSmartMoves(movepool, sp, floor){
  // Trier les attaques offensives par puissance, garder 1-2 statuts utiles
  const damaging = movepool.filter(id => MOVES[id].cat !== 'status' && MOVES[id].power > 0);
  const statusMoves = movepool.filter(id => MOVES[id].cat === 'status');
  // Préférer STAB
  const stab = damaging.filter(id => sp.types.includes(MOVES[id].type));
  const nonStab = damaging.filter(id => !sp.types.includes(MOVES[id].type));
  const sortedStab = stab.sort((a,b)=>MOVES[b].power-MOVES[a].power);
  const sortedNonStab = nonStab.sort((a,b)=>MOVES[b].power-MOVES[a].power);
  // Aux étages 4+, l'adversaire prend 2 STAB + 1 couverture + 1 statut
  const statusCount = floor >= 5 ? 1 : 0;
  const picked = [...sortedStab.slice(0,2), ...sortedNonStab.slice(0,2-Math.min(2,sortedStab.length)+2)];
  const usefulStatus = statusMoves.filter(id => {
    const eff = MOVES[id].effect;
    return eff && (eff.status || eff.heal || eff.selfBoost);
  });
  const finalMoves = [...new Set([...picked, ...usefulStatus.slice(0,statusCount)])].slice(0,4);
  // Compléter si besoin
  while(finalMoves.length < 4 && movepool.length > finalMoves.length){
    const remaining = movepool.filter(id => !finalMoves.includes(id));
    if(remaining.length === 0) break;
    finalMoves.push(remaining[0]);
  }
  return finalMoves.slice(0,4);
}

// IA de Maître de Type : au KO, envoie le meilleur contre plutôt que le premier en vie.
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

// Score un coup contre une cible précise (utilisé pour choisir la meilleure paire coup/cible
// en combat double, où l'IA a le choix entre 1 ou 2 adversaires vivants).
function scoreFoeMoveVsTarget(foe, mv, target){
  if(mv.fixedDamage){ return getMult(mv.type, target.types)>0 ? 8 : 0; }

  if(mv.cat === 'status'){
    const eff = mv.effect||{};
    const hpRatioFoe = foe.hp / foe.maxHp;
    // Soigner : priorité haute si PV < 40%
    if(eff.heal){
      return hpRatioFoe < 0.4 ? 50 - hpRatioFoe*80 : (hpRatioFoe < 0.7 ? 8 : 1);
    }
    // Statut adverse : utile seulement si la cible n'en a pas et qu'elle a encore beaucoup de PV
    if(eff.status){
      const hpRatioTarget = target.hp / target.maxHp;
      if(eff.status === 'confusion'){
        return target.confuseCounter > 0 ? 1 : (hpRatioTarget > 0.4 ? 12 : 4);
      }
      return target.status ? 1 : (hpRatioTarget > 0.3 ? 16 : 3);
    }
    // Boost perso : bon seulement si boost faible et PV corrects
    if(eff.selfBoost){
      const stat = eff.selfBoost[0].stat;
      const cur = foe.stages[stat]||0;
      return cur >= 3 ? 1 : (hpRatioFoe > 0.5 ? 14 : 3);
    }
    // Débuff adverse
    if(eff.foeBoost){
      const stat = eff.foeBoost[0].stat;
      const cur = target.stages[stat]||0;
      return cur <= -3 ? 1 : 10;
    }
    return 1;
  }

  // Attaque offensive
  const eff = getMult(mv.type, target.types);
  if(eff === 0) return 0;

  // Efficacité de type = levier principal
  let score = 10 * eff;

  // STAB
  if(foe.types.includes(mv.type)) score *= 1.4;

  // Préférer le bon stat d'attaque
  const foeAtkEff = foe.stats.atk * statMultiplier(foe.stages.atk||0);
  const foeSpaEff = foe.stats.spa * statMultiplier(foe.stages.spa||0);
  const isPhys = mv.cat === 'phys';
  if(isPhys && foeAtkEff > foeSpaEff*1.2) score *= 1.3;
  if(!isPhys && foeSpaEff > foeAtkEff*1.2) score *= 1.3;

  // Pondérer par la puissance
  score *= (mv.power / 55);

  // Éviter les attaques à recul si PV bas
  if(mv.recoil && (foe.hp/foe.maxHp) < 0.3) score *= 0.4;

  return score;
}

// possibleTargets : 1 cible en solo, jusqu'à 2 en combat double. Retourne {move, target}.
function chooseFoeMove(foe, possibleTargets, excellent){
  let moves = foe.disabledMove ? foe.moveObjs.filter(mv=>mv.name!==foe.disabledMove.name) : foe.moveObjs;
  if(foe.lockedMove) moves = foe.moveObjs.filter(mv=>mv.name===foe.lockedMove.name);
  if(moves.length===0) moves = foe.moveObjs;
  // Filtre par PP restants : plus de PP sur une capacité = elle n'est plus utilisable
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
    // IA de Maître de Type : prend toujours le meilleur coup, jamais de choix sous-optimal.
    chosen = valid.reduce((best,s)=> s.score>best.score ? s : best);
  } else {
    // Sélection pondérée (pas toujours le meilleur, mais biaisé)
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

/* =================== BATTLE =================== */
