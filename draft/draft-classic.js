/* ==== Candidats du mode Classic/Normal/Difficile : chaque stade de chaque lignée est un candidat
   de draft séparé (contrairement au mode Facile qui ne propose que les formes finales). ==== */
// Liste tous les stades de toutes les lignées (hors lignées déjà draftées) comme candidats possibles,
// pondérés par rareté, par stade (stageMultiplier) ET par affinité (affinityMultiplier — voir meta/affinity.js).
function buildDraftCandidates(excludedLineIds){
  const candidates = [];
  LINES.forEach(line=>{
    if(excludedLineIds.includes(line.id)) return;
    line.stages.forEach((s,idx)=>{
      candidates.push({lineId:line.id, stage:idx, w: lineWeight(line)*stageMultiplier(idx)*affinityMultiplier(line.id)});
    });
  });
  return candidates;
}
// TOTAL_CANDIDATE_WEIGHT sert de dénominateur au taux d'apparition affiché (appearanceRate) ; comme
// l'affinité change en cours de jeu (via le Professeur), ce n'est plus une constante figée au
// chargement mais recalculé à chaque changement d'affinité (voir recalcCandidateWeight).
let TOTAL_CANDIDATE_WEIGHT = 0;
function recalcCandidateWeight(){
  TOTAL_CANDIDATE_WEIGHT = buildDraftCandidates([]).reduce((a,c)=>a+c.w,0);
}
recalcCandidateWeight();
// Taux d'apparition affiché sur les cartes de draft (% de chance que ce stade précis sorte).
function appearanceRate(line, stageIdx){
  const w = lineWeight(line)*stageMultiplier(stageIdx)*affinityMultiplier(line.id);
  return (w/TOTAL_CANDIDATE_WEIGHT*100);
}
