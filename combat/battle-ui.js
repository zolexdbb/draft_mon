/* ==== combat/battle-ui.js (généré depuis index.html) ==== */
function clearLog(){ document.getElementById('log').innerHTML = ''; }
function setLog(html){
  if(!html) return;
  const el = document.getElementById('log');
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = html;
  el.appendChild(entry);
  while(el.children.length > 60){ el.removeChild(el.firstChild); }
  el.scrollTop = el.scrollHeight;
}

function renderBench(containerId, roster, activeIdxs){
  const el = document.getElementById(containerId);
  el.innerHTML='';
  const actives = Array.isArray(activeIdxs) ? activeIdxs : [activeIdxs];
  roster.forEach((c,i)=>{
    const span = document.createElement('div');
    span.className = 'pokeball-icon' + (c.hp>0?' alive':' fainted') + (actives.includes(i)?' active':'');
    span.title = c.name;
    el.appendChild(span);
  });
}

function renderCombatantBox(c, prefix){
  document.getElementById(prefix+'Box').classList.remove('faint-fade');
  document.getElementById(prefix+'Name').textContent = c.name;
  const typeTag = document.getElementById(prefix+'Type');
  typeTag.innerHTML = c.types.map(t=>typeBadgeIconHTML(t)).join('');

  // Icône de statut bien visible sur le sprite
  const box = document.getElementById(prefix+'Box');
  let badge = box.querySelector('.status-icon-badge');
  if(c.status){
    if(!badge){ badge = document.createElement('div'); badge.className='status-icon-badge'; box.appendChild(badge); }
    badge.innerHTML = statusIconHTML(c.status, 18);
    badge.title = STATUS_LABEL[c.status];
  } else if(badge){
    badge.remove();
  }

  // Badges de changement de stats (Atq +2, Vit -1, etc.)
  let statBadgesEl = document.getElementById(prefix+'StatBadges');
  if(!statBadgesEl){
    statBadgesEl = document.createElement('div');
    statBadgesEl.className = 'stat-badges';
    statBadgesEl.id = prefix+'StatBadges';
    document.getElementById(prefix+'HpText').insertAdjacentElement('afterend', statBadgesEl);
  }
  statBadgesEl.innerHTML = ['atk','def','spa','spd','spe'].map(stat=>{
    const stage = c.stages ? c.stages[stat] : 0;
    if(!stage) return '';
    const cls = stage>0 ? 'boost' : 'nerf';
    const sign = stage>0 ? '+' : '';
    return `<span class="stat-badge ${cls}">${STAT_LABEL[stat]} ${sign}${stage}</span>`;
  }).join('');
  if(c.confuseCounter>0){
    statBadgesEl.innerHTML += `<span class="stat-badge nerf">${statusIconHTML('confusion',10)} Confus</span>`;
  }
  const facing = prefix.startsWith('player') ? 'back' : 'front';
  document.getElementById(prefix+'Sprite').innerHTML = getSpriteHTML(c.name, c.unownForm, facing, true);
  const ratio = Math.max(c.hp,0)/c.maxHp;
  const fill = document.getElementById(prefix+'HpFill');
  fill.style.width = (ratio*100)+'%';
  fill.style.background = ratio>0.5?'var(--good)':(ratio>0.2?'var(--mid)':'var(--low)');
  document.getElementById(prefix+'HpText').textContent = `${Math.max(c.hp,0)} / ${c.maxHp} PV`;
}

function renderBattle(){
  const bs = battleState;
  const p = bs.player[bs.pActive], f = bs.foe[bs.fActive];
  renderCombatantBox(p, 'player');
  renderCombatantBox(f, 'foe');
  const showP2 = !!(bs.isDouble && bs.pActive2!=null && bs.player[bs.pActive2]);
  const showF2 = !!(bs.isDouble && bs.fActive2!=null && bs.foe[bs.fActive2]);
  document.getElementById('player2Box').classList.toggle('hidden', !showP2);
  document.getElementById('foe2Box').classList.toggle('hidden', !showF2);
  if(showP2) renderCombatantBox(bs.player[bs.pActive2], 'player2');
  if(showF2) renderCombatantBox(bs.foe[bs.fActive2], 'foe2');
  document.getElementById('screenBattle').classList.toggle('is-double-battle', !!bs.isDouble);
  renderBench('playerBench', bs.player, showP2 ? [bs.pActive, bs.pActive2] : [bs.pActive]);
  renderBench('foeBench', bs.foe, showF2 ? [bs.fActive, bs.fActive2] : [bs.fActive]);
  document.getElementById('weatherBanner').textContent = bs.weather ? `${WEATHER_LABEL[bs.weather.type]} (${bs.weather.turns} tour${bs.weather.turns>1?'s':''} restant${bs.weather.turns>1?'s':''})` : '';
  renderMoveGrid();
}

