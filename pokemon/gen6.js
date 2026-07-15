/* ==== pokemon/gen6.js : Pokédex n°650 à 721 (Kalos) ==== */
const LINES_GEN6 = [
{id:'chespin',abilities:['Engrais','Anti-Bombe'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','bulletseed','synthesis','ingrain','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Marisson',types:['plante'],base:st(56,61,65,48,45,38)},
  {name:'Boguérisse',types:['plante'],base:st(61,78,95,56,58,57)},
  {name:'Blindépique',types:['plante','combat'],base:st(88,107,122,74,75,64),abilities:['Engrais','Poing de Fer']}]},
{id:'fennekin',abilities:['Brasier','Magicien'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','mysticalfire','psychic','psybeam','confusion','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Feunnec',types:['feu'],base:st(40,45,40,62,60,60)},
  {name:'Roussil',types:['feu'],base:st(59,59,58,90,70,73)},
  {name:'Goupelin',types:['feu','psy'],base:st(75,69,72,114,100,104)}]},
{id:'froakie',abilities:['Torrent','Protéen'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','nightslash','suckerpunch','darkpulse','knockoff','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Grenousse',types:['eau'],base:st(41,56,40,62,44,71)},
  {name:'Croâporal',types:['eau'],base:st(54,63,52,83,56,97)},
  {name:'Amphinobi',types:['eau','tenebres'],base:st(72,95,67,103,71,122)}]},
{id:'bunnelby',abilities:['Ramassage','Bajoues'],moveIds:['tackle','quickattack','headbutt','dig','earthquake','mudshot','sandtomb','bulldoze','thousandarrows','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sapereau',types:['normal'],base:st(38,36,38,32,36,57)},
  {name:'Excavarenne',types:['normal','sol'],base:st(85,56,77,50,77,78)}]},
{id:'fletchling',abilities:['Cœur de Coq'],moveIds:['gust','wingattack','drillpeck','airslash','aircutter','aerialace','bounce','hurricane','skyattack','ember','flamethrower','fireblast','flamewheel','heatwave','overheat','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Passerouge',types:['normal','vol'],base:st(45,50,43,40,38,62)},
  {name:'Braisillon',types:['feu','vol'],base:st(62,73,55,56,52,84)},
  {name:'Flambusard',types:['feu','vol'],base:st(78,81,71,74,69,126),abilities:['Cœur de Coq','Ailes Cyclone']}]},
{id:'scatterbug',abilities:['Œil Composé'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','stickyweb','infestation','gust','airslash','aircutter','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Lépidonille',types:['insecte'],base:st(38,35,40,27,25,35)},
  {name:'Pérégrain',types:['insecte'],base:st(45,22,60,27,30,29)},
  {name:'Prismillon',types:['insecte','vol'],base:st(80,52,50,90,50,89)}]},
{id:'litleo',abilities:['Rivalité'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','tackle','headbutt','hyperbeam','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Hélionceau',types:['feu','normal'],base:st(62,50,58,73,54,72)},
  {name:'Némélios',types:['feu','normal'],base:st(86,68,72,109,66,106)}]},
{id:'flabebe',abilities:['Cœur Soin'],moveIds:['moonblast','playrough','dazzlinggleam','disarmingvoice','fairywind','drainingkiss','babydolleyes','megadrain','gigadrain','magicalleaf','solarbeam','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Flabébé',types:['fee'],base:st(44,38,39,61,79,42)},
  {name:'Floette',types:['fee'],base:st(54,45,47,75,98,52)},
  {name:'Florges',types:['fee'],base:st(78,65,68,112,154,75)}]},
{id:'skiddo',abilities:['Robe Feuillue'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','bulletseed','synthesis','tackle','headbutt','takedown','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cabriolaine',types:['plante'],base:st(67,62,57,34,54,32)},
  {name:'Chevroum',types:['plante'],base:st(123,100,62,97,81,68)}]},
{id:'pancham',abilities:['Brise Moule','Poing de Fer'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','machpunch','closecombat','flyingpress','poweruppunch','armthrust','revenge','lowkick','nightslash','suckerpunch','darkpulse','knockoff','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Pandespiègle',types:['combat'],base:st(67,82,62,46,48,43)},
  {name:'Pandarbare',types:['combat','tenebres'],base:st(95,124,78,69,71,58)}]},
{id:'furfrou',abilities:['Fourrure'],moveIds:['tackle','quickattack','headbutt','return','facade','hypervoice','boomburst','doubleslap','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Couafarel',types:['normal'],base:st(75,80,60,65,90,102)}]},
{id:'espurr',abilities:['Regard Vif','Infiltration'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','psychicterrain','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Psystigri',types:['psy'],base:st(62,48,54,63,60,68)},
  {name:'Mistigrix',types:['psy'],base:st(74,48,76,83,81,104),abilities:['Regard Vif','Farceur']}]},
{id:'honedge',abilities:['Pression'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','meteormash','autotomize','shiftgear','kingsshield','shadowball','nightshade','shadowclaw','phantomforce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Monorpale',types:['acier','fantome'],base:st(45,80,100,35,37,28)},
  {name:'Dimoclès',types:['acier','fantome'],base:st(59,110,150,45,49,35)},
  {name:'Exagide',types:['acier','fantome'],base:st(60,50,150,50,150,60)}]},
{id:'spritzee',abilities:['Joli Sourire','Voile Aromatique'],moveIds:['moonblast','playrough','dazzlinggleam','disarmingvoice','fairywind','drainingkiss','babydolleyes','aromaticmist','psychic','extrasensory','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Fluvetin',types:['fee'],base:st(78,52,60,63,65,23)},
  {name:'Cocotine',types:['fee'],base:st(101,72,72,99,89,29)}]},
{id:'swirlix',abilities:['Voile Sucré'],moveIds:['moonblast','playrough','dazzlinggleam','disarmingvoice','fairywind','drainingkiss','babydolleyes','doubleslap','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sucroquin',types:['fee'],base:st(62,48,66,59,57,49)},
  {name:'Cupcanaille',types:['fee'],base:st(82,80,86,85,75,72)}]},
{id:'inkay',abilities:['Contestation','Infiltration'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','nightslash','suckerpunch','darkpulse','thief','knockoff','topsyturvy','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sepiatop',types:['tenebres','psy'],base:st(53,54,53,37,46,45)},
  {name:'Sepiatroce',types:['tenebres','psy'],base:st(86,92,88,68,75,73)}]},
{id:'binacle',abilities:['Griffe Solide','Sniper'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','diamondstorm','watergun','hydropump','surf','aquatail','waterpulse','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Opermine',types:['roche','eau'],base:st(42,52,67,39,56,50)},
  {name:'Golgopathe',types:['roche','eau'],base:st(72,105,115,54,86,68)}]},
{id:'skrelp',abilities:['Point Poison','Adaptabilité'],moveIds:['sludge','sludgebomb','poisonjab','poisonfang','poisontail','toxicthread','venomdrench','dragonbreath','dragonclaw','dragonpulse','dragonhammer','watergun','surf','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Venalgue',types:['poison','eau'],base:st(50,60,60,60,60,30)},
  {name:'Kravarech',types:['poison','dragon'],base:st(65,75,90,97,123,44)}]},
{id:'clauncher',abilities:['Méga-Lanceur'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','steameruption','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Flingouste',types:['eau'],base:st(50,53,62,58,63,44)},
  {name:'Gamblast',types:['eau'],base:st(71,73,88,120,89,59)}]},
{id:'helioptile',abilities:['Voile Sable'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','volttackle','parabolicharge','electricterrain','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Galvaran',types:['electrik','normal'],base:st(44,38,33,61,43,70)},
  {name:'Iguolta',types:['electrik','normal'],base:st(62,55,52,109,94,109)}]},
{id:'tyrunt',abilities:['Mâchouille','Tête de Roc'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','diamondstorm','bite','crunch','hyperfang','icefang','poisonfang','dragonbreath','dragonclaw','dragonhammer','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ptyranidur',types:['roche','dragon'],base:st(58,89,77,45,45,48)},
  {name:'Rexillius',types:['roche','dragon'],base:st(82,121,119,69,59,71)}]},
{id:'amaura',abilities:['Rideau Neige'],moveIds:['icebeam','icepunch','icywind','powdersnow','blizzard','iciclespear','freezedry','rockthrow','rockslide','stoneedge','ancientpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Amagara',types:['roche','glace'],base:st(77,59,50,67,63,46)},
  {name:'Dragmara',types:['roche','glace'],base:st(123,77,72,99,92,58)}]},
{id:'sylveon',abilities:['Joli Sourire','Aura Féérique'],moveIds:['moonblast','playrough','dazzlinggleam','disarmingvoice','fairywind','drainingkiss','babydolleyes','aromaticmist','hypervoice','return','facade','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Nymphali',types:['fee'],base:st(95,65,65,110,130,60)}]},
{id:'hawlucha',abilities:['Brise Moule'],moveIds:['karatechop','submission','crosschop','brickbreak','bulkup','superpower','flyingpress','poweruppunch','armthrust','revenge','lowkick','gust','wingattack','airslash','aircutter','aerialace','bounce','skyuppercut','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Brutalibré',types:['combat','vol'],base:st(78,92,75,74,63,118)}]},
{id:'dedenne',abilities:['Bajoues','Ramassage'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','volttackle','parabolicharge','moonblast','dazzlinggleam','disarmingvoice','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Dedenne',types:['electrik','fee'],base:st(67,58,57,81,67,101)}]},
{id:'carbink',abilities:['Fermeté'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','diamondstorm','moonblast','dazzlinggleam','lightscreen','reflect','irondefense','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Strassie',types:['roche','fee'],base:st(50,50,150,50,150,50)}]},
{id:'goomy',abilities:['Hydratation','Point Gluant'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','dragonhammer','watergun','hydropump','surf','muddywater','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Mucuscule',types:['dragon'],base:st(45,50,35,55,75,40)},
  {name:'Colimucus',types:['dragon'],base:st(68,75,53,83,113,60)},
  {name:'Muplodocus',types:['dragon'],base:st(90,100,70,110,150,80)}]},
{id:'klefki',abilities:['Farceur','Magicien'],moveIds:['ironhead','steelwing','irondefense','flashcannon','metalclaw','irontail','autotomize','shiftgear','kingsshield','moonblast','playrough','dazzlinggleam','disarmingvoice','fairylock','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Trousselin',types:['acier','fee'],base:st(57,80,91,80,87,75)}]},
{id:'phantump',abilities:['Fouille'],moveIds:['shadowball','nightshade','shadowclaw','lick','shadowpunch','painsplit','phantomforce','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Brocélôme',types:['fantome','plante'],base:st(43,70,48,50,60,38)},
  {name:'Desséliande',types:['fantome','plante'],base:st(85,110,76,65,82,56)}]},
{id:'pumpkaboo',abilities:['Fouille'],moveIds:['shadowball','nightshade','shadowclaw','lick','shadowpunch','painsplit','phantomforce','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Pitrouille',types:['fantome','plante'],base:st(49,66,70,44,55,51)},
  {name:'Banshitrouye',types:['fantome','plante'],base:st(65,90,122,58,75,84)}]},
{id:'bergmite',abilities:['Fermeté'],moveIds:['icebeam','icepunch','icywind','powdersnow','blizzard','iciclespear','freezedry','tackle','headbutt','takedown','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Grelaçon',types:['glace'],base:st(55,69,85,32,35,28)},
  {name:'Séracrawl',types:['glace'],base:st(95,117,184,44,46,28)}]},
{id:'noibat',abilities:['Fouille','Infiltration'],moveIds:['gust','wingattack','drillpeck','airslash','aircutter','aerialace','bounce','hurricane','skyattack','dragonbreath','dragonclaw','dragonpulse','dragonhammer','boomburst','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sonistrelle',types:['vol','dragon'],base:st(40,30,35,45,40,55)},
  {name:'Bruyverne',types:['vol','dragon'],base:st(85,70,80,97,80,123)}]},
{id:'xerneas',abilities:['Aura Féérique'],moveIds:['moonblast','playrough','dazzlinggleam','disarmingvoice','fairywind','drainingkiss','babydolleyes','geomancy','calmmind','cosmicpower','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Xerneas',types:['fee'],base:st(126,131,95,131,98,99)}]},
{id:'yveltal',abilities:['Aura Sombre'],moveIds:['nightslash','suckerpunch','darkpulse','crunch','knockoff','thief','gust','wingattack','airslash','hurricane','skyattack','oblivionwing','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Yveltal',types:['tenebres','vol'],base:st(126,131,95,131,98,99)}]},
{id:'zygarde',abilities:['Rupture Aura'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dragonpulse','dragonhammer','thousandarrows','thousandwaves','dig','earthquake','mudshot','sandtomb','bulldoze','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Zygarde',types:['dragon','sol'],base:st(108,100,121,81,95,95)}]},
{id:'diancie',abilities:['Fermeté'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','diamondstorm','moonblast','playrough','dazzlinggleam','lightscreen','reflect','irondefense','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Diancie',types:['roche','fee'],base:st(50,100,150,100,150,50)}]},
{id:'hoopa',abilities:['Magicien'],moveIds:['psychic','psybeam','confusion','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','shadowball','nightshade','shadowclaw','phantomforce','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Hoopa',types:['psy','fantome'],base:st(80,110,60,150,130,70)}]},
{id:'volcanion',abilities:['Absorbe-Eau'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','mysticalfire','steameruption','watergun','hydropump','surf','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Volcanion',types:['feu','eau'],base:st(80,110,120,130,90,70)}]},
];
const DEX_NUMBERS_GEN6 = {
  'Marisson':650,'Boguérisse':651,'Blindépique':652,
  'Feunnec':653,'Roussil':654,'Goupelin':655,
  'Grenousse':656,'Croâporal':657,'Amphinobi':658,
  'Sapereau':659,'Excavarenne':660,
  'Passerouge':661,'Braisillon':662,'Flambusard':663,
  'Lépidonille':664,'Pérégrain':665,'Prismillon':666,
  'Hélionceau':667,'Némélios':668,
  'Flabébé':669,'Floette':670,'Florges':671,
  'Cabriolaine':672,'Chevroum':673,
  'Pandespiègle':674,'Pandarbare':675,
  'Couafarel':676,
  'Psystigri':677,'Mistigrix':678,
  'Monorpale':679,'Dimoclès':680,'Exagide':681,
  'Fluvetin':682,'Cocotine':683,
  'Sucroquin':684,'Cupcanaille':685,
  'Sepiatop':686,'Sepiatroce':687,
  'Opermine':688,'Golgopathe':689,
  'Venalgue':690,'Kravarech':691,
  'Flingouste':692,'Gamblast':693,
  'Galvaran':694,'Iguolta':695,
  'Ptyranidur':696,'Rexillius':697,
  'Amagara':698,'Dragmara':699,
  'Nymphali':700,
  'Brutalibré':701,
  'Dedenne':702,
  'Strassie':703,
  'Mucuscule':704,'Colimucus':705,'Muplodocus':706,
  'Trousselin':707,
  'Brocélôme':708,'Desséliande':709,
  'Pitrouille':710,'Banshitrouye':711,
  'Grelaçon':712,'Séracrawl':713,
  'Sonistrelle':714,'Bruyverne':715,
  'Xerneas':716,
  'Yveltal':717,
  'Zygarde':718,
  'Diancie':719,
  'Hoopa':720,
  'Volcanion':721,
};
