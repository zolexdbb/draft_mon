/* ==== Animations visuelles jouées en combat. TYPE_COLOR, TYPE_ICON_PATH et svgIcon() viennent de
   core/type-chart.js. Repères :
   - playMoveFx() : icône de type qui file vers la cible + éclat d'impact, à chaque capacité (appelé
     depuis combat/battle-flow.js, avec les préfixes de sprite réels de l'attaquant/du défenseur —
     voir boxIdFor — pour viser le bon combattant même en combat double, slot A ou B)
   - playDynamaxFx/playTeraFx/playZMoveFx/playMegaRevealFx : effet joué une fois à l'activation de
     chaque mécanique (Dynamax/Téracristal/Capacité Z/Méga), inspiré des animations de Pokémon
     Showdown — pulsation + particules autour du sprite plutôt qu'un vrai portage de leur moteur
     (basé sur leur propre canvas, non réutilisable tel quel dans ce rendu en DOM/CSS). ==== */
// Centre d'un sprite en coordonnées relatives à .vsfield, pour positionner un effet dessus. `prefix` est
// 'player'/'player2'/'foe'/'foe2' (voir boxIdFor dans combat/battle-flow.js pour le déduire d'un combattant).
function spriteCenter(prefix){
  const field = document.querySelector('.vsfield');
  const sprite = document.getElementById(prefix+'Sprite');
  if(!field || !sprite) return null;
  const fieldRect = field.getBoundingClientRect();
  const sRect = sprite.getBoundingClientRect();
  return { field, x: sRect.left + sRect.width/2 - fieldRect.left, y: sRect.top + sRect.height/2 - fieldRect.top };
}
// Fait pulser brièvement le sprite lui-même avec une classe d'animation CSS (retire/réapplique pour rejouer même si déjà présente).
function pulseSprite(prefix, cls){
  const sprite = document.getElementById(prefix+'Sprite');
  if(!sprite) return;
  sprite.classList.remove(cls); void sprite.offsetWidth; sprite.classList.add(cls);
  setTimeout(()=> sprite.classList.remove(cls), 1200);
}
// Anneau(x) d'énergie qui s'étendent depuis le centre d'un sprite.
function spawnFxRings(field, x, y, color, count, delayStep){
  for(let i=0;i<count;i++){
    const ring = document.createElement('div');
    ring.className = 'mecha-fx-ring';
    ring.style.left = x+'px'; ring.style.top = y+'px';
    ring.style.setProperty('--fx-color', color);
    ring.style.animationDelay = (i*delayStep)+'ms';
    field.appendChild(ring);
    setTimeout(()=> ring.remove(), 1000 + i*delayStep);
  }
}
// Déclenche l'activation du Dynamax (Pokémon grandit, aura rouge pulsée + anneaux qui s'étendent).
function playDynamaxFx(prefix){
  const c = spriteCenter(prefix);
  pulseSprite(prefix, 'dynamax-grow');
  if(!c) return;
  spawnFxRings(c.field, c.x, c.y, '#ff2f5e', 2, 150);
  flashScreen('custom', 'rgba(255,50,90,.28)');
}
// Déclenche la Téracristallisation (éclat brillant + éclats de cristal colorés du Type Tera qui explosent autour du sprite).
function playTeraFx(prefix, teraType){
  const c = spriteCenter(prefix);
  pulseSprite(prefix, 'tera-shine');
  if(!c) return;
  const color = TYPE_COLOR[teraType] || '#8fd8ff';
  for(let i=0;i<10;i++){
    const angle = Math.PI*2*i/10 + (Math.random()*0.3-0.15);
    const dist = 40 + Math.random()*30;
    const shard = document.createElement('div');
    shard.className = 'mecha-fx-shard';
    shard.style.left = c.x+'px'; shard.style.top = c.y+'px';
    shard.style.setProperty('--fx-color', color);
    shard.style.setProperty('--px', (Math.cos(angle)*dist).toFixed(1)+'px');
    shard.style.setProperty('--py', (Math.sin(angle)*dist).toFixed(1)+'px');
    shard.style.animationDelay = Math.floor(Math.random()*80)+'ms';
    c.field.appendChild(shard);
    setTimeout(()=> shard.remove(), 950);
  }
  flashScreen('custom', color+'44');
}
// Déclenche l'usage d'une Capacité Z (grand halo lumineux de la couleur du type, plus flashy qu'un coup normal).
function playZMoveFx(prefix, moveType){
  const c = spriteCenter(prefix);
  const color = TYPE_COLOR[moveType] || '#ffe27a';
  if(c){
    const beam = document.createElement('div');
    beam.className = 'zmove-beam';
    beam.style.left = c.x+'px'; beam.style.top = c.y+'px';
    beam.style.width = beam.style.height = '260px';
    beam.style.setProperty('--fx-color', color);
    c.field.appendChild(beam);
    setTimeout(()=> beam.remove(), 600);
  }
  flashScreen('custom', color+'55');
}
// Déclenche la Méga-Évolution (sprite qui brille + anneau doré + pluie d'étincelles autour de lui,
// plus un flash d'écran doré) — jouée au moment de l'activation (voir activateMegaEvolve, appelé
// depuis playerAttack dans battle-flow.js), le même instant où le nom/les stats changent.
function playMegaEvolveFx(prefix){
  const c = spriteCenter(prefix);
  pulseSprite(prefix, 'tera-shine');
  if(!c) return;
  spawnFxRings(c.field, c.x, c.y, '#ffcf4d', 2, 120);
  for(let i=0;i<10;i++){
    const angle = Math.PI*2*i/10;
    const dist = 30 + Math.random()*26;
    const sp = document.createElement('div');
    sp.className = 'mega-sparkle';
    sp.style.left = c.x+'px'; sp.style.top = c.y+'px';
    sp.style.setProperty('--px', (Math.cos(angle)*dist).toFixed(1)+'px');
    sp.style.setProperty('--py', (Math.sin(angle)*dist).toFixed(1)+'px');
    sp.style.animationDelay = Math.floor(Math.random()*150)+'ms';
    c.field.appendChild(sp);
    setTimeout(()=> sp.remove(), 1300);
  }
  flashScreen('custom', 'rgba(255,207,77,.3)');
}
// Crée un élément DOM d'effet (icône de type ou particule) positionné à x,y dans le terrain de combat.
function spawnIcon(field, cls, x, y, color, svgHtml){
  const el = document.createElement('div');
  el.className = cls;
  el.style.left = x+'px';
  el.style.top = y+'px';
  el.style.setProperty('--fx-color', color);
  el.style.color = color;
  el.innerHTML = svgHtml;
  field.appendChild(el);
  return el;
}

