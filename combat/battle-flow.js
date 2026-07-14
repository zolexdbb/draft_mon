/* ==== combat/battle-flow.js (généré depuis index.html) ==== */
function freshBattleFields(){
  return { stages:{atk:0,def:0,spa:0,spd:0,spe:0,acc:0,eva:0}, status:null, sleepCounter:0, confuseCounter:0, flinched:false, protectChain:0 };
}
function resetBattleFields(c){
  c.stages = {atk:0,def:0,spa:0,spd:0,spe:0,acc:0};
  // le statut (poison/brûlure/paralysie/sommeil/gel) persiste au changement, la confusion se dissipe en sortant
  c.confuseCounter = 0;
  c.flinched = false;
  c.lockedMove = null;
  c.protectChain = 0;
  c.chargingMove = null;
  c.chargingTarget = null;
  c.invulnType = null;
}
function renderTrainerBanner(trainer, trainer2){
  const bannerEl = document.getElementById('trainerBanner');
  if(trainer2){
    bannerEl.className = 'trainer-banner twin-banner';
    bannerEl.innerHTML = [trainer, trainer2].map(t => `
      <div class="trainer-info-pair">
        <div class="trainer-avatar">${t.emoji}</div>
        <div class="trainer-info">
          <div class="trainer-name">${t.name}</div>
          <div class="trainer-quote">"${t.dialogue}"</div>
        </div>
      </div>`).join('');
    return;
  }
  bannerEl.className = 'trainer-banner' + (trainer.boss?' boss':(trainer.miniBoss?' miniboss':''));
  bannerEl.innerHTML = `
    <div class="trainer-avatar">${trainer.emoji}</div>
    <div class="trainer-info">
      <div class="trainer-name">${trainer.name}</div>
      <div class="trainer-quote">"${trainer.dialogue}"</div>
    </div>`;
}

/* =================== Combat double : slots et helpers =================== */
function playerSlotIdx(slot){
  const bs = battleState;
  return slot==='B' ? bs.pActive2 : bs.pActive;
}
function alivePlayerCombatants(){
  const bs = battleState;
  const list = [];
  if(bs.pActive!=null && bs.player[bs.pActive] && bs.player[bs.pActive].hp>0) list.push(bs.player[bs.pActive]);
  if(bs.isDouble && bs.pActive2!=null && bs.player[bs.pActive2] && bs.player[bs.pActive2].hp>0) list.push(bs.player[bs.pActive2]);
  return list;
}
function aliveFoeCombatants(){
  const bs = battleState;
  const list = [];
  if(bs.fActive!=null && bs.foe[bs.fActive] && bs.foe[bs.fActive].hp>0) list.push(bs.foe[bs.fActive]);
  if(bs.isDouble && bs.fActive2!=null && bs.foe[bs.fActive2] && bs.foe[bs.fActive2].hp>0) list.push(bs.foe[bs.fActive2]);
  return list;
}
function allFainted(team){ return team.every(c=>c.hp<=0); }
// Localise un combattant actif sur le terrain (utilisé par les effets de switch forcé/Bouton Fuite).
function locateActiveSlot(combatant){
  const bs = battleState;
  if(!bs) return null;
  if(combatant===bs.player[bs.pActive]) return {side:'player', slot:'A'};
  if(bs.isDouble && bs.pActive2!=null && combatant===bs.player[bs.pActive2]) return {side:'player', slot:'B'};
  if(combatant===bs.foe[bs.fActive]) return {side:'foe', slot:'A'};
  if(bs.isDouble && bs.fActive2!=null && combatant===bs.foe[bs.fActive2]) return {side:'foe', slot:'B'};
  return null;
}
function setActiveSlot(side, slot, newIdx){
  const bs = battleState;
  if(side==='player'){ if(slot==='A') bs.pActive=newIdx; else bs.pActive2=newIdx; return bs.player[newIdx]; }
  if(slot==='A') bs.fActive=newIdx; else bs.fActive2=newIdx; return bs.foe[newIdx];
}
// Id de la boîte DOM (#playerBox/#player2Box/#foeBox/#foe2Box) occupée par un combattant actif.
function boxIdFor(combatant){
  const loc = locateActiveSlot(combatant);
  if(!loc) return 'foeBox';
  if(loc.side==='player') return loc.slot==='A' ? 'playerBox' : 'player2Box';
  return loc.slot==='A' ? 'foeBox' : 'foe2Box';
}

