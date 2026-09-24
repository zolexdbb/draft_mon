/* ==== SOMMAIRE ====
   Cœur du système de draft : rareté des lignées, écran de choix (3 cartes par tour, 6 tours),
   construction d'un membre par défaut, et movepool progressif par stade. Repères :
   - L.10-17 : LEGENDARY_IDS/PSEUDO_IDS/RARE_IDS — listes d'ids qui pilotent la rareté au tirage
   - L.18-23 : lineWeight — poids de tirage d'une lignée (utilisé partout : draft, équipes adverses)
   - L.29-32 : rarityInfo — badge de rareté affiché sur une carte (mode Classic/Normal/Difficile)
   - L.33-45 : weightedSampleCandidates — tire N candidats sans remise, pondérés
   - L.46-49 : stageMultiplier — un stade précoce apparaît plus souvent qu'un stade évolué
   - L.51-fin(69) : movepoolForStage — débloque progressivement le movepool selon le stade
   - L.71-fin(85) : defaultMember — squelette d'un membre nouvellement drafté (mode Normal/Difficile)
   - L.87-fin(99) : initDraft — remet à zéro le draft au lancement d'une nouvelle partie
   - L.100-fin(206): nextDraftRound/renderDraftProgress/renderDraftTeamStrip — l'écran de draft
     (3 cartes à choisir, barre de progression, reroll gratuit)
   - L.208-fin : finalizeTeamAndGoToTower — calcule les stats finales et lance la Tour
==== */
const LEGENDARY_IDS = ['articuno','zapdos','moltres','mewtwo','mew','raikou','entei','suicune','lugia','hooh','celebi','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','deoxys','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina','cresselia','phione','manaphy','darkrai','shaymin','arceus','victini','cobalion','terrakion','virizion','tornadus','thundurus','reshiram','zekrom','landorus','kyurem','keldeo','meloetta','genesect','xerneas','yveltal','zygarde','diancie','hoopa','volcanion','tokorico','tokopiyon','tokotoro','tokopisco','cosmog','necrozma','magearna','marshadow','zeraora','vemini','zeroid','mouscoto','cancrelove','cablifere','bamboiselle','katagami','engloutyran','amaama','pierroteknik','zacian','zamazenta','ethernatos','wushours','zarude','regieleki','regidrago','blizzeval','spectreval','sylveroy','amovenus','woochien','chienpao','tinglu','chiyu','okidogi','munkidori','fezandipiti','ogerpon','koraidon','miraidon','terapagos','pecharunt','greattusk','screamtail','brutebonnet','fluttermane','slitherwing','sandyshocks','roaringmoon','ragingbolt','walkingwake','gougingfire','irontreads','ironbundle','ironhands','ironjugulis','ironmoth','ironthorns','ironvaliant','ironleaves','ironboulder','ironcrown'];
const PSEUDO_IDS = ['dratini','larvitar','bagon','gible','axew','deino','goomy','bebecaille','fantyrm','frigibax'];
const RARE_IDS = ['lapras','snorlax','aerodactyl','scyther','tauros','kangaskhan','pinsir','heracross','skarmory','miltank','sneasel','houndour','girafarig','qwilfish','unown','absol','relicanth','mawile','beldum','riolu','spiritomb','rotom','zorua','larvesta','druddigon','tirtouga','archen','tyrunt','amaura','galvagon','galvagla','hydragon','hydragla','gimmighoul','archaludon','dipplin','cyclizar','dondozo','tatsugiri','poltchageist'];
// Poids de tirage d'une lignée selon sa rareté (légendaire = très rare, pseudo-légendaire/rare = moins fréquent, sinon commun).
function lineWeight(line){
  if(LEGENDARY_IDS.includes(line.id)) return 0.5;
  if(PSEUDO_IDS.includes(line.id)) return 3;
  if(RARE_IDS.includes(line.id)) return 6;
  return 10;
}
const TOTAL_WEIGHT = LINES.reduce((a,l)=>a+lineWeight(l),0);
// Détermine le badge de rareté à afficher sur une carte de draft (mode Classic/Normal/Difficile).
function rarityInfo(line, stageIdx){
  if(LEGENDARY_IDS.includes(line.id)) return {label:'Légendaire', css:'rarity-legendaire'};
  if(PSEUDO_IDS.includes(line.id) && stageIdx===line.stages.length-1) return {label:'Pseudo-légendaire', css:'rarity-pseudo'};
  if(RARE_IDS.includes(line.id)) return {label:'Rare', css:'rarity-rare'};
  if(stageIdx===0) return {label:'Commun', css:'rarity-commun'};
  if(stageIdx===line.stages.length-1) return {label:'Évolution finale', css:'rarity-evo'};
  return {label:'Évolution', css:'rarity-evo'};
}
// Tire n candidats sans remise dans une liste pondérée (utilisé pour les 3 cartes de draft proposées à chaque tour).
function weightedSampleCandidates(candidates, n){
  let pool = [...candidates];
  const result = [];
  for(let k=0;k<n && pool.length>0;k++){
    const total = pool.reduce((a,p)=>a+p.w,0);
    let r = Math.random()*total;
    let idx=0;
    for(;idx<pool.length-1;idx++){ r-=pool[idx].w; if(r<=0) break; }
    result.push(pool[idx]);
    pool.splice(idx,1);
  }
  return result;
}
// Un stade non-évolué apparaît beaucoup plus souvent au draft qu'un stade déjà évolué.
function stageMultiplier(stageIdx){
  if(stageIdx===0) return 1;
  if(stageIdx===1) return 0.35;
  return 0.12;
}
// Movepool disponible pour un stade non-branché : plus le stade est précoce, moins de capacités
// puissantes sont débloquées (les capacités de statut restent toujours toutes disponibles).
function movepoolForStage(line, stageIdx){
  const stagesCount = line.stages.length;
  const allIds = line.moveIds;
  const statusIds = allIds.filter(id => MOVES[id].cat==='status');
  const sorted = allIds.filter(id => MOVES[id].cat!=='status').sort((a,b)=>MOVES[a].power-MOVES[b].power);
  const total = sorted.length;
  let damaging;
  if(stagesCount===1){
    damaging = sorted;
  } else if(stagesCount===2){
    const cut = Math.max(3, total-2);
    damaging = stageIdx===0 ? sorted.slice(0,cut) : sorted;
  } else {
    const cut0 = Math.max(3, total-3);
    const cut1 = Math.max(cut0+1, total-1);
    damaging = stageIdx===0 ? sorted.slice(0,cut0) : (stageIdx===1 ? sorted.slice(0,cut1) : sorted);
  }
  return [...damaging, ...statusIds];
}

