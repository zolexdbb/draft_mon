/* ==== ui/editor.js (généré depuis index.html) ==== */
function showBuilder(){
  document.getElementById('screenDraft').classList.add('hidden');
  document.getElementById('screenBuilder').classList.remove('hidden');
  editingIndex = null;
  document.getElementById('editor').classList.add('hidden');
  renderTeamGrid();
}
function isConfigured(member){
  return member.moves.every(m=>m!==null) && new Set(member.moves).size===4;
}
function renderTeamGrid(){
  const grid = document.getElementById('teamGrid');
  grid.innerHTML='';
  team.forEach((m, idx)=>{
    const sp = speciesOf(m);
    const configured = isConfigured(m);
    const nature = m.nature && m.nature.name !== 'Hardi' ? m.nature.name : '';
    const ability = m.ability || (abilitiesFor(m)[0]||'');
    const card = document.createElement('div');
    card.className = 'team-card' + (configured ? ' configured' : '');
    card.innerHTML = `
      <div class="team-card-header">
        <div class="team-card-sprite">${getSpriteHTML(sp.name, m.unownForm)}</div>
        <div class="team-card-info">
          <div class="pname">${sp.name}</div>
          <div class="types-row" style="justify-content:flex-start;margin:3px 0;">
            ${sp.types.map(t=>typeTagHTML(t)).join('')}
          </div>
          ${ability ? `<div style="font-size:9px;color:var(--text-dim);margin-top:2px;">${ability}</div>` : ''}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
          ${idx===0 ? '<span class="lead-badge">LEAD</span>' : ''}
          <span class="status-chip ${configured?'':'unconfigured'}">${configured?'✓ Prêt':'À config'}</span>
        </div>
      </div>
      <div class="team-card-footer">
        <div style="color:var(--text-dim);font-size:9px;">${nature ? nature : 'Nature : Hardi'} ${m.moves.filter(Boolean).length > 0 ? '· '+m.moves.filter(Boolean).length+'/4 attaques' : ''}</div>
        <div class="order-btns">
          <button class="order-btn moveOrderBtn" data-dir="-1" data-idx="${idx}" ${idx===0?'disabled':''}>◀</button>
          <button class="order-btn moveOrderBtn" data-dir="1" data-idx="${idx}" ${idx===team.length-1?'disabled':''}>▶</button>
        </div>
      </div>
    `;
    card.querySelector('.team-card-header').onclick = ()=> openEditor(idx);
    grid.appendChild(card);
  });
  grid.querySelectorAll('.moveOrderBtn').forEach(btn=>{
    btn.onclick = (e)=>{
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const dir = parseInt(btn.dataset.dir);
      const target = idx+dir;
      if(target<0 || target>=team.length) return;
      [team[idx], team[target]] = [team[target], team[idx]];
      renderTeamGrid();
    };
  });
  document.getElementById('validateTeamBtn').disabled = !team.every(isConfigured);
}

