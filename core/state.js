/* ==== État global mutable de la partie en cours (équipe, argent, sac, progression de la Tour,
   sauvegarde active, filtres du Dex...). Partagé et modifié par tous les autres fichiers. ==== */
let draftPool = [];
let draftRound = 0;
let currentChoices = [];
let team = [];
let editingIndex = null;
let towerFloor = 1;
let battleState = null;
let difficulty = 'facile';
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
let merchantPresent = false;
let pcSelectedTeamIdx = null;
let shopCategory = 'potion';
let merchantCategory = 0;
let dexFilters = { search:'', type:'', type2:'', rarity:'' };
// Statistiques de la run en cours (depuis l'entrée dans la Tour), utilisées pour le résumé affiché à la défaite.
let runStats = { bosses:0, miniBosses:0, floorsCleared:0, moneyEarned:0, badgesAtStart:0 };