// Construit un membre d'équipe "vierge" (IV 31 partout, pas d'EV, pas d'attaques) juste après un
// choix de draft en mode Normal/Difficile — le joueur le complète ensuite dans l'éditeur.
function defaultMember(lineId, initialStage, branch){
  const line = lineOf(lineId);
  const hasBranch = branch!==undefined && branch!==null;
  const sp = hasBranch ? line.branches[branch] : line.stages[initialStage||0];
  return {
    lineId, stage: initialStage||0, branch: hasBranch ? branch : null,
    nature: NATURES[0],
    ivs:{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},
    evs:{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},
    ability:null,
    moves:[null,null,null,null],
    heldItem: null,
    unownForm: pickFormSprite(sp.name)
  };
}

// Remet à zéro l'état d'une partie et lance le premier tour de draft (nouvelle partie).
function initDraft(){
  draftRound = 0;
  team = [];
  money = 100 + metaStartMoneyBonus();
  bag = {};
  metaStartItems().forEach(key=>{ bag[key] = (bag[key]||0)+1; });
  rerollsLeft = metaFreeRerolls();
  pcBox = [null,null,null,null,null,null];
  bossTypesUsed = [];
  battleState = null;
  battleInProgress = false;
  nextDraftRound();
}
// Affiche la barre de progression du draft (6 points : faits/en cours/à venir).
function renderDraftProgress(){
  const wrap = document.getElementById('draftProgress');
  wrap.innerHTML='';
  for(let i=0;i<6;i++){
    const s = document.createElement('span');
    if(i<draftRound) s.className='done';
    else if(i===draftRound) s.className='active';
    wrap.appendChild(s);
  }
}
// Affiche la bande d'aperçu de l'équipe déjà draftée (6 emplacements, remplis ou vides).
function renderDraftTeamStrip(){
  const strip = document.getElementById('draftTeamStrip');
  strip.innerHTML='';
  for(let i=0;i<6;i++){
    const slot = document.createElement('div');
    if(team[i]){
      const sp = speciesOf(team[i]);
      slot.className = 'draft-team-slot filled';
      slot.innerHTML = `<div class="emoji">${getSpriteHTML(sp.name, team[i].unownForm)}</div><div class="pname">${sp.name}</div>`;
    } else {
      slot.className = 'draft-team-slot';
      slot.innerHTML = `<div class="emoji">?</div><div class="pname">Vide</div>`;
    }
    strip.appendChild(slot);
  }
}
// Lance un tour de draft : tire 3 candidats (Facile = formes finales, sinon tous stades), affiche
// leurs cartes complètes (stats, types, talent, taux d'apparition) ; termine le draft au 6e Pokémon.
function nextDraftRound(){
  if(draftRound>=6){
    if(difficulty==='facile') finalizeTeamAndGoToTower();
    else showBuilder();
    return;
  }
  const draftedIds = team.map(m=>m.lineId);
  const isFacile = difficulty==='facile';
  const candidates = isFacile ? buildFacileCandidates(draftedIds) : buildDraftCandidates(draftedIds);
  currentChoices = weightedSampleCandidates(candidates, 3);
  renderDraftProgress();
  renderDraftTeamStrip();
  document.getElementById('draftSub').textContent = `Choisis un Pokémon pour ton équipe (${draftRound+1}/6)`;
  const rerollWrap = document.getElementById('draftRerollWrap');
  if(rerollWrap){
    rerollWrap.innerHTML = rerollsLeft>0
      ? `<button class="btn secondary" id="draftRerollBtn" style="padding:6px 12px;font-size:9px;">🔄 Reroll gratuit (${rerollsLeft} restant${rerollsLeft>1?'s':''})</button>`
      : '';
    const rb = document.getElementById('draftRerollBtn');
    if(rb) rb.onclick = ()=>{ rerollsLeft--; nextDraftRound(); };
  }
  const wrap = document.getElementById('draftCards');
  wrap.innerHTML='';
  currentChoices.forEach(choice=>{
    const line = lineOf(choice.lineId);
    const hasBranch = choice.branch!==undefined && choice.branch!==null;
    const sp = hasBranch ? line.branches[choice.branch] : line.stages[choice.stage];
    const rarity = isFacile
      ? {label: LEGENDARY_IDS.includes(line.id)?'Légendaire':(PSEUDO_IDS.includes(line.id)?'Pseudo-légendaire':(RARE_IDS.includes(line.id)?'Rare':'Commun')),
         css: LEGENDARY_IDS.includes(line.id)?'rarity-legendaire':(PSEUDO_IDS.includes(line.id)?'rarity-pseudo':(RARE_IDS.includes(line.id)?'rarity-rare':'rarity-commun'))}
      : rarityInfo(line, choice.stage);
    const ability = (sp.abilities || line.abilities)[0];
    const evoline = hasBranch
      ? [...line.stages.map(s=>s.name), sp.name].join(' → ')
      : line.stages.map(s=>s.name).join(' → ');
    const rateLabel = isFacile ? facileAppearanceRate(choice.w).toFixed(2) : appearanceRate(line, choice.stage).toFixed(2);
    const card = document.createElement('div');
    card.className='poke-card';
    card.innerHTML = `
      <span class="rarity-badge ${rarity.css}">${rarity.label}</span>
      <div class="emoji">${getSpriteHTML(sp.name)}</div>
      <div class="pname">${sp.name}</div>
      <div class="evoline">${evoline}</div>
      <div class="types-row">${sp.types.map(t=>typeTagHTML(t)).join('')}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px;margin:6px 0;background:#0b0b10;border:1px solid var(--line);border-radius:3px;padding:6px;">
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">PV<br><b style="color:var(--text-main);font-size:13px;">${sp.base.hp}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Atq<br><b style="color:var(--text-main);font-size:13px;">${sp.base.atk}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Déf<br><b style="color:var(--text-main);font-size:13px;">${sp.base.def}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">AtqSp<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spa}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">DéfSp<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spd}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Vit<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spe}</b></div>
      </div>
      <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;">Talent : ${ability}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-bottom:5px;line-height:1.4;">${ABILITY_DESC[ability]||''}</div>
      <div class="dex-rate">Taux d'apparition : ${rateLabel}%</div>
    `;
    card.onclick = ()=>{
      if(isFacile){
        team.push(autoBuildMember(choice.lineId, choice.stage, choice.branch));
      } else {
        team.push(defaultMember(choice.lineId, choice.stage));
      }
      draftRound++;
      nextDraftRound();
    };
    wrap.appendChild(card);
  });
}

// Calcule les stats finales de toute l'équipe draftée et lance la Tour de Combat (fin du draft/de l'éditeur).
function finalizeTeamAndGoToTower(){
  team.forEach(m=>{
    const sp = speciesOf(m);
    m.computedStats = calcStats(sp.base, m.ivs, m.evs, m.nature);
  });
  document.getElementById('screenDraft').classList.add('hidden');
  document.getElementById('screenBuilder').classList.add('hidden');
  document.getElementById('screenTower').classList.remove('hidden');
  towerFloor = 1;
  renderTower();
}
