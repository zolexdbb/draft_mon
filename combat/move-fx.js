/* ==== Animations visuelles jouées en combat quand une capacité est utilisée (icône de type qui
   file vers la cible + éclat d'impact). TYPE_COLOR, TYPE_ICON_PATH et svgIcon() viennent de
   core/type-chart.js. Point d'entrée : playMoveFx(), appelé depuis combat/battle-flow.js. ==== */
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
function playMoveFx(move, actorIsPlayer){
  if(!move || (move.cat!=='phys' && move.cat!=='spec')) return;
  const field = document.querySelector('.vsfield');
  const attackerSprite = document.getElementById(actorIsPlayer ? 'playerSprite' : 'foeSprite');
  const defenderSprite = document.getElementById(actorIsPlayer ? 'foeSprite' : 'playerSprite');
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
