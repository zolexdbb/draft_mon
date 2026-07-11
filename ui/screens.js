/* ==== ui/screens.js (généré depuis index.html) ==== */
// Une défaite supprime la sauvegarde en cours : impossible de recharger la partie d'avant
// pour retenter le même combat en boucle.
function gameOver(){
  const earned = tokensForRun(towerFloor, difficulty);
  towerTokens += earned;
  saveMetaProgress();
  deleteSlot(currentSlot);
  battleState = null;
  battleInProgress = false;
  document.getElementById('screenBattle').classList.add('hidden');
  document.getElementById('screenEnd').classList.remove('hidden');
  document.getElementById('endLabel').textContent = 'DÉFAITE';
  document.getElementById('endFloor').textContent = towerFloor;
  document.getElementById('endTokensLabel').textContent = earned>0 ? `+${earned} 🎫 Jetons de Tour gagnés !` : '';
}
// Quitter vers le menu en plein combat met juste le combat en pause : le combat (même dresseur,
// mêmes PV) reprend exactement où on l'a laissé au retour, rien n'est perdu ni réinitialisé.
function pauseBattleToMenu(){
  if(battleState) battleState.locked = false;
  saveGame();
  showScreen('screenMenu');
}
document.getElementById('battleHomeBtn').onclick = pauseBattleToMenu;

document.getElementById('restartBtn').onclick = ()=>{
  document.getElementById('screenEnd').classList.add('hidden');
  document.getElementById('screenDraft').classList.remove('hidden');
  initDraft();
};

/* =================== MENU & POKÉDEX =================== */
function showScreen(id){
  ['screenMenu','screenDex','screenDraft','screenBuilder','screenTower','screenVillage','screenMiniCenter','screenEvent','screenBattle','screenEnd'].forEach(s=>{
    document.getElementById(s).classList.toggle('hidden', s!==id);
  });
  if(id==='screenMenu') refreshMenuUI();
}

