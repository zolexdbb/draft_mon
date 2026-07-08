/* ==== core/type-chart.js (généré depuis index.html) ==== */
const TYPE_EMOJI = {
  normal:'⭐',feu:'🔥',eau:'💧',plante:'🌿',electrik:'⚡',vol:'🪶',poison:'☠️',sol:'⛰️',
  insecte:'🐛',combat:'🥊',glace:'🧊',psy:'🔮',fantome:'👻',roche:'🪨',dragon:'🐲',
  acier:'⚙️',tenebres:'🌑'
};
const TYPE_CHART = {
  normal:{roche:.5,fantome:0,acier:.5},
  feu:{plante:2,glace:2,insecte:2,feu:.5,eau:.5,roche:.5,dragon:.5,acier:2},
  eau:{feu:2,sol:2,roche:2,eau:.5,plante:.5,dragon:.5},
  electrik:{eau:2,vol:2,electrik:.5,plante:.5,dragon:.5,sol:0},
  plante:{eau:2,sol:2,roche:2,feu:.5,plante:.5,vol:.5,poison:.5,insecte:.5,dragon:.5,acier:.5},
  glace:{plante:2,sol:2,vol:2,dragon:2,feu:.5,eau:.5,glace:.5,acier:.5},
  combat:{normal:2,glace:2,roche:2,poison:.5,vol:.5,psy:.5,insecte:.5,fantome:0,acier:2,tenebres:2},
  poison:{plante:2,poison:.5,sol:.5,roche:.5,fantome:.5,acier:0},
  sol:{feu:2,electrik:2,poison:2,roche:2,plante:.5,insecte:.5,vol:0,acier:2},
  vol:{plante:2,insecte:2,combat:2,electrik:.5,roche:.5,acier:.5},
  psy:{combat:2,poison:2,psy:.5,acier:.5,tenebres:0},
  insecte:{plante:2,psy:2,tenebres:2,feu:.5,combat:.5,poison:.5,vol:.5,fantome:.5,acier:.5},
  roche:{feu:2,glace:2,vol:2,insecte:2,combat:.5,sol:.5,acier:.5},
  fantome:{psy:2,fantome:2,normal:0,tenebres:.5,acier:.5},
  dragon:{dragon:2,acier:.5},
  acier:{glace:2,roche:2,feu:.5,eau:.5,electrik:.5,acier:.5},
  tenebres:{psy:2,fantome:2,combat:.5,tenebres:.5}
};
function getMult(atkType, defTypes){
  let m = 1;
  defTypes.forEach(dt=>{
    const v = (TYPE_CHART[atkType] && TYPE_CHART[atkType][dt] !== undefined) ? TYPE_CHART[atkType][dt] : 1;
    m *= v;
  });
  return m;
}

/* =================== ATTAQUES =================== */
