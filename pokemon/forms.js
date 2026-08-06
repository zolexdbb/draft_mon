/* ==== SOMMAIRE ====
   Résolution des sprites Pokémon (statiques et animés) + formes cosmétiques aléatoires (Zarbi,
   Météno). Repères :
   - L.6-16  : Zarbi/Météno — formes purement cosmétiques, sprite tiré au hasard par membre
   - L.17-46 : Sources d'URL des sprites (statique + animé + repli), avec système de retry
   - L.49-73 : FORM_SPRITE_IDS — ids PokeAPI dédiés pour les formes qui n'ont pas de numéro
     de Pokédex propre (Méga-Évolutions, Formes d'Alola/Galar/Hisui, formes Totémiques...)
   - L.78-114: POKEMON_SCALE — grossissement/réduction manuels pour les espèces dont la taille
     réelle ne correspond pas à la progression standard par stade d'évolution
   - L.126-fin : getSpriteHTML() — point d'entrée principal, résout un nom d'espèce en <img>
==== */
const ZARBI_FORMS = ['201','201-b','201-c','201-d','201-e','201-f','201-g','201-h','201-i','201-j','201-k','201-l','201-m','201-n','201-o','201-p','201-q','201-r','201-s','201-t','201-u','201-v','201-w','201-x','201-y','201-z','201-exclamation','201-question'];
function pickRandomZarbiForm(){ return ZARBI_FORMS[Math.floor(Math.random()*ZARBI_FORMS.length)]; }
const MINIOR_FORMS = [774,10130,10131,10132,10133,10134,10135];
function pickRandomMiniorForm(){ return MINIOR_FORMS[Math.floor(Math.random()*MINIOR_FORMS.length)]; }
// Choisit (et fige) le sprite cosmétique d'un membre à sa création, pour Zarbi/Météno uniquement.
function pickFormSprite(name){
  if(name==='Zarbi') return pickRandomZarbiForm();
  if(name==='Météno') return pickRandomMiniorForm();
  return null;
}
// Sprites statiques (front/back), première source essayée par getSpriteHTML().
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
// Sprites animés (Showdown), utilisés en priorité quand animated=true.
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
// Repli si la source animée principale échoue (sprites animés Noir & Blanc officiels).
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
// Ids PokeAPI dédiés (10000+) pour les formes sans numéro de Pokédex propre : Méga-Évolutions,
// formes régionales (Alola/Galar/Hisui, gardent le numéro national de leur espèce d'origine),
// formes Totémiques, Giratina Origine, Shaymin Ciel, appareils Motisma.
const FORM_SPRITE_IDS = {
  'Giratina (Origine)':10007,
  'Shaymin (Ciel)':10006,
  'Motisma Chauffe':10008, 'Motisma Lavage':10009, 'Motisma Frigo':10010,
  'Motisma Ventilateur':10011, 'Motisma Tondeuse':10012,
  'Boréas (Totémique)':10019, 'Fulguris (Totémique)':10020, 'Démétéros (Totémique)':10021,
  'Méga-Florizarre':10033, 'Méga-Dracaufeu X':10034, 'Méga-Dracaufeu Y':10035, 'Méga-Tortank':10036,
  'Méga-Kangourex':10039, 'Méga-Léviator':10041, 'Méga-Mewtwo Y':10044, 'Méga-Cizayox':10046,
  'Méga-Gardevoir':10051, 'Méga-Carchacrok':10061, 'Méga-Lucario':10062, 'Méga-Métalosse':10076,
  "Rattata d'Alola":10091, "Rattatac d'Alola":10092, "Raichu d'Alola":10100,
  "Sabelette d'Alola":10101, "Sablaireau d'Alola":10102, "Goupix d'Alola":10103, "Feunard d'Alola":10104,
  "Taupiqueur d'Alola":10105, "Triopikeur d'Alola":10106, "Miaouss d'Alola":10107, "Persian d'Alola":10108,
  "Racaillou d'Alola":10109, "Gravalanch d'Alola":10110, "Grolem d'Alola":10111,
  "Tadmorv d'Alola":10112, "Grotadmorv d'Alola":10113, "Noadkoko d'Alola":10114, "Ossatueur d'Alola":10115,
  'Miaouss de Galar':10161, 'Ponyta de Galar':10162, 'Galopa de Galar':10163,
  'Ramoloss de Galar':10164, 'Flagadoss de Galar':10165, 'Canarticho de Galar':10166,
  'Smogogo de Galar':10167, 'M. Mime de Galar':10168, 'Artikodin de Galar':10169,
  'Électhor de Galar':10170, 'Sulfura de Galar':10171, 'Corayon de Galar':10173,
  'Zigzaton de Galar':10174, 'Linéon de Galar':10175, 'Daruman de Galar':10176,
  'Darumacho de Galar':10177, 'Tutafeh de Galar':10179, 'Stunfisk de Galar':10180,
  "Caninos d'Hisui":10229, "Arcanin d'Hisui":10230, "Voltorbe d'Hisui":10231, "Électrode d'Hisui":10232,
  "Typhlosion d'Hisui":10233, 'Qwilfish de Hisui':10234, 'Farfuret de Hisui':10235, 'Clamiral de Hisui':10236,
  'Fragilady de Hisui':10237, 'Zorua de Hisui':10238, 'Zoroark de Hisui':10239, 'Gueriaigle de Hisui':10240,
  'Colimucus de Hisui':10241, 'Muplodocus de Hisui':10242, 'Séracrawl de Hisui':10243, 'Archéduc de Hisui':10244,
  'Amovénus (Totémique)':10249
};
// Choisit la liste de sources à essayer (animées d'abord si demandé, puis repli, puis statique).
function getSpriteSourceList(facing, animated){
  return animated ? [...ANIMATED_SPRITE_SOURCES[facing], ...ANIMATED_SPRITE_SOURCES_FALLBACK[facing], ...SPRITE_SOURCES[facing]] : SPRITE_SOURCES[facing];
}
// Grossissement/réduction manuels pour les espèces dont la taille ne suit pas la progression
// standard par stade d'évolution (géants, minuscules...). Sans entrée ici, la taille est déduite
// automatiquement de la hauteur du sprite chargé (voir naturalScaleFromHeight ci-dessous).
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
  // Génération 6 (Kalos)
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
const SPRITE_NATURAL_SCALE_MIN_H = 30, SPRITE_NATURAL_SCALE_MAX_H = 150;
const SPRITE_NATURAL_SCALE_OUT_MIN = 0.5, SPRITE_NATURAL_SCALE_OUT_MAX = 1.3;
// Déduit une échelle d'affichage à partir de la hauteur réelle du sprite chargé (repli pour les espèces absentes de POKEMON_SCALE).
function naturalScaleFromHeight(h){
  if(!h) return 1;
  const t = Math.max(0, Math.min(1, (h - SPRITE_NATURAL_SCALE_MIN_H) / (SPRITE_NATURAL_SCALE_MAX_H - SPRITE_NATURAL_SCALE_MIN_H)));
  return SPRITE_NATURAL_SCALE_OUT_MIN + t * (SPRITE_NATURAL_SCALE_OUT_MAX - SPRITE_NATURAL_SCALE_OUT_MIN);
}
// Callback onload : applique l'échelle automatique une fois la taille réelle du sprite connue.
function applySpriteNaturalScale(img){
  if(POKEMON_SCALE[img.alt] !== undefined) return;
  img.style.transform = `scale(${naturalScaleFromHeight(img.naturalHeight).toFixed(2)})`;
}
// Point d'entrée principal : construit le <img> du sprite d'une espèce (nom affiché) pour une
// orientation donnée. Résout l'id via FORM_SPRITE_IDS, les préfixes de noms à parenthèses
// (Arceus/Lougaroc/Plumeline), Zarbi/Météno (aléatoire), sinon DEX_NUMBERS. Repli "?" si introuvable.
function getSpriteHTML(name, unownForm, facing, animated){
  facing = facing==='back' ? 'back' : 'front';
  let id;
  if(name==='Zarbi'){
    id = unownForm || pickRandomZarbiForm();
  } else if(FORM_SPRITE_IDS[name]){
    id = FORM_SPRITE_IDS[name];
  } else if(name.startsWith('Arceus (')){
    id = DEX_NUMBERS['Arceus'];
  } else if(name.startsWith('Lougaroc (')){
    id = DEX_NUMBERS['Lougaroc'];
  } else if(name.startsWith('Plumeline (Style')){
    id = DEX_NUMBERS['Plumeline'];
  } else if(name==='Météno'){
    id = unownForm || pickRandomMiniorForm();
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
// onerror du <img> : retente une autre source avec délai croissant, abandonne vers "?" après SPRITE_MAX_ATTEMPTS.
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
