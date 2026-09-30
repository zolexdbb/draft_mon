/* ==== Calcul des statistiques finales d'un Pokémon (niveau fixe 50) à partir de ses stats de
   base, IV, EV et nature — formule officielle des jeux principaux, avec des EV simplifiés en base
   32 (au lieu de 0-252 par pas de 4) pour être plus lisibles, sans changer le résultat final. ==== */
const STAT_LABEL = {hp:'PV', atk:'Atq', def:'Déf', spa:'AtqSp', spd:'DéfSp', spe:'Vit', acc:'Précision'};

// Raccourci utilisé dans pokemon/gen*.js pour écrire les stats de base d'une espèce.
function st(hp,atk,def,spa,spd,spe){ return {hp,atk,def,spa,spd,spe}; }

const LEVEL = 50;
// Un EV va maintenant de 0 à 32 (au lieu de 0-252 par pas de 4) : chaque point vaut simplement plus
// (jusqu'à 63 points de stat à 32, comme un EV officiel à 252/4=63). Un plafond global de 66 répartis
// entre les 6 stats reste en place (proportionnel aux 510 des jeux officiels : 510×32/252≈65).
const EV_MAX = 32;
const EV_TOTAL_MAX = 66;
const EV_BONUS_MAX = 63; // équivalent à floor(252/4) dans les jeux officiels, pour un résultat final identique à 32 EV.
function evBonus(ev){
  const clamped = Math.max(0, Math.min(EV_MAX, ev||0));
  return Math.min(EV_BONUS_MAX, Math.round(clamped * EV_BONUS_MAX / EV_MAX));
}
// Calcule les 6 statistiques finales d'un membre d'équipe à partir de ses stats de base + IV/EV/nature.
// `level` est optionnel (LEVEL=50 par défaut, toujours le cas pour l'équipe du joueur) : la Tour s'en
// sert pour faire monter le niveau des adversaires par palier (voir foeLevelFor dans combat/tower.js).
function calcStats(base, ivs, evs, nature, level){
  level = level || LEVEL;
  const stats = {};
  ['hp','atk','def','spa','spd','spe'].forEach(stat=>{
    const iv = ivs[stat];
    const core = Math.floor((2*base[stat] + iv + evBonus(evs[stat])) * level / 100);
    if(stat==='hp'){ stats.hp = core + level + 10; return; }
    let mod = 1;
    if(nature.plus===stat) mod = 1.1;
    if(nature.minus===stat) mod = 0.9;
    stats[stat] = Math.floor((core+5)*mod);
  });
  return stats;
}

