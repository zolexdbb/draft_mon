/* ==== combat/damage-calc.js (généré depuis index.html) ==== */
function statMultiplier(stage){
  return stage>=0 ? (2+stage)/2 : 2/(2-stage);
}
function accuracyStageMultiplier(stage){
  const s = Math.max(-6, Math.min(6, stage||0));
  return s>=0 ? (3+s)/3 : 3/(3-s);
}
const CRIT_CHANCE = 1/16;
function rollCrit(attacker, defender){
  if(defender.ability==='Coque Armure' || defender.ability==='Armurbaston') return false;
  if(attacker.ability==='Sans Pitié' && defender.status==='poison') return true;
  let chance = CRIT_CHANCE;
  if(attacker.ability==='Sniper') chance *= 1; // Sniper renforce les dégâts, pas la fréquence
  if(defender.ability==='Écaille Spéciale') chance *= 4;
  if(attacker.critBoost) chance *= 4;
  if(attacker.heldItem==='griffeTranchante') chance *= 2;
  return Math.random() < chance;
}
function weatherNullified(){
  if(!battleState) return false;
  const check = c => c.ability==='Air Lock' || c.ability==='Ciel Gris';
  return [...alivePlayerCombatants(), ...aliveFoeCombatants()].some(check);
}
// Comme getMult, mais gère les coups à double type (Plaquage Volant), les exceptions
// d'efficacité forcée (Cristallisation vs Eau) et le contournement d'immunité (Mille Flèches).
function moveEffectiveness(move, defTypes){
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
    eff *= v;
  });
  return eff;
}
function computeDamage(attacker, move, defender){
  if(move.fixedDamage){
    return { dmg: move.fixedDamage, eff: 1, crit:false };
  }
  const crit = rollCrit(attacker, defender);
  const atkBase = move.cat==='phys' ? attacker.stats.atk : attacker.stats.spa;
  const defBase = move.cat==='phys' ? defender.stats.def : defender.stats.spd;
  let atkStage = move.cat==='phys' ? attacker.stages.atk : attacker.stages.spa;
  let defStage = move.cat==='phys' ? defender.stages.def : defender.stages.spd;
  // Sur un coup critique, les baisses d'Attaque et les hausses de Défense adverses sont ignorées
  if(crit){ atkStage = Math.max(0, atkStage); defStage = Math.min(0, defStage); }
  const atkStat = atkBase * statMultiplier(atkStage) * (attacker.heldItem==='bandeauChoix' && move.cat==='phys' ? 1.5 : (attacker.heldItem==='lunettesChoix' && move.cat==='spec' ? 1.5 : 1));
  const terrainNow = battleState ? battleState.terrain : null;
  const defStat = defBase * statMultiplier(defStage) * (defender.heldItem==='vesteCombat' && move.cat==='spec' ? 1.5 : 1) * (defender.ability==='Robe Feuillue' && terrainNow && terrainNow.type==='grassy' ? 1.5 : 1);
  const atkTypes = attacker.transformedTypes || attacker.types;
  const defTypes = defender.transformedTypes || defender.types;
  const hasStab = atkTypes.includes(move.type) || (move.type2 && atkTypes.includes(move.type2));
  const stab = hasStab ? (attacker.ability==='Adaptabilité' ? 2 : 1.5) : 1;
  const eff = moveEffectiveness(move, defTypes);
  const variance = 0.85 + Math.random()*0.3;
  const burnPenalty = (attacker.status==='brulure' && move.cat==='phys' && attacker.ability!=='Cran') ? 0.5 : 1;
  const critMult = crit ? (attacker.ability==='Sniper' ? 2.25 : 1.5) : 1;

  // Multiplicateurs liés aux talents
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
  if(attacker.ability==='Poing de Fer' && move.name.includes('Poing')) abilityMult *= 1.2;
  if(attacker.ability==='Torche' && move.type==='feu' && attacker.torchActivated) abilityMult *= 1.5;
  if(defender.ability==='Isograisse' && (move.type==='feu'||move.type==='glace')) abilityMult *= 0.5;
  if(defender.ability==='Filtre' && eff>1) abilityMult *= 0.75;
  if(defender.reflectTurns>0 && move.cat==='phys') abilityMult *= 0.5;
  if(defender.lightScreenTurns>0 && move.cat==='spec') abilityMult *= 0.5;
  if(attacker.heldItem==='orbeVie' && move.power>0) abilityMult *= 1.3;
  if(defender.ability==='Fourrure' && move.cat==='phys') abilityMult *= 0.5;
  if(attacker.ability==='Mâchouille' && move.bite) abilityMult *= 1.5;
  if(attacker.ability==='Méga-Lanceur' && move.pulse) abilityMult *= 1.5;
  if(attacker.ability==='Griffe Solide' && move.cat==='phys') abilityMult *= 1.3;
  // Auras de champ : boostent (ou, avec Rupture Aura présente, réduisent) les capacités du type correspondant
  if(battleState){
    const fieldMons = [...alivePlayerCombatants(), ...aliveFoeCombatants()];
    const auraBreak = fieldMons.some(c=>c.ability==='Rupture Aura');
    if(move.type==='tenebres' && fieldMons.some(c=>c.ability==='Aura Sombre')) abilityMult *= auraBreak ? 0.75 : 1.33;
    if(move.type==='fee' && fieldMons.some(c=>c.ability==='Aura Féérique')) abilityMult *= auraBreak ? 0.75 : 1.33;
  }

  // Météo
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

  // Terrain
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
  if(move.variablePower){
    effectivePower = 30 + Math.floor(Math.random()*61); // entre 30 et 90
  }
  const base = ((2*LEVEL/5+2) * effectivePower * (atkStat/defStat)) / 50 + 2;
  const dmg = Math.max(1, Math.round(base * stab * eff * variance * burnPenalty * critMult * abilityMult * weatherMult * terrainMult));
  return { dmg, eff, crit };
}

function effectiveSpeed(c){
  let spe = c.stats.spe * statMultiplier(c.stages.spe);
  if(c.status && c.ability==='Pied Véloce') spe *= 1.5;
  else if(c.status==='paralysie') spe *= 0.5;
  if(c.heldItem==='mouchoirChoix') spe *= 1.5;
  const weather = weatherNullified() ? null : (battleState ? battleState.weather : null);
  if(weather){
    if(weather.type==='soleil' && c.ability==='Chlorophylle') spe *= 2;
    if(weather.type==='pluie' && c.ability==='Glissade') spe *= 2;
    if(weather.type==='sable' && c.ability==='Baigne Sable') spe *= 2;
  }
  return spe;
}

