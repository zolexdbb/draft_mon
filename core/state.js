/* ==== core/state.js (généré depuis index.html) ==== */
let draftPool = [];
let draftRound = 0;
let currentChoices = [];
let team = [];
let editingIndex = null;
let towerFloor = 1;
let battleState = null;
let difficulty = 'facile'; // 'facile' = PV restaurés entre chaque combat | 'difficile' = PV conservés
let money = 100;
let bag = {};
let pcBox = [null,null,null,null,null,null];
let currentSlot = 1;
let bestFloorFacile = 1;
let bestFloorNormal = 1;
let bestFloorDifficile = 1;
let bossTypesUsed = [];
let badges = { facile:[], normal:[], difficile:[] };
let battleInProgress = false;
let pcSelectedTeamIdx = null;
let shopCategory = 'potion';
let dexFilters = { search:'', type:'', rarity:'' };

