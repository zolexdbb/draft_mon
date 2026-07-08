/* ==== draft/draft-facile.js (généré depuis index.html) ==== */
function buildFacileCandidates(excludedLineIds){
  const candidates = [];
  LINES.forEach(line=>{
    if(excludedLineIds.includes(line.id)) return;
    const w = lineWeight(line);
    if(line.branches && line.branches.length){
      line.branches.forEach((b,bi)=>{
        candidates.push({lineId:line.id, stage:line.stages.length-1, branch:bi, w});
      });
    } else {
      candidates.push({lineId:line.id, stage:line.stages.length-1, branch:null, w});
    }
  });
  return candidates;
}
const ALL_FACILE_CANDIDATES = buildFacileCandidates([]);
const TOTAL_FACILE_WEIGHT = ALL_FACILE_CANDIDATES.reduce((a,c)=>a+c.w,0);
function facileAppearanceRate(w){
  return (w/TOTAL_FACILE_WEIGHT*100);
}
// Movepool progressif : le stade final débloque le pool complet, les stades précoces n'ont que les attaques les plus faibles.
function autoBuildMember(lineId, stage, branch){
  const line = lineOf(lineId);
  const sp = branch!==null && branch!==undefined ? line.branches[branch] : line.stages[stage];
  const abilities = sp.abilities || line.abilities;
  const ivs = {hp:31,atk:31,def:31,spa:31,spd:31,spe:31};
  const isPhysical = sp.base.atk >= sp.base.spa;
  const primary = isPhysical ? 'atk' : 'spa';
  const opposite = isPhysical ? 'spa' : 'atk';
  const evs = {hp:4,atk:0,def:0,spa:0,spd:0,spe:252};
  evs[primary] = 252;
  let nature = NATURES.find(n=>n.plus===primary && n.minus===opposite);
  if(!nature) nature = NATURES.find(n=>n.plus===primary) || NATURES[0];
  const member = {
    lineId, stage, branch: (branch!==undefined ? branch : null),
    nature, ivs, evs,
    ability: abilities[0],
    moves:[null,null,null,null],
    heldItem: null,
    unownForm: sp.name==='Zarbi' ? pickRandomZarbiForm() : null
  };
  const movepool = movepoolFor(member);
  member.moves = pickSmartMoves(movepool, sp, 5);
  return member;
}

/* =================== DRAFT ===================== */
