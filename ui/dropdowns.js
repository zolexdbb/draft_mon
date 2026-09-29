/* ==== Composant menu déroulant réutilisable partout dans le jeu (filtres du Dex, choix
   nature/talent dans l'éditeur...), à la place du <select> natif du navigateur. Ajoute une barre de
   recherche en haut de la liste dès qu'il y a assez d'options pour que ça vaille le coup (nature,
   talent...). ==== */
const CSEL_SEARCH_THRESHOLD = 8;
// Construit un menu déroulant (bouton déclencheur + liste d'options) à partir d'une liste {value,label,html}.
function createCustomSelect({options, value, placeholder, onChange, searchable}){
  const csel = document.createElement('div');
  csel.className = 'csel';

  const trigger = document.createElement('div');
  trigger.className = 'csel-trigger';

  const dropdown = document.createElement('div');
  dropdown.className = 'csel-dropdown';

  const renderTrigger = (val)=>{
    const opt = options.find(o=>o.value===val);
    trigger.innerHTML = opt
      ? `<span class="csel-name">${opt.html!==undefined ? opt.html : opt.label}</span><span class="csel-arrow">▾</span>`
      : `<span class="csel-name csel-empty">${placeholder||'— Choisir —'}</span><span class="csel-arrow">▾</span>`;
  };
  renderTrigger(value);

  const wantSearch = searchable!==undefined ? searchable : options.length > CSEL_SEARCH_THRESHOLD;
  let searchInput = null;
  if(wantSearch){
    const searchWrap = document.createElement('div');
    searchWrap.className = 'csel-search-wrap';
    searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'csel-search';
    searchInput.placeholder = 'Rechercher...';
    searchWrap.appendChild(searchInput);
    dropdown.appendChild(searchWrap);
    searchInput.onclick = (e)=> e.stopPropagation();
    searchInput.oninput = ()=>{
      const q = searchInput.value.trim().toLowerCase();
      dropdown.querySelectorAll('.csel-opt').forEach(o=>{
        o.classList.toggle('csel-opt-hidden', !!q && !o.textContent.toLowerCase().includes(q));
      });
    };
  }

  options.forEach(opt=>{
    const el = document.createElement('div');
    el.className = 'csel-opt' + (opt.value===value ? ' selected' : '');
    el.innerHTML = `<span class="csel-opt-name">${opt.html!==undefined ? opt.html : opt.label}</span>`;
    el.onclick = ()=>{
      value = opt.value;
      renderTrigger(value);
      dropdown.querySelectorAll('.csel-opt').forEach(o=>o.classList.remove('selected'));
      el.classList.add('selected');
      dropdown.classList.remove('open');
      trigger.classList.remove('open');
      onChange(opt.value);
    };
    dropdown.appendChild(el);
  });

  trigger.onclick = (e)=>{
    e.stopPropagation();
    const wasOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.csel-dropdown.open').forEach(d=>d.classList.remove('open'));
    document.querySelectorAll('.csel-trigger.open').forEach(d=>d.classList.remove('open'));
    if(!wasOpen){
      dropdown.classList.add('open'); trigger.classList.add('open');
      if(searchInput){ searchInput.value=''; dropdown.querySelectorAll('.csel-opt').forEach(o=>o.classList.remove('csel-opt-hidden')); setTimeout(()=>searchInput.focus(), 0); }
    }
  };

  csel.appendChild(trigger);
  csel.appendChild(dropdown);
  return csel;
}
document.addEventListener('click', ()=>{
  document.querySelectorAll('.csel-dropdown.open').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('.csel-trigger.open').forEach(d=>d.classList.remove('open'));
});

