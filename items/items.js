/* ==== items/items.js (généré depuis index.html) ==== */
function ITEM_SPRITE(slug){ return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${slug}.png`; }
const ITEMS = {
  // ---- Potions ----
  potion:       { name:'Potion',        emoji:'💊', sprite:ITEM_SPRITE('potion'),        price:100,  kind:'consumable', category:'potion', heal:0.5,  desc:"Restaure 50% des PV max." },
  superPotion:  { name:'Super Potion',   emoji:'💊', sprite:ITEM_SPRITE('super-potion'),  price:250,  kind:'consumable', category:'potion', heal:0.75, desc:"Restaure 75% des PV max." },
  hyperPotion:  { name:'Hyper Potion',   emoji:'💊', sprite:ITEM_SPRITE('hyper-potion'),  price:500,  kind:'consumable', category:'potion', heal:0.9,  desc:"Restaure 90% des PV max." },
  potionMax:    { name:'Potion Max',     emoji:'💊', sprite:ITEM_SPRITE('max-potion'),    price:900,  kind:'consumable', category:'potion', heal:1.0,  desc:"Restaure tous les PV du Pokémon." },
  antidote:     { name:'Antidote',       emoji:'🧪', sprite:ITEM_SPRITE('antidote'),      price:80,   kind:'consumable', category:'potion', cureStatus:'poison',   desc:"Soigne un Pokémon empoisonné." },
  antiBrule:    { name:'Anti-Brûle',     emoji:'🧪', sprite:ITEM_SPRITE('burn-heal'),     price:80,   kind:'consumable', category:'potion', cureStatus:'brulure',  desc:"Soigne un Pokémon brûlé." },
  antiGel:      { name:'Anti-Gel',       emoji:'🧪', sprite:ITEM_SPRITE('ice-heal'),      price:80,   kind:'consumable', category:'potion', cureStatus:'gel',      desc:"Réchauffe un Pokémon gelé." },
  antiPara:     { name:'Anti-Para',      emoji:'🧪', sprite:ITEM_SPRITE('paralyze-heal'), price:80,   kind:'consumable', category:'potion', cureStatus:'paralysie',desc:"Soigne un Pokémon paralysé." },
  reveil:       { name:'Réveil',         emoji:'🧪', sprite:ITEM_SPRITE('awakening'),     price:80,   kind:'consumable', category:'potion', cureStatus:'sommeil',  desc:"Réveille un Pokémon endormi." },
  totalSoin:    { name:'Total Soin',     emoji:'🧪', sprite:ITEM_SPRITE('full-heal'),     price:200,  kind:'consumable', category:'potion', cureStatus:'all',      desc:"Soigne toutes les altérations de statut." },
  guerison:     { name:'Guérison',       emoji:'✨', sprite:ITEM_SPRITE('full-restore'),  price:1200, kind:'consumable', category:'potion', heal:1.0, cureStatus:'all', desc:"Restaure tous les PV et soigne toutes les altérations de statut." },
  // ---- Baies (objets tenus) ----
  baieOran:     { name:'Baie Oran',      emoji:'🍇', sprite:ITEM_SPRITE('oran-berry'),    price:150, kind:'held', category:'baie', berryHeal:0.12, desc:"Objet tenu : soigne 12% des PV max une fois passé à 50% des PV ou moins." },
  baieSitrus:   { name:'Baie Sitrus',    emoji:'🍑', sprite:ITEM_SPRITE('sitrus-berry'),  price:250, kind:'held', category:'baie', berryHeal:0.25, desc:"Objet tenu : soigne 25% des PV max une fois passé à 50% des PV ou moins." },
  baiePecha:    { name:'Baie Prapêche',  emoji:'🍑', sprite:ITEM_SPRITE('pecha-berry'),   price:120, kind:'held', category:'baie', berryCure:'poison',   desc:"Objet tenu : soigne automatiquement le poison." },
  baieRawst:    { name:'Baie Rawst',     emoji:'🍑', sprite:ITEM_SPRITE('rawst-berry'),   price:120, kind:'held', category:'baie', berryCure:'brulure',  desc:"Objet tenu : soigne automatiquement la brûlure." },
  baieAspic:    { name:'Baie Aspic',     emoji:'🍑', sprite:ITEM_SPRITE('aspear-berry'),  price:120, kind:'held', category:'baie', berryCure:'gel',      desc:"Objet tenu : dégèle automatiquement le Pokémon." },
  baiePersim:   { name:'Baie Persim',    emoji:'🍑', sprite:ITEM_SPRITE('persim-berry'),  price:120, kind:'held', category:'baie', berryCure:'confusion',desc:"Objet tenu : soigne automatiquement la confusion." },
  baieChesto:   { name:'Baie Chesto',    emoji:'🍑', sprite:ITEM_SPRITE('chesto-berry'),  price:120, kind:'held', category:'baie', berryCure:'sommeil',  desc:"Objet tenu : réveille automatiquement le Pokémon." },
  baieSinelle:  { name:'Baie Sinelle',   emoji:'🍑', sprite:ITEM_SPRITE('cheri-berry'),   price:120, kind:'held', category:'baie', berryCure:'paralysie',desc:"Objet tenu : soigne automatiquement la paralysie." },
  baieLum:      { name:'Baie Lum',       emoji:'🍑', sprite:ITEM_SPRITE('lum-berry'),     price:300, kind:'held', category:'baie', berryCure:'all',      desc:"Objet tenu : soigne automatiquement n'importe quelle altération de statut." },
  // ---- Objets stratégiques (tenus) ----
  bandeauChoix:   { name:'Bandeau Choix',   emoji:'🎗️', sprite:ITEM_SPRITE('choice-band'),   price:400, kind:'held', category:'strat', choiceLock:'atk', desc:"Objet tenu : augmente l'Attaque de 50%, mais bloque sur la première capacité utilisée." },
  lunettesChoix:  { name:'Lunettes Choix',  emoji:'👓', sprite:ITEM_SPRITE('choice-specs'),  price:400, kind:'held', category:'strat', choiceLock:'spa', desc:"Objet tenu : augmente l'Attaque Spéciale de 50%, mais bloque sur la première capacité utilisée." },
  mouchoirChoix:  { name:'Mouchoir Choix',  emoji:'🧣', sprite:ITEM_SPRITE('choice-scarf'),  price:400, kind:'held', category:'strat', choiceLock:'spe', desc:"Objet tenu : augmente la Vitesse de 50%, mais bloque sur la première capacité utilisée." },
  orbeVie:        { name:'Orbe Vie',        emoji:'🔮', sprite:ITEM_SPRITE('life-orb'),      price:450, kind:'held', category:'strat', desc:"Objet tenu : augmente les dégâts infligés de 30%, mais fait perdre 10% des PV max à chaque capacité offensive utilisée." },
  vesteCombat:    { name:'Veste de Combat', emoji:'🦺', sprite:ITEM_SPRITE('assault-vest'),  price:400, kind:'held', category:'strat', desc:"Objet tenu : augmente la Défense Spéciale de 50%, mais empêche d'utiliser des capacités de statut." },
  griffeTranchante:{ name:'Griffe Tranchante', emoji:'🗡️', sprite:ITEM_SPRITE('scope-lens'), price:300, kind:'held', category:'strat', desc:"Objet tenu : augmente nettement le taux de coups critiques." },
  boutonFuite:    { name:'Bouton Fuite',    emoji:'⏏️', sprite:ITEM_SPRITE('eject-button'),  price:300, kind:'held', category:'strat', desc:"Objet tenu : force le porteur à switcher dès qu'il subit une attaque." },
  herbeMental:    { name:'Herbe Mental',    emoji:'🌿', sprite:ITEM_SPRITE('mental-herb'),   price:250, kind:'held', category:'strat', desc:"Objet tenu : soigne les effets de Provoc et Entrave. Se consomme après usage." },
  reste:          { name:'Reste',           emoji:'🍙', sprite:ITEM_SPRITE('leftovers'),     price:200, kind:'held', category:'strat', desc:"Objet tenu : restaure environ 6% des PV max à la fin de chaque tour." },
  ceintureForce:  { name:'Ceinture Force',  emoji:'🥊', sprite:ITEM_SPRITE('focus-sash'),    price:250, kind:'held', category:'strat', desc:"Objet tenu : survit à 1 PV si un coup l'aurait mis K.O. alors qu'il était à PV max. Se consomme après usage." }
};
function itemIconHTML(key, size){
  const item = ITEMS[key];
  const s = size||22;
  return `<img src="${item.sprite}" alt="${item.name}" style="width:${s}px;height:${s}px;object-fit:contain;image-rendering:pixelated;vertical-align:middle;" onerror="this.outerHTML='${item.emoji}';">`;
}
