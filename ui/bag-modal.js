/* ==== ui/bag-modal.js (généré depuis index.html) ==== */
function openBagModal(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:420px;position:relative;">
      <button class="patchnotes-close" id="bagCloseBtn">✕</button>
      <h2>◆ SAC ◆</h2>
      <div class="dex-rate" id="bagMsg" style="text-align:center;margin-bottom:8px;color:var(--good);min-height:12px;"></div>
      <div id="bagItemList" style="display:flex;flex-direction:column;gap:6px;max-height:400px;overflow-y:auto;"></div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('bagCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  renderBagItemList();
}
function renderBagItemList(){
  const list = document.getElementById('bagItemList');
  list.innerHTML = '';
  const owned = Object.entries(ITEMS).filter(([k,it])=> it.kind==='consumable' && (bag[k]||0)>0);
  if(owned.length===0){
    list.innerHTML = `<div class="dex-rate" style="text-align:center;">Ton sac est vide. Achète des objets au Village !</div>`;
    return;
  }
  owned.forEach(([key,item])=>{
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px;background:var(--bg-card);border:1px solid var(--line);border-radius:3px;';
    row.innerHTML = `
      <div>${itemIconHTML(key, 26)}</div>
      <div style="flex:1;">
        <div style="font-size:10px;color:var(--text-main);"><b>${item.name}</b> (${bag[key]})</div>
        <div style="font-size:8px;color:var(--text-dim);">${item.desc}</div>
      </div>
      <button class="btn secondary useBagItemBtn" data-key="${key}" style="padding:6px 10px;font-size:9px;">Utiliser</button>
    `;
    list.appendChild(row);
  });
  list.querySelectorAll('.useBagItemBtn').forEach(btn=>{
    btn.onclick = ()=> renderBagTargetList(btn.dataset.key);
  });
}
function renderBagTargetList(key){
  const item = ITEMS[key];
  const list = document.getElementById('bagItemList');
  list.innerHTML = `<div class="dex-rate" style="text-align:center;margin-bottom:8px;">${itemIconHTML(key,16)} ${item.name} — choisis la cible :</div>`;
  team.forEach((m,i)=>{
    const sp = speciesOf(m);
    const hp = (typeof m.hp==='number') ? m.hp : m.computedStats.hp;
    const maxHp = m.computedStats.hp;
    const needsHeal = item.heal && hp<maxHp;
    const needsCure = item.cureStatus && m.status && (item.cureStatus==='all' || item.cureStatus===m.status);
    const usable = needsHeal || needsCure;
    const btn = document.createElement('button');
    btn.className = 'btn secondary';
    btn.disabled = !usable;
    btn.style.cssText = 'width:100%;text-align:left;padding:8px;margin-bottom:6px;display:flex;align-items:center;gap:8px;';
    btn.innerHTML = `<span style="width:28px;height:28px;display:inline-block;">${getSpriteHTML(sp.name, m.unownForm)}</span><span style="font-size:10px;">${sp.name} — ${hp}/${maxHp} PV ${m.status?statusIconHTML(m.status,12):''}</span>`;
    btn.onclick = ()=>{
      if(item.heal) m.hp = Math.min(maxHp, hp + Math.round(maxHp*item.heal));
      if(item.cureStatus){ m.status = null; m.sleepCounter = 0; }
      bag[key] = Math.max(0, (bag[key]||0)-1);
      saveGame();
      document.getElementById('bagMsg').textContent = `✓ ${item.name} utilisé sur ${sp.name} !`;
      renderBagItemList();
    };
    list.appendChild(btn);
  });
  const backBtn = document.createElement('button');
  backBtn.className = 'btn secondary';
  backBtn.style.cssText = 'width:100%;margin-top:6px;';
  backBtn.textContent = '◀ Retour aux objets';
  backBtn.onclick = renderBagItemList;
  list.appendChild(backBtn);
}
document.getElementById('towerBagBtn').onclick = openBagModal;
document.getElementById('towerTeamBtn').onclick = openTeamModal;
document.getElementById('villageTeamBtn').onclick = openTeamModal;
