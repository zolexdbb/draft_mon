/* ==== village/merchant.js (généré depuis index.html) ==== */
const MERCHANT_SPAWN_RATE = 0.2;
const MERCHANT_GROUPS = [
  { label: 'Giratina', keys: ['orbePlatine'] },
  { label: 'Shaymin', keys: ['gracidee'] },
  { label: 'Motisma', keys: ['appareilChauffe','appareilLavage','appareilFrigo','appareilVentilo','appareilTondeuse'] },
  { label: 'Boréas / Fulguris / Démétéros', keys: ['miroirSacre'] },
  { label: 'Arceus', keys: ['plaqueFlamme','plaqueHydro','plaqueHerbe','plaqueVolt','plaqueCiel','plaqueToxicite','plaqueTerre','plaqueInsecte','plaquePoing','plaqueGlace','plaqueEsprit','plaqueFantome','plaqueRoc','plaqueDraco','plaqueFer','plaqueOmbre'] }
];
function renderMerchantPanel(){
  const wrap = document.getElementById('villagePanelContent');
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;">
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:10px;text-align:center;">Un marchand mystérieux te propose des objets rarissimes pour changer la forme de tes légendaires...</div>
      <div id="merchantList" style="display:flex;flex-direction:column;gap:8px;max-height:400px;overflow-y:auto;"></div>
      <div class="dex-rate" id="villageMsg" style="margin-top:10px;color:var(--good);text-align:center;"></div>
    </div>`;
  const list = document.getElementById('merchantList');
  MERCHANT_GROUPS.forEach(group=>{
    const groupTitle = document.createElement('div');
    groupTitle.style.cssText = 'font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-top:4px;';
    groupTitle.textContent = group.label;
    list.appendChild(groupTitle);
    group.keys.forEach(key=>{
      const item = ITEMS[key];
      const owned = bag[key]||0;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;';
      row.innerHTML = `
        <div style="font-size:22px;">${itemIconHTML(key, 28)}</div>
        <div style="flex:1;">
          <div style="font-size:11px;color:var(--text-main);"><b>${item.name}</b> <span style="color:var(--text-dim);">(possédé : ${owned})</span></div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.4;">${item.desc}</div>
        </div>
        <button class="btn secondary merchantBuyBtn" data-key="${key}" style="padding:6px 10px;font-size:10px;white-space:nowrap;">${item.price} 💰</button>
      `;
      list.appendChild(row);
    });
  });
  list.querySelectorAll('.merchantBuyBtn').forEach(btn=>{
    btn.onclick = ()=>{
      const key = btn.dataset.key;
      const item = ITEMS[key];
      if(money < item.price){ setVillageMsg("Pas assez d'argent !"); return; }
      money -= item.price;
      bag[key] = (bag[key]||0)+1;
      refreshVillageMoney();
      saveGame();
      setVillageMsg(`✓ ${item.name} acheté !`);
      renderMerchantPanel();
    };
  });
}
document.getElementById('villageMerchantBtn').onclick = renderMerchantPanel;
