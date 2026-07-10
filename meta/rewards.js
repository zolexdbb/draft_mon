/* ==== meta/rewards.js (généré depuis index.html) ==== */
/* Monnaie secondaire méta : Jetons de Tour, gagnés à la fin d'une run (défaite) selon l'étage atteint. */
const TOKENS_KEY = 'draftArenaTowerTokens';
const BOOSTS_KEY = 'draftArenaBoosts';
let towerTokens = 0;
let purchasedBoosts = [];
let rerollsLeft = 0;

function loadMetaProgress(){
  try {
    towerTokens = parseInt(localStorage.getItem(TOKENS_KEY), 10) || 0;
    purchasedBoosts = JSON.parse(localStorage.getItem(BOOSTS_KEY) || '[]');
  } catch(e){ towerTokens = 0; purchasedBoosts = []; }
}
function saveMetaProgress(){
  try {
    localStorage.setItem(TOKENS_KEY, String(towerTokens));
    localStorage.setItem(BOOSTS_KEY, JSON.stringify(purchasedBoosts));
  } catch(e){}
}
loadMetaProgress();

// 1 jeton tous les N étages francs (arrondi au jeton supérieur, jamais 0 pour une vraie progression).
// Facile : 1 jeton tous les 8 étages · Normal : tous les 4 · Difficile : tous les 2.
const TOKEN_DIFF_RATE = { facile: 1/8, normal: 1/4, difficile: 1/2 };
function tokensForRun(floorReached, diff){
  const cleared = Math.max(0, floorReached - 1);
  if(cleared===0) return 0;
  return Math.ceil(cleared * (TOKEN_DIFF_RATE[diff] || TOKEN_DIFF_RATE.facile));
}

const BOOSTS = [
  { id:'startMoney1',  name:'Bourse de départ',    emoji:'💰', cost:40, desc:"+50 argent au début de chaque partie.", effect:{startMoney:50} },
  { id:'startMoney2',  name:'Grosse bourse',       emoji:'💰', cost:90, desc:"+100 argent supplémentaires au début de chaque partie (cumulable).", effect:{startMoney:100}, requires:'startMoney1' },
  { id:'startPotion',  name:'Trousse de secours',  emoji:'💊', cost:35, desc:"Commence chaque partie avec une Potion dans le sac.", effect:{startItem:'potion'} },
  { id:'shopDiscount', name:'Carte de fidélité',   emoji:'🛒', cost:70, desc:"-10% sur tous les prix du Pokéshop.", effect:{shopDiscount:0.1} },
  { id:'freeReroll',   name:'Draft assisté',       emoji:'🔄', cost:55, desc:"Un reroll gratuit des offres de draft, une fois par partie.", effect:{freeReroll:1} },
];

function metaStartMoneyBonus(){
  return BOOSTS.filter(b=>purchasedBoosts.includes(b.id) && b.effect.startMoney).reduce((a,b)=>a+b.effect.startMoney,0);
}
function metaStartItems(){
  return BOOSTS.filter(b=>purchasedBoosts.includes(b.id) && b.effect.startItem).map(b=>b.effect.startItem);
}
function metaShopDiscount(){
  return BOOSTS.filter(b=>purchasedBoosts.includes(b.id) && b.effect.shopDiscount).reduce((max,b)=>Math.max(max,b.effect.shopDiscount),0);
}
function metaFreeRerolls(){
  return BOOSTS.filter(b=>purchasedBoosts.includes(b.id) && b.effect.freeReroll).reduce((a,b)=>a+b.effect.freeReroll,0);
}

function openBoostsModal(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:440px;position:relative;">
      <button class="patchnotes-close" id="boostsCloseBtn">✕</button>
      <h2>◆ BOOSTS DE DÉPART ◆</h2>
      <div id="boostsBalance" style="text-align:center;font-size:11px;color:var(--accent);margin-bottom:12px;">🎫 ${towerTokens} Jetons de Tour</div>
      <div style="font-size:9px;color:var(--text-dim);text-align:center;margin-bottom:12px;line-height:1.5;">Gagne des Jetons en atteignant de nouveaux étages (plus tu joues en difficile, plus tu en gagnes). Les boosts achetés sont acquis pour toujours, sur toutes tes parties.</div>
      <div id="boostsList" style="display:flex;flex-direction:column;gap:8px;max-height:360px;overflow-y:auto;"></div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('boostsCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  renderBoostsList();
}
function renderBoostsList(){
  const list = document.getElementById('boostsList');
  if(!list) return;
  list.innerHTML = '';
  BOOSTS.forEach(boost=>{
    const owned = purchasedBoosts.includes(boost.id);
    const locked = boost.requires && !purchasedBoosts.includes(boost.requires);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;' + (locked?'opacity:.5;':'');
    row.innerHTML = `
      <div style="font-size:22px;">${boost.emoji}</div>
      <div style="flex:1;">
        <div style="font-size:11px;color:var(--text-main);"><b>${boost.name}</b></div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.4;">${boost.desc}${locked?`<br><i>Nécessite : ${BOOSTS.find(b=>b.id===boost.requires).name}</i>`:''}</div>
      </div>
      <button class="btn secondary boostBuyBtn" data-id="${boost.id}" style="padding:6px 10px;font-size:10px;white-space:nowrap;" ${owned||locked?'disabled':''}>${owned?'✓ Acquis':`${boost.cost} 🎫`}</button>
    `;
    list.appendChild(row);
  });
  list.querySelectorAll('.boostBuyBtn:not([disabled])').forEach(btn=>{
    btn.onclick = ()=>{
      const boost = BOOSTS.find(b=>b.id===btn.dataset.id);
      if(towerTokens < boost.cost) return;
      towerTokens -= boost.cost;
      purchasedBoosts.push(boost.id);
      saveMetaProgress();
      document.getElementById('boostsBalance').textContent = `🎫 ${towerTokens} Jetons de Tour`;
      renderBoostsList();
    };
  });
}
document.getElementById('menuBoostsBtn').onclick = openBoostsModal;
