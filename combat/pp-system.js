/* ==== combat/pp-system.js (généré depuis index.html) ==== */
function basePP(move){
  if(!move) return 0;
  if(move.pp) return move.pp;
  const eff = move.effect || {};
  if(eff.protect || eff.endure) return 8;
  if(move.cat === 'status'){
    if(eff.heal) return 10;
    return 15;
  }
  const p = move.power || 0;
  if(p>=150) return 5;
  if(p>=120) return 8;
  if(p>=100) return 10;
  if(p>=80) return 12;
  if(p>=60) return 18;
  if(p>=40) return 25;
  return 30;
}
const STRUGGLE_MOVE = {name:'Lutte', type:'normal', cat:'phys', power:50, target:'foe', struggle:true, recoil:0.5, desc:"Attaque désespérée utilisée à sec de PP ; blesse aussi l'utilisateur."};

