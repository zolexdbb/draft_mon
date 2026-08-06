/* ==== Fonctions centrales pour résoudre un membre d'équipe (lineId/stage/branch/heldItem)
   vers ses données réelles (nom, types, stats de base, talents, movepool). Utilisées partout :
   combat, draft, éditeur, dex... ==== */
// Retrouve la lignée (pokemon/gen*.js) à partir de son id.
function lineOf(id){ return LINES.find(l=>l.id===id); }
// Résout un membre vers son espèce actuelle : gère stage vs branche, puis les formes liées à un objet tenu (Plaques, Mémoires, Méga-Pierres...).
function speciesOf(member){
  const line = lineOf(member.lineId);
  const base = (line.branches && member.branch!==undefined && member.branch!==null) ? line.branches[member.branch] : line.stages[member.stage];
  if(base.forms && member.heldItem && base.forms[member.heldItem]) return base.forms[member.heldItem];
  return base;
}
// Talents disponibles pour un membre (ceux du stade/branche s'ils existent, sinon ceux de la lignée).
function abilitiesFor(member){
  const line = lineOf(member.lineId);
  const sp = speciesOf(member);
  return sp.abilities || line.abilities;
}
// Movepool disponible pour un membre : pool complet + attaques exclusives à la branche pour une forme évoluée, sinon pool progressif selon le stade (movepoolForStage, dans draft/draft-core.js).
function movepoolFor(member){
  const line = lineOf(member.lineId);
  if(line.branches && member.branch!==undefined && member.branch!==null){
    const branch = line.branches[member.branch];
    const sorted = [...line.moveIds].sort((a,b)=>MOVES[a].power-MOVES[b].power);
    const statusIds = sorted.filter(id=>MOVES[id].cat==='status');
    const dmgIds = sorted.filter(id=>MOVES[id].cat!=='status');
    return [...dmgIds, ...(branch.extraMoveIds||[]), ...statusIds];
  }
  return movepoolForStage(line, member.stage);
}
