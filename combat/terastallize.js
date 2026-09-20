/* ==== SOMMAIRE ====
   Téracristallisation : une fois par combat, côté joueur uniquement, si le porteur tient l'Orbe
   Tera, il peut se Téracristalliser au moment de choisir une capacité. Contrairement au Dynamax,
   l'effet est permanent pour le reste du combat (pas de compte à rebours) : le porteur devient
   mono-type de son Type Tera (choisi à l'avance dans la fenêtre Équipe, m.teraType) pour l'attaque
   et la défense, et bénéficie d'un bonus STAB de x2 (au lieu de x1.5) si ce type correspond à l'un
   de ses types d'origine — exactement comme dans les vrais jeux.
   - canTerastallize / activateTera : condition d'activation + application de l'effet
==== */
const TERA_TYPES = ['normal','feu','eau','plante','electrik','vol','poison','sol','insecte','combat','glace','psy','fantome','roche','dragon','acier','tenebres','fee'];
// Vrai si ce Pokémon peut se Téracristalliser ce combat (pas déjà utilisé côté joueur, tient l'Orbe Tera).
function canTerastallize(p, bs){
  if(!p || !bs || bs.teraUsed) return false;
  return p.heldItem==='orbeTera' && !p.teraActive;
}
// Déclenche la Téracristallisation : le porteur devient mono-type de son Type Tera pour le reste du combat.
function activateTera(p){
  if(p.teraActive) return;
  p.teraActive = true;
  p.transformedTypes = [p.teraType || p.types[0]];
}
