/* ==== SOMMAIRE ====
   Le Pokédex consultable (écran Dex) : grille de toutes les espèces/formes/branches avec filtres
   (recherche, type, rareté). Sert aussi d'écran de sélection en mode développeur. Repères :
   - L.10-16 : rarityKey — catégorie de rareté utilisée par le filtre (distinct de rarityInfo)
   - L.18-fin(71): renderDex — construit la grille filtrée (une carte par stade/branche de chaque lignée)
   - L.75-fin : filtres (listes d'options type/rareté + les 3 menus déroulants + réinitialisation)
==== */
function rarityKey(line, stageIdx){
  if(LEGENDARY_IDS.includes(line.id)) return 'legendaire';
  if(RARE_IDS.includes(line.id)) return 'rare';
  if(PSEUDO_IDS.includes(line.id) && stageIdx === line.stages.length-1) return 'pseudo';
  if(stageIdx === 0) return 'commun';
  return 'evo';
}

// Construit la grille du Dex : une carte par stade normal + par branche de chaque lignée,
// filtrée selon dexFilters ; en mode développeur, les cartes deviennent cliquables pour la sélection libre.
function renderDex(){
  const grid = document.getElementById('dexGrid');
  grid.innerHTML='';
  let count = 0;

  LINES.forEach(line=>{
    const allStages = [
      ...line.stages.map((sp,i)=>({sp,stageIdx:i,isBranch:false,branchIdx:null})),
      ...(line.branches ? line.branches.map((sp,bi)=>({sp,stageIdx:null,isBranch:true,branchIdx:bi})) : [])
    ];
    allStages.forEach(({sp, stageIdx, isBranch, branchIdx})=>{
      if(dexFilters.search && !sp.name.toLowerCase().includes(dexFilters.search.toLowerCase())) return;
      if(dexFilters.type && !sp.types.includes(dexFilters.type)) return;
      if(dexFilters.type2 && !sp.types.includes(dexFilters.type2)) return;
      if(dexFilters.rarity){
        const key = isBranch ? 'evo' : rarityKey(line, stageIdx);
        if(key !== dexFilters.rarity) return;
      }

      const rarity = isBranch ? {label:'Évolution', css:'rarity-evo'} : rarityInfo(line, stageIdx);
      let rateText;
      if(isBranch){
        rateText = `Évolution à embranchement — obtenue en faisant évoluer ${line.stages[0].name}`;
      } else if(stageIdx===0){
        rateText = `Taux d'apparition en draft : ${appearanceRate(line, stageIdx).toFixed(2)}%`;
      } else {
        rateText = `Taux en draft direct : ${appearanceRate(line, stageIdx).toFixed(2)}% — ou en évoluant`;
      }

      const card = document.createElement('div');
      card.className='dex-card';
      card.innerHTML = `
        <span class="rarity-badge ${rarity.css}">${rarity.label}</span>
        <div class="emoji">${getSpriteHTML(sp.name)}</div>
        <div class="pname">${sp.name}</div>
        <div class="types-row">${sp.types.map(t=>typeTagHTML(t)).join('')}</div>
        <div class="stat-line">PV ${sp.base.hp} · Atq ${sp.base.atk} · Déf ${sp.base.def}</div>
        <div class="stat-line">AtqSp ${sp.base.spa} · DéfSp ${sp.base.spd} · Vit ${sp.base.spe}</div>
        <div class="dex-rate">${rateText}</div>
      `;
      if(window.DEV_HOOKS){
        const entry = { lineId: line.id, stage: isBranch ? line.stages.length-1 : stageIdx, branch: isBranch ? branchIdx : null };
        window.DEV_HOOKS.decorateDexCard(card, sp, entry);
      }
      grid.appendChild(card);
      count++;
    });
  });

  document.getElementById('dexCount').textContent = `${count} Pokémon affichés`;
}

document.getElementById('dexSearch').oninput = (e)=>{ dexFilters.search = e.target.value; renderDex(); };

function typeOptionHTML(type, label){
  return `<span class="type-tag t-${type}">${typeIconHTML(type, 11)}${label}</span>`;
}
function rarityOptionHTML(css, label){
  return `<span class="rarity-badge ${css}">${label}</span>`;
}
const DEX_TYPE_OPTIONS = [
  {value:'', label:'Tous les types'},
  {value:'normal', label:'Normal'},{value:'feu', label:'Feu'},{value:'eau', label:'Eau'},
  {value:'plante', label:'Plante'},{value:'electrik', label:'Electrik'},{value:'vol', label:'Vol'},
  {value:'poison', label:'Poison'},{value:'sol', label:'Sol'},{value:'insecte', label:'Insecte'},
  {value:'combat', label:'Combat'},{value:'glace', label:'Glace'},{value:'psy', label:'Psy'},
  {value:'fantome', label:'Fantôme'},{value:'roche', label:'Roche'},{value:'dragon', label:'Dragon'},
  {value:'acier', label:'Acier'},{value:'tenebres', label:'Ténèbres'},{value:'fee', label:'Fée'}
].map(o=> o.value ? {...o, html: typeOptionHTML(o.value, o.label)} : o);
const DEX_TYPE_OPTIONS_2 = DEX_TYPE_OPTIONS.map(o=> o.value ? o : {...o, label:'2ème type (optionnel)'});
const DEX_RARITY_OPTIONS = [
  {value:'', label:'Toutes raretés'},
  {value:'commun', label:'Commun', css:'rarity-commun'},{value:'evo', label:'Évolution', css:'rarity-evo'},
  {value:'rare', label:'Rare', css:'rarity-rare'},{value:'pseudo', label:'Pseudo-légendaire', css:'rarity-pseudo'},
  {value:'legendaire', label:'Légendaire', css:'rarity-legendaire'}
].map(o=> o.value ? {...o, html: rarityOptionHTML(o.css, o.label)} : o);
// Affiche le menu déroulant de filtre par type principal.
function renderDexTypeFilter(){
  const c = document.getElementById('dexTypeFilter');
  c.innerHTML = '';
  c.appendChild(createCustomSelect({
    options: DEX_TYPE_OPTIONS, value: dexFilters.type,
    onChange: (val)=>{ dexFilters.type = val; renderDex(); }
  }));
}
// Affiche le menu déroulant de filtre par second type (optionnel).
function renderDexTypeFilter2(){
  const c = document.getElementById('dexTypeFilter2');
  c.innerHTML = '';
  c.appendChild(createCustomSelect({
    options: DEX_TYPE_OPTIONS_2, value: dexFilters.type2,
    onChange: (val)=>{ dexFilters.type2 = val; renderDex(); }
  }));
}
// Affiche le menu déroulant de filtre par rareté.
function renderDexRarityFilter(){
  const c = document.getElementById('dexRarityFilter');
  c.innerHTML = '';
  c.appendChild(createCustomSelect({
    options: DEX_RARITY_OPTIONS, value: dexFilters.rarity,
    onChange: (val)=>{ dexFilters.rarity = val; renderDex(); }
  }));
}
renderDexTypeFilter();
renderDexTypeFilter2();
renderDexRarityFilter();
document.getElementById('dexResetFilter').onclick = ()=>{
  dexFilters = {search:'', type:'', type2:'', rarity:''};
  document.getElementById('dexSearch').value = '';
  renderDexTypeFilter();
  renderDexTypeFilter2();
  renderDexRarityFilter();
  renderDex();
};
