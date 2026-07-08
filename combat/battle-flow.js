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
}
function startBattle(){
  const trainer = generateTrainer(towerFloor);
  const enemyTeam = generateEnemyTeam(towerFloor, trainer.theme);
  const playerRoster = team.map(m=>{
    const sp = speciesOf(m);
    const maxHp = m.computedStats.hp;
    const hardMode = difficulty==='difficile';
    const hp = (hardMode && typeof m.hp==='number') ? m.hp : maxHp;
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

  // En difficile, si toute l'équipe est déjà K.O. avant même le combat, c'est la défaite
  const aliveIdx = playerRoster.findIndex(c=>c.hp>0);
  if(aliveIdx===-1){
    document.getElementById('screenTower').classList.add('hidden');
    gameOver();
    return;
  }

  battleState = { player: playerRoster, foe: enemyTeam, pActive: aliveIdx, fActive: 0, locked:false, trainer, weather:null };
  document.getElementById('screenTower').classList.add('hidden');
  document.getElementById('screenBattle').classList.remove('hidden');
  document.getElementById('trainerBanner').innerHTML = `${trainer.emoji} <b>${trainer.name}</b> veut se battre ! <span style="color:var(--text-dim);font-size:10px;">"${trainer.dialogue}"</span>`;
  const pLead = playerRoster[aliveIdx], fLead = enemyTeam[0];
  const intimMsg = triggerIntimidate(fLead, pLead) + triggerIntimidate(pLead, fLead) + triggerSwitchInAbilities(fLead, pLead) + triggerSwitchInAbilities(pLead, fLead);
  setLog(`<b>Étage ${towerFloor}</b> — l'adversaire envoie ${enemyTeam[0].name} !${intimMsg}`);
  renderBattle();
}

function doVoluntarySwitch(i){
  const bs = battleState;
  const leaving = bs.player[bs.pActive];
  let switchMsg = '';
  if(leaving.ability==='Régé-Force' && leaving.hp>0){
    const heal = Math.max(1, Math.round(leaving.maxHp/3));
    leaving.hp = Math.min(leaving.maxHp, leaving.hp+heal);
    switchMsg = ` ${leaving.name} récupère des PV grâce à Régénération !`;
  }
  bs.pActive = i;
  resetBattleFields(bs.player[i]);
  bs.locked = true;
  closeManualSwitch();
  renderBattle();
  const incoming = bs.player[i];
  const intimidateMsg = triggerIntimidate(incoming, bs.foe[bs.fActive]) + triggerSwitchInAbilities(incoming, bs.foe[bs.fActive]);
  setLog(`Tu rappelles ton Pokémon et envoies ${incoming.name} !${switchMsg}${intimidateMsg}`);
  setTimeout(()=>{
    const f = bs.foe[bs.fActive];
    const fMove = chooseFoeMove(f, bs.player[bs.pActive]);
    runStep(f, fMove, bs.player[bs.pActive], false, ()=>{
      if(checkFaintsAndHandle()) return;
      endTurn();
    });
  }, 1000);
}
document.getElementById('manualSwitchBtn').onclick = openManualSwitch;
document.getElementById('cancelSwitchBtn').onclick = closeManualSwitch;

function useBagPotion(i){
  const bs = battleState;
  const c = bs.player[i];
  const heal = Math.max(1, Math.round(c.maxHp*0.5));
  c.hp = Math.min(c.maxHp, c.hp+heal);
  bag.potion--;
  closeManualSwitch();
  bs.locked = true;
  renderBattle();
  setLog(`Tu utilises une Potion sur ${c.name} ! Il récupère ${heal} PV.`);
  setTimeout(()=>{
    const f = bs.foe[bs.fActive];
    const fMove = chooseFoeMove(f, bs.player[bs.pActive]);
    runStep(f, fMove, bs.player[bs.pActive], false, ()=>{
      if(checkFaintsAndHandle()) return;
      endTurn();
    });
  }, 1000);
}
document.getElementById('bagBtn').onclick = openBag;

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
function checkFaintsAndHandle(){
  const bs = battleState;
  const p = bs.player[bs.pActive], f = bs.foe[bs.fActive];
  if(f.hp<=0){ setTimeout(()=> handleFoeFaint(), 700); return true; }
  if(p.hp<=0){ setTimeout(()=> handlePlayerFaint(), 700); return true; }
  return false;
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
  let acc;
  if(move.target==='self'){
    acc = 1;
  } else if(actor.guaranteedHit){
    acc = 1;
  } else {
    acc = move.accuracy!==undefined ? move.accuracy : 0.95;
    acc *= accuracyStageMultiplier(actor.stages.acc);
    if(move.cat!=='status') acc /= accuracyStageMultiplier(defender.stages.eva||0);
  }
  const weatherNow = battleState ? battleState.weather : null;
  if(weatherNow && move.cat!=='status'){
    if(weatherNow.type==='sable' && defender.ability==='Voile Sable') acc *= 0.8;
    if(weatherNow.type==='grele' && defender.ability==='Rideau Neige') acc *= 0.8;
  }
  lungeBox(actorIsPlayer ? 'playerBox' : 'foeBox');
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
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
    if(move.target==='foe') shakeBox(actorIsPlayer ? 'foeBox' : 'playerBox');
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox', true);
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
    setLog(`<b>${actor.name}</b> utilise ${move.name} ! ${defender.name} tombe au même niveau de PV (${edmg} dégâts) !`);
    setTimeout(callback, 1000);
    return;
  }
  if(move.psywave){
    const pdmg = Math.max(1, Math.round(10 + Math.random()*40));
    defender.hp = Math.max(0, defender.hp-pdmg);
    renderBattle();
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
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
    shakeBox(actorIsPlayer?'foeBox':'playerBox');
    setLog(`<b>${actor.name}</b> offre un Cadeau piégé ! ${defender.name} subit ${pdmg} dégâts !`);
    setTimeout(callback, 1000);
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
    const bs = battleState;
    const isDefPlayer = (defender===bs.player[bs.pActive]);
    const roster = isDefPlayer ? bs.player : bs.foe;
    const activeKey = isDefPlayer ? 'pActive' : 'fActive';
    const aliveIdx = roster.map((c,i)=> (c.hp>0 && i!==bs[activeKey]) ? i : -1).filter(i=>i>=0);
    if(aliveIdx.length>0 && !defender.trapped){
      const newIdx = rand(aliveIdx);
      bs[activeKey] = newIdx;
      resetBattleFields(roster[newIdx]);
      ejectMsg = ` ${defender.name} est éjecté grâce à son Bouton Fuite ! ${roster[newIdx].name} entre sur le terrain !`;
      const opponent = isDefPlayer ? bs.foe[bs.fActive] : bs.player[bs.pActive];
      ejectMsg += triggerIntimidate(roster[newIdx], opponent) + triggerSwitchInAbilities(roster[newIdx], opponent);
    }
  }
  msg += ejectMsg;
  renderBattle();
  shakeBox(actorIsPlayer?'foeBox':'playerBox', crit);
  if(crit) flashScreen('crit');
  else if(eff>1) flashScreen('superfx');
  setLog(msg);
  setTimeout(callback, 1000);
}

function playerAttack(moveIdx){
  const bs = battleState;
  if(bs.locked) return;
  bs.locked = true;
  const p = bs.player[bs.pActive], f = bs.foe[bs.fActive];
  const pMove = moveIdx===-1 ? STRUGGLE_MOVE : p.moves[moveIdx];
  if(moveIdx>=0 && p.ppCur && p.ppCur[moveIdx]>0) p.ppCur[moveIdx]--;
  const fMove = chooseFoeMove(f, p);
  const pSpeed = effectiveSpeed(p), fSpeed = effectiveSpeed(f);
  const pPrio = pMove.priority||0, fPrio = fMove.priority||0;
  let playerFirst;
  if(pPrio!==fPrio){
    playerFirst = pPrio>fPrio;
  } else {
    playerFirst = pSpeed>fSpeed || (pSpeed===fSpeed && Math.random()<0.5);
  }

  if(playerFirst){
    runStep(p, pMove, f, true, ()=>{
      if(checkFaintsAndHandle()) return;
      runStep(f, fMove, p, false, ()=>{
        if(checkFaintsAndHandle()) return;
        endTurn();
      });
    });
  } else {
    runStep(f, fMove, p, false, ()=>{
      if(checkFaintsAndHandle()) return;
      runStep(p, pMove, f, true, ()=>{
        if(checkFaintsAndHandle()) return;
        endTurn();
      });
    });
  }
}

function endTurn(){
  const bs = battleState;
  const p = bs.player[bs.pActive], f = bs.foe[bs.fActive];
  let logs = [];
  endOfTurnStatus(p, logs);
  endOfTurnStatus(f, logs);
  [[p,f],[f,p]].forEach(([c,opp])=>{
    if(c.hp>0 && c.seeded && opp.hp>0){
      const sdmg = Math.max(1, Math.round(c.maxHp/8));
      c.hp = Math.max(0, c.hp-sdmg);
      opp.hp = Math.min(opp.maxHp, opp.hp+sdmg);
      logs.push(`${c.name} perd des PV à cause de Vampigraine, ${opp.name} récupère !`);
    }
    if(c.hp>0 && c.ingrained && c.hp<c.maxHp){
      const idmg = Math.max(1, Math.round(c.maxHp/16));
      c.hp = Math.min(c.maxHp, c.hp+idmg);
      logs.push(`${c.name} récupère des PV grâce à ses racines !`);
    }
  });
  [p, f].forEach(c=>{
    c.lastPhysDamage = 0;
    c.lastSpecDamage = 0;
    c.protected = false;
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
  renderBattle();
  if(logs.length) setLog(logs.join(' '));
  if(p.hp<=0){ setTimeout(()=> handlePlayerFaint(), 700); return; }
  if(f.hp<=0){ setTimeout(()=> handleFoeFaint(), 700); return; }
  bs.locked = false;
  renderMoveGrid();
}

function handleFoeFaint(){
  const bs = battleState;
  document.getElementById('foeBox').classList.add('faint-fade');
  setLog(`<b>${bs.foe[bs.fActive].name} est K.O. !</b>`);
  const nextIdx = bs.foe.findIndex(c=>c.hp>0);
  if(nextIdx===-1){ setTimeout(()=> floorCleared(), 900); return; }
  bs.fActive = nextIdx;
  resetBattleFields(bs.foe[nextIdx]);
  setTimeout(()=>{
    const newFoe = bs.foe[bs.fActive];
    const p = bs.player[bs.pActive];
    const intimMsg = triggerIntimidate(newFoe, p) + triggerSwitchInAbilities(newFoe, p);
    setLog(`L'adversaire envoie ${newFoe.name} !${intimMsg}`);
    bs.locked = false;
    renderBattle();
  }, 900);
}

function handlePlayerFaint(){
  const bs = battleState;
  document.getElementById('playerBox').classList.add('faint-fade');
  setLog(`<b>${bs.player[bs.pActive].name} est K.O. !</b>`);
  const aliveIdx = bs.player.map((c,i)=>c.hp>0?i:-1).filter(i=>i>=0);
  if(aliveIdx.length===0){ setTimeout(()=> gameOver(), 900); return; }
  setTimeout(()=> showSwitchPrompt(aliveIdx), 700);
}

