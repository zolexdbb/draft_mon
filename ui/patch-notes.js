/* ==== ui/patch-notes.js (généré depuis index.html) ==== */
const PATCH_NOTES = [
  {
    version: 'v0.5',
    title: 'v0.5 — Gen 4 Update',
    categories: [
      {
        icon: '📖', label: 'Pokédex & Contenu',
        items: [
          "107 nouveaux Pokémon ajoutés (Sinnoh, Pokédex complet 1 → 493)",
          "18 lignées existantes reçoivent leur évolution ou pré-évolution de Génération 4 (Magnézone, Lucario, Tangrowth, Yanmega, Mamoswine, Weavile, Honchkiss, Roserade, Porygon-Z, Bébés Happiny/Mime Jr./Bonsly/Munchlax/Mantyke/Chingling...)",
          "2 nouvelles évolutions pour Évoli : Phyllali et Givrali",
          "7 nouvelles attaques de Génération 4 (Aurasphère, Close Combat, Exploforce, Draco-Météore, Dracochoc, Demi-Tour, Piège de Roc)",
          "14 nouveaux Pokémon Légendaires/Fabuleux (le Trio du Lac, Dialga, Palkia, Heatran, Regigigas, Giratina, Cresselia, Phione, Manaphy, Darkrai, Shaymin, Arceus) et Carchacrok en pseudo-légendaire"
        ]
      }
    ]
  },
  {
    version: 'v0.4',
    title: 'v0.4 — Gen 3 Update',
    categories: [
      {
        icon: '📖', label: 'Pokédex & Contenu',
        items: [
          "135 nouveaux Pokémon ajoutés (Pokédex complet 1 → 386)",
          "20 nouveaux talents de Génération 3 (Fermeté, Garde Mystik, Cran, Crachin, Sécheresse, Sable Volant, Marque Ombre, Ventouse, Air Lock, Peau Dure, Turbo, Déguisement...)",
          "45 nouvelles attaques de Génération 3 (Danse Draco, Feu Follet, Surchauffe, Calmesprit, Provoc, Souvenir, Sabotage...)",
          "Restructuration des évolutions à embranchements façon Évoli (Chenipotte, Arakdo)"
        ]
      },
      {
        icon: '🎒', label: 'Objets & Village',
        items: [
          "30 objets ajoutés avec sprites et effets officiels (Potions à paliers, anti-statuts, Baies, objets stratégiques comme Bandeau Choix, Orbe Vie, Veste de Combat...)",
          "Pokéshop réorganisé en 3 onglets par catégorie",
          "Nouveau système de PC (6 emplacements, accessible via le Pokécentre)",
          "Boutons Sac et Équipe accessibles depuis la Tour et le Village",
          "Le Ranch devient un mini-draft de recrutement (3 choix, 1 seul Pokémon gardé)"
        ]
      },
      {
        icon: '🐛', label: 'Corrections',
        items: [
          "Immunités de type aux altérations de statut corrigées (Poison/Acier immunisés au poison, Feu à la brûlure, Glace au gel)",
          "Correction du seuil de déclenchement de la Baie Oran"
        ]
      }
    ],
    subVersions: [
      {
        version: 'v0.4.1',
        title: 'v0.4.1 — Combat & Interface Update',
        categories: [
          {
            icon: '🎵', label: 'Musique',
            items: [
              "Musiques d'ambiance différentes pour le Menu, le Village et les Combats",
              "Bouton ⚙️ Paramètres avec réglage du volume"
            ]
          },
          {
            icon: '⚔️', label: 'Interface de combat',
            items: [
              "Suppression du cadre autour des combattants, sprite vu de dos pour ton Pokémon",
              "Pastilles de type compactes (icône seule) au lieu des badges texte",
              "Nouvelles icônes de statut (Poison, Brûlure, Paralysie, Sommeil, Confusion, Gel)",
              "Historique de combat défilant sur plusieurs tours",
              "Bannière du dresseur adverse mise en avant, avec liseré doré (Boss) ou violet (Mini-Boss)",
              "Zone de terrain et zone d'actions clairement séparées visuellement"
            ]
          },
          {
            icon: '🌀', label: 'Mécaniques de combat',
            items: [
              "Animations d'attaque selon le type (icône dédiée, projectile pour les Spéciales, impact pour les Physiques)",
              "Les capacités à charge (Lance-Soleil, Coud'Krâne, Coupe-Vent, Vol, Tunnel, Plongée) prennent réellement 2 tours, avec enchaînement automatique",
              "Vol/Tunnel/Plongée rendent invulnérable pendant la charge, sauf face à Séisme, Ampleur, Lame du Vide, Tornade, Ouragan, Fatal-Foudre, Stratopercut, Surf et Siphon",
              "Prescience frappe désormais 2 tours après son utilisation"
            ]
          },
          {
            icon: '🐛', label: 'Corrections',
            items: [
              "Correction de la fiabilité des sprites Pokémon et des icônes d'objets/baies/potions",
              "Le Ranch ne se retire plus à l'infini en changeant d'onglet",
              "Correction des boutons \"Changer de Pokémon\" et \"Sac\" qui ne répondaient plus en combat"
            ]
          }
        ]
      }
    ]
  },
  {
    version: 'v0.3',
    title: 'v0.3 — Update Génération 2',
    categories: [
      {
        icon: '📖', label: 'Pokédex & Contenu',
        items: [
          "100 Pokémon de la Génération 2 ajoutés (Johto complet, hors Zarbi)",
          "Évolutions ajoutées : Crobat, Steelix, Blissey, Kingdra, Scizor, Porygon2...",
          "Nouvelles branches d'évolution : Bellossom, Politoed, Slowking, Espeon, Umbreon"
        ]
      },
      {
        icon: '⚡', label: 'Types & Capacités',
        items: [
          "2 nouveaux types : Acier et Ténèbres, avec leurs efficacités",
          "Nouvelles capacités Acier/Ténèbres (Tête de Fer, Vibrobscur, Coup Bas...)"
        ]
      }
    ],
    subVersions: [
      {
        version: 'v0.3.1',
        title: 'v0.3.1 — Équilibrage Update',
        categories: [
          {
            icon: '🎚️', label: 'Modes de difficulté',
            items: [
              "Ajout de 3 modes de difficulté au lancement d'une partie",
              "Facile : draft de Pokémon déjà entièrement évolués, avec des builds prêts à l'emploi",
              "Normal : draft classique, PV restaurés après chaque combat",
              "Difficile : draft classique, PV et altérations d'état conservés d'un combat à l'autre"
            ]
          },
          {
            icon: '📖', label: 'Contenu',
            items: [
              "Nouvelles attaques ajoutées",
              "Movepool des Pokémon enrichi"
            ]
          },
          {
            icon: '🐛', label: 'Corrections',
            items: [
              "Traduction des attaques, talents et natures corrigée"
            ]
          },
          {
            icon: '💾', label: 'Sauvegarde',
            items: [
              "Système de sauvegarde à 5 emplacements"
            ]
          }
        ]
      }
    ]
  },
  {
    version: 'v0.2',
    title: 'v0.2 — Village Update',
    categories: [
      {
        icon: '⚔️', label: 'Tour de combat',
        items: [
          "PV persistants entre les combats",
          "Système d'argent - gains après chaque combat",
          "Mini-boss tous les 5 étages, Boss tous les 10"
        ]
      },
      {
        icon: '🏘️', label: 'Village',
        items: [
          "Village de repos débloqué après chaque Boss",
          "Pokécentre, Pokéshop, Ranch et PC au Village"
        ]
      },
      {
        icon: '🎒', label: 'Objets & Équipe',
        items: [
          "Sac utilisable en combat et entre les combats",
          "Objets tenus (Baie Oran, Reste, Ceinture Force...)",
          "Objets stratégiques en récompense boss",
          "Gestion d'équipe avec changement de lead"
        ]
      }
    ]
  },
  {
    version: 'v0.1',
    title: 'v0.1 — Base',
    categories: [
      {
        icon: '🎯', label: 'Draft & Builder',
        items: [
          "Draft de 6 Pokémon Gen 1",
          "Builder complet EV/IV/Nature/Talent/Attaques"
        ]
      },
      {
        icon: '⚔️', label: 'Combat & Pokédex',
        items: [
          "Tour de combat avec 17 archétypes de dresseurs",
          "Système de combat au tour par tour",
          "Pokédex avec filtres"
        ]
      }
    ]
  }
];
const SPLASH_TEXTS = ["Gen 3 is here!!!"];
function renderPatchNoteBody(v){
  if(v.categories){
    return v.categories.map(c => `
      <div class="patchnotes-category">
        <div class="patchnotes-category-label">${c.icon} ${c.label}</div>
        <ul>${c.items.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>`).join('');
  }
  return `<ul>${v.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
}
function renderPatchNotes(){
  return PATCH_NOTES.map((v,idx) => {
    const expanded = idx===0;
    return `
    <div class="patchnotes-version">
      <div class="patchnotes-version-header">
        <span class="patchnotes-chevron">${expanded?'▾':'▸'}</span>
        <span class="patchnotes-version-title">${v.title}</span>
      </div>
      <div class="patchnotes-version-content"${expanded?'':' style="display:none;"'}>
        ${renderPatchNoteBody(v)}
        ${(v.subVersions||[]).map(sv => `
          <div class="patchnotes-version" style="margin-left:16px;margin-top:10px;padding-left:10px;border-left:2px solid var(--line);">
            <div class="patchnotes-version-title" style="font-size:9px;color:var(--accent-dim,var(--text-dim));">${sv.title}</div>
            ${renderPatchNoteBody(sv)}
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');
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
  overlay.querySelectorAll('.patchnotes-version-header').forEach(header=>{
    header.onclick = ()=>{
      const content = header.nextElementSibling;
      const chevron = header.querySelector('.patchnotes-chevron');
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? '' : 'none';
      chevron.textContent = isHidden ? '▾' : '▸';
    };
  });
}
document.getElementById('splashTextBtn').textContent = SPLASH_TEXTS[Math.floor(Math.random()*SPLASH_TEXTS.length)];
document.getElementById('splashTextBtn').onclick = openPatchNotes;

/* =================== START =================== */
showScreen('screenMenu');
