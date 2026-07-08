/* ==== village/pc-storage.js (généré depuis index.html) ==== */
function pcMemberCardHTML(m, extraLabel){
  if(!m) return `<div style="font-size:10px;color:var(--text-dim);text-align:center;padding:10px;">Emplacement vide</div>`;
  const sp = speciesOf(m);
  return `<div style="width:40px;height:40px;margin:0 auto 4px;">${getSpriteHTML(sp.name, m.unownForm)}</div>
    <div style="font-size:9px;text-align:center;color:var(--text-main);">${sp.name}${extraLabel||''}</div>`;
}
function renderPCPanel(){
  const wrap = document.getElementById('villagePanelContent');
  pcSelectedTeamIdx = null;
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;">
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:10px;text-align:center;">Choisis un Pokémon de ton équipe, puis un Pokémon du PC pour les échanger.</div>
      <div class="dex-rate" id="villageMsg" style="text-align:center;margin-bottom:10px;color:var(--good);"></div>
      <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Ton équipe</div>
      <div id="pcTeamGrid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:16px;"></div>
      <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Boîte PC (${pcBox.filter(x=>x).length}/6)</div>
      <div id="pcBoxGrid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;"></div>
      <div style="text-align:center;margin-top:14px;">
        <button class="btn secondary" id="pcBackBtn">◀ Retour</button>
      </div>
    </div>`;
  const teamGrid = document.getElementById('pcTeamGrid');
  team.forEach((m,i)=>{
    const cell = document.createElement('button');
    cell.className = 'btn secondary';
    cell.style.cssText = 'padding:6px 4px;height:70px;';
    cell.innerHTML = pcMemberCardHTML(m);
    cell.onclick = ()=>{
      pcSelectedTeamIdx = (pcSelectedTeamIdx===i) ? null : i;
      renderPCSelection();
    };
    teamGrid.appendChild(cell);
  });
  const boxGrid = document.getElementById('pcBoxGrid');
  pcBox.forEach((m,j)=>{
    const cell = document.createElement('button');
    cell.className = 'btn secondary';
    cell.style.cssText = 'padding:6px 4px;height:70px;';
    cell.disabled = !m;
    cell.innerHTML = pcMemberCardHTML(m);
    cell.onclick = ()=>{
      if(pcSelectedTeamIdx===null || !m) return;
      const tmp = team[pcSelectedTeamIdx];
      team[pcSelectedTeamIdx] = m;
      pcBox[j] = tmp;
      pcSelectedTeamIdx = null;
      saveGame();
      renderPCPanel();
      setVillageMsg("✓ Échange effectué !");
    };
    boxGrid.appendChild(cell);
  });
  document.getElementById('pcBackBtn').onclick = renderPokecentrePanel;
}
function renderPCSelection(){
  document.querySelectorAll('#pcTeamGrid .btn').forEach((cell,i)=>{
    cell.classList.toggle('diff-active', i===pcSelectedTeamIdx);
  });
  document.querySelectorAll('#pcBoxGrid .btn').forEach(cell=>{
    cell.classList.toggle('diff-active', false);
  });
  setVillageMsg(pcSelectedTeamIdx!==null ? "Choisis maintenant un Pokémon du PC pour l'échanger." : '');
}

function depositToPC(member){
  const idx = pcBox.findIndex(x=>!x);
  if(idx===-1) return false;
  pcBox[idx] = member;
  saveGame();
  return true;
}
function pcHasSpace(){ return pcBox.some(x=>!x); }

