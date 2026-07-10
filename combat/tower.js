/* ==== combat/tower.js (généré depuis index.html) ==== */
function isBossFloor(floor){ return floor%10===0; }
function isMiniBossFloor(floor){ return floor%5===0 && !isBossFloor(floor); }
function moneyReward(floor){
  let base = 20 + floor*8;
  if(isBossFloor(floor)) base *= 3;
  else if(isMiniBossFloor(floor)) base *= 1.75;
  return Math.round(base);
}

const TRAINER_ARCHETYPES = [
  {title:'Randonneur',     emoji:'🥾', theme:null,       minFloor:1, dialogue:"J'adore explorer les chemins de campagne !"},
  {title:'Nageuse',        emoji:'🏊', theme:'eau',      minFloor:1, dialogue:"L'eau est mon élément, tu vas te noyer !"},
  {title:'Karatéka',       emoji:'🥋', theme:'combat',   minFloor:1, dialogue:"Mon entraînement est sans faille !"},
  {title:'Cueilleuse',     emoji:'🧺', theme:'plante',   minFloor:1, dialogue:"Mes Pokémon plante sont en pleine floraison !"},
  {title:'Cycliste',       emoji:'🚴', theme:null,       minFloor:1, dialogue:"La vitesse, c'est ma spécialité !"},
  {title:'Scientifique',   emoji:'🔬', theme:null,       minFloor:2, dialogue:"J'ai étudié mes Pokémon à la loupe..."},
  {title:'Pompier',        emoji:'🔥', theme:'feu',      minFloor:2, dialogue:"Mon équipe va tout réduire en cendres !"},
  {title:'Géologue',       emoji:'⛏️',  theme:'roche',   minFloor:2, dialogue:"Mes Pokémon sont solides comme la roche !"},
  {title:'Électricien',    emoji:'⚡', theme:'electrik', minFloor:2, dialogue:"Tiens bon face à mon voltage !"},
  {title:'Chasseuse',      emoji:'🏹', theme:null,       minFloor:3, dialogue:"Je traque les dresseurs faibles !"},
  {title:'Dresseuse Psy',  emoji:'🔮', theme:'psy',      minFloor:3, dialogue:"Je lis dans tes pensées… tu vas perdre."},
  {title:'Noctambule',     emoji:'👻', theme:'fantome',  minFloor:3, dialogue:"L'obscurité est mon alliée !"},
  {title:'Glaciologiste',  emoji:'🧊', theme:'glace',    minFloor:4, dialogue:"Le froid ralentit tes réflexes..."},
  {title:'Empoisonneur',   emoji:'☠️', theme:'poison',   minFloor:4, dialogue:"Mon venin est lent... mais mortel."},
  {title:'Vétéran',        emoji:'🎖️', theme:null,       minFloor:5, dialogue:"J'ai traversé cent tours de combat. Et toi ?"},
  {title:'Élite',          emoji:'⭐', theme:null,       minFloor:6, dialogue:"Seuls les meilleurs arrivent jusqu'à moi."},
];
const TRAINER_FIRST_NAMES = ['Théo','Lucie','Marc','Sarah','Hugo','Emma','Léo','Chloé','Nathan','Lina','Maxime','Inès','Paul','Camille','Yanis','Manon','Romain','Jade','Kévin','Alicia'];

// ---- Maîtres de Type (boss) : un circuit sans répétition des 17 types par run ----
const ALL_TYPES = Object.keys(TYPE_EMOJI);
function typeDisplayName(type){ return type.charAt(0).toUpperCase()+type.slice(1); }
function pickBossType(){
  let available = ALL_TYPES.filter(t => !bossTypesUsed.includes(t));
  if(available.length===0){ bossTypesUsed = []; available = ALL_TYPES; }
  const type = rand(available);
  bossTypesUsed.push(type);
  return type;
}
const TYPE_MASTER_DIALOGUE = {
  normal:   "La simplicité est ma plus grande force !",
  feu:      "Laisse-moi t'embraser de passion !",
  eau:      "Mon équipe déferle comme une vague !",
  plante:   "Mes racines sont profondément ancrées dans la victoire !",
  electrik: "Prépare-toi à un choc électrisant !",
  vol:      "Je plane loin au-dessus de ta portée !",
  poison:   "Un seul contact, et c'est terminé pour toi !",
  sol:      "Je te ferai mordre la poussière !",
  insecte:  "Mon armée grouillante ne connaît pas la pitié !",
  combat:   "Seule la force brute compte ici !",
  glace:    "Je vais te geler sur place !",
  psy:      "J'ai déjà prévu ta défaite...",
  fantome:  "Tes pires cauchemars vont se réaliser !",
  roche:    "Solide comme le roc, inébranlable !",
  dragon:   "Les dragons obéissent à ma volonté !",
  acier:    "Mon armure est impénétrable !",
  tenebres: "L'obscurité ne pardonne à personne !",
};