function renderMoveGrid(){
  const bs = battleState;
  const slot = bs.selectingSlot || 'A';
  const activeIdx = playerSlotIdx(slot);
  const p = bs.player[activeIdx];
  const grid = document.getElementById('movesGrid');
  const header = document.getElementById('movesHeader');
  grid.innerHTML='';
  document.getElementById('switchGrid').classList.add('hidden');
  grid.classList.remove('hidden');
  header.classList.toggle('hidden', !bs.isDouble);
  if(bs.isDouble) header.textContent = `Choisis l'attaque pour ${p.name}`;
  document.getElementById('manualSwitchBtn').classList.remove('hidden');
  document.getElementById('bagBtn').classList.remove('hidden');
  document.getElementById('cancelSwitchBtn').classList.add('hidden');
  document.getElementById('manualSwitchBtn').disabled = bs.locked;
  document.getElementById('bagBtn').disabled = bs.locked;
  const allOutOfPP = p.moves.every((mv,idx)=> (p.ppCur ? p.ppCur[idx] : 1) <= 0);
  if(allOutOfPP){
    const btn = document.createElement('button');
    btn.className = 'move-btn';
    btn.disabled = bs.locked;
    btn.innerHTML = `${STRUGGLE_MOVE.name} <small>Plus aucun PP disponible · Attaque de dernier recours (blesse aussi l'utilisateur)</small>`;
    btn.onclick = ()=> handleMoveChoice(-1);
    grid.appendChild(btn);
    return;
  }
  p.moves.forEach((mv, idx)=>{
    const btn = document.createElement('button');
    btn.className='move-btn';
    const isDisabled = p.disabledMove && p.disabledMove.name===mv.name;
    const isLockedOut = p.lockedMove && p.lockedMove.name!==mv.name;
    const ppCur = p.ppCur ? p.ppCur[idx] : null;
    const ppMax = basePP(mv);
    const noPP = ppCur!==null && ppCur<=0;
    btn.disabled = bs.locked || isDisabled || isLockedOut || noPP;
    btn.innerHTML = `${mv.name}${isDisabled?' 🚫':''}${isLockedOut?' 🔒':''} <small>${typeIconHTML(mv.type)} ${mv.type} · ${mv.cat==='phys'?'Phys':(mv.cat==='spec'?'Spéc':'Statut')} · ${mv.cat==='status'?'—':'Pwr '+mv.power} · PP ${ppCur!==null?ppCur:'?'}/${ppMax}${isDisabled?' · Entravé':''}${isLockedOut?" · Bloqué par l'objet":''}</small>`;
    btn.onclick = ()=> handleMoveChoice(idx);
    grid.appendChild(btn);
  });
}

// En combat double, si le coup vise un adversaire et qu'il y a 2 ennemis vivants, on demande la cible avant d'agir.
function handleMoveChoice(moveIdx){
  const bs = battleState;
  if(bs.locked) return;
  const slot = bs.selectingSlot || 'A';
  const activeIdx = playerSlotIdx(slot);
  const p = bs.player[activeIdx];
  const move = moveIdx===-1 ? STRUGGLE_MOVE : p.moves[moveIdx];
  const foes = aliveFoeCombatants();
  if(bs.isDouble && move.target!=='self' && foes.length>1){
    promptTargetThenAttack(moveIdx, foes);
    return;
  }
  playerAttack(moveIdx);
}

