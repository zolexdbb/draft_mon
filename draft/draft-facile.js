/* ==== Mode Facile : ne propose que les formes entièrement évoluées (dernier stade, ou chaque
   branche pour une lignée à embranchements), déjà prêtes à combattre (IV/EV/nature/attaques
   choisis automatiquement par autoBuildMember). ==== */
// Liste les formes finales de toutes les lignées (hors déjà draftées) comme candidats — une entrée par branche si la lignée en a.
function buildFacileCandidates(excludedLineIds){
  const candidates = [];
  LINES.forEach(line=>{
    if(excludedLineIds.includes(line.id)) return;
    const w = lineWeight(line);
    if(line.branches && line.branches.length){
      // Une branche peut définir son propre rarityWeight pour être bien plus rare que le reste de sa
      // lignée (ex. Éthernatos Infinimax, plus rare qu'un légendaire normal) ; sinon elle hérite du
      // poids habituel de la lignée, comme les autres branches.
      line.branches.forEach((b,bi)=>{
        candidates.push({lineId:line.id, stage:line.stages.length-1, branch:bi, w: b.rarityWeight!==undefined ? b.rarityWeight : w});
      });
    } else {
      candidates.push({lineId:line.id, stage:line.stages.length-1, branch:null, w});
    }
  });
  return candidates;
}
const ALL_FACILE_CANDIDATES = buildFacileCandidates([]);
const TOTAL_FACILE_WEIGHT = ALL_FACILE_CANDIDATES.reduce((a,c)=>a+c.w,0);
// Taux d'apparition affiché sur les cartes en mode Facile.
function facileAppearanceRate(w){
  return (w/TOTAL_FACILE_WEIGHT*100);
}
// Construit un membre "prêt à combattre" pour le mode Facile : IV max, EV tout misés sur la
// meilleure stat offensive + Vitesse (max par stat 32, max au total 66), nature assortie, et les 4
// meilleures attaques (pickSmartMoves).
function autoBuildMember(lineId, stage, branch){
  const line = lineOf(lineId);
  const sp = branch!==null && branch!==undefined ? line.branches[branch] : line.stages[stage];
  const abilities = sp.abilities || line.abilities;
  const ivs = {hp:31,atk:31,def:31,spa:31,spd:31,spe:31};
  const isPhysical = sp.base.atk >= sp.base.spa;
  const primary = isPhysical ? 'atk' : 'spa';
  const opposite = isPhysical ? 'spa' : 'atk';
  const evs = {hp:EV_TOTAL_MAX-EV_MAX*2,atk:0,def:0,spa:0,spd:0,spe:EV_MAX};
  evs[primary] = EV_MAX;
  let nature = NATURES.find(n=>n.plus===primary && n.minus===opposite);
  if(!nature) nature = NATURES.find(n=>n.plus===primary) || NATURES[0];
  const member = {
    lineId, stage, branch: (branch!==undefined ? branch : null),
    nature, ivs, evs,
    ability: abilities[0],
    moves:[null,null,null,null],
    heldItem: null,
    unownForm: pickFormSprite(sp.name),
    shiny: false
  };
  const movepool = movepoolFor(member);
  member.moves = pickSmartMoves(movepool, sp, 5);
  return member;
}