function generateTrainer(floor){
  const boss = isBossFloor(floor), miniBoss = isMiniBossFloor(floor);
  if(boss){
    const type = pickBossType();
    const name = rand(TRAINER_FIRST_NAMES);
    return {
      name: `👑 MAÎTRE ${typeDisplayName(type).toUpperCase()} ${name}`,
      emoji: TYPE_EMOJI[type], theme: type, dialogue: TYPE_MASTER_DIALOGUE[type],
      boss: true, miniBoss: false, masterType: type
    };
  }
  const available = TRAINER_ARCHETYPES.filter(a => floor >= a.minFloor);
  // Aux étages élevés, favoriser les archétypes avancés
  let pool;
  if(floor >= 7) pool = available.filter(a => a.minFloor >= 5);
  else if(floor >= 5) pool = available.filter(a => a.minFloor >= 3);
  else if(floor >= 3) pool = available.filter(a => a.minFloor >= 2);
  else pool = available.filter(a => a.minFloor === 1);
  if(pool.length === 0) pool = available;
  const archetype = rand(pool);
  const name = rand(TRAINER_FIRST_NAMES);
  const prefix = miniBoss ? '⭐ Mini-Boss ' : '';
  return { name:`${prefix}${archetype.title} ${name}`, emoji:archetype.emoji, theme:archetype.theme, dialogue:archetype.dialogue, boss:false, miniBoss };
}

/* =================== SAUVEGARDE =================== */
function renderTower(reward){
  document.getElementById('floorNum').textContent = towerFloor;
  updateBestFloor(towerFloor);
  const sizes = [3,3,4,4,5,6];
  let size = sizes[Math.min(towerFloor-1, sizes.length-1)];
  if(isBossFloor(towerFloor)) size = Math.min(6, size+1);
  const badge = isBossFloor(towerFloor) ? ' · 👑 ÉTAGE BOSS !' : (isMiniBossFloor(towerFloor) ? ' · ⭐ Mini-Boss' : '');
  document.getElementById('floorDesc').innerHTML = `Équipe ennemie : ${size} Pokémon — niveau de menace ${towerFloor}${badge}<br>Meilleur étage : ${currentBestFloor()} · Mode : ${difficulty==='facile'?'😊 Facile':(difficulty==='difficile'?'💀 Difficile':'⚔️ Normal')} · 💰 ${money}`;
  const rewardEl = document.getElementById('floorReward');
  if(rewardEl){
    rewardEl.textContent = reward ? `+${reward} 💰 gagnés au combat précédent !` : '';
  }
  saveGame();
}
document.getElementById('fightBtn').onclick = ()=>{ startBattle(); };

// Échantillonnage pondéré par lignée (réutilise lineWeight du draft : les légendaires
// deviennent aussi rares dans les équipes adverses que dans le draft du joueur).
function weightedSampleLines(lines, n){
  let pool = lines.map(l=>({l, w: lineWeight(l)}));
  const result = [];
  for(let k=0;k<n && pool.length>0;k++){
    const total = pool.reduce((a,p)=>a+p.w,0);
    let r = Math.random()*total;
    let idx=0;
    for(;idx<pool.length-1;idx++){ r-=pool[idx].w; if(r<=0) break; }
    result.push(pool[idx].l);
    pool.splice(idx,1);
  }
  return result;
}

