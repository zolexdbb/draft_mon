/* ==== SOMMAIRE ====
   Navigation entre écrans + fenêtres modales du menu principal (jouer/charger, Dex, équipe,
   meilleurs étages, choix de difficulté). Repères :
   - L.11-19 : gameOver/pauseBattleToMenu — fin de partie (défaite) et pause d'un combat en cours
   - L.28-fin(43): showScreen — bascule l'écran actif affiché (unique point d'entrée pour changer de vue)
   - L.45-fin(132): openSlotModal/openPlayMenu — choix d'un emplacement de sauvegarde (nouvelle
     partie/chargement/suppression)
   - L.168-fin(202): openScoreModal — meilleurs étages atteints par mode + badges de Maître de Type
   - L.207-fin(271): openTeamModal — fenêtre "Équipe" (PV, statut, objet tenu, changer de leader)
   - L.273-fin : openDifficultyChoice — fenêtre de choix Facile/Normal/Difficile en début de partie
==== */
function gameOver(){
  const earned = tokensForRun(towerFloor, difficulty);
  towerTokens += earned;
  const summary = buildRunSummary(earned); // avant de vider battleState : c'est lui qui donne le dresseur/Pokémon vainqueur et l'état final de l'équipe
  saveMetaProgress();
  deleteSlot(currentSlot);
  battleState = null;
  battleInProgress = false;
  document.getElementById('screenBattle').classList.add('hidden');
  document.getElementById('screenEnd').classList.remove('hidden');
  document.getElementById('endLabel').textContent = 'DÉFAITE';
  document.getElementById('endFloor').textContent = towerFloor;
  document.getElementById('endTokensLabel').textContent = earned>0 ? `+${earned} 🎫 Jetons de Tour gagnés !` : '';
  renderRunSummary(summary);
}
// Capture l'état de la partie au moment de la défaite : dresseur et Pokémon qui ont eu raison de toi (ou, si
// toute l'équipe était déjà K.O. en arrivant sur l'étage en mode Difficile, aucun combat n'a eu lieu), l'état
// final de chaque membre de l'équipe, et les statistiques accumulées depuis le début de la run.
function buildRunSummary(tokensEarned){
  const bs = battleState;
  const teamSnap = (bs && bs.player && bs.player.length)
    ? bs.player.map(c=>({ name:c.name, unownForm:c.unownForm, hp:Math.max(0,c.hp), maxHp:c.maxHp }))
    : team.map(m=>{
        const sp = speciesOf(m);
        const maxHp = m.computedStats ? m.computedStats.hp : 1;
        const hp = Math.max(0, (typeof m.hp==='number') ? m.hp : 0);
        return { name:sp.name, unownForm:m.unownForm, hp, maxHp };
      });
  const trainers = bs ? [bs.trainer, bs.trainer2].filter(Boolean) : [];
  // Seuls les Pokémon adverses sur le terrain au moment du K.O. (pas tout le banc, qui peut encore être plein de vie).
  const finishers = bs ? [bs.fActive, bs.fActive2].filter(i=>i!=null).map(i=>bs.foe[i]).filter(c=>c && c.hp>0) : [];
  const newBadges = Math.max(0, (badges[difficulty]||[]).length - (runStats.badgesAtStart||0));
  return {
    difficulty, floor: towerFloor, team: teamSnap, trainers, finishers, money, tokensEarned, newBadges,
    bosses: runStats.bosses, miniBosses: runStats.miniBosses, floorsCleared: runStats.floorsCleared, moneyEarned: runStats.moneyEarned
  };
}
const END_DIFFICULTY_LABEL = { facile:'😊 Facile', normal:'⚔️ Normal', difficile:'💀 Difficile' };
// Affiche le résumé de la run dans l'écran de défaite (#endSummary) : qui t'a battu, l'état final de ton
// équipe, et les grandes lignes de la run (étages/Boss/Mini-Boss/argent/badges).
function renderRunSummary(s){
  const wrap = document.getElementById('endSummary');
  if(!wrap) return;
  const teamRows = s.team.map(c=>{
    const frac = c.maxHp ? Math.max(0, c.hp/c.maxHp) : 0;
    const fainted = c.hp<=0;
    return `
      <div style="display:flex;align-items:center;gap:8px;padding:7px 8px;background:var(--bg-card);border:1px solid var(--line);border-radius:3px;${fainted?'opacity:.5;':''}">
        <div style="width:30px;height:30px;flex-shrink:0;${fainted?'filter:grayscale(1);':''}">${getSpriteHTML(c.name, c.unownForm)}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:9px;color:var(--text-main);">${c.name}${fainted?' 💀':''}</div>
          <div style="background:#0b0b10;border-radius:3px;height:5px;overflow:hidden;margin:3px 0;"><div style="width:${Math.round(frac*100)}%;height:100%;background:${hpBarColor(frac)};"></div></div>
        </div>
        <div style="font-size:8px;color:var(--text-dim);flex-shrink:0;">${c.hp}/${c.maxHp} PV</div>
      </div>`;
  }).join('');

  let finisherHTML;
  if(s.trainers.length){
    const trainerNames = s.trainers.map(t=>t.name).join(' & ');
    const finisherRows = s.finishers.map(f=>`
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="width:24px;height:24px;flex-shrink:0;">${getSpriteHTML(f.name, f.unownForm)}</div>
        <div style="font-size:9px;color:var(--text-main);">${f.name} <span style="color:var(--text-dim);">(${f.hp}/${f.maxHp} PV)</span></div>
      </div>`).join('');
    finisherHTML = `
      <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:12px;margin-bottom:14px;text-align:center;">
        <div style="font-size:9px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Vaincu par</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:${finisherRows?'8px':'0'};">
          <span style="font-size:22px;">${getTrainerAvatarHTML(s.trainers[0])}</span>
          <span style="font-size:12px;color:var(--accent-light);font-weight:700;">${trainerNames}</span>
        </div>
        ${finisherRows ? `<div style="display:flex;flex-direction:column;gap:5px;align-items:center;">${finisherRows}</div>` : ''}
      </div>`;
  } else {
    finisherHTML = `
      <div style="background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:12px;margin-bottom:14px;text-align:center;font-size:9px;color:var(--text-dim);">
        Ton équipe était déjà à terre en arrivant à l'étage ${s.floor}...
      </div>`;
  }

  const stats = [['🏆','Étages franchis',s.floorsCleared], ['👑','Boss vaincus',s.bosses], ['⭐','Mini-Boss vaincus',s.miniBosses], ['💰','Argent gagné',s.moneyEarned]];
  if(s.newBadges>0) stats.push(['🎖️','Nouveaux badges',s.newBadges]);
  const statsHTML = stats.map(([icon,label,val])=>`
    <div style="text-align:center;flex:1;min-width:60px;">
      <div style="font-size:15px;">${icon}</div>
      <div style="font-size:14px;color:var(--accent-light);font-weight:700;font-family:var(--font-display);">${val}</div>
      <div style="font-size:7px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;">${label}</div>
    </div>`).join('');

  wrap.innerHTML = `
    <div style="max-width:460px;margin:0 auto;">
      <div style="text-align:center;font-size:9px;color:var(--text-dim);margin-bottom:14px;">${END_DIFFICULTY_LABEL[s.difficulty]||''} · 💰 ${s.money} au final</div>
      ${finisherHTML}
      <div style="display:flex;flex-wrap:wrap;justify-content:space-around;background:var(--bg-card);border:1px solid var(--line);border-radius:4px;padding:10px 4px;margin-bottom:14px;gap:6px;">
        ${statsHTML}
      </div>
      <div style="font-size:9px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center;">Ton équipe</div>
      <div style="display:flex;flex-direction:column;gap:6px;">${teamRows}</div>
    </div>`;
}
// Quitte vers le menu en plein combat sans le terminer : le combat reprend exactement où il en était au retour.
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
document.getElementById('endMenuBtn').onclick = ()=> showScreen('screenMenu');

