/* ==== ui/music.js ==== */
// Chaque clé pointe vers une liste de pistes (playlist). Une seule piste = boucle simple.
// Plusieurs pistes = lecture aléatoire (sans répéter deux fois de suite la même) avant de reboucler.
const MUSIC_TRACKS = {
  menu: ['assets/audio/menu/menu.mp3'],
  village: ['assets/audio/village/village.mp3'],
  battle: ['assets/audio/battle/battle.mp3']
};
// Musique dédiée par type pour les Maîtres de Type rencontrés en combat (étages boss de la tour).
// Placez les OST de dresseurs dans assets/audio/dresseur/ et ajoutez une entrée par type
// (ex: feu: ['assets/audio/dresseur/feu.mp3']) pour lui donner sa propre musique ou playlist ;
// les types sans entrée utilisent la playlist "battle" par défaut.
const TYPE_MUSIC = {
  normal:   ['assets/audio/dresseur/Larry.mp3'],
  feu:      ['assets/audio/dresseur/flannery.mp3'],
  eau:      ['assets/audio/dresseur/Misty.mp3'],
  plante:   ['assets/audio/dresseur/Erika.mp3'],
  electrik: ['assets/audio/dresseur/Iono.mp3'],
  vol:      ['assets/audio/dresseur/Kahili.mp3'],
  poison:   ['assets/audio/dresseur/Koga.mp3'],
  sol:      ['assets/audio/dresseur/Rika.mp3'],
  insecte:  ['assets/audio/dresseur/katy.mp3'],
  combat:   ['assets/audio/dresseur/bea.mp3'],
  glace:    ['assets/audio/dresseur/Candice.mp3'],
  psy:      ['assets/audio/dresseur/Sabrina.mp3'],
  fantome:  ['assets/audio/dresseur/Phoebe.mp3'],
  roche:    ['assets/audio/dresseur/Brock.mp3'],
  dragon:   ['assets/audio/dresseur/Lance.mp3'],
  acier:    ['assets/audio/dresseur/Steven.mp3'],
  tenebres: ['assets/audio/dresseur/Karen.mp3'],
  fee:      ['assets/audio/dresseur/Jacinthe.mp3'],
};
const SCREEN_MUSIC = {
  screenMenu: 'menu', screenDex: 'menu', screenEnd: 'menu',
  screenDraft: 'village', screenBuilder: 'village', screenVillage: 'village', screenTower: 'village',
  screenBattle: 'battle'
};
const MUSIC_FADE_MS = 700;

let musicVolume = parseFloat(localStorage.getItem('draftArenaMusicVolume'));
if(isNaN(musicVolume)) musicVolume = 0.4;
let musicUnlocked = false;
let currentTrackKey = null;
let playlistState = null; // { key, order:[idx...], pos }

const musicAudioA = new Audio();
const musicAudioB = new Audio();
[musicAudioA, musicAudioB].forEach(a=>{
  a.volume = 0; a.preload = 'auto';
  a.addEventListener('ended', ()=>{ if(a === activeMusicAudio) advancePlaylist(); });
});
let activeMusicAudio = musicAudioA;

