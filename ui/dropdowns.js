/* ==== ui/dropdowns.js (généré depuis index.html) ==== */
function createCustomSelect({options, value, placeholder, onChange}){
  const csel = document.createElement('div');
  csel.className = 'csel';

  const trigger = document.createElement('div');
  trigger.className = 'csel-trigger';

  const dropdown = document.createElement('div');
  dropdown.className = 'csel-dropdown';

  const renderTrigger = (val)=>{
    const opt = options.find(o=>o.value===val);
    trigger.innerHTML = opt
      ? `<span class="csel-name">${opt.label}</span><span class="csel-arrow">▾</span>`
      : `<span class="csel-name csel-empty">${placeholder||'— Choisir —'}</span><span class="csel-arrow">▾</span>`;
  };
  renderTrigger(value);

  options.forEach(opt=>{
    const el = document.createElement('div');
    el.className = 'csel-opt' + (opt.value===value ? ' selected' : '');
    el.innerHTML = `<span class="csel-opt-name">${opt.label}</span>`;
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
    if(!wasOpen){ dropdown.classList.add('open'); trigger.classList.add('open'); }
  };

  csel.appendChild(trigger);
  csel.appendChild(dropdown);
  return csel;
}
document.addEventListener('click', ()=>{
  document.querySelectorAll('.csel-dropdown.open').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('.csel-trigger.open').forEach(d=>d.classList.remove('open'));
});

