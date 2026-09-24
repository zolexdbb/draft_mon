/* ==== SOMMAIRE ====
   Statuts (poison/brûlure/paralysie/sommeil/gel/confusion), talents déclenchés à l'entrée sur le
   terrain (Intimidation, météo/terrain auto...), et applyStatusEffect() qui exécute tous les
   effets des capacités de statut (move.effect.xxx). Repères :
   - L.11-33 : icônes/couleurs de statut (affichage)
   - L.36-46 : triggerIntimidate — baisse l'Attaque adverse à l'entrée si le talent est Intimidation
   - L.47-82 : triggerSwitchInAbilities — météo/terrain auto à l'entrée (Crachin, Sécheresse, Surges...)
   - L.83-95 : applyStatBoost — applique un changement de stats (boost/malus) avec message de log
   - L.100-166 : inflictStatus — inflige un statut en vérifiant toutes les immunités (talent/type/terrain/Rune Protect/baie)
   - L.172-fin(497) : applyStatusEffect — exécute un par un tous les effets possibles d'une capacité
     de statut (voir la liste des flags juste au-dessus de la fonction)
   - L.498-fin : endOfTurnStatus — dégâts/soins de fin de tour (poison, brûlure, météo, Reste, Mue, Turbo...)
==== */
const STATUS_LABEL = { poison:'☠️ Empoisonné', brulure:'🔥 Brûlé', paralysie:'⚡ Paralysé', sommeil:'💤 Endormi', confusion:'💫 Confus', gel:'🧊 Gelé' };
const STATUS_ICON = { poison:'☠️', brulure:'🔥', paralysie:'⚡', sommeil:'💤', confusion:'💫', gel:'🧊' };
const STATUS_COLOR = { poison:'#A33EA1', brulure:'#EE8130', paralysie:'#F7D02C', sommeil:'#9199A1', confusion:'#F95587', gel:'#96D9D6' };
// Génère les points SVG d'une spirale (icône de confusion).
function spiralPoints(turns, startR, endR, steps, cx, cy){
  cx = cx||12; cy = cy||12; steps = steps||40;
  const pts = [];
  for(let i=0;i<=steps;i++){
    const t = i/steps;
    const angle = t*Math.PI*2*turns;
    const r = startR + (endR-startR)*t;
    pts.push((cx+Math.cos(angle)*r).toFixed(2)+','+(cy+Math.sin(angle)*r).toFixed(2));
  }
  return pts.join(' ');
}
const STATUS_ICON_PATH = {
  poison: `<path d="M12 2C7.58 2 4 5.58 4 10c0 2.92 1.56 5.47 3.9 6.86.06.5.1 1.32.1 2.14v1c0 .55.45 1 1 1h1v-1.5h1V21h4v-1.5h1V20h1c.55 0 1-.45 1-1v-1c0-.82.04-1.64.1-2.14C18.44 15.47 20 12.92 20 10c0-4.42-3.58-8-8-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>`,
  brulure: TYPE_ICON_PATH.feu,
  paralysie: TYPE_ICON_PATH.electrik,
  sommeil: `<text x="12" y="17" font-size="13" font-weight="900" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">Zz</text>`,
  confusion: `<polyline points="${spiralPoints(1.8,1,10)}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  gel: TYPE_ICON_PATH.glace
};
// Icône affichée sur le sprite d'un Pokémon ayant un statut.
function statusIconHTML(status, size){
  size = size || 16;
  const color = STATUS_COLOR[status] || '#e8e0f0';
  const path = STATUS_ICON_PATH[status] || '';
  return `<span class="type-icon" style="width:${size}px;height:${size}px;color:${color};"><svg viewBox="0 0 24 24">${path}</svg></span>`;
}

// Talent Intimidation : baisse l'Attaque de l'adversaire d'un cran quand ce Pokémon entre sur le terrain.
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
// Talents qui déclenchent automatiquement une météo ou un terrain à l'entrée sur le terrain (Crachin, Sécheresse, Sable Volant, Marque Ombre, les 4 talents Surge), et Marque Ombre (piège l'adversaire).
function triggerSwitchInAbilities(incoming, opponent){
  let msg = '';
  if(!battleState) return msg;
  msg += applyEntryHazards(incoming);
  if(battleState.wishHeal){
    const wl = locateActiveSlot(incoming);
    if(wl && battleState.wishHeal[wl.side] && incoming.hp>0){
      battleState.wishHeal[wl.side] = false;
      incoming.hp = incoming.maxHp; incoming.status = null; incoming.sleepCounter = 0;
      msg += ` ${incoming.name} est entièrement soigné par le sacrifice de son coéquipier !`;
    }
  }
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
  if(incoming.ability==='Électro Surge' && (!battleState.terrain || battleState.terrain.type!=='electric')){
    battleState.terrain = { type:'electric', turns:5 };
    msg += ` ${incoming.name} charge le terrain grâce à Électro Surge !`;
  }
  if(incoming.ability==='Psycho Surge' && (!battleState.terrain || battleState.terrain.type!=='psychic')){
    battleState.terrain = { type:'psychic', turns:5 };
    msg += ` ${incoming.name} charge le terrain grâce à Psycho Surge !`;
  }
  if(incoming.ability==='Copeaux Surge' && (!battleState.terrain || battleState.terrain.type!=='grassy')){
    battleState.terrain = { type:'grassy', turns:5 };
    msg += ` ${incoming.name} recouvre le terrain d'herbe grâce à Copeaux Surge !`;
  }
  if(incoming.ability==='Aqua Surge' && (!battleState.terrain || battleState.terrain.type!=='misty')){
    battleState.terrain = { type:'misty', turns:5 };
    msg += ` ${incoming.name} enveloppe le terrain de brume grâce à Aqua Surge !`;
  }
  return msg;
}
// Poursuite : un adversaire qui connaît Poursuite peut frapper (puissance x2, une chance sur deux) le Pokémon
// qui s'apprête à quitter le terrain, avant qu'il ne parte. Renvoie le texte à ajouter au journal.
function pursuitBeforeSwitch(leaver){
  if(!battleState || !leaver || leaver.hp<=0) return '';
  const loc = locateActiveSlot(leaver);
  if(!loc) return '';
  const hunters = loc.side==='player' ? aliveFoeCombatants() : alivePlayerCombatants();
  let msg = '';
  hunters.forEach(h=>{
    if(leaver.hp<=0) return;
    const list = h.moveObjs || h.moves || [];
    const idx = list.findIndex(m=>m && m.pursuit);
    if(idx<0 || (h.ppCur && h.ppCur[idx]<=0) || Math.random()>0.5) return;
    const mv = list[idx];
    if(h.ppCur) h.ppCur[idx]--;
    const dm = computeDamage(h, { ...mv, power: mv.power*2 }, leaver).dmg;
    leaver.hp = Math.max(0, leaver.hp - dm);
    markHit(leaver, mv, dm);
    msg += ` ${h.name} rattrape ${leaver.name} avec ${mv.name} avant son départ (${dm} dégâts) !`;
  });
  return msg;
}
/* ---- Pièges d'entrée : Piège de Roc, Picots, Pics Toxik, Toile Gluante ----
   Posés sur le camp adverse du lanceur (battleState.hazards.player / .foe), ils agissent sur chaque
   Pokémon qui ENTRE ensuite sur le terrain (changement, remplaçant après K.O., Hurlement, Change-Éclair...).
   Picots/Pics Toxik/Toile Gluante n'affectent que les Pokémon au sol. Tour Rapide / Toupie Mortelle
   nettoient le camp de leur lanceur. */