function fadeAudioTo(audio, targetVolume, duration){
  const start = audio.volume;
  const startTime = performance.now();
  function step(now){
    const t = Math.min(1, (now - startTime) / duration);
    audio.volume = start + (targetVolume - start) * t;
    if(t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function shuffledOrder(n){
  const arr = Array.from({length:n}, (_,i)=>i);
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

// Résout la clé effective d'une capacité vers sa liste de pistes (gère le préfixe "battle:<type>").
function resolveTrackList(key){
  if(!key) return [];
  if(key.startsWith('battle:')){
    const type = key.slice('battle:'.length);
    const list = TYPE_MUSIC[type];
    return (list && list.length) ? list : MUSIC_TRACKS.battle;
  }
  return MUSIC_TRACKS[key] || [];
}

// Détermine la clé musicale à jouer pour un panneau donné (le combat peut avoir une musique
// spécifique selon le Maître de Type affronté).
function getEffectiveMusicKey(panelId){
  if(panelId === 'screenBattle'){
    const trainer = (typeof battleState !== 'undefined' && battleState) ? battleState.trainer : null;
    const masterType = trainer && trainer.masterType;
    if(masterType && TYPE_MUSIC[masterType] && TYPE_MUSIC[masterType].length) return 'battle:' + masterType;
  }
  return SCREEN_MUSIC[panelId];
}

function playTrackFile(src, shouldLoop){
  const incoming = activeMusicAudio === musicAudioA ? musicAudioB : musicAudioA;
  const outgoing = activeMusicAudio;
  incoming.loop = shouldLoop;
  incoming.src = src;
  incoming.currentTime = 0;
  incoming.volume = 0;
  incoming.play().catch(()=>{});
  fadeAudioTo(incoming, musicVolume, MUSIC_FADE_MS);
  fadeAudioTo(outgoing, 0, MUSIC_FADE_MS);
  setTimeout(()=> outgoing.pause(), MUSIC_FADE_MS + 50);
  activeMusicAudio = incoming;
}

function advancePlaylist(){
  if(!playlistState) return;
  const tracks = resolveTrackList(playlistState.key);
  if(tracks.length <= 1) return; // piste unique : la boucle native s'en charge
  playlistState.pos++;
  if(playlistState.pos >= playlistState.order.length){
    let newOrder = shuffledOrder(tracks.length);
    const lastIdx = playlistState.order[playlistState.order.length - 1];
    if(newOrder.length > 1 && newOrder[0] === lastIdx){
      [newOrder[0], newOrder[1]] = [newOrder[1], newOrder[0]];
    }
    playlistState.order = newOrder;
    playlistState.pos = 0;
  }
  playTrackFile(tracks[playlistState.order[playlistState.pos]], false);
}

function playMusicKey(key){
  if(!key || key === currentTrackKey) return;
  const tracks = resolveTrackList(key);
  if(!tracks.length) return;
  currentTrackKey = key;
  playlistState = { key, order: shuffledOrder(tracks.length), pos: 0 };
  playTrackFile(tracks[playlistState.order[0]], tracks.length <= 1);
}

function updateMusicForActiveScreen(){
  const panels = document.querySelectorAll('.panel');
  for(const p of panels){
    if(!p.classList.contains('hidden')){
      playMusicKey(getEffectiveMusicKey(p.id));
      return;
    }
  }
}

function setMusicVolume(vol){
  musicVolume = Math.max(0, Math.min(1, vol));
  try { localStorage.setItem('draftArenaMusicVolume', String(musicVolume)); } catch(e){}
  fadeAudioTo(activeMusicAudio, musicVolume, 150);
}

function unlockMusic(){
  if(musicUnlocked) return;
  musicUnlocked = true;
  if(!currentTrackKey) updateMusicForActiveScreen();
  activeMusicAudio.volume = 0;
  activeMusicAudio.play().then(()=>{
    fadeAudioTo(activeMusicAudio, musicVolume, MUSIC_FADE_MS);
  }).catch(()=>{});
}

function openMusicSettingsModal(){
  const overlay = document.createElement('div');
  overlay.className = 'patchnotes-overlay';
  overlay.innerHTML = `
    <div class="patchnotes-modal" style="max-width:340px;position:relative;">
      <button class="patchnotes-close" id="musicSettingsCloseBtn">✕</button>
      <h2>◆ PARAMÈTRES ◆</h2>
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:10px;">Volume de la musique</div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:14px;">🔈</span>
        <input type="range" id="musicVolumeSlider" min="0" max="100" value="${Math.round(musicVolume*100)}" style="flex:1;">
        <span style="font-size:14px;">🔊</span>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = ()=> overlay.remove();
  document.getElementById('musicSettingsCloseBtn').onclick = close;
  overlay.onclick = (e)=>{ if(e.target===overlay) close(); };
  document.getElementById('musicVolumeSlider').oninput = (e)=> setMusicVolume(parseInt(e.target.value)/100);
}
// capture:true : garantit que le déverrouillage se déclenche dès la toute première interaction,
// même si un gestionnaire descendant (dropdown, éditeur...) appelle stopPropagation() en phase bulle.
window.addEventListener('pointerdown', unlockMusic, { once:true, capture:true });
window.addEventListener('keydown', unlockMusic, { once:true, capture:true });
window.addEventListener('touchstart', unlockMusic, { once:true, capture:true });

const musicScreenObserver = new MutationObserver(updateMusicForActiveScreen);
document.querySelectorAll('.panel').forEach(p=>{
  musicScreenObserver.observe(p, { attributes:true, attributeFilter:['class'] });
});

document.getElementById('musicSettingsBtn').onclick = openMusicSettingsModal;
updateMusicForActiveScreen();
