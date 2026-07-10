/* ==== combat/tower-events.js (généré depuis index.html) ==== */
/* Événements aléatoires entre les étages normaux de la Tour (ni Mini-Boss, ni Boss). */
const TOWER_EVENT_CHANCE = 0.25;

// PV/statut ne persistent qu'en mode Difficile (comme le reste du jeu) : le coût des events
// risqués doit donc toujours toucher un objet/de l'argent (qui persiste partout), avec en plus
// une morsure statut/PV réservée au Difficile où elle a vraiment un effet la prochaine bataille.
function eventLoseMoneyOrItem(amount){
  const ownedKeys = Object.keys(bag).filter(k=>bag[k]>0);
  if(ownedKeys.length>0){
    const key = rand(ownedKeys);
    bag[key]--;
    if(bag[key]<=0) delete bag[key];
    return `Tu perds ${ITEMS[key].name} dans la panique !`;
  }
  const lost = Math.min(money, amount);
  money -= lost;
  return lost>0 ? `Tu perds ${lost} 💰 dans la panique !` : "Heureusement, tu n'avais rien à perdre.";
}
const EVENT_STATUS_POOL = ['poison','brulure','paralysie','sommeil','gel'];
// En Difficile : vrai statut aléatoire (avec les immunités de type/talent du moteur de combat).
// En Facile/Normal (où PV/statut sont réinitialisés à chaque combat) : bloque un Pokémon
// aléatoire pour le prochain combat, seule conséquence qui persiste réellement dans ces modes.
function eventAfflictRandomMember(){
  if(difficulty==='difficile'){
    const alive = team.filter(m=>m.hp>0);
    if(alive.length===0) return '';
    const m = rand(alive);
    const sp = speciesOf(m);
    const shim = { name:sp.name, types:sp.types, ability:m.ability||(sp.abilities||lineOf(m.lineId).abilities)[0], status:m.status||null, sleepCounter:m.sleepCounter||0, safeguardTurns:0, confuseCounter:0 };
    const logs = [];
    inflictStatus(shim, rand(EVENT_STATUS_POOL), logs);
    m.status = shim.status;
    m.sleepCounter = shim.sleepCounter;
    return logs[0] || '';
  }
  const eligible = team.filter(m=>!m.eventBlocked);
  if(eligible.length<=1) return '';
  const m = rand(eligible);
  m.eventBlocked = true;
  return `${speciesOf(m).name} est trop secoué(e) pour combattre au prochain étage !`;
}