/* =================== GENERIC CUSTOM SELECT (style attaques) =================== */
function openEditor(idx){
  editingIndex = idx;
  const m = team[idx];
  const line = lineOf(m.lineId);
  const sp = speciesOf(m);
  const ed = document.getElementById('editor');
  ed.classList.remove('hidden');

  const evTotal = Object.values(m.evs).reduce((a,b)=>a+b,0);
  const isBranched = !!(line.branches && m.branch!==undefined && m.branch!==null);
  const hasNextStage = !line.branches && line.stages.length > m.stage+1;
  const abilities = abilitiesFor(m);

  // Stat bars helper
  const statBarColor = (val) => {
    if(val>=150) return '#6F35FC';
    if(val>=110) return '#EE8130';
    if(val>=80)  return '#7AC74C';
    if(val>=50)  return '#F7D02C';
    return '#C22E28';
  };
  const statBar = (stat, val, label) => {
    const cls = m.nature.plus===stat?'nature-plus':m.nature.minus===stat?'nature-minus':'';
    const pct = Math.min(100, Math.round(val/255*100));
    return `<div class="stat-bar-row ${cls}">
      <span class="stat-bar-label">${label}</span>
      <span class="stat-bar-val">${val}</span>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%;background:${statBarColor(val)};"></div></div>
    </div>`;
  };
  const evolveSection = line.branches ? `
    <div class="editor-section">
      <div class="editor-section-title">Évolution</div>
      ${isBranched
        ? `<button class="btn secondary" disabled style="font-size:10px;">Déjà évolué en ${sp.name}</button>`
        : line.branches.map((b,bi)=>`<button class="btn secondary evolveBranchBtn" data-branch="${bi}" style="margin:3px;font-size:10px;">→ ${b.name}</button>`).join('')
      }
    </div>` : (line.stages.length>1 ? `
    <div class="editor-section">
      <div class="editor-section-title">Évolution</div>
      <button class="btn secondary" id="evolveBtn" ${!hasNextStage?'disabled':''} style="font-size:10px;">
        ${hasNextStage ? `→ Évoluer en ${line.stages[m.stage+1].name}` : `Stade final — ${sp.name}`}
      </button>
    </div>` : '');

  ed.innerHTML = `
    <div class="editor-topbar">
      <div class="editor-sprite">${getSpriteHTML(sp.name, m.unownForm)}</div>
      <div class="editor-ident">
        <h3>${sp.name}</h3>
        <div class="types-row" style="justify-content:flex-start;margin-bottom:4px;">
          ${sp.types.map(t=>typeTagHTML(t)).join('')}
        </div>
        <div style="font-size:9px;color:var(--text-dim);">N°${DEX_NUMBERS[sp.name]||'?'} · ${line.stages.map(s=>s.name).join(' → ')}</div>
      </div>
    </div>
    <div class="editor-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div>
          <div class="editor-section">
            <div class="editor-section-title">Stats de base</div>
            <div class="stat-bars">
              ${statBar('hp',sp.base.hp,'PV')}
              ${statBar('atk',sp.base.atk,'Atq')}
              ${statBar('def',sp.base.def,'Déf')}
              ${statBar('spa',sp.base.spa,'AtqSp')}
              ${statBar('spd',sp.base.spd,'DéfSp')}
              ${statBar('spe',sp.base.spe,'Vit')}
            </div>
          </div>
          <div class="editor-section">
            <div class="editor-section-title">Nature & Talent</div>
            <div style="margin-bottom:8px;">
              <label style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:3px;">Nature</label>
              <div id="natureSelect"></div>
            </div>
            <div>
              <label style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:3px;">Talent</label>
              <div id="abilitySelect"></div>
              <div class="effect-desc" id="abilityDesc" style="margin-top:5px;">${ABILITY_DESC[m.ability||abilities[0]]||''}</div>
            </div>
          </div>
          ${evolveSection}
        </div>
        <div>
          <div class="editor-section">
            <div class="editor-section-title">IV (0–31)</div>
            <div class="iv-grid" id="ivGrid"></div>
          </div>
          <div class="editor-section">
            <div class="editor-section-title">EV (0–252 · 510 max)</div>
            <div class="ev-grid" id="evGrid"></div>
            <div class="ev-total" id="evTotal">${evTotal} / 510</div>
          </div>
        </div>
      </div>
      <div class="editor-section" style="margin-top:4px;">
        <div class="editor-section-title">Attaques — 4 emplacements</div>
        <div id="movesPick"></div>
      </div>
    </div>
    <div class="editor-actions">
      <button class="btn secondary" id="closeEditorBtn">Fermer</button>
    </div>
  `;

  const ivGrid = document.getElementById('ivGrid');
  ['hp','atk','def','spa','spd','spe'].forEach(stat=>{
    const row = document.createElement('div'); row.className='iv-row';
    row.innerHTML = `<label>${STAT_LABEL[stat]}</label><input type="number" min="0" max="31" value="${m.ivs[stat]}" data-stat="${stat}" class="ivInput">`;
    ivGrid.appendChild(row);
  });
  ivGrid.querySelectorAll('.ivInput').forEach(inp=>{
    inp.onchange = ()=>{
      let v = Math.max(0, Math.min(31, parseInt(inp.value)||0));
      m.ivs[inp.dataset.stat] = v;
      inp.value = v;
    };
  });

  const evGrid = document.getElementById('evGrid');
  ['hp','atk','def','spa','spd','spe'].forEach(stat=>{
    const row = document.createElement('div'); row.className='ev-row';
    row.innerHTML = `<label>${STAT_LABEL[stat]}</label><input type="number" min="0" max="252" step="4" value="${m.evs[stat]}" data-stat="${stat}" class="evInput">`;
    evGrid.appendChild(row);
  });
  function refreshEvTotal(){
    const total = Object.values(m.evs).reduce((a,b)=>a+b,0);
    const el = document.getElementById('evTotal');
    el.textContent = `${total} / 510 utilisés`;
    el.className = 'ev-total' + (total>510 ? ' over' : '');
  }
  evGrid.querySelectorAll('.evInput').forEach(inp=>{
    inp.onchange = ()=>{
      let v = Math.max(0, Math.min(252, parseInt(inp.value)||0));
      m.evs[inp.dataset.stat] = v;
      inp.value = v;
      refreshEvTotal();
    };
  });

  const movepool = movepoolFor(m);
  const movesPick = document.getElementById('movesPick');
  movesPick.innerHTML='';

  function buildMoveDropdown(slot){
    const otherSelected = m.moves.filter((mv,i)=>i!==slot && mv!==null);
    const options = movepool.filter(mid => !otherSelected.includes(mid) || mid===m.moves[slot]);
    const currentId = m.moves[slot];
    const currentMv = currentId ? MOVES[currentId] : null;

    const row = document.createElement('div');
    row.className='move-select-row';

    // Slot label
    const slotLabel = document.createElement('span');
    slotLabel.className='slot-label';
    slotLabel.textContent=`ATK ${slot+1}`;
    row.appendChild(slotLabel);

    // Custom dropdown container
    const csel = document.createElement('div');
    csel.className='csel';

    // Trigger (visible button)
    const trigger = document.createElement('div');
    trigger.className='csel-trigger';
    const renderTrigger = (mv, mid) => {
      trigger.innerHTML = mv
        ? `${typeTagHTML(mv.type, {style:'font-size:8px;padding:2px 7px;'})}
           <span class="csel-name">${mv.name}</span>
           <span class="cat-chip cat-${mv.cat}">${mv.cat==='phys'?'Phys':mv.cat==='spec'?'Spéc':'Statut'}</span>
           ${mv.cat!=='status'?`<span class="csel-power">${mv.power}</span>`:''}
           <span class="csel-arrow">▾</span>`
        : `<span class="csel-name csel-empty">— Choisir une attaque —</span><span class="csel-arrow">▾</span>`;
    };
    renderTrigger(currentMv, currentId);

    // Dropdown list
    const dropdown = document.createElement('div');
    dropdown.className='csel-dropdown';

    // Empty option
    const emptyOpt = document.createElement('div');
    emptyOpt.className='csel-opt' + (!currentId?' selected':'');
    emptyOpt.innerHTML=`<span class="csel-opt-empty">— Aucune attaque —</span>`;
    emptyOpt.onclick=()=>{
      m.moves[slot]=null;
      renderTrigger(null,null);
      dropdown.classList.remove('open');
      trigger.classList.remove('open');
      // Update desc
      const descEl = row.querySelector('.move-desc');
      if(descEl) descEl.textContent='';
      renderTeamGrid();
    };
    dropdown.appendChild(emptyOpt);

    // Group by category for visual separation
    ['phys','spec','status'].forEach(cat=>{
      const catMoves = options.filter(mid=>MOVES[mid].cat===cat);
      if(!catMoves.length) return;
      const sep = document.createElement('div');
      const catLabel = cat==='phys'?'⚔️ Physiques':cat==='spec'?'✨ Spéciales':'🌀 Statut';
      sep.style.cssText='padding:4px 10px 2px;font-size:8px;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);background:rgba(0,0,0,.3);border-bottom:1px solid rgba(255,255,255,.04);';
      sep.textContent=catLabel;
      dropdown.appendChild(sep);
      catMoves.forEach(mid=>{
        const mv=MOVES[mid];
        const opt=document.createElement('div');
        opt.className='csel-opt'+(mid===currentId?' selected':'');
        opt.innerHTML=`
          ${typeTagHTML(mv.type, {style:'font-size:8px;padding:2px 7px;flex-shrink:0;'})}
          <span class="csel-opt-name">${mv.name}</span>
          <span class="cat-chip cat-${mv.cat}">${mv.cat==='phys'?'Phys':mv.cat==='spec'?'Spéc':'Statut'}</span>
          <span class="csel-opt-power">${mv.cat!=='status'?mv.power:'—'}</span>
        `;
        opt.onclick=()=>{
          m.moves[slot]=mid;
          renderTrigger(mv,mid);
          dropdown.classList.remove('open');
          trigger.classList.remove('open');
          // Update desc
          const descEl=row.querySelector('.move-desc');
          if(descEl) descEl.textContent=mv.desc||'';
          renderTeamGrid();
          // Rebuild all slots to avoid duplicates
          buildAllMoveSlots();
        };
        dropdown.appendChild(opt);
      });
    });

    trigger.onclick=(e)=>{
      e.stopPropagation();
      const wasOpen=dropdown.classList.contains('open');
      // Close all
      document.querySelectorAll('.csel-dropdown.open').forEach(d=>d.classList.remove('open'));
      document.querySelectorAll('.csel-trigger.open').forEach(d=>d.classList.remove('open'));
      if(!wasOpen){ dropdown.classList.add('open'); trigger.classList.add('open'); }
    };

    csel.appendChild(trigger);
    csel.appendChild(dropdown);

    const descEl=document.createElement('div');
    descEl.className='effect-desc move-desc';
    descEl.style.marginTop='3px';
    descEl.textContent=currentMv?currentMv.desc||'':'';

    const col=document.createElement('div');
    col.style.flex='1';
    col.appendChild(csel);
    col.appendChild(descEl);

    row.appendChild(col);
    return row;
  }

  function buildAllMoveSlots(){
    movesPick.innerHTML='';
    for(let slot=0;slot<4;slot++){
      movesPick.appendChild(buildMoveDropdown(slot));
    }
  }
  buildAllMoveSlots();

  document.getElementById('natureSelect').appendChild(createCustomSelect({
    options: NATURES.map(n=>({value:n.name, label:n.name+(n.plus?` (+${STAT_LABEL[n.plus]}/-${STAT_LABEL[n.minus]})`:'')})),
    value: m.nature.name,
    onChange: (val)=>{
      m.nature = NATURES.find(n=>n.name===val);
      openEditor(idx);
    }
  }));
  document.getElementById('abilitySelect').appendChild(createCustomSelect({
    options: abilities.map(a=>({value:a, label:a})),
    value: m.ability || abilities[0],
    onChange: (val)=>{
      m.ability = val;
      document.getElementById('abilityDesc').textContent = ABILITY_DESC[m.ability]||'';
    }
  }));
  if(!m.ability) m.ability = abilities[0];

  if(line.branches){
    ed.querySelectorAll('.evolveBranchBtn').forEach(btn=>{
      btn.onclick = ()=>{
        m.branch = parseInt(btn.dataset.branch);
        m.stage = 1;
        m.ability = null;
        openEditor(idx);
        renderTeamGrid();
      };
    });
  } else if(line.stages.length>1){
    document.getElementById('evolveBtn').onclick = ()=>{
      if(hasNextStage){ m.stage += 1; openEditor(idx); renderTeamGrid(); }
    };
  }
  document.getElementById('closeEditorBtn').onclick = ()=>{
    ed.classList.add('hidden');
    editingIndex = null;
  };
}

document.getElementById('validateTeamBtn').onclick = ()=>{
  finalizeTeamAndGoToTower();
};

/* =================== TOWER =================== */
