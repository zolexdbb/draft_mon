/* ==== SOMMAIRE ====
   Pokédex n°810 à 898 (région de Galar) + 14 lignées de Formes de Galar + contenu DLC. Repères
   (lignes approximatives) :
   - L.3-148   : Starters, lignées classiques de Galar, fossiles combinés
   - L.149-188 : Légendaires de Galar (Zacian/Zamazenta/Éthernatos) + DLC (Wushours/Shifours,
     Zarude, Régieleki, Régidrago, Blizzeval/Spectreval, Sylveroy)
   - L.189-241 : Formes de Galar (lignées séparées, réutilisent le n° de Pokédex national)
   - L.242-fin : DEX_NUMBERS_GEN8 (numéros de Pokédex, utilisés pour résoudre les sprites)
==== */
const LINES_GEN8 = [
{id:'ouistempo',abilities:['Engrais','Copeaux Surge'],moveIds:['scratch','growl','vinewhip','branchpoke','razorleaf','leafblade','drumbeating','synthesis','grassyglide','solarblade','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','closecombat','sunnyday','raindance','takedown','bodyslam','gigadrain','doubleedge','tackle','bulletseed','bulldoze','rockslide','magicalleaf','thief','brickbreak','curse','dig','earthquake','lightscreen','scaryface','rocktomb','knockoff','zenheadbutt','focusblast'],
 stages:[
  {name:'Ouistempo',types:['plante'],base:st(50,65,50,40,40,65)},
  {name:'Badabouin',types:['plante'],base:st(70,85,70,55,60,80)},
  {name:'Gorythmic',types:['plante'],base:st(100,125,90,60,70,85)}]},
{id:'flambino',abilities:['Brasier','Libéro'],moveIds:['scratch','growl','ember','flamewheel','doublekick','pyroball','flamethrower','fireblast','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','closecombat','suckerpunch','sunnyday','takedown','bodyslam','raindance','solarbeam','rockslide','dig','rocktomb','bulldoze','thief','heatwave','willowisp','tackle','overheat','earthquake','firespin','brickbreak','taunt','zenheadbutt','scaryface','focusblast','shadowball','curse','stoneedge'],
 stages:[
  {name:'Flambino',types:['feu'],base:st(50,71,40,40,40,69)},
  {name:'Lapyro',types:['feu'],base:st(65,86,60,55,60,94)},
  {name:'Pyrobut',types:['feu'],base:st(80,116,75,65,75,119)}]},
{id:'larmeleon',abilities:['Torrent','Sniper'],moveIds:['pound','watergun','disarmingvoice','snipeshot','icebeam','surf','hydropump','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','dazzlinggleam','raindance','takedown','waterpulse','icywind','bodyslam','blizzard','waterfall','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','tackle','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam'],
 stages:[
  {name:'Larméléon',types:['eau'],base:st(50,40,40,70,40,70)},
  {name:'Arrozard',types:['eau'],base:st(65,60,55,95,55,90)},
  {name:'Lézargus',types:['eau'],base:st(70,85,65,125,65,120)}]},
{id:'rongourmand',abilities:['Gloutonnerie','Mûrissement'],moveIds:['tackle','bite','superfang','stuffcheeks','bodyslam','crunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','earthquake','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface'],
 stages:[
  {name:'Rongourmand',types:['normal'],base:st(70,55,55,35,35,25)},
  {name:'Rongrigou',types:['normal'],base:st(120,95,95,55,75,20)}]},
{id:'minisange',abilities:['Regard Vif','Armure Miroir'],moveIds:['peck','growl','quickattack','pursuit','beakblast','dualwingbeat','ironhead','flashcannon','protect','swift','endure','hyperbeam','fly','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','aerialace','thief','doubleedge','airslash','agility','rockslide','scaryface','tackle','rocktomb','brickbreak','taunt','sandstorm','bulldoze','uturn','earthquake','irondefense','shadowball','thunderwave','hurricane','focusblast','swordsdance','solarbeam'],
 stages:[
  {name:'Minisange',types:['vol'],base:st(38,47,35,33,35,57)},
  {name:'Bleuseille',types:['vol'],base:st(68,67,55,43,55,77)},
  {name:'Corvaillus',types:['vol','acier'],base:st(98,87,105,53,85,67)}]},
{id:'larvadar',abilities:['Écran Poudre','Farfouille'],moveIds:['tackle','confusion','leechlife','psybeam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','futuresight','raindance','sunnyday','lightscreen','shadowball','takedown','zenheadbutt','bodyslam','reflect','thief','doubleedge','thunderwave','solarbeam','psychup','skillswap','rockslide','brickbreak','rocktomb','trick','aerialace','knockoff','thunderbolt','safeguard','agility','bulldoze','earthquake','dig','doubleteam','taunt'],
 stages:[
  {name:'Larvadar',types:['insecte'],base:st(25,20,20,25,45,45)},
  {name:'Coléodôme',types:['insecte','psy'],base:st(50,35,80,50,90,30)},
  {name:'Astronelle',types:['insecte','psy'],base:st(60,45,110,80,120,90)}]},
{id:'goupilou',abilities:['Fuite','Farceur'],moveIds:['tackle','pursuit','bite','crunch','darkestlariat','throatchop','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','taunt','scaryface','rocktomb','shadowball','rockslide','dig','darkpulse','brickbreak','knockoff','focusblast','bulldoze','aerialace','swordsdance','leer','zenheadbutt','icywind','curse','earthquake','thunderwave','icebeam','shadowclaw','calmmind','stoneedge'],
 stages:[
  {name:'Goupilou',types:['tenebres'],base:st(40,28,28,47,52,50)},
  {name:'Roublenard',types:['tenebres'],base:st(70,58,58,87,92,90)}]},
{id:'tournicoton',abilities:["Cœur Soin",'Chute Cotonneuse'],moveIds:['absorb','fairywind','cottonspore','drainingkiss','gigadrain','dazzlinggleam','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','synthesis','sunnyday','raindance','takedown','bodyslam','swordsdance','doubleedge','tackle','bulletseed','bulldoze','rockslide','magicalleaf','thief','brickbreak','curse','dig','earthquake','lightscreen','scaryface','rocktomb','knockoff','zenheadbutt','focusblast','shadowball','aerialace','poisonjab','growth','taunt'],
 stages:[
  {name:'Tournicoton',types:['plante'],base:st(40,40,60,40,60,10)},
  {name:'Blancoton',types:['plante'],base:st(60,50,90,80,120,60)}]},
{id:'moumouton',abilities:['Fourrure','Costaud'],moveIds:['tackle','headbutt','bodyslam','doubleedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','raindance','sunnyday','takedown','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','earthquake','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface','endeavor','taunt'],
 stages:[
  {name:'Moumouton',types:['normal'],base:st(42,40,55,40,45,48)},
  {name:'Moumouflon',types:['normal'],base:st(72,80,100,60,90,88)}]},
{id:'khelocrok',abilities:['Mâchouille','Solide Roc'],moveIds:['tackle','bite','liquidation','crunch','wavecrash','stoneedge','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','icebeam','bodyslam','rockslide','waterpulse','blizzard','rocktomb','bulldoze','icywind','doubleedge','earthquake','waterfall','hydropump','sunnyday','dig','watergun','sandstorm','stealthrock','brickbreak','whirlpool','scaryface','mudshot','thief','curse','focusblast','ancientpower','attract'],
 stages:[
  {name:'Khélocrok',types:['eau'],base:st(50,64,50,38,38,44)},
  {name:'Torgamord',types:['eau','roche'],base:st(90,115,90,48,68,74)}]},
{id:'voltoutou',abilities:['Ramassage','Régénération'],moveIds:['tackle','thundershock','bite','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','lightscreen','thief','agility','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','thunderpunch','taunt','shadowball','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff','psychic'],
 stages:[
  {name:'Voltoutou',types:['electrik'],base:st(59,45,50,40,50,26)},
  {name:'Fulgudog',types:['electrik'],base:st(69,90,60,90,60,121)}]},
{id:'charbi',abilities:['Solide Roc','Ferraille'],moveIds:['tackle','rockthrow','ember','stealthrock','rockslide','stoneedge','flamethrower','fireblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','rocktomb','bulldoze','earthquake','doubleedge','dig','sandstorm','curse','solarbeam','brickbreak','thief','scaryface','focusblast','taunt','ancientpower','heatwave','zenheadbutt','ironhead','irondefense','willowisp','overheat','firespin','mudslap','shadowball'],
 stages:[
  {name:'Charbi',types:['roche'],base:st(30,40,50,40,50,30)},
  {name:'Wagomine',types:['roche','feu'],base:st(80,60,90,60,70,50)},
  {name:'Monthracite',types:['roche','feu'],base:st(110,80,120,80,90,30)}]},
{id:'verpom',abilities:['Feuille Garde','Mûrissement'],moveIds:['tackle','appleacid','gravapple','leafblade','drumbeating','dragonpulse','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','bulldoze','doubleedge','rockslide','gigadrain','scaryface','earthquake','swordsdance','rocktomb','brickbreak','focusblast','aerialace','zenheadbutt','dig','outrage','bulletseed','lightscreen','thief','shadowball','magicalleaf','curse','stoneedge','knockoff','shadowclaw','sandstorm'],
 stages:[
  {name:'Verpom',types:['plante','dragon'],base:st(40,40,80,40,40,20)},
  {name:'Pomdrapi',types:['plante','dragon'],base:st(70,110,80,95,60,70)},
  {name:'Dratatin',types:['plante','dragon'],base:st(110,85,80,100,80,30)}]},
{id:'dunaja',abilities:['Voile Sable','Costaud'],moveIds:['tackle','glare','bulldoze','headlongrush','earthquake','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','takedown','sunnyday','raindance','bodyslam','rockslide','rocktomb','dig','doubleedge','sandstorm','stealthrock','brickbreak','mudslap','thief','mudshot','scaryface','focusblast','curse','icebeam','crunch','ironhead','swordsdance','taunt','icywind','aerialace','blizzard','thunderbolt','zenheadbutt','shadowball','focuspunch'],
 stages:[
  {name:'Dunaja',types:['sol'],base:st(52,57,75,35,50,46)},
  {name:'Dunaconda',types:['sol'],base:st(72,107,125,65,70,71)}]},
{id:'nigosier',abilities:['Dégobage'],moveIds:['watergun','peck','surf','hurricane','icebeam','hydropump','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn','raindance','takedown','bodyslam','sunnyday','waterpulse','icywind','doubleedge','thief','blizzard','aerialace','waterfall','agility','scaryface','airslash','rockslide','rocktomb','whirlpool','bulldoze','tackle','brickbreak','earthquake','taunt','weatherball','focusblast','dig','zenheadbutt','shadowball','fly'],
 stages:[
  {name:'Nigosier',types:['vol','eau'],base:st(70,85,55,85,95,85)}]},
{id:'embrochet',abilities:['Cran','Poing Furtif'],moveIds:['tackle','watergun','fishiousrend','liquidation','crunch','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','icebeam','waterpulse','icywind','bodyslam','blizzard','waterfall','hydropump','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam','taunt','agility'],
 stages:[
  {name:'Embrochet',types:['eau'],base:st(41,63,40,40,30,66)},
  {name:'Hastacuda',types:['eau'],base:st(61,123,60,60,50,136)}]},
{id:'toxizap',abilities:['Point Poison','Punk Rock'],moveIds:['tackle','poisonsting','overdrive','sludgebomb','poisonjab','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','thief','thunder','thunderwave','doubleedge','scaryface','dig','shadowball','agility','lightscreen','rockslide','brickbreak','bulldoze','taunt','rocktomb','focusblast','knockoff','toxic','curse','earthquake','gigadrain','thunderpunch','solarbeam','swordsdance','zenheadbutt','crunch'],
 stages:[
  {name:'Toxizap',types:['electrik','poison'],base:st(40,38,35,54,35,40)},
  {name:'Salarsen',types:['electrik','poison'],base:st(75,98,70,114,70,75)}]},
{id:'grillepattes',abilities:['Corps Ardent','Turbo Vapeur'],moveIds:['tackle','ember','lunge','firelash','flamethrower','leechlife','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','doubleedge','solarbeam','thief','dig','rockslide','rocktomb','bulldoze','brickbreak','earthquake','fireblast','agility','aerialace','scaryface','heatwave','shadowball','zenheadbutt','focusblast','swordsdance','willowisp','taunt','curse','overheat','stoneedge','lightscreen','firespin'],
 stages:[
  {name:'Grillepattes',types:['feu','insecte'],base:st(50,65,45,50,50,45)},
  {name:'Scolocendre',types:['feu','insecte'],base:st(100,115,65,90,90,65)}]},
{id:'poulpaf',abilities:['Regard Vif','Poing Furtif'],moveIds:['pound','watergun','closecombat','liquidation','brickbreak','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','focusblast','rocktomb','rockslide','dig','bulldoze','doubleedge','stoneedge','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','tackle','knockoff','thunderpunch','swordsdance','reversal','lowkick','aerialace','bulkup','focuspunch','icepunch','firepunch','shadowball'],
 stages:[
  {name:'Poulpaf',types:['combat'],base:st(50,68,60,50,50,32)},
  {name:'Krakos',types:['combat'],base:st(80,118,90,70,80,42)}]},
{id:'theffroi',abilities:['Lévitation','Corps Maudit'],moveIds:['confuseray','astonish','shadowball','strengthsap','stuffcheeks','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','bodyslam','takedown','thief','scaryface','psychic','taunt','rockslide','rocktomb','curse','icywind','tackle','brickbreak','doubleedge','thunderwave','zenheadbutt','dig','focusblast','bulldoze','earthquake','knockoff','darkpulse','thunderbolt','trick','icebeam','lightscreen','thunder','solarbeam'],
 stages:[
  {name:'Théffroi',types:['fantome'],base:st(40,45,45,74,54,50)},
  {name:'Polthégeist',types:['fantome'],base:st(60,65,65,134,114,70)}]},
{id:'bibichut',abilities:['Synchro','Voile Aromatique'],moveIds:['tackle','disarmingvoice','psybeam','magicpowder','psychic','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','shadowball','bodyslam','reflect','zenheadbutt','takedown','thunderwave','skillswap','psychup','doubleedge','thunderbolt','thief','futuresight','trick','confusion','brickbreak','taunt','rockslide','safeguard','focusblast','rocktomb','charm','thunder','thunderpunch','solarbeam'],
 stages:[
  {name:'Bibichut',types:['psy'],base:st(42,30,45,56,53,39)},
  {name:'Chapotus',types:['psy'],base:st(57,40,65,86,73,49)},
  {name:'Sorcilence',types:['psy','fee'],base:st(57,90,95,136,103,29)}]},
{id:'grimalin',abilities:['Farceur','Voile Aromatique'],moveIds:['tackle','faketears','spiritbreak','playrough','darkestlariat','throatchop','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','thief','taunt','shadowball','doubleedge','dig','rocktomb','rockslide','brickbreak','scaryface','focusblast','darkpulse','knockoff','calmmind','psychic','zenheadbutt','thunderwave','lightscreen','icywind','bulldoze','aerialace','swordsdance','thunderbolt','icebeam','crunch','curse'],
 stages:[
  {name:'Grimalin',types:['tenebres','fee'],base:st(45,45,30,55,40,50)},
  {name:'Fourbelin',types:['tenebres','fee'],base:st(65,60,45,75,55,70)},
  {name:'Angoliath',types:['tenebres','fee'],base:st(95,120,65,95,75,60)}]},
{id:'cremy',abilities:["Cœur Soin",'Mûrissement'],moveIds:['tackle','fairywind','drainingkiss','decorate','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','bodyslam','takedown','doubleedge','lightscreen','thief','rockslide','psychic','shadowball','dig','brickbreak','focusblast','rocktomb','thunderbolt','bulldoze','thunderwave','zenheadbutt','charm','taunt','reflect','icebeam','thunder','solarbeam','icywind','earthquake','knockoff','scaryface'],
 stages:[
  {name:'Crèmy',types:['fee'],base:st(45,40,40,50,61,34)},
  {name:'Charmilly',types:['fee'],base:st(65,60,75,110,121,64)}]},
{id:'hexadron',abilities:['Cran'],moveIds:['tackle','triplearrows','thunderouskick','closecombat','victorydance','noretreat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','brickbreak','focusblast','rocktomb','rockslide','dig','bulldoze','doubleedge','stoneedge','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','knockoff','thunderpunch','swordsdance','reversal','lowkick','aerialace','bulkup','focuspunch','icepunch','firepunch','shadowball'],
 stages:[
  {name:'Hexadron',types:['combat'],base:st(65,100,100,70,60,75),forms:{
    falinksite:{name:'Méga-Hexadron',types:['combat'],base:st(65,135,135,70,65,100),abilities:['Acharné']}
  }}]},
{id:'wattapik',abilities:['Statik'],moveIds:['tackle','thundershock','risingvoltage','thundercage','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','lightscreen','thief','doubleedge','agility','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','thunderpunch','taunt','shadowball','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff'],
 stages:[
  {name:'Wattapik',types:['electrik'],base:st(48,101,95,91,85,15)}]},
{id:'frissonille',abilities:['Cape Neige','Effet Spore'],moveIds:['tackle','powdersnow','leechlife','icebeam','gigadrain','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','sunnyday','takedown','bodyslam','doubleedge','thief','rockslide','rocktomb','bulldoze','brickbreak','dig','lightscreen','aerialace','solarbeam','scaryface','earthquake','swordsdance','shadowball','icywind','agility','waterpulse','focusblast','curse','knockoff','irondefense','attract','psychic','bugbite','taunt'],
 stages:[
  {name:'Frissonille',types:['glace','insecte'],base:st(30,25,35,45,30,20)},
  {name:'Beldeneige',types:['glace','insecte'],base:st(70,65,60,125,90,65)}]},
{id:'dolman',abilities:['Solide Roc'],moveIds:['tackle','rockthrow','stealthrock','stoneaxe','rockslide','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','rocktomb','takedown','bulldoze','bodyslam','sandstorm','earthquake','dig','doubleedge','curse','brickbreak','irondefense','thief','icebeam','ancientpower','scaryface','focusblast','ironhead','attract','blizzard','taunt','rockblast','thunderbolt','zenheadbutt','swordsdance','swagger','lightscreen','thunder'],
 stages:[
  {name:'Dolman',types:['roche'],base:st(100,125,135,20,20,70)}]},
{id:'bekaglacon',abilities:['Tête de Gel'],moveIds:['tackle','powdersnow','icehammer','mountaingale','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','doubleedge','rockslide','icywind','rocktomb','bulldoze','thief','scaryface','brickbreak','waterpulse','earthquake','dig','focusblast','shadowball','lightscreen','taunt','curse','zenheadbutt','reflect','aerialace','psychic','stoneedge','calmmind','thunderbolt','sandstorm','ironhead'],
 stages:[
  {name:'Bekaglaçon',types:['glace'],base:st(75,80,110,65,90,50)}]},
{id:'wimessir',abilities:['Synchro','Téléportation'],moveIds:['confusion','psybeam','expandingforce','psychic','futuresight','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','shadowball','takedown','bodyslam','doubleedge','zenheadbutt','thunderwave','thief','lightscreen','thunderbolt','tackle','thunder','reflect','psychup','dig','rockslide','brickbreak','rocktomb','bulldoze','solarbeam','icebeam','agility','skillswap','trick','focusblast','doubleteam','taunt','earthquake'],
 stages:[
  {name:'Wimessir',types:['psy','normal'],base:st(60,65,55,105,95,95)}]},
{id:'morpeko',abilities:['Déclic Fringale'],moveIds:['tackle','thundershock','ragingfury','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','thief','taunt','thunderwave','doubleedge','dig','scaryface','rocktomb','rockslide','thunder','shadowball','brickbreak','darkpulse','lightscreen','focusblast','knockoff','bulldoze','agility','crunch','leer','curse','aerialace','zenheadbutt','thunderpunch','swordsdance','icywind','bite'],
 stages:[
  {name:'Morpeko',types:['electrik','tenebres'],base:st(58,95,58,70,58,97)}]},
{id:'charibari',abilities:["Nerfs d'Acier",'Costaud'],moveIds:['tackle','ironhead','headlongrush','steelroller','earthquake','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','doubleedge','irondefense','bulldoze','flashcannon','brickbreak','sandstorm','stealthrock','dig','scaryface','thunderwave','stoneedge','focusblast','taunt','thief','shadowball','thunderbolt','swordsdance','zenheadbutt','thunder','curse','aerialace','lightscreen','solarbeam','icebeam'],
 stages:[
  {name:'Charibari',types:['acier'],base:st(72,80,49,40,49,40)},
  {name:'Pachyradjah',types:['acier'],base:st(122,130,69,80,69,30)}]},
{id:'galvagon',abilities:['Statik'],moveIds:['tackle','thundershock','dragondarts','wildboltstorm','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','rockslide','rocktomb','bulldoze','scaryface','doubleedge','lightscreen','focusblast','earthquake','brickbreak','agility','thief','dig','outrage','dragonpulse','shadowball','stoneedge','sandstorm','zenheadbutt','aerialace','thunderpunch','crunch','taunt','flamethrower','surf'],
 stages:[
  {name:'Galvagon',types:['electrik','dragon'],base:st(90,100,90,80,70,75)}]},
{id:'galvagla',abilities:['Cape Neige'],moveIds:['tackle','powdersnow','dragondarts','icebeam','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','lightscreen','thunderwave','thunder','doubleedge','thief','rockslide','bulldoze','rocktomb','brickbreak','dig','agility','scaryface','focusblast','icywind','taunt','shadowball','earthquake','reflect','waterpulse','curse','weatherball','thunderpunch','charge','sandstorm','zenheadbutt'],
 stages:[
  {name:'Galvagla',types:['electrik','glace'],base:st(90,100,90,90,80,55)}]},
{id:'hydragon',abilities:['Voix Aquatique'],moveIds:['tackle','watergun','dragondarts','liquidation','dragonpulse','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','bodyslam','icebeam','waterpulse','icywind','blizzard','waterfall','hydropump','doubleedge','rockslide','bulldoze','sunnyday','rocktomb','scaryface','whirlpool','earthquake','brickbreak','focusblast','dig','thief','mudshot','stoneedge','zenheadbutt','weatherball','muddywater','outrage','shadowball','agility'],
 stages:[
  {name:'Hydragon',types:['eau','dragon'],base:st(90,90,100,70,80,75)}]},
{id:'hydragla',abilities:['Cape Neige'],moveIds:['tackle','watergun','dragondarts','icebeam','liquidation','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','blizzard','raindance','takedown','waterpulse','icywind','bodyslam','waterfall','hydropump','doubleedge','bulldoze','rockslide','rocktomb','whirlpool','scaryface','brickbreak','sunnyday','dig','earthquake','thief','focusblast','mudshot','weatherball','muddywater','taunt','mudslap','shadowball','zenheadbutt','curse','agility'],
 stages:[
  {name:'Hydragla',types:['eau','glace'],base:st(90,90,100,80,90,55)}]},
{id:'duralugon',abilities:['Ferraille','Solide Roc'],moveIds:['tackle','ironhead','steelbeam','dragonpulse','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','bulldoze','earthquake','scaryface','doubleedge','brickbreak','stoneedge','sandstorm','focusblast','irondefense','thunderwave','stealthrock','dig','aerialace','thunderbolt','shadowclaw','thunder','shadowball','outrage','zenheadbutt','icebeam','taunt','solarbeam','lightscreen','thief'],
 stages:[
  {name:'Duralugon',types:['acier','dragon'],base:st(70,95,115,120,50,85)}]},
{id:'fantyrm',abilities:['Corps Maudit','Infiltration'],moveIds:['dragonbreath','astonish','dracometeor','shadowball','dragonpulse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','scaryface','rockslide','rocktomb','thief','earthquake','bulldoze','focusblast','brickbreak','icywind','psychic','doubleedge','thunderwave','zenheadbutt','tackle','shadowclaw','thunderbolt','taunt','outrage','stoneedge','icebeam','thunder','dig','aerialace','curse','calmmind','darkpulse'],
 stages:[
  {name:'Fantyrm',types:['dragon','fantome'],base:st(28,60,30,40,30,82)},
  {name:'Dispareptil',types:['dragon','fantome'],base:st(68,80,50,60,50,102)},
  {name:'Lanssorien',types:['dragon','fantome'],base:st(88,120,75,100,75,142)}]},
// ---- Légendaires de Galar + contenu DLC ----
{id:'zacian',abilities:['Regard Vif'],moveIds:['tackle','playrough','closecombat','ironhead','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','swordsdance','raindance','sunnyday','bodyslam','takedown','doubleedge','lightscreen','thief','rockslide','psychic','shadowball','dig','brickbreak','focusblast','rocktomb','thunderbolt','bulldoze','thunderwave','zenheadbutt','charm','taunt','dazzlinggleam','reflect','icebeam','thunder','solarbeam','icywind','earthquake','knockoff'],
 stages:[
  {name:'Zacian',types:['fee'],base:st(92,120,115,80,115,138),forms:{
    epeeRouillee:{name:'Zacian (Épée Sacrée)',types:['fee','acier'],base:st(92,150,115,80,115,148),abilities:['Regard Vif']}
  }}]},
{id:'zamazenta',abilities:['Regard Vif'],moveIds:['tackle','closecombat','ironhead','bodypress','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','swordsdance','raindance','sunnyday','bodyslam','takedown','brickbreak','focusblast','rocktomb','rockslide','dig','bulldoze','doubleedge','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','knockoff','thunderpunch','reversal','lowkick','aerialace','focuspunch','icepunch','firepunch','shadowball','curse','leer'],
 stages:[
  {name:'Zamazenta',types:['combat'],base:st(92,120,115,80,115,138),forms:{
    bouclierRouille:{name:'Zamazenta (Bouclier Royal)',types:['combat','acier'],base:st(92,120,140,80,140,128),abilities:['Regard Vif']}
  }}]},
{id:'ethernatos',abilities:['Attention'],moveIds:['tackle','sludgebomb','dynamaxcannon','dragonpulse','poisonjab','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover','sunnyday','raindance','takedown','bodyslam','scaryface','rockslide','earthquake','rocktomb','bulldoze','doubleedge','thief','shadowball','brickbreak','focusblast','dig','outrage','stoneedge','toxic','aerialace','solarbeam','thunderbolt','zenheadbutt','taunt','icebeam','thunder','crunch','swordsdance','shadowclaw'],
 stages:[
  {name:'Éthernatos',types:['poison','dragon'],base:st(140,85,95,145,95,130)}]},
{id:'wushours',abilities:['Poing Furtif'],moveIds:['tackle','closecombat','thunderouskick','triplearrows','bodypress','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','raindance','takedown','bodyslam','sunnyday','icebeam','rocktomb','brickbreak','icywind','doubleedge','rockslide','thief','waterpulse','surf','scaryface','dig','focusblast','taunt','bulldoze','blizzard','hydropump','waterfall','knockoff','earthquake','zenheadbutt','swordsdance','stoneedge','watergun','whirlpool','poisonjab'],
 stages:[
  {name:'Wushours',types:['combat'],base:st(60,90,60,53,50,72)}],
 branches:[
  {name:'Shifours (Style Farouche)',types:['combat','tenebres'],base:st(100,130,100,63,60,97),abilities:['Poing Furtif'],extraMoveIds:['wickedblow','darkestlariat','suckerpunch']},
  {name:'Shifours (Style Aqua)',types:['combat','eau'],base:st(100,130,100,63,60,97),abilities:['Poing Furtif'],extraMoveIds:['surgingstrikes','liquidation','wavecrash']}]},
{id:'zarude',abilities:['Farouche'],moveIds:['tackle','crunch','darkestlariat','leafblade','gigadrain','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','sunnyday','raindance','takedown','bodyslam','thief','doubleedge','solarbeam','scaryface','rockslide','taunt','dig','knockoff','brickbreak','shadowball','rocktomb','bulldoze','curse','focusblast','aerialace','bulletseed','zenheadbutt','darkpulse','magicalleaf','earthquake','poisonjab','leer','lightscreen','calmmind'],
 stages:[
  {name:'Zarude',types:['tenebres','plante'],base:st(105,120,105,70,95,105)}]},
{id:'regieleki',abilities:['Statik'],moveIds:['tackle','thundershock','risingvoltage','wildboltstorm','thunderbolt','thunder','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','lightscreen','thief','doubleedge','agility','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','thunderpunch','taunt','shadowball','discharge','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff'],
 stages:[
  {name:'Régieleki',types:['electrik'],base:st(80,100,50,100,50,200)}]},
{id:'regidrago',abilities:['Solide Roc'],moveIds:['tackle','dragonbreath','dragondarts','dragonenergy','dragonpulse','outrage','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','scaryface','bulldoze','earthquake','doubleedge','focusblast','brickbreak','stoneedge','shadowball','aerialace','zenheadbutt','dig','thunderbolt','icebeam','thief','thunderwave','sandstorm','thunder','flamethrower','shadowclaw','icywind','surf','solarbeam','dragonclaw'],
 stages:[
  {name:'Régidrago',types:['dragon'],base:st(200,100,50,100,50,80)}]},
{id:'blizzeval',abilities:['Cran'],moveIds:['tackle','icehammer','mountaingale','icebeam','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','doubleedge','rockslide','icywind','rocktomb','bulldoze','thief','scaryface','brickbreak','waterpulse','earthquake','dig','focusblast','shadowball','lightscreen','taunt','curse','zenheadbutt','reflect','aerialace','psychic','stoneedge','calmmind','thunderbolt','sandstorm','ironhead'],
 stages:[
  {name:'Blizzeval',types:['glace'],base:st(100,145,130,65,110,30)}]},
{id:'spectreval',abilities:['Lévitation'],moveIds:['tackle','shadowball','poltergeist','freezingglare','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','bodyslam','takedown','thief','scaryface','taunt','rockslide','rocktomb','curse','icywind','brickbreak','doubleedge','thunderwave','zenheadbutt','dig','focusblast','bulldoze','earthquake','knockoff','darkpulse','thunderbolt','trick','confuseray','icebeam','lightscreen','thunder','solarbeam','willowisp'],
 stages:[
  {name:'Spectreval',types:['fantome'],base:st(100,65,60,145,80,130)}]},
{id:'sylveroy',abilities:['Synchro'],moveIds:['tackle','confusion','leafage','psychic','gigadrain','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','sunnyday','raindance','takedown','lightscreen','bodyslam','shadowball','zenheadbutt','solarbeam','reflect','doubleedge','thief','thunderwave','skillswap','rockslide','brickbreak','psychup','swordsdance','bulldoze','knockoff','earthquake','futuresight','rocktomb','safeguard','trick','focusblast','taunt','curse','psybeam','scaryface'],
 stages:[
  {name:'Sylveroy',types:['psy','plante'],base:st(100,80,80,80,80,80),forms:{
    renePartageGlace:{name:'Sylveroy (Monture Glace)',types:['psy','glace'],base:st(100,165,150,85,130,50),abilities:['Cran']},
    renePartageSpectre:{name:'Sylveroy (Monture Spectre)',types:['psy','fantome'],base:st(100,85,80,165,100,150),abilities:['Lévitation']}
  }}]},
// ---- Formes de Galar (lignées séparées et draftables) ----
{id:'miaoussgalar',abilities:['Ramassage','Mâchouille'],moveIds:['scratch','bite','ironhead','steelroller','crunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','irondefense','bulldoze','tackle','flashcannon','brickbreak','earthquake','sandstorm','stealthrock','dig','scaryface','thunderwave','stoneedge','focusblast','taunt','thief','shadowball','thunderbolt','swordsdance','zenheadbutt','thunder','curse','aerialace','lightscreen'],
 stages:[
  {name:'Miaouss de Galar',types:['acier'],base:st(50,65,55,40,40,40)},
  {name:'Berserkatt',types:['acier'],base:st(70,110,100,50,60,50)}]},
{id:'ponytagalar',abilities:['Regard Vif'],moveIds:['tackle','psybeam','mysticalpower','psychic','moonblast','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','shadowball','bodyslam','reflect','zenheadbutt','takedown','thunderwave','skillswap','psychup','doubleedge','thunderbolt','thief','futuresight','trick','confusion','brickbreak','taunt','rockslide','safeguard','focusblast','rocktomb','charm','thunder','thunderpunch','solarbeam','icepunch'],
 stages:[
  {name:'Ponyta de Galar',types:['psy'],base:st(50,85,55,65,65,90)},
  {name:'Galopa de Galar',types:['psy','fee'],base:st(65,100,70,80,80,105)}]},
{id:'ramolossgalar',abilities:['Synchro'],moveIds:['tackle','psybeam','poisonjab','sludgebomb','psychic','shellsidearm','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','shadowball','takedown','bodyslam','zenheadbutt','lightscreen','thief','reflect','doubleedge','thunderwave','skillswap','taunt','psychup','thunderbolt','brickbreak','rockslide','scaryface','knockoff','confusion','futuresight','rocktomb','solarbeam','trick','earthquake','focusblast','bulldoze','thunder'],
 stages:[
  {name:'Ramoloss de Galar',types:['psy'],base:st(90,65,65,40,40,15)},
  {name:'Flagadoss de Galar',types:['poison','psy'],base:st(95,100,95,100,70,30)}]},
{id:'canartichogalar',abilities:['Poing Furtif'],moveIds:['peck','triplearrows','thunderouskick','closecombat','poltergeist','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','raindance','sunnyday','bodyslam','takedown','brickbreak','focusblast','rocktomb','rockslide','dig','bulldoze','doubleedge','stoneedge','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','tackle','knockoff','thunderpunch','reversal','lowkick','aerialace','bulkup','focuspunch','icepunch','firepunch','shadowball'],
 stages:[
  {name:'Canarticho de Galar',types:['combat'],base:st(52,95,55,58,62,55)},
  {name:'Palarticho',types:['combat'],base:st(62,135,95,68,82,65)}]},
{id:'smogogogalar',abilities:['Point Poison'],moveIds:['smog','poisongas','sludgebomb','strangesteam','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','thief','tackle','shadowball','doubleedge','dig','rockslide','brickbreak','scaryface','focusblast','taunt','rocktomb','knockoff','psychic','bulldoze','poisonjab','lightscreen','thunderbolt','toxic','solarbeam','zenheadbutt','swordsdance','earthquake','charm','thunder','gigadrain'],
 stages:[
  {name:'Smogogo de Galar',types:['poison','fee'],base:st(65,90,120,85,70,60)}]},
{id:'mmimegalar',abilities:['Cape Neige'],moveIds:['tackle','powdersnow','psybeam','icebeam','psychic','mysticalpower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','shadowball','bodyslam','takedown','reflect','zenheadbutt','thunderwave','doubleedge','skillswap','icywind','psychup','thief','rockslide','brickbreak','rocktomb','waterpulse','futuresight','taunt','thunderbolt','confusion','blizzard','trick','bulldoze','earthquake','focusblast','scaryface'],
 stages:[
  {name:'M. Mime de Galar',types:['glace','psy'],base:st(50,65,65,90,90,100)},
  {name:'M. Glaquette',types:['glace','psy'],base:st(80,85,75,110,100,70)}]},
{id:'artikodingalar',abilities:['Regard Vif'],moveIds:['tackle','psybeam','freezingglare','hurricane','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','shadowball','thief','bodyslam','lightscreen','zenheadbutt','aerialace','doubleedge','reflect','agility','airslash','thunderwave','taunt','uturn','scaryface','psychup','fly','brickbreak','skillswap','rockslide','solarbeam','futuresight','rocktomb','thunderbolt','safeguard','icywind','doubleteam'],
 stages:[
  {name:'Artikodin de Galar',types:['psy','vol'],base:st(90,85,85,125,100,95)}]},
{id:'electhorgalar',abilities:['Regard Vif'],moveIds:['tackle','thunderouskick','closecombat','triplearrows','hurricane','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','raindance','sunnyday','takedown','bodyslam','aerialace','thief','brickbreak','doubleedge','scaryface','airslash','focusblast','taunt','rockslide','rocktomb','agility','bulldoze','zenheadbutt','earthquake','uturn','stoneedge','fly','dig','knockoff','swordsdance','leer','shadowball','reversal','poisonjab','solarbeam'],
 stages:[
  {name:'Électhor de Galar',types:['combat','vol'],base:st(90,125,90,85,90,100)}]},
{id:'sulfuragalar',abilities:['Regard Vif'],moveIds:['tackle','darkestlariat','throatchop','hurricane','crunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','aerialace','bodyslam','taunt','scaryface','airslash','doubleedge','shadowball','agility','uturn','rocktomb','rockslide','fly','brickbreak','darkpulse','knockoff','leer','focusblast','icywind','dig','swordsdance','zenheadbutt','bulldoze','psychic','aircutter','swagger','earthquake'],
 stages:[
  {name:'Sulfura de Galar',types:['tenebres','vol'],base:st(90,85,90,100,125,90)}]},
{id:'corayongalar',abilities:['Lévitation'],moveIds:['tackle','astonish','shadowball','ancientpower','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','thief','scaryface','psychic','taunt','rockslide','rocktomb','curse','icywind','brickbreak','doubleedge','calmmind','thunderwave','zenheadbutt','dig','focusblast','bulldoze','earthquake','knockoff','darkpulse','thunderbolt','trick','confuseray','icebeam','lightscreen','thunder','solarbeam'],
 stages:[
  {name:'Corayon de Galar',types:['fantome'],base:st(60,55,100,65,100,30)},
  {name:'Corayôme',types:['fantome'],base:st(60,95,50,145,130,30)}]},
{id:'zigzatongalar',abilities:['Ramassage','Cran'],moveIds:['tackle','crunch','darkestlariat','throatchop','closecombat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','shadowball','dig','rocktomb','rockslide','taunt','brickbreak','bulldoze','thunderbolt','zenheadbutt','scaryface','thunderwave','focusblast','aerialace','icebeam','thunder','knockoff','agility','swagger','darkpulse','swordsdance','blizzard','icywind','uproar','hypervoice'],
 stages:[
  {name:'Zigzaton de Galar',types:['tenebres','normal'],base:st(38,30,41,30,41,60)},
  {name:'Linéon de Galar',types:['tenebres','normal'],base:st(78,70,61,50,61,100)},
  {name:'Ixon',types:['tenebres','normal'],base:st(93,90,101,60,81,95)}]},
{id:'darumangalar',abilities:['Cran'],moveIds:['tackle','icehammer','iciclespear','icebeam','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','doubleedge','rockslide','icywind','rocktomb','bulldoze','thief','scaryface','brickbreak','waterpulse','earthquake','dig','focusblast','shadowball','lightscreen','taunt','curse','zenheadbutt','reflect','aerialace','psychic','stoneedge','calmmind','thunderbolt','sandstorm','ironhead'],
 stages:[
  {name:'Daruman de Galar',types:['glace'],base:st(70,90,45,15,45,50)},
  {name:'Darumacho de Galar',types:['glace'],base:st(105,140,55,30,55,95)}]},
{id:'yamaskgalar',abilities:['Corps Maudit'],moveIds:['tackle','shadowbone','earthquake','shadowball','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','rockslide','rocktomb','bulldoze','dig','thief','stoneedge','scaryface','brickbreak','doubleedge','curse','sandstorm','mudslap','mudshot','focusblast','icywind','taunt','icebeam','psychic','knockoff','thunderbolt','zenheadbutt','crunch','ironhead','blizzard','shadowclaw','thunderwave'],
 stages:[
  {name:'Tutafeh de Galar',types:['sol','fantome'],base:st(38,55,85,30,65,30)},
  {name:'Tutétékri',types:['sol','fantome'],base:st(58,95,145,50,105,30)}]},
{id:'stunfiskgalar',abilities:['Voile Sable'],moveIds:['tackle','mudshot','steelroller','earthquake','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','takedown','sunnyday','raindance','rockslide','bodyslam','rocktomb','bulldoze','dig','sandstorm','stealthrock','stoneedge','doubleedge','brickbreak','irondefense','scaryface','mudslap','focusblast','curse','thief','swordsdance','taunt','icebeam','aerialace','thunderbolt','crunch','thunderwave','thunder','shadowclaw','zenheadbutt'],
 stages:[
  {name:'Stunfisk de Galar',types:['sol','acier'],base:st(109,81,99,66,84,32)}]},
];
const DEX_NUMBERS_GEN8 = {
  'Ouistempo':810,'Badabouin':811,'Gorythmic':812,
  'Flambino':813,'Lapyro':814,'Pyrobut':815,
  'Larméléon':816,'Arrozard':817,'Lézargus':818,
  'Rongourmand':819,'Rongrigou':820,
  'Minisange':821,'Bleuseille':822,'Corvaillus':823,
  'Larvadar':824,'Coléodôme':825,'Astronelle':826,
  'Goupilou':827,'Roublenard':828,
  'Tournicoton':829,'Blancoton':830,
  'Moumouton':831,'Moumouflon':832,
  'Khélocrok':833,'Torgamord':834,
  'Voltoutou':835,'Fulgudog':836,
  'Charbi':837,'Wagomine':838,'Monthracite':839,
  'Verpom':840,'Pomdrapi':841,'Dratatin':842,
  'Dunaja':843,'Dunaconda':844,
  'Nigosier':845,
  'Embrochet':846,'Hastacuda':847,
  'Toxizap':848,'Salarsen':849,
  'Grillepattes':850,'Scolocendre':851,
  'Poulpaf':852,'Krakos':853,
  'Théffroi':854,'Polthégeist':855,
  'Bibichut':856,'Chapotus':857,'Sorcilence':858,
  'Grimalin':859,'Fourbelin':860,'Angoliath':861,
  'Ixon':862,
  'Berserkatt':863,
  'Corayôme':864,
  'Palarticho':865,
  'M. Glaquette':866,
  'Tutétékri':867,
  'Crèmy':868,'Charmilly':869,
  'Hexadron':870,
  'Wattapik':871,
  'Frissonille':872,'Beldeneige':873,
  'Dolman':874,
  'Bekaglaçon':875,
  'Wimessir':876,
  'Morpeko':877,
  'Charibari':878,'Pachyradjah':879,
  'Galvagon':880,'Galvagla':881,'Hydragon':882,'Hydragla':883,
  'Duralugon':884,
  'Fantyrm':885,'Dispareptil':886,'Lanssorien':887,
  'Zacian':888,
  'Zamazenta':889,
  'Éthernatos':890,
  'Wushours':891,
  'Zarude':893,
  'Régieleki':894,
  'Régidrago':895,
  'Blizzeval':896,
  'Spectreval':897,
  'Sylveroy':898,
};
