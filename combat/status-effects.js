/* ==== combat/status-effects.js (généré depuis index.html) ==== */
const STATUS_LABEL = { poison:'☠️ Empoisonné', brulure:'🔥 Brûlé', paralysie:'⚡ Paralysé', sommeil:'💤 Endormi', confusion:'💫 Confus', gel:'🧊 Gelé' };
const STATUS_ICON = { poison:'☠️', brulure:'🔥', paralysie:'⚡', sommeil:'💤', confusion:'💫', gel:'🧊' };

/* =================== IA ADVERSAIRE =================== */
/* =================== SYSTÈME DE PP =================== */
// Calcule les PP max d'une capacité. Approximatif (pas la valeur officielle) mais cohérent :
// plus une capacité est puissante ou abusive (Abri, soin...), moins elle a de PP.
function triggerIntimidate(incoming, opponent){
  if(incoming.ability==='Intimidation' && opponent && opponent.hp>0){
    const before = opponent.stages.atk;
    opponent.stages.atk = Math.max(-6, before-1);
    if(opponent.stages.atk!==before){
      return ` Le talent Intimidation de ${incoming.name} baisse l'Attaque de ${opponent.name} !`;
    }
  }
  return '';
}
function triggerSwitchInAbilities(incoming, opponent){
  let msg = '';
  if(!battleState) return msg;
  if(incoming.ability==='Crachin' && (!battleState.weather || battleState.weather.type!=='pluie')){
    battleState.weather = { type:'pluie', turns:5 };
    msg += ` ${incoming.name} déclenche la pluie grâce à Crachin !`;
  }
  if(incoming.ability==='Sécheresse' && (!battleState.weather || battleState.weather.type!=='soleil')){
    battleState.weather = { type:'soleil', turns:5 };
    msg += ` ${incoming.name} déclenche un fort ensoleillement grâce à Sécheresse !`;
  }
  if(incoming.ability==='Sable Volant' && (!battleState.weather || battleState.weather.type!=='sable')){
    battleState.weather = { type:'sable', turns:5 };
    msg += ` ${incoming.name} déclenche une tempête de sable grâce à Sable Volant !`;
  }
  if(incoming.ability==='Marque Ombre' && opponent && !opponent.trapped){
    opponent.trapped = true;
    msg += ` ${opponent.name} ne peut plus s'échapper à cause de Marque Ombre !`;
  }
  return msg;
}
function applyStatBoost(target, boosts, logs){
  boosts.forEach(b=>{
    const before = target.stages[b.stat];
    target.stages[b.stat] = Math.max(-6, Math.min(6, before + b.stages));
    const actual = target.stages[b.stat]-before;
    if(actual!==0){
      logs.push(`${STAT_LABEL[b.stat]} de ${target.name} ${actual>0?'augmente':'diminue'} !`);
    } else {
      logs.push(`${STAT_LABEL[b.stat]} de ${target.name} ne peut plus changer !`);
    }
  });
}
function berryCuresStatus(target, status){
  if(!target.heldItem || target.itemUsed) return false;
  const item = ITEMS[target.heldItem];
  return !!(item && item.berryCure && (item.berryCure===status || item.berryCure==='all'));
}
function inflictStatus(target, status, logs){
  const types = target.transformedTypes || target.types || [];
  if(status!=='confusion' && target.safeguardTurns>0){
    logs.push(`${target.name} est protégé par Rune Protect !`);
    return;
  }
  if(status==='gel' && (target.ability==='Armumagma' || types.includes('glace'))){
    logs.push(`${target.name} ne peut pas être gelé !`);
    return;
  }
  if(status==='confusion'){
    if(target.confuseCounter>0){ logs.push(`${target.name} est déjà confus !`); return; }
    if(berryCuresStatus(target, 'confusion')){
      target.itemUsed = true;
      logs.push(`${target.name} mange sa ${ITEMS[target.heldItem].name} et ne devient pas confus !`);
      return;
    }
    target.confuseCounter = 2+Math.floor(Math.random()*3);
    logs.push(`${target.name} devient confus !`);
    return;
  }
  if(status==='sommeil' && (target.ability==='Insomnia' || target.ability==='Esprit Vital')){
    logs.push(`${target.name} ne peut pas s'endormir grâce à son talent !`);
    return;
  }
  if(status==='poison' && (target.ability==='Vaccin' || types.includes('poison') || types.includes('acier'))){
    logs.push(`${target.name} est immunisé contre le poison !`);
    return;
  }
  if(status==='paralysie' && target.ability==='Échauffement'){
    logs.push(`${target.name} ne peut pas être paralysé grâce à son talent !`);
    return;
  }
  if(status==='brulure' && (target.ability==='Ignifu-Voile' || types.includes('feu'))){
    logs.push(`${target.name} ne peut pas être brûlé !`);
    return;
  }
  if(target.status){ logs.push(`Ça n'a aucun effet, ${target.name} a déjà un problème de statut !`); return; }
  if(berryCuresStatus(target, status)){
    target.itemUsed = true;
    logs.push(`${target.name} mange sa ${ITEMS[target.heldItem].name} et évite le problème de statut !`);
    return;
  }
  target.status = status;
  if(status==='sommeil') target.sleepCounter = 2+Math.floor(Math.random()*2);
  logs.push(`${target.name} est ${STATUS_LABEL[status]} !`);
}
function healPercent(target, frac, logs){
  const before = target.hp;
  target.hp = Math.min(target.maxHp, target.hp + Math.round(target.maxHp*frac));
  logs.push(`${target.name} récupère ${target.hp-before} PV !`);
}
const WEATHER_LABEL = { pluie:'🌧️ Pluie', soleil:'☀️ Soleil intense', sable:'🌪️ Tempête de sable', grele:'🌨️ Grêle' };
function applyStatusEffect(user, target, move, logs){
  const eff = move.effect||{};
  if(eff.selfBoost) applyStatBoost(user, eff.selfBoost, logs);
  if(eff.foeBoost){
    if(target.ability==='Corps Sain' && eff.foeBoost.every(b=>b.stages<0)){
      logs.push(`Corps Sain empêche la baisse de statistiques de ${target.name} !`);
    } else if(target.mistTurns>0 && eff.foeBoost.every(b=>b.stages<0)){
      logs.push(`La Brume protège ${target.name} de la baisse de statistiques !`);
    } else {
      applyStatBoost(target, eff.foeBoost, logs);
    }
  }
  if(eff.status) inflictStatus(target, eff.status, logs);
  if(eff.heal) healPercent(user, eff.heal, logs);
  if(eff.weather && battleState){
    battleState.weather = { type: eff.weather, turns: 5 };
    logs.push(`${WEATHER_LABEL[eff.weather]} se met à sévir !`);
  }
  if(eff.mist){
    user.mistTurns = 5;
    logs.push(`${user.name} s'enveloppe de Brume !`);
  }
  if(eff.lightScreen){
    user.lightScreenTurns = 5;
    logs.push(`${user.name} s'abrite derrière un Mur Lumière !`);
  }
  if(eff.reflect){
    user.reflectTurns = 5;
    logs.push(`${user.name} s'abrite derrière une Protection !`);
  }
  if(eff.haze){
    user.stages = {atk:0,def:0,spa:0,spd:0,spe:0,acc:0,eva:0};
    target.stages = {atk:0,def:0,spa:0,spd:0,spe:0,acc:0,eva:0};
    logs.push("Toutes les modifications de statistiques sont annulées !");
  }
  if(eff.disable){
    if(target.heldItem==='herbeMental' && !target.itemUsed){
      target.itemUsed = true;
      logs.push(`${target.name} mange son Herbe Mental et résiste à Entrave !`);
    } else if(target.lastMoveUsed){
      target.disabledMove = target.lastMoveUsed;
      target.disableTurns = 4;
      logs.push(`La capacité ${target.lastMoveUsed.name} de ${target.name} est entravée !`);
    } else {
      logs.push(`Ça ne marche pas, ${target.name} n'a pas encore utilisé de capacité !`);
    }
  }
  if(eff.forceSwitch && battleState){
    if(target.ability==='Ventouse'){
      logs.push(`${target.name} résiste grâce à Ventouse !`);
    } else {
    const bs = battleState;
    const isTargetPlayer = (target===bs.player[bs.pActive]);
    const roster = isTargetPlayer ? bs.player : bs.foe;
    const activeKey = isTargetPlayer ? 'pActive' : 'fActive';
    const aliveIdx = roster.map((c,i)=> (c.hp>0 && i!==bs[activeKey]) ? i : -1).filter(i=>i>=0);
    if(aliveIdx.length>0){
      const newIdx = rand(aliveIdx);
      bs[activeKey] = newIdx;
      resetBattleFields(roster[newIdx]);
      logs.push(`${target.name} est rappelé de force ! ${roster[newIdx].name} entre sur le terrain !`);
      const opponent = isTargetPlayer ? bs.foe[bs.fActive] : bs.player[bs.pActive];
      const intimMsg = triggerIntimidate(roster[newIdx], opponent) + triggerSwitchInAbilities(roster[newIdx], opponent);
      if(intimMsg) logs.push(intimMsg.trim());
    } else {
      logs.push(`${target.name} n'a personne pour le remplacer !`);
    }
    }
  }
  if(eff.selfSwitch && battleState){
    const bs = battleState;
    const isUserPlayer = (user===bs.player[bs.pActive]);
    const roster = isUserPlayer ? bs.player : bs.foe;
    const activeKey = isUserPlayer ? 'pActive' : 'fActive';
    const aliveIdx = roster.map((c,i)=> (c.hp>0 && i!==bs[activeKey]) ? i : -1).filter(i=>i>=0);
    if(aliveIdx.length>0){
      const newIdx = rand(aliveIdx);
      const savedStages = eff.batonPass ? {...user.stages} : null;
      bs[activeKey] = newIdx;
      resetBattleFields(roster[newIdx]);
      if(savedStages){ roster[newIdx].stages = savedStages; }
      logs.push(eff.batonPass
        ? `${user.name} passe le relais ! ${roster[newIdx].name} entre sur le terrain en gardant les changements de statistiques !`
        : `${user.name} se téléporte hors du combat ! ${roster[newIdx].name} entre sur le terrain !`);
      const opponent = isUserPlayer ? bs.foe[bs.fActive] : bs.player[bs.pActive];
      const intimMsg = triggerIntimidate(roster[newIdx], opponent) + triggerSwitchInAbilities(roster[newIdx], opponent);
      if(intimMsg) logs.push(intimMsg.trim());
    } else {
      logs.push(`${user.name} n'a personne pour le remplacer, ça échoue !`);
    }
  }
  if(eff.mimic){
    const slot = user.moves.indexOf(move);
    if(target.lastMoveUsed && slot!==-1){
      user.moves[slot] = target.lastMoveUsed;
      logs.push(`${user.name} copie ${target.lastMoveUsed.name} !`);
    } else {
      logs.push(`Ça ne marche pas, il n'y a rien à copier !`);
    }
  }
  if(eff.rest){
    user.hp = user.maxHp;
    user.status = 'sommeil';
    user.sleepCounter = 2;
    logs.push(`${user.name} se met à dormir et récupère tous ses PV !`);
  }
  if(eff.critBoost){
    user.critBoost = true;
    logs.push(`${user.name} se concentre pour améliorer ses chances de coup critique !`);
  }
  if(eff.transform){
    user.transformedTypes = [...target.types];
    user.moves = target.moves ? target.moves.slice() : user.moves;
    logs.push(`${user.name} se transforme en ${target.name} !`);
  }
  if(eff.noop){
    logs.push("Mais rien ne se passe...");
  }
  if(eff.bellyDrum){
    if(user.hp > Math.floor(user.maxHp/2)){
      user.hp -= Math.floor(user.maxHp/2);
      user.stages.atk = 6;
      logs.push(`${user.name} sacrifie la moitié de ses PV pour maximiser son Attaque !`);
    } else {
      logs.push(`${user.name} n'a pas assez de PV, ça échoue !`);
    }
  }
  if(eff.protect){
    const chain = user.protectChain || 0;
    const successChance = Math.pow(1/3, chain);
    if(Math.random() < successChance){
      user.protected = true;
      user.protectChain = chain + 1;
      logs.push(`${user.name} se met à l'abri !`);
    } else {
      user.protectChain = 0;
      logs.push(`${user.name} tente de se protéger... mais ça échoue !`);
    }
  }
  if(eff.endure){
    const chain = user.protectChain || 0;
    const successChance = Math.pow(1/3, chain);
    if(Math.random() < successChance){
      user.enduring = true;
      user.protectChain = chain + 1;
      logs.push(`${user.name} se prépare à tenir bon quoi qu'il arrive !`);
    } else {
      user.protectChain = 0;
      logs.push(`${user.name} tente de tenir bon... mais ça échoue !`);
    }
  }
  if(eff.lockOn){
    user.guaranteedHit = true;
    logs.push(`${user.name} vise soigneusement ${target.name}, son prochain coup ne pourra pas rater !`);
  }
  if(eff.safeguard){
    user.safeguardTurns = 5;
    logs.push(`${user.name} est protégé de toute altération de statut !`);
  }
  if(eff.perishSong){
    user.perishCounter = 3;
    target.perishCounter = 3;
    logs.push("Tous les Pokémon qui entendent cette mélodie seront K.O. dans 3 tours !");
  }
  if(eff.painSplit){
    const avg = Math.round((user.hp+target.hp)/2);
    user.hp = Math.min(user.maxHp, avg);
    target.hp = Math.min(target.maxHp, avg);
    logs.push("Les PV sont partagés équitablement entre les deux Pokémon !");
  }
  if(eff.trap){
    target.trapped = true;
    logs.push(`${target.name} ne peut plus s'échapper !`);
  }
  if(eff.psychUp){
    user.stages = {...target.stages};
    logs.push(`${user.name} copie les changements de statistiques de ${target.name} !`);
  }
  if(eff.cureStatus){
    if(user.status){
      logs.push(`${user.name} est guéri de son altération de statut !`);
      user.status = null;
      user.sleepCounter = 0;
    } else {
      logs.push(`${user.name} n'avait aucune altération de statut.`);
    }
  }
  if(eff.abilitySwap){
    const tmp = user.ability;
    user.ability = target.ability;
    target.ability = tmp;
    logs.push(`${user.name} et ${target.name} échangent leurs talents !`);
  }
  if(eff.abilityCopy){
    user.ability = target.ability;
    logs.push(`${user.name} copie le talent ${target.ability} !`);
  }
  if(eff.abilityRemove){
    logs.push(`Le talent de ${target.name} est supprimé !`);
    target.ability = null;
  }
  if(eff.itemSwap){
    const tmp = user.heldItem;
    user.heldItem = target.heldItem;
    target.heldItem = tmp;
    logs.push(`${user.name} et ${target.name} échangent leurs objets tenus !`);
  }
  if(eff.itemRemove){
    if(target.heldItem){
      logs.push(`${target.name} perd son objet tenu !`);
      target.heldItem = null;
    } else {
      logs.push("Ça n'a aucun effet, il n'y a rien à faire tomber !");
    }
  }
  if(eff.leechSeed){
    if(!target.seeded){
      target.seeded = true;
      logs.push(`${target.name} est vampirisé par Vampigraine !`);
    } else {
      logs.push(`${target.name} est déjà vampirisé !`);
    }
  }
  if(eff.ingrain){
    user.ingrained = true;
    logs.push(`${user.name} plante ses racines dans le sol !`);
  }
  if(eff.tauntBlock){
    if(target.heldItem==='herbeMental' && !target.itemUsed){
      target.itemUsed = true;
      logs.push(`${target.name} mange son Herbe Mental et résiste à Provoc !`);
    } else {
      target.tauntTurns = 3;
      logs.push(`${target.name} est provoqué et ne peut plus utiliser de capacités de statut !`);
    }
  }
  if(eff.recycle){
    if(user.itemUsed && user.heldItem){
      user.itemUsed = false;
      logs.push(`${user.name} récupère son objet grâce à Recyclage !`);
    } else {
      logs.push("Ça n'a aucun effet, il n'y a rien à recycler !");
    }
  }
  if(eff.selfFaintDebuff){
    user.hp = 0;
    applyStatBoost(target, [{stat:'atk',stages:-2},{stat:'spa',stages:-2}], logs);
    logs.push(`${user.name} se sacrifie complètement !`);
  }
  if(eff.dualConfuse){
    inflictStatus(user, 'confusion', logs);
    inflictStatus(target, 'confusion', logs);
  }
  if(eff.wakeAll){
    if(user.status==='sommeil'){ user.status=null; user.sleepCounter=0; logs.push(`${user.name} se réveille !`); }
    if(target.status==='sommeil'){ target.status=null; target.sleepCounter=0; logs.push(`${target.name} se réveille !`); }
  }
}
function endOfTurnStatus(battler, logs){
  if(battler.hp<=0) return;
  if(battler.status==='poison'){
    const dmg = Math.max(1, Math.round(battler.maxHp/8));
    battler.hp = Math.max(0, battler.hp-dmg);
    logs.push(`${battler.name} souffre du poison (${dmg} dégâts).`);
  } else if(battler.status==='brulure'){
    const dmg = Math.max(1, Math.round(battler.maxHp/16));
    battler.hp = Math.max(0, battler.hp-dmg);
    logs.push(`${battler.name} souffre de sa brûlure (${dmg} dégâts).`);
  }
  const weather = weatherNullified() ? null : (battleState ? battleState.weather : null);
  if(weather && battler.hp>0){
    if(weather.type==='sable' && !battler.types.some(t=>['roche','sol','acier'].includes(t))){
      const dmg = Math.max(1, Math.round(battler.maxHp/16));
      battler.hp = Math.max(0, battler.hp-dmg);
      logs.push(`${battler.name} est fouetté par la tempête de sable (${dmg} dégâts).`);
    } else if(weather.type==='grele' && !battler.types.includes('glace')){
      const dmg = Math.max(1, Math.round(battler.maxHp/16));
      battler.hp = Math.max(0, battler.hp-dmg);
      logs.push(`${battler.name} souffre de la grêle (${dmg} dégâts).`);
    }
  }
  if(battler.hp>0 && weather){
    if(weather.type==='soleil' && battler.ability==='Force Soleil'){
      const dmg = Math.max(1, Math.round(battler.maxHp/8));
      battler.hp = Math.max(0, battler.hp-dmg);
      logs.push(`${battler.name} perd des PV à cause de Sève Solaire (${dmg} dégâts).`);
    }
    if(battler.ability==='Peau Sèche' && battler.hp>0){
      if(weather.type==='pluie'){
        const heal = Math.max(1, Math.round(battler.maxHp*0.12));
        battler.hp = Math.min(battler.maxHp, battler.hp+heal);
        logs.push(`${battler.name} récupère des PV grâce à Peau Sèche.`);
      } else if(weather.type==='soleil'){
        const dmg = Math.max(1, Math.round(battler.maxHp*0.12));
        battler.hp = Math.max(0, battler.hp-dmg);
        logs.push(`${battler.name} perd des PV à cause de Peau Sèche sous le soleil.`);
      }
    }
    if(weather.type==='pluie' && battler.ability==='Cuvette' && battler.hp>0 && battler.hp<battler.maxHp){
      const heal = Math.max(1, Math.round(battler.maxHp*0.06));
      battler.hp = Math.min(battler.maxHp, battler.hp+heal);
      logs.push(`${battler.name} récupère un peu de PV grâce à Pluie Bienfaisante.`);
    }
  }
  if(battler.hp>0 && battler.heldItem==='reste' && battler.hp<battler.maxHp){
    const heal = Math.max(1, Math.round(battler.maxHp*0.06));
    battler.hp = Math.min(battler.maxHp, battler.hp+heal);
    logs.push(`${battler.name} récupère un peu de PV grâce à son Reste.`);
  }
  if(battler.hp>0 && battler.status && battler.ability==='Mue' && Math.random()<0.3){
    logs.push(`${battler.name} change de peau et guérit de son altération d'état grâce à Mue !`);
    battler.status = null;
    battler.sleepCounter = 0;
  }
  if(battler.hp>0 && battler.ability==='Turbo' && battler.stages.spe<6){
    battler.stages.spe = Math.min(6, battler.stages.spe+1);
    logs.push(`La Vitesse de ${battler.name} augmente grâce à Turbo !`);
  }
}

