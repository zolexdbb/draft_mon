/* ==== draft/draft-classic.js (généré depuis index.html) ==== */
function buildDraftCandidates(excludedLineIds){
  const candidates = [];
  LINES.forEach(line=>{
    if(excludedLineIds.includes(line.id)) return;
    line.stages.forEach((s,idx)=>{
      candidates.push({lineId:line.id, stage:idx, w: lineWeight(line)*stageMultiplier(idx)});
    });
  });
  return candidates;
}
const ALL_CANDIDATES = buildDraftCandidates([]);
const TOTAL_CANDIDATE_WEIGHT = ALL_CANDIDATES.reduce((a,c)=>a+c.w,0);
function appearanceRate(line, stageIdx){
  const w = lineWeight(line)*stageMultiplier(stageIdx);
  return (w/TOTAL_CANDIDATE_WEIGHT*100);
}
// Mode Facile : uniquement les formes entièrement évoluées (dernier stade, ou chaque branche si la lignée en a)