const HAZARD_LABEL = { rocks:'🪨 Piège de Roc', spikes:'▲ Picots', toxic:'☠️ Pics Toxik', web:'🕸️ Toile Gluante' };
function freshHazards(){
  return { player:{ rocks:false, spikes:0, toxic:0, web:false }, foe:{ rocks:false, spikes:0, toxic:0, web:false } };
}
function hazardsOf(side){
  if(!battleState) return null;
  if(!battleState.hazards) battleState.hazards = freshHazards();
  return battleState.hazards[side];
}
/* ---- Aires (Aire d'Eau / Aire de Feu / Aire d'Herbe) : en combat double, deux alliés qui utilisent
   deux Aires différentes dans le même tour les combinent en une seule attaque de puissance 150 (du type de
   la première Aire) qui crée un effet de camp pendant 4 tours : Arc-en-ciel (Eau+Feu, chances des effets
   secondaires doublées pour le camp du lanceur), Mer de Feu (Feu+Herbe, 1/8 des PV perdus par tour hors
   Feu) ou Marécage (Herbe+Eau, Vitesse divisée par 4) sur le camp adverse. ---- */
const PLEDGE_COMBOS = { 'fire+water':'rainbow', 'water+fire':'rainbow', 'fire+grass':'fire', 'grass+fire':'fire', 'grass+water':'swamp', 'water+grass':'swamp' };
const PLEDGE_LABEL = { rainbow:'🌈 Arc-en-ciel', fire:'🔥 Mer de Feu', swamp:'🟤 Marécage' };
function freshPledgeFx(){
  return { player:{ rainbow:0, fire:0, swamp:0 }, foe:{ rainbow:0, fire:0, swamp:0 } };
}
function pledgeFxOf(side){
  if(!battleState) return null;
  if(!battleState.pledgeFx) battleState.pledgeFx = freshPledgeFx();
  return battleState.pledgeFx[side];
}
// Chance d'effet secondaire d'un coup : doublée par l'Arc-en-ciel du camp du lanceur.
function serene(actor, chance){
  if(!battleState || !battleState.pledgeFx) return chance;
  const loc = locateActiveSlot(actor);
  return (loc && battleState.pledgeFx[loc.side].rainbow>0) ? Math.min(1, chance*2) : chance;
}
// Si un allié a prévu une autre Aire plus loin dans la file, fusionne les deux actions en une seule
// (l'allié lance l'attaque combinée à la place de la première Aire). Renvoie l'action à exécuter.
function mergePledge(queue, i){
  const action = queue[i];
  const mv = action.move;
  if(!mv || !mv.pledge || !battleState || !battleState.isDouble) return action;
  const loc = locateActiveSlot(action.actor);
  if(!loc) return action;
  for(let j=i+1; j<queue.length; j++){
    const other = queue[j];
    if(!other.move || !other.move.pledge || other.move.pledge===mv.pledge || other.actor===action.actor || other.actor.hp<=0) continue;
    const ol = locateActiveSlot(other.actor);
    if(!ol || ol.side!==loc.side) continue;
    const combo = PLEDGE_COMBOS[mv.pledge+'+'+other.move.pledge];
    if(!combo) continue;
    queue.splice(j, 1);
    const merged = { ...other, move:{ ...other.move, name:`${mv.name} + ${other.move.name}`, type:mv.type, power:150, pledgeCombo:combo } };
    queue[i] = merged;
    return merged;
  }
  return action;
}
// Vrai si le Pokémon touche le sol (les Vol et le talent Lévitation évitent Picots/Pics Toxik/Toile Gluante).
function isGrounded(c){
  if(c.smackDown || (battleState && battleState.gravityTurns>0)) return true;
  if(c.magnetRise>0) return false;
  const types = c.transformedTypes || c.types || [];
  return !(types.includes('vol') || c.ability==='Lévitation');
}
// Mange la baie tenue par un combattant (effet immédiat : soin de PV ou de statut) ; renvoie true si une baie a été mangée.
function eatBerryOf(c, logs){
  const it = c.heldItem && ITEMS[c.heldItem];
  if(!it || it.category!=='baie' || c.itemUsed) return false;
  c.itemUsed = true; c.ateBerry = true;
  if(it.berryHeal){
    const before = c.hp;
    c.hp = Math.min(c.maxHp, c.hp + Math.max(1, Math.round(c.maxHp*it.berryHeal)));
    logs.push(`${c.name} mange sa ${it.name} et récupère ${c.hp-before} PV !`);
  } else if(it.berryCure && c.status && (it.berryCure==='all' || it.berryCure===c.status)){
    c.status = null;
    logs.push(`${c.name} mange sa ${it.name} et est soigné !`);
  } else {
    logs.push(`${c.name} mange sa ${it.name} !`);
  }
  return true;
}
// Rend leur objet aux combattants dont il était temporairement mis de côté (Embargo, Zone Magique).
function restoreStashedItem(c){
  if(c.roomItem && !c.heldItem){ c.heldItem = c.roomItem; }
  c.roomItem = null;
}
// Le camp `side` ('player'|'foe') subit un nouveau piège (posé par un Pokémon de l'autre camp).
function placeHazard(kind, side, logs){
  const h = hazardsOf(side);
  if(!h) return;
  const who = side==='foe' ? "l'équipe adverse" : 'ton équipe';
  if(kind==='rocks'){
    if(h.rocks){ logs.push('Mais ça échoue, des pierres flottent déjà autour de '+who+' !'); return; }
    h.rocks = true;
    logs.push(`Des pierres pointues flottent autour de ${who} !`);
  } else if(kind==='spikes'){
    if(h.spikes>=3){ logs.push('Mais ça échoue, il y a déjà 3 couches de picots autour de '+who+' !'); return; }
    h.spikes++;
    logs.push(`Des picots se dispersent au sol autour de ${who} ! (couche ${h.spikes}/3)`);
  } else if(kind==='toxic'){
    if(h.toxic>=2){ logs.push('Mais ça échoue, il y a déjà 2 couches de pics toxiques autour de '+who+' !'); return; }
    h.toxic++;
    logs.push(`Des pics empoisonnés se dispersent au sol autour de ${who} ! (couche ${h.toxic}/2)`);
  } else if(kind==='web'){
    if(h.web){ logs.push('Mais ça échoue, une toile gluante recouvre déjà le sol autour de '+who+' !'); return; }
    h.web = true;
    logs.push(`Une toile gluante s'étend au sol autour de ${who} !`);
  }
}
// Retire tous les pièges du camp `side`.
function clearHazards(side, logs){
  const h = hazardsOf(side);
  if(!h || !(h.rocks || h.spikes || h.toxic || h.web)) return false;
  h.rocks = false; h.spikes = 0; h.toxic = 0; h.web = false;
  logs.push(side==='foe' ? "Les pièges autour de l'équipe adverse disparaissent !" : 'Les pièges autour de ton équipe disparaissent !');
  return true;
}
// Applique les pièges du camp du Pokémon qui vient d'entrer (dégâts, poison, Vitesse) et renvoie le texte à ajouter au journal.
function applyEntryHazards(incoming){
  if(!battleState || !incoming || incoming.hp<=0) return '';
  const loc = locateActiveSlot(incoming);
  if(!loc) return '';
  const h = hazardsOf(loc.side);
  if(!h || !(h.rocks || h.spikes || h.toxic || h.web)) return '';
  const logs = [];
  const types = incoming.transformedTypes || incoming.types || [];
  const grounded = isGrounded(incoming);
  if(h.rocks){
    const dmg = Math.max(1, Math.floor(incoming.maxHp * 0.125 * getMult('roche', types)));
    incoming.hp = Math.max(0, incoming.hp - dmg);
    logs.push(`Des pierres pointues blessent ${incoming.name} ! (${dmg} dégâts)`);
  }
  if(h.spikes && grounded && incoming.hp>0){
    const frac = [1/8, 1/6, 1/4][h.spikes-1];
    const dmg = Math.max(1, Math.floor(incoming.maxHp * frac));
    incoming.hp = Math.max(0, incoming.hp - dmg);
    logs.push(`Les picots blessent ${incoming.name} ! (${dmg} dégâts)`);
  }
  if(h.toxic && grounded && incoming.hp>0){
    if(types.includes('poison')){
      h.toxic = 0;
      logs.push(`${incoming.name} absorbe les pics empoisonnés, qui disparaissent !`);
    } else {
      inflictStatus(incoming, 'poison', logs);
    }
  }
  if(h.web && grounded && incoming.hp>0){
    logs.push(`${incoming.name} est pris dans la toile gluante !`);
    applyStatBoost(incoming, [{stat:'spe', stages:-1}], logs);
  }
  return logs.length ? ' ' + logs.join(' ') : '';
}
// Applique une liste de changements de stats (boosts/malus, bornés à ±6) et log le résultat.
function applyStatBoost(target, boosts, logs){
  boosts.forEach(b=>{
    const before = target.stages[b.stat];
    target.stages[b.stat] = Math.max(-6, Math.min(6, before + b.stages));
    const actual = target.stages[b.stat]-before;
    if(actual<0) target.loweredThisTurn = true;
    if(actual!==0){
      logs.push(`${STAT_LABEL[b.stat]} de ${target.name} ${actual>0?'augmente':'diminue'} !`);
    } else {
      logs.push(`${STAT_LABEL[b.stat]} de ${target.name} ne peut plus changer !`);
    }
  });
}
// Vrai si l'objet tenu de la cible est une baie qui soigne ce statut (ou tout statut).
function berryCuresStatus(target, status){
  if(!target.heldItem || target.itemUsed) return false;
  const item = ITEMS[target.heldItem];
  return !!(item && item.berryCure && (item.berryCure===status || item.berryCure==='all'));
}
// Inflige un statut à une cible en vérifiant dans l'ordre toutes les immunités possibles (Rune
// Protect, terrain, talent, type, déjà sous statut...) avant de l'appliquer réellement.
function inflictStatus(target, status, logs){
  const types = target.transformedTypes || target.types || [];
  if(status!=='confusion' && target.safeguardTurns>0){
    logs.push(`${target.name} est protégé par Rune Protect !`);
    return;
  }
  if(battleState && battleState.terrain && battleState.terrain.type==='misty'){
    logs.push(`La Zone Brumeuse empêche ${target.name} d'avoir un problème de statut !`);
    return;
  }
  if(status==='sommeil' && battleState && [...alivePlayerCombatants(), ...aliveFoeCombatants()].some(c=>c.contMove && c.contMove.uproar)){
    logs.push(`Le vacarme empêche ${target.name} de s'endormir !`);
    return;
  }
  if(status==='sommeil' && battleState && battleState.terrain && battleState.terrain.type==='electric'){
    logs.push(`La Zone Électrique empêche ${target.name} de s'endormir !`);
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
  if(target.ability==='Comateux' || target.ability==='Sel Purifiant'){
    logs.push(`${target.name} est immunisé contre les altérations de statut grâce à ${target.ability} !`);
    return;
  }
  if(status==='sommeil' && battleState){
    const loc = locateActiveSlot(target);
    const allies = loc && loc.side==='player' ? alivePlayerCombatants() : (loc ? aliveFoeCombatants() : []);
    if(allies.some(c=>c.ability==='Voile Sucré')){
      logs.push(`${target.name} est protégé par Voile Sucré et ne peut pas s'endormir !`);
      return;
    }
  }
  if(status==='poison' && (target.ability==='Vaccin' || target.ability==='Voile Pastel' || types.includes('poison') || types.includes('acier'))){
    logs.push(`${target.name} est immunisé contre le poison !`);
    return;
  }
  if(status==='paralysie' && target.ability==='Échauffement'){
    logs.push(`${target.name} ne peut pas être paralysé grâce à son talent !`);
    return;
  }
  if(status==='brulure' && (target.ability==='Ignifu-Voile' || target.ability==='Écume' || types.includes('feu'))){
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
  if(status==='gel') target.freezeTurns = 0;
  logs.push(`${target.name} est ${STATUS_LABEL[status]} !`);
}
// Soigne un pourcentage des PV max et log le montant récupéré.
function healPercent(target, frac, logs){
  if(target.healBlock>0){ logs.push(`Anti-Soin empêche ${target.name} de récupérer des PV !`); return; }
  const before = target.hp;
  target.hp = Math.min(target.maxHp, target.hp + Math.round(target.maxHp*frac));
  logs.push(`${target.name} récupère ${target.hp-before} PV !`);
}
const WEATHER_LABEL = { pluie:'🌧️ Pluie', soleil:'☀️ Soleil intense', sable:'🌪️ Tempête de sable', grele:'🌨️ Grêle' };
const TERRAIN_LABEL = { grassy:'🌱 Zone Herbue', electric:'⚡ Zone Électrique', misty:'✨ Zone Brumeuse', psychic:'🔮 Zone Psychique' };
// Exécute tous les effets d'une capacité de statut (move.effect), un bloc if par flag possible :
// selfBoost/foeBoost (stats), status, heal, weather/terrain, mist/lightScreen/reflect/safeguard
// (écrans), haze/invertStages (annule/inverse les stats), disable/tauntBlock (entrave la cible),
// forceSwitch/selfSwitch (échange forcé/volontaire), mimic/transform (copie capacité/apparence),
// rest/critBoost/bellyDrum/protect/endure/lockOn (auto-effets), leechSeed/ingrain/trap (statuts de
// terrain persistants), abilitySwap/abilityCopy/abilityRemove/itemSwap/itemRemove (vol/échange),
// perishSong/painSplit/selfFaintDebuff (effets sacrificiels), speedSwap/strengthSap/purifyFoe/
// instruct/wakeAll/recycle/psychUp/cureStatus/dualConfuse/teamProtect/trapField (divers Gen 6-8).
function applyStatusEffect(user, target, move, logs){
  const eff = move.effect||{};
  if(eff.selfBoost){
    if(eff.boostIfType && !(user.transformedTypes||user.types).includes(eff.boostIfType)) logs.push('Mais ça n\'a aucun effet sur ' + user.name + ' !');
    else applyStatBoost(user, eff.selfBoost, logs);
  }
  if(eff.foeBoost){
    if((target.ability==='Corps Sain' || target.ability==='Intégral Métal') && eff.foeBoost.every(b=>b.stages<0)){
      logs.push(`${target.ability} empêche la baisse de statistiques de ${target.name} !`);
    } else if(target.ability==='Armure Miroir' && eff.foeBoost.every(b=>b.stages<0)){
      applyStatBoost(user, eff.foeBoost, logs);
      logs.push(`Armure Miroir renvoie la baisse de statistiques à ${user.name} !`);
    } else if(target.mistTurns>0 && eff.foeBoost.every(b=>b.stages<0)){
      logs.push(`La Brume protège ${target.name} de la baisse de statistiques !`);
    } else {
      applyStatBoost(target, eff.foeBoost, logs);
      if(target.ability==='Compétiteur' && eff.foeBoost.some(b=>b.stages<0)){
        applyStatBoost(target, [{stat:'spa',stages:2}], logs);
      }
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
  if(eff.hazard && battleState){
    const userLoc = locateActiveSlot(user);
    if(userLoc) placeHazard(eff.hazard, userLoc.side==='player' ? 'foe' : 'player', logs);
  }
  if(eff.forceSwitch && battleState){
    if(target.ability==='Ventouse'){
      logs.push(`${target.name} résiste grâce à Ventouse !`);
    } else {
    const bs = battleState;
    const loc = locateActiveSlot(target);
    if(loc){
      const roster = loc.side==='player' ? bs.player : bs.foe;
      const usedIdx = loc.side==='player' ? [bs.pActive, bs.pActive2] : [bs.fActive, bs.fActive2];
      const aliveIdx = roster.map((c,i)=> (c.hp>0 && !usedIdx.includes(i)) ? i : -1).filter(i=>i>=0);
      if(aliveIdx.length>0){
        const newIdx = rand(aliveIdx);
        const entering = setActiveSlot(loc.side, loc.slot, newIdx);
        resetBattleFields(entering);
        logs.push(`${target.name} est rappelé de force ! ${entering.name} entre sur le terrain !`);
        const opponent = loc.side==='player' ? aliveFoeCombatants()[0] : alivePlayerCombatants()[0];
        if(opponent){
          const intimMsg = triggerIntimidate(entering, opponent) + triggerSwitchInAbilities(entering, opponent);
          if(intimMsg) logs.push(intimMsg.trim());
        }
      } else {
        logs.push(`${target.name} n'a personne pour le remplacer !`);
      }
    }
    }
  }
  if(eff.selfSwitch && battleState){
    const bs = battleState;
    const loc = locateActiveSlot(user);
    if(loc){
      const roster = loc.side==='player' ? bs.player : bs.foe;
      const usedIdx = loc.side==='player' ? [bs.pActive, bs.pActive2] : [bs.fActive, bs.fActive2];
      const aliveIdx = roster.map((c,i)=> (c.hp>0 && !usedIdx.includes(i)) ? i : -1).filter(i=>i>=0);
      if(aliveIdx.length>0){
        const newIdx = rand(aliveIdx);
        const pursuitMsg = pursuitBeforeSwitch(user);
        if(pursuitMsg) logs.push(pursuitMsg.trim());
        const savedStages = eff.batonPass ? {...user.stages} : null;
        const entering = setActiveSlot(loc.side, loc.slot, newIdx);
        resetBattleFields(entering);
        if(savedStages){ entering.stages = savedStages; }
        logs.push(eff.batonPass
          ? `${user.name} passe le relais ! ${entering.name} entre sur le terrain en gardant les changements de statistiques !`
          : `${user.name} se téléporte hors du combat ! ${entering.name} entre sur le terrain !`);
        const opponent = loc.side==='player' ? aliveFoeCombatants()[0] : alivePlayerCombatants()[0];
        if(opponent){
          const intimMsg = triggerIntimidate(entering, opponent) + triggerSwitchInAbilities(entering, opponent);
          if(intimMsg) logs.push(intimMsg.trim());
        }
      } else {
        logs.push(`${user.name} n'a personne pour le remplacer, ça échoue !`);
      }
    }
  }
  /* ---- Capacités « spéciales » longtemps sans effet (Attraction, Encore, Tourmente, Dépit, Clairvoyance...) ---- */
  if(eff.infatuate){
    if(target.infatuated) logs.push(`${target.name} est déjà amoureux !`);
    else { target.infatuated = true; logs.push(`${target.name} tombe amoureux de ${user.name} !`); }
  }
  if(eff.encore){
    if(!target.lastMoveUsed || target.encoreTurns>0){
      logs.push('Mais ça échoue !');
    } else {
      target.lockedMove = target.lastMoveUsed;
      target.encoreTurns = 3;
      logs.push(`${target.name} est obligé de répéter ${target.lastMoveUsed.name} !`);
    }
  }
  if(eff.torment){
    if(target.tormented) logs.push('Mais ça échoue !');
    else { target.tormented = true; logs.push(`${target.name} est tourmenté : il ne pourra plus utiliser deux fois de suite la même capacité !`); }
  }
  if(eff.spite){
    const list = target.moveObjs || target.moves || [];
    const idx = list.indexOf(target.lastMoveUsed);
    if(idx>=0 && target.ppCur && target.ppCur[idx]>0){
      const before = target.ppCur[idx];
      target.ppCur[idx] = Math.max(0, before-4);
      logs.push(`Les PP de ${target.lastMoveUsed.name} de ${target.name} baissent de ${before-target.ppCur[idx]} !`);
    } else {
      logs.push('Mais ça échoue !');
    }
  }
  if(eff.foresight){
    target.foresighted = true;
    if((target.stages.eva||0)>0) target.stages.eva = 0;
    logs.push(`${user.name} identifie ${target.name} : son esquive est neutralisée et les Spectre ne sont plus immunisés contre Normal et Combat !`);
  }
  if(eff.destinyBond){
    user.destinyBond = true;
    logs.push(`${user.name} veut entraîner son adversaire dans sa chute !`);
  }
  if(eff.grudge){
    user.grudge = true;
    logs.push(`${user.name} garde une rancune tenace !`);
  }
  if(eff.waterSport && battleState){
    battleState.waterSportTurns = 5;
    logs.push('Des jets d\'eau affaiblissent les attaques de type Feu pendant 5 tours !');
  }
  if(eff.camouflage){
    const terr = battleState && battleState.terrain ? battleState.terrain.type : null;
    const t = { grassy:'plante', electric:'electrik', misty:'fee', psychic:'psy' }[terr] || 'normal';
    user.transformedTypes = [t];
    logs.push(`${user.name} se camoufle et devient de type ${typeDisplayName(t)} !`);
  }
  if(eff.conversion){
    const current = user.transformedTypes || user.types;
    const options = [...new Set((user.moves || user.moveObjs || []).map(m=>m && m.type).filter(t=>t && !current.includes(t)))];
    if(options.length){
      const t = rand(options);
      user.transformedTypes = [t];
      logs.push(`${user.name} devient de type ${typeDisplayName(t)} !`);
    } else logs.push('Mais ça échoue !');
  }
  if(eff.conversion2){
    const last = target.lastMoveUsed;
    if(last && last.type){
      const options = ALL_TYPES.filter(t=>getMult(last.type, [t])<1);
      if(options.length){
        const t = rand(options);
        user.transformedTypes = [t];
        logs.push(`${user.name} devient de type ${typeDisplayName(t)}, résistant à ${last.name} !`);
      } else logs.push('Mais ça échoue !');
    } else logs.push('Mais ça échoue !');
  }
  if(eff.magicCoat){
    user.magicCoat = true;
    logs.push(`${user.name} s'entoure d'un voile magique qui renverra la prochaine capacité de statut !`);
  }
  if(eff.imprison){
    user.imprisoning = true;
    logs.push(`${user.name} scelle les capacités que l'adversaire partage avec lui !`);
  }
  if(eff.snatch){
    user.snatching = true;
    logs.push(`${user.name} guette la prochaine capacité de soutien adverse !`);
  }
  if(eff.nightmare){
    if(target.status==='sommeil' && !target.nightmare){
      target.nightmare = true;
      logs.push(`${target.name} fait un cauchemar !`);
    } else logs.push('Mais ça échoue !');
  }
  if(eff.courtChange && battleState){
    const h = hazardsOf('player'), f = hazardsOf('foe');
    if(h && f){
      const tmp = { ...h };
      Object.assign(h, f);
      Object.assign(f, tmp);
      logs.push('Les pièges des deux camps sont échangés !');
    }
  }
  if(eff.teaTime && battleState){
    let any = false;
    [...alivePlayerCombatants(), ...aliveFoeCombatants()].forEach(c=>{
      const it = c.heldItem && ITEMS[c.heldItem];
      if(it && it.category==='baie' && !c.itemUsed){
        any = true;
        c.itemUsed = true; c.ateBerry = true;
        if(it.berryHeal){
          const before = c.hp;
          c.hp = Math.min(c.maxHp, c.hp + Math.max(1, Math.round(c.maxHp*it.berryHeal)));
          logs.push(`${c.name} mange sa ${it.name} et récupère ${c.hp-before} PV !`);
        } else if(it.berryCure && c.status && (it.berryCure==='all' || it.berryCure===c.status)){
          c.status = null;
          logs.push(`${c.name} mange sa ${it.name} et est soigné !`);
        } else {
          logs.push(`${c.name} mange sa ${it.name} !`);
        }
      }
    });
    if(!any) logs.push('Mais rien ne se passe...');
  }
  /* ---- Capacités de terrain, de camp et de soutien ---- */
  const bsE = battleState;
  const userLocE = bsE ? locateActiveSlot(user) : null;
  const userSide = userLocE ? userLocE.side : null;
  const fail = () => logs.push('Mais ça échoue !');
  if(eff.helpingHand){
    const mates = (userSide==='player' ? alivePlayerCombatants() : aliveFoeCombatants()).filter(c=>c!==user);
    if(mates.length){ mates[0].helped = true; logs.push(`${user.name} encourage ${mates[0].name} !`); } else fail();
  }
  if(eff.roost){
    user.roostTypes = user.transformedTypes || null;
    const kept = (user.transformedTypes || user.types).filter(t=>t!=='vol');
    user.transformedTypes = kept.length ? kept : ['normal'];
    user.roosted = true;
  }
  if(eff.substitute){
    const cost = Math.max(1, Math.floor(user.maxHp/4));
    if(user.substitute>0){ logs.push(`${user.name} a déjà un clone !`); }
    else if(user.hp<=cost){ logs.push(`${user.name} n'a pas assez de PV pour créer un clone !`); }
    else { user.hp -= cost; user.substitute = cost; logs.push(`${user.name} crée un clone de lui-même !`); }
  }
  if(eff.mudSport && bsE){ bsE.mudSportTurns = 5; logs.push('Des jets de boue affaiblissent les attaques de type Électrik pendant 5 tours !'); }
  if(eff.redirect && bsE && userSide){
    bsE.redirect = bsE.redirect || {};
    bsE.redirect[userSide] = user;
    logs.push(`${user.name} attire tous les regards !`);
  }
  if(eff.tailwind && bsE && userSide){
    bsE.tailwind = bsE.tailwind || { player:0, foe:0 };
    bsE.tailwind[userSide] = 4;
    logs.push(`Un vent arrière souffle : la Vitesse de ${userSide==='player'?'ton équipe':"l'équipe adverse"} est doublée pendant 4 tours !`);
  }
  if(eff.gravity && bsE){ bsE.gravityTurns = 5; logs.push('La gravité s\'intensifie ! Plus rien ne peut voler ni léviter pendant 5 tours !'); }
  if(eff.trickRoom && bsE){
    if(bsE.trickRoomTurns>0){ bsE.trickRoomTurns = 0; logs.push('La Distorsion prend fin !'); }
    else { bsE.trickRoomTurns = 5; logs.push('Les dimensions se déforment : les plus lents agissent en premier pendant 5 tours !'); }
  }
  if(eff.wonderRoom && bsE){ bsE.wonderRoomTurns = 5; logs.push('Défense et Défense Spéciale sont échangées pendant 5 tours !'); }
  if(eff.magicRoom && bsE){
    bsE.magicRoomTurns = 5;
    [...alivePlayerCombatants(), ...aliveFoeCombatants()].forEach(c=>{ if(c.heldItem){ c.roomItem = c.heldItem; c.heldItem = null; } });
    logs.push('Les objets tenus sont neutralisés pendant 5 tours !');
  }
  if(eff.embargo){
    if(target.heldItem){ target.roomItem = target.heldItem; target.heldItem = null; }
    target.embargoTurns = 5;
    logs.push(`${target.name} ne peut plus utiliser son objet !`);
  }
  if(eff.healingWish && bsE && userSide){
    bsE.wishHeal = bsE.wishHeal || {};
    bsE.wishHeal[userSide] = true;
    user.hp = 0;
    logs.push(`${user.name} se sacrifie pour soigner son remplaçant !`);
  }
  if(eff.randomBoost){
    applyStatBoost(user, [{ stat: rand(['atk','def','spa','spd','spe']), stages: eff.randomBoost }], logs);
  }
  if(eff.psychoShift){
    if(user.status && !target.status){
      const before = user.status;
      inflictStatus(target, before, logs);
      if(target.status===before) user.status = null;
    } else fail();
  }
  if(eff.healBlock){ target.healBlock = 5; logs.push(`${target.name} ne peut plus récupérer de PV pendant 5 tours !`); }
  if(eff.luckyChant && bsE && userSide){
    bsE.luckyChant = bsE.luckyChant || { player:0, foe:0 };
    bsE.luckyChant[userSide] = 5;
    logs.push('Un air veinard protège des coups critiques pendant 5 tours !');
  }
  if(eff.powerTrick){
    user.stats = { ...user.stats, atk: user.stats.def, def: user.stats.atk };
    logs.push(`${user.name} échange son Attaque et sa Défense !`);
  }
  if(eff.abilitySet){
    if(target.ability==='Comateux' || target.ability==='Sel Purifiant') fail();
    else { target.ability = eff.abilitySet; logs.push(`Le talent de ${target.name} devient ${eff.abilitySet} !`); }
  }
  if(eff.entrainment){
    target.ability = user.ability;
    logs.push(`${target.name} acquiert le talent ${user.ability} !`);
  }
  if(eff.swapStages){
    eff.swapStages.forEach(s=>{ const tmp = user.stages[s]||0; user.stages[s] = target.stages[s]||0; target.stages[s] = tmp; });
    logs.push(`${user.name} et ${target.name} échangent leurs changements de statistiques !`);
  }
  if(eff.splitStats){
    user.stats = { ...user.stats }; target.stats = { ...target.stats };
    eff.splitStats.forEach(s=>{ const avg = Math.floor((user.stats[s]+target.stats[s])/2); user.stats[s] = avg; target.stats[s] = avg; });
    logs.push(`${user.name} et ${target.name} partagent leurs statistiques !`);
  }
  if(eff.defog && bsE){
    clearHazards('player', logs); clearHazards('foe', logs);
    [...alivePlayerCombatants(), ...aliveFoeCombatants()].forEach(c=>{ c.reflectTurns = 0; c.lightScreenTurns = 0; c.mistTurns = 0; });
    if(bsE.terrain){ bsE.terrain = null; logs.push('Le terrain de combat disparaît !'); }
  }
  if(eff.aquaRing){ user.aquaRing = true; logs.push(`${user.name} s'entoure d'un voile d'eau qui le soigne !`); }
  if(eff.magnetRise){ user.magnetRise = 5; logs.push(`${user.name} lévite grâce à l'électromagnétisme !`); }
  if(eff.wideGuard){ user.wideGuard = true; logs.push(`${user.name} protège son camp des attaques de zone !`); }
  if(eff.quickGuard){ user.quickGuard = true; logs.push(`${user.name} protège son camp des attaques prioritaires !`); }
  if(eff.telekinesis){ target.telekinesis = 3; logs.push(`${target.name} est soulevé par télékinésie : plus rien ne peut le rater !`); }
  if(eff.setType){ target.transformedTypes = [eff.setType]; logs.push(`${target.name} devient de type ${typeDisplayName(eff.setType)} !`); }
  if(eff.addType){
    const cur = target.transformedTypes || target.types;
    if(cur.includes(eff.addType)) fail();
    else { target.transformedTypes = [...cur, eff.addType]; logs.push(`${target.name} devient aussi de type ${typeDisplayName(eff.addType)} !`); }
  }
  if(eff.copyTypes){ user.transformedTypes = [...(target.transformedTypes || target.types)]; logs.push(`${user.name} prend les types de ${target.name} !`); }
  if(eff.quash || eff.afterYou){
    const q = bsE && bsE.turnQueue;
    if(q){
      const at = q.findIndex((a,i)=> i>(bsE.turnIdx||0) && a.actor===target);
      if(at>=0){
        const [act] = q.splice(at, 1);
        if(eff.quash) q.push(act); else q.splice((bsE.turnIdx||0)+1, 0, act);
        logs.push(eff.quash ? `${target.name} passera en dernier !` : `${target.name} agira juste après !`);
      } else fail();
    } else fail();
  }
  if(eff.allySwitch && bsE && bsE.isDouble){
    if(userSide==='player' && bsE.pActive2!=null){ const t = bsE.pActive; bsE.pActive = bsE.pActive2; bsE.pActive2 = t; logs.push('Les alliés échangent leur place !'); }
    else if(userSide==='foe' && bsE.fActive2!=null){ const t = bsE.fActive; bsE.fActive = bsE.fActive2; bsE.fActive2 = t; logs.push('Les alliés échangent leur place !'); }
    else fail();
  } else if(eff.allySwitch){ fail(); }
  if(eff.bestow){
    if(user.heldItem && !target.heldItem){ target.heldItem = user.heldItem; user.heldItem = null; logs.push(`${user.name} donne son objet à ${target.name} !`); } else fail();
  }
  if(eff.electrify){
    const later = bsE && bsE.turnQueue && bsE.turnQueue.some((a,i)=> i>(bsE.turnIdx||0) && a.actor===target);
    if(later){ target.electrified = true; logs.push(`La prochaine capacité de ${target.name} devient de type Électrik !`); } else fail();
  }
  if(eff.ionDeluge && bsE){ bsE.ionDeluge = true; logs.push('Une pluie de plasma transforme les capacités Normal en Électrik !'); }
  if(eff.powder){ target.powdered = true; logs.push(`${target.name} est couvert de poudre explosive !`); }
  if(eff.happyHour && bsE){ bsE.happyHour = true; logs.push('L\'argent gagné sera doublé !'); }
  if(eff.revive && bsE && userSide){
    const roster = userSide==='player' ? bsE.player : bsE.foe;
    const fallen = roster.find(c=>c.hp<=0);
    if(fallen){ fallen.hp = Math.max(1, Math.floor(fallen.maxHp/2)); fallen.status = null; logs.push(`${fallen.name} revient à la vie !`); } else fail();
  }
  if(eff.tidyUp && bsE){
    clearHazards('player', logs); clearHazards('foe', logs);
    [...alivePlayerCombatants(), ...aliveFoeCombatants()].forEach(c=>{ c.substitute = 0; });
  }
  if(eff.dragonCheer && userSide){
    const mates = (userSide==='player' ? alivePlayerCombatants() : aliveFoeCombatants()).filter(c=>c!==user);
    if(mates.length){ mates[0].critBoost = true; logs.push(`${mates[0].name} est galvanisé et vise les points faibles !`); } else fail();
  }
  if(eff.healTarget) healPercent(target, eff.healTarget, logs);
  if(eff.mimic){
    const known = user.moves || user.moveObjs || [];
    const slot = known.indexOf(move);
    if(target.lastMoveUsed && slot!==-1){
      known[slot] = target.lastMoveUsed;
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
      user.punishOnContact = !!move.punishContact;
      user.protectPunish = eff.protectPunish || null;
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
  if(eff.teamProtect && battleState){
    const loc = locateActiveSlot(user);
    const allies = loc && loc.side==='player' ? alivePlayerCombatants() : aliveFoeCombatants();
    allies.forEach(c=>{ c.protected = true; });
    logs.push(`${user.name} protège son équipe des attaques ce tour-ci !`);
  }
  if(eff.invertStages){
    Object.keys(target.stages).forEach(k=>{ target.stages[k] = -target.stages[k]; });
    logs.push(`Les changements de statistiques de ${target.name} sont inversés !`);
  }
  if(eff.terrain && battleState){
    battleState.terrain = { type: eff.terrain, turns: 5 };
    logs.push(`${TERRAIN_LABEL[eff.terrain]} s'installe sur le terrain !`);
  }
  if(eff.trapField && battleState){
    [...alivePlayerCombatants(), ...aliveFoeCombatants()].forEach(c=>{ c.trapped = true; });
    logs.push("Personne ne peut plus fuir le combat !");
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
    if(target.ability==='Voile Aromatique'){
      logs.push(`${target.name} est protégé par Voile Aromatique !`);
    } else if(target.heldItem==='herbeMental' && !target.itemUsed){
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
  if(eff.speedSwap){
    const tmp = user.stages.spe;
    user.stages.spe = target.stages.spe;
    target.stages.spe = tmp;
    logs.push(`${user.name} échange sa Vitesse avec celle de ${target.name} !`);
  }
  if(eff.strengthSap){
    const healAmt = Math.max(1, Math.round(target.stats.atk * statMultiplier(target.stages.atk)));
    const before = user.hp;
    user.hp = Math.min(user.maxHp, user.hp + healAmt);
    applyStatBoost(target, [{stat:'atk',stages:-1}], logs);
    logs.push(`${user.name} récupère ${user.hp-before} PV en absorbant la force de ${target.name} !`);
  }
  if(eff.purifyFoe){
    if(target.status){
      logs.push(`${target.name} est guéri de son altération de statut !`);
      target.status = null;
      target.sleepCounter = 0;
      healPercent(user, 0.5, logs);
    } else {
      logs.push("Ça n'a aucun effet, la cible n'a aucune altération de statut.");
    }
  }
  if(eff.instruct){
    if(target.lastMoveUsed){
      target.forcedMove = target.lastMoveUsed;
      logs.push(`${target.name} devra réutiliser ${target.lastMoveUsed.name} !`);
    } else {
      logs.push("Ça ne marche pas, la cible n'a encore rien utilisé !");
    }
  }
}
// Dégâts/soins appliqués en fin de tour : poison, brûlure, dégâts de météo (sable/grêle), talents
// météo (Force Soleil, Peau Sèche, Cuvette), Reste tenu, Mue (guérison auto), Turbo (boost Vitesse).
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
  if(battler.nightmare){
    if(battler.status==='sommeil'){
      const dmg = Math.max(1, Math.round(battler.maxHp/4));
      battler.hp = Math.max(0, battler.hp-dmg);
      logs.push(`${battler.name} est tourmenté par son cauchemar (${dmg} dégâts).`);
    } else {
      battler.nightmare = false;
    }
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