function promptTargetThenAttack(moveIdx, foes){
  const bs = battleState;
  document.getElementById('movesGrid').classList.add('hidden');
  document.getElementById('movesHeader').classList.add('hidden');
  document.getElementById('manualSwitchBtn').classList.add('hidden');
  document.getElementById('bagBtn').classList.add('hidden');
  document.getElementById('cancelSwitchBtn').classList.remove('hidden');
  const sw = document.getElementById('switchGrid');
  sw.classList.remove('hidden');
  sw.innerHTML = `<div class="dex-rate" style="text-align:center;margin-bottom:6px;">Choisis la cible :</div>`;
  foes.forEach(f=>{
    const targetIdx = bs.foe.indexOf(f);
    const btn = document.createElement('button');
    btn.className='move-btn';
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(f.name, f.unownForm)}</span>${f.name} <small>${f.hp} / ${f.maxHp} PV</small>`;
    btn.onclick = ()=>{
      document.getElementById('cancelSwitchBtn').classList.add('hidden');
      playerAttack(moveIdx, targetIdx);
    };
    sw.appendChild(btn);
  });
}

function openManualSwitch(){
  const bs = battleState;
  if(bs.locked) return;
  const slot = bs.selectingSlot || 'A';
  const activeIdx = playerSlotIdx(slot);
  if(bs.player[activeIdx].trapped){ setLog(`${bs.player[activeIdx].name} ne peut pas s'échapper !`); return; }
  const usedIdx = [bs.pActive, bs.pActive2].filter(x=>x!=null);
  const aliveIdx = bs.player.map((c,i)=> (c.hp>0 && !usedIdx.includes(i)) ? i : -1).filter(i=>i>=0);
  if(aliveIdx.length===0){ setLog("Aucun autre Pokémon disponible pour switcher !"); return; }
  document.getElementById('movesGrid').classList.add('hidden');
  document.getElementById('movesHeader').classList.add('hidden');
  document.getElementById('manualSwitchBtn').classList.add('hidden');
  document.getElementById('bagBtn').classList.add('hidden');
  document.getElementById('cancelSwitchBtn').classList.remove('hidden');
  const sw = document.getElementById('switchGrid');
  sw.classList.remove('hidden');
  sw.innerHTML='';
  aliveIdx.forEach(i=>{
    const c = bs.player[i];
    const btn = document.createElement('button');
    btn.className='move-btn';
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(c.name, c.unownForm)}</span>${c.name} <small>${c.types.map(t=>typeTagHTML(t)).join(' ')} · ${c.hp} / ${c.maxHp} PV<br>${c.moves.map(mv=>mv.name).join(' · ')}</small>`;
    btn.onclick = ()=> doVoluntarySwitch(i, slot);
    sw.appendChild(btn);
  });
}
function closeManualSwitch(){
  const bs = battleState;
  document.getElementById('switchGrid').classList.add('hidden');
  document.getElementById('movesGrid').classList.remove('hidden');
  document.getElementById('movesHeader').classList.toggle('hidden', !(bs && bs.isDouble));
  document.getElementById('manualSwitchBtn').classList.remove('hidden');
  document.getElementById('bagBtn').classList.remove('hidden');
  document.getElementById('cancelSwitchBtn').classList.add('hidden');
}
function openBag(){
  const bs = battleState;
  if(bs.locked) return;
  if((bag.potion||0)<=0){ setLog("Tu n'as aucune Potion dans ton sac ! Achètes-en au Village."); return; }
  document.getElementById('movesGrid').classList.add('hidden');
  document.getElementById('movesHeader').classList.add('hidden');
  document.getElementById('manualSwitchBtn').classList.add('hidden');
  document.getElementById('bagBtn').classList.add('hidden');
  document.getElementById('cancelSwitchBtn').classList.remove('hidden');
  const sw = document.getElementById('switchGrid');
  sw.classList.remove('hidden');
  sw.innerHTML = `<div class="dex-rate" style="text-align:center;margin-bottom:6px;">${itemIconHTML('potion',18)} Potion (${bag.potion} restante${bag.potion>1?'s':''}) — choisis la cible :</div>`;
  let any = false;
  bs.player.forEach((c,i)=>{
    if(c.hp<=0 || c.hp>=c.maxHp) return;
    any = true;
    const btn = document.createElement('button');
    btn.className='move-btn';
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(c.name, c.unownForm)}</span>${c.name} <small>${c.hp} / ${c.maxHp} PV</small>`;
    btn.onclick = ()=> useBagPotion(i);
    sw.appendChild(btn);
  });
  if(!any){
    sw.innerHTML += `<div class="dex-rate" style="text-align:center;">Toute ton équipe est déjà à PV max !</div>`;
  }
}
function shakeBox(id, crit){
  const box = document.getElementById(id);
  if(!box) return;
  box.classList.remove('shake','crit-shake');
  void box.offsetWidth;
  box.classList.add(crit ? 'crit-shake' : 'shake');
}
function lungeBox(id){
  const box = document.getElementById(id);
  if(!box) return;
  box.classList.remove('lunge'); void box.offsetWidth; box.classList.add('lunge');
}
function flashScreen(kind){
  const flash = document.createElement('div');
  flash.className = kind==='crit' ? 'battle-flash flash-crit' : 'battle-flash flash-superfx';
  const arena = document.getElementById('screenBattle');
  arena.appendChild(flash);
  setTimeout(()=> flash.remove(), 400);
}

function effLabel(eff){
  if(eff>=2) return ' — Coup super efficace !';
  if(eff>0 && eff<1) return " — Ce n'est pas très efficace...";
  if(eff===0) return " — Ça n'affecte pas l'adversaire...";
  return '';
}

document.getElementById('manualSwitchBtn').onclick = openManualSwitch;
document.getElementById('cancelSwitchBtn').onclick = closeManualSwitch;
document.getElementById('bagBtn').onclick = openBag;
