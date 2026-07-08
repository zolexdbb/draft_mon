/* ==== ui/dex-viewer.js (généré depuis index.html) ==== */
function rarityKey(line, stageIdx){
  if(LEGENDARY_IDS.includes(line.id)) return 'legendaire';
  if(RARE_IDS.includes(line.id)) return 'rare';
  if(PSEUDO_IDS.includes(line.id) && stageIdx === line.stages.length-1) return 'pseudo';
  if(stageIdx === 0) return 'commun';
  return 'evo';
}

function renderDex(){
  const grid = document.getElementById('dexGrid');
  grid.innerHTML='';
  let count = 0;

  LINES.forEach(line=>{
    const allStages = [
      ...line.stages.map((sp,i)=>({sp,stageIdx:i,isBranch:false})),
      ...(line.branches ? line.branches.map(sp=>({sp,stageIdx:null,isBranch:true})) : [])
    ];
    allStages.forEach(({sp, stageIdx, isBranch})=>{
      // Filtres
      if(dexFilters.search && !sp.name.toLowerCase().includes(dexFilters.search.toLowerCase())) return;
      if(dexFilters.type && !sp.types.includes(dexFilters.type)) return;
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
        <div class="types-row">${sp.types.map(t=>`<span class="type-tag t-${t}">${t}</span>`).join('')}</div>
        <div class="stat-line">PV ${sp.base.hp} · Atq ${sp.base.atk} · Déf ${sp.base.def}</div>
        <div class="stat-line">AtqSp ${sp.base.spa} · DéfSp ${sp.base.spd} · Vit ${sp.base.spe}</div>
        <div class="dex-rate">${rateText}</div>
      `;
      grid.appendChild(card);
      count++;
    });
  });

  document.getElementById('dexCount').textContent = `${count} Pokémon affichés`;
}

document.getElementById('dexSearch').oninput = (e)=>{ dexFilters.search = e.target.value; renderDex(); };

const DEX_TYPE_OPTIONS = [
  {value:'', label:'Tous les types'},
  {value:'normal', label:'Normal'},{value:'feu', label:'Feu'},{value:'eau', label:'Eau'},
  {value:'plante', label:'Plante'},{value:'electrik', label:'Electrik'},{value:'vol', label:'Vol'},
  {value:'poison', label:'Poison'},{value:'sol', label:'Sol'},{value:'insecte', label:'Insecte'},
  {value:'combat', label:'Combat'},{value:'glace', label:'Glace'},{value:'psy', label:'Psy'},
  {value:'fantome', label:'Fantôme'},{value:'roche', label:'Roche'},{value:'dragon', label:'Dragon'},
  {value:'acier', label:'Acier'},{value:'tenebres', label:'Ténèbres'}
];
const DEX_RARITY_OPTIONS = [
  {value:'', label:'Toutes raretés'},
  {value:'commun', label:'Commun'},{value:'evo', label:'Évolution'},{value:'rare', label:'Rare'},
  {value:'pseudo', label:'Pseudo-légendaire'},{value:'legendaire', label:'Légendaire'}
];
function renderDexTypeFilter(){
  const c = document.getElementById('dexTypeFilter');
  c.innerHTML = '';
  c.appendChild(createCustomSelect({
    options: DEX_TYPE_OPTIONS, value: dexFilters.type,
    onChange: (val)=>{ dexFilters.type = val; renderDex(); }
  }));
}
function renderDexRarityFilter(){
  const c = document.getElementById('dexRarityFilter');
  c.innerHTML = '';
  c.appendChild(createCustomSelect({
    options: DEX_RARITY_OPTIONS, value: dexFilters.rarity,
    onChange: (val)=>{ dexFilters.rarity = val; renderDex(); }
  }));
}
renderDexTypeFilter();
renderDexRarityFilter();
document.getElementById('dexResetFilter').onclick = ()=>{
  dexFilters = {search:'', type:'', rarity:''};
  document.getElementById('dexSearch').value = '';
  renderDexTypeFilter();
  renderDexRarityFilter();
  renderDex();
};

/* =================== SPLASH TEXT & PATCH NOTES =================== */
