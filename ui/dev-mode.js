/* ==== ui/dev-mode.js ==== */
// Mode développeur caché : cliquer 7 fois sur Lockpin dans le Dex, puis entrer le code.
// Flux : code → choix de la difficulté → sélection libre de l'équipe dans le Dex →
// team building (identique au jeu normal, selon la difficulté) → panneau dev dans la Tour.
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
    if(devModeUnlocked) startDevFlow();
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
      startDevFlow();
    } else {
      document.getElementById('devCodeError').textContent = 'Code incorrect.';
      input.value = '';
      input.focus();
    }
  };
  document.getElementById('devCodeSubmitBtn').onclick = submit;
  input.onkeydown = (e)=>{ if(e.key==='Enter') submit(); };
}

/* =================== Étapes 2-3 : difficulté, puis sélection libre via le Dex =================== */
let devDexSelectMode = false;
let devDexSelection = [];

function devDexEntryKey(c){ return (c.branch!==null && c.branch!==undefined) ? `${c.lineId}:b${c.branch}` : `${c.lineId}:s${c.stage}`; }
function devDexSelectionHas(entry){
  const key = devDexEntryKey(entry);
  return devDexSelection.some(c=> devDexEntryKey(c)===key);
}
function toggleDevDexSelection(entry){
  const key = devDexEntryKey(entry);
  const idx = devDexSelection.findIndex(c=> devDexEntryKey(c)===key);
  if(idx>=0){
    devDexSelection.splice(idx,1);
  } else {
    if(devDexSelection.length>=6) return;
    devDexSelection.push(entry);
  }
  renderDex();
  renderDevDexSelectionBar();
}

function startDevFlow(){
  openDifficultyChoice(enterDevDexSelectMode);
}

function enterDevDexSelectMode(){
  devDexSelectMode = true;
  devDexSelection = [];
  showScreen('screenDex');
  renderDex();
  renderDevDexSelectionBar();
}
function exitDevDexSelectMode(){
  devDexSelectMode = false;
  devDexSelection = [];
  const bar = document.getElementById('devDexSelectBar');
  if(bar) bar.classList.add('hidden');
}

function devDexSpeciesFor(c){
  const line = lineOf(c.lineId);
  return (c.branch!==null && c.branch!==undefined) ? line.branches[c.branch] : line.stages[c.stage];
}
function renderDevDexSelectionBar(){
  const bar = document.getElementById('devDexSelectBar');
  if(!bar) return;
  bar.classList.toggle('hidden', !devDexSelectMode);
  document.getElementById('devDexSelectCount').textContent = devDexSelection.length;
  const chips = document.getElementById('devDexSelectChips');
  chips.innerHTML = devDexSelection.map((c,i)=> `<span class="type-tag" data-idx="${i}" style="cursor:pointer;">${devDexSpeciesFor(c).name} ✕</span>`).join('')
    || '<span style="font-size:9px;color:var(--text-dim);">Aucun Pokémon sélectionné</span>';
  chips.querySelectorAll('[data-idx]').forEach(el=>{
    el.onclick = ()=> toggleDevDexSelection(devDexSelection[parseInt(el.dataset.idx,10)]);
  });
  document.getElementById('devDexConfirmBtn').disabled = devDexSelection.length===0;
}

// Même branchement que nextDraftRound() (draft/draft-core.js) en fin de draft normal :
// Facile → build auto direct vers la Tour, Normal/Difficile → éditeur manuel.
function finalizeDevTeam(){
  if(devDexSelection.length===0) return;
  team = devDexSelection.map(c=>
    difficulty==='facile' ? autoBuildMember(c.lineId, c.stage, c.branch) : defaultMember(c.lineId, c.stage, c.branch)
  );
  exitDevDexSelectMode();
  document.getElementById('screenDex').classList.add('hidden');
  if(difficulty==='facile') finalizeTeamAndGoToTower();
  else showBuilder();
}

document.getElementById('devDexCancelBtn').onclick = ()=>{ exitDevDexSelectMode(); renderDex(); };
document.getElementById('devDexConfirmBtn').onclick = finalizeDevTeam;

/* =================== Étape 5 : panneau dev permanent de la Tour =================== */
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

let devTowerPanelInitialized = false;
function renderDevTowerPanel(){
  const panel = document.getElementById('devTowerPanel');
  if(!panel) return;
  if(!devModeUnlocked){ panel.classList.add('hidden'); return; }
  panel.classList.remove('hidden');
  document.getElementById('devTowerFloorInput').value = towerFloor||1;
  if(!devTowerPanelInitialized){
    document.getElementById('devTowerEventSelect').innerHTML = TOWER_EVENTS.map(e=>`<option value="${e.id}">${e.emoji} ${e.id}</option>`).join('');
    document.getElementById('devTowerBossTypeSelect').innerHTML = ALL_TYPES.map(t=>`<option value="${t}">${typeDisplayName(t)}</option>`).join('');
    devTowerPanelInitialized = true;
  }
}

document.getElementById('devTowerToggleBtn').onclick = ()=>{
  document.getElementById('devTowerPanelBody').classList.toggle('hidden');
};
document.getElementById('devTowerFloorApplyBtn').onclick = ()=>{
  towerFloor = Math.max(1, parseInt(document.getElementById('devTowerFloorInput').value,10) || 1);
  renderTower();
};
document.getElementById('devTowerVillageBtn').onclick = ()=>{
  showScreen('screenVillage');
  renderVillage();
};
document.getElementById('devTowerEventTriggerBtn').onclick = ()=>{
  const id = document.getElementById('devTowerEventSelect').value;
  triggerTowerEventById(id);
};
document.getElementById('devTowerKindSelect').onchange = (e)=>{
  document.getElementById('devTowerBossTypeSelect').disabled = e.target.value!=='boss';
};
document.getElementById('devTowerFightBtn').onclick = ()=>{
  if(team.length===0) return;
  devEnsureTeamStats();
  const kind = document.getElementById('devTowerKindSelect').value;
  const forcedType = document.getElementById('devTowerBossTypeSelect').value;
  devEncounterOverride = buildDevEncounter(kind, forcedType);
  startBattle();
};
