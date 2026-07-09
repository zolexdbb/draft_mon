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

function chooseFoeMove(foe, player){
  if(foe.chargingMove) return foe.chargingMove;
  let moves = foe.disabledMove ? foe.moveObjs.filter(mv=>mv.name!==foe.disabledMove.name) : foe.moveObjs;
  if(foe.lockedMove) moves = foe.moveObjs.filter(mv=>mv.name===foe.lockedMove.name);
  if(moves.length===0) moves = foe.moveObjs;
  // Filtre par PP restants : plus de PP sur une capacité = elle n'est plus utilisable
  if(foe.ppCur){
    const withPP = moves.filter(mv => (foe.ppCur[foe.moveObjs.indexOf(mv)]||0) > 0);
    if(withPP.length > 0) moves = withPP;
    else return STRUGGLE_MOVE;
  }
  const hpRatioFoe = foe.hp / foe.maxHp;
  const hpRatioPlayer = player.hp / player.maxHp;
  const foeAtkEff = foe.stats.atk * statMultiplier(foe.stages.atk||0);
  const foeSpaEff = foe.stats.spa * statMultiplier(foe.stages.spa||0);

  const scored = moves.map(mv => {
    let score = 1;

    if(mv.fixedDamage){ return {mv, score: getMult(mv.type, player.types)>0 ? 8 : 0}; }

    if(mv.cat === 'status'){
      const eff = mv.effect||{};
      // Soigner : priorité haute si PV < 40%
      if(eff.heal){
        score = hpRatioFoe < 0.4 ? 50 - hpRatioFoe*80 : (hpRatioFoe < 0.7 ? 8 : 1);
      }
      // Statut adverse : utile seulement si l'adversaire n'en a pas et qu'il a encore beaucoup de PV
      else if(eff.status){
        if(eff.status === 'confusion'){
          score = player.confuseCounter > 0 ? 1 : (hpRatioPlayer > 0.4 ? 12 : 4);
        } else {
          score = player.status ? 1 : (hpRatioPlayer > 0.3 ? 16 : 3);
        }
      }
      // Boost perso : bon seulement si boost faible et PV corrects
      else if(eff.selfBoost){
        const stat = eff.selfBoost[0].stat;
        const cur = foe.stages[stat]||0;
        score = cur >= 3 ? 1 : (hpRatioFoe > 0.5 ? 14 : 3);
      }
      // Débuff adverse
      else if(eff.foeBoost){
        const stat = eff.foeBoost[0].stat;
        const cur = player.stages[stat]||0;
        score = cur <= -3 ? 1 : 10;
      }
      return {mv, score};
    }

    // Attaque offensive
    const eff = getMult(mv.type, player.types);
    if(eff === 0) return {mv, score:0};

    // Efficacité de type = levier principal
    score = 10 * eff;

    // STAB
    if(foe.types.includes(mv.type)) score *= 1.4;

    // Préférer le bon stat d'attaque
    const isPhys = mv.cat === 'phys';
    if(isPhys && foeAtkEff > foeSpaEff*1.2) score *= 1.3;
    if(!isPhys && foeSpaEff > foeAtkEff*1.2) score *= 1.3;

    // Pondérer par la puissance
    score *= (mv.power / 55);

    // Éviter les attaques à recul si PV bas
    if(mv.recoil && hpRatioFoe < 0.3) score *= 0.4;

    return {mv, score};
  });

  const valid = scored.filter(s => s.score > 0);
  let chosen;
  if(valid.length === 0){
    chosen = rand(moves);
  } else {
    // Sélection pondérée (pas toujours le meilleur, mais biaisé)
    const total = valid.reduce((a,s)=>a+s.score,0);
    let r = Math.random()*total;
    chosen = valid[valid.length-1].mv;
    for(const s of valid){ r-=s.score; if(r<=0){ chosen = s.mv; break; } }
  }
  if(foe.ppCur){
    const idx = foe.moveObjs.indexOf(chosen);
    if(idx>=0 && foe.ppCur[idx]>0) foe.ppCur[idx]--;
  }
  return chosen;
}

/* =================== BATTLE =================== */
