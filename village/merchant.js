/* ==== Le Marchand Itinérant du Village (apparaît par chance après un Boss) : vend tous les
   objets de forme spéciaux (Plaques d'Arceus, Mémoires, Cristaux Z, Pierres Méga, objets
   légendaires...), organisés en groupes affichés avec un titre. ==== */
const MERCHANT_SPAWN_RATE = 0.2;
const MERCHANT_GROUPS = [
  { label: 'Giratina', tab: '👑 Giratina', keys: ['orbePlatine'] },
  { label: 'Shaymin', tab: '🌸 Shaymin', keys: ['gracidee'] },
  { label: 'Motisma', tab: '🔌 Motisma', keys: ['appareilChauffe','appareilLavage','appareilFrigo','appareilVentilo','appareilTondeuse'] },
  { label: 'Boréas / Fulguris / Démétéros / Amovénus', tab: '🌀 Forces de la Nature', keys: ['miroirSacre'] },
  { label: 'Arceus', tab: '💠 Arceus', keys: ['plaqueFlamme','plaqueHydro','plaqueHerbe','plaqueVolt','plaqueCiel','plaqueToxicite','plaqueTerre','plaqueInsecte','plaquePoing','plaqueGlace','plaqueEsprit','plaqueFantome','plaqueRoc','plaqueDraco','plaqueFer','plaqueOmbre'] },
  { label: 'Pierres Méga', tab: '🔷 Pierres Méga', keys: ['venusaurite','charizarditeX','charizarditeY','blastoisite','kangaskhanite','gyaradosite','mewtwonitey','scizorite','gardevoirite','garchompite','lucarionite','metagrossite'] },
  { label: 'Cristaux Z', tab: '⚡ Cristaux Z', keys: ['zCrystalNormal','zCrystalCombat','zCrystalVol','zCrystalPoison','zCrystalSol','zCrystalRoche','zCrystalInsecte','zCrystalFantome','zCrystalAcier','zCrystalFeu','zCrystalEau','zCrystalPlante','zCrystalElectrik','zCrystalPsy','zCrystalGlace','zCrystalDragon','zCrystalTenebres','zCrystalFee'] },
  { label: 'Necrozma', tab: '✨ Necrozma', keys: ['prismeCouchant','prismeAurore','ultranecrozium'] },
  { label: 'Mémoires (Silvallié)', tab: '💾 Mémoires', keys: ['memoireCombat','memoireVol','memoirePoison','memoireSol','memoireRoche','memoireInsecte','memoireFantome','memoireAcier','memoireFeu','memoireEau','memoirePlante','memoireElectrik','memoirePsy','memoireGlace','memoireDragon','memoireTenebres','memoireFee'] },
  { label: 'Légendaires de Galar', tab: '⚔️ Galar', keys: ['epeeRouillee','bouclierRouille','parcheminTenebres','parcheminAqua','renePartageGlace','renePartageSpectre'] },
  { label: 'Gigamax', tab: '🔴 Gigamax', keys: ['facteurGigamax'] },
  { label: 'Téracristallisation', tab: '💎 Tera', keys: ['orbeTera'] }
];
// Affiche la boutique du Marchand Itinérant : un onglet par groupe d'objets spéciaux (comme le
// Pokéshop), pour que le catalogue entier reste accessible sans scroll interminable.
function renderMerchantPanel(){
  if(merchantCategory<0 || merchantCategory>=MERCHANT_GROUPS.length) merchantCategory = 0;
  const wrap = document.getElementById('villagePanelContent');
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;">
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:10px;text-align:center;">Un marchand mystérieux te propose des objets rarissimes pour changer la forme de tes légendaires...</div>
      <div id="merchantTabs" style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;"></div>
      <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">${MERCHANT_GROUPS[merchantCategory].label}</div>
      <div id="merchantList" style="display:flex;flex-direction:column;gap:8px;"></div>
      <div class="dex-rate" id="villageMsg" style="margin-top:10px;color:var(--good);text-align:center;"></div>
    </div>`;
  const tabs = document.getElementById('merchantTabs');
  MERCHANT_GROUPS.forEach((group, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'btn secondary' + (merchantCategory===idx ? ' diff-active' : '');
    btn.style.cssText = 'padding:6px 10px;font-size:9px;flex:1 1 auto;white-space:nowrap;';
    btn.textContent = group.tab || group.label;
    btn.onclick = ()=>{ merchantCategory = idx; renderMerchantPanel(); };
    tabs.appendChild(btn);
  });
  const list = document.getElementById('merchantList');
  MERCHANT_GROUPS[merchantCategory].keys.forEach(key=>{
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
      <button class="btn secondary merchantBuyBtn" data-key="${key}" style="width:auto;flex-shrink:0;min-height:0;padding:6px 10px;font-size:10px;white-space:nowrap;">${item.price} 💰</button>
    `;
    list.appendChild(row);
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
document.getElementById('villageMerchantBtn').onclick = ()=>{ merchantCategory = 0; renderMerchantPanel(); };
