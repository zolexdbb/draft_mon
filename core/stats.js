/* ==== core/stats.js (généré depuis index.html) ==== */
const STAT_LABEL = {hp:'PV', atk:'Atq', def:'Déf', spa:'AtqSp', spd:'DéfSp', spe:'Vit', acc:'Précision'};

function st(hp,atk,def,spa,spd,spe){ return {hp,atk,def,spa,spd,spe}; }

/* =================== POKÉDEX GÉNÉRATION 1 (151) =================== */
const LEVEL = 50;
function calcStats(base, ivs, evs, nature){
  const stats = {};
  ['hp','atk','def','spa','spd','spe'].forEach(stat=>{
    const iv = ivs[stat], ev = evs[stat];
    const core = Math.floor((2*base[stat] + iv + Math.floor(ev/4)) * LEVEL / 100);
    if(stat==='hp'){ stats.hp = core + LEVEL + 10; return; }
    let mod = 1;
    if(nature.plus===stat) mod = 1.1;
    if(nature.minus===stat) mod = 0.9;
    stats[stat] = Math.floor((core+5)*mod);
  });
  return stats;
}

