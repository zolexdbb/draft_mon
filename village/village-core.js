/* ==== village/village-core.js (généré depuis index.html) ==== */
function renderVillage(reward){
  document.getElementById('villageReward').textContent = reward ? `+${reward} 💰 gagnés en battant le Boss !` : '';
  document.getElementById('villageMoney').textContent = `💰 ${money}`;
  document.getElementById('villagePanelContent').innerHTML = '';
  ranchChoices = null;
  ranchRecruited = false;
  saveGame();
}
function setVillageMsg(text){
  let el = document.getElementById('villageMsg');
  if(el) el.textContent = text;
}
function refreshVillageMoney(){
  document.getElementById('villageMoney').textContent = `💰 ${money}`;
}

