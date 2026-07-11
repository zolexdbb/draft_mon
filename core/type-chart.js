/* ==== core/type-chart.js (généré depuis index.html) ==== */
const TYPE_EMOJI = {
  normal:'⭐',feu:'🔥',eau:'💧',plante:'🌿',electrik:'⚡',vol:'🪶',poison:'☠️',sol:'⛰️',
  insecte:'🐛',combat:'🥊',glace:'🧊',psy:'🔮',fantome:'👻',roche:'🪨',dragon:'🐲',
  acier:'⚙️',tenebres:'🌑'
};
const TYPE_COLOR = {
  normal:'#9199A1', feu:'#EE8130', eau:'#6390F0', plante:'#7AC74C', electrik:'#F7D02C',
  vol:'#A98FF3', poison:'#A33EA1', sol:'#E2BF65', insecte:'#A6B91A', combat:'#C22E28',
  glace:'#96D9D6', psy:'#F95587', fantome:'#735797', roche:'#B6A136', dragon:'#6F35FC',
  acier:'#B7B7CE', tenebres:'#5A5465'
};
function starPoints(spikes, outerR, innerR, cx, cy){
  cx = cx||12; cy = cy||12;
  const pts = [];
  const step = Math.PI / spikes;
  let rot = -Math.PI/2;
  for(let i=0;i<spikes*2;i++){
    const r = i%2===0 ? outerR : innerR;
    pts.push((cx+Math.cos(rot)*r).toFixed(2)+','+(cy+Math.sin(rot)*r).toFixed(2));
    rot += step;
  }
  return pts.join(' ');
}
const TYPE_ICON_PATH = {
  normal: `<polygon points="${starPoints(5,10,4.3)}"/>`,
  feu: `<path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>`,
  eau: `<path d="M12 2C8 7 4 11.5 4 15a8 8 0 1 0 16 0c0-3.5-4-8-8-13z"/>`,
  plante: `<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 21 3 21 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>`,
  electrik: `<path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51C12.96 17.55 11 21 11 21z"/>`,
  vol: `<path d="M2 8 Q8 4 14 8 T22 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M2 13 Q8 9 14 13 T22 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M2 18 Q8 14 14 18 T22 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  poison: `<circle cx="12" cy="13" r="7"/><circle cx="8" cy="5" r="2.4"/><circle cx="16" cy="4.5" r="1.6"/>`,
  sol: `<polygon points="12,4 20,20 4,20"/>`,
  insecte: `<polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5"/>`,
  combat: `<polygon points="${starPoints(4,10,5.6)}"/>`,
  glace: `<polygon points="${starPoints(6,10,2.4)}"/>`,
  psy: `<path d="M12 2c0 5-1 9-5 10 4 1 5 5 5 10 0-5 1-9 5-10-4-1-5-5-5-10z"/>`,
  fantome: `<path d="M12 2a7 7 0 0 0-7 7v11l2.5-2 2 2 2.5-2 2.5 2 2-2 2.5 2V9a7 7 0 0 0-7-7z"/>`,
  roche: `<polygon points="4,16 7,8 12,4 17,7 20,15 16,20 8,20"/>`,
  dragon: `<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.2" fill="rgba(255,255,255,.55)"/>`,
  acier: `<polygon points="12,2 22,12 12,22 2,12"/>`,
  tenebres: `<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/>`
};
function svgIcon(type){
  return `<svg viewBox="0 0 24 24">${TYPE_ICON_PATH[type] || TYPE_ICON_PATH.normal}</svg>`;
}
function typeIconHTML(type, size, color){
  size = size || 12;
  color = color || TYPE_COLOR[type] || '#e8e0f0';
  return `<span class="type-icon" style="width:${size}px;height:${size}px;color:${color};">${svgIcon(type)}</span>`;
}
function typeBadgeIconHTML(type, size){
  size = size || 22;
  const color = TYPE_COLOR[type] || '#666';
  return `<span class="type-badge-icon" style="width:${size}px;height:${size}px;background:${color};">${typeIconHTML(type, Math.round(size*0.62))}</span>`;
}
// Pièce grise gravée du symbole de type, pour les badges de Maître (obtenue = pleine couleur, non obtenue = grisée).
function typeCoinHTML(type, owned, size){
  size = size || 22;
  const iconColor = owned ? (TYPE_COLOR[type] || '#e8e0f0') : '#77777d';
  return `<span class="type-badge-icon" style="width:${size}px;height:${size}px;background:linear-gradient(160deg,#b9bcc4,#787c86);border:1px solid #55585f;opacity:${owned?1:.35};">${typeIconHTML(type, Math.round(size*0.62), iconColor)}</span>`;
}
function typeTagHTML(type, opts){
  opts = opts || {};
  const cls = 'type-tag t-'+type+(opts.cls ? ' '+opts.cls : '');
  const style = opts.style ? ` style="${opts.style}"` : '';
  return `<span class="${cls}"${style}>${typeIconHTML(type, opts.iconSize||11)}${type}</span>`;
}
const TYPE_CHART = {
  normal:{roche:.5,fantome:0,acier:.5},
  feu:{plante:2,glace:2,insecte:2,feu:.5,eau:.5,roche:.5,dragon:.5,acier:2},
  eau:{feu:2,sol:2,roche:2,eau:.5,plante:.5,dragon:.5},
  electrik:{eau:2,vol:2,electrik:.5,plante:.5,dragon:.5,sol:0},
  plante:{eau:2,sol:2,roche:2,feu:.5,plante:.5,vol:.5,poison:.5,insecte:.5,dragon:.5,acier:.5},
  glace:{plante:2,sol:2,vol:2,dragon:2,feu:.5,eau:.5,glace:.5,acier:.5},
  combat:{normal:2,glace:2,roche:2,poison:.5,vol:.5,psy:.5,insecte:.5,fantome:0,acier:2,tenebres:2},
  poison:{plante:2,poison:.5,sol:.5,roche:.5,fantome:.5,acier:0},
  sol:{feu:2,electrik:2,poison:2,roche:2,plante:.5,insecte:.5,vol:0,acier:2},
  vol:{plante:2,insecte:2,combat:2,electrik:.5,roche:.5,acier:.5},
  psy:{combat:2,poison:2,psy:.5,acier:.5,tenebres:0},
  insecte:{plante:2,psy:2,tenebres:2,feu:.5,combat:.5,poison:.5,vol:.5,fantome:.5,acier:.5},
  roche:{feu:2,glace:2,vol:2,insecte:2,combat:.5,sol:.5,acier:.5},
  fantome:{psy:2,fantome:2,normal:0,tenebres:.5,acier:.5},
  dragon:{dragon:2,acier:.5},
  acier:{glace:2,roche:2,feu:.5,eau:.5,electrik:.5,acier:.5},
  tenebres:{psy:2,fantome:2,combat:.5,tenebres:.5}
};
function getMult(atkType, defTypes){
  let m = 1;
  defTypes.forEach(dt=>{
    const v = (TYPE_CHART[atkType] && TYPE_CHART[atkType][dt] !== undefined) ? TYPE_CHART[atkType][dt] : 1;
    m *= v;
  });
  return m;
}

/* =================== ATTAQUES =================== */
