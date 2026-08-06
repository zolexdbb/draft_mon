/* ==== Candidats du mode Classic/Normal/Difficile : chaque stade de chaque lignée est un candidat
   de draft séparé (contrairement au mode Facile qui ne propose que les formes finales). ==== */
// Liste tous les stades de toutes les lignées (hors lignées déjà draftées) comme candidats possibles, pondérés par rareté ET par stade (stageMultiplier).
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
// Taux d'apparition affiché sur les cartes de draft (% de chance que ce stade précis sorte).
function appearanceRate(line, stageIdx){
  const w = lineWeight(line)*stageMultiplier(stageIdx);
  return (w/TOTAL_CANDIDATE_WEIGHT*100);
}
