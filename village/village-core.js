/* ==== Écran central du Campement (affiché après une victoire de Boss) : argent, badge éventuel,
   apparition aléatoire du Marchand Itinérant, toute l'équipe vivante rassemblée autour du feu de
   camp, et un aperçu des 3 Pokémon sauvages proposés par le Ranch directement dans son enclos. ==== */
// Initialise l'écran du Campement à l'arrivée (après un Boss) : récompense, badge, tirage du Marchand.
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
  ensureRanchChoices();
  renderVillageTeamRing();
  renderVillageRanchPen();
  saveGame();
}
// Les 6 bûches-sièges autour du feu de camp (--vb-x:48%;--vb-y:90% dans index.html) : un anneau
// fixe, une place par emplacement d'équipe — occupée par le pokémon correspondant s'il est vivant,
// ou simplement une bûche vide sinon (jamais de siège qui disparaît/se déplace selon l'équipe).
const VILLAGE_LOG_SEATS = [
  {x:26,y:92},{x:33,y:87},{x:46,y:96},{x:58,y:96},{x:67,y:87},{x:74,y:92}
];
// Dispose toute l'équipe du joueur sur les 6 bûches autour du feu de camp (coordonnées en % du
// plan). Chaque membre vivant occupe toujours la même bûche (son rang dans l'équipe) ; les
// emplacements K.O./vides restent visibles comme de simples bûches inoccupées.
function renderVillageTeamRing(){
  const wrap = document.getElementById('villageTeamRing');
  if(!wrap) return;
  wrap.innerHTML = '';
  VILLAGE_LOG_SEATS.forEach((pos,i)=>{
    const log = document.createElement('div');
    log.className = 'village-log-seat';
    log.style.cssText = `--vb-x:${pos.x}%;--vb-y:${pos.y}%;`;
    wrap.appendChild(log);
    const m = team[i];
    if(!m || !(m.hp>0 || m.hp===undefined)) return;
    const sp = speciesOf(m);
    const el = document.createElement('div');
    el.className = 'village-team-mon';
    el.title = sp.name;
    el.style.cssText = `left:${pos.x}%;top:${pos.y-4}%;animation-delay:${-(i*0.6)}s;`;
    el.innerHTML = getSpriteHTML(sp.name, m.unownForm, 'front', true);
    wrap.appendChild(el);
  });
}
// Génère (une seule fois par visite) les 3 candidats du Ranch, pour pouvoir les afficher dans
// l'enclos dès l'arrivée au Campement, avant même d'ouvrir le panneau du Ranch.
function ensureRanchChoices(){
  if(ranchChoices) return;
  const excluded = [...team.map(m=>m.lineId), ...pcBox.filter(x=>x).map(m=>m.lineId)];
  const isFacile = difficulty==='facile';
  const pool = isFacile ? buildFacileCandidates(excluded) : buildDraftCandidates(excluded);
  ranchChoices = weightedSampleCandidates(pool, 3);
}
// Affiche les 3 candidats du Ranch (déjà tirés par ensureRanchChoices) directement dans son enclos sur la carte.
function renderVillageRanchPen(){
  const wrap = document.getElementById('villageRanchPen');
  if(!wrap) return;
  wrap.innerHTML = '';
  if(ranchRecruited || !ranchChoices) return;
  const spots = [{left:'20%'},{left:'50%'},{left:'80%'}];
  ranchChoices.forEach((choice,i)=>{
    const line = lineOf(choice.lineId);
    const hasBranch = choice.branch!==undefined && choice.branch!==null;
    const sp = hasBranch ? line.branches[choice.branch] : line.stages[choice.stage];
    const el = document.createElement('div');
    el.className = 'village-pen-mon';
    el.title = sp.name;
    el.style.cssText = `left:${spots[i].left};animation-delay:${-(i*0.8)}s;`;
    el.innerHTML = getSpriteHTML(sp.name, null, 'front', true);
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
// La scène du Campement est maintenant plein écran : le panneau d'un bâtiment (Centre/Mart/Ranch/
// Marchand) s'affiche donc en superposition plutôt qu'inséré sous la carte. On observe simplement
// le contenu injecté par les autres modules (aucun changement requis dans leur logique) pour
// afficher/masquer automatiquement cette superposition.
(function initVillagePanelOverlay(){
  const content = document.getElementById('villagePanelContent');
  const overlay = document.getElementById('villagePanelOverlay');
  if(!content || !overlay) return;
  const sync = ()=> overlay.classList.toggle('hidden', content.children.length===0);
  new MutationObserver(sync).observe(content, { childList:true });
  document.getElementById('villagePanelCloseBtn').onclick = ()=>{ content.innerHTML = ''; };
  overlay.onclick = (e)=>{ if(e.target===overlay) content.innerHTML = ''; };
})();