/* =================== MENU & POKÉDEX =================== */
function showScreen(id){
  ['screenMenu','screenDex','screenDraft','screenBuilder','screenTower','screenVillage','screenEvent','screenBattle','screenEnd'].forEach(s=>{
    document.getElementById(s).classList.toggle('hidden', s!==id);
  });
  if(id==='screenMenu') refreshMenuUI();
}

// Résumé texte d'un emplacement de sauvegarde (étage, difficulté, taille d'équipe, date, combat en pause).
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
// Fenêtre de choix d'emplacement de sauvegarde (5 slots), en mode 'load' (charger) ou 'new' (nouvelle partie/écraser, avec confirmation si occupé).
function openSlotModal(mode){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  let rows = '';
  for(let i=1;i<=5;i++){
    const info = getSlotInfo(i);
    const occupied = !!info;
    const actionLabel = mode==='load' ? (occupied?'Charger':'—') : (occupied?'Écraser':'Nouvelle partie');
    rows += `
      <div style="display:flex;align-items:center;gap:8px;padding:10px;background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:10px;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:10px;color:var(--accent-light);font-family:var(--font-display);margin-bottom:4px;">Emplacement ${i}</div>
          ${slotSummaryHTML(i)}
        </div>
        <button class="btn secondary slotActionBtn" data-slot="${i}" ${(mode==='load'&&!occupied)?'disabled':''} style="width:auto;flex-shrink:0;min-height:0;padding:6px 10px;font-size:9px;white-space:nowrap;">${actionLabel}</button>
        ${occupied ? `<button class="btn secondary slotDeleteBtn" data-slot="${i}" style="width:auto;flex-shrink:0;min-height:0;padding:6px 8px;font-size:12px;" title="Supprimer">🗑️</button>` : ''}
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

// Fenêtre "Jouer" du menu principal (nouvelle partie / charger / boosts méta).
function openPlayMenu(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  const canLoad = hasSave();
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:320px;text-align:center;position:relative;">
      <button class="patchnotes-close" id="playMenuCloseBtn">✕</button>
      <h2>◆ JOUER ◆</h2>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <button class="btn" id="playMenuNewBtn">▶ Nouvelle partie</button>
        <button class="btn secondary" id="playMenuLoadBtn" ${canLoad?'':'disabled'}>💾 Charger une partie</button>
        <button class="btn secondary" id="playMenuBoostsBtn">🎫 Boosts</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('playMenuCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  document.getElementById('playMenuNewBtn').onclick = ()=>{ close(); openSlotModal('new'); };
  document.getElementById('playMenuLoadBtn').onclick = ()=>{ if(canLoad){ close(); openSlotModal('load'); } };
  document.getElementById('playMenuBoostsBtn').onclick = ()=>{ close(); openBoostsModal(); };
}
document.getElementById('menuPlayBtn').onclick = openPlayMenu;
document.getElementById('menuDexBtn').onclick = ()=>{
  showScreen('screenDex');
  renderDex();
};
document.getElementById('dexBackBtn').onclick = ()=>{
  if(window.DEV_HOOKS) window.DEV_HOOKS.leaveDex();
  showScreen('screenMenu');
};
document.getElementById('draftHomeBtn').onclick = ()=> showScreen('screenMenu');
document.getElementById('builderHomeBtn').onclick = ()=> showScreen('screenMenu');

// Met à jour les éléments du menu principal qui dépendent de l'état global (badge de Jetons de Tour).
function refreshMenuUI(){
  document.getElementById('menuTokensBadge').textContent = `🎫 ${towerTokens} Jetons de Tour`;
}
// Ligne d'un mode de difficulté dans la fenêtre "Meilleurs étages" (meilleur étage + badges de Maître de Type obtenus).
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
// Fenêtre "Meilleurs étages" (un résumé par mode de difficulté).
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
// Fenêtre "Équipe" (accessible depuis la Tour/le Village) : PV, statut, objet tenu (échangeable
// avec le sac), et changement de leader (le membre en position 0, celui envoyé en premier).
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
          <div style="font-size:8px;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-top:5px;">Téracristal</div>
          <div id="teamTeraSel${i}" style="margin-top:2px;max-width:180px;"></div>
        </div>
        <button class="btn secondary teamLeadBtn" data-idx="${i}" style="width:auto;flex-shrink:0;min-height:0;padding:6px 8px;font-size:9px;white-space:nowrap;" ${i===0?'disabled':''}>${i===0?'Leader':'Nommer leader'}</button>
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
        const sp = speciesOf(m);
        m.computedStats = calcStats(sp.base, m.ivs, m.evs, m.nature);
        const validAbilities = sp.abilities || lineOf(m.lineId).abilities;
        if(!validAbilities.includes(m.ability)) m.ability = validAbilities[0];
        saveGame();
        close();
        openTeamModal();
      }
    }));
    const sp = speciesOf(m);
    document.getElementById(`teamTeraSel${i}`).appendChild(createCustomSelect({
      options: TERA_TYPES.map(t=>({value:t, label:t, html:`${typeIconHTML(t)} ${t}`})),
      value: m.teraType || sp.types[0],
      onChange: (val)=>{
        m.teraType = val;
        saveGame();
      }
    }));
  });
}

// Fenêtre de choix de la difficulté (Facile/Normal/Difficile) avant de lancer un draft.
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
