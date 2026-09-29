/* ==== SOMMAIRE ====
   Système d'affinité : plus une lignée est appréciée (niveau 0 à 5, permanent entre toutes les
   parties — comme les Jetons de Tour), plus elle a de chances d'apparaître au draft, au Ranch et
   aux recrues de combat. Les Bonbons d'Affinité (monnaie dédiée, gagnée en combat et à la Maison
   Safari — voir combat/battle-flow.js et village/safari.js) servent à faire monter ce niveau via
   le Professeur. Repères :
   - L.13-fin(26): sauvegarde/chargement de l'affinité et du solde de bonbons (localStorage, suit le
     modèle de meta/rewards.js)
   - L.28-fin : affinityLevel/affinityMultiplier — niveau d'une lignée et son bonus de tirage
   ==== */
const AFFINITY_KEY = 'draftArenaAffinity';
const AFFINITY_CANDY_KEY = 'draftArenaAffinityCandy';
const AFFINITY_MAX = 5;
// { [lineId]: niveau (0-5) }, permanent entre toutes les parties.
let affinity = {};
// Solde de Bonbons d'Affinité, permanent entre toutes les parties.
let affinityCandy = 0;

// Charge l'affinité et le solde de bonbons depuis localStorage (appelé une fois au démarrage).
function loadAffinityProgress(){
  try {
    affinity = JSON.parse(localStorage.getItem(AFFINITY_KEY) || '{}') || {};
    affinityCandy = parseInt(localStorage.getItem(AFFINITY_CANDY_KEY), 10) || 0;
  } catch(e){ affinity = {}; affinityCandy = 0; }
}
// Sauvegarde l'affinité et le solde de bonbons (persiste entre toutes les parties, contrairement à la sauvegarde de partie).
function saveAffinityProgress(){
  try {
    localStorage.setItem(AFFINITY_KEY, JSON.stringify(affinity));
    localStorage.setItem(AFFINITY_CANDY_KEY, String(affinityCandy));
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
