/* ==== SOMMAIRE ====
   Système d'affinité : plus une lignée est appréciée (niveau 0 à 5, permanent entre toutes les
   parties — comme les Jetons de Tour), plus elle a de chances d'apparaître au draft, au Ranch et
   aux recrues de combat. Les Bonbons d'Affinité (monnaie dédiée, gagnée en combat et à la Maison
   Safari — voir combat/battle-flow.js et village/safari.js) servent à faire monter ce niveau via
   le Professeur. Repères :
   - L.13-fin(30): sauvegarde/chargement de l'affinité, du solde de bonbons et de la progression en
     cours (localStorage, suit le modèle de meta/rewards.js)
   - affinityLevel/affinityMultiplier : niveau d'une lignée et son bonus de tirage
   - affinityNextCost/affinityProgressFor : coût du prochain palier et bonbons déjà investis dedans
   - investAffinityCandy : dépense des bonbons chez le Professeur pour faire monter une lignée
   - affinityCandyReward : bonbons gagnés du dresseur vaincu après un combat
   ==== */
const AFFINITY_KEY = 'draftArenaAffinity';
const AFFINITY_CANDY_KEY = 'draftArenaAffinityCandy';
const AFFINITY_PROGRESS_KEY = 'draftArenaAffinityProgress';
const AFFINITY_MAX = 5;
// { [lineId]: niveau (0-5) }, permanent entre toutes les parties.
let affinity = {};
// Solde de Bonbons d'Affinité, permanent entre toutes les parties.
let affinityCandy = 0;
// { [lineId]: bonbons déjà investis dans le palier EN COURS de cette lignée } — remis à 0 dès que le
// palier est rempli et que le niveau monte (voir investAffinityCandy, bloc 5/Professeur).
let affinityProgress = {};

// Charge l'affinité, le solde de bonbons et la progression en cours depuis localStorage (appelé une fois au démarrage).
function loadAffinityProgress(){
  try {
    affinity = JSON.parse(localStorage.getItem(AFFINITY_KEY) || '{}') || {};
    affinityCandy = parseInt(localStorage.getItem(AFFINITY_CANDY_KEY), 10) || 0;
    affinityProgress = JSON.parse(localStorage.getItem(AFFINITY_PROGRESS_KEY) || '{}') || {};
  } catch(e){ affinity = {}; affinityCandy = 0; affinityProgress = {}; }
}
// Sauvegarde l'affinité, le solde de bonbons et la progression en cours (persiste entre toutes les
// parties, contrairement à la sauvegarde de partie).
function saveAffinityProgress(){
  try {
    localStorage.setItem(AFFINITY_KEY, JSON.stringify(affinity));
    localStorage.setItem(AFFINITY_CANDY_KEY, String(affinityCandy));
    localStorage.setItem(AFFINITY_PROGRESS_KEY, JSON.stringify(affinityProgress));
  } catch(e){}
}
loadAffinityProgress();

// Niveau d'affinité d'une lignée (0 si jamais investie) — s'applique à toute la lignée, y compris ses branches.
function affinityLevel(lineId){
  return affinity[lineId] || 0;
}
// Multiplicateur de tirage (draft/Ranch/recrues) selon l'affinité d'une lignée : ×1 à ×2 au niveau
// max (5), multiplicatif pour qu'un légendaire boosté reste rare comparé à un commun boosté.
function affinityMultiplier(lineId){
  return 1 + 0.2 * affinityLevel(lineId);
}
// À appeler après tout changement de niveau d'affinité (investissement chez le Professeur) : les
// totaux figés au chargement (TOTAL_CANDIDATE_WEIGHT/TOTAL_FACILE_WEIGHT, dans draft/draft-classic.js
// et draft/draft-facile.js) doivent être recalculés pour que les taux d'apparition affichés restent justes.
function recalcDraftWeights(){
  recalcCandidateWeight();
  recalcFacileWeight();
}
// Coût en bonbons de chaque palier (niveau 0→1, 1→2, 2→3, 3→4, 4→5) pour une lignée commune.
const AFFINITY_TIER_COSTS = [3,5,8,12,17];
// Multiplicateur de coût selon la rareté de la lignée (les listes LEGENDARY_IDS/PSEUDO_IDS/RARE_IDS
// viennent de draft/draft-core.js, chargé après ce fichier — sans importance, seulement lu à l'appel).
function affinityCostMultiplier(lineId){
  if(LEGENDARY_IDS.includes(lineId)) return 3;
  if(PSEUDO_IDS.includes(lineId)) return 2;
  if(RARE_IDS.includes(lineId)) return 1.5;
  return 1;
}
// Coût en bonbons pour faire passer une lignée de son niveau actuel au suivant (null si déjà au niveau max).
function affinityNextCost(lineId){
  const lvl = affinityLevel(lineId);
  if(lvl>=AFFINITY_MAX) return null;
  return Math.round(AFFINITY_TIER_COSTS[lvl] * affinityCostMultiplier(lineId));
}
// Bonbons déjà investis dans le palier en cours d'une lignée (0 si jamais investie ou déjà au niveau max).
function affinityProgressFor(lineId){
  return affinityProgress[lineId] || 0;
}
// Investit `amount` Bonbons d'Affinité dans une lignée (Professeur — voir village/safari.js) : remplit
// le(s) palier(s) en cours, fait monter le niveau dès qu'un palier est rempli (le surplus est reporté
// sur le suivant, pas perdu), s'arrête au niveau max ou si le solde de bonbons est épuisé. Renvoie true
// si au moins un niveau a été gagné (pour savoir s'il faut recalculer les poids de tirage).
function investAffinityCandy(lineId, amount){
  let remaining = Math.max(0, Math.min(amount, affinityCandy));
  let leveledUp = false;
  while(remaining>0 && affinityLevel(lineId) < AFFINITY_MAX){
    const cost = affinityNextCost(lineId);
    const have = affinityProgressFor(lineId);
    const give = Math.min(cost - have, remaining);
    affinityProgress[lineId] = have + give;
    affinityCandy -= give;
    remaining -= give;
    if(affinityProgress[lineId] >= cost){
      affinity[lineId] = affinityLevel(lineId) + 1;
      affinityProgress[lineId] = 0;
      leveledUp = true;
    }
  }
  saveAffinityProgress();
  if(leveledUp) recalcDraftWeights();
  return leveledUp;
}
// Bonbons d'Affinité gagnés du dresseur vaincu après un combat gagné (voir floorCleared dans
// combat/tower.js) : un combat normal donne 0 à 3 bonbons (0/1 fréquents, 3 rare, ~1 en moyenne) ;
// Mini-Boss et Boss donnent davantage (Boss : au moins 2), pour ~1 bonbon/combat en moyenne visée
// (~30 sur une run complète jusqu'à l'étage 20).
function affinityCandyReward(isMiniBoss, isBoss){
  const r = Math.random();
  if(isBoss){
    if(r<0.40) return 2;
    if(r<0.75) return 3;
    if(r<0.95) return 4;
    return 5;
  }
  if(isMiniBoss){
    if(r<0.30) return 1;
    if(r<0.70) return 2;
    if(r<0.90) return 3;
    return 4;
  }
  if(r<0.35) return 0;
  if(r<0.75) return 1;
  if(r<0.95) return 2;
  return 3;
}
