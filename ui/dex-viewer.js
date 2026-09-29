/* ==== SOMMAIRE ====
   Le Pokédex consultable (écran Dex) : grille de toutes les espèces/formes/branches avec filtres
   (recherche, type, rareté). Sert aussi d'écran de sélection en mode développeur. Repères :
   - L.10-16 : rarityKey — catégorie de rareté utilisée par le filtre (distinct de rarityInfo)
   - L.18-fin(71): renderDex — construit la grille filtrée (une carte par stade/branche de chaque lignée)
   - L.75-fin : filtres (listes d'options type/rareté + les 3 menus déroulants + réinitialisation)
   - openDexDetail : fenêtre de détail d'une carte (stats, talents, chaîne d'évolution, movepool complet)
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
      // Comportement par défaut : ouvre la fiche détail (voir openDexDetail). En mode développeur, le hook
      // peut le remplacer (sélection libre d'équipe) — mais seulement quand il le veut vraiment, sinon la
      // fiche détail reste disponible même avec les outils de dev chargés.
      card.style.cursor = 'pointer';
      card.onclick = ()=> openDexDetail(line, isBranch ? null : stageIdx, isBranch ? branchIdx : null);
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

// Couleur de la barre de stat de base selon sa valeur (même code couleur que l'éditeur d'équipe).
function dexStatBarColor(val){
  if(val>=150) return '#6F35FC';
  if(val>=110) return '#EE8130';
  if(val>=80)  return '#7AC74C';
  if(val>=50)  return '#F7D02C';
  return '#C22E28';
}
function dexStatBarHTML(label, val){
  const pct = Math.min(100, Math.round(val/255*100));
  return `<div class="stat-bar-row">
    <span class="stat-bar-label">${label}</span>
    <span class="stat-bar-val">${val}</span>
    <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%;background:${dexStatBarColor(val)};"></div></div>
  </div>`;
}
// Fenêtre de détail d'une carte du Dex : sprite (avec aperçu shiny et, s'il existe, Méga/Gigamax),
// stats de base, talents (avec description), chaîne d'évolution complète de la lignée (cliquable
// pour naviguer d'un stade/branche à l'autre) et movepool complet (recherche + Physiques/Spéciales/Statut).
function openDexDetail(line, stageIdx, branchIdx){
  const isBranch = branchIdx!==null && branchIdx!==undefined;
  const member = { lineId: line.id, stage: isBranch ? line.stages.length-1 : stageIdx, branch: isBranch ? branchIdx : null };
  const sp = speciesOf(member);
  const baseAbilities = abilitiesFor(member);
  const movepool = movepoolFor(member);
  const physMoves = movepool.filter(id=>MOVES[id] && MOVES[id].cat==='phys').sort((a,b)=>(MOVES[b].power||0)-(MOVES[a].power||0));
  const specMoves = movepool.filter(id=>MOVES[id] && MOVES[id].cat==='spec').sort((a,b)=>(MOVES[b].power||0)-(MOVES[a].power||0));
  const statusMoves = movepool.filter(id=>MOVES[id] && MOVES[id].cat==='status');

  // Formes alternatives consultables (aperçu uniquement, ne change pas la lignée réellement affichée) :
  // chaque Méga-Évolution propre à cette espèce (sp.forms), et sa forme Gigamax si la lignée en a une
  // (GIGAMAX_LINES) et qu'on regarde bien une forme finale (comme dans les vrais jeux).
  const megaKeys = Object.keys(sp.forms || {});
  const isFinalForm = isBranch || stageIdx === line.stages.length-1;
  const gigamaxSpriteId = (isFinalForm && typeof GIGAMAX_LINES!=='undefined' && GIGAMAX_LINES[line.id]) ? GIGAMAX_SPRITE_IDS[sp.name] : null;

  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';

  const chainEntries = [
    ...line.stages.map((s,i)=>({sp:s, onClick:()=>openDexDetail(line, i, null), current: !isBranch && i===stageIdx})),
    ...(line.branches ? line.branches.map((b,i)=>({sp:b, onClick:()=>openDexDetail(line, null, i), current: isBranch && i===branchIdx})) : [])
  ];
  const chainHTML = chainEntries.map((e,i)=>`
    ${i>0 && !(line.branches && i===line.stages.length) ? '<span class="dex-chain-arrow">→</span>' : (i===line.stages.length && line.branches ? '<span class="dex-chain-arrow">⑂</span>' : '')}
    <button class="dex-chain-node${e.current?' current':''}" data-idx="${i}">
      <span style="width:34px;height:34px;display:block;">${getSpriteHTML(e.sp.name, null)}</span>
      <span class="dex-chain-name">${e.sp.name}</span>
    </button>`).join('');

  const moveRowHTML = id=>{
    const mv = MOVES[id];
    return `<div class="dex-move-row">
      ${typeTagHTML(mv.type, {style:'font-size:8px;padding:2px 7px;flex-shrink:0;'})}
      <span class="dex-move-name">${mv.name}</span>
      <span class="cat-chip cat-${mv.cat}">${mv.cat==='phys'?'Phys':mv.cat==='spec'?'Spéc':'Statut'}</span>
      <span class="dex-move-power">${mv.cat!=='status'?mv.power:'—'}</span>
    </div>`;
  };
  const moveListHTML = `
    <div class="csel-search-wrap" style="position:static;padding:0 0 8px;border-bottom:none;">
      <input type="text" id="dexMoveSearch" class="csel-search" placeholder="Rechercher une attaque...">
    </div>
    <div class="dex-move-list">
      ${physMoves.length ? `<div class="csel-group-label">⚔️ Physiques</div>${physMoves.map(moveRowHTML).join('')}` : ''}
      ${specMoves.length ? `<div class="csel-group-label">✨ Spéciales</div>${specMoves.map(moveRowHTML).join('')}` : ''}
      ${statusMoves.length ? `<div class="csel-group-label">🌀 Statut</div>${statusMoves.map(moveRowHTML).join('')}` : ''}
    </div>`;

  // État de l'aperçu (forme + shiny), indépendant de ce qui est réellement affiché ailleurs (Dex/équipe) :
  // ce n'est qu'une consultation, rien n'est enregistré.
  let viewForm = 'base'; // 'base' | 'gigamax' | une clé de sp.forms
  let viewShiny = false;
  function resolveView(){
    if(viewForm==='gigamax') return { name:`${sp.name} Gigamax`, types:sp.types, base:sp.base, abilities:baseAbilities, spriteId:gigamaxSpriteId, spriteName:sp.name };
    if(viewForm!=='base' && sp.forms && sp.forms[viewForm]){
      const f = sp.forms[viewForm];
      return { name:f.name, types:f.types, base:f.base, abilities:f.abilities||baseAbilities, spriteId:null, spriteName:f.name };
    }
    return { name:sp.name, types:sp.types, base:sp.base, abilities:baseAbilities, spriteId:null, spriteName:sp.name };
  }
  function formToggleHTML(){
    if(!megaKeys.length && !gigamaxSpriteId) return '';
    const btn = (key, label, icon) => `<button class="btn secondary dex-form-btn${viewForm===key?' active':''}" data-form="${key}" style="padding:5px 10px;font-size:9px;width:auto;">${icon} ${label}</button>`;
    return `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
      ${btn('base', sp.name, '◆')}
      ${megaKeys.map(k=>btn(k, sp.forms[k].name, '💎')).join('')}
      ${gigamaxSpriteId ? btn('gigamax', 'Gigamax', '🔴') : ''}
    </div>`;
  }
  function topHTML(){
    const v = resolveView();
    return `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
        <div style="width:64px;height:64px;flex-shrink:0;">${getSpriteHTML(v.spriteName, null, 'front', false, viewShiny, v.spriteId)}</div>
        <div>
          <h2 style="margin:0;">${v.name}</h2>
          <div style="font-size:10px;color:var(--text-dim);margin:2px 0 6px;">N°${DEX_NUMBERS[sp.name]||'?'}</div>
          <div class="types-row">${v.types.map(t=>typeTagHTML(t)).join('')}</div>
        </div>
      </div>
      <div style="margin-bottom:14px;">
        <button class="btn secondary dex-shiny-btn${viewShiny?' active':''}" id="dexShinyToggleBtn" style="padding:5px 10px;font-size:9px;width:auto;">✨ ${viewShiny?'Voir la forme normale':'Voir en chromatique'}</button>
        ${formToggleHTML()}
      </div>
      <div class="editor-section">
        <div class="editor-section-title">Stats de base</div>
        <div class="stat-bars">
          ${dexStatBarHTML('PV', v.base.hp)}
          ${dexStatBarHTML('Atq', v.base.atk)}
          ${dexStatBarHTML('Déf', v.base.def)}
          ${dexStatBarHTML('AtqSp', v.base.spa)}
          ${dexStatBarHTML('DéfSp', v.base.spd)}
          ${dexStatBarHTML('Vit', v.base.spe)}
        </div>
      </div>
      <div class="editor-section">
        <div class="editor-section-title">Talents</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${v.abilities.map(a=>`<div><b style="color:var(--text-main);font-size:11px;">${a}</b><div class="effect-desc" style="margin-top:2px;">${ABILITY_DESC[a]||''}</div></div>`).join('')}
        </div>
      </div>`;
  }
  function bindTop(){
    document.getElementById('dexShinyToggleBtn').onclick = ()=>{ viewShiny = !viewShiny; refreshTop(); };
    topEl.querySelectorAll('.dex-form-btn').forEach(btn=>{
      btn.onclick = ()=>{ viewForm = btn.dataset.form; refreshTop(); };
    });
  }
  function refreshTop(){ topEl.innerHTML = topHTML(); bindTop(); }

  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:520px;position:relative;">
      <button class="patchnotes-close" id="dexDetailCloseBtn">✕</button>
      <div id="dexDetailTop"></div>
      ${chainEntries.length>1 ? `
      <div class="editor-section">
        <div class="editor-section-title">Chaîne d'évolution</div>
        <div class="dex-chain-row">${chainHTML}</div>
      </div>` : ''}
      <div class="editor-section">
        <div class="editor-section-title">Attaques (${movepool.length})</div>
        ${moveListHTML}
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const topEl = document.getElementById('dexDetailTop');
  refreshTop();
  const close = ()=> overlay.remove();
  document.getElementById('dexDetailCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  overlay.querySelectorAll('.dex-chain-node').forEach((btn,i)=>{
    btn.onclick = ()=>{ close(); chainEntries[i].onClick(); };
  });
  const moveSearch = document.getElementById('dexMoveSearch');
  moveSearch.oninput = ()=>{
    const q = moveSearch.value.trim().toLowerCase();
    let curGroup = null, groupHasVisible = false;
    overlay.querySelectorAll('.dex-move-row, .csel-group-label').forEach(el=>{
      if(el.classList.contains('csel-group-label')){
        if(curGroup) curGroup.classList.toggle('csel-opt-hidden', !groupHasVisible);
        curGroup = el; groupHasVisible = false;
        return;
      }
      const visible = !q || el.textContent.toLowerCase().includes(q);
      el.classList.toggle('csel-opt-hidden', !visible);
      if(visible) groupHasVisible = true;
    });
    if(curGroup) curGroup.classList.toggle('csel-opt-hidden', !groupHasVisible);
  };
}