function startBattle(){
  let isDouble, trainer, trainer2, enemyTeam;
  if(typeof devEncounterOverride!=='undefined' && devEncounterOverride){
    ({ trainer, trainer2, isDouble, enemyTeam } = devEncounterOverride);
    devEncounterOverride = null;
  } else if(isTwinFloor(towerFloor)){
    isDouble = true;
    const twins = generateTwinTrainers(towerFloor);
    trainer = twins[0]; trainer2 = twins[1];
    enemyTeam = [...generateEnemyTeam(towerFloor, trainer.theme, false, 3), ...generateEnemyTeam(towerFloor, trainer2.theme, false, 3)];
  } else {
    isDouble = false;
    trainer = generateTrainer(towerFloor);
    trainer2 = null;
    enemyTeam = generateEnemyTeam(towerFloor, trainer.theme, trainer.boss);
  }
  const playerRoster = team.map(m=>{
    const sp = speciesOf(m);
    const maxHp = m.computedStats.hp;
    const hardMode = difficulty==='difficile';
    const hp = m.eventBlocked ? 0 : ((hardMode && typeof m.hp==='number') ? m.hp : maxHp);
    const status = hardMode ? (m.status||null) : null;
    const sleepCounter = hardMode ? (m.sleepCounter||0) : 0;
    return {
      lineId:m.lineId, name:sp.name, types:sp.types, unownForm:m.unownForm, moves:m.moves.map(mid=>MOVES[mid]), ppCur: m.moves.map(mid=>basePP(MOVES[mid])),
      ability: m.ability || (sp.abilities||lineOf(m.lineId).abilities)[0],
      heldItem: m.heldItem || null, itemUsed:false,
      stats:m.computedStats, maxHp, hp,
      stages:{atk:0,def:0,spa:0,spd:0,spe:0,acc:0,eva:0}, status, sleepCounter, confuseCounter:0, flinched:false, protectChain:0
    };
  });
  team.forEach(m=>{ m.eventBlocked = false; }); // le blocage d'un event ne dure qu'un seul combat

  // En difficile, si toute l'équipe est déjà K.O. avant même le combat, c'est la défaite
  const aliveIdxs = playerRoster.map((c,i)=>c.hp>0?i:-1).filter(i=>i>=0);
  if(aliveIdxs.length===0){
    document.getElementById('screenTower').classList.add('hidden');
    gameOver();
    return;
  }

  battleState = {
    player: playerRoster, foe: enemyTeam,
    pActive: aliveIdxs[0], pActive2: (isDouble && aliveIdxs.length>1) ? aliveIdxs[1] : null,
    fActive: 0, fActive2: (isDouble && enemyTeam.length>1) ? 1 : null,
    locked:false, trainer, trainer2, isDouble: !!isDouble, weather:null,
    pendingActions: [], selectingSlot: 'A'
  };
  battleInProgress = true;
  document.getElementById('screenTower').classList.add('hidden');
  document.getElementById('screenBattle').classList.remove('hidden');
  renderTrainerBanner(trainer, trainer2);
  clearLog();
  const bs = battleState;
  const pLead = playerRoster[bs.pActive], fLead = enemyTeam[0];
  let intimMsg = triggerIntimidate(fLead, pLead) + triggerIntimidate(pLead, fLead) + triggerSwitchInAbilities(fLead, pLead) + triggerSwitchInAbilities(pLead, fLead);
  let introName = fLead.name;
  if(bs.isDouble && bs.pActive2!=null){
    const pLead2 = playerRoster[bs.pActive2], fLead2 = enemyTeam[1];
    intimMsg += triggerIntimidate(fLead2, pLead2) + triggerIntimidate(pLead2, fLead2) + triggerSwitchInAbilities(fLead2, pLead2) + triggerSwitchInAbilities(pLead2, fLead2);
    introName = `${fLead.name} et ${enemyTeam[1].name}`;
  } else if(bs.isDouble){
    introName = `${fLead.name} et ${enemyTeam[1].name}`;
  }
  setLog(`<b>Étage ${towerFloor}</b> — l'adversaire envoie ${introName} !${intimMsg}`);
  renderBattle();
  beginPlayerTurn();
}

/* =================== Tour de jeu (solo et double, moteur unifié) =================== */
function beginPlayerTurn(){
  const bs = battleState;
  bs.pendingActions = [];
  bs.locked = false;
  startSlotSelection('A');
}
function startSlotSelection(slot){
  const bs = battleState;
  const idx = playerSlotIdx(slot);
  if(idx==null || bs.player[idx].hp<=0){
    advanceAfterSlot(slot);
    return;
  }
  const p = bs.player[idx];
  if(p.chargingMove){
    // Un coup à charge se relance automatiquement au tour suivant, sans repasser par le choix du joueur.
    const target = (p.chargingTarget && p.chargingTarget.hp>0) ? p.chargingTarget : aliveFoeCombatants()[0];
    bs.pendingActions.push({ actor:p, move:p.chargingMove, target, isPlayer:true, slot });
    advanceAfterSlot(slot);
    return;
  }
  bs.selectingSlot = slot;
  bs.locked = false;
  renderMoveGrid();
}
function advanceAfterSlot(slot){
  const bs = battleState;
  const bIdx = playerSlotIdx('B');
  if(slot==='A' && bs.isDouble && bIdx!=null && bs.player[bIdx].hp>0){
    startSlotSelection('B');
  } else {
    finalizeTurn();
  }
}
function finalizeTurn(){
  const bs = battleState;
  bs.locked = true;
  const targets = alivePlayerCombatants();
  const foes = aliveFoeCombatants();
  const excellent = !!((bs.trainer && bs.trainer.boss) || (bs.trainer2 && bs.trainer2.boss));
  const foeActions = foes.map(f=>{
    const { move, target } = chooseFoeMove(f, targets, excellent);
    return { actor:f, move, target, isPlayer:false };
  });
  resolveTurn([...bs.pendingActions, ...foeActions]);
}