function slotSummaryHTML(slot){
  const info = getSlotInfo(slot);
  if(!info){
    return `<div style="font-size:9px;color:var(--text-dim);">Emplacement vide</div>`;
  }
  const diffLabel = info.difficulty==='facile' ? '😊 Facile' : (info.difficulty==='difficile' ? '💀 Difficile' : '⚔️ Normal');
  let dateLabel = '';
  try { if(info.savedAt) dateLabel = new Date(info.savedAt).toLocaleDateString('fr-FR'); } catch(e){}
  const battleLabel = info.battleInProgress ? ' · ⚔️ Combat en pause' : '';
  return `<div style="font-size:9px;color:var(--text-main);">Étage ${info.floor} · ${diffLabel} · ${info.teamCount} Pokémon${dateLabel?' · '+dateLabel:''}${battleLabel}</div>`;
}
function openSlotModal(mode){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  let rows = '';
  for(let i=1;i<=5;i++){
    const info = getSlotInfo(i);
    const occupied = !!info;
    const actionLabel = mode==='load' ? (occupied?'Charger':'—') : (occupied?'Écraser':'Nouvelle partie');
    rows += `
      <div style="display:flex;align-items:center;gap:8px;padding:10px;background:var(--bg-card);border:1px solid var(--line);border-radius:3px;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:10px;color:var(--accent);font-family:'Press Start 2P',monospace;margin-bottom:4px;">Emplacement ${i}</div>
          ${slotSummaryHTML(i)}
        </div>
        <button class="btn secondary slotActionBtn" data-slot="${i}" ${(mode==='load'&&!occupied)?'disabled':''} style="padding:6px 10px;font-size:9px;white-space:nowrap;">${actionLabel}</button>
        ${occupied ? `<button class="btn secondary slotDeleteBtn" data-slot="${i}" style="padding:6px 8px;font-size:12px;" title="Supprimer">🗑️</button>` : ''}
      </div>`;
  }
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:420px;position:relative;">
      <button class="patchnotes-close" id="slotCloseBtn">✕</button>
      <h2>◆ ${mode==='load' ? 'CHARGER UNE PARTIE' : 'CHOISIS UN EMPLACEMENT'} ◆</h2>
      <div id="slotMsg" style="font-size:9px;color:var(--accent);text-align:center;margin-bottom:10px;min-height:12px;"></div>
      ${rows}
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('slotCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };

  overlay.querySelectorAll('.slotActionBtn').forEach(btn=>{
    btn.onclick = ()=>{
      const slot = parseInt(btn.dataset.slot);
      const info = getSlotInfo(slot);
      if(mode==='load'){
        if(!info) return;
        if(loadGame(slot)){
          close();
          if(battleInProgress && battleState){
            showScreen('screenBattle');
            renderTrainerBanner(battleState.trainer);
            clearLog();
            setLog(`<b>Étage ${towerFloor}</b> — reprise du combat en cours contre ${battleState.trainer.name} !`);
            renderBattle();
          } else {
            showScreen('screenTower');
            renderTower();
          }
        }
      } else {
        const proceed = ()=>{
          currentSlot = slot;
          close();
          openDifficultyChoice(()=>{
            showScreen('screenDraft');
            initDraft();
          });
        };
        if(info && btn.dataset.confirming!=='1'){
          document.getElementById('slotMsg').textContent = `⚠️ Reclique sur "Écraser" pour confirmer (étage ${info.floor} sera perdu).`;
          btn.dataset.confirming = '1';
          btn.textContent = 'Confirmer ?';
        } else {
          proceed();
        }
      }
    };
  });
  overlay.querySelectorAll('.slotDeleteBtn').forEach(btn=>{
    btn.onclick = ()=>{
      const slot = parseInt(btn.dataset.slot);
      deleteSlot(slot);
      close();
      openSlotModal(mode);
    };
  });
}

document.getElementById('menuPlayBtn').onclick = ()=>{
  openSlotModal('new');
};
document.getElementById('menuContinueBtn').onclick = ()=>{
  openSlotModal('load');
};
document.getElementById('menuDexBtn').onclick = ()=>{
  showScreen('screenDex');
  renderDex();
};
document.getElementById('dexBackBtn').onclick = ()=> showScreen('screenMenu');
document.getElementById('draftHomeBtn').onclick = ()=> showScreen('screenMenu');
document.getElementById('builderHomeBtn').onclick = ()=> showScreen('screenMenu');

function refreshMenuUI(){
  document.getElementById('menuContinueBtn').classList.toggle('hidden', !hasSave());
  document.getElementById('menuTokensBadge').textContent = `🎫 ${towerTokens} Jetons de Tour`;
}
function scoreDiffRowHTML(label, floor, diffKey){
  const owned = badges[diffKey] || [];
  const badgeIcons = ALL_TYPES.map(t=> typeCoinHTML(t, owned.includes(t), 20)).join(' ');
  return `
    <div style="padding:8px 12px;background:var(--bg-card);border:1px solid var(--line);border-radius:3px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>${label}</span><b style="color:var(--accent);">Étage ${floor}</b>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
        <span style="font-size:9px;color:var(--text-dim);">🎖️ Badges (${owned.length}/${ALL_TYPES.length})</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${badgeIcons}</div>
    </div>`;
}
function openScoreModal(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:340px;text-align:center;position:relative;">
      <button class="patchnotes-close" id="scoreCloseBtn">✕</button>
      <h2>◆ MEILLEURS ÉTAGES ◆</h2>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:11px;color:var(--text-main);">
        ${scoreDiffRowHTML('😊 Facile', bestFloorFacile, 'facile')}
        ${scoreDiffRowHTML('⚔️ Normal', bestFloorNormal, 'normal')}
        ${scoreDiffRowHTML('💀 Difficile', bestFloorDifficile, 'difficile')}
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('scoreCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
}
document.getElementById('scoreBtn').onclick = openScoreModal;
document.getElementById('menuPatchNotesBtn').onclick = ()=> openPatchNotes();

function hpBarColor(frac){ return frac>0.5 ? 'var(--good)' : (frac>0.2 ? '#e0a940' : '#e04040'); }
function openTeamModal(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  let rows = '';
  team.forEach((m,i)=>{
    const sp = speciesOf(m);
    const hp = (typeof m.hp==='number') ? m.hp : m.computedStats.hp;
    const maxHp = m.computedStats.hp;
    const frac = Math.max(0, hp/maxHp);
    rows += `
      <div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg-card);border:1px solid var(--line);border-radius:3px;margin-bottom:8px;">
        <div style="width:36px;height:36px;flex-shrink:0;">${getSpriteHTML(sp.name, m.unownForm)}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:10px;color:var(--text-main);">${i===0?'👑 ':''}${sp.name} ${m.status?statusIconHTML(m.status,12):''}</div>
          <div style="background:#0b0b10;border-radius:3px;height:6px;overflow:hidden;margin:3px 0;"><div style="width:${Math.round(frac*100)}%;height:100%;background:${hpBarColor(frac)};"></div></div>
          <div style="font-size:8px;color:var(--text-dim);">${hp}/${maxHp} PV</div>
          <div id="teamHeldSel${i}" style="margin-top:4px;max-width:180px;"></div>
        </div>
        <button class="btn secondary teamLeadBtn" data-idx="${i}" style="padding:6px 8px;font-size:9px;white-space:nowrap;" ${i===0?'disabled':''}>${i===0?'Leader':'Nommer leader'}</button>
      </div>`;
  });
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:440px;position:relative;">
      <button class="patchnotes-close" id="teamCloseBtn">✕</button>
      <h2>◆ ÉQUIPE ◆</h2>
      ${rows}
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('teamCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  overlay.querySelectorAll('.teamLeadBtn').forEach(btn=>{
    btn.onclick = ()=>{
      const idx = parseInt(btn.dataset.idx);
      const [chosen] = team.splice(idx,1);
      team.unshift(chosen);
      saveGame();
      close();
      openTeamModal();
    };
  });
  team.forEach((m,i)=>{
    const heldOptions = [{value:'', label:'Aucun objet'}];
    Object.entries(ITEMS).filter(([k,it])=>it.kind==='held').forEach(([key,item])=>{
      const available = (bag[key]||0) + (m.heldItem===key ? 1 : 0);
      if(available>0) heldOptions.push({value:key, label:`${item.name} (${available})`});
    });
    document.getElementById(`teamHeldSel${i}`).appendChild(createCustomSelect({
      options: heldOptions,
      value: m.heldItem || '',
      onChange: (val)=>{
        if(m.heldItem){ bag[m.heldItem] = (bag[m.heldItem]||0)+1; }
        if(val){ bag[val] = Math.max(0,(bag[val]||0)-1); m.heldItem = val; }
        else { m.heldItem = null; }
        saveGame();
        close();
        openTeamModal();
      }
    }));
  });
}

function openDifficultyChoice(onConfirm){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:380px;text-align:center;">
      <h2>◆ CHOISIS TA DIFFICULTÉ ◆</h2>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px;">
        <button class="btn secondary" id="diffFacileBtn" style="padding:10px;font-size:10px;">😊 Facile</button>
        <button class="btn secondary" id="diffNormalBtn" style="padding:10px;font-size:10px;">⚔️ Normal</button>
        <button class="btn secondary" id="diffDifficileBtn" style="padding:10px;font-size:10px;">💀 Difficile</button>
      </div>
      <div style="font-size:9px;color:var(--text-dim);line-height:1.6;text-align:left;margin-top:10px;">
        <b>😊 Facile</b> — Draft uniquement des formes déjà entièrement évoluées, avec des builds prêts à l'emploi. PV restaurés après chaque combat.<br><br>
        <b>⚔️ Normal</b> — Draft classique (tous stades), tu configures tes builds toi-même. PV restaurés après chaque combat.<br><br>
        <b>💀 Difficile</b> — Draft classique, builds à configurer. PV et altérations d'état conservés d'un combat à l'autre.
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const pick = (val)=>{
    difficulty = val;
    try { localStorage.setItem('draftArenaDifficulty', difficulty); } catch(e){}
    overlay.remove();
    onConfirm();
  };
  document.getElementById('diffFacileBtn').onclick = ()=> pick('facile');
  document.getElementById('diffNormalBtn').onclick = ()=> pick('normal');
  document.getElementById('diffDifficileBtn').onclick = ()=> pick('difficile');
}

/* --------- POKÉDEX FILTRES --------- */
