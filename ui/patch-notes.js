/* ==== ui/patch-notes.js (généré depuis index.html) ==== */
const PATCH_NOTES = [
  {
    version: 'v0.4',
    title: 'v0.4 — Gen 3 Update',
    items: [
      "135 nouveaux Pokémon ajoutés (Pokédex complet 1 → 386)",
      "20 nouveaux talents de Génération 3 (Fermeté, Garde Mystik, Cran, Crachin, Sécheresse, Sable Volant, Marque Ombre, Ventouse, Air Lock, Peau Dure, Turbo, Déguisement...)",
      "45 nouvelles attaques de Génération 3 (Danse Draco, Feu Follet, Surchauffe, Calmesprit, Provoc, Souvenir, Sabotage...)",
      "Restructuration des évolutions à embranchements façon Évoli (Chenipotte, Arakdo)",
      "Immunités de type aux altérations de statut corrigées (Poison/Acier immunisés au poison, Feu à la brûlure, Glace au gel)",
      "Correction du seuil de déclenchement de la Baie Oran",
      "30 objets ajoutés avec sprites et effets officiels (Potions à paliers, anti-statuts, Baies, objets stratégiques comme Bandeau Choix, Orbe Vie, Veste de Combat...)",
      "Pokéshop réorganisé en 3 onglets par catégorie",
      "Nouveau système de PC (6 emplacements, accessible via le Pokécentre)",
      "Boutons Sac et Équipe accessibles depuis la Tour et le Village",
      "Le Ranch devient un mini-draft de recrutement (3 choix, 1 seul Pokémon gardé)"
    ]
  },
  {
    version: 'v0.3',
    title: 'v0.3 — Update Génération 2',
    items: [
      "100 Pokémon de la Génération 2 ajoutés (Johto complet, hors Zarbi)",
      "2 nouveaux types : Acier et Ténèbres, avec leurs efficacités",
      "Nouvelles capacités Acier/Ténèbres (Tête de Fer, Vibrobscur, Coup Bas...)",
      "Évolutions ajoutées : Crobat, Steelix, Blissey, Kingdra, Scizor, Porygon2...",
      "Nouvelles branches d'évolution : Bellossom, Politoed, Slowking, Espeon, Umbreon"
    ],
    subVersions: [
      {
        version: 'v0.3.1',
        title: 'v0.3.1 — Équilibrage Update',
        items: [
          "Ajout de 3 modes de difficulté au lancement d'une partie",
          "Facile : draft de Pokémon déjà entièrement évolués, avec des builds prêts à l'emploi",
          "Normal : draft classique, PV restaurés après chaque combat",
          "Difficile : draft classique, PV et altérations d'état conservés d'un combat à l'autre",
          "Nouvelles attaques ajoutées",
          "Traduction des attaques, talents et natures corrigée",
          "Movepool des Pokémon enrichi",
          "Système de sauvegarde à 5 emplacements"
        ]
      }
    ]
  },
  {
    version: 'v0.2',
    title: 'v0.2 — Village Update',
    items: [
      "PV persistants entre les combats",
      "Système d'argent - gains après chaque combat",
      "Mini-boss tous les 5 étages, Boss tous les 10",
      "Village de repos débloqué après chaque Boss",
      "Pokécentre, Pokéshop, Ranch et PC au Village",
      "Sac utilisable en combat et entre les combats",
      "Objets tenus (Baie Oran, Reste, Ceinture Force...)",
      "Objets stratégiques en récompense boss",
      "Gestion d'équipe avec changement de lead"
    ]
  },
  {
    version: 'v0.1',
    title: 'v0.1 — Base',
    items: [
      "Draft de 6 Pokémon Gen 1",
      "Builder complet EV/IV/Nature/Talent/Attaques",
      "Tour de combat avec 17 archétypes de dresseurs",
      "Système de combat au tour par tour",
      "Pokédex avec filtres"
    ]
  }
];
const SPLASH_TEXTS = ["Gen 3 is here!!!"];
function renderPatchNotes(){
  return PATCH_NOTES.map(v => `
    <div class="patchnotes-version">
      <div class="patchnotes-version-title">${v.title}</div>
      <ul>${v.items.map(i=>`<li>${i}</li>`).join('')}</ul>
      ${(v.subVersions||[]).map(sv => `
        <div class="patchnotes-version" style="margin-left:16px;margin-top:10px;padding-left:10px;border-left:2px solid var(--line);">
          <div class="patchnotes-version-title" style="font-size:9px;color:var(--accent-dim,var(--text-dim));">${sv.title}</div>
          <ul>${sv.items.map(i=>`<li>${i}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`).join('');
}
function openPatchNotes(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.id = 'patchNotesOverlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal">
      <button class="patchnotes-close" id="patchNotesCloseBtn">✕</button>
      <h2>◆ NOTES DE MISE À JOUR ◆</h2>
      ${renderPatchNotes()}
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('patchNotesCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
}
document.getElementById('splashTextBtn').textContent = SPLASH_TEXTS[Math.floor(Math.random()*SPLASH_TEXTS.length)];
document.getElementById('splashTextBtn').onclick = openPatchNotes;

/* =================== START =================== */
showScreen('screenMenu');
