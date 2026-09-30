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
const LEGENDARY_IDS = ['articuno','zapdos','moltres','mewtwo','raikou','entei','suicune','lugia','hooh','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina','cresselia','cobalion','terrakion','virizion','tornadus','thundurus','reshiram','zekrom','landorus','kyurem','xerneas','yveltal','zygarde','tokorico','tokopiyon','tokotoro','tokopisco','cosmog','necrozma','vemini','zeroid','mouscoto','cancrelove','cablifere','bamboiselle','katagami','engloutyran','amaama','pierroteknik','zacian','zamazenta','ethernatos','wushours','regieleki','regidrago','blizzeval','spectreval','sylveroy','amovenus','woochien','chienpao','tinglu','chiyu','okidogi','munkidori','fezandipiti','ogerpon','koraidon','miraidon','terapagos','greattusk','screamtail','brutebonnet','fluttermane','slitherwing','sandyshocks','roaringmoon','ragingbolt','walkingwake','gougingfire','irontreads','ironbundle','ironhands','ironjugulis','ironmoth','ironthorns','ironvaliant','ironleaves','ironboulder','ironcrown'];
// Pokémon Fabuleux (Mythical) : séparés des Légendaires (rareté propre, voir lineWeight), comme dans les jeux officiels.
const FABULEUX_IDS = ['mew','celebi','jirachi','deoxys','phione','manaphy','darkrai','shaymin','arceus','victini','keldeo','meloetta','genesect','diancie','hoopa','volcanion','magearna','marshadow','zeraora','zarude','pecharunt'];
const PSEUDO_IDS = ['dratini','larvitar','bagon','gible','axew','deino','goomy','bebecaille','fantyrm','frigibax'];
const RARE_IDS = ['lapras','snorlax','aerodactyl','scyther','tauros','kangaskhan','pinsir','heracross','skarmory','miltank','sneasel','houndour','girafarig','qwilfish','unown','absol','relicanth','mawile','beldum','riolu','spiritomb','rotom','zorua','larvesta','druddigon','tirtouga','archen','tyrunt','amaura','galvagon','galvagla','hydragon','hydragla','gimmighoul','archaludon','dipplin','cyclizar','dondozo','tatsugiri','poltchageist'];
// Poids de tirage d'une lignée selon sa rareté (légendaire = la plus rare, fabuleux un peu moins,
// pseudo-légendaire/rare = moins fréquent, sinon commun).
function lineWeight(line){
  if(LEGENDARY_IDS.includes(line.id)) return 0.25;
  if(FABULEUX_IDS.includes(line.id)) return 0.5;
  if(PSEUDO_IDS.includes(line.id)) return 3;
  if(RARE_IDS.includes(line.id)) return 6;
  return 10;
}
const TOTAL_WEIGHT = LINES.reduce((a,l)=>a+lineWeight(l),0);
// Détermine le badge de rareté à afficher sur une carte de draft (mode Classic/Normal/Difficile).
function rarityInfo(line, stageIdx){
  if(LEGENDARY_IDS.includes(line.id)) return {label:'Légendaire', css:'rarity-legendaire'};
  if(FABULEUX_IDS.includes(line.id)) return {label:'Fabuleux', css:'rarity-fabuleux'};
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
    unownForm: pickFormSprite(sp.name),
    shiny: false
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
      slot.innerHTML = `<div class="emoji">${getSpriteHTML(sp.name, team[i].unownForm, 'front', false, team[i].shiny)}</div><div class="pname">${sp.name}${team[i].shiny?shinyBadgeHTML():''}</div>`;
    } else {
      slot.className = 'draft-team-slot';
      slot.innerHTML = `<div class="emoji">?</div><div class="pname">Vide</div>`;
    }
    strip.appendChild(slot);
  }
}
// Aperçu du build complet d'un membre en mode Facile (objet tenu, nature, répartition des stats
// finales après EV/nature, et les 4 attaques déjà choisies), affiché sur la carte de draft pour
// aider à choisir sans deviner ce qu'on va obtenir. Les barres de stats reprennent le même code
// couleur/mise en avant nature-plus/nature-minus que l'éditeur d'équipe (ui/editor.js).
function buildPreviewHTML(member){
  const sp = speciesOf(member);
  const stats = calcStats(sp.base, member.ivs, member.evs, member.nature);
  const statBarColor = (val)=>{
    if(val>=150) return '#6F35FC';
    if(val>=110) return '#EE8130';
    if(val>=80)  return '#7AC74C';
    if(val>=50)  return '#F7D02C';
    return '#C22E28';
  };
  const statBar = (stat)=>{
    const val = stats[stat];
    const ev = member.evs[stat]||0;
    const cls = member.nature.plus===stat ? 'nature-plus' : member.nature.minus===stat ? 'nature-minus' : '';
    const pct = Math.min(100, Math.round(val/255*100));
    return `<div class="stat-bar-row ${cls}">
      <span class="stat-bar-label">${STAT_LABEL[stat]}</span>
      <span class="stat-bar-val">${val}</span>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%;background:${statBarColor(val)};"></div></div>
      <span style="width:38px;flex-shrink:0;font-size:8px;text-align:right;color:${ev>0?'var(--accent)':'var(--text-dim)'};">${ev>0?`${ev} EV`:''}</span>
    </div>`;
  };
  const natureNote = member.nature.plus
    ? ` (<span style="color:var(--good);">+${STAT_LABEL[member.nature.plus]}</span> / <span style="color:var(--low);">-${STAT_LABEL[member.nature.minus]}</span>)`
    : ' (neutre)';
  const itemHTML = member.heldItem
    ? `<div style="display:flex;align-items:center;gap:5px;font-size:9px;color:var(--text-dim);margin-bottom:6px;"><span style="width:16px;height:16px;display:inline-block;">${itemIconHTML(member.heldItem, 16)}</span>${ITEMS[member.heldItem].name}</div>`
    : '';
  const movesHTML = member.moves.filter(Boolean).map(id=>{
    const mv = MOVES[id];
    return `<div style="display:flex;align-items:center;gap:6px;margin:3px 0;">${typeTagHTML(mv.type,{style:'font-size:8px;padding:2px 6px;flex-shrink:0;'})}<span style="font-size:9px;color:var(--text-main);">${mv.name}</span></div>`;
  }).join('');
  return `
    <div style="background:#0b0b10;border:1px solid var(--line);border-radius:3px;padding:8px;margin:6px 0;text-align:left;">
      ${itemHTML}
      <div style="font-size:8px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;">Nature : <span style="color:var(--text-main);text-transform:none;letter-spacing:0;">${member.nature.name}</span>${natureNote}</div>
      <div style="font-size:8px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;">Stats (répartition des EV)</div>
      <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:6px;">
        ${statBar('hp')}${statBar('atk')}${statBar('def')}${statBar('spa')}${statBar('spd')}${statBar('spe')}
      </div>
      <div style="font-size:8px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;">Attaques</div>
      ${movesHTML}
    </div>`;
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
  // Chance de chromatique tirée pour chaque carte proposée ce tour (visible avant de choisir) ; conservée
  // pour toujours si le joueur choisit cette carte, oubliée sinon.
  currentChoices.forEach(c=>{ c.shiny = rollShiny(); });
  // Mode Facile : le build complet (talent/objet/moveset réel) est calculé une seule fois ici, à la fois
  // pour l'aperçu affiché sur la carte et pour le membre final choisi au clic (évite un recalcul qui
  // donnerait un moveset différent de celui montré, pour les lignées sans set curé où le choix est randomisé).
  if(isFacile) currentChoices.forEach(c=>{ c.previewMember = autoBuildMember(c.lineId, c.stage, c.branch); });
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
      ? {label: LEGENDARY_IDS.includes(line.id)?'Légendaire':(FABULEUX_IDS.includes(line.id)?'Fabuleux':(PSEUDO_IDS.includes(line.id)?'Pseudo-légendaire':(RARE_IDS.includes(line.id)?'Rare':'Commun'))),
         css: LEGENDARY_IDS.includes(line.id)?'rarity-legendaire':(FABULEUX_IDS.includes(line.id)?'rarity-fabuleux':(PSEUDO_IDS.includes(line.id)?'rarity-pseudo':(RARE_IDS.includes(line.id)?'rarity-rare':'rarity-commun')))}
      : rarityInfo(line, choice.stage);
    const ability = isFacile ? choice.previewMember.ability : (sp.abilities || line.abilities)[0];
    const evoline = hasBranch
      ? [...line.stages.map(s=>s.name), sp.name].join(' → ')
      : line.stages.map(s=>s.name).join(' → ');
    const rateLabel = isFacile ? facileAppearanceRate(choice.w).toFixed(2) : appearanceRate(line, choice.stage).toFixed(2);
    // Mode Facile : le membre est déjà construit (EV/nature) donc la grille de stats de base brutes
    // n'apprend plus rien d'utile — buildPreviewHTML affiche à la place les stats finales avec leur
    // répartition d'EV. Normal/Difficile : pas encore de build, la grille de stats de base reste utile.
    const baseStatsGridHTML = isFacile ? '' : `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px;margin:6px 0;background:#0b0b10;border:1px solid var(--line);border-radius:3px;padding:6px;">
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">PV<br><b style="color:var(--text-main);font-size:13px;">${sp.base.hp}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Atq<br><b style="color:var(--text-main);font-size:13px;">${sp.base.atk}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Déf<br><b style="color:var(--text-main);font-size:13px;">${sp.base.def}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">AtqSp<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spa}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">DéfSp<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spd}</b></div>
        <div style="text-align:center;font-size:10px;color:var(--text-dim);">Vit<br><b style="color:var(--text-main);font-size:13px;">${sp.base.spe}</b></div>
      </div>`;
    const card = document.createElement('div');
    card.className='poke-card';
    card.innerHTML = `
      <span class="rarity-badge ${rarity.css}">${rarity.label}</span>
      <div class="emoji">${getSpriteHTML(sp.name, null, 'front', false, choice.shiny)}</div>
      <div class="pname">${sp.name}${choice.shiny?shinyBadgeHTML():''}</div>
      <div class="evoline">${evoline}</div>
      <div class="types-row">${sp.types.map(t=>typeTagHTML(t)).join('')}</div>
      ${baseStatsGridHTML}
      <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;">Talent : ${ability}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-bottom:5px;line-height:1.4;">${ABILITY_DESC[ability]||''}</div>
      ${isFacile ? buildPreviewHTML(choice.previewMember) : ''}
      <div class="dex-rate">Taux d'apparition : ${rateLabel}%</div>
    `;
    card.onclick = ()=>{
      const newMember = isFacile
        ? choice.previewMember
        : defaultMember(choice.lineId, choice.stage);
      newMember.shiny = !!choice.shiny;
      team.push(newMember);
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
  runStats = { bosses:0, miniBosses:0, floorsCleared:0, moneyEarned:0, badgesAtStart: (badges[difficulty]||[]).length };
  renderTower();
}
