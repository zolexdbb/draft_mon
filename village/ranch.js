/* ==== village/ranch.js (généré depuis index.html) ==== */
let ranchChoices = null;
let ranchRecruited = false;
function renderRanchPanel(){
  const wrap = document.getElementById('villagePanelContent');
  if(ranchRecruited){
    wrap.innerHTML = `
      <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;text-align:center;">
        <div style="font-size:10px;color:var(--text-dim);">Le dresseur itinérant est reparti. Reviens après ta prochaine victoire de Boss pour de nouvelles recrues !</div>
      </div>`;
    return;
  }
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;">
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:10px;text-align:center;">Un dresseur itinérant te propose 3 Pokémon sauvages. Tu ne peux en recruter qu'un seul !</div>
      <div id="ranchDraftCards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;"></div>
      <div class="dex-rate" id="villageMsg" style="text-align:center;margin-top:10px;color:var(--good);"></div>
    </div>`;
  if(!ranchChoices){
    const excluded = [...team.map(m=>m.lineId), ...pcBox.filter(x=>x).map(m=>m.lineId)];
    const isFacile = difficulty==='facile';
    const pool = isFacile ? buildFacileCandidates(excluded) : buildDraftCandidates(excluded);
    ranchChoices = weightedSampleCandidates(pool, 3);
  }
  const choices = ranchChoices;
  const cardsWrap = document.getElementById('ranchDraftCards');
  choices.forEach(choice=>{
    const line = lineOf(choice.lineId);
    const hasBranch = choice.branch!==undefined && choice.branch!==null;
    const sp = hasBranch ? line.branches[choice.branch] : line.stages[choice.stage];
    const card = document.createElement('div');
    card.style.cssText = 'background:#0b0b10;border:1px solid var(--line);border-radius:4px;padding:10px;text-align:center;cursor:pointer;';
    card.innerHTML = `
      <div style="width:60px;height:60px;margin:0 auto 6px;">${getSpriteHTML(sp.name)}</div>
      <div style="font-size:10px;color:var(--text-main);margin-bottom:4px;">${sp.name}</div>
      <div class="types-row" style="justify-content:center;">${sp.types.map(t=>typeTagHTML(t)).join('')}</div>
    `;
    card.onclick = ()=> renderRanchRecruit(choice, sp);
    cardsWrap.appendChild(card);
  });
}
function renderRanchRecruit(choice, sp){
  const wrap = document.getElementById('villagePanelContent');
  wrap.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:14px;text-align:center;">
      <div style="width:70px;height:70px;margin:0 auto 8px;">${getSpriteHTML(sp.name)}</div>
      <div style="font-size:12px;color:var(--text-main);margin-bottom:4px;">${sp.name}</div>
      <div class="types-row" style="justify-content:center;margin-bottom:12px;">${sp.types.map(t=>typeTagHTML(t)).join('')}</div>
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:12px;">Où veux-tu l'envoyer ?</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
        <button class="btn" id="ranchToTeamBtn">Ajouter à l'équipe</button>
        <button class="btn secondary" id="ranchToPCBtn" ${pcHasSpace()?'':'disabled'}>Envoyer au PC${pcHasSpace()?'':' (plein)'}</button>
        <button class="btn secondary" id="ranchCancelBtn">Annuler</button>
      </div>
      <div id="ranchTeamPicker" style="margin-top:14px;"></div>
    </div>`;
  const buildMember = ()=>{
    return difficulty==='facile'
      ? autoBuildMember(choice.lineId, choice.stage, choice.branch)
      : defaultMember(choice.lineId, choice.stage);
  };
  document.getElementById('ranchCancelBtn').onclick = renderRanchPanel;
  document.getElementById('ranchToPCBtn').onclick = ()=>{
    if(!pcHasSpace()) return;
    depositToPC(buildMember());
    ranchRecruited = true;
    saveGame();
    setVillageMsg(`✓ ${sp.name} envoyé au PC !`);
    renderRanchPanel();
  };
  document.getElementById('ranchToTeamBtn').onclick = ()=>{
    const picker = document.getElementById('ranchTeamPicker');
    picker.innerHTML = `<div style="font-size:9px;color:var(--text-dim);margin-bottom:8px;">Choisis le Pokémon à remplacer :</div>`;
    team.forEach((m,i)=>{
      const msp = speciesOf(m);
      const btn = document.createElement('button');
      btn.className = 'btn secondary';
      btn.style.cssText = 'width:100%;text-align:left;padding:8px;margin-bottom:6px;display:flex;align-items:center;gap:8px;';
      btn.innerHTML = `<span style="width:26px;height:26px;display:inline-block;">${getSpriteHTML(msp.name, m.unownForm)}</span><span style="font-size:10px;">${msp.name}</span>`;
      btn.onclick = ()=>{
        const newMember = buildMember();
        const replaced = team[i];
        team[i] = newMember;
        if(pcHasSpace()){
          depositToPC(replaced);
          setVillageMsg(`✓ ${sp.name} rejoint l'équipe ! ${msp.name} est envoyé au PC.`);
        } else {
          setVillageMsg(`✓ ${sp.name} rejoint l'équipe ! (PC plein, ${msp.name} a été relâché)`);
        }
        ranchRecruited = true;
        saveGame();
        renderRanchPanel();
      };
      picker.appendChild(btn);
    });
  };
}

document.getElementById('villagePokecentreBtn').onclick = renderPokecentrePanel;
document.getElementById('villagePokeshopBtn').onclick = renderPokeshopPanel;
document.getElementById('villageRanchBtn').onclick = renderRanchPanel;
document.getElementById('villageContinueBtn').onclick = ()=>{
  document.getElementById('screenVillage').classList.add('hidden');
  document.getElementById('screenTower').classList.remove('hidden');
  renderTower();
};

