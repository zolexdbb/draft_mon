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
// Source animée unique pour TOUS les Pokémon (Gen 1 à 6, formes 10000+ incluses) : sprites
// Showdown, indexés par le même identifiant que les sprites statiques. Pour la Gen 1-5, ce sont
// littéralement les mêmes sprites officiels Noir & Blanc (Showdown les reprend tels quels) ; pour
// la Gen 6 (jamais dotée de sprite 2D officiel, jeux passés en modèles 3D dès X/Y), ce sont des
// recréations communautaires dans le même style pixel-art, pour une apparence unifiée sur tout le Pokédex.
const ANIMATED_SPRITE_SOURCES = {
  front: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/showdown/${id}.gif`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`
  ],
  back: [
    id => `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/showdown/back/${id}.gif`,
    id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${id}.gif`
  ]
};
// Repli secondaire (redondance de disponibilité uniquement, même famille visuelle pour la Gen 1-5) :
// sprites animés Noir & Blanc officiels. Absents pour la Gen 6 / formes 10000+, sans conséquence
// puisque la source Showdown ci-dessus les couvre déjà en premier.
const ANIMATED_SPRITE_SOURCES_FALLBACK = {
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
  'Boréas (Totémique)':10019, 'Fulguris (Totémique)':10020, 'Démétéros (Totémique)':10021,
  'Méga-Florizarre':10033, 'Méga-Dracaufeu X':10034, 'Méga-Dracaufeu Y':10035, 'Méga-Tortank':10036,
  'Méga-Kangourex':10039, 'Méga-Léviator':10041, 'Méga-Mewtwo Y':10044, 'Méga-Cizayox':10046,
  'Méga-Gardevoir':10051, 'Méga-Carchacrok':10061, 'Méga-Lucario':10062, 'Méga-Métalosse':10076
};
function getSpriteSourceList(facing, animated){
  return animated ? [...ANIMATED_SPRITE_SOURCES[facing], ...ANIMATED_SPRITE_SOURCES_FALLBACK[facing], ...SPRITE_SOURCES[facing]] : SPRITE_SOURCES[facing];
}
// Gabarits notables (plus grands ou plus petits que la moyenne) où la simple progression par
// stade d'évolution ne suffit pas à rendre l'impression de taille réelle du jeu principal.
const POKEMON_SCALE = {
  // Géants
  'Onix':1.2, 'Steelix':1.3, 'Wailord':1.4, 'Léviator':1.15, 'Méga-Léviator':1.2,
  'Lugia':1.3, 'Ho-Oh':1.3, 'Groudon':1.3, 'Kyogre':1.25, 'Rayquaza':1.35,
  'Dialga':1.25, 'Palkia':1.25, 'Giratina':1.3, 'Regigigas':1.25,
  'Regirock':1.1, 'Regice':1.1, 'Registeel':1.1, 'Arceus':1.2,
  'Reshiram':1.25, 'Zekrom':1.25, 'Kyurem':1.3, 'Ronflex':1.15,
  'Ptéra':1.1, 'Tyranocif':1.15, 'Métalosse':1.1, 'Méga-Métalosse':1.15,
  'Milobellus':1.1, 'Chartor':1.15, 'Séracrawl':1.15, 'Rexillius':1.1,
  'Volcanion':1.05, 'Zygarde':1.1, 'Xerneas':1.15, 'Yveltal':1.15,
  'Carchacrok':1.1, 'Méga-Carchacrok':1.15,
  // Minuscules
  'Flabébé':0.55, 'Floette':0.65, 'Statitik':0.5, 'Pichu':0.55,
  'Chinchidou':0.6, 'Mélo':0.6, 'Toudoudou':0.6, 'Azurill':0.55,
  'Mime Jr.':0.6, 'Zarbi':0.5, 'Natu':0.65, 'Whismur':0.65,
  'Combee':0.55, 'Cherubi':0.55, 'Budew':0.6, 'Munna':0.65,
  // Génération 6 (Kalos) — gabarits estimés d'après les tailles officielles du Pokédex.
  // Géants
  'Dragmara':1.2, 'Muplodocus':1.15, 'Pandarbare':1.1, 'Chevroum':1.05,
  'Desséliande':1.05, 'Exagide':1.05, 'Blindépique':1.05, 'Kravarech':1.05,
  'Némélios':1, 'Amphinobi':1, 'Goupelin':1, 'Sepiatroce':1, 'Bruyverne':1,
  // Minuscules
  'Marisson':0.6, 'Feunnec':0.55, 'Grenousse':0.55, 'Sapereau':0.6,
  'Passerouge':0.55, 'Lépidonille':0.5, 'Pérégrain':0.5, 'Psystigri':0.55,
  'Fluvetin':0.55, 'Sucroquin':0.55, 'Sepiatop':0.55, 'Opermine':0.55,
  'Venalgue':0.6, 'Flingouste':0.6, 'Galvaran':0.6, 'Dedenne':0.55,
  'Strassie':0.55, 'Mucuscule':0.5, 'Trousselin':0.5, 'Brocélôme':0.55,
  'Pitrouille':0.55, 'Sonistrelle':0.6, 'Diancie':0.65, 'Hoopa':0.65,
  // Intermédiaires
  'Boguérisse':0.8, 'Roussil':0.8, 'Croâporal':0.75, 'Excavarenne':0.85,
  'Braisillon':0.75, 'Flambusard':0.95, 'Prismillon':0.85, 'Hélionceau':0.75,
  'Florges':0.95, 'Cabriolaine':0.8, 'Pandespiègle':0.75, 'Couafarel':0.9,
  'Mistigrix':0.8, 'Monorpale':0.65, 'Dimoclès':0.7, 'Cocotine':0.8,
  'Cupcanaille':0.8, 'Golgopathe':0.9, 'Gamblast':0.85, 'Iguolta':0.8,
  'Ptyranidur':0.85, 'Amagara':0.8, 'Nymphali':0.85, 'Brutalibré':0.8,
  'Colimucus':0.7, 'Grelaçon':0.7, 'Banshitrouye':0.8,
};
// Repli automatique pour les espèces sans réglage manuel ci-dessus : dérivé de la hauteur réelle
// du canevas du sprite source (les GIFs Showdown/Noir&Blanc ont un canevas dimensionné
// proportionnellement à la taille du Pokémon — un Rayquaza fait ~150px de haut, un Statitik ~30px —
// mais ce signal est perdu à l'affichage car l'image est toujours étirée pour remplir sa boîte via
// object-fit:contain. On restaure la variation de taille en re-réduisant après le chargement réel
// de l'image, une fois sa hauteur native connue.
const SPRITE_NATURAL_SCALE_MIN_H = 30, SPRITE_NATURAL_SCALE_MAX_H = 150;
const SPRITE_NATURAL_SCALE_OUT_MIN = 0.5, SPRITE_NATURAL_SCALE_OUT_MAX = 1.3;
function naturalScaleFromHeight(h){
  if(!h) return 1;
  const t = Math.max(0, Math.min(1, (h - SPRITE_NATURAL_SCALE_MIN_H) / (SPRITE_NATURAL_SCALE_MAX_H - SPRITE_NATURAL_SCALE_MIN_H)));
  return SPRITE_NATURAL_SCALE_OUT_MIN + t * (SPRITE_NATURAL_SCALE_OUT_MAX - SPRITE_NATURAL_SCALE_OUT_MIN);
}
function applySpriteNaturalScale(img){
  if(POKEMON_SCALE[img.alt] !== undefined) return;
  img.style.transform = `scale(${naturalScaleFromHeight(img.naturalHeight).toFixed(2)})`;
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
  const manualScale = POKEMON_SCALE[name];
  const scaleStyle = (animated && manualScale!==undefined) ? `transform:scale(${manualScale});` : '';
  const sources = getSpriteSourceList(facing, !!animated);
  const url = sources[0](id);
  const onload = (animated && manualScale===undefined) ? ' onload="applySpriteNaturalScale(this)"' : '';
  return `<img src="${url}" alt="${name}" data-sprite-id="${id}" data-sprite-facing="${facing}" data-sprite-animated="${animated ? '1' : '0'}" style="width:100%;height:100%;object-fit:contain;image-rendering:pixelated;${scaleStyle}" onerror="handleSpriteError(this)"${onload}>`;
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