const TOWER_EVENTS = [
  // ---- Sûrs ----
  {
    id:'forgottenPurse', emoji:'💰', safe:true,
    flavor: floor=>`En montant vers l'étage ${floor}, tu remarques une bourse abandonnée sur le sol.`,
    actions: [
      { label:'Ramasser', resolve: ()=>{
          const amount = 40+Math.floor(Math.random()*60);
          money += amount;
          return `+${amount} 💰 trouvés !`;
      }}
    ]
  },
  {
    id:'healSpring', emoji:'💧', safe:true,
    flavor: floor=>`Sur le chemin de l'étage ${floor}, tu croises une source aux reflets étranges.`,
    actions: [
      { label:'Se reposer', resolve: ()=>{
          const alive = team.filter(m=>m.hp>0);
          if(alive.length===0) return "La source ne peut rien faire pour une équipe à terre...";
          const m = rand(alive);
          m.hp = m.computedStats.hp; m.status=null; m.sleepCounter=0;
          return `${speciesOf(m).name} est remis(e) sur pied !`;
      }}
    ]
  },
  // ---- Risqués ----
  {
    id:'suspiciousBush', emoji:'🌿', safe:false,
    flavor: floor=>`Un buisson s'agite bizarrement près du passage vers l'étage ${floor}...`,
    actions: [
      { label:'Fouiller (risqué)', resolve: ()=>{
          if(Math.random()<0.65){
            const keys = Object.keys(ITEMS).filter(k=>ITEMS[k].category!=='strat');
            const key = rand(keys);
            bag[key] = (bag[key]||0)+1;
            return `Tu trouves ${ITEMS[key].name} caché dans les feuilles !`;
          }
          const msg = eventLoseMoneyOrItem(30);
          const afflict = eventAfflictRandomMember();
          return `Une nuée d'insectes surgit ! ${msg}${afflict?' '+afflict:''}`;
      }},
      { label:'Ignorer', resolve: ()=> "Tu préfères ne pas prendre de risque." }
    ]
  },
  {
    id:'weirdMushrooms', emoji:'🍄', safe:false,
    flavor: floor=>`Tu repères des champignons luisants près de l'entrée de l'étage ${floor}.`,
    actions: [
      { label:'Manger (risqué)', resolve: ()=>{
          if(Math.random()<0.6){
            team.forEach(m=>{ m.hp = m.computedStats.hp; m.status=null; m.sleepCounter=0; });
            return "Étonnamment délicieux et revigorant : toute l'équipe est soignée !";
          }
          const msg = eventLoseMoneyOrItem(30);
          const afflict = eventAfflictRandomMember();
          return `Ces champignons étaient toxiques ! ${msg}${afflict?' '+afflict:''}`;
      }},
      { label:'Laisser', resolve: ()=> "Tu préfères ne pas y toucher." }
    ]
  },
  {
    id:'mysteryVendor', emoji:'🎰', safe:false,
    flavor: floor=>`Une vieille machine clignote sur le palier de l'étage ${floor}, réclamant une mise.`,
    actions: [
      { label:'Parier 50 💰 (risqué)', available:()=>money>=50, resolve: ()=>{
          money -= 50;
          if(Math.random()<0.5){ money += 150; return "Jackpot ! La machine recrache 150 💰 !"; }
          return "Rien ne sort... tu as perdu ta mise.";
      }},
      { label:'Ignorer', resolve: ()=> "Tu préfères garder ton argent." }
    ]
  },
  {
    id:'unstablePath', emoji:'🕳️', safe:false,
    flavor: floor=>`Le sol semble fragile sur un raccourci menant à l'étage ${floor}.`,
    actions: [
      { label:'Prendre le raccourci (risqué)', resolve: ()=>{
          if(Math.random()<0.55){
            const gain = 30+Math.floor(Math.random()*50);
            money += gain;
            const keys = Object.keys(ITEMS).filter(k=>ITEMS[k].category==='baie');
            const key = rand(keys);
            bag[key] = (bag[key]||0)+1;
            return `Le raccourci était sûr : +${gain} 💰 et ${ITEMS[key].name} !`;
          }
          const msg = eventLoseMoneyOrItem(40);
          const afflict = eventAfflictRandomMember();
          return `Le sol cède sous tes pas ! ${msg}${afflict?' '+afflict:''}`;
      }},
      { label:'Chemin sûr', resolve: ()=> "Tu restes prudent et poursuis normalement." }
    ]
  },
  {
    id:'shadyMerchant', emoji:'👤', safe:false,
    flavor: floor=>`Une silhouette te propose un échange étrange avant l'étage ${floor}.`,
    actions: [
      { label:'Échanger 80 💰 (risqué)', available:()=>money>=80, resolve: ()=>{
          money -= 80;
          if(Math.random()<0.5){
            const keys = Object.keys(ITEMS).filter(k=>ITEMS[k].category==='strat');
            const key = rand(keys);
            bag[key] = (bag[key]||0)+1;
            return `Bonne pioche ! Tu reçois ${ITEMS[key].name} !`;
          }
          const keys = Object.keys(ITEMS).filter(k=>ITEMS[k].category==='potion' && ITEMS[k].price<=120);
          const key = rand(keys);
          bag[key] = (bag[key]||0)+1;
          return `Le marchand disparaît en te laissant juste ${ITEMS[key].name}...`;
      }},
      { label:'Refuser', resolve: ()=> "Tu ignores l'inconnu et poursuis ta route." }
    ]
  },
  {
    id:'wildNest', emoji:'🐾', safe:false,
    flavor: floor=>`Tu entends des grognements près de l'entrée de l'étage ${floor}.`,
    actions: [
      { label:"S'approcher (risqué)", resolve: ()=>{
          if(Math.random()<0.5){
            if(!pcHasSpace()) return "Tu entends des bruits, mais ton PC est plein pour accueillir qui que ce soit.";
            const excluded = [...team.map(m=>m.lineId), ...pcBox.filter(x=>x).map(m=>m.lineId)];
            const pool = difficulty==='facile' ? buildFacileCandidates(excluded) : buildDraftCandidates(excluded);
            const choice = rand(pool);
            const line = lineOf(choice.lineId);
            const hasBranch = choice.branch!==undefined && choice.branch!==null;
            const sp = hasBranch ? line.branches[choice.branch] : line.stages[choice.stage];
            const member = difficulty==='facile' ? autoBuildMember(choice.lineId, choice.stage, choice.branch) : defaultMember(choice.lineId, choice.stage);
            depositToPC(member);
            return `${sp.name} rejoint discrètement ton PC !`;
          }
          const msg = eventLoseMoneyOrItem(30);
          const afflict = eventAfflictRandomMember();
          return `Une embuscade sauvage surprend ton équipe ! ${msg}${afflict?' '+afflict:''}`;
      }},
      { label:'Repartir sans bruit', resolve: ()=> "Tu t'éloignes discrètement." }
    ]
  },
];

let currentTowerEvent = null;
let pendingFloorReward = 0;

function maybeTriggerTowerEvent(reward){
  if(Math.random() >= TOWER_EVENT_CHANCE) return false;
  pendingFloorReward = reward;
  currentTowerEvent = rand(TOWER_EVENTS);
  document.getElementById('screenTower').classList.add('hidden');
  document.getElementById('screenEvent').classList.remove('hidden');
  renderTowerEvent();
  return true;
}
function renderTowerEvent(){
  const ev = currentTowerEvent;
  document.getElementById('eventTitle').textContent = ev.safe ? '✨ ÉVÉNEMENT' : '⚠️ ÉVÉNEMENT RISQUÉ';
  document.getElementById('eventEmoji').textContent = ev.emoji;
  document.getElementById('eventFlavor').textContent = ev.flavor(towerFloor);
  document.getElementById('eventOutcome').textContent = '';
  document.getElementById('eventContinueBtn').classList.add('hidden');
  const actionsWrap = document.getElementById('eventActions');
  actionsWrap.innerHTML = '';
  ev.actions.filter(a=>!a.available || a.available()).forEach(action=>{
    const btn = document.createElement('button');
    btn.className = 'btn secondary';
    btn.style.cssText = 'padding:8px 14px;font-size:10px;';
    btn.textContent = action.label;
    btn.onclick = ()=>{
      const outcome = action.resolve();
      document.getElementById('eventOutcome').textContent = outcome;
      actionsWrap.querySelectorAll('button').forEach(b=> b.disabled = true);
      document.getElementById('eventContinueBtn').classList.remove('hidden');
      saveGame();
    };
    actionsWrap.appendChild(btn);
  });
}
document.getElementById('eventContinueBtn').onclick = ()=>{
  document.getElementById('screenEvent').classList.add('hidden');
  document.getElementById('screenTower').classList.remove('hidden');
  renderTower(pendingFloorReward);
  pendingFloorReward = 0;
};