function generateEnemyTeam(floor, trainerTheme, isBoss){
  const sizes = [3,3,4,4,5,6];
  let size = sizes[Math.min(floor-1, sizes.length-1)];
  let strength = Math.min(1, 0.3 + floor*0.1);
  if(isBossFloor(floor)){ size = Math.min(6, size+1); strength = Math.min(1, strength+0.25); }
  else if(isMiniBossFloor(floor)){ strength = Math.min(1, strength+0.12); }

  // Construire le pool en fonction du thème du dresseur
  let linePool;
  if(isBoss){
    // Maître de Type : équipe 100% du type (rareté légendaire toujours atténuée par le poids du draft)
    const themed = LINES.filter(l =>
      l.stages.some(s => s.types.includes(trainerTheme)) ||
      (l.branches && l.branches.some(b => b.types.includes(trainerTheme)))
    );
    linePool = weightedSampleLines(themed, size);
    if(linePool.length < size){
      const extra = shuffle(LINES.filter(l => !linePool.includes(l))).slice(0, size - linePool.length);
      linePool = [...linePool, ...extra];
    }
  } else if(trainerTheme){
    const themed = LINES.filter(l =>
      l.stages.some(s => s.types.includes(trainerTheme)) ||
      (l.branches && l.branches.some(b => b.types.includes(trainerTheme)))
    );
    // Si assez de Pokémon thématiques : 70% du thème, 30% random
    const themeCount = Math.ceil(size * 0.7);
    const themedPicked = weightedSampleLines(themed, Math.min(themeCount, themed.length));
    const otherPool = LINES.filter(l => !themedPicked.includes(l));
    const randPicked = weightedSampleLines(otherPool, Math.max(0, size - themedPicked.length));
    linePool = [...themedPicked, ...randPicked].slice(0, size);
    if(linePool.length < size){
      const extra = shuffle(LINES.filter(l => !linePool.includes(l))).slice(0, size - linePool.length);
      linePool = [...linePool, ...extra];
    }
  } else {
    linePool = weightedSampleLines(LINES, size);
  }

  return linePool.map(line=>{
    const id = line.id;
    const maxStage = line.stages.length-1;
    let stage = 0;
    for(let s=1; s<=maxStage; s++){
      if(Math.random() < Math.min(0.9, 0.15 + floor*0.13)) stage = s;
    }
    let branch = null;
    if(line.branches && Math.random() < Math.min(0.85, 0.15 + floor*0.13)){
      // Si thème : préférer la branche du bon type
      if(trainerTheme){
        const themeBranch = line.branches.findIndex(b => b.types.includes(trainerTheme));
        branch = themeBranch >= 0 ? themeBranch : Math.floor(Math.random()*line.branches.length);
      } else {
        branch = Math.floor(Math.random()*line.branches.length);
      }
    }
    const sp = branch!==null ? line.branches[branch] : line.stages[stage];
    const ivs = {hp:31,atk:31,def:31,spa:31,spd:31,spe:31};
    const totalEv = Math.round(510*strength);
    const evs = {hp:0,atk:0,def:0,spa:0,spd:0,spe:0};
    let remaining = totalEv;
    const statKeys = shuffle(['hp','atk','def','spa','spd','spe']);
    statKeys.forEach((k,i)=>{
      if(i===statKeys.length-1){ evs[k]=Math.min(252,remaining); }
      else { const give = Math.min(252, Math.round(remaining*(0.2+Math.random()*0.3))); evs[k]=give; remaining-=give; }
    });
    const nature = rand(NATURES.filter(n=>n.plus));
    const stats = calcStats(sp.base, ivs, evs, nature);
    const movepool = movepoolFor({lineId:id, stage, branch});
    // L'IA aux étages élevés prend les meilleures attaques (pas random)
    const moveIds = floor >= 4
      ? pickSmartMoves(movepool, sp, floor)
      : shuffle(movepool).slice(0,4);
    return {
      lineId:id, stage, branch, name:sp.name, types:sp.types, unownForm: sp.name==='Zarbi' ? pickRandomZarbiForm() : null, moveObjs: moveIds.map(mid=>MOVES[mid]), ppCur: moveIds.map(mid=>basePP(MOVES[mid])),
      ability: rand(sp.abilities || line.abilities),
      stats, maxHp: stats.hp, hp: stats.hp, ...freshBattleFields()
    };
  });
}

function awardBadge(type){
  if(!badges[difficulty]) badges[difficulty] = [];
  const isNew = !badges[difficulty].includes(type);
  if(isNew) badges[difficulty].push(type);
  try { localStorage.setItem(badgeKeyFor(difficulty), JSON.stringify(badges[difficulty])); } catch(e){}
  return isNew;
}
function floorCleared(){
  const clearedFloor = towerFloor;
  const wasBoss = battleState.trainer && battleState.trainer.boss;
  const wasMiniBoss = battleState.trainer && battleState.trainer.miniBoss;
  const bossMasterType = battleState.trainer && battleState.trainer.masterType;
  battleState.player.forEach((c,i)=>{
    if(difficulty!=='difficile'){
      c.hp = c.maxHp; c.status=null; c.sleepCounter=0; c.confuseCounter=0;
    }
    resetBattleFields(c);
    const m = team[i];
    if(m){
      m.hp = c.hp; m.status = c.status; m.sleepCounter = c.sleepCounter;
      if(c.itemUsed) m.heldItem = null;
    }
  });
  const reward = moneyReward(clearedFloor);
  money += reward;
  towerFloor++;
  document.getElementById('screenBattle').classList.add('hidden');
  if(wasBoss){
    const newBadge = bossMasterType ? awardBadge(bossMasterType) : false;
    document.getElementById('screenVillage').classList.remove('hidden');
    renderVillage(reward, newBadge ? bossMasterType : null);
  } else if(wasMiniBoss && difficulty==='difficile'){
    document.getElementById('screenMiniCenter').classList.remove('hidden');
    renderMiniCenter(reward);
  } else if(maybeTriggerTowerEvent(reward)){
    // renderTowerEvent() already handled the screen switch.
  } else {
    document.getElementById('screenTower').classList.remove('hidden');
    renderTower(reward);
  }
}

