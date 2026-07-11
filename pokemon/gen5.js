/* ==== pokemon/gen5.js : Pokédex n°494 à 649 ==== */
const LINES_GEN5 = [
{id:'victini',abilities:['Victorieux'],moveIds:['psychic','psybeam','confusion','extrasensory','zenheadbutt','flamethrower','firepunch','fireblast','overheat','signalbeam','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Victini',types:['psy','feu'],base:st(100,100,100,100,100,100)}]},
{id:'snivy',abilities:['Engrais','Contestation'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','bulletseed','synthesis','ingrain','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Vipélierre',types:['plante'],base:st(45,45,55,45,55,63)},
  {name:'Lianaja',types:['plante'],base:st(60,60,75,60,75,83)},
  {name:'Majaspic',types:['plante'],base:st(75,75,95,75,95,113)}]},
{id:'tepig',abilities:['Brasier','Isograisse'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','karatechop','submission','crosschop','brickbreak','bulkup','superpower','machpunch','rocksmash','closecombat','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Gruikui',types:['feu'],base:st(65,63,45,45,45,45)},
  {name:'Grotichon',types:['feu','combat'],base:st(90,93,55,70,55,55)},
  {name:'Roitiflam',types:['feu','combat'],base:st(110,123,65,100,65,65),abilities:['Brasier','Téméraire']}]},
{id:'oshawott',abilities:['Torrent','Coque Armure'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','razorwind','slash','nightslash','karatechop','crosschop','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Moustillon',types:['eau'],base:st(55,55,45,63,45,45)},
  {name:'Mateloutre',types:['eau'],base:st(75,75,60,83,60,60)},
  {name:'Clamiral',types:['eau'],base:st(95,100,85,108,70,70)}]},
{id:'patrat',abilities:['Fuite','Regard Vif'],moveIds:['tackle','quickattack','headbutt','bite','crunch','hyperfang','superfang','bodyslam','doubleedge','facade','hypervoice','return','frustration','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ratentif',types:['normal'],base:st(45,55,39,35,39,42)},
  {name:'Miradar',types:['normal'],base:st(60,85,69,60,69,77),abilities:['Luminescence','Regard Vif']}]},
{id:'lillipup',abilities:['Esprit Vital','Ramassage'],moveIds:['tackle','quickattack','headbutt','bite','crunch','hyperfang','takedown','bodyslam','doubleedge','facade','hypervoice','return','frustration','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ponchiot',types:['normal'],base:st(45,60,45,25,45,55)},
  {name:'Ponchien',types:['normal'],base:st(65,80,65,35,65,60),abilities:['Intimidation','Baigne Sable']},
  {name:'Mastouffe',types:['normal'],base:st(85,100,90,45,90,80),abilities:['Intimidation','Baigne Sable']}]},
{id:'purrloin',abilities:['Échauffement','Délestage'],moveIds:['scratch','bite','crunch','nightslash','suckerpunch','darkpulse','thief','knockoff','slash','bodyslam','doubleedge','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chacripan',types:['tenebres'],base:st(41,50,37,50,37,66)},
  {name:'Léopardus',types:['tenebres'],base:st(64,88,50,88,50,106)}]},
{id:'pansage',abilities:['Gloutonnerie','Engrais'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','bulletseed','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Feuillajou',types:['plante'],base:st(50,53,48,53,48,64)},
  {name:'Feuiloutan',types:['plante'],base:st(75,98,63,98,63,101)}]},
{id:'pansear',abilities:['Gloutonnerie','Brasier'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Flamajou',types:['feu'],base:st(50,53,48,53,48,64)},
  {name:'Flamoutan',types:['feu'],base:st(75,98,63,98,63,101)}]},
{id:'panpour',abilities:['Gloutonnerie','Torrent'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Flotajou',types:['eau'],base:st(50,53,48,53,48,64)},
  {name:'Flotoutan',types:['eau'],base:st(75,98,63,98,63,101)}]},
{id:'munna',abilities:['Prédiction','Synchro'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','dreameater','nightmare','moonlight','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Munna',types:['psy'],base:st(76,25,45,67,55,24)},
  {name:'Mushana',types:['psy'],base:st(116,55,85,107,95,29)}]},
{id:'pidove',abilities:['Cœur de Coq','Chanceux'],moveIds:['gust','wingattack','drillpeck','airslash','aircutter','aerialace','bounce','hurricane','tackle','quickattack','return','facade','hypervoice','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Poichigeon',types:['normal','vol'],base:st(50,55,50,36,30,43)},
  {name:'Colombeau',types:['normal','vol'],base:st(62,77,62,50,42,65)},
  {name:'Déflaisan',types:['normal','vol'],base:st(80,105,80,65,55,93)}]},
{id:'blitzle',abilities:['Paratonnerre','Motorisé'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','quickattack','takedown','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Zébibron',types:['electrik'],base:st(45,60,32,50,32,76)},
  {name:'Zéblitz',types:['electrik'],base:st(75,100,63,80,63,116)}]},
{id:'roggenrola',abilities:['Fermeté','Armure Rouillée'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','earthquake','dig','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nodulithe',types:['roche'],base:st(55,75,85,25,25,15)},
  {name:'Géolithe',types:['roche'],base:st(70,105,105,50,40,20)},
  {name:'Gigalithe',types:['roche'],base:st(85,135,130,60,70,25),abilities:['Fermeté','Force Sable']}]},
{id:'woobat',abilities:['Inconscient','Maladresse'],moveIds:['gust','airslash','aircutter','psychic','psybeam','confusion','extrasensory','zenheadbutt','attract','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chovsourir',types:['psy','vol'],base:st(55,45,43,55,43,72)},
  {name:'Rhinolove',types:['psy','vol'],base:st(67,57,55,77,55,114)}]},
{id:'drilbur',abilities:['Baigne Sable','Force Sable'],moveIds:['dig','earthquake','mudshot','sandtomb','rockslide','metalclaw','ironhead','steelwing','furycutter','slash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Rototaupe',types:['sol'],base:st(60,85,40,30,45,68)},
  {name:'Minotaupe',types:['sol','acier'],base:st(110,135,60,50,65,88),abilities:['Baigne Sable','Brise Moule']}]},
{id:'audino',abilities:['Cœur Soin','Régé-Force'],moveIds:['pound','doubleslap','headbutt','bodyslam','doubleedge','facade','hypervoice','secretpower','psychic','healbell','wish','moonlight','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nanméouïe',types:['normal'],base:st(103,60,86,60,86,50)}]},
{id:'timburr',abilities:['Cran','Sans Limite'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','machpunch','rocksmash','closecombat','dynamicpunch','focuspunch','armthrust','revenge','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Charpenti',types:['combat'],base:st(75,80,55,25,35,35)},
  {name:'Ouvrifier',types:['combat'],base:st(85,105,85,40,50,40)},
  {name:'Bétochef',types:['combat'],base:st(105,140,95,55,65,45),abilities:['Cran','Poing de Fer']}]},
{id:'tympole',abilities:['Glissade','Hydratation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dig','earthquake','mudshot','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tritonde',types:['eau'],base:st(50,50,40,50,40,64)},
  {name:'Batracné',types:['eau','sol'],base:st(75,65,55,65,55,69)},
  {name:'Crapustule',types:['eau','sol'],base:st(105,85,75,85,75,74),abilities:['Glissade','Toxitouche']}]},
{id:'throh',abilities:['Cran','Attention'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','armthrust','revenge','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Judokrak',types:['combat'],base:st(120,100,85,30,85,45)}]},
{id:'sawk',abilities:['Fermeté','Attention'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','machpunch','closecombat','armthrust','revenge','lowkick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Karaclée',types:['combat'],base:st(75,125,75,30,75,85)}]},
{id:'sewaddle',abilities:['Essaim','Chlorophylle'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','vinewhip','razorleaf','megadrain','gigadrain','leafblade','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Larveyette',types:['insecte','plante'],base:st(45,53,70,40,60,42)},
  {name:'Couverdure',types:['insecte','plante'],base:st(55,63,90,50,80,42),abilities:['Feuille Garde','Chlorophylle']},
  {name:'Manternel',types:['insecte','plante'],base:st(75,103,80,70,70,92),abilities:['Essaim','Chlorophylle']}]},
{id:'venipede',abilities:['Point Poison','Essaim'],moveIds:['poisonsting','sludge','sludgebomb','poisonjab','poisonfang','poisontail','pinmissile','megahorn','bugbite','furycutter','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Venipatte',types:['insecte','poison'],base:st(30,45,59,30,39,57)},
  {name:'Scobolide',types:['insecte','poison'],base:st(40,55,99,40,79,47)},
  {name:'Brutapode',types:['insecte','poison'],base:st(60,90,89,55,69,112),abilities:['Point Poison','Turbo']}]},
{id:'cottonee',abilities:['Farceur','Infiltration'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','stunspore','sleeppowder','cottonspore','encore','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Doudouvet',types:['plante'],base:st(40,27,60,37,50,66)},
  {name:'Farfaduvet',types:['plante'],base:st(60,67,85,77,75,116),abilities:['Farceur','Infiltration']}]},
{id:'petilil',abilities:['Chlorophylle','Tempo Perso'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','sleeppowder','stunspore','synthesis','ingrain','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chlorobule',types:['plante'],base:st(45,35,50,70,50,30)},
  {name:'Fragilady',types:['plante'],base:st(70,60,75,110,75,90),abilities:['Chlorophylle','Tempo Perso']}]},
{id:'basculin',abilities:['Téméraire','Adaptabilité'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','crunch','bite','superpower','headbutt','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Bargantua',types:['eau'],base:st(70,92,65,80,55,98)}]},
{id:'sandile',abilities:['Intimidation','Impudence'],moveIds:['dig','earthquake','mudshot','sandtomb','bite','crunch','nightslash','suckerpunch','darkpulse','thief','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Mascaïman',types:['sol','tenebres'],base:st(50,72,35,35,35,65)},
  {name:'Escroco',types:['sol','tenebres'],base:st(60,82,45,45,45,74)},
  {name:'Crocorible',types:['sol','tenebres'],base:st(95,117,70,65,70,92),abilities:['Intimidation','Impudence']}]},
{id:'darumaka',abilities:['Agitation','Attention'],moveIds:['flamewheel','ember','flamethrower','fireblast','firepunch','heatwave','overheat','takedown','headbutt','superpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Darumarond',types:['feu'],base:st(70,90,45,15,45,50)},
  {name:'Darumacho',types:['feu'],base:st(105,140,55,30,55,95),abilities:['Sans Limite','Mode Zen']}]},
{id:'maractus',abilities:['Absorbe-Eau','Chlorophylle'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','needlearm','stunspore','sleeppowder','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Maracachi',types:['plante'],base:st(75,86,67,106,67,60)}]},
{id:'dwebble',abilities:['Fermeté','Coque Armure'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','leechlife','pinmissile','megahorn','bugbite','furycutter','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Crabicoque',types:['insecte','roche'],base:st(50,65,85,35,35,55)},
  {name:'Crabaraque',types:['insecte','roche'],base:st(70,95,125,65,75,45)}]},
{id:'scraggy',abilities:['Mue','Impudence'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','lowkick','bite','crunch','nightslash','suckerpunch','darkpulse','headbutt','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Baggiguane',types:['tenebres','combat'],base:st(50,75,70,35,70,48)},
  {name:'Baggaïd',types:['tenebres','combat'],base:st(65,90,115,45,115,58),abilities:['Mue','Intimidation']}]},
{id:'sigilyph',abilities:['Peau Miracle','Garde Magik'],moveIds:['psychic','psybeam','confusion','extrasensory','zenheadbutt','gust','airslash','aircutter','hurricane','skyattack','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cryptéro',types:['psy','vol'],base:st(72,58,80,103,80,97)}]},
{id:'yamask',abilities:['Momie'],moveIds:['shadowball','nightshade','shadowclaw','lick','shadowpunch','psychic','confusion','willowisp','painsplit','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tutafeh',types:['fantome'],base:st(38,30,85,55,65,30)},
  {name:'Tutankafer',types:['fantome'],base:st(58,50,145,95,105,30)}]},
{id:'tirtouga',abilities:['Solide Roc','Fermeté'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','rockthrow','rockslide','stoneedge','rockblast','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Carapagos',types:['eau','roche'],base:st(54,78,103,53,45,22)},
  {name:'Mégapagos',types:['eau','roche'],base:st(74,108,133,83,65,32)}]},
{id:'archen',abilities:['Défaitiste'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','ancientpower','gust','wingattack','drillpeck','airslash','aircutter','aerialace','skyattack','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Arkéapti',types:['roche','vol'],base:st(55,112,45,74,45,70)},
  {name:'Aéroptéryx',types:['roche','vol'],base:st(75,140,65,112,65,110)}]},
{id:'trubbish',abilities:['Puanteur','Armure Rouillée'],moveIds:['sludge','sludgebomb','poisonjab','poisonfang','poisontail','acid','gust','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Miamiasme',types:['poison'],base:st(50,50,62,40,62,65)},
  {name:'Miasmax',types:['poison'],base:st(80,95,82,60,82,75)}]},
{id:'zorua',abilities:['Illusion'],moveIds:['scratch','bite','crunch','nightslash','suckerpunch','darkpulse','thief','knockoff','slash','extrasensory','psychic','shadowball','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Zorua',types:['tenebres'],base:st(40,65,40,80,40,65)},
  {name:'Zoroark',types:['tenebres'],base:st(60,105,60,120,60,105)}]},
{id:'minccino',abilities:['Joli Sourire','Technicien'],moveIds:['pound','doubleslap','tackle','quickattack','headbutt','return','facade','hypervoice','secretpower','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Chinchidou',types:['normal'],base:st(55,50,40,40,40,75)},
  {name:'Pashmilla',types:['normal'],base:st(75,95,60,65,60,115),abilities:['Joli Sourire','Technicien']}]},
{id:'gothita',abilities:['Fouille','Battant'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','shadowball','darkpulse','thunderbolt','icebeam','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Scrutella',types:['psy'],base:st(45,30,50,55,65,45)},
  {name:'Mesmérella',types:['psy'],base:st(60,45,70,75,85,55)},
  {name:'Sidérella',types:['psy'],base:st(70,55,95,95,110,65)}]},
{id:'solosis',abilities:['Envelocape','Garde Magik'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','shadowball','darkpulse','calmmind','cosmicpower','painsplit','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nucléos',types:['psy'],base:st(45,30,40,105,50,20)},
  {name:'Méios',types:['psy'],base:st(65,40,50,125,60,30)},
  {name:'Symbios',types:['psy'],base:st(110,65,75,125,85,30),abilities:['Envelocape','Garde Magik']}]},
{id:'ducklett',abilities:['Regard Vif','Cœur de Coq'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','gust','wingattack','airslash','aircutter','aerialace','bounce','hurricane','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Couaneton',types:['eau','vol'],base:st(62,44,50,44,50,55)},
  {name:'Lakmécygne',types:['eau','vol'],base:st(75,87,63,87,63,98)}]},
{id:'vanillite',abilities:['Corps Gel','Rideau Neige'],moveIds:['icebeam','icepunch','icywind','powdersnow','blizzard','iciclespear','watergun','hydropump','mist','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sorbébé',types:['glace'],base:st(36,50,50,65,60,44)},
  {name:'Sorboul',types:['glace'],base:st(51,65,65,80,75,59)},
  {name:'Sorbouboul',types:['glace'],base:st(71,95,85,110,95,79),abilities:['Corps Gel','Alerte Neige']}]},
{id:'deerling',abilities:['Chlorophylle','Herbivore'],moveIds:['tackle','headbutt','takedown','megahorn','megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Vivaldaim',types:['normal','plante'],base:st(60,60,50,40,50,75)},
  {name:'Haydaim',types:['normal','plante'],base:st(80,100,70,60,70,95)}]},
{id:'emolga',abilities:['Statik','Motorisé'],moveIds:['thundershock','thunderbolt','thunderpunch','discharge','thunderwave','charge','shockwave','volttackle','gust','airslash','aircutter','aerialace','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Emolga',types:['electrik','vol'],base:st(55,75,60,75,60,103)}]},
{id:'karrablast',abilities:['Essaim','Mue'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','tackle','headbutt','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Carabing',types:['insecte'],base:st(50,75,45,40,45,60)},
  {name:'Lançargot',types:['insecte','acier'],base:st(70,135,105,60,105,20),abilities:['Essaim','Coque Armure']}]},
{id:'foongus',abilities:['Pose Spore','Régé-Force'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','sludge','sludgebomb','poisonjab','stunspore','sleeppowder','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Trompignon',types:['plante','poison'],base:st(69,55,45,55,55,15)},
  {name:'Gaulet',types:['plante','poison'],base:st(114,85,70,85,80,30)}]},
{id:'frillish',abilities:['Absorbe-Eau','Corps Maudit'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','shadowball','nightshade','shadowclaw','willowisp','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Viskuse',types:['eau','fantome'],base:st(55,40,50,65,85,40)},
  {name:'Moyade',types:['eau','fantome'],base:st(100,60,70,85,105,60)}]},
{id:'alomomola',abilities:['Hydratation','Cœur Soin'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','healbell','wish','moonlight','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Mamanbo',types:['eau'],base:st(165,75,80,40,45,65)}]},
{id:'joltik',abilities:['Œil Composé','Tension'],moveIds:['thundershock','thunderbolt','thunderpunch','discharge','thunderwave','leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Statitik',types:['insecte','electrik'],base:st(50,47,50,57,50,65)},
  {name:'Mygavolt',types:['insecte','electrik'],base:st(70,77,60,97,60,108),abilities:['Œil Composé','Essaim']}]},
{id:'ferroseed',abilities:['Épine de Fer'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','ironhead','flashcannon','steelwing','irondefense','metalclaw','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Grindur',types:['plante','acier'],base:st(44,50,91,24,86,10)},
  {name:'Noacier',types:['plante','acier'],base:st(74,94,131,54,116,20),abilities:['Épine de Fer','Anticipation']}]},
{id:'klink',abilities:['Plus','Moins'],moveIds:['ironhead','flashcannon','steelwing','irondefense','metalclaw','thundershock','thunderbolt','discharge','shockwave','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tic',types:['acier'],base:st(40,55,70,45,60,30)},
  {name:'Clic',types:['acier'],base:st(60,80,95,70,85,50)},
  {name:'Cliticlic',types:['acier'],base:st(60,100,115,70,85,90),abilities:['Plus','Moins']}]},
{id:'tynamo',abilities:['Lévitation'],moveIds:['thundershock','thunderbolt','thunderpunch','discharge','thunderwave','charge','shockwave','volttackle','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Anchwatt',types:['electrik'],base:st(35,55,40,45,40,60)},
  {name:'Lampéroie',types:['electrik'],base:st(65,85,70,75,70,40)},
  {name:'Ohmassacre',types:['electrik'],base:st(85,115,80,105,80,50)}]},
{id:'elgyem',abilities:['Télépathe','Synchro'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','shadowball','darkpulse','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Lewsor',types:['psy'],base:st(55,55,55,85,55,30)},
  {name:'Neitram',types:['psy'],base:st(75,75,75,125,95,40)}]},
{id:'litwick',abilities:['Torche','Corps Ardent'],moveIds:['shadowball','nightshade','shadowclaw','lick','shadowpunch','ember','flamethrower','fireblast','firepunch','willowisp','heatwave','overheat','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Funécire',types:['fantome','feu'],base:st(50,30,55,65,55,20)},
  {name:'Mélancolux',types:['fantome','feu'],base:st(60,40,60,95,60,55)},
  {name:'Lugulabre',types:['fantome','feu'],base:st(60,55,90,145,90,80),abilities:['Torche','Marque Ombre']}]},
{id:'axew',abilities:['Rivalité','Brise Moule'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','crunch','slash','nightslash','karatechop','crosschop','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Coupenotte',types:['dragon'],base:st(46,87,60,30,40,57)},
  {name:'Incisache',types:['dragon'],base:st(66,117,70,40,50,67)},
  {name:'Tranchodon',types:['dragon'],base:st(76,147,90,60,70,97),abilities:['Rivalité','Tension']}]},
{id:'cubchoo',abilities:['Rideau Neige'],moveIds:['icebeam','icepunch','icywind','powdersnow','blizzard','iciclespear','bite','crunch','superpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Polarhume',types:['glace'],base:st(55,70,40,60,40,40)},
  {name:'Polagriffe',types:['glace'],base:st(95,110,80,70,80,50),abilities:['Rideau Neige','Glissade']}]},
{id:'cryogonal',abilities:['Lévitation'],moveIds:['icebeam','icepunch','icywind','powdersnow','blizzard','iciclespear','confuseray','solarbeam','recover','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','strength','protect','endure','safeguard'],
 stages:[
  {name:'Hexagel',types:['glace'],base:st(70,50,30,95,135,105)}]},
{id:'shelmet',abilities:['Hydratation','Coque Armure'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','acid','sludge','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Escargaume',types:['insecte'],base:st(50,40,85,40,65,25)},
  {name:'Limaspeed',types:['insecte'],base:st(80,70,40,100,60,145),abilities:['Hydratation','Glu']}]},
{id:'stunfisk',abilities:['Statik','Échauffement'],moveIds:['thundershock','thunderbolt','discharge','thunderwave','shockwave','dig','earthquake','mudshot','sandtomb','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Limonde',types:['sol','electrik'],base:st(109,66,84,81,99,32)}]},
{id:'mienfoo',abilities:['Attention','Régé-Force'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','machpunch','closecombat','armthrust','revenge','lowkick','slash','nightslash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Kungfouine',types:['combat'],base:st(45,85,50,55,50,65)},
  {name:'Shaofouine',types:['combat'],base:st(65,125,60,95,60,105),abilities:['Attention','Téméraire']}]},
{id:'druddigon',abilities:['Peau Dure','Sans Limite'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','crunch','slash','nightslash','superpower','rockslide','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Drakkarmin',types:['dragon'],base:st(77,120,90,60,90,48)}]},
{id:'golett',abilities:['Poing de Fer','Maladresse'],moveIds:['shadowball','nightshade','shadowclaw','shadowpunch','dig','earthquake','mudshot','ironhead','icepunch','firepunch','thunderpunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Gringolem',types:['sol','fantome'],base:st(59,74,50,35,50,35)},
  {name:'Golemastoc',types:['sol','fantome'],base:st(89,124,80,55,80,55),abilities:['Poing de Fer','Annule Garde']}]},
{id:'pawniard',abilities:['Acharné','Attention'],moveIds:['nightslash','suckerpunch','darkpulse','crunch','knockoff','ironhead','metalclaw','flashcannon','slash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Scalpion',types:['tenebres','acier'],base:st(45,85,70,40,40,60)},
  {name:'Scalproie',types:['tenebres','acier'],base:st(65,125,100,60,70,70),abilities:['Acharné','Pression']}]},
{id:'bouffalant',abilities:['Téméraire','Herbivore'],moveIds:['tackle','headbutt','takedown','megahorn','bodyslam','doubleedge','facade','hypervoice','return','frustration','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Frison',types:['normal'],base:st(95,110,95,40,95,55)}]},
{id:'rufflet',abilities:['Regard Vif','Sans Limite'],moveIds:['gust','wingattack','drillpeck','airslash','aircutter','aerialace','bounce','hurricane','skyattack','crunch','superpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Furaiglon',types:['normal','vol'],base:st(70,83,50,37,50,60)},
  {name:'Gueriaigle',types:['normal','vol'],base:st(100,123,75,57,75,80),abilities:['Regard Vif','Acharné']}]},
{id:'vullaby',abilities:['Cœur de Coq','Envelocape'],moveIds:['nightslash','suckerpunch','darkpulse','crunch','knockoff','gust','airslash','aircutter','aerialace','bounce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Vostourno',types:['tenebres','vol'],base:st(70,55,75,45,65,60)},
  {name:'Vaututrice',types:['tenebres','vol'],base:st(110,65,105,55,95,80),abilities:['Cœur de Coq','Envelocape']}]},
{id:'heatmor',abilities:['Gloutonnerie','Torche'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','leechlife','bugbite','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Aflamanoir',types:['feu'],base:st(85,97,66,105,66,65)}]},
{id:'durant',abilities:['Essaim','Agitation'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','ironhead','metalclaw','flashcannon','steelwing','irondefense','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Fermite',types:['insecte','acier'],base:st(58,109,112,48,48,109)}]},
{id:'deino',abilities:['Agitation'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','nightslash','suckerpunch','darkpulse','crunch','knockoff','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Solochi',types:['tenebres','dragon'],base:st(52,65,50,45,50,38)},
  {name:'Diamat',types:['tenebres','dragon'],base:st(72,85,70,65,70,58)},
  {name:'Trioxhydre',types:['tenebres','dragon'],base:st(92,105,90,125,90,98),abilities:['Lévitation']}]},
{id:'larvesta',abilities:['Corps Ardent','Essaim'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Pyronille',types:['insecte','feu'],base:st(55,85,55,50,55,60)},
  {name:'Pyrax',types:['insecte','feu'],base:st(85,60,65,135,105,100),abilities:['Corps Ardent','Essaim']}]},
{id:'cobalion',abilities:['Cœur Noble'],moveIds:['ironhead','flashcannon','steelwing','irondefense','metalclaw','karatechop','submission','crosschop','brickbreak','bulkup','superpower','closecombat','armthrust','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cobaltium',types:['acier','combat'],base:st(91,90,129,90,72,108)}]},
{id:'terrakion',abilities:['Cœur Noble'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','karatechop','submission','crosschop','brickbreak','bulkup','superpower','closecombat','armthrust','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Terrakium',types:['roche','combat'],base:st(91,129,90,72,90,108)}]},
{id:'virizion',abilities:['Cœur Noble'],moveIds:['megadrain','gigadrain','leafblade','magicalleaf','bulletseed','solarbeam','karatechop','submission','crosschop','brickbreak','bulkup','superpower','closecombat','armthrust','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Viridium',types:['plante','combat'],base:st(91,90,72,90,129,108)}]},
{id:'tornadus',abilities:['Farceur'],moveIds:['gust','wingattack','drillpeck','airslash','aircutter','aerialace','bounce','hurricane','skyattack','focusblast','darkpulse','crunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Boréas',types:['vol'],base:st(79,115,70,125,80,111)}]},
{id:'thundurus',abilities:['Farceur'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','gust','wingattack','airslash','hurricane','focusblast','darkpulse','crunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Fulguris',types:['electrik','vol'],base:st(79,115,70,125,80,111)}]},
{id:'reshiram',abilities:['Turbo Brasier'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','ember','flamethrower','fireblast','firepunch','heatwave','overheat','blastburn','sacredfire','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Reshiram',types:['dragon','feu'],base:st(100,120,100,150,120,90)}]},
{id:'zekrom',abilities:['Téra-Voltage'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','thundershock','thunderbolt','thunder','thunderpunch','discharge','volttackle','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Zekrom',types:['dragon','electrik'],base:st(100,150,120,120,100,90)}]},
{id:'landorus',abilities:['Force Sable'],moveIds:['dig','earthquake','mudshot','sandtomb','rockslide','gust','wingattack','airslash','hurricane','focusblast','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Démétéros',types:['sol','vol'],base:st(89,125,90,115,80,101)}]},
{id:'kyurem',abilities:['Pression'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','icebeam','icepunch','icywind','blizzard','iciclespear','sheercold','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Kyurem',types:['dragon','glace'],base:st(125,130,90,130,90,95)}]},
{id:'keldeo',abilities:['Cœur Noble'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','karatechop','submission','crosschop','brickbreak','bulkup','superpower','closecombat','armthrust','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Keldeo',types:['eau','combat'],base:st(91,72,90,129,90,108)}]},
{id:'meloetta',abilities:['Sérénité'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','hypervoice','return','facade','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Meloetta',types:['normal','psy'],base:st(100,77,77,128,128,90)}]},
{id:'genesect',abilities:['Télécharge'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','ironhead','flashcannon','steelwing','irondefense','metalclaw','thunderbolt','icebeam','flamethrower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Genesect',types:['insecte','acier'],base:st(71,120,95,120,95,99)}]},
];
const DEX_NUMBERS_GEN5 = {
  'Victini':494,
  'Vipélierre':495,'Lianaja':496,'Majaspic':497,
  'Gruikui':498,'Grotichon':499,'Roitiflam':500,
  'Moustillon':501,'Mateloutre':502,'Clamiral':503,
  'Ratentif':504,'Miradar':505,
  'Ponchiot':506,'Ponchien':507,'Mastouffe':508,
  'Chacripan':509,'Léopardus':510,
  'Feuillajou':511,'Feuiloutan':512,
  'Flamajou':513,'Flamoutan':514,
  'Flotajou':515,'Flotoutan':516,
  'Munna':517,'Mushana':518,
  'Poichigeon':519,'Colombeau':520,'Déflaisan':521,
  'Zébibron':522,'Zéblitz':523,
  'Nodulithe':524,'Géolithe':525,'Gigalithe':526,
  'Chovsourir':527,'Rhinolove':528,
  'Rototaupe':529,'Minotaupe':530,
  'Nanméouïe':531,
  'Charpenti':532,'Ouvrifier':533,'Bétochef':534,
  'Tritonde':535,'Batracné':536,'Crapustule':537,
  'Judokrak':538,
  'Karaclée':539,
  'Larveyette':540,'Couverdure':541,'Manternel':542,
  'Venipatte':543,'Scobolide':544,'Brutapode':545,
  'Doudouvet':546,'Farfaduvet':547,
  'Chlorobule':548,'Fragilady':549,
  'Bargantua':550,
  'Mascaïman':551,'Escroco':552,'Crocorible':553,
  'Darumarond':554,'Darumacho':555,
  'Maracachi':556,
  'Crabicoque':557,'Crabaraque':558,
  'Baggiguane':559,'Baggaïd':560,
  'Cryptéro':561,
  'Tutafeh':562,'Tutankafer':563,
  'Carapagos':564,'Mégapagos':565,
  'Arkéapti':566,'Aéroptéryx':567,
  'Miamiasme':568,'Miasmax':569,
  'Zorua':570,'Zoroark':571,
  'Chinchidou':572,'Pashmilla':573,
  'Scrutella':574,'Mesmérella':575,'Sidérella':576,
  'Nucléos':577,'Méios':578,'Symbios':579,
  'Couaneton':580,'Lakmécygne':581,
  'Sorbébé':582,'Sorboul':583,'Sorbouboul':584,
  'Vivaldaim':585,'Haydaim':586,
  'Emolga':587,
  'Carabing':588,'Lançargot':589,
  'Trompignon':590,'Gaulet':591,
  'Viskuse':592,'Moyade':593,
  'Mamanbo':594,
  'Statitik':595,'Mygavolt':596,
  'Grindur':597,'Noacier':598,
  'Tic':599,'Clic':600,'Cliticlic':601,
  'Anchwatt':602,'Lampéroie':603,'Ohmassacre':604,
  'Lewsor':605,'Neitram':606,
  'Funécire':607,'Mélancolux':608,'Lugulabre':609,
  'Coupenotte':610,'Incisache':611,'Tranchodon':612,
  'Polarhume':613,'Polagriffe':614,
  'Hexagel':615,
  'Escargaume':616,'Limaspeed':617,
  'Limonde':618,
  'Kungfouine':619,'Shaofouine':620,
  'Drakkarmin':621,
  'Gringolem':622,'Golemastoc':623,
  'Scalpion':624,'Scalproie':625,
  'Frison':626,
  'Furaiglon':627,'Gueriaigle':628,
  'Vostourno':629,'Vaututrice':630,
  'Aflamanoir':631,
  'Fermite':632,
  'Solochi':633,'Diamat':634,'Trioxhydre':635,
  'Pyronille':636,'Pyrax':637,
  'Cobaltium':638,
  'Terrakium':639,
  'Viridium':640,
  'Boréas':641,
  'Fulguris':642,
  'Reshiram':643,
  'Zekrom':644,
  'Démétéros':645,
  'Kyurem':646,
  'Keldeo':647,
  'Meloetta':648,
  'Genesect':649,
};
