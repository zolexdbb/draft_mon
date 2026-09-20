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
function rollCrit(attacker, defender){
  if(defender.ability==='Coque Armure' || defender.ability==='Armurbaston') return false;
  if(attacker.ability==='Sans Pitié' && defender.status==='poison') return true;
  let chance = CRIT_CHANCE;
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
function moveEffectiveness(move, defTypes, attacker){
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
  const crit = rollCrit(attacker, defender);
  const atkBase = move.useDefenseForAtk ? attacker.stats.def : (move.cat==='phys' ? attacker.stats.atk : attacker.stats.spa);
  const defBase = move.cat==='phys' ? defender.stats.def : defender.stats.spd;
  let atkStage = move.useDefenseForAtk ? attacker.stages.def : (move.cat==='phys' ? attacker.stages.atk : attacker.stages.spa);
  let defStage = move.cat==='phys' ? defender.stages.def : defender.stages.spd;
  if(crit){ atkStage = Math.max(0, atkStage); defStage = Math.min(0, defStage); }
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
  const eff = moveEffectiveness(move, defTypes, attacker);
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
  if(attacker.ability==='Poing de Fer' && move.name.includes('Poing')) abilityMult *= 1.2;
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
  if(protoBoostStat(c)==='spe') spe *= 1.5;
  const weather = weatherNullified() ? null : (battleState ? battleState.weather : null);
  if(weather){
    if(weather.type==='soleil' && c.ability==='Chlorophylle') spe *= 2;
    if(weather.type==='pluie' && c.ability==='Glissade') spe *= 2;
    if(weather.type==='sable' && c.ability==='Baigne Sable') spe *= 2;
  }
  return spe;
}
