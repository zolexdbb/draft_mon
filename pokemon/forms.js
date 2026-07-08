/* ==== pokemon/forms.js (généré depuis index.html) ==== */
const ZARBI_FORMS = ['201','201-b','201-c','201-d','201-e','201-f','201-g','201-h','201-i','201-j','201-k','201-l','201-m','201-n','201-o','201-p','201-q','201-r','201-s','201-t','201-u','201-v','201-w','201-x','201-y','201-z','201-exclamation','201-question'];
function pickRandomZarbiForm(){ return ZARBI_FORMS[Math.floor(Math.random()*ZARBI_FORMS.length)]; }
function getSpriteHTML(name, unownForm){
  if(name==='Zarbi'){
    const id = unownForm || pickRandomZarbiForm();
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return `<img src="${url}" alt="${name}" style="width:100%;height:100%;object-fit:contain;image-rendering:pixelated;" onerror="handleSpriteError(this)">`;
  }
  const id = DEX_NUMBERS[name];
  if(!id) return `<span class="sprite-fallback">?</span>`;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return `<img src="${url}" alt="${name}" style="width:100%;height:100%;object-fit:contain;image-rendering:pixelated;" onerror="handleSpriteError(this)">`;
}
function handleSpriteError(img){
  const span = document.createElement('span');
  span.textContent = '?';
  span.className = 'sprite-fallback';
  span.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
  img.replaceWith(span);
}

/* =================== DESCRIPTIONS DES TALENTS =================== */
