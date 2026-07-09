/* ==== pokemon/gen3.js : Pokédex n°252 à 386 ==== */
const LINES_GEN3 = [
{id:'treecko',abilities:['Engrais','Turbo'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Arcko',types:['plante'],base:st(40,45,35,65,55,70)},
  {name:'Massko',types:['plante'],base:st(50,65,45,85,65,95)},
  {name:'Jungko',types:['plante'],base:st(70,85,65,105,85,120)}]},
{id:'torchic',abilities:['Brasier','Turbo'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','skyuppercut','machpunch','rocksmash','dynamicpunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Poussifeu',types:['feu'],base:st(45,60,40,70,50,45)},
  {name:'Galifeu',types:['feu','combat'],base:st(60,85,60,85,60,55)},
  {name:'Braségali',types:['feu','combat'],base:st(80,120,70,110,70,80)}]},
{id:'mudkip',abilities:['Torrent','Moiteur'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','earthquake','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Gobou',types:['eau'],base:st(50,70,50,50,50,40)},
  {name:'Flobio',types:['eau','sol'],base:st(70,85,70,60,70,50)},
  {name:'Laggron',types:['eau','sol'],base:st(100,110,90,85,90,60)}]},
{id:'poochyena',abilities:['Fuite','Pied Véloce'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','thief','pursuit','knockoff','faketears','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Medhyèna',types:['tenebres'],base:st(35,55,35,30,30,35)},
  {name:'Grahyèna',types:['tenebres'],base:st(70,90,70,60,60,70)}]},
{id:'zigzagoon',abilities:['Ramassage','Gloutonnerie'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Zigzaton',types:['normal'],base:st(38,30,41,30,41,60)},
  {name:'Linéon',types:['normal'],base:st(78,70,61,50,61,100)}]},
{id:'wurmple',abilities:['Écran Poudre','Fuite'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','gust','wingattack','sludge','poisonsting','acid','sludgebomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chenipotte',types:['insecte'],base:st(45,45,35,20,30,20)}],
 branches:[
  {name:'Charmillon',types:['insecte','vol'],base:st(60,70,50,90,50,65),abilities:['Essaim'],extraMoveIds:['drillpeck','hurricane','airslash','aircutter','aerialace','bounce']},
  {name:'Papinox',types:['insecte','poison'],base:st(60,50,70,50,90,65),abilities:['Écran Poudre','Œil Composé'],extraMoveIds:['sludgebomb','poisonjab','poisonfang','poisontail','acidarmor']}
 ]},
{id:'lotad',abilities:['Glissade','Cuvette'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nénupiot',types:['eau','plante'],base:st(40,30,30,40,50,30)},
  {name:'Lombre',types:['eau','plante'],base:st(60,50,50,60,70,50)},
  {name:'Ludicolo',types:['eau','plante'],base:st(80,70,70,90,100,70)}]},
{id:'seedot',abilities:['Chlorophylle','Matinal'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Grainipiot',types:['plante'],base:st(40,40,50,30,30,30)},
  {name:'Pifeuil',types:['plante','tenebres'],base:st(70,70,40,60,40,60)},
  {name:'Tengalice',types:['plante','tenebres'],base:st(90,100,60,90,60,80)}]},
{id:'taillow',abilities:['Cran'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nirondelle',types:['normal','vol'],base:st(40,55,30,30,30,85)},
  {name:'Hélédelle',types:['normal','vol'],base:st(60,85,60,75,50,125)}]},
{id:'wingull',abilities:['Regard Vif','Hydratation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Goélise',types:['eau','vol'],base:st(40,30,30,55,30,85)},
  {name:'Bekipan',types:['eau','vol'],base:st(60,50,100,95,70,65)}]},
{id:'ralts',abilities:['Synchro','Calque'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tarsal',types:['psy'],base:st(28,25,25,45,35,40)},
  {name:'Kirlia',types:['psy'],base:st(38,35,35,65,55,50)}], branches:[
  {name:'Gardevoir',types:['psy'],base:st(68,65,65,125,115,80),abilities:['Synchro','Calque'],extraMoveIds:['moonlight']},
  {name:'Gallame',types:['psy','combat'],base:st(68,125,65,65,115,80),abilities:['Impassible','Cœur Noble'],extraMoveIds:['karatechop','submission','crosschop','brickbreak','closecombat','vitalthrow','slash','nightslash']}
 ]},
{id:'surskit',abilities:['Glissade'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Arakdo',types:['insecte','eau'],base:st(40,30,32,50,52,65)},
  {name:'Maskadra',types:['insecte','vol'],base:st(70,60,62,80,82,60)}]},
{id:'shroomish',abilities:['Pose Spore','Pied Véloce'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','crosschop','karatechop','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Balignon',types:['plante'],base:st(60,40,60,40,60,35)},
  {name:'Chapignon',types:['plante','combat'],base:st(60,130,80,60,60,70)}]},
{id:'slakoth',abilities:['Absentéisme'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Parécool',types:['normal'],base:st(60,60,60,35,35,30)},
  {name:'Vigoroth',types:['normal'],base:st(80,80,80,55,55,90)},
  {name:'Monaflèmit',types:['normal'],base:st(150,160,100,95,65,100)}]},
{id:'nincada',abilities:['Œil Composé'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ningale',types:['insecte','sol'],base:st(31,45,90,30,30,40)}],
 branches:[
  {name:'Ninjask',types:['insecte','vol'],base:st(61,90,45,50,50,160),abilities:['Turbo','Infiltration'],extraMoveIds:['aerialace','airslash']},
  {name:'Munja',types:['insecte','fantome'],base:st(1,90,45,30,30,40),abilities:['Garde Mystik'],extraMoveIds:['shadowball','shadowpunch']}
 ]},
{id:'whismur',abilities:['Anti-Bruit'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','uproar','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chuchmur',types:['normal'],base:st(64,51,23,51,23,28)},
  {name:'Ramboum',types:['normal'],base:st(84,71,43,71,43,48)},
  {name:'Brouhabam',types:['normal'],base:st(104,91,63,91,73,68)}]},
{id:'makuhita',abilities:['Isograisse','Cran'],moveIds:['karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','skyuppercut','machpunch','rocksmash','dynamicpunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Makuhita',types:['combat'],base:st(72,60,30,20,30,25)},
  {name:'Hariyama',types:['combat'],base:st(144,120,60,40,60,50)}]},
{id:'nosepass',abilities:['Magnépiège','Fermeté'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tarinor',types:['roche'],base:st(30,45,135,45,90,30)},
  {name:'Tarinorme',types:['roche','acier'],base:st(60,55,145,75,150,40),abilities:['Fermeté','Force Sable']}]},
{id:'skitty',abilities:['Joli Sourire','Peau Miracle'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip','sweetscent','charm'],
 stages:[
  {name:'Skitty',types:['normal'],base:st(50,45,45,35,35,50)},
  {name:'Delcatty',types:['normal'],base:st(70,65,65,55,55,90)}]},
{id:'sableye',abilities:['Regard Vif','Insomnia'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','thief','pursuit','knockoff','faketears','lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ténéfix',types:['tenebres','fantome'],base:st(50,75,75,65,65,50)}]},
{id:'mawile',abilities:['Hyper Cutter','Intimidation'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Mysdibule',types:['acier'],base:st(50,85,85,55,55,50)}]},
{id:'aron',abilities:['Fermeté','Tête de Roc'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Galekid',types:['acier','roche'],base:st(50,70,100,40,40,30)},
  {name:'Galegon',types:['acier','roche'],base:st(60,90,140,50,50,40)},
  {name:'Galeking',types:['acier','roche'],base:st(70,110,180,60,60,50)}]},
{id:'meditite',abilities:['Force Pure','Télépathe'],moveIds:['karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','skyuppercut','machpunch','rocksmash','dynamicpunch','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Méditikka',types:['combat','psy'],base:st(30,40,55,40,55,60)},
  {name:'Charmina',types:['combat','psy'],base:st(60,60,75,60,75,80)}]},
{id:'electrike',abilities:['Paratonnerre','Statik'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','shockwave','spark','zapcannon','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Dynavolt',types:['electrik'],base:st(40,45,40,65,40,65)},
  {name:'Élecsprint',types:['electrik'],base:st(70,75,60,105,60,105)}]},
{id:'plusle',abilities:['Plus'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','shockwave','spark','zapcannon','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Posipi',types:['electrik'],base:st(60,50,40,85,75,95)}]},
{id:'minun',abilities:['Minus'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','shockwave','spark','zapcannon','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Négapi',types:['electrik'],base:st(60,40,50,75,85,95)}]},
{id:'volbeat',abilities:['Lumiattirance','Essaim'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Muciole',types:['insecte'],base:st(65,73,55,47,75,85)}]},
{id:'illumise',abilities:['Benêt'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Lumivole',types:['insecte'],base:st(65,47,55,73,75,85)}]},
{id:'roselia',abilities:['Médic Nature','Point Poison'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','sludge','poisonsting','acid','sludgebomb','poisonjab','poisonfang','poisontail','acidarmor','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Rozbouton',types:['plante','poison'],base:st(40,30,35,50,70,55)},
  {name:'Rosélia',types:['plante','poison'],base:st(50,60,45,100,80,65)},
  {name:'Roserade',types:['plante','poison'],base:st(60,70,65,125,105,90)}]},
{id:'gulpin',abilities:['Suintement','Glu'],moveIds:['sludge','poisonsting','acid','sludgebomb','poisonjab','poisonfang','poisontail','acidarmor','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Gloupti',types:['poison'],base:st(70,43,53,43,53,40)},
  {name:'Avaltout',types:['poison'],base:st(100,73,83,73,83,55)}]},
{id:'carvanha',abilities:['Peau Dure','Turbo'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','crunch','darkpulse','suckerpunch','nightslash','feintattack','thief','pursuit','knockoff','faketears','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Carvanha',types:['eau','tenebres'],base:st(45,90,20,65,20,65)},
  {name:'Sharpedo',types:['eau','tenebres'],base:st(70,120,40,95,40,95)}]},
{id:'wailmer',abilities:['Ignifu-Voile','Benêt'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Wailmer',types:['eau'],base:st(130,70,35,70,35,60)},
  {name:'Wailord',types:['eau'],base:st(170,90,45,90,45,60)}]},
{id:'numel',abilities:['Benêt','Tempo Perso'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Chamallot',types:['feu','sol'],base:st(60,60,40,65,45,35)},
  {name:'Camérupt',types:['feu','sol'],base:st(70,100,70,105,75,40)}]},
{id:'torkoal',abilities:['Écran Fumée','Sécheresse'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chartor',types:['feu'],base:st(70,85,140,85,70,20)}]},
{id:'spoink',abilities:['Isograisse','Tempo Perso'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Spoink',types:['psy'],base:st(60,25,35,70,80,60)},
  {name:'Groret',types:['psy'],base:st(80,45,55,90,110,80)}]},
{id:'spinda',abilities:['Tempo Perso'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Spinda',types:['normal'],base:st(60,60,60,60,60,60)}]},
{id:'trapinch',abilities:['Hyper Cutter','Piège'],moveIds:['dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Kraknoix',types:['sol'],base:st(45,100,45,45,45,10)}]},
{id:'vibrava',abilities:['Lévitation'],moveIds:['dragonbreath','dragonclaw','dragonrage','dragondance','twister','outrage','dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Vibraninf',types:['dragon','sol'],base:st(50,70,50,50,50,70)},
  {name:'Libégon',types:['dragon','sol'],base:st(80,100,80,80,80,100)}]},
{id:'cacnea',abilities:['Voile Sable','Absorbe-Eau'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cacnea',types:['plante'],base:st(50,85,40,85,40,35)},
  {name:'Cacturne',types:['plante','tenebres'],base:st(70,115,60,115,60,55)}]},
{id:'swablu',abilities:['Médic Nature','Ciel Gris'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tylton',types:['normal','vol'],base:st(45,40,60,40,75,50)},
  {name:'Altaria',types:['dragon','vol'],base:st(75,70,90,70,105,80)}]},
{id:'zangoose',abilities:['Vaccin'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Mangriff',types:['normal'],base:st(73,115,60,60,60,90)}]},
{id:'seviper',abilities:['Mue','Infiltration'],moveIds:['sludge','poisonsting','acid','sludgebomb','poisonjab','poisonfang','poisontail','acidarmor','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Séviper',types:['poison'],base:st(73,100,60,100,60,65)}]},
{id:'lunatone',abilities:['Lévitation'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Séléroc',types:['roche','psy'],base:st(90,55,65,95,85,70)}]},
{id:'solrock',abilities:['Lévitation'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Solaroc',types:['roche','psy'],base:st(90,95,85,55,65,70)}]},
{id:'barboach',abilities:['Benêt','Hydratation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Barloche',types:['eau','sol'],base:st(50,48,43,46,41,60)},
  {name:'Barbicha',types:['eau','sol'],base:st(110,78,73,76,71,60)}]},
{id:'corphish',abilities:['Hyper Cutter','Coque Armure'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Écrapince',types:['eau'],base:st(43,80,65,50,35,35)},
  {name:'Colhomard',types:['eau','tenebres'],base:st(63,120,85,90,55,55)}]},
{id:'baltoy',abilities:['Lévitation'],moveIds:['dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Balbuto',types:['sol','psy'],base:st(40,40,55,40,70,55)},
  {name:'Kaorine',types:['sol','psy'],base:st(60,70,105,70,120,75)}]},
{id:'lileep',abilities:['Ventouse'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Lilia',types:['roche','plante'],base:st(66,41,77,61,87,23)},
  {name:'Vacilys',types:['roche','plante'],base:st(86,81,97,81,107,43)}]},
{id:'anorith',abilities:['Armurbaston','Glissade'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Anorith',types:['roche','insecte'],base:st(45,95,50,40,50,75)},
  {name:'Armaldo',types:['roche','insecte'],base:st(75,125,100,70,80,45)}]},
{id:'feebas',abilities:['Glissade','Benêt'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Barpau',types:['eau'],base:st(20,15,20,10,55,80)},
  {name:'Milobellus',types:['eau'],base:st(95,60,79,100,125,81)}]},
{id:'castform',abilities:['Météo'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Morphéo',types:['normal'],base:st(70,70,70,70,70,70)}]},
{id:'kecleon',abilities:['Déguisement'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Kecleon',types:['normal'],base:st(60,90,70,60,120,40)}]},
{id:'shuppet',abilities:['Insomnia','Corps Maudit'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Polichombr',types:['fantome'],base:st(44,75,35,63,33,45)},
  {name:'Branette',types:['fantome'],base:st(64,115,65,83,63,65)}]},
{id:'duskull',abilities:['Lévitation'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Skelénox',types:['fantome'],base:st(20,40,90,30,90,25)},
  {name:'Téraclope',types:['fantome'],base:st(40,70,130,60,130,25)},
  {name:'Noctunoir',types:['fantome'],base:st(45,100,135,65,135,45),abilities:['Pression','Fouille']}]},
{id:'tropius',abilities:['Chlorophylle','Force Soleil'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Tropius',types:['plante','vol'],base:st(99,68,83,72,87,51)}]},
{id:'chimecho',abilities:['Lévitation'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Korillon',types:['psy'],base:st(45,30,50,65,50,45)},
  {name:'Éoko',types:['psy'],base:st(65,50,70,95,80,65)}]},
{id:'absol',abilities:['Pression'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','thief','pursuit','knockoff','faketears','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Absol',types:['tenebres'],base:st(65,130,60,75,60,75)}]},
{id:'snorunt',abilities:['Attention','Rideau Neige'],moveIds:['icebeam','icepunch','blizzard','icefang','icywind','aurorabeam','powdersnow','iciclespear','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Stalgamin',types:['glace'],base:st(50,50,50,50,50,50)}], branches:[
  {name:'Oniglali',types:['glace'],base:st(80,80,80,80,80,80),abilities:['Attention','Rideau Neige'],extraMoveIds:['crunch']},
  {name:'Momartik',types:['glace','fantome'],base:st(70,80,70,80,70,110),abilities:['Rideau Neige','Corps Maudit'],extraMoveIds:['lick','shadowball','nightshade','shadowclaw','confuseray']}
 ]},
{id:'spheal',abilities:['Isograisse','Benêt'],moveIds:['icebeam','icepunch','blizzard','icefang','icywind','aurorabeam','powdersnow','iciclespear','watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Obalie',types:['glace','eau'],base:st(70,40,50,55,50,25)},
  {name:'Phogleur',types:['glace','eau'],base:st(90,60,70,75,70,45)},
  {name:'Kaimorse',types:['glace','eau'],base:st(110,80,90,95,90,65)}]},
{id:'clamperl',abilities:['Coque Armure'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Coquiperl',types:['eau'],base:st(35,64,85,74,55,32)}],
 branches:[
  {name:'Serpang',types:['eau'],base:st(55,104,105,94,75,52),abilities:['Coque Armure'],extraMoveIds:['crunch','icefang']},
  {name:'Rosabyss',types:['eau'],base:st(55,84,105,114,75,52),abilities:['Coque Armure'],extraMoveIds:['icebeam','psychic']}
 ]},
{id:'relicanth',abilities:['Glissade','Tête de Roc'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Relicanth',types:['eau','roche'],base:st(100,90,130,45,65,55)}]},
{id:'luvdisc',abilities:['Glissade'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Paporeille',types:['eau'],base:st(43,30,55,40,65,97)}]},
{id:'bagon',abilities:['Tête de Roc'],moveIds:['dragonbreath','dragonclaw','dragonrage','dragondance','twister','outrage','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','tailwhip'],
 stages:[
  {name:'Draby',types:['dragon'],base:st(45,75,60,40,30,50)},
  {name:'Drackhaus',types:['dragon'],base:st(65,95,100,60,50,50)},
  {name:'Drattak',types:['dragon','vol'],base:st(95,135,80,110,80,100)}]},
{id:'beldum',abilities:['Corps Sain'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Balbeuth',types:['acier','psy'],base:st(40,55,80,35,60,30)},
  {name:'Métang',types:['acier','psy'],base:st(60,75,100,55,80,50)},
  {name:'Métalosse',types:['acier','psy'],base:st(80,135,130,95,90,70)}]},
{id:'regirock',abilities:['Corps Sain','Fermeté'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Regirock',types:['roche'],base:st(80,100,200,50,100,50)}]},
{id:'regice',abilities:['Corps Sain'],moveIds:['icebeam','icepunch','blizzard','icefang','icywind','aurorabeam','powdersnow','iciclespear','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Regice',types:['glace'],base:st(80,50,100,100,200,50)}]},
{id:'registeel',abilities:['Corps Sain'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Registeel',types:['acier'],base:st(80,75,150,75,150,50)}]},
{id:'latias',abilities:['Lévitation'],moveIds:['dragonbreath','dragonclaw','dragonrage','dragondance','twister','outrage','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Latias',types:['dragon','psy'],base:st(80,80,90,110,130,110)}]},
{id:'latios',abilities:['Lévitation'],moveIds:['dragonbreath','dragonclaw','dragonrage','dragondance','twister','outrage','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Latios',types:['dragon','psy'],base:st(80,90,80,130,110,110)}]},
{id:'kyogre',abilities:['Crachin'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','hydrocannon','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Kyogre',types:['eau'],base:st(100,100,90,150,140,90)}]},
{id:'groudon',abilities:['Sécheresse'],moveIds:['dig','earthquake','bonemerang','mudshot','mudslap','magnitude','sandtomb','blastburn','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Groudon',types:['sol'],base:st(100,150,140,100,90,90)}]},
{id:'rayquaza',abilities:['Air Lock'],moveIds:['dragonbreath','dragonclaw','dragonrage','dragondance','twister','outrage','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','extremespeed','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Rayquaza',types:['dragon','vol'],base:st(105,150,90,150,90,95)}]},
{id:'jirachi',abilities:['Sérénité'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','wish','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Jirachi',types:['acier','psy'],base:st(100,100,100,100,100,100)}]},
{id:'deoxys',abilities:['Pression'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Deoxys',types:['psy'],base:st(50,150,50,150,50,150)}]}
];

const DEX_NUMBERS_GEN3 = {
  'Arcko':252,'Massko':253,'Jungko':254,
  'Poussifeu':255,'Galifeu':256,'Braségali':257,
  'Gobou':258,'Flobio':259,'Laggron':260,
  'Medhyèna':261,'Grahyèna':262,
  'Zigzaton':263,'Linéon':264,
  'Chenipotte':265,'Armulys':266,'Charmillon':267,'Blindalys':268,'Papinox':269,
  'Nénupiot':270,'Lombre':271,'Ludicolo':272,
  'Grainipiot':273,'Pifeuil':274,'Tengalice':275,
  'Nirondelle':276,'Hélédelle':277,
  'Goélise':278,'Bekipan':279,
  'Tarsal':280,'Kirlia':281,'Gardevoir':282,'Gallame':475,
  'Arakdo':283,'Maskadra':284,
  'Balignon':285,'Chapignon':286,
  'Parécool':287,'Vigoroth':288,'Monaflèmit':289,
  'Ningale':290,'Ninjask':291,'Munja':292,
  'Chuchmur':293,'Ramboum':294,'Brouhabam':295,
  'Makuhita':296,'Hariyama':297,
  'Azurill':298,
  'Tarinor':299,'Tarinorme':476,
  'Skitty':300,'Delcatty':301,
  'Ténéfix':302,
  'Mysdibule':303,
  'Galekid':304,'Galegon':305,'Galeking':306,
  'Méditikka':307,'Charmina':308,
  'Dynavolt':309,'Élecsprint':310,
  'Posipi':311,
  'Négapi':312,
  'Muciole':313,
  'Lumivole':314,
  'Rozbouton':406,'Rosélia':315,'Roserade':407,
  'Gloupti':316,'Avaltout':317,
  'Carvanha':318,'Sharpedo':319,
  'Wailmer':320,'Wailord':321,
  'Chamallot':322,'Camérupt':323,
  'Chartor':324,
  'Spoink':325,'Groret':326,
  'Spinda':327,
  'Kraknoix':328,
  'Vibraninf':329,'Libégon':330,
  'Cacnea':331,'Cacturne':332,
  'Tylton':333,'Altaria':334,
  'Mangriff':335,
  'Séviper':336,
  'Séléroc':337,
  'Solaroc':338,
  'Barloche':339,'Barbicha':340,
  'Écrapince':341,'Colhomard':342,
  'Balbuto':343,'Kaorine':344,
  'Lilia':345,'Vacilys':346,
  'Anorith':347,'Armaldo':348,
  'Barpau':349,'Milobellus':350,
  'Morphéo':351,
  'Kecleon':352,
  'Polichombr':353,'Branette':354,
  'Skelénox':355,'Téraclope':356,'Noctunoir':477,
  'Tropius':357,
  'Korillon':433,'Éoko':358,
  'Absol':359,
  'Wynaut':360,
  'Stalgamin':361,'Oniglali':362,'Momartik':478,
  'Obalie':363,'Phogleur':364,'Kaimorse':365,
  'Coquiperl':366,'Serpang':367,'Rosabyss':368,
  'Relicanth':369,
  'Paporeille':370,
  'Draby':371,'Drackhaus':372,'Drattak':373,
  'Balbeuth':374,'Métang':375,'Métalosse':376,
  'Regirock':377,
  'Regice':378,
  'Registeel':379,
  'Latias':380,
  'Latios':381,
  'Kyogre':382,
  'Groudon':383,
  'Rayquaza':384,
  'Jirachi':385,
  'Deoxys':386
};
