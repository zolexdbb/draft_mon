/* ==== combat/dynamax.js ==== */
// Dynamax une seule fois par combat, côté joueur uniquement (même principe que les Capacités Z).
// Pendant 3 tours, chaque capacité offensive (phys/spec) choisie devient une Capacité Max du même
// type/catégorie, avec une puissance boostée selon la table officielle. Les capacités de statut ne
// sont pas converties (même simplification que les Capacités Z de statut).
const MAX_MOVE_BY_TYPE = {
  normal:   { name:'Ultimatteraque',      desc:"Une attaque colossale libérée par la puissance Dynamax." },
  combat:   { name:'Ultimapoing',         desc:"Un poing titanesque libéré par la puissance Dynamax." },
  vol:      { name:'Ultimenvol',          desc:"Une bourrasque géante libérée par la puissance Dynamax." },
  poison:   { name:'Ultimeffluve',        desc:"Une vague toxique libérée par la puissance Dynamax." },
  sol:      { name:'Ultimonde',           desc:"Un séisme titanesque libéré par la puissance Dynamax." },
  roche:    { name:'Ultimassif',          desc:"Un éboulement colossal libéré par la puissance Dynamax." },
  insecte:  { name:'Ultimessaim',         desc:"Un nuage grouillant libéré par la puissance Dynamax." },
  fantome:  { name:'Ultimocculte',        desc:"Une terreur spectrale libérée par la puissance Dynamax." },
  acier:    { name:'Ultimétal',           desc:"Un impact d'acier libéré par la puissance Dynamax." },
  feu:      { name:'Ultimbrasier',        desc:"Un brasier titanesque libéré par la puissance Dynamax." },
  eau:      { name:'Ultimarée',           desc:"Un raz-de-marée libéré par la puissance Dynamax." },
  plante:   { name:'Ultimflore',          desc:"Une déferlante végétale libérée par la puissance Dynamax." },
  electrik: { name:'Ultimclair',          desc:"Un déluge électrique libéré par la puissance Dynamax." },
  psy:      { name:'Ultimesprit',         desc:"Une onde psychique dévastatrice libérée par la puissance Dynamax." },
  glace:    { name:'Ultimgel',            desc:"Un blizzard titanesque libéré par la puissance Dynamax." },
  dragon:   { name:'Ultimraptor',         desc:"Une furie draconique libérée par la puissance Dynamax." },
  tenebres: { name:'Ultimombre',          desc:"Une vague ténébreuse libérée par la puissance Dynamax." },
  fee:      { name:'Ultimastral',         desc:"Un éclat féérique libéré par la puissance Dynamax." }
};
// Table officielle de conversion puissance capacité de base -> puissance Capacité Max.
function maxMovePower(basePower){
  const p = basePower || 0;
  if(p>=115) return 150;
  if(p>=105) return 140;
  if(p>=75) return 130;
  if(p>=65) return 120;
  if(p>=55) return 110;
  if(p>=45) return 100;
  return 90;
}
// Lignées Gigamax-éligibles : nom/description officiels, et pour certaines un effet bonus codé
// (appliqué directement sur la Capacité Max construite, en réutilisant les flags déjà existants).
const GIGAMAX_LINES = {
  ouistempo:   { name:'G-Max Décibelle',       desc:"Fait vibrer le sol au rythme d'un tambour géant.", fixedPower:130 },
  flambino:    { name:'G-Max Foudre-Boulet',   desc:"Projette une boule de feu titanesque.", fixedPower:130 },
  larmeleon:   { name:'G-Max Hydro-Sniper',    desc:"Tire un jet d'eau d'une précision chirurgicale.", fixedPower:130 },
  minisange:   { name:'G-Max Chaos Acier',     desc:"Projette des éclats d'acier tranchants.", secondaryBoost:{stat:'def',stages:-1,chance:1} },
  khelocrok:   { name:'G-Max Écueil',          desc:"Fait surgir des récifs de pierre acérés.", secondaryBoost:{stat:'spd',stages:-1,chance:1} },
  charibari:   { name:'G-Max Déferlante Acier',desc:"Charge dans une armure d'acier écrasante.", secondaryBoost:{stat:'def',stages:-1,chance:1} },
  duralugon:   { name:'G-Max Rayon Laser',     desc:"Tire un rayon laser depuis son cou d'acier.", secondaryBoost:{stat:'spe',stages:-1,chance:1} },
  charbi:      { name:'G-Max Magma',           desc:"Déchaîne un torrent de lave et de cendres.", gigaWeather:'sable' },
  toxizap:     { name:'G-Max Choc Statique',   desc:"Diffuse des ondes toxiques crépitantes.", secondaryStatus:{status:'poison',chance:1} },
  grillepattes:{ name:'G-Max Infernaux',       desc:"Encercle la cible de flammes ardentes.", trap:true },
  grimalin:    { name:'G-Max Ténèbres',        desc:"Plonge la cible dans un sommeil irrésistible.", gigaYawn:true },
  bulbasaur:   { name:'G-Max Rugissement Vert',desc:"Absorbe l'énergie vitale de la cible.", fixedPower:120 },
  charmander:  { name:'G-Max Incendie',        desc:"Embrase durablement le terrain autour de la cible.", fixedPower:120 },
  squirtle:    { name:'G-Max Canon-Rafale',    desc:"Déclenche un déluge d'eau ininterrompu.", fixedPower:120 },
  snorlax:     { name:'G-Max Câlin Collant',   desc:"Étreint la cible avec une force colossale.", secondaryBoost:{stat:'spe',stages:-1,chance:1} },
  gastly:      { name:'G-Max Épouvante',       desc:"Plonge la cible dans une terreur profonde.", secondaryBoost:{stat:'atk',stages:-1,chance:1} }
};
function canDynamax(p, bs){
  if(!p || !bs || bs.dynamaxUsed) return false;
  return (p.moves||[]).some((m,i)=> m && (m.cat==='phys'||m.cat==='spec') && p.ppCur[i]>0);
}
function buildMaxMove(baseMove, user, bs, target){
  const maxData = MAX_MOVE_BY_TYPE[baseMove.type] || { name:`${baseMove.name} Max`, desc:"Une capacité surboostée par la puissance Dynamax." };
  const mv = { ...baseMove };
  delete mv.secondaryStatus; delete mv.secondaryBoost; delete mv.secondarySelfBoost;
  delete mv.drain; delete mv.recoil; delete mv.multiHit; delete mv.flinch; delete mv.ohko;
  delete mv.trap; delete mv.trapDamage; delete mv.charge; delete mv.sunSkip; delete mv.chargeMsg;
  mv.power = maxMovePower(baseMove.power);
  mv.name = maxData.name;
  mv.desc = maxData.desc;
  mv.isMaxMove = true;
  const gmax = GIGAMAX_LINES[user.lineId];
  if(gmax && user.heldItem==='facteurGigamax' && baseMove.type===(user.transformedTypes||user.types)[0]){
    mv.name = gmax.name;
    mv.desc = gmax.desc;
    if(gmax.fixedPower) mv.power = gmax.fixedPower;
    if(gmax.secondaryBoost) mv.secondaryBoost = gmax.secondaryBoost;
    if(gmax.secondaryStatus) mv.secondaryStatus = gmax.secondaryStatus;
    if(gmax.trap) mv.trap = true;
    if(gmax.gigaWeather && bs) bs.weather = { type: gmax.gigaWeather, turns: 5 };
    if(gmax.gigaYawn && bs && target){
      bs.pendingYawn = (bs.pendingYawn || []).filter(p=>p.target!==target);
      bs.pendingYawn.push({ target, turnsLeft: 1 });
    }
  }
  return mv;
}
// Met à l'échelle PV actuels et PV max ensemble (déclenchement du Dynamax) ; opération atomique
// pour éviter toute dérive avec les nombreux effets basés sur un pourcentage de maxHp.
function applyDynamaxBoost(c){
  if(c.dynamaxHpBoosted) return;
  c.maxHp = Math.round(c.maxHp * 1.5);
  c.hp = Math.round(c.hp * 1.5);
  c.dynamaxHpBoosted = true;
}
function revertDynamaxBoost(c){
  if(!c.dynamaxHpBoosted) return;
  const newMaxHp = Math.round(c.maxHp / 1.5);
  c.hp = Math.min(newMaxHp, Math.round(c.hp / 1.5));
  c.maxHp = newMaxHp;
  c.dynamaxHpBoosted = false;
}
