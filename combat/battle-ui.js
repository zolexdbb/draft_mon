/* ==== combat/battle-ui.js (généré depuis index.html) ==== */
function setLog(html){ document.getElementById('log').innerHTML = html; }

function renderBench(containerId, roster, activeIdx){
  const el = document.getElementById(containerId);
  el.innerHTML='';
  roster.forEach((c,i)=>{
    const span = document.createElement('div');
    span.className = 'pokeball-icon' + (c.hp>0?' alive':' fainted') + (i===activeIdx?' active':'');
    span.title = c.name;
    el.appendChild(span);
  });
}

function renderCombatantBox(c, prefix){
  document.getElementById(prefix+'Box').classList.remove('faint-fade');
  document.getElementById(prefix+'Name').textContent = c.name;
  const typeTag = document.getElementById(prefix+'Type');
  typeTag.innerHTML = c.types.map(t=>`<span class="type-tag t-${t}">${t}</span>`).join(' ');

  // Icône de statut bien visible sur le sprite
  const box = document.getElementById(prefix+'Box');
  let badge = box.querySelector('.status-icon-badge');
  if(c.status){
    if(!badge){ badge = document.createElement('div'); badge.className='status-icon-badge'; box.appendChild(badge); }
    badge.textContent = STATUS_ICON[c.status];
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
    statBadgesEl.innerHTML += `<span class="stat-badge nerf">${STATUS_ICON['confusion']} Confus</span>`;
  }
  document.getElementById(prefix+'Sprite').innerHTML = getSpriteHTML(c.name, c.unownForm);
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
  renderBench('playerBench', bs.player, bs.pActive);
  renderBench('foeBench', bs.foe, bs.fActive);
  document.getElementById('weatherBanner').textContent = bs.weather ? `${WEATHER_LABEL[bs.weather.type]} (${bs.weather.turns} tour${bs.weather.turns>1?'s':''} restant${bs.weather.turns>1?'s':''})` : '';
  renderMoveGrid();
}

function renderMoveGrid(){
  const bs = battleState;
  const p = bs.player[bs.pActive];
  const grid = document.getElementById('movesGrid');
  grid.innerHTML='';
  document.getElementById('switchGrid').classList.add('hidden');
  grid.classList.remove('hidden');
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
    btn.onclick = ()=> playerAttack(-1);
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
    btn.innerHTML = `${mv.name}${isDisabled?' 🚫':''}${isLockedOut?' 🔒':''} <small>${TYPE_EMOJI[mv.type]||''} ${mv.type} · ${mv.cat==='phys'?'Phys':(mv.cat==='spec'?'Spéc':'Statut')} · ${mv.cat==='status'?'—':'Pwr '+mv.power} · PP ${ppCur!==null?ppCur:'?'}/${ppMax}${isDisabled?' · Entravé':''}${isLockedOut?" · Bloqué par l'objet":''}</small>`;
    btn.onclick = ()=> playerAttack(idx);
    grid.appendChild(btn);
  });
}

function openManualSwitch(){
  const bs = battleState;
  if(bs.locked) return;
  if(bs.player[bs.pActive].trapped){ setLog(`${bs.player[bs.pActive].name} ne peut pas s'échapper !`); return; }
  const aliveIdx = bs.player.map((c,i)=> (c.hp>0 && i!==bs.pActive) ? i : -1).filter(i=>i>=0);
  if(aliveIdx.length===0){ setLog("Aucun autre Pokémon disponible pour switcher !"); return; }
  document.getElementById('movesGrid').classList.add('hidden');
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
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(c.name, c.unownForm)}</span>${c.name} <small>${c.types.map(t=>`<span class="type-tag t-${t}">${t}</span>`).join(' ')} · ${c.hp} / ${c.maxHp} PV<br>${c.moves.map(mv=>mv.name).join(' · ')}</small>`;
    btn.onclick = ()=> doVoluntarySwitch(i);
    sw.appendChild(btn);
  });
}
function closeManualSwitch(){
  document.getElementById('switchGrid').classList.add('hidden');
  document.getElementById('movesGrid').classList.remove('hidden');
  document.getElementById('manualSwitchBtn').classList.remove('hidden');
  document.getElementById('bagBtn').classList.remove('hidden');
  document.getElementById('cancelSwitchBtn').classList.add('hidden');
}
function openBag(){
  const bs = battleState;
  if(bs.locked) return;
  if((bag.potion||0)<=0){ setLog("Tu n'as aucune Potion dans ton sac ! Achètes-en au Village."); return; }
  document.getElementById('movesGrid').classList.add('hidden');
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
  box.classList.remove('shake','crit-shake');
  void box.offsetWidth;
  box.classList.add(crit ? 'crit-shake' : 'shake');
}
function lungeBox(id){
  const box = document.getElementById(id);
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

function showSwitchPrompt(aliveIdx){
  const bs = battleState;
  document.getElementById('movesGrid').classList.add('hidden');
  document.getElementById('manualSwitchBtn').classList.add('hidden');
  document.getElementById('bagBtn').classList.add('hidden');
  document.getElementById('cancelSwitchBtn').classList.add('hidden');
  const sw = document.getElementById('switchGrid');
  sw.classList.remove('hidden');
  sw.innerHTML='';
  setLog(`Choisis ton prochain Pokémon !`);
  aliveIdx.forEach(i=>{
    const c = bs.player[i];
    const btn = document.createElement('button');
    btn.className='move-btn';
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(c.name, c.unownForm)}</span>${c.name} <small>${c.types.map(t=>`<span class="type-tag t-${t}">${t}</span>`).join(' ')} · ${c.hp} / ${c.maxHp} PV<br>${c.moves.map(mv=>mv.name).join(' · ')}</small>`;
    btn.onclick = ()=>{
      bs.pActive = i;
      resetBattleFields(c);
      sw.classList.add('hidden');
      document.getElementById('movesGrid').classList.remove('hidden');
      bs.locked = false;
      renderBattle();
      const intimMsg = triggerIntimidate(c, bs.foe[bs.fActive]) + triggerSwitchInAbilities(c, bs.foe[bs.fActive]);
      setLog(`Tu envoies ${c.name} !${intimMsg}`);
    };
    sw.appendChild(btn);
  });
}

