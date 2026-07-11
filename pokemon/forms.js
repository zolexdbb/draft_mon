/* ==== pokemon/forms.js (généré depuis index.html) ==== */
const ZARBI_FORMS = ['201','201-b','201-c','201-d','201-e','201-f','201-g','201-h','201-i','201-j','201-k','201-l','201-m','201-n','201-o','201-p','201-q','201-r','201-s','201-t','201-u','201-v','201-w','201-x','201-y','201-z','201-exclamation','201-question'];
function pickRandomZarbiForm(){ return ZARBI_FORMS[Math.floor(Math.random()*ZARBI_FORMS.length)]; }
const SPRITE_SOURCES = {
  front: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/${id}.png`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  ],
  back: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/back/${id}.png`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
  ]
};
const ANIMATED_SPRITE_SOURCES = {
  front: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
  ],
  back: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`
  ]
};
const SPRITE_MAX_ATTEMPTS = 8;
const SPRITE_RETRY_DELAYS = [300, 600, 1200, 2000, 3000, 4000, 5000];
// Sprites des formes alternatives (objets de forme) : PokeAPI leur donne un identifiant numérique
// interne dédié (10000+), distinct du numéro de Pokédex national, vérifié via l'API PokeAPI elle-même.
// Les 16 Plaques d'Arceus n'ont PAS de sprite distinct dans PokeAPI (aucune "forme" séparée n'existe
// pour elles, seul le type change) : elles retombent donc sur le sprite de base d'Arceus.
const FORM_SPRITE_IDS = {
  'Giratina (Origine)':10007,
  'Shaymin (Ciel)':10006,
  'Motisma Chauffe':10008, 'Motisma Lavage':10009, 'Motisma Frigo':10010,
  'Motisma Ventilateur':10011, 'Motisma Tondeuse':10012,
  'Boréas (Totémique)':10019, 'Fulguris (Totémique)':10020, 'Démétéros (Totémique)':10021
};
function getSpriteSourceList(facing, animated){
  return animated ? [...ANIMATED_SPRITE_SOURCES[facing], ...SPRITE_SOURCES[facing]] : SPRITE_SOURCES[facing];
}
function getSpriteHTML(name, unownForm, facing, animated){
  facing = facing==='back' ? 'back' : 'front';
  let id;
  if(name==='Zarbi'){
    id = unownForm || pickRandomZarbiForm();
  } else if(FORM_SPRITE_IDS[name]){
    id = FORM_SPRITE_IDS[name];
  } else if(name.startsWith('Arceus (')){
    id = DEX_NUMBERS['Arceus'];
  } else {
    id = DEX_NUMBERS[name];
    if(!id) return `<span class="sprite-fallback">?</span>`;
  }
  const sources = getSpriteSourceList(facing, !!animated);
  const url = sources[0](id);
  return `<img src="${url}" alt="${name}" data-sprite-id="${id}" data-sprite-facing="${facing}" data-sprite-animated="${animated ? '1' : '0'}" style="width:100%;height:100%;object-fit:contain;image-rendering:pixelated;" onerror="handleSpriteError(this)">`;
}
function handleSpriteError(img){
  const id = img.dataset.spriteId;
  const facing = img.dataset.spriteFacing==='back' ? 'back' : 'front';
  const animated = img.dataset.spriteAnimated === '1';
  const sources = getSpriteSourceList(facing, animated);
  const attempt = parseInt(img.dataset.spriteAttempt || '0', 10) + 1;
  img.dataset.spriteAttempt = String(attempt);
  if(!id || attempt >= SPRITE_MAX_ATTEMPTS){
    const span = document.createElement('span');
    span.textContent = '?';
    span.className = 'sprite-fallback';
    span.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
    img.replaceWith(span);
    return;
  }
  const source = sources[attempt % sources.length];
  const delay = SPRITE_RETRY_DELAYS[Math.min(attempt-1, SPRITE_RETRY_DELAYS.length-1)];
  setTimeout(()=>{ if(img.isConnected) img.src = source(id); }, delay);
}

/* =================== DESCRIPTIONS DES TALENTS =================== */
