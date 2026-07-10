/* ==== village/shop.js (généré depuis index.html) ==== */
const SHOP_CATEGORIES = [
  {key:'potion', label:'💊 Potions'},
  {key:'baie', label:'🍑 Baies'},
  {key:'strat', label:'🎗️ Stratégiques'}
];
function renderPokeshopPanel(){
  const wrap = document.getElementById('villagePanelContent');
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;">
      <div id="shopTabs" style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;"></div>
      <div id="shopList" style="display:flex;flex-direction:column;gap:8px;max-height:340px;overflow-y:auto;"></div>
      <div class="dex-rate" id="villageMsg" style="margin-top:10px;color:var(--good);text-align:center;"></div>
    </div>`;
  const tabs = document.getElementById('shopTabs');
  SHOP_CATEGORIES.forEach(cat=>{
    const btn = document.createElement('button');
    btn.className = 'btn secondary' + (shopCategory===cat.key ? ' diff-active' : '');
    btn.style.cssText = 'padding:6px 10px;font-size:9px;flex:1;';
    btn.textContent = cat.label;
    btn.onclick = ()=>{ shopCategory = cat.key; renderPokeshopPanel(); };
    tabs.appendChild(btn);
  });
  const list = document.getElementById('shopList');
  const discount = metaShopDiscount();
  Object.entries(ITEMS).filter(([k,it])=>it.category===shopCategory).forEach(([key, item])=>{
    const owned = bag[key]||0;
    const price = Math.round(item.price * (1 - discount));
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;';
    row.innerHTML = `
      <div style="font-size:22px;">${itemIconHTML(key, 28)}</div>
      <div style="flex:1;">
        <div style="font-size:11px;color:var(--text-main);"><b>${item.name}</b> <span style="color:var(--text-dim);">(possédé : ${owned})</span></div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.4;">${item.desc}</div>
      </div>
      <button class="btn secondary buyBtn" data-key="${key}" style="padding:6px 10px;font-size:10px;white-space:nowrap;">${price} 💰${discount>0?` <span style="text-decoration:line-through;opacity:.5;font-size:8px;">${item.price}</span>`:''}</button>
    `;
    list.appendChild(row);
  });
  list.querySelectorAll('.buyBtn').forEach(btn=>{
    btn.onclick = ()=>{
      const key = btn.dataset.key;
      const item = ITEMS[key];
      const price = Math.round(item.price * (1 - metaShopDiscount()));
      if(money < price){ setVillageMsg("Pas assez d'argent !"); return; }
      money -= price;
      bag[key] = (bag[key]||0)+1;
      refreshVillageMoney();
      saveGame();
      setVillageMsg(`✓ ${item.name} acheté !`);
      renderPokeshopPanel();
    };
  });
}

