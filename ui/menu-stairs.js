/* ==== Animation de l'accueil : le dresseur reste à la même place à l'écran (la « caméra » suit son
   bassin), c'est donc l'escalier qui défile en diagonale. La marche est simulée dans le repère de
   l'escalier : un pied posé reste collé à sa marche (aucun glissement), le pied levé monte au-dessus du
   rebord de la marche suivante puis se pose 2 marches plus haut. Un cycle = 2 marches (un pas par jambe),
   ~55 % d'appui / 45 % de balancement, donc un court double appui à chaque pas. ==== */
(function initMenuStairsAnimation(){
  const svg = document.querySelector('.menu-illustration svg');
  if(!svg) return;
  const $ = id => document.getElementById(id);
  const STEP_X = 50, STEP_Y = 36;
  const STEP_TIME = 0.62;
  const LEAN = 14;
  const STANCE = 0.55;
  const HIP = { x:194, y:104 };
  // Jambes longues et presque tendues en fin d'appui : la jambe se balance d'avant en arrière comme
  // un balancier (pas de genou levé qui « pédale »). LAND = cheville à l'attaque du pas, relative au bassin.
  const THIGH = 40, SHIN = 40;
  const LAND = { x:26, y:34 };
  const LIFT = 38;
  const CAM = { x: HIP.x + LAND.x - 25, y: HIP.y + LAND.y - 260 };

  let body = 'M-200 500', risers = '', treads = '';
  for(let k=-4; k<=9; k++){
    const x = STEP_X*k, y = 264 - STEP_Y*k;
    body += `L${x} ${y}L${x+STEP_X} ${y}`;
    treads += `M${x} ${y}H${x+STEP_X}`;
    risers += `M${x+STEP_X} ${y}V${y-STEP_Y}`;
  }
  body += `L${STEP_X*10} 500Z`;
  $('menuStairBody').setAttribute('d', body);
  $('menuStairRisers').setAttribute('d', risers);
  $('menuStairTreads').setAttribute('d', treads);

  const scroll = $('menuStairScroll');
  const legA = $('menuLegA'), legB = $('menuLegB');
  const shoeA = $('menuShoeA'), shoeB = $('menuShoeB');
  const bodyEl = $('menuBody');
  const armBack = $('menuArmBack'), armFront = $('menuArmFront');
  const chestEl = $('menuChest'), chestFrontEl = $('menuChestFront'), headEl = $('menuHead');
  const smooth = u => u*u*(3-2*u);

  // Cheville d'une jambe (cycle φ dans [0,1[) : position relative au bassin, en coordonnées écran.
  function foot(phi){
    let wx = LAND.x, wy = LAND.y, tilt = 0;
    if(phi >= STANCE){
      const u = (phi - STANCE) / (1 - STANCE);
      // Le pied avance en ligne droite parallèle à la pente de l'escalier (donc en va-et-vient par rapport
      // au bassin) ; seul un léger soulèvement en arc lui fait franchir le nez des marches.
      const p = smooth(u);
      const lift = LIFT*Math.pow(Math.sin(Math.PI*u), 0.7);
      wx = LAND.x + 2*STEP_X*p;
      wy = LAND.y - 2*STEP_Y*p - lift;
      tilt = -12*Math.sin(Math.PI*u);
    }
    return { x: HIP.x + wx - 2*STEP_X*phi, y: HIP.y + wy + 2*STEP_Y*phi, tilt };
  }
  // Jambe à deux segments, genou plié vers l'avant (droite/haut).
  function legPath(hip, ankle){
    const dx = ankle.x-hip.x, dy = ankle.y-hip.y;
    const d = Math.min(Math.hypot(dx,dy), THIGH+SHIN-0.4);
    const a = (THIGH*THIGH - SHIN*SHIN + d*d) / (2*d);
    const h = Math.sqrt(Math.max(THIGH*THIGH - a*a, 0));
    const ux = dx/d, uy = dy/d;
    const knee = { x: hip.x + ux*a + uy*h, y: hip.y + uy*a - ux*h };
    return `M${hip.x.toFixed(1)} ${hip.y.toFixed(1)}L${knee.x.toFixed(1)} ${knee.y.toFixed(1)}L${ankle.x.toFixed(1)} ${ankle.y.toFixed(1)}`;
  }
  function arm(shoulder, a){
    const e = { x: shoulder.x + 13*Math.sin(a), y: shoulder.y + 13*Math.cos(a) };
    const b = a + 0.45;
    const w = { x: e.x + 13*Math.sin(b), y: e.y + 13*Math.cos(b) };
    return `M${shoulder.x.toFixed(1)} ${shoulder.y.toFixed(1)}L${e.x.toFixed(1)} ${e.y.toFixed(1)}L${w.x.toFixed(1)} ${w.y.toFixed(1)}`;
  }
  function placeShoe(el, f){
    el.setAttribute('x', (f.x-7).toFixed(1));
    el.setAttribute('y', f.y.toFixed(1));
    el.setAttribute('transform', `rotate(${f.tilt.toFixed(1)} ${f.x.toFixed(1)} ${(f.y+2).toFixed(1)})`);
  }
  const mod = (v, m) => ((v % m) + m) % m;

  function frame(t){
    const s = t / STEP_TIME;
    const sf = mod(s, 1);
    scroll.setAttribute('transform', `translate(${(CAM.x - STEP_X*sf).toFixed(2)} ${(CAM.y + STEP_Y*sf).toFixed(2)})`);

    const bob = -4*Math.sin(Math.PI*mod(s-0.1, 1));
    const hip = { x:HIP.x, y:HIP.y + bob };
    const fa = foot(mod(s/2, 1));
    const fb = foot(mod((s-1)/2, 1));
    legA.setAttribute('d', legPath(hip, fa));
    legB.setAttribute('d', legPath(hip, fb));
    placeShoe(shoeA, fa);
    placeShoe(shoeB, fb);

    // Haut du corps vivant : le buste se penche un peu plus à la poussée de chaque pas, les épaules
    // tournent légèrement en contre-mouvement, la tête reste plus droite (regard devant) et hoche à chaque pas.
    const swing = Math.sin(Math.PI*s);
    const leanNow = LEAN + 3*Math.sin(Math.PI*s + 0.9);
    const twist = 3.5*Math.sin(Math.PI*s + 0.4);
    const nod = 2.5*Math.sin(2*Math.PI*s + 1.2);
    const headLag = 1.2*Math.sin(2*Math.PI*s + 0.8);
    bodyEl.setAttribute('transform', `translate(0 ${bob.toFixed(2)}) rotate(${leanNow.toFixed(2)} ${HIP.x} ${HIP.y})`);
    const chestT = `rotate(${twist.toFixed(2)} 196 88)`;
    chestEl.setAttribute('transform', chestT);
    chestFrontEl.setAttribute('transform', chestT);
    headEl.setAttribute('transform', `translate(0 ${headLag.toFixed(2)}) rotate(${(-0.55*leanNow + nod).toFixed(2)} 201 64)`);
    // Bras en opposition aux jambes, grande amplitude (l'un jeté loin derrière, l'autre tendu devant) ;
    // les angles sont relatifs au buste penché, d'où la soustraction de l'inclinaison.
    const armBase = 0.1 - (leanNow + twist) * Math.PI / 180;
    armFront.setAttribute('d', arm({ x:201, y:72 }, armBase + 1.05*swing));
    armBack.setAttribute('d', arm({ x:199, y:72 }, armBase - 1.05*swing));
  }

  frame(0);
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let start = null;
  function loop(now){
    if(start===null) start = now;
    if(svg.getClientRects().length > 0) frame((now-start)/1000);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
