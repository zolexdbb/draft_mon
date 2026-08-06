/* ==== Écran central du Village (affiché après une victoire de Boss) : argent, badge éventuel,
   apparition aléatoire du Marchand Itinérant, et petites animations de Pokémon qui se promènent. ==== */
// Initialise l'écran du Village à l'arrivée (après un Boss) : récompense, badge, tirage du Marchand.
function renderVillage(reward, newBadgeType){
  document.getElementById('villageReward').textContent = reward ? `+${reward} 💰 gagnés en battant le Boss !` : '';
  const badgeEl = document.getElementById('villageBadge');
  if(badgeEl){
    badgeEl.innerHTML = newBadgeType ? `🎖️ Nouveau Badge obtenu : ${TYPE_EMOJI[newBadgeType]} ${typeDisplayName(newBadgeType)} !` : '';
  }
  document.getElementById('villageMoney').textContent = `💰 ${money}`;
  document.getElementById('villagePanelContent').innerHTML = '';
  ranchChoices = null;
  ranchRecruited = false;
  merchantPresent = Math.random() < MERCHANT_SPAWN_RATE;
  document.getElementById('villageMerchantBtn').classList.toggle('hidden', !merchantPresent);
  renderVillageRoamers();
  saveGame();
}
// Fait se promener 1 à 2 Pokémon de l'équipe sur la carte du Village (purement décoratif).
function renderVillageRoamers(){
  const wrap = document.getElementById('villageRoamers');
  if(!wrap) return;
  wrap.innerHTML = '';
  const alive = team.filter(m=>m.hp>0 || m.hp===undefined);
  if(alive.length===0) return;
  const count = Math.min(alive.length, Math.random()<0.5 ? 1 : 2);
  const picks = shuffle([...alive]).slice(0, count);
  picks.forEach((m,i)=>{
    const sp = speciesOf(m);
    const el = document.createElement('div');
    el.className = 'village-roamer';
    const top = 58 + Math.random()*22;
    const left = 8 + Math.random()*20;
    const duration = 8 + Math.random()*5;
    const delay = -Math.random()*duration;
    el.style.cssText = `top:${top}%;left:${left}%;animation-duration:${duration}s;animation-delay:${delay}s;`;
    el.innerHTML = getSpriteHTML(sp.name, m.unownForm, 'front', true);
    wrap.appendChild(el);
  });
}
function setVillageMsg(text){
  let el = document.getElementById('villageMsg');
  if(el) el.textContent = text;
}
function refreshVillageMoney(){
  document.getElementById('villageMoney').textContent = `💰 ${money}`;
}