// Point d'entrée appelé par l'UI quand le joueur choisit une attaque pour le slot en cours de sélection.
// targetIdx : index dans bs.foe (optionnel — auto-résolu s'il n'y a qu'un seul ennemi vivant).
function playerAttack(moveIdx, targetIdx){
  const bs = battleState;
  if(bs.locked) return;
  const slot = bs.selectingSlot || 'A';
  const activeIdx = playerSlotIdx(slot);
  const p = bs.player[activeIdx];
  const move = moveIdx===-1 ? STRUGGLE_MOVE : p.moves[moveIdx];
  if(moveIdx>=0 && p.ppCur && p.ppCur[moveIdx]>0) p.ppCur[moveIdx]--;
  let target;
  if(move.target!=='self' && targetIdx!=null && bs.foe[targetIdx] && bs.foe[targetIdx].hp>0){
    target = bs.foe[targetIdx];
  } else {
    target = aliveFoeCombatants()[0] || null;
  }
  bs.pendingActions.push({ actor:p, move, target, isPlayer:true, slot });
  bs.locked = true;
  advanceAfterSlot(slot);
}

function resolveTurn(actions){
  const bs = battleState;
  bs.locked = true;
  const sorted = [...actions].sort((a,b)=>{
    const pa = a.move.priority||0, pb = b.move.priority||0;
    if(pa!==pb) return pb-pa;
    const sa = effectiveSpeed(a.actor), sb = effectiveSpeed(b.actor);
    if(sa!==sb) return sb-sa;
    return Math.random()<0.5 ? -1 : 1;
  });
  runQueue(sorted, 0);
}
function runQueue(queue, i){
  const bs = battleState;
  if(i>=queue.length || allFainted(bs.foe) || allFainted(bs.player)){ afterResolveTurn(); return; }
  const action = queue[i];
  if(action.actor.hp<=0){ runQueue(queue, i+1); return; }
  let target = action.target;
  if(target && target.hp<=0 && action.move.target!=='self'){
    const replacement = action.isPlayer ? aliveFoeCombatants().find(c=>c!==target) : alivePlayerCombatants().find(c=>c!==target);
    if(replacement) target = replacement;
    else { runQueue(queue, i+1); return; }
  }
  runStep(action.actor, action.move, target, action.isPlayer, ()=>{
    if(allFainted(bs.foe) || allFainted(bs.player)){ afterResolveTurn(); return; }
    runQueue(queue, i+1);
  });
}
function afterResolveTurn(){
  endTurn();
}

function doVoluntarySwitch(i, slot){
  slot = slot || battleState.selectingSlot || 'A';
  const bs = battleState;
  const activeIdx = playerSlotIdx(slot);
  const leaving = bs.player[activeIdx];
  leaving.chargingMove = null;
  leaving.chargingTarget = null;
  leaving.invulnType = null;
  let switchMsg = '';
  if(leaving.ability==='Régé-Force' && leaving.hp>0){
    const heal = Math.max(1, Math.round(leaving.maxHp/3));
    leaving.hp = Math.min(leaving.maxHp, leaving.hp+heal);
    switchMsg = ` ${leaving.name} récupère des PV grâce à Régénération !`;
  }
  if(slot==='A') bs.pActive = i; else bs.pActive2 = i;
  resetBattleFields(bs.player[i]);
  bs.locked = true;
  closeManualSwitch();
  renderBattle();
  const incoming = bs.player[i];
  const opponent = aliveFoeCombatants()[0];
  const intimidateMsg = opponent ? (triggerIntimidate(incoming, opponent) + triggerSwitchInAbilities(incoming, opponent)) : '';
  setLog(`Tu rappelles ton Pokémon et envoies ${incoming.name} !${switchMsg}${intimidateMsg}`);
  setTimeout(()=> advanceAfterSlot(slot), 1000);
}

function useBagPotion(i){
  const bs = battleState;
  const slot = bs.selectingSlot || 'A';
  const c = bs.player[i];
  const heal = Math.max(1, Math.round(c.maxHp*0.5));
  c.hp = Math.min(c.maxHp, c.hp+heal);
  bag.potion--;
  closeManualSwitch();
  bs.locked = true;
  renderBattle();
  setLog(`Tu utilises une Potion sur ${c.name} ! Il récupère ${heal} PV.`);
  setTimeout(()=> advanceAfterSlot(slot), 1000);
}

function checkStatusBeforeMove(battler, logs, move){
  if(battler.flinched){
    battler.flinched = false;
    logs.push(`${battler.name} recule de peur et ne peut pas attaquer !`);
    return false;
  }
  if(battler.status==='gel'){
    if(Math.random()<0.2){
      battler.status = null;
      logs.push(`${battler.name} n'est plus gelé !`);
    } else {
      logs.push(`${battler.name} est gelé et ne peut pas attaquer !`);
      return false;
    }
  }
  if(battler.status==='sommeil'){
    if(move && move.selfSleepOnly){
      logs.push(`${battler.name} dort profondément...`);
      // Ronflement peut être utilisé pendant le sommeil, on ne décompte pas ce tour
    } else if(battler.sleepCounter>0){
      battler.sleepCounter--;
      logs.push(`${battler.name} dort profondément...`);
      return false;
    } else {
      battler.status = null;
      logs.push(`${battler.name} se réveille !`);
    }
  }
  if(battler.status==='paralysie' && Math.random()<0.25){
    logs.push(`${battler.name} est paralysé ! Il ne peut pas attaquer.`);
    return false;
  }
  if(battler.confuseCounter>0){
    battler.confuseCounter--;
    if(Math.random()<0.33){
      const dmg = Math.max(1, Math.round(battler.stats.atk*0.5*(0.85+Math.random()*0.3)));
      battler.hp = Math.max(0, battler.hp-dmg);
      logs.push(`${battler.name} est confus et se blesse (${dmg} dégâts) !`);
      return false;
    }
  }
  return true;
}

