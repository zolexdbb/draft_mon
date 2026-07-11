/* ==== pokemon/helpers.js (généré depuis index.html) ==== */
function lineOf(id){ return LINES.find(l=>l.id===id); }
function speciesOf(member){
  const line = lineOf(member.lineId);
  const base = (line.branches && member.branch!==undefined && member.branch!==null) ? line.branches[member.branch] : line.stages[member.stage];
  if(base.forms && member.heldItem && base.forms[member.heldItem]) return base.forms[member.heldItem];
  return base;
}
function abilitiesFor(member){
  const line = lineOf(member.lineId);
  const sp = speciesOf(member);
  return sp.abilities || line.abilities;
}
function movepoolFor(member){
  const line = lineOf(member.lineId);
  if(line.branches && member.branch!==undefined && member.branch!==null){
    // forme évoluée : pool complet + attaques exclusives de la branche
    const branch = line.branches[member.branch];
    const sorted = [...line.moveIds].sort((a,b)=>MOVES[a].power-MOVES[b].power);
    const statusIds = sorted.filter(id=>MOVES[id].cat==='status');
    const dmgIds = sorted.filter(id=>MOVES[id].cat!=='status');
    return [...dmgIds, ...(branch.extraMoveIds||[]), ...statusIds];
  }
  return movepoolForStage(line, member.stage);
}
