/* ==== SOMMAIRE ====
   Pokédex n°906 à 1025 (région de Paldea) + 4 lignées de Formes de Paldea + contenu DLC (Le
   Masque Turquoise / Le Disque Indigo). Repères (lignes approximatives) :
   - L.11-110  : Starters + lignées classiques de Paldea
   - L.111-135 : Formes de Paldea (Axoloto, Tauros — réutilisent le n° de Pokédex national)
   - L.136-150 : Oyacata/Nigirigon, Glaivodo, Mordudor/Gromago, Motorizard
   - L.151-170 : Fléau (Chongjian/Baojian/Dinglu/Yuyu), Trio Fidèle + Ogerpon
   - L.171-200 : Pokémon Paradoxe (passé et futur)
   - L.201-220 : Légendaires (Miraidon/Koraidon, Terapagos, Pêchaminus) + nouvelles évolutions DLC
   - L.221-fin : DEX_NUMBERS_GEN9 (numéros de Pokédex, utilisés pour résoudre les sprites)
==== */
const LINES_GEN9 = [
{id:'sprigatito',abilities:['Engrais','Farouche'],moveIds:['scratch','leafage','razorleaf','leafblade','trailblaze','closecombat','swordsdance','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','thief','doubleedge','tackle','gigadrain','scaryface','rockslide','taunt','dig','knockoff','brickbreak','shadowball','rocktomb','bulldoze','curse','focusblast','aerialace','bulletseed','zenheadbutt','darkpulse','magicalleaf','earthquake','poisonjab','leer'],
 stages:[
  {name:'Poussacha',types:['plante'],base:st(40,61,54,45,45,65)},
  {name:'Matourgeon',types:['plante'],base:st(61,80,70,65,60,90)},
  {name:'Miascarade',types:['plante','tenebres'],base:st(76,110,70,81,70,123)}]},
{id:'fuecoco',abilities:['Brasier','Corps Cuit'],moveIds:['tackle','ember','firepunch','flamewheel','pyroball','flamethrower','fireblast','torchsong','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','thief','shadowball','willowisp','doubleedge','solarbeam','rockslide','taunt','rocktomb','scaryface','dig','curse','bulldoze','zenheadbutt','psychic','brickbreak','earthquake','focusblast','heatwave','overheat','calmmind','firespin','stoneedge','darkpulse'],
 stages:[
  {name:'Chochodile',types:['feu'],base:st(67,45,59,63,58,49)},
  {name:'Crocogril',types:['feu'],base:st(81,55,78,90,58,73)},
  {name:'Flâmigator',types:['feu','fantome'],base:st(104,75,100,110,75,66)}]},
{id:'quaxly',abilities:['Torrent','Costaud'],moveIds:['pound','watergun','doublekick','aquacutter','wavecrash','liquidation','closecombat','swordsdance','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','bodyslam','icebeam','waterpulse','icywind','doubleedge','brickbreak','rocktomb','rockslide','bulldoze','blizzard','sunnyday','focusblast','waterfall','hydropump','dig','scaryface','thief','earthquake','whirlpool','tackle','stoneedge','zenheadbutt','taunt','knockoff'],
 stages:[
  {name:'Coiffeton',types:['eau'],base:st(55,65,45,50,45,50)},
  {name:'Canarbello',types:['eau'],base:st(70,85,65,65,60,65)},
  {name:'Palmaval',types:['eau','combat'],base:st(85,120,80,85,75,85)}]},
{id:'lechonk',abilities:['Gloutonnerie','Fourrure'],moveIds:['tackle','bodyslam','doubleedge','bulldoze','superfang','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','shadowball','dig','thunderbolt','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','earthquake','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface','endeavor','taunt','icywind'],
 stages:[
  {name:'Gourmelet',types:['normal'],base:st(54,45,40,35,45,35)},
  {name:'Fragroin',types:['normal'],base:st(110,100,75,59,80,65)}]},
{id:'tarountula',abilities:['Écran Poudre','Ramassage'],moveIds:['tackle','leechlife','stringshot','megahorn','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','thief','bodyslam','doubleedge','rockslide','solarbeam','dig','rocktomb','aerialace','brickbreak','swordsdance','bulldoze','gigadrain','agility','lightscreen','bugbite','earthquake','knockoff','shadowball','scaryface','focusblast','irondefense','attract','zenheadbutt','doubleteam','stoneedge','poisonjab','thunderwave'],
 stages:[
  {name:'Tissenboule',types:['insecte'],base:st(35,41,45,29,40,20)},
  {name:'Filentrappe',types:['insecte'],base:st(60,79,92,52,86,35)}]},
{id:'nymble',abilities:['Farouche','Cran'],moveIds:['tackle','leechlife','axekick','closecombat','megahorn','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','doubleedge','dig','rocktomb','rockslide','taunt','scaryface','aerialace','brickbreak','shadowball','knockoff','darkpulse','bulldoze','focusblast','solarbeam','gigadrain','agility','poisonjab','zenheadbutt','curse','leer','earthquake','swagger','thunderwave','doubleteam'],
 stages:[
  {name:'Lilliterelle',types:['insecte'],base:st(33,46,40,21,25,45)},
  {name:'Gambex',types:['insecte','tenebres'],base:st(71,102,78,52,55,92)}]},
{id:'pawmi',abilities:['Statik','Poing de Fer'],moveIds:['tackle','thundershock','thunderpunch','doubleshock','closecombat','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','brickbreak','focusblast','dig','rocktomb','rockslide','thief','doubleedge','bulldoze','taunt','thunderwave','lightscreen','scaryface','stoneedge','thunder','zenheadbutt','agility','earthquake','knockoff','poisonjab','lowkick','reversal','aerialace','swordsdance','focuspunch','bulkup'],
 stages:[
  {name:'Pohm',types:['electrik'],base:st(45,50,20,40,25,60)},
  {name:'Pohmotte',types:['electrik','combat'],base:st(60,75,40,50,40,85)},
  {name:'Pohmarmotte',types:['electrik','combat'],base:st(70,115,70,70,60,105)}]},
{id:'tandemaus',abilities:['Fuite','Ramassage'],moveIds:['tackle','doubleslap','bite','populationbomb','superfang','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','doubleedge','bodyslam','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','earthquake','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface'],
 stages:[
  {name:'Compagnol',types:['normal'],base:st(18,48,32,24,48,66)},
  {name:'Famignol',types:['normal'],base:st(74,75,70,65,75,111)}]},
{id:'fidough',abilities:["Cœur Soin",'Farceur'],moveIds:['tackle','disarmingvoice','playrough','bulkup','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','doubleedge','lightscreen','thief','rockslide','psychic','shadowball','calmmind','dig','brickbreak','focusblast','rocktomb','thunderbolt','bulldoze','thunderwave','zenheadbutt','charm','taunt','dazzlinggleam','reflect','icebeam','thunder','solarbeam','icywind','earthquake','knockoff','scaryface'],
 stages:[
  {name:'Pâtachiot',types:['fee'],base:st(37,55,70,30,55,37)},
  {name:'Briochien',types:['fee'],base:st(57,80,135,50,80,62)}]},
{id:'smoliv',abilities:['Farouche','Mûrissement'],moveIds:['tackle','absorb','gigadrain','solarbeam','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','doubleedge','thief','shadowball','dig','bulldoze','swordsdance','rockslide','zenheadbutt','brickbreak','rocktomb','thunderbolt','earthquake','aerialace','focusblast','curse','agility','knockoff','thunderwave','thunder','scaryface','lightscreen','bulletseed','icebeam','uproar','endeavor'],
 stages:[
  {name:'Olivini',types:['plante','normal'],base:st(41,35,50,55,50,25)},
  {name:'Olivado',types:['plante','normal'],base:st(52,53,60,78,78,44)},
  {name:'Arboliva',types:['plante','normal'],base:st(78,69,90,125,109,39)}]},
{id:'nacli',abilities:['Solide Roc','Costaud'],moveIds:['tackle','rockthrow','stoneedge','stealthrock','irondefense','bodypress','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','rockslide','rocktomb','takedown','bulldoze','bodyslam','sandstorm','earthquake','dig','doubleedge','curse','brickbreak','thief','icebeam','ancientpower','scaryface','focusblast','ironhead','attract','blizzard','taunt','rockblast','thunderbolt','zenheadbutt','swordsdance','swagger','lightscreen','thunder'],
 stages:[
  {name:'Selutin',types:['roche'],base:st(55,55,100,35,37,5)},
  {name:'Amassel',types:['roche'],base:st(60,68,115,40,45,10)},
  {name:'Gigansel',types:['roche'],base:st(100,100,150,45,90,35)}]},
{id:'charcadet',abilities:['Corps Ardent','Corps Cuit'],moveIds:['ember','firepunch','flamethrower','fireblast','psychic','shadowball','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','calmmind','zenheadbutt','lightscreen','thief','doubleedge','reflect','taunt','solarbeam','trick','skillswap','thunderwave','rockslide','rocktomb','willowisp','tackle','brickbreak','scaryface','imprison','earthquake','focusblast','bulldoze','curse','psychup','psybeam','thunderbolt'],
 stages:[
  {name:'Charbambin',types:['feu'],base:st(40,50,40,50,40,35)}],
 branches:[
  {name:'Carmadura',types:['feu','psy'],base:st(85,60,100,125,80,75),abilities:['Corps Cuit'],extraMoveIds:['armorcannon','psyshieldbash','expandingforce']},
  {name:'Malvalame',types:['feu','fantome'],base:st(75,125,80,60,100,85),abilities:['Poing Furtif'],extraMoveIds:['matchablade','shadowclaw','poltergeist']}]},
{id:'tadbulb',abilities:['Statik','Turbo Vent'],moveIds:['tackle','thundershock','risingvoltage','thundercage','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','lightscreen','thief','doubleedge','agility','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','thunderpunch','taunt','shadowball','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff'],
 stages:[
  {name:'Têtampoule',types:['electrik'],base:st(61,31,41,59,35,84)},
  {name:'Ampibidou',types:['electrik'],base:st(109,64,91,103,83,45)}]},
{id:'wattrel',abilities:['Turbo Vent','Cran'],moveIds:['peck','thundershock','airslash','hurricane','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','agility','aerialace','doubleedge','uturn','thunderwave','fly','lightscreen','scaryface','thunder','tackle','taunt','brickbreak','rockslide','rocktomb','shadowball','bulldoze','quickattack','psychic','aircutter','focusblast','sandstorm','zenheadbutt','dig','earthquake','solarbeam'],
 stages:[
  {name:'Zapétrel',types:['electrik','vol'],base:st(40,40,35,55,40,70)},
  {name:'Fulgulairo',types:['electrik','vol'],base:st(70,70,60,105,60,125)}]},
{id:'maschiff',abilities:['Cran','Farouche'],moveIds:['tackle','bite','crunch','darkestlariat','closecombat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','taunt','scaryface','rocktomb','shadowball','rockslide','dig','darkpulse','brickbreak','knockoff','focusblast','bulldoze','aerialace','swordsdance','leer','zenheadbutt','icywind','curse','earthquake','thunderwave','icebeam','shadowclaw','calmmind','stoneedge','spite'],
 stages:[
  {name:'Grondogue',types:['tenebres'],base:st(60,78,60,40,55,49)},
  {name:'Dogrino',types:['tenebres'],base:st(80,120,90,60,70,69)}]},
{id:'shroodle',abilities:['Farceur','Farouche'],moveIds:['scratch','poisonjab','throatchop','psychicnoise','sludgebomb','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','doubleedge','thief','shadowball','tackle','dig','thunderbolt','bulldoze','rockslide','thunder','brickbreak','rocktomb','solarbeam','agility','zenheadbutt','scaryface','thunderwave','icebeam','earthquake','focusblast','knockoff','swordsdance','taunt','aerialace','attract','waterpulse','blizzard'],
 stages:[
  {name:'Gribouraigne',types:['poison','normal'],base:st(40,65,35,40,35,75)},
  {name:'Tag-Tag',types:['poison','normal'],base:st(63,95,60,65,60,115)}]},
{id:'bramblin',abilities:['Récolte','Lévitation'],moveIds:['tackle','leafage','razorleaf','poltergeist','shadowball','swordsdance','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','gigadrain','thief','curse','doubleedge','scaryface','rockslide','bulldoze','brickbreak','bulletseed','knockoff','zenheadbutt','magicalleaf','lightscreen','dig','focusblast','rocktomb','earthquake','psychic','taunt','calmmind','aerialace','icywind','reflect','poisonjab'],
 stages:[
  {name:'Virovent',types:['fantome','plante'],base:st(40,65,30,45,35,60)},
  {name:'Virevorreur',types:['fantome','plante'],base:st(55,115,70,80,70,90)}]},
{id:'toedscool',abilities:['Farouche','Lévitation'],moveIds:['tackle','leafage','razorleaf','psychic','expandingforce','earthquake','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','takedown','bodyslam','raindance','bulldoze','rockslide','dig','rocktomb','doubleedge','swordsdance','brickbreak','stoneedge','curse','gigadrain','sandstorm','thief','scaryface','stealthrock','mudslap','focusblast','mudshot','bulletseed','aerialace','knockoff','poisonjab','zenheadbutt','magicalleaf','sludgebomb'],
 stages:[
  {name:'Terracool',types:['sol','plante'],base:st(40,40,35,50,100,70)},
  {name:'Terracruel',types:['sol','plante'],base:st(80,70,65,80,120,100)}]},
{id:'klawf',abilities:['Solide Roc','Chargement Rocheux'],moveIds:['tackle','rockthrow','stoneedge','spinout','closecombat','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','rockslide','rocktomb','takedown','bulldoze','bodyslam','sandstorm','earthquake','dig','doubleedge','curse','brickbreak','irondefense','thief','icebeam','ancientpower','scaryface','focusblast','ironhead','attract','blizzard','taunt','rockblast','thunderbolt','zenheadbutt','swordsdance','swagger','lightscreen'],
 stages:[
  {name:'Craparoi',types:['roche'],base:st(70,100,115,35,55,75)}]},
{id:'capsakid',abilities:['Farouche','Chlorophylle'],moveIds:['tackle','absorb','gigadrain','spicyextract','solarbeam','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','bodyslam','raindance','doubleedge','bulldoze','rockslide','dig','swordsdance','thief','rocktomb','curse','earthquake','brickbreak','zenheadbutt','scaryface','focusblast','fireblast','shadowball','bulletseed','lightscreen','taunt','willowisp','heatwave','aerialace','magicalleaf','knockoff','firespin','overheat'],
 stages:[
  {name:'Pimito',types:['plante'],base:st(50,62,40,62,40,50)},
  {name:'Scovilain',types:['plante','feu'],base:st(65,108,65,108,65,75)}]},
{id:'rellor',abilities:['Farouche','Semeur de Graines'],moveIds:['tackle','confusion','psychic','expandingforce','gigadrain','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','shadowball','takedown','zenheadbutt','bodyslam','reflect','thief','doubleedge','thunderwave','solarbeam','psychup','skillswap','rockslide','psybeam','brickbreak','rocktomb','trick','futuresight','aerialace','knockoff','thunderbolt','safeguard','agility','bulldoze','earthquake','dig','doubleteam'],
 stages:[
  {name:'Léboulérou',types:['insecte'],base:st(41,25,30,40,30,14)},
  {name:'Bérasca',types:['insecte','psy'],base:st(75,50,85,115,100,45)}]},
{id:'flittle',abilities:['Regard Vif','Farceur'],moveIds:['confusion','psybeam','psychicnoise','expandingforce','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','shadowball','lightscreen','psychic','zenheadbutt','reflect','bodyslam','takedown','thunderwave','skillswap','psychup','futuresight','doubleedge','trick','thief','thunderbolt','rockslide','brickbreak','taunt','rocktomb','safeguard','tackle','imprison','earthquake','solarbeam','icebeam','thunder'],
 stages:[
  {name:'Flotillon',types:['psy'],base:st(30,35,30,55,30,75)},
  {name:'Cléopsytra',types:['psy'],base:st(95,60,60,101,60,105)}]},
{id:'tinkatink',abilities:['Farceur','Sirop Collant'],moveIds:['tackle','ironhead','playrough','gigatonhammer','moonblast','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','doubleedge','rocktomb','irondefense','brickbreak','bulldoze','lightscreen','thunderwave','stealthrock','dig','sandstorm','focusblast','thunderbolt','shadowball','thief','psychic','taunt','earthquake','calmmind','reflect','stoneedge','thunder','zenheadbutt','scaryface','solarbeam'],
 stages:[
  {name:'Forgerette',types:['fee','acier'],base:st(50,45,45,35,64,58)},
  {name:'Forgella',types:['fee','acier'],base:st(65,55,55,45,82,78)},
  {name:'Forgelina',types:['fee','acier'],base:st(85,75,77,70,105,94)}]},
{id:'wiglett',abilities:['Point Gluant','Voile Sable'],moveIds:['tackle','watergun','surf','liquidation','hydropump','mortalspin','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','icebeam','waterpulse','icywind','bodyslam','blizzard','waterfall','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam','taunt','agility','knockoff'],
 stages:[
  {name:'Taupikeau',types:['eau'],base:st(10,55,25,35,25,95)},
  {name:'Triopikeau',types:['eau'],base:st(35,100,50,50,70,120)}]},
{id:'bombirdier',abilities:['Regard Vif','Poing Furtif'],moveIds:['peck','pursuit','darkestlariat','throatchop','airslash','hurricane','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','aerialace','bodyslam','taunt','scaryface','doubleedge','shadowball','agility','uturn','tackle','rocktomb','rockslide','fly','brickbreak','darkpulse','knockoff','leer','focusblast','icywind','dig','swordsdance','zenheadbutt','bulldoze','psychic','aircutter','swagger'],
 stages:[
  {name:'Lestombaile',types:['vol','tenebres'],base:st(70,103,85,60,85,82)}]},
{id:'finizen',abilities:['Zéro à Héros'],moveIds:['pound','watergun','aquacutter','liquidation','wavecrash','hydropump','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','icebeam','waterpulse','icywind','bodyslam','blizzard','waterfall','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','tackle','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam','taunt'],
 stages:[
  {name:'Dofin',types:['eau'],base:st(70,45,40,45,40,75)},
  {name:'Superdofin',types:['eau'],base:st(100,70,72,53,62,100)}]},
{id:'varoom',abilities:['Turbo Vapeur','Chargement Rocheux'],moveIds:['tackle','poisonjab','ironhead','gigatonhammer','sludgebomb','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','rockslide','doubleedge','rocktomb','scaryface','thief','bulldoze','brickbreak','earthquake','dig','shadowball','irondefense','taunt','swordsdance','sandstorm','focusblast','curse','knockoff','stealthrock','stoneedge','solarbeam','thunderwave','thunderbolt','toxic','thunder','gigadrain'],
 stages:[
  {name:'Vrombi',types:['acier','poison'],base:st(45,70,63,30,45,62)},
  {name:'Vrombotor',types:['acier','poison'],base:st(80,119,90,54,67,90)}]},
{id:'orthworm',abilities:['Écran Poudre','Costaud'],moveIds:['tackle','ironhead','steelbeam','earthquake','bodypress','irondefense','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','doubleedge','bulldoze','flashcannon','brickbreak','sandstorm','stealthrock','dig','scaryface','thunderwave','stoneedge','focusblast','taunt','thief','shadowball','thunderbolt','swordsdance','zenheadbutt','thunder','curse','aerialace','lightscreen','solarbeam','icebeam'],
 stages:[
  {name:'Ferdeter',types:['acier'],base:st(70,85,145,60,55,65)}]},
{id:'glimmet',abilities:['Point Poison','Solide Roc'],moveIds:['tackle','poisonsting','sludgebomb','rockslide','stoneedge','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','rocktomb','bulldoze','earthquake','sandstorm','dig','thief','stealthrock','doubleedge','curse','scaryface','brickbreak','taunt','swordsdance','focusblast','shadowball','poisonjab','icebeam','knockoff','irondefense','attract','mudshot','blizzard','toxic','solarbeam','thunderbolt'],
 stages:[
  {name:'Germéclat',types:['roche','poison'],base:st(48,35,42,105,58,60)},
  {name:'Floréclat',types:['roche','poison'],base:st(83,55,90,130,81,86)}]},
{id:'greavard',abilities:['Attention','Corps Maudit'],moveIds:['tackle','bite','shadowball','poltergeist','crunch','closecombat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','thief','scaryface','psychic','taunt','rockslide','rocktomb','curse','icywind','brickbreak','calmmind','thunderwave','zenheadbutt','dig','focusblast','bulldoze','earthquake','knockoff','darkpulse','thunderbolt','trick','confuseray','icebeam','lightscreen','thunder'],
 stages:[
  {name:'Toutombe',types:['fantome'],base:st(50,61,60,30,55,55)},
  {name:'Tomberro',types:['fantome'],base:st(72,101,100,50,97,68)}]},
{id:'flamigo',abilities:['Cran','Regard Vif'],moveIds:['peck','closecombat','axekick','airslash','hurricane','triplearrows','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','raindance','sunnyday','takedown','bodyslam','aerialace','thief','brickbreak','doubleedge','scaryface','focusblast','taunt','rockslide','rocktomb','agility','bulldoze','zenheadbutt','tackle','earthquake','uturn','stoneedge','fly','dig','knockoff','leer','shadowball','reversal','poisonjab','solarbeam'],
 stages:[
  {name:'Flamenroule',types:['vol','combat'],base:st(82,115,74,55,80,115)}]},
{id:'cetoddle',abilities:['Cape Neige','Costaud'],moveIds:['tackle','icehammer','iciclespear','icebeam','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','doubleedge','rockslide','icywind','rocktomb','bulldoze','thief','scaryface','brickbreak','waterpulse','earthquake','dig','focusblast','shadowball','lightscreen','taunt','curse','zenheadbutt','reflect','aerialace','psychic','stoneedge','calmmind','thunderbolt','sandstorm','ironhead'],
 stages:[
  {name:'Piétacé',types:['glace'],base:st(60,85,60,40,40,55)},
  {name:'Balbalèze',types:['glace'],base:st(170,113,65,45,55,73)}]},
{id:'veluza',abilities:['Farceur','Regard Vif'],moveIds:['pound','watergun','psychic','zenheadbutt','liquidation','expandingforce','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','calmmind','raindance','takedown','icebeam','waterpulse','bodyslam','icywind','sunnyday','blizzard','shadowball','doubleedge','lightscreen','waterfall','hydropump','rockslide','rocktomb','thief','brickbreak','bulldoze','whirlpool','reflect','psychup','tackle','thunderwave','earthquake','scaryface','focusblast','taunt'],
 stages:[
  {name:'Délestin',types:['eau','psy'],base:st(90,102,73,78,65,70)}]},
{id:'dondozo',abilities:['Attention','Costaud'],moveIds:['tackle','liquidation','wavecrash','waterfall','earthquake','bodyslam','protect','swift','endure','hyperbeam','surf','facade','doubleedge','sleeptalk','rest','raindance','takedown','icebeam','waterpulse','icywind','blizzard','hydropump','watergun','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam','taunt','agility','knockoff'],
 stages:[
  {name:'Oyacata',types:['eau'],base:st(150,100,115,65,65,35)}]},
{id:'tatsugiri',abilities:['Commandant','Farceur'],moveIds:['watergun','dragonpulse','dracometeor','hydropump','icebeam','psychic','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','calmmind','raindance','takedown','bodyslam','waterpulse','icywind','blizzard','waterfall','doubleedge','rockslide','bulldoze','sunnyday','rocktomb','scaryface','whirlpool','earthquake','brickbreak','focusblast','tackle','dig','thief','mudshot','stoneedge','zenheadbutt','weatherball','muddywater','outrage','shadowball'],
 stages:[
  {name:'Nigirigon',types:['dragon','eau'],base:st(68,50,60,120,95,82)}]},
{id:'frigibax',abilities:['Solide Roc','Cran'],moveIds:['tackle','dragonclaw','icefang','glaciallance','dracometeor','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','dragondance','raindance','bodyslam','takedown','sunnyday','rockslide','scaryface','rocktomb','bulldoze','earthquake','doubleedge','focusblast','icywind','brickbreak','outrage','waterpulse','shadowball','stoneedge','aerialace','dig','dragonpulse','lightscreen','thief','zenheadbutt','ironhead','surf','thunderbolt','sandstorm'],
 stages:[
  {name:'Frigodo',types:['dragon','glace'],base:st(65,75,45,35,45,55)},
  {name:'Cryodo',types:['dragon','glace'],base:st(90,95,66,45,65,62)},
  {name:'Glaivodo',types:['dragon','glace'],base:st(115,145,92,75,86,87)}]},
{id:'gimmighoul',abilities:['Ramassage','Coque Tera'],moveIds:['tackle','shadowball','poltergeist','makeitrain','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','thief','scaryface','irondefense','doubleedge','brickbreak','taunt','bulldoze','thunderwave','ironhead','curse','earthquake','psychic','dig','focusblast','thunderbolt','sandstorm','stealthrock','zenheadbutt','icywind','darkpulse','thunder','shadowclaw','stoneedge'],
 stages:[
  {name:'Mordudor',types:['fantome'],base:st(45,30,25,40,30,10)},
  {name:'Gromago',types:['acier','fantome'],base:st(87,60,95,133,91,84)}]},
{id:'cyclizar',abilities:['Farceur','Cran'],moveIds:['tackle','dragonclaw','dracometeor','wildboltstorm','crunch','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','dragondance','raindance','sunnyday','takedown','bodyslam','doubleedge','shadowball','bulldoze','rockslide','thunderbolt','thief','rocktomb','dig','thunder','earthquake','brickbreak','thunderwave','zenheadbutt','focusblast','scaryface','icebeam','agility','aerialace','hypervoice','solarbeam','flamethrower','waterpulse','blizzard','icywind'],
 stages:[
  {name:'Motorizard',types:['dragon','normal'],base:st(70,95,65,85,65,121)}]},
{id:'woochien',abilities:['Fléau Perle'],moveIds:['tackle','leafage','gigadrain','ruination','darkestlariat','solarbeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','sunnyday','raindance','takedown','bodyslam','thief','swordsdance','doubleedge','scaryface','rockslide','taunt','dig','knockoff','brickbreak','shadowball','rocktomb','bulldoze','curse','focusblast','aerialace','bulletseed','zenheadbutt','darkpulse','magicalleaf','earthquake','poisonjab','leer','lightscreen','crunch'],
 stages:[
  {name:'Chongjian',types:['tenebres','plante'],base:st(85,85,100,95,135,20)}]},
{id:'chienpao',abilities:['Fléau Épée'],moveIds:['tackle','icefang','iciclespear','glaciallance','ruination','crunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','blizzard','raindance','takedown','bodyslam','sunnyday','thief','taunt','scaryface','rocktomb','rockslide','doubleedge','shadowball','icebeam','icywind','dig','brickbreak','focusblast','darkpulse','bulldoze','aerialace','knockoff','curse','waterpulse','leer','earthquake','zenheadbutt','calmmind','swagger'],
 stages:[
  {name:'Baojian',types:['tenebres','glace'],base:st(80,120,80,90,65,135)}]},
{id:'tinglu',abilities:['Fléau Tablette'],moveIds:['tackle','earthquake','headlongrush','ruination','crunch','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','raindance','sunnyday','takedown','bodyslam','rocktomb','rockslide','dig','bulldoze','thief','doubleedge','scaryface','brickbreak','taunt','sandstorm','focusblast','stealthrock','mudslap','curse','mudshot','shadowball','swordsdance','knockoff','darkpulse','aerialace','icywind','icebeam','leer','shadowclaw'],
 stages:[
  {name:'Dinglu',types:['tenebres','sol'],base:st(155,110,125,55,80,45)}]},
{id:'chiyu',abilities:['Fléau Récipient'],moveIds:['tackle','ember','flamethrower','fireblast','ruination','darkpulse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','sunnyday','raindance','takedown','bodyslam','thief','doubleedge','taunt','dig','rocktomb','rockslide','scaryface','shadowball','brickbreak','bulldoze','focusblast','solarbeam','heatwave','willowisp','zenheadbutt','curse','leer','earthquake','aerialace','knockoff','firespin','crunch','overheat','stoneedge'],
 stages:[
  {name:'Yuyu',types:['tenebres','feu'],base:st(55,80,80,135,120,100)}]},
{id:'okidogi',abilities:['Poing Furtif'],moveIds:['tackle','poisonjab','sludgebomb','closecombat','thunderouskick','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','sunnyday','raindance','takedown','bodyslam','brickbreak','thief','focusblast','rockslide','scaryface','dig','rocktomb','doubleedge','bulldoze','taunt','knockoff','swordsdance','earthquake','stoneedge','zenheadbutt','shadowball','thunderpunch','aerialace','reversal','curse','toxic','focuspunch','lowkick','gigadrain','solarbeam'],
 stages:[
  {name:'Félicanis',types:['poison','combat'],base:st(88,128,115,58,86,80)}]},
{id:'munkidori',abilities:['Farceur'],moveIds:['tackle','psychic','expandingforce','sludgebomb','poisonjab','psyshieldbash','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','shadowball','takedown','bodyslam','zenheadbutt','lightscreen','thief','reflect','doubleedge','thunderwave','skillswap','taunt','psychup','thunderbolt','brickbreak','rockslide','scaryface','knockoff','psybeam','confusion','futuresight','rocktomb','solarbeam','trick','earthquake','focusblast','bulldoze'],
 stages:[
  {name:'Fortusimia',types:['poison','psy'],base:st(88,75,66,130,90,106)}]},
{id:'fezandipiti',abilities:['Poing Furtif'],moveIds:['tackle','poisonjab','moonblast','dazzlinggleam','airslash','sludgebomb','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','bodyslam','thief','shadowball','doubleedge','dig','rockslide','brickbreak','scaryface','focusblast','taunt','rocktomb','knockoff','psychic','bulldoze','lightscreen','thunderbolt','toxic','solarbeam','zenheadbutt','swordsdance','earthquake','charm','thunder','gigadrain','thunderwave'],
 stages:[
  {name:'Favianos',types:['poison','fee'],base:st(88,91,82,70,125,99)}]},
{id:'ogerpon',abilities:['Synchro Masque'],moveIds:['tackle','ivycudgel','leafblade','closecombat','swordsdance','gigadrain','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','doubleedge','bulletseed','bulldoze','rockslide','magicalleaf','thief','brickbreak','curse','dig','earthquake','lightscreen','scaryface','rocktomb','knockoff','zenheadbutt','focusblast','shadowball','aerialace','poisonjab','growth','taunt','reflect','synthesis','calmmind'],
 stages:[
  {name:'Ogerpon',types:['plante'],base:st(80,120,84,60,96,110),forms:{
    masqueSource:{name:'Ogerpon (Masque du Puits)',types:['plante','eau'],base:st(80,100,84,60,96,130),abilities:['Synchro Masque']},
    masqueBraise:{name:'Ogerpon (Masque du Fourneau)',types:['plante','feu'],base:st(80,120,84,60,96,130),abilities:['Synchro Masque']},
    masqueAngle:{name:'Ogerpon (Masque de la Pierre)',types:['plante','roche'],base:st(80,120,104,60,96,110),abilities:['Synchro Masque']}
  }}]},
{id:'greattusk',abilities:['Protosynthèse'],moveIds:['tackle','headlongrush','earthquake','closecombat','stoneedge','bodypress','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','bodyslam','takedown','sunnyday','raindance','rockslide','rocktomb','bulldoze','dig','brickbreak','focusblast','doubleedge','scaryface','thief','stealthrock','mudslap','poisonjab','sandstorm','taunt','mudshot','swordsdance','curse','zenheadbutt','thunderpunch','aerialace','knockoff','focuspunch','ironhead','lowkick'],
 stages:[
  {name:'Fort-Ivoire',types:['sol','combat'],base:st(115,131,131,53,53,87)}]},
{id:'screamtail',abilities:['Protosynthèse'],moveIds:['tackle','dazzlinggleam','moonblast','psychic','expandingforce','psychicnoise','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','shadowball','bodyslam','reflect','zenheadbutt','takedown','thunderwave','skillswap','psychup','doubleedge','thunderbolt','thief','futuresight','psybeam','trick','confusion','brickbreak','taunt','rockslide','safeguard','focusblast','rocktomb','charm','thunder','thunderpunch','solarbeam'],
 stages:[
  {name:'Hurle-Queue',types:['fee','psy'],base:st(115,40,75,45,135,111)}]},
{id:'brutebonnet',abilities:['Protosynthèse'],moveIds:['tackle','leafblade','gigadrain','darkestlariat','crunch','closecombat','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','sunnyday','raindance','takedown','bodyslam','thief','doubleedge','scaryface','rockslide','taunt','dig','knockoff','brickbreak','shadowball','rocktomb','bulldoze','curse','focusblast','aerialace','bulletseed','zenheadbutt','darkpulse','magicalleaf','earthquake','poisonjab','leer','lightscreen','calmmind'],
 stages:[
  {name:'Fongus-Furie',types:['plante','tenebres'],base:st(111,127,99,79,99,55)}]},
{id:'fluttermane',abilities:['Protosynthèse'],moveIds:['tackle','shadowball','moonblast','dazzlinggleam','psychicnoise','poltergeist','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','bodyslam','takedown','thief','psychic','lightscreen','taunt','doubleedge','rockslide','thunderwave','brickbreak','focusblast','icywind','thunderbolt','rocktomb','zenheadbutt','scaryface','dig','curse','knockoff','reflect','thunder','bulldoze','skillswap','icebeam','trick','solarbeam'],
 stages:[
  {name:'Flotte-Mèche',types:['fantome','fee'],base:st(55,55,55,135,135,135)}]},
{id:'slitherwing',abilities:['Protosynthèse'],moveIds:['tackle','leechlife','megahorn','closecombat','axekick','lunge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','sunnyday','raindance','takedown','bodyslam','brickbreak','thief','rockslide','dig','rocktomb','doubleedge','focusblast','bulldoze','swordsdance','poisonjab','aerialace','stoneedge','knockoff','earthquake','scaryface','zenheadbutt','taunt','solarbeam','reversal','agility','gigadrain','thunderpunch','lightscreen','lowkick'],
 stages:[
  {name:'Rampe-Ailes',types:['insecte','combat'],base:st(85,135,79,85,105,81)}]},
{id:'sandyshocks',abilities:['Protosynthèse'],moveIds:['tackle','thunderbolt','wildboltstorm','earthquake','stoneedge','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','rockslide','bulldoze','dig','rocktomb','doubleedge','sandstorm','thief','mudslap','brickbreak','thunder','thunderwave','scaryface','focusblast','mudshot','curse','lightscreen','agility','crunch','thunderpunch','taunt','icebeam','ironhead','shadowball','focuspunch','knockoff'],
 stages:[
  {name:'Pelage-Sablé',types:['electrik','sol'],base:st(85,81,97,121,85,101)}]},
{id:'roaringmoon',abilities:['Protosynthèse'],moveIds:['tackle','dragonclaw','dracometeor','darkestlariat','crunch','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','dragondance','raindance','sunnyday','takedown','bodyslam','scaryface','rocktomb','rockslide','thief','taunt','doubleedge','brickbreak','focusblast','shadowball','bulldoze','dig','earthquake','aerialace','darkpulse','shadowclaw','outrage','stoneedge','zenheadbutt','icywind','dragonpulse','thunderwave','icebeam','leer','knockoff'],
 stages:[
  {name:'Rugit-Lune',types:['dragon','tenebres'],base:st(105,139,71,55,101,119)}]},
{id:'walkingwake',abilities:['Protosynthèse'],moveIds:['tackle','hydrosteam','dracometeor','dragonpulse','icebeam','surf','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','takedown','bodyslam','waterpulse','icywind','blizzard','waterfall','hydropump','doubleedge','rockslide','bulldoze','sunnyday','rocktomb','scaryface','whirlpool','watergun','earthquake','brickbreak','focusblast','dig','thief','mudshot','stoneedge','zenheadbutt','weatherball','muddywater','outrage','shadowball'],
 stages:[
  {name:'Serpente-Eau',types:['eau','dragon'],base:st(99,83,91,125,83,109)}]},
{id:'gougingfire',abilities:['Protosynthèse'],moveIds:['tackle','flamethrower','fireblast','dracometeor','headlongrush','crunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','sunnyday','takedown','bodyslam','raindance','doubleedge','rockslide','rocktomb','bulldoze','earthquake','scaryface','solarbeam','focusblast','dig','heatwave','brickbreak','stoneedge','zenheadbutt','thief','firespin','shadowball','willowisp','outrage','overheat','taunt','aerialace','sandstorm','dragonpulse','shadowclaw'],
 stages:[
  {name:'Feu-Perçant',types:['feu','dragon'],base:st(105,115,121,65,93,91)}]},
{id:'irontreads',abilities:['Quark Chargée'],moveIds:['tackle','ironhead','earthquake','steelbeam','headlongrush','rapidspin','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','takedown','sunnyday','raindance','rockslide','bodyslam','rocktomb','bulldoze','dig','sandstorm','stealthrock','stoneedge','doubleedge','brickbreak','irondefense','scaryface','mudslap','focusblast','curse','thief','mudshot','flashcannon','swordsdance','taunt','icebeam','aerialace','thunderbolt','crunch','thunderwave','thunder'],
 stages:[
  {name:'Roue-de-Fer',types:['sol','acier'],base:st(90,112,120,72,70,106)}]},
{id:'ironbundle',abilities:['Quark Chargée'],moveIds:['tackle','icebeam','blizzard','hydropump','freezingglare','surf','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','takedown','waterpulse','icywind','bodyslam','waterfall','doubleedge','watergun','bulldoze','rockslide','rocktomb','whirlpool','scaryface','brickbreak','sunnyday','dig','earthquake','thief','focusblast','mudshot','weatherball','muddywater','taunt','mudslap','shadowball','zenheadbutt','curse','agility'],
 stages:[
  {name:'Hotte-de-Fer',types:['glace','eau'],base:st(56,80,114,124,60,136)}]},
{id:'ironhands',abilities:['Quark Chargée'],moveIds:['tackle','closecombat','thunderpunch','jetpunch','thunderouskick','bulkup','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','brickbreak','focusblast','dig','rocktomb','rockslide','thief','doubleedge','bulldoze','taunt','thunderwave','thunderbolt','lightscreen','scaryface','stoneedge','thunder','zenheadbutt','agility','earthquake','knockoff','poisonjab','lowkick','reversal','aerialace','swordsdance','focuspunch'],
 stages:[
  {name:'Paume-de-Fer',types:['combat','electrik'],base:st(154,140,108,50,68,50)}]},
{id:'ironjugulis',abilities:['Quark Chargée'],moveIds:['tackle','darkpulse','hurricane','airslash','dracometeor','crunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','thief','aerialace','bodyslam','taunt','scaryface','doubleedge','shadowball','agility','uturn','rocktomb','rockslide','fly','brickbreak','knockoff','leer','focusblast','icywind','dig','swordsdance','zenheadbutt','bulldoze','psychic','aircutter','swagger','earthquake'],
 stages:[
  {name:'Têtes-de-Fer',types:['tenebres','vol'],base:st(94,80,86,122,80,108)}]},
{id:'ironmoth',abilities:['Quark Chargée'],moveIds:['tackle','fireblast','flamethrower','sludgebomb','fierywrath','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','sunnyday','takedown','raindance','bodyslam','doubleedge','thief','solarbeam','dig','rockslide','scaryface','rocktomb','shadowball','bulldoze','taunt','earthquake','brickbreak','poisonjab','focusblast','heatwave','curse','willowisp','zenheadbutt','overheat','firespin','toxic','swordsdance','knockoff','stoneedge'],
 stages:[
  {name:'Mite-de-Fer',types:['feu','poison'],base:st(80,70,60,140,110,110)}]},
{id:'ironthorns',abilities:['Quark Chargée'],moveIds:['tackle','stoneedge','wildboltstorm','earthquake','ironhead','thunderpunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','bulldoze','sandstorm','dig','thunderbolt','thunder','stealthrock','thunderwave','doubleedge','lightscreen','thief','brickbreak','curse','focusblast','scaryface','agility','irondefense','taunt','attract','ancientpower','icebeam','mudslap','blizzard'],
 stages:[
  {name:'Épine-de-Fer',types:['roche','electrik'],base:st(100,134,110,70,84,72)}]},
{id:'ironvaliant',abilities:['Quark Chargée'],moveIds:['tackle','psyblade','moonblast','closecombat','spiritbreak','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','brickbreak','focusblast','rockslide','rocktomb','dig','doubleedge','thief','bulldoze','taunt','stoneedge','zenheadbutt','thunderpunch','knockoff','calmmind','scaryface','earthquake','lightscreen','poisonjab','psychic','shadowball','reversal','aerialace','lowkick','icepunch','focuspunch'],
 stages:[
  {name:'Garde-de-Fer',types:['fee','combat'],base:st(74,130,90,120,60,116)}]},
{id:'ironleaves',abilities:['Quark Chargée'],moveIds:['tackle','leafblade','psyblade','closecombat','gigadrain','swordsdance','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','doubleedge','rockslide','bulldoze','rocktomb','brickbreak','earthquake','irondefense','scaryface','dig','curse','lightscreen','focusblast','bulletseed','thief','ironhead','aerialace','zenheadbutt','sandstorm','knockoff','stealthrock','shadowball','magicalleaf','flashcannon','taunt'],
 stages:[
  {name:'Vert-de-Fer',types:['plante','acier'],base:st(90,130,88,70,108,104)}]},
{id:'ironboulder',abilities:['Quark Chargée'],moveIds:['tackle','stoneaxe','closecombat','stoneedge','axekick','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','rocktomb','rockslide','takedown','bodyslam','bulldoze','earthquake','dig','brickbreak','focusblast','doubleedge','stealthrock','sandstorm','thief','scaryface','taunt','curse','zenheadbutt','thunderpunch','ironhead','knockoff','poisonjab','irondefense','aerialace','reversal','focuspunch','calmmind','lowkick'],
 stages:[
  {name:'Roc-de-Fer',types:['roche','combat'],base:st(90,120,80,68,108,124)}]},
{id:'ironcrown',abilities:['Quark Chargée'],moveIds:['tackle','psyblade','flashcannon','tachyoncutter','expandingforce','calmmind','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','shadowball','bodyslam','lightscreen','psychic','zenheadbutt','reflect','thunderwave','doubleedge','rockslide','rocktomb','psychup','thunderbolt','brickbreak','sandstorm','skillswap','futuresight','taunt','bulldoze','earthquake','stealthrock','irondefense','trick','thief','psybeam','confusion','thunder'],
 stages:[
  {name:'Chef-de-Fer',types:['acier','psy'],base:st(90,72,100,122,108,98)}]},
{id:'koraidon',abilities:['Pulsion Orichalque'],moveIds:['tackle','closecombat','dragonclaw','dracometeor','flamethrower','collisioncourse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','bodyslam','sunnyday','raindance','takedown','rockslide','focusblast','rocktomb','brickbreak','bulldoze','scaryface','earthquake','stoneedge','doubleedge','dig','zenheadbutt','aerialace','thief','taunt','outrage','poisonjab','thunderpunch','ironhead','shadowclaw','reversal','knockoff','lowkick','shadowball','dragonpulse'],
 stages:[
  {name:'Koraidon',types:['combat','dragon'],base:st(100,135,115,85,100,135)}]},
{id:'miraidon',abilities:['Moteur Hadron'],moveIds:['tackle','thunderbolt','dragonpulse','dracometeor','electrodrift','discharge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','rockslide','rocktomb','bulldoze','scaryface','doubleedge','lightscreen','focusblast','earthquake','brickbreak','agility','thief','dig','outrage','shadowball','stoneedge','sandstorm','zenheadbutt','aerialace','thunderpunch','crunch','taunt','flamethrower'],
 stages:[
  {name:'Miraidon',types:['electrik','dragon'],base:st(100,85,100,135,115,135)}]},
{id:'terapagos',abilities:['Téraforme Zéro'],moveIds:['tackle','earthquake','dazzlinggleam','icebeam','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','doubleedge','bodyslam','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','solarbeam','uproar','focusblast','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface','endeavor'],
 stages:[
  {name:'Terapagos',types:['normal'],base:st(95,95,110,105,110,85)}]},
{id:'pecharunt',abilities:['Chaîne Toxique'],moveIds:['tackle','malignantchain','sludgebomb','shadowball','poltergeist','recover','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','thief','takedown','bodyslam','scaryface','taunt','curse','doubleedge','knockoff','rockslide','brickbreak','darkpulse','dig','rocktomb','toxic','poisonjab','psychic','icywind','gigadrain','focusblast','bulldoze','earthquake','zenheadbutt','solarbeam','thunderbolt','swordsdance','thunderwave'],
 stages:[
  {name:'Pêchaminus',types:['poison','fantome'],base:st(88,88,160,88,88,88)}]},
{id:'poltchageist',abilities:['Force Mycélium'],moveIds:['tackle','leafage','gigadrain','shadowball','psychicnoise','matchablade','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','calmmind','sunnyday','raindance','takedown','bodyslam','thief','swordsdance','curse','doubleedge','scaryface','rockslide','bulldoze','brickbreak','bulletseed','knockoff','zenheadbutt','magicalleaf','lightscreen','dig','focusblast','rocktomb','earthquake','psychic','taunt','aerialace','icywind','reflect','poisonjab'],
 stages:[
  {name:'Poltchageist',types:['plante','fantome'],base:st(40,45,45,74,54,50)},
  {name:'Théffroyable',types:['plante','fantome'],base:st(71,60,106,121,80,70)}]},
{id:'dipplin',abilities:['Récolte','Sirop Collant'],moveIds:['tackle','dragonpulse','dracometeor','syrupbomb','gigadrain','dragondance','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','bulldoze','doubleedge','rockslide','scaryface','earthquake','swordsdance','rocktomb','brickbreak','focusblast','aerialace','zenheadbutt','dig','outrage','bulletseed','lightscreen','thief','shadowball','magicalleaf','curse','stoneedge','knockoff','shadowclaw','sandstorm','reflect'],
 stages:[
  {name:'Pomdramour',types:['plante','dragon'],base:st(80,80,110,95,80,40)},
  {name:'Pomdorochi',types:['plante','dragon'],base:st(106,80,110,120,80,44)}]},
{id:'archaludon',abilities:["Nerfs d'Acier",'Costaud'],moveIds:['tackle','ironhead','steelbeam','dracometeor','flashcannon','bodypress','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','bulldoze','earthquake','scaryface','doubleedge','brickbreak','stoneedge','sandstorm','focusblast','irondefense','thunderwave','stealthrock','dig','aerialace','thunderbolt','shadowclaw','thunder','shadowball','outrage','dragonpulse','zenheadbutt','icebeam','taunt','solarbeam'],
 stages:[
  {name:'Pondralugon',types:['acier','dragon'],base:st(90,105,130,125,65,85)}]},
// ---- Formes de Paldea (lignées séparées et draftables, réutilisent le n° de Pokédex national) ----
{id:'wooperpaldea',abilities:['Point Poison','Voile Sable'],moveIds:['tackle','mudshot','sludgebomb','poisonjab','earthquake','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','rockslide','bulldoze','dig','rocktomb','doubleedge','thief','scaryface','brickbreak','sandstorm','mudslap','stealthrock','curse','focusblast','swordsdance','shadowball','crunch','taunt','toxic','knockoff','icebeam','solarbeam','icywind','aerialace','thunderbolt','gigadrain'],
 stages:[
  {name:'Axoloto de Paldea',types:['poison','sol'],base:st(55,45,45,25,25,15)},
  {name:'Terraiste',types:['poison','sol'],base:st(130,75,60,45,100,20)}]},
{id:'taurospaldeacombat',abilities:['Cran','Costaud'],moveIds:['tackle','closecombat','bodyslam','doubleedge','bulkup','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','brickbreak','focusblast','rocktomb','rockslide','dig','bulldoze','stoneedge','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','knockoff','thunderpunch','swordsdance','reversal','lowkick','aerialace','focuspunch','icepunch','firepunch','shadowball','curse','leer','calmmind','ironhead'],
 stages:[
  {name:'Tauros de Paldea (Race Combative)',types:['combat'],base:st(75,110,105,40,70,107)}]},
{id:'taurospaldeafeu',abilities:['Cran','Corps Ardent'],moveIds:['tackle','closecombat','firepunch','flamethrower','bulkup','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','bodyslam','raindance','doubleedge','rocktomb','rockslide','brickbreak','dig','focusblast','bulldoze','thief','taunt','stoneedge','earthquake','zenheadbutt','scaryface','solarbeam','fireblast','poisonjab','thunderpunch','reversal','heatwave','willowisp','lowkick','aerialace','swordsdance','curse','overheat','knockoff'],
 stages:[
  {name:'Tauros de Paldea (Race Flamboyante)',types:['combat','feu'],base:st(75,110,105,40,70,107)}]},
{id:'taurospaldeaeau',abilities:['Cran','Costaud'],moveIds:['tackle','closecombat','waterfall','liquidation','bulkup','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','raindance','takedown','bodyslam','icebeam','waterpulse','icywind','doubleedge','brickbreak','rocktomb','rockslide','bulldoze','blizzard','sunnyday','focusblast','hydropump','dig','scaryface','watergun','thief','earthquake','whirlpool','stoneedge','zenheadbutt','taunt','knockoff','poisonjab','mudshot','swordsdance','mudslap'],
 stages:[
  {name:'Tauros de Paldea (Race Aquatique)',types:['combat','eau'],base:st(75,110,105,40,70,107)}]},
];
const DEX_NUMBERS_GEN9 = {
  'Poussacha':906,'Matourgeon':907,'Miascarade':908,
  'Chochodile':909,'Crocogril':910,'Flâmigator':911,
  'Coiffeton':912,'Canarbello':913,'Palmaval':914,
  'Gourmelet':915,'Fragroin':916,
  'Tissenboule':917,'Filentrappe':918,
  'Lilliterelle':919,'Gambex':920,
  'Pohm':921,'Pohmotte':922,'Pohmarmotte':923,
  'Compagnol':924,'Famignol':925,
  'Pâtachiot':926,'Briochien':927,
  'Olivini':928,'Olivado':929,'Arboliva':930,
  'Selutin':932,'Amassel':933,'Gigansel':934,
  'Charbambin':935,'Carmadura':936,'Malvalame':937,
  'Têtampoule':938,'Ampibidou':939,
  'Zapétrel':940,'Fulgulairo':941,
  'Grondogue':942,'Dogrino':943,
  'Gribouraigne':944,'Tag-Tag':945,
  'Virovent':946,'Virevorreur':947,
  'Terracool':948,'Terracruel':949,
  'Craparoi':950,
  'Pimito':951,'Scovilain':952,
  'Léboulérou':953,'Bérasca':954,
  'Flotillon':955,'Cléopsytra':956,
  'Forgerette':957,'Forgella':958,'Forgelina':959,
  'Taupikeau':960,'Triopikeau':961,
  'Lestombaile':962,
  'Dofin':963,'Superdofin':964,
  'Vrombi':965,'Vrombotor':966,
  'Motorizard':967,
  'Ferdeter':968,
  'Germéclat':969,'Floréclat':970,
  'Toutombe':971,'Tomberro':972,
  'Flamenroule':973,
  'Piétacé':974,'Balbalèze':975,
  'Délestin':976,
  'Oyacata':977,
  'Nigirigon':978,
  'Terraiste':980,
  'Fort-Ivoire':984,
  'Hurle-Queue':985,
  'Fongus-Furie':986,
  'Flotte-Mèche':987,
  'Rampe-Ailes':988,
  'Pelage-Sablé':989,
  'Roue-de-Fer':990,
  'Hotte-de-Fer':991,
  'Paume-de-Fer':992,
  'Têtes-de-Fer':993,
  'Mite-de-Fer':994,
  'Épine-de-Fer':995,
  'Frigodo':996,'Cryodo':997,'Glaivodo':998,
  'Mordudor':999,'Gromago':1000,
  'Chongjian':1001,
  'Baojian':1002,
  'Dinglu':1003,
  'Yuyu':1004,
  'Rugit-Lune':1005,
  'Garde-de-Fer':1006,
  'Koraidon':1007,
  'Miraidon':1008,
  'Serpente-Eau':1009,
  'Vert-de-Fer':1010,
  'Pomdramour':1011,
  'Poltchageist':1012,'Théffroyable':1013,
  'Félicanis':1014,
  'Fortusimia':1015,
  'Favianos':1016,
  'Ogerpon':1017,
  'Pondralugon':1018,
  'Pomdorochi':1019,
  'Feu-Perçant':1020,
  'Roc-de-Fer':1022,
  'Chef-de-Fer':1023,
  'Terapagos':1024,
  'Pêchaminus':1025,
  'Axoloto de Paldea':10253,
  'Tauros de Paldea (Race Combative)':10250,
  'Tauros de Paldea (Race Flamboyante)':10251,
  'Tauros de Paldea (Race Aquatique)':10252,
};