function runStep(actor, move, defender, actorIsPlayer, callback){
  let logs = [];
  const isProtectMove = move.effect && (move.effect.protect || move.effect.endure);
  if(!isProtectMove) actor.protectChain = 0;
  const canMove = checkStatusBeforeMove(actor, logs, move);
  renderBattle();
  if(!canMove){
    setLog(logs.join(' '));
    setTimeout(callback, 900);
    return;
  }
  if(actor.disabledMove && actor.disabledMove.name===move.name){
    setLog(`<b>${actor.name}</b> ne peut pas utiliser ${move.name}, c'est entravé !`);
    setTimeout(callback, 900);
    return;
  }
  if(move.metronome){
    const pool = Object.values(MOVES).filter(m=>!m.metronome && !m.mirrorMove && !m.mimic && m.name!=='Struggle');
    const picked = rand(pool);
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Le doigt s'agite... ${picked.name} est invoqué !`);
    setTimeout(()=> runStep(actor, picked, defender, actorIsPlayer, callback), 900);
    return;
  }
  if(move.mirrorMove){
    if(defender.lastMoveUsed){
      setLog(`<b>${actor.name}</b> utilise ${move.name} et copie ${defender.lastMoveUsed.name} !`);
      setTimeout(()=> runStep(actor, defender.lastMoveUsed, defender, actorIsPlayer, callback), 900);
    } else {
      setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ça échoue !`);
      setTimeout(callback, 900);
    }
    return;
  }
  actor.lastMoveUsed = move;
  if(actor.heldItem && ITEMS[actor.heldItem] && ITEMS[actor.heldItem].choiceLock && !actor.lockedMove){
    actor.lockedMove = move;
  }
  if(move.charge){
    const isReleasing = actor.chargingMove === move;
    if(!isReleasing){
      const weatherNow0 = battleState ? battleState.weather : null;
      const skipCharge = move.sunSkip && weatherNow0 && weatherNow0.type==='soleil';
      if(!skipCharge){
        actor.chargingMove = move;
        actor.chargingTarget = defender;
        if(move.semiInvuln) actor.invulnType = move.semiInvuln;
        renderBattle();
        setLog(`<b>${actor.name}</b> ${move.chargeMsg||'se prépare à attaquer'} !`);
        setTimeout(callback, 900);
        return;
      }
    } else {
      actor.chargingMove = null;
      actor.chargingTarget = null;
      actor.invulnType = null;
    }
  }
  let acc;
  if(move.target==='self'){
    acc = 1;
  } else if(actor.guaranteedHit){
    acc = 1;
  } else {
    acc = move.accuracy!==undefined ? move.accuracy : 0.95;
    acc *= accuracyStageMultiplier(actor.stages.acc);
    if(move.cat!=='status') acc /= accuracyStageMultiplier(defender.stages.eva||0);
    if(actor.ability==='Victorieux') acc *= 1.1;
  }
  const weatherNow = battleState ? battleState.weather : null;
  if(weatherNow && move.cat!=='status'){
    if(weatherNow.type==='sable' && defender.ability==='Voile Sable') acc *= 0.8;
    if(weatherNow.type==='grele' && defender.ability==='Rideau Neige') acc *= 0.8;
  }
  if(defender.invulnType && move.target!=='self'){
    if(move.bypassInvuln && move.bypassInvuln.includes(defender.invulnType)){
      acc = 1;
    } else {
      renderBattle();
      setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ${defender.name} est hors d'atteinte !`);
      setTimeout(callback, 900);
      return;
    }
  }
  lungeBox(boxIdFor(actor));
  playMoveFx(move, actorIsPlayer);
  if(Math.random() > acc){
    setLog(`<b>${actor.name}</b> utilise ${move.name}... mais rate son coup !`);
    actor.guaranteedHit = false;
    setTimeout(callback, 900);
    return;
  }
  actor.guaranteedHit = false;
  if(defender.protected && move.cat!=='status'){
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${defender.name} se protège de l'attaque !`);
    setTimeout(callback, 900);
    return;
  }
  if(move.counter){
    const cdmg = (actor.lastPhysDamage||0) * 2;
    renderBattle();
    if(cdmg<=0){
      setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ça échoue !`);
      setTimeout(callback, 900);
      return;
    }
    defender.hp = Math.max(0, defender.hp-cdmg);
    renderBattle();
    shakeBox(boxIdFor(defender), false);
    setLog(`<b>${actor.name}</b> utilise ${move.name} et renvoie ${cdmg} dégâts en représailles !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.mirrorCoat){
    const mdmg = (actor.lastSpecDamage||0) * 2;
    renderBattle();
    if(mdmg<=0){
      setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ça échoue !`);
      setTimeout(callback, 900);
      return;
    }
    defender.hp = Math.max(0, defender.hp-mdmg);
    renderBattle();
    shakeBox(boxIdFor(defender), false);
    setLog(`<b>${actor.name}</b> utilise ${move.name} et renvoie ${mdmg} dégâts en représailles !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.cat==='status'){
    if(actor.tauntTurns>0){
      renderBattle();
      setLog(`<b>${actor.name}</b> est provoqué et ne peut pas utiliser ${move.name} !`);
      setTimeout(callback, 900);
      return;
    }
    if(actor.heldItem==='vesteCombat'){
      renderBattle();
      setLog(`<b>${actor.name}</b> ne peut pas utiliser ${move.name} à cause de sa Veste de Combat !`);
      setTimeout(callback, 900);
      return;
    }
    applyStatusEffect(actor, defender, move, logs);
    renderBattle();
    if(move.target==='foe') shakeBox(boxIdFor(defender));
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${logs.join(' ')}`);
    setTimeout(callback, 900);
    return;
  }
  // Immunités totales liées aux talents (annulent complètement l'attaque)
  if((defender.ability==='Absorbe-Eau' && move.type==='eau') || (defender.ability==='Absorbe-Volt' && move.type==='electrik')){
    const heal = Math.max(1, Math.round(defender.maxHp*0.25));
    defender.hp = Math.min(defender.maxHp, defender.hp+heal);
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Le talent ${defender.ability} de ${defender.name} absorbe l'attaque et récupère ${heal} PV !`);
    setTimeout(callback, 1000);
    return;
  }
  if(defender.ability==='Lévitation' && move.type==='sol'){
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Ça n'affecte pas ${defender.name} (Lévitation) !`);
    setTimeout(callback, 900);
    return;
  }
  if(defender.ability==='Torche' && move.type==='feu'){
    defender.torchActivated = true;
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Torche absorbe la chaleur, ${defender.name} n'est pas affecté et enflamme ses prochaines attaques Feu !`);
    setTimeout(callback, 900);
    return;
  }
  let thawMsg = '';
  if(defender.status==='gel' && move.type==='feu'){
    defender.status = null;
    thawMsg = ` ${defender.name} dégèle sous la chaleur !`;
  }
  if(move.ohko){
    if(defender.ability==='Fermeté'){
      renderBattle();
      setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${defender.name} résiste grâce à Fermeté !`);
      setTimeout(callback, 900);
      return;
    }
    defender.hp = 0;
    renderBattle();
    shakeBox(boxIdFor(defender), true);
    flashScreen('crit');
    setLog(`<b>${actor.name}</b> utilise ${move.name} !${thawMsg} Coup K.O. direct sur ${defender.name} !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.sleepOnly && defender.status!=='sommeil'){
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ${defender.name} n'est pas endormi, ça échoue !`);
    setTimeout(callback, 900);
    return;
  }
  if(move.selfSleepOnly && actor.status!=='sommeil'){
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ça échoue (il faut dormir) !`);
    setTimeout(callback, 900);
    return;
  }
  if(move.halfHp){
    const hdmg = Math.max(1, Math.ceil(defender.hp/2));
    defender.hp = Math.max(0, defender.hp-hdmg);
    renderBattle();
    shakeBox(boxIdFor(defender));
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${defender.name} perd la moitié de ses PV actuels (${hdmg} dégâts) !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.endeavor){
    if(defender.hp<=actor.hp){
      renderBattle();
      setLog(`<b>${actor.name}</b> utilise ${move.name}... mais ça échoue !`);
      setTimeout(callback, 900);
      return;
    }
    const edmg = defender.hp - actor.hp;
    defender.hp = actor.hp;
    renderBattle();
    shakeBox(boxIdFor(defender));
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${defender.name} tombe au même niveau de PV (${edmg} dégâts) !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.psywave){
    const pdmg = Math.max(1, Math.round(10 + Math.random()*40));
    defender.hp = Math.max(0, defender.hp-pdmg);
    renderBattle();
    shakeBox(boxIdFor(defender));
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Une décharge d'intensité aléatoire inflige ${pdmg} dégâts !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.present){
    if(Math.random()<0.2){
      const heal = Math.max(1, Math.round(defender.maxHp*0.25));
      defender.hp = Math.min(defender.maxHp, defender.hp+heal);
      renderBattle();
      setLog(`<b>${actor.name}</b> offre un Cadeau ! ${defender.name} récupère ${heal} PV !`);
      setTimeout(callback, 1000);
      return;
    }
    const pdmg = Math.max(1, Math.round(20 + Math.random()*40));
    defender.hp = Math.max(0, defender.hp-pdmg);
    renderBattle();
    shakeBox(boxIdFor(defender));
    setLog(`<b>${actor.name}</b> offre un Cadeau piégé ! ${defender.name} subit ${pdmg} dégâts !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.futureSight){
    const { dmg: fsDmg } = computeDamage(actor, move, defender);
    const bs = battleState;
    bs.pendingFutureSight = bs.pendingFutureSight || [];
    bs.pendingFutureSight.push({ target: defender, turnsLeft:2, dmg: fsDmg, moveName: move.name });
    renderBattle();
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! Une force mystérieuse rôde autour de ${defender.name}...`);
    setTimeout(callback, 900);
    return;
  }
  const { dmg, eff, crit } = computeDamage(actor, move, defender);
  let actualDmg = dmg;
  let sashSaved = false;
  let enduredMsg = '';
  let wonderGuardMsg = '';
  if(defender.ability==='Garde Mystik' && eff<=1 && move.power>0){
    actualDmg = 0;
    wonderGuardMsg = ` Garde Mystik protège ${defender.name} !`;
  } else if(defender.heldItem==='ceintureForce' && !defender.itemUsed && defender.hp===defender.maxHp && dmg>=defender.hp){
    actualDmg = defender.hp - 1;
    defender.itemUsed = true;
    sashSaved = true;
  } else if(defender.ability==='Fermeté' && defender.hp===defender.maxHp && dmg>=defender.hp){
    actualDmg = defender.hp - 1;
    enduredMsg = ` ${defender.name} tient bon grâce à Fermeté !`;
  } else if(defender.enduring && dmg>=defender.hp){
    actualDmg = defender.hp - 1;
    enduredMsg = ` ${defender.name} tient bon grâce à Ténacité !`;
  }
  defender.hp = Math.max(0, defender.hp-actualDmg);
  if(move.cat==='phys') defender.lastPhysDamage = actualDmg;
  if(move.cat==='spec') defender.lastSpecDamage = actualDmg;
  let msg = `<b>${actor.name}</b> ${actorIsPlayer?'utilise':'riposte avec'} ${move.name} !${crit?' <b>Coup critique !</b>':''}${effLabel(eff)} (${actualDmg} dégâts)${thawMsg}${enduredMsg}${wonderGuardMsg}`;
  if(sashSaved){ msg += ` ${defender.name} tient bon grâce à sa Ceinture Force !`; }
  if(move.drain){
    const h=Math.max(1,Math.round(actualDmg*move.drain));
    if(defender.ability==='Suintement'){
      actor.hp = Math.max(0, actor.hp-h);
      msg += ` Suintement fait perdre ${h} PV à ${actor.name} au lieu de le soigner !`;
    } else {
      actor.hp=Math.min(actor.maxHp,actor.hp+h);
      msg+=` ${actor.name} récupère ${h} PV !`;
    }
  }
  if(move.recoil){ const r=Math.max(1,Math.round(actualDmg*move.recoil)); actor.hp=Math.max(0,actor.hp-r); msg+=` Le contrecoup blesse ${actor.name} (${r} dégâts) !`; }
  if(move.selfDestruct){
    actor.hp = 0;
    msg += ` ${actor.name} est mis K.O. par le contrecoup de l'explosion !`;
  }
  if(move.triStatus && defender.hp>0 && Math.random()<0.2){
    const pick = rand(['brulure','gel','paralysie']);
    let tlogs = [];
    inflictStatus(defender, pick, tlogs);
    msg += ' ' + tlogs.join(' ');
  }
  if(move.secondaryStatus && defender.hp>0 && Math.random()<move.secondaryStatus.chance){
    let slogs = [];
    inflictStatus(defender, move.secondaryStatus.status, slogs);
    msg += ' ' + slogs.join(' ');
  }
  if(move.secondaryBoost && defender.hp>0 && Math.random()<move.secondaryBoost.chance){
    if(defender.ability==='Corps Sain' && move.secondaryBoost.stages<0){
      msg += ` Corps Sain empêche la baisse de statistiques de ${defender.name} !`;
    } else if(defender.mistTurns>0 && move.secondaryBoost.stages<0){
      msg += ` La Brume protège ${defender.name} de la baisse de statistiques !`;
    } else {
      let blogs = [];
      applyStatBoost(defender, [{stat:move.secondaryBoost.stat, stages:move.secondaryBoost.stages}], blogs);
      msg += ' ' + blogs.join(' ');
    }
  }
  if(move.secondarySelfBoost && Math.random()<move.secondarySelfBoost.chance){
    let blogs = [];
    applyStatBoost(actor, [{stat:move.secondarySelfBoost.stat, stages:move.secondarySelfBoost.stages}], blogs);
    msg += ' ' + blogs.join(' ');
  }
  if(move.selfBoost){
    let blogs = [];
    applyStatBoost(actor, move.selfBoost, blogs);
    msg += ' ' + blogs.join(' ');
  }
  if(move.flinch && defender.hp>0 && defender.ability!=='Attention' && Math.random()<move.flinch){
    defender.flinched = true;
    msg += ` ${defender.name} recule de peur !`;
  }
  if(move.itemRemoveOnHit && defender.hp>0 && defender.heldItem){
    defender.heldItem = null;
    msg += ` ${defender.name} perd son objet tenu à cause de Sabotage !`;
  }
  if(move.wakeAllOnHit){
    if(actor.status==='sommeil'){ actor.status=null; actor.sleepCounter=0; msg += ` ${actor.name} se réveille !`; }
    if(defender.status==='sommeil'){ defender.status=null; defender.sleepCounter=0; msg += ` ${defender.name} se réveille !`; }
  }
  if(defender.ability==='Déguisement' && defender.hp>0 && actualDmg>0){
    defender.transformedTypes = [move.type];
    msg += ` ${defender.name} devient de type ${move.type} grâce à Déguisement !`;
  }
  // Talents de contact du défenseur (déclenchés par une attaque physique)
  if(move.cat==='phys' && defender.hp>0 && actor.hp>0){
    if(defender.ability==='Peau Dure'){
      const rdmg = Math.max(1, Math.round(actor.maxHp/8));
      actor.hp = Math.max(0, actor.hp-rdmg);
      msg += ` ${actor.name} est blessé par Peau Dure (${rdmg} dégâts) !`;
    }
    if(!actor.status){
      if(defender.ability==='Statik' && Math.random()<0.3){
        inflictStatus(actor, 'paralysie', logs);
        msg += ` ${logs.pop()}`;
      } else if(defender.ability==='Point Poison' && Math.random()<0.3){
        inflictStatus(actor, 'poison', logs);
        msg += ` ${logs.pop()}`;
      } else if(defender.ability==='Corps Ardent' && Math.random()<0.3){
        inflictStatus(actor, 'brulure', logs);
        msg += ` ${logs.pop()}`;
      }
    }
  }
  if(crit && defender.hp>0){
    if(defender.ability==='Colérique'){
      defender.stages.atk = 6;
      msg += ` L'Attaque de ${defender.name} monte au maximum !`;
    }
    if(defender.ability==='Écaille Spéciale'){
      defender.stages.def = Math.min(6, defender.stages.def+1);
      msg += ` La Défense de ${defender.name} augmente !`;
    }
  }
  if(defender.heldItem && !defender.itemUsed && defender.hp>0){
    const heldItem = ITEMS[defender.heldItem];
    if(heldItem && heldItem.berryHeal && defender.hp <= Math.floor(defender.maxHp*0.5)){
      const heal = Math.max(1, Math.round(defender.maxHp*heldItem.berryHeal));
      defender.hp = Math.min(defender.maxHp, defender.hp+heal);
      defender.itemUsed = true;
      msg += ` ${defender.name} mange sa ${heldItem.name} et récupère des PV !`;
    }
  }
  let ejectMsg = '';
  if(defender.heldItem==='boutonFuite' && defender.hp>0 && battleState){
    const loc = locateActiveSlot(defender);
    if(loc){
      const bs = battleState;
      const roster = loc.side==='player' ? bs.player : bs.foe;
      const usedIdx = loc.side==='player' ? [bs.pActive, bs.pActive2] : [bs.fActive, bs.fActive2];
      const aliveIdx = roster.map((c,i)=> (c.hp>0 && !usedIdx.includes(i)) ? i : -1).filter(i=>i>=0);
      if(aliveIdx.length>0 && !defender.trapped){
        const newIdx = rand(aliveIdx);
        const entering = setActiveSlot(loc.side, loc.slot, newIdx);
        resetBattleFields(entering);
        ejectMsg = ` ${defender.name} est éjecté grâce à son Bouton Fuite ! ${entering.name} entre sur le terrain !`;
        const opponent = loc.side==='player' ? aliveFoeCombatants()[0] : alivePlayerCombatants()[0];
        if(opponent) ejectMsg += triggerIntimidate(entering, opponent) + triggerSwitchInAbilities(entering, opponent);
      }
    }
  }
  msg += ejectMsg;
  renderBattle();
  shakeBox(boxIdFor(defender), crit);
  if(crit) flashScreen('crit');
  else if(eff>1) flashScreen('superfx');
  setLog(msg);
  setTimeout(callback, 1000);
}

/* =================== Fin de tour, K.O. et remplacements =================== */
function endTurn(){
  const bs = battleState;
  const playerCombatants = alivePlayerCombatants();
  const foeCombatants = aliveFoeCombatants();
  const all = [...playerCombatants, ...foeCombatants];
  let logs = [];
  all.forEach(c=> endOfTurnStatus(c, logs));
  playerCombatants.forEach(c=>{
    if(c.hp>0 && c.seeded && foeCombatants.length){
      const opp = foeCombatants[0];
      const sdmg = Math.max(1, Math.round(c.maxHp/8));
      c.hp = Math.max(0, c.hp-sdmg);
      opp.hp = Math.min(opp.maxHp, opp.hp+sdmg);
      logs.push(`${c.name} perd des PV à cause de Vampigraine, ${opp.name} récupère !`);
    }
  });
  foeCombatants.forEach(c=>{
    if(c.hp>0 && c.seeded && playerCombatants.length){
      const opp = playerCombatants[0];
      const sdmg = Math.max(1, Math.round(c.maxHp/8));
      c.hp = Math.max(0, c.hp-sdmg);
      opp.hp = Math.min(opp.maxHp, opp.hp+sdmg);
      logs.push(`${c.name} perd des PV à cause de Vampigraine, ${opp.name} récupère !`);
    }
  });
  all.forEach(c=>{
    if(c.hp>0 && c.ingrained && c.hp<c.maxHp){
      const idmg = Math.max(1, Math.round(c.maxHp/16));
      c.hp = Math.min(c.maxHp, c.hp+idmg);
      logs.push(`${c.name} récupère des PV grâce à ses racines !`);
    }
  });
  all.forEach(c=>{
    c.lastPhysDamage = 0;
    c.lastSpecDamage = 0;
    c.protected = false;
    c.enduring = false;
    if(c.mistTurns>0){
      c.mistTurns--;
      if(c.mistTurns===0) logs.push(`La Brume protégeant ${c.name} se dissipe.`);
    }
    if(c.lightScreenTurns>0){
      c.lightScreenTurns--;
      if(c.lightScreenTurns===0) logs.push(`Le Mur Lumière de ${c.name} se dissipe.`);
    }
    if(c.reflectTurns>0){
      c.reflectTurns--;
      if(c.reflectTurns===0) logs.push(`La Protection de ${c.name} se dissipe.`);
    }
    if(c.disableTurns>0){
      c.disableTurns--;
      if(c.disableTurns===0){
        logs.push(`${c.name} n'est plus entravé.`);
        c.disabledMove = null;
      }
    }
    if(c.safeguardTurns>0){
      c.safeguardTurns--;
      if(c.safeguardTurns===0) logs.push(`Rune Protect protégeant ${c.name} se dissipe.`);
    }
    if(c.tauntTurns>0){
      c.tauntTurns--;
      if(c.tauntTurns===0) logs.push(`${c.name} n'est plus provoqué.`);
    }
    if(c.perishCounter>0 && c.hp>0){
      c.perishCounter--;
      if(c.perishCounter===0){
        c.hp = 0;
        logs.push(`Le compte à rebours de ${c.name} arrive à zéro, il est mis K.O. !`);
      } else {
        logs.push(`${c.name} sera K.O. dans ${c.perishCounter} tour${c.perishCounter>1?'s':''} !`);
      }
    }
  });
  if(bs.weather){
    bs.weather.turns--;
    if(bs.weather.turns<=0){
      logs.push(`${WEATHER_LABEL[bs.weather.type]} se dissipe.`);
      bs.weather = null;
    }
  }
  if(bs.pendingFutureSight && bs.pendingFutureSight.length){
    bs.pendingFutureSight = bs.pendingFutureSight.filter(fs=>{
      fs.turnsLeft--;
      if(fs.turnsLeft<=0){
        const target = fs.target;
        if(target.hp>0){
          target.hp = Math.max(0, target.hp - fs.dmg);
          logs.push(`La force psychique de ${fs.moveName} s'abat sur ${target.name} ! (${fs.dmg} dégâts)`);
        } else {
          logs.push(`La force psychique de ${fs.moveName} ne trouve plus sa cible...`);
        }
        return false;
      }
      return true;
    });
  }
  renderBattle();
  if(logs.length) setLog(logs.join(' '));
  handleFaintsAndAdvance();
}

function handleFaintsAndAdvance(){
  const bs = battleState;
  if(allFainted(bs.player)){ setTimeout(()=> gameOver(), 700); return; }
  if(allFainted(bs.foe)){ setTimeout(()=> floorCleared(), 900); return; }

  const foeFaintedSlots = [];
  if(bs.fActive!=null && bs.foe[bs.fActive].hp<=0) foeFaintedSlots.push('A');
  if(bs.isDouble && bs.fActive2!=null && bs.foe[bs.fActive2].hp<=0) foeFaintedSlots.push('B');
  if(foeFaintedSlots.length){
    replaceFoeSlot(foeFaintedSlots[0], ()=> handleFaintsAndAdvance());
    return;
  }

  const playerFaintedSlots = [];
  if(bs.pActive!=null && bs.player[bs.pActive].hp<=0) playerFaintedSlots.push('A');
  if(bs.isDouble && bs.pActive2!=null && bs.player[bs.pActive2].hp<=0) playerFaintedSlots.push('B');
  if(playerFaintedSlots.length){
    const slot = playerFaintedSlots[0];
    document.getElementById(slot==='A' ? 'playerBox' : 'player2Box').classList.add('faint-fade');
    setLog(`<b>${bs.player[playerSlotIdx(slot)].name} est K.O. !</b>`);
    const usedIdx = [bs.pActive, bs.pActive2].filter(x=>x!=null);
    const aliveIdx = bs.player.map((c,i)=> (c.hp>0 && !usedIdx.includes(i)) ? i : -1).filter(i=>i>=0);
    setTimeout(()=> showSwitchPrompt(aliveIdx, slot), 700);
    return;
  }

  beginPlayerTurn();
}

function replaceFoeSlot(slot, callback){
  const bs = battleState;
  const idx = slot==='A' ? bs.fActive : bs.fActive2;
  document.getElementById(slot==='A' ? 'foeBox' : 'foe2Box').classList.add('faint-fade');
  setLog(`<b>${bs.foe[idx].name} est K.O. !</b>`);
  const usedIdx = [bs.fActive, bs.fActive2].filter(x=>x!=null);
  const excellent = !!((bs.trainer && bs.trainer.boss) || (bs.trainer2 && bs.trainer2.boss));
  const refPlayer = alivePlayerCombatants()[0];
  const nextIdx = excellent
    ? bestFoeSwitchIdx(bs.foe, refPlayer, usedIdx)
    : bs.foe.findIndex((c,i)=> c.hp>0 && !usedIdx.includes(i));
  if(nextIdx===-1){
    if(slot==='A') bs.fActive = null; else bs.fActive2 = null;
    setTimeout(callback, 300);
    return;
  }
  setActiveSlot('foe', slot, nextIdx);
  resetBattleFields(bs.foe[nextIdx]);
  setTimeout(()=>{
    const newFoe = bs.foe[nextIdx];
    const p = alivePlayerCombatants()[0];
    const intimMsg = p ? (triggerIntimidate(newFoe, p) + triggerSwitchInAbilities(newFoe, p)) : '';
    setLog(`L'adversaire envoie ${newFoe.name} !${intimMsg}`);
    renderBattle();
    callback();
  }, 900);
}

function showSwitchPrompt(aliveIdx, slot){
  slot = slot || 'A';
  const bs = battleState;
  document.getElementById('movesGrid').classList.add('hidden');
  document.getElementById('movesHeader').classList.add('hidden');
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
    btn.className = 'move-btn';
    btn.innerHTML = `<span style="display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:6px;">${getSpriteHTML(c.name, c.unownForm)}</span>${c.name} <small>${c.types.map(t=>typeTagHTML(t)).join(' ')} · ${c.hp} / ${c.maxHp} PV<br>${c.moves.map(mv=>mv.name).join(' · ')}</small>`;
    btn.onclick = ()=>{
      if(slot==='A') bs.pActive = i; else bs.pActive2 = i;
      resetBattleFields(c);
      sw.classList.add('hidden');
      renderBattle();
      const opponent = aliveFoeCombatants()[0];
      const intimMsg = opponent ? (triggerIntimidate(c, opponent) + triggerSwitchInAbilities(c, opponent)) : '';
      setLog(`Tu envoies ${c.name} !${intimMsg}`);
      handleFaintsAndAdvance();
    };
    sw.appendChild(btn);
  });
}
