/* ==== ui/dev-mode.js ==== */
// Mode développeur caché : cliquer 7 fois sur Lockpin dans le Dex, puis entrer le code.
const DEV_MODE_KEY = 'draftArenaDevMode';
const DEV_TRIGGER_NAME = 'Lockpin';
const DEV_TRIGGER_CLICKS = 7;
const DEV_CODE = '1701';

let devModeUnlocked = false;
try { devModeUnlocked = localStorage.getItem(DEV_MODE_KEY) === '1'; } catch(e){}

// Lu une seule fois par startBattle() (combat/battle-flow.js), puis remis à null.
let devEncounterOverride = null;

let devClickCount = 0;
let devClickTimer = null;
function handleDevTriggerClick(){
  devClickCount++;
  clearTimeout(devClickTimer);
  devClickTimer = setTimeout(()=>{ devClickCount = 0; }, 2500);
  if(devClickCount >= DEV_TRIGGER_CLICKS){
    devClickCount = 0;
    if(devModeUnlocked) openDevMenu();
    else openDevCodePrompt();
  }
}

function openDevCodePrompt(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:280px;text-align:center;position:relative;">
      <button class="patchnotes-close" id="devCodeCloseBtn">✕</button>
      <h2>◆ ACCÈS RESTREINT ◆</h2>
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:12px;">Entre le code pour continuer.</div>
      <input type="password" id="devCodeInput" inputmode="numeric" maxlength="12"
        style="width:100%;padding:10px;text-align:center;font-size:16px;letter-spacing:4px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);margin-bottom:10px;box-sizing:border-box;">
      <div id="devCodeError" style="font-size:9px;color:var(--low);min-height:14px;margin-bottom:8px;"></div>
      <button class="btn" id="devCodeSubmitBtn" style="width:100%;">Valider</button>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('devCodeCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  const input = document.getElementById('devCodeInput');
  input.focus();
  const submit = ()=>{
    if(input.value === DEV_CODE){
      devModeUnlocked = true;
      try { localStorage.setItem(DEV_MODE_KEY, '1'); } catch(e){}
      close();
      openDevMenu();
    } else {
      document.getElementById('devCodeError').textContent = 'Code incorrect.';
      input.value = '';
      input.focus();
    }
  };
  document.getElementById('devCodeSubmitBtn').onclick = submit;
  input.onkeydown = (e)=>{ if(e.key==='Enter') submit(); };
}

/* =================== Section Équipe : roster libre → vrai écran de config =================== */
let devSelectedTeam = [];
function devSpeciesFor(c){ return lineOf(c.lineId).stages[c.stage]; }
function renderDevTeamSlots(){
  const wrap = document.getElementById('devTeamSlots');
  document.getElementById('devTeamCount').textContent = devSelectedTeam.length;
  wrap.innerHTML = devSelectedTeam.map((c,i)=>{
    const sp = devSpeciesFor(c);
    return `<span class="type-tag" data-idx="${i}" style="cursor:pointer;">${sp.name} ✕</span>`;
  }).join('') || '<span style="font-size:9px;color:var(--text-dim);">Aucun Pokémon sélectionné</span>';
  wrap.querySelectorAll('[data-idx]').forEach(el=>{
    el.onclick = ()=>{ devSelectedTeam.splice(parseInt(el.dataset.idx,10),1); renderDevTeamSlots(); renderDevPokeList(document.getElementById('devPokeSearch').value); };
  });
}
function renderDevPokeList(search){
  const list = document.getElementById('devPokeList');
  const q = search.trim().toLowerCase();
  const full = devSelectedTeam.length>=6;
  const matches = ALL_CANDIDATES.filter(c=>{
    const sp = devSpeciesFor(c);
    return !q || sp.name.toLowerCase().includes(q);
  }).slice(0, 60);
  list.innerHTML = matches.map((c,i)=>{
    const sp = devSpeciesFor(c);
    return `<button class="move-btn" data-i="${i}" style="text-align:left;padding:6px 10px;font-size:11px;" ${full?'disabled':''}>${sp.name} <small>${sp.types.join(' / ')}</small></button>`;
  }).join('');
  list.querySelectorAll('button').forEach((btn,i)=>{
    btn.onclick = ()=>{
      if(devSelectedTeam.length>=6) return;
      devSelectedTeam.push(matches[i]);
      renderDevTeamSlots();
      renderDevPokeList(document.getElementById('devPokeSearch').value);
    };
  });
}

/* =================== Section Combat : dresseur choisi manuellement =================== */
function buildDevEncounter(kind, forcedType){
  const floor = towerFloor;
  if(kind==='boss'){
    const type = forcedType || rand(ALL_TYPES);
    const name = rand(TRAINER_FIRST_NAMES);
    const trainer = {
      name: `👑 MAÎTRE ${typeDisplayName(type).toUpperCase()} ${name}`,
      emoji: TYPE_EMOJI[type], theme: type, dialogue: TYPE_MASTER_DIALOGUE[type],
      boss: true, miniBoss: false, masterType: type
    };
    return { trainer, trainer2: null, isDouble: false, enemyTeam: generateEnemyTeam(floor, type, true) };
  }
  if(kind==='miniboss'){
    const archetype = rand(trainerArchetypePool(floor));
    const name = rand(TRAINER_FIRST_NAMES);
    const trainer = { name:`⭐ Mini-Boss ${archetype.title} ${name}`, emoji:archetype.emoji, theme:archetype.theme, dialogue:archetype.dialogue, boss:false, miniBoss:true };
    return { trainer, trainer2: null, isDouble:false, enemyTeam: generateEnemyTeam(floor, archetype.theme, false) };
  }
  if(kind==='twin'){
    const twins = generateTwinTrainers(floor);
    const enemyTeam = [...generateEnemyTeam(floor, twins[0].theme, false, 3), ...generateEnemyTeam(floor, twins[1].theme, false, 3)];
    return { trainer: twins[0], trainer2: twins[1], isDouble:true, enemyTeam };
  }
  const archetype = rand(trainerArchetypePool(floor));
  const name = rand(TRAINER_FIRST_NAMES);
  const trainer = { name:`${archetype.title} ${name}`, emoji:archetype.emoji, theme:archetype.theme, dialogue:archetype.dialogue, boss:false, miniBoss:false };
  return { trainer, trainer2:null, isDouble:false, enemyTeam: generateEnemyTeam(floor, archetype.theme, false) };
}
function devEnsureTeamStats(){
  team.forEach(m=>{
    if(!m.computedStats){
      const sp = speciesOf(m);
      m.computedStats = calcStats(sp.base, m.ivs, m.evs, m.nature);
    }
  });
}

/* =================== Menu principal =================== */
function openDevMenu(){
  devSelectedTeam = [];
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:560px;position:relative;">
      <button class="patchnotes-close" id="devMenuCloseBtn">✕</button>
      <h2>◆ MODE DÉVELOPPEUR ◆</h2>

      <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">🧬 Équipe libre (<span id="devTeamCount">0</span>/6)</div>
      <div style="font-size:9px;color:var(--text-dim);margin-bottom:8px;">Choisis n'importe quel Pokémon, puis configure-le comme dans une partie normale (nature, EV/IV, attaques).</div>
      <div id="devTeamSlots" style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;min-height:22px;"></div>
      <input type="text" id="devPokeSearch" placeholder="Rechercher un Pokémon..." style="width:100%;padding:8px;margin-bottom:8px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);font-size:12px;box-sizing:border-box;">
      <div id="devPokeList" style="display:flex;flex-direction:column;gap:4px;max-height:170px;overflow-y:auto;margin-bottom:8px;"></div>
      <button class="btn secondary" id="devConfigureTeamBtn" style="width:100%;margin-bottom:16px;">Configurer cette équipe (${team.length} actuellement en jeu)</button>

      <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">⚔️ Combat</div>
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px;flex-wrap:wrap;">
        <label style="font-size:10px;color:var(--text-dim);">Étage :</label>
        <input type="number" id="devFloorInput" value="${towerFloor||1}" min="1" max="999" style="width:70px;padding:6px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);font-size:12px;">
        <label style="font-size:10px;color:var(--text-dim);margin-left:6px;">Difficulté :</label>
        <select id="devDifficultySelect" style="padding:6px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);font-size:12px;">
          <option value="facile">😊 Facile</option>
          <option value="normal">⚔️ Normal</option>
          <option value="difficile">💀 Difficile</option>
        </select>
      </div>
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap;">
        <label style="font-size:10px;color:var(--text-dim);">Dresseur :</label>
        <select id="devTrainerKindSelect" style="padding:6px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);font-size:12px;">
          <option value="normal">Normal</option>
          <option value="miniboss">⭐ Mini-Boss</option>
          <option value="boss">👑 Maître de Type</option>
          <option value="twin">👯 Jumeaux (combat double)</option>
        </select>
        <select id="devBossTypeSelect" style="padding:6px;background:#0b0b10;border:1px solid var(--line);border-radius:3px;color:var(--text-main);font-size:12px;" disabled>
          ${ALL_TYPES.map(t=>`<option value="${t}">${typeDisplayName(t)}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <button class="btn secondary" id="devGoTowerBtn" style="flex:1;">Aller à la Tour</button>
        <button class="btn" id="devFightBtn" style="flex:1;">⚔️ Combattre maintenant</button>
      </div>

      <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">🏘️ Village</div>
      <button class="btn secondary" id="devGoVillageBtn" style="width:100%;margin-bottom:10px;">Aller au Village</button>

      <div id="devMenuError" style="font-size:9px;color:var(--low);min-height:14px;text-align:center;"></div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('devMenuCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  const errEl = document.getElementById('devMenuError');

  document.getElementById('devDifficultySelect').value = difficulty;
  renderDevPokeList('');
  renderDevTeamSlots();
  document.getElementById('devPokeSearch').oninput = (e)=> renderDevPokeList(e.target.value);

  document.getElementById('devConfigureTeamBtn').onclick = ()=>{
    if(devSelectedTeam.length===0){ errEl.textContent = "Choisis au moins un Pokémon."; return; }
    team = devSelectedTeam.map(c=> defaultMember(c.lineId, c.stage));
    close();
    showBuilder();
  };

  document.getElementById('devTrainerKindSelect').onchange = (e)=>{
    document.getElementById('devBossTypeSelect').disabled = e.target.value!=='boss';
  };

  const applyFloorAndDifficulty = ()=>{
    towerFloor = Math.max(1, parseInt(document.getElementById('devFloorInput').value,10) || 1);
    difficulty = document.getElementById('devDifficultySelect').value;
  };

  document.getElementById('devGoTowerBtn').onclick = ()=>{
    if(team.length===0){ errEl.textContent = "Aucune équipe en jeu : configure-en une d'abord."; return; }
    applyFloorAndDifficulty();
    showScreen('screenTower');
    renderTower();
    close();
  };

  document.getElementById('devFightBtn').onclick = ()=>{
    if(team.length===0){ errEl.textContent = "Aucune équipe en jeu : configure-en une d'abord."; return; }
    applyFloorAndDifficulty();
    devEnsureTeamStats();
    const kind = document.getElementById('devTrainerKindSelect').value;
    const forcedType = document.getElementById('devBossTypeSelect').value;
    devEncounterOverride = buildDevEncounter(kind, forcedType);
    close();
    startBattle();
  };

  document.getElementById('devGoVillageBtn').onclick = ()=>{
    close();
    showScreen('screenVillage');
    renderVillage();
  };
}
