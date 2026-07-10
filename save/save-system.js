/* ==== save/save-system.js (généré depuis index.html) ==== */
const SAVE_KEY_PREFIX = 'draftArenaSave_';
function slotKey(slot){ return SAVE_KEY_PREFIX + slot; }
const BEST_FLOOR_FACILE_KEY = 'draftArenaBestFloorFacile';
const BEST_FLOOR_NORMAL_KEY = 'draftArenaBestFloorNormal';
const BEST_FLOOR_DIFFICILE_KEY = 'draftArenaBestFloorDifficile';
function bestFloorKeyFor(diff){
  return diff==='difficile' ? BEST_FLOOR_DIFFICILE_KEY : (diff==='facile' ? BEST_FLOOR_FACILE_KEY : BEST_FLOOR_NORMAL_KEY);
}
(function loadBestFloors(){
  try {
    bestFloorFacile = parseInt(localStorage.getItem(BEST_FLOOR_FACILE_KEY), 10) || 1;
    bestFloorNormal = parseInt(localStorage.getItem(BEST_FLOOR_NORMAL_KEY), 10) || 1;
    bestFloorDifficile = parseInt(localStorage.getItem(BEST_FLOOR_DIFFICILE_KEY), 10) || 1;
  } catch(e){}
})();
const BADGES_FACILE_KEY = 'draftArenaBadgesFacile';
const BADGES_NORMAL_KEY = 'draftArenaBadgesNormal';
const BADGES_DIFFICILE_KEY = 'draftArenaBadgesDifficile';
function badgeKeyFor(diff){
  return diff==='difficile' ? BADGES_DIFFICILE_KEY : (diff==='facile' ? BADGES_FACILE_KEY : BADGES_NORMAL_KEY);
}
(function loadBadges(){
  try {
    badges.facile = JSON.parse(localStorage.getItem(BADGES_FACILE_KEY)) || [];
    badges.normal = JSON.parse(localStorage.getItem(BADGES_NORMAL_KEY)) || [];
    badges.difficile = JSON.parse(localStorage.getItem(BADGES_DIFFICILE_KEY)) || [];
  } catch(e){}
})();
function currentBestFloor(){
  return difficulty==='difficile' ? bestFloorDifficile : (difficulty==='facile' ? bestFloorFacile : bestFloorNormal);
}
function updateBestFloor(floor){
  if(floor>currentBestFloor()){
    if(difficulty==='difficile') bestFloorDifficile = floor;
    else if(difficulty==='facile') bestFloorFacile = floor;
    else bestFloorNormal = floor;
    try { localStorage.setItem(bestFloorKeyFor(difficulty), String(floor)); } catch(e){}
  }
}
function saveGame(){
  try {
    localStorage.setItem(slotKey(currentSlot), JSON.stringify({ team, towerFloor, difficulty, money, bag, pcBox, savedAt: Date.now() }));
  } catch(e){ console.error('Sauvegarde impossible', e); }
}
function loadGame(slot){
  try {
    const raw = localStorage.getItem(slotKey(slot));
    if(!raw) return false;
    const data = JSON.parse(raw);
    team = data.team;
    team.forEach(m=>{
      const sp = speciesOf(m);
      m.computedStats = calcStats(sp.base, m.ivs, m.evs, m.nature);
      if(m.heldItem===undefined) m.heldItem = null;
    });
    towerFloor = data.towerFloor || 1;
    difficulty = data.difficulty || 'facile';
    money = typeof data.money==='number' ? data.money : 100;
    bag = data.bag || {};
    pcBox = data.pcBox || [null,null,null,null,null,null];
    pcBox.forEach(m=>{
      if(m){
        const sp = speciesOf(m);
        m.computedStats = calcStats(sp.base, m.ivs, m.evs, m.nature);
        if(m.heldItem===undefined) m.heldItem = null;
      }
    });
    currentSlot = slot;
    return true;
  } catch(e){ console.error('Chargement impossible', e); return false; }
}
function getSlotInfo(slot){
  try {
    const raw = localStorage.getItem(slotKey(slot));
    if(!raw) return null;
    const data = JSON.parse(raw);
    return {
      floor: data.towerFloor || 1,
      difficulty: data.difficulty || 'facile',
      teamCount: (data.team||[]).length,
      savedAt: data.savedAt || null
    };
  } catch(e){ return null; }
}
function deleteSlot(slot){
  try { localStorage.removeItem(slotKey(slot)); } catch(e){}
}
function hasSave(){
  for(let i=1;i<=5;i++){ if(getSlotInfo(i)) return true; }
  return false;
}


/* =================== UTILS =================== */
