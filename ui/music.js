/* ==== ui/music.js ==== */
const MUSIC_TRACKS = {
  menu: 'assets/audio/menu.mp3',
  village: 'assets/audio/village.mp3',
  battle: 'assets/audio/battle.mp3'
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

const musicAudioA = new Audio();
const musicAudioB = new Audio();
[musicAudioA, musicAudioB].forEach(a=>{ a.loop = true; a.volume = 0; a.preload = 'auto'; });
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

function playMusicTrack(key){
  if(!key || key === currentTrackKey || !MUSIC_TRACKS[key]) return;
  currentTrackKey = key;
  const incoming = activeMusicAudio === musicAudioA ? musicAudioB : musicAudioA;
  const outgoing = activeMusicAudio;
  incoming.src = MUSIC_TRACKS[key];
  incoming.currentTime = 0;
  incoming.volume = 0;
  incoming.play().catch(()=>{});
  fadeAudioTo(incoming, musicVolume, MUSIC_FADE_MS);
  fadeAudioTo(outgoing, 0, MUSIC_FADE_MS);
  setTimeout(()=> outgoing.pause(), MUSIC_FADE_MS + 50);
  activeMusicAudio = incoming;
}

function updateMusicForActiveScreen(){
  const panels = document.querySelectorAll('.panel');
  for(const p of panels){
    if(!p.classList.contains('hidden')){
      playMusicTrack(SCREEN_MUSIC[p.id]);
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
document.addEventListener('click', unlockMusic, { once:true });
document.addEventListener('keydown', unlockMusic, { once:true });
document.addEventListener('touchstart', unlockMusic, { once:true });

const musicScreenObserver = new MutationObserver(updateMusicForActiveScreen);
document.querySelectorAll('.panel').forEach(p=>{
  musicScreenObserver.observe(p, { attributes:true, attributeFilter:['class'] });
});

document.getElementById('musicSettingsBtn').onclick = openMusicSettingsModal;
updateMusicForActiveScreen();