// Anneau + particules qui explosent au point d'impact d'un coup.
function spawnBurst(field, x, y, color){
  const ring = document.createElement('div');
  ring.className = 'move-fx-ring';
  ring.style.left = x+'px'; ring.style.top = y+'px';
  ring.style.setProperty('--fx-color', color);
  field.appendChild(ring);
  setTimeout(()=> ring.remove(), 500);
  for(let i=0;i<6;i++){
    const angle = Math.PI*2*i/6 + (Math.random()*0.5-0.25);
    const dist = 24 + Math.random()*20;
    const p = document.createElement('div');
    p.className = 'move-fx-particle';
    p.style.left = x+'px'; p.style.top = y+'px';
    p.style.setProperty('--fx-color', color);
    p.style.setProperty('--px', (Math.cos(angle)*dist).toFixed(1)+'px');
    p.style.setProperty('--py', (Math.sin(angle)*dist).toFixed(1)+'px');
    p.style.animationDelay = Math.floor(Math.random()*40)+'ms';
    field.appendChild(p);
    setTimeout(()=> p.remove(), 550);
  }
}

// Point d'entrée : joue l'animation d'une capacité (projectile pour une capacité spéciale, impact direct pour une physique) depuis l'attaquant vers le défenseur.
function playMoveFx(move, attackerPrefix, defenderPrefix){
  if(!move || (move.cat!=='phys' && move.cat!=='spec')) return;
  const field = document.querySelector('.vsfield');
  const attackerSprite = document.getElementById(attackerPrefix+'Sprite');
  const defenderSprite = document.getElementById(defenderPrefix+'Sprite');
  if(!field || !attackerSprite || !defenderSprite) return;

  const color = TYPE_COLOR[move.type] || '#e8e0f0';
  const svgHtml = svgIcon(move.type);
  const fieldRect = field.getBoundingClientRect();
  const aRect = attackerSprite.getBoundingClientRect();
  const dRect = defenderSprite.getBoundingClientRect();
  const ax = aRect.left + aRect.width/2 - fieldRect.left;
  const ay = aRect.top + aRect.height/2 - fieldRect.top;
  const dx = dRect.left + dRect.width/2 - fieldRect.left;
  const dy = dRect.top + dRect.height/2 - fieldRect.top;

  if(move.cat==='spec'){
    const proj = spawnIcon(field, 'move-fx-icon fx-projectile', ax, ay, color, svgHtml);
    proj.style.setProperty('--fx-dx', (dx-ax)+'px');
    proj.style.setProperty('--fx-dy', (dy-ay)+'px');
    [0.3,0.55,0.8].forEach(frac=>{
      setTimeout(()=>{
        const trail = spawnIcon(field, 'move-fx-trail', ax+(dx-ax)*frac, ay+(dy-ay)*frac, color, svgHtml);
        setTimeout(()=> trail.remove(), 350);
      }, 400*frac);
    });
    setTimeout(()=>{
      proj.remove();
      spawnBurst(field, dx, dy, color);
    }, 400);
  } else {
    const impact = spawnIcon(field, 'move-fx-icon fx-impact', dx, dy, color, svgHtml);
    setTimeout(()=>{
      impact.remove();
      spawnBurst(field, dx, dy, color);
    }, 300);
  }
}
