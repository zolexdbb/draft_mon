/* ==== village/pokecenter.js (généré depuis index.html) ==== */
function renderPokecentrePanel(){
  const wrap = document.getElementById('villagePanelContent');
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:18px;text-align:center;">
      <div style="font-size:24px;margin-bottom:8px;">🏥</div>
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:14px;line-height:1.6;">Soigne entièrement les PV et les altérations d'état de toute ton équipe. C'est gratuit !</div>
      <button class="btn" id="healTeamBtn">Soigner l'équipe</button>
      <div class="dex-rate" id="villageMsg" style="margin-top:10px;color:var(--good);"></div>
      <div style="margin-top:16px;border-top:1px solid var(--line);padding-top:14px;">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:8px;">Envie de changer ton équipe ?</div>
        <button class="btn secondary" id="openPCBtn">🖥️ Accéder au PC</button>
      </div>
    </div>`;
  document.getElementById('healTeamBtn').onclick = ()=>{
    team.forEach(m=>{ m.hp = m.computedStats.hp; m.status=null; m.sleepCounter=0; });
    saveGame();
    setVillageMsg("✓ Ton équipe est en pleine forme !");
  };
  document.getElementById('openPCBtn').onclick = renderPCPanel;
}

