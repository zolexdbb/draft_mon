/* ==== pokemon/gen4.js : Pokédex n°387 à 493 ==== */
const LINES_GEN4 = [
{id:'turtwig',abilities:['Engrais','Coque Armure'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bulletseed','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tortipouss',types:['plante'],base:st(55,68,64,45,55,31)},
  {name:'Boskara',types:['plante'],base:st(75,89,85,55,65,36)},
  {name:'Torterra',types:['plante','sol'],base:st(95,109,105,75,85,56)}]},
{id:'chimchar',abilities:['Brasier','Poing de Fer'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','skyuppercut','machpunch','rocksmash','closecombat','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ouisticram',types:['feu'],base:st(44,58,44,58,44,61)},
  {name:'Chimpenfeu',types:['feu','combat'],base:st(64,78,52,78,52,81)},
  {name:'Simiabraz',types:['feu','combat'],base:st(76,104,71,104,71,108)}]},
{id:'piplup',abilities:['Torrent','Battant'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','flashcannon','ironhead','irondefense','steelwing','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Tiplouf',types:['eau'],base:st(53,51,53,61,56,40)},
  {name:'Prinplouf',types:['eau'],base:st(64,66,68,81,76,50)},
  {name:'Pingoléon',types:['eau','acier'],base:st(84,86,88,111,101,60)}]},
{id:'starly',abilities:['Regard Vif','Téméraire'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','gust','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Étourmi',types:['normal','vol'],base:st(40,55,30,30,30,60)},
  {name:'Étourvol',types:['normal','vol'],base:st(55,75,50,40,40,80)},
  {name:'Étouraptor',types:['normal','vol'],base:st(85,120,70,50,60,100),abilities:['Intimidation','Téméraire']}]},
{id:'bidoof',abilities:['Simple','Inconscient'],moveIds:['tackle','quickattack','headbutt','bite','stomp','doubleedge','bodyslam','facade','hypervoice','watergun','hydropump','surf','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Keunotor',types:['normal'],base:st(59,45,40,35,40,31)},
  {name:'Castorno',types:['normal','eau'],base:st(79,85,60,55,60,71)}]},
{id:'kricketot',abilities:['Mue','Fuite'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Crikzik',types:['insecte'],base:st(37,25,41,25,41,25)},
  {name:'Mélokrik',types:['insecte'],base:st(77,85,51,55,51,65),abilities:['Essaim','Technicien']}]},
{id:'shinx',abilities:['Rivalité','Intimidation'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','bite','crunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Lixy',types:['electrik'],base:st(45,65,34,40,34,45)},
  {name:'Luxio',types:['electrik'],base:st(60,85,49,60,49,60)},
  {name:'Luxray',types:['electrik'],base:st(80,120,79,95,79,70)}]},
{id:'cranidos',abilities:['Brise Moule','Sans Limite'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','headbutt','zenheadbutt','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Kranidos',types:['roche'],base:st(67,125,40,30,30,58)},
  {name:'Charkos',types:['roche'],base:st(97,165,60,65,50,58)}]},
{id:'shieldon',abilities:['Fermeté','Anti-Bruit'],moveIds:['rockthrow','rockslide','stoneedge','rockblast','rocktomb','ancientpower','flashcannon','ironhead','irondefense','steelwing','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Dinoclier',types:['roche','acier'],base:st(30,42,118,42,88,30)},
  {name:'Bastiodon',types:['roche','acier'],base:st(60,52,168,47,138,30)}]},
{id:'burmy',abilities:['Mue','Envelocape'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','tackle','protect','endure','safeguard','harden','growl','recover'],
 stages:[
  {name:'Cheniti',types:['insecte'],base:st(40,29,45,29,45,36)}],
 branches:[
  {name:'Cheniselle',types:['insecte','plante'],base:st(60,59,85,79,105,36),abilities:['Anticipation','Envelocape'],extraMoveIds:['vinewhip','razorleaf','megadrain','magicalleaf']},
  {name:'Papilord',types:['insecte','vol'],base:st(70,94,50,94,50,66),abilities:['Essaim','Lentiteintée'],extraMoveIds:['gust','wingattack','airslash','silverwind','aerialace']}
 ]},
{id:'combee',abilities:['Cherche Miel','Agitation'],moveIds:['leechlife','pinmissile','bugbite','furycutter','gust','wingattack','airslash','aerialace','bodyslam','swordsdance','agility','growl','harden','recover','protect','endure','safeguard'],
 stages:[
  {name:'Apitrini',types:['insecte','vol'],base:st(30,30,42,30,42,70)},
  {name:'Apireine',types:['insecte','vol'],base:st(70,80,102,80,102,40),abilities:['Pression','Tension']}]},
{id:'pachirisu',abilities:['Fuite','Ramassage'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','quickattack','swift','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Pachirisu',types:['electrik'],base:st(60,45,70,45,90,95)}]},
{id:'buizel',abilities:['Glissade','Ignifu-Voile'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','quickattack','swift','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Mustébouée',types:['eau'],base:st(55,65,35,60,30,85)},
  {name:'Mustéflott',types:['eau'],base:st(85,105,55,85,50,115)}]},
{id:'cherubi',abilities:['Chlorophylle'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','sunnyday','bodyslam','swordsdance','agility','growl','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Ceribou',types:['plante'],base:st(45,35,45,62,53,35)},
  {name:'Ceriflor',types:['plante'],base:st(70,60,70,87,78,85),abilities:['Don Floral']}]},
{id:'shellos',abilities:['Glu','Lavabo'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','sludge','sludgebomb','acid','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Sancoki',types:['eau'],base:st(76,48,48,57,62,34)},
  {name:'Tritosor',types:['eau','sol'],base:st(111,83,68,92,82,39)}]},
{id:'drifloon',abilities:['Boom Final','Délestage'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','gust','wingattack','airslash','bodyslam','swordsdance','agility','growl','harden','amnesia','recover','protect','endure','safeguard'],
 stages:[
  {name:'Baudrive',types:['fantome','vol'],base:st(90,50,34,60,44,70)},
  {name:'Grodrive',types:['fantome','vol'],base:st(150,80,44,90,54,80)}]},
{id:'buneary',abilities:['Fuite','Maladresse'],moveIds:['tackle','quickattack','furyattack','headbutt','doubleslap','swift','doubleedge','agility','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','jumpkick','highjumpkick'],
 stages:[
  {name:'Laporeille',types:['normal'],base:st(55,66,44,44,56,85)},
  {name:'Lockpin',types:['normal'],base:st(65,76,84,54,96,105),abilities:['Joli Sourire','Maladresse']}]},
{id:'glameow',abilities:['Échauffement','Tempo Perso'],moveIds:['tackle','scratch','bite','crunch','darkpulse','suckerpunch','nightslash','feintattack','slash','quickattack','swordsdance','agility','growl','leer','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip'],
 stages:[
  {name:'Chaglam',types:['normal'],base:st(49,55,42,42,37,85)},
  {name:'Chaffreux',types:['normal'],base:st(71,82,64,64,59,112),abilities:['Isograisse','Tempo Perso']}]},
{id:'stunky',abilities:['Puanteur','Boom Final'],moveIds:['sludge','poisonsting','acid','sludgebomb','poisonjab','crunch','darkpulse','suckerpunch','nightslash','feintattack','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Moufouette',types:['poison','tenebres'],base:st(63,63,47,41,41,74)},
  {name:'Moufflair',types:['poison','tenebres'],base:st(103,93,67,71,61,84)}]},
{id:'bronzor',abilities:['Lévitation','Ignifugé'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','flashcannon','ironhead','irondefense','steelwing','bodyslam','doubleedge','swordsdance','agility','growl','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Archéomire',types:['acier','psy'],base:st(57,24,86,24,86,23)},
  {name:'Archéodong',types:['acier','psy'],base:st(67,89,116,79,116,33)}]},
{id:'chatot',abilities:['Regard Vif','Pieds Confus'],moveIds:['peck','wingattack','drillpeck','hurricane','airslash','aircutter','aerialace','bounce','hypervoice','uproar','swift','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Pijako',types:['normal','vol'],base:st(76,65,45,92,42,91)}]},
{id:'spiritomb',abilities:['Pression','Infiltration'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','nightmare','darkpulse','suckerpunch','nightslash','crunch','bodyslam','doubleedge','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Spiritomb',types:['fantome','tenebres'],base:st(50,92,108,92,108,35)}]},
{id:'gible',abilities:['Voile Sable','Peau Dure'],moveIds:['dragonbreath','dragonclaw','dragonrage','outrage','dracometeor','dragonpulse','earthquake','dig','bonemerang','mudshot','magnitude','stoneedge','rockslide','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Griknot',types:['dragon','sol'],base:st(58,70,45,40,45,42)},
  {name:'Carmache',types:['dragon','sol'],base:st(68,90,65,50,55,82)},
  {name:'Carchacrok',types:['dragon','sol'],base:st(108,130,95,80,85,102),abilities:['Voile Sable','Force Sable']}]},
{id:'riolu',abilities:['Impassible','Attention'],moveIds:['karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','skyuppercut','machpunch','rocksmash','closecombat','aurasphere','vitalthrow','ironhead','flashcannon','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Riolu',types:['combat'],base:st(40,70,40,35,40,60)},
  {name:'Lucario',types:['combat','acier'],base:st(70,110,70,115,70,90)}]},
{id:'hippopotas',abilities:['Sable Volant','Force Sable'],moveIds:['dig','earthquake','bonemerang','mudshot','magnitude','sandtomb','sandattack','tackle','stomp','bite','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Hippopotas',types:['sol'],base:st(68,72,78,38,42,32)},
  {name:'Hippodocus',types:['sol'],base:st(108,112,118,68,72,47)}]},
{id:'skorupi',abilities:['Armurbaston','Sniper'],moveIds:['sludge','poisonsting','acid','sludgebomb','poisonjab','poisonfang','poisontail','crunch','darkpulse','suckerpunch','nightslash','pinmissile','leechlife','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Rapion',types:['poison','insecte'],base:st(40,50,90,30,55,65)},
  {name:'Drascore',types:['poison','tenebres'],base:st(70,90,110,60,75,95)}]},
{id:'croagunk',abilities:['Anticipation','Peau Sèche'],moveIds:['karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','bulkup','superpower','machpunch','rocksmash','closecombat','sludge','poisonsting','acid','sludgebomb','poisonjab','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cradopaud',types:['poison','combat'],base:st(48,61,40,61,40,50)},
  {name:'Coatox',types:['poison','combat'],base:st(83,106,65,86,65,85)}]},
{id:'carnivine',abilities:['Lévitation'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bulletseed','bite','crunch','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Vortente',types:['plante'],base:st(74,100,72,90,72,46)}]},
{id:'finneon',abilities:['Glissade','Lavabo'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','signalbeam','silverwind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Écayon',types:['eau'],base:st(49,49,56,49,61,66)},
  {name:'Luminéon',types:['eau'],base:st(69,69,76,69,86,91)}]},
{id:'snover',abilities:['Alerte Neige','Anti-Bruit'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','icebeam','icepunch','blizzard','icefang','icywind','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Blizzi',types:['plante','glace'],base:st(60,62,50,62,60,40)},
  {name:'Blizzaroi',types:['plante','glace'],base:st(90,92,75,92,85,60)}]},
{id:'rotom',abilities:['Lévitation'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','thunderwave','charge','shockwave','lick','shadowball','nightshade','shadowclaw','confuseray','astonish','bodyslam','swordsdance','agility','harden','amnesia','recover','protect','endure','safeguard'],
 stages:[
  {name:'Motisma',types:['electrik','fantome'],base:st(50,50,77,95,77,91),forms:{
    appareilChauffe:{name:'Motisma Chauffe',types:['electrik','feu'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilLavage:{name:'Motisma Lavage',types:['electrik','eau'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilFrigo:{name:'Motisma Frigo',types:['electrik','glace'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilVentilo:{name:'Motisma Ventilateur',types:['electrik','vol'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilTondeuse:{name:'Motisma Tondeuse',types:['electrik','plante'],base:st(50,65,107,105,107,86),abilities:['Lévitation']}
  }}]},
{id:'uxie',abilities:['Lévitation'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','amnesia','irondefense','bodyslam','swordsdance','agility','harden','growl','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Créhelf',types:['psy'],base:st(75,75,130,75,130,95)}]},
{id:'mesprit',abilities:['Lévitation'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','bodyslam','doubleedge','swordsdance','agility','harden','growl','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Créfollet',types:['psy'],base:st(80,105,105,105,105,80)}]},
{id:'azelf',abilities:['Lévitation'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','futuresight','aurasphere','swift','uturn','bodyslam','doubleedge','swordsdance','agility','harden','growl','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Créfadet',types:['psy'],base:st(75,125,70,125,70,115)}]},
{id:'dialga',abilities:['Pression'],moveIds:['dragonbreath','dragonclaw','outrage','dracometeor','dragonpulse','flashcannon','ironhead','irondefense','steelwing','metronome','hyperbeam','bodyslam','doubleedge','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Dialga',types:['acier','dragon'],base:st(100,120,120,150,100,90)}]},
{id:'palkia',abilities:['Pression'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','dragonbreath','dragonclaw','outrage','dracometeor','dragonpulse','bodyslam','doubleedge','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Palkia',types:['eau','dragon'],base:st(90,120,100,150,120,100)}]},
{id:'heatran',abilities:['Torche','Corps Ardent'],moveIds:['ember','flamethrower','fireblast','firepunch','flamewheel','willowisp','heatwave','overheat','flashcannon','ironhead','irondefense','steelwing','earthquake','magnitude','bodyslam','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Heatran',types:['feu','acier'],base:st(91,90,106,130,106,77)}]},
{id:'regigigas',abilities:['Début Calme'],moveIds:['tackle','hyperbeam','bodyslam','doubleedge','stomp','headbutt','bite','crunch','rockslide','earthquake','icepunch','firepunch','thunderpunch','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Regigigas',types:['normal'],base:st(110,160,110,80,110,100)}]},
{id:'giratina',abilities:['Lévitation'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','dragonbreath','dragonclaw','outrage','dracometeor','dragonpulse','hyperbeam','bodyslam','doubleedge','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Giratina',types:['fantome','dragon'],base:st(150,100,120,100,120,90),forms:{
    orbePlatine:{name:'Giratina (Origine)',types:['fantome','dragon'],base:st(150,120,100,120,100,90),abilities:['Lévitation']}
  }}]},
{id:'cresselia',abilities:['Lévitation'],moveIds:['confusion','psychic','psybeam','zenheadbutt','extrasensory','calmmind','cosmicpower','futuresight','lightscreen','reflect','moonlight','icebeam','icywind','bodyslam','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Cresselia',types:['psy'],base:st(120,70,110,75,120,85)}]},
{id:'phione',abilities:['Hydratation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','icebeam','icywind','bodyslam','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Phione',types:['eau'],base:st(80,80,80,80,80,80)}]},
{id:'manaphy',abilities:['Hydratation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','waterpulse','muddywater','dive','whirlpool','icebeam','icywind','calmmind','cosmicpower','bodyslam','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Manaphy',types:['eau'],base:st(100,100,100,100,100,100)}]},
{id:'darkrai',abilities:['Mauvais Rêve'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','thief','pursuit','knockoff','faketears','confusion','psychic','shadowball','nightmare','hypnosis','bodyslam','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Darkrai',types:['tenebres'],base:st(70,90,90,135,90,125)}]},
{id:'shaymin',abilities:['Médic Nature'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','magicalleaf','needlearm','ingrain','synthesis','bulletseed','mudshot','bodyslam','swordsdance','agility','growl','harden','amnesia','recover','strength','protect','endure','safeguard'],
 stages:[
  {name:'Shaymin',types:['plante'],base:st(100,100,100,100,100,100),forms:{
    gracidee:{name:'Shaymin (Ciel)',types:['plante','vol'],base:st(100,103,75,120,75,127),abilities:['Sérénité']}
  }}]},
{id:'arceus',abilities:['Multi-Type'],moveIds:['tackle','hyperbeam','bodyslam','doubleedge','triattack','swift','earthquake','icebeam','flamethrower','thunderbolt','surf','psychic','shadowball','dragonclaw','closecombat','flashcannon','sludgebomb','crunch','swordsdance','agility','harden','amnesia','recover','strength','protect','endure','safeguard','recover'],
 stages:[
  {name:'Arceus',types:['normal'],base:st(120,120,120,120,120,120),forms:{
    plaqueFlamme:{name:'Arceus (Feu)',types:['feu'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueHydro:{name:'Arceus (Eau)',types:['eau'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueHerbe:{name:'Arceus (Plante)',types:['plante'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueVolt:{name:'Arceus (Électrik)',types:['electrik'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueCiel:{name:'Arceus (Vol)',types:['vol'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueToxicite:{name:'Arceus (Poison)',types:['poison'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueTerre:{name:'Arceus (Sol)',types:['sol'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueInsecte:{name:'Arceus (Insecte)',types:['insecte'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaquePoing:{name:'Arceus (Combat)',types:['combat'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueGlace:{name:'Arceus (Glace)',types:['glace'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueEsprit:{name:'Arceus (Psy)',types:['psy'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueFantome:{name:'Arceus (Fantôme)',types:['fantome'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueRoc:{name:'Arceus (Roche)',types:['roche'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueDraco:{name:'Arceus (Dragon)',types:['dragon'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueFer:{name:'Arceus (Acier)',types:['acier'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']},
    plaqueOmbre:{name:'Arceus (Ténèbres)',types:['tenebres'],base:st(120,120,120,120,120,120),abilities:['Multi-Type']}
  }}]}
];
const DEX_NUMBERS_GEN4 = {
  'Tortipouss':387,'Boskara':388,'Torterra':389,
  'Ouisticram':390,'Chimpenfeu':391,'Simiabraz':392,
  'Tiplouf':393,'Prinplouf':394,'Pingoléon':395,
  'Étourmi':396,'Étourvol':397,'Étouraptor':398,
  'Keunotor':399,'Castorno':400,
  'Crikzik':401,'Mélokrik':402,
  'Lixy':403,'Luxio':404,'Luxray':405,
  'Kranidos':408,'Charkos':409,
  'Dinoclier':410,'Bastiodon':411,
  'Cheniti':412,'Cheniselle':413,'Papilord':414,
  'Apitrini':415,'Apireine':416,
  'Pachirisu':417,
  'Mustébouée':418,'Mustéflott':419,
  'Ceribou':420,'Ceriflor':421,
  'Sancoki':422,'Tritosor':423,
  'Baudrive':425,'Grodrive':426,
  'Laporeille':427,'Lockpin':428,
  'Chaglam':431,'Chaffreux':432,
  'Archéomire':436,'Archéodong':437,
  'Pijako':441,
  'Spiritomb':442,
  'Griknot':443,'Carmache':444,'Carchacrok':445,
  'Riolu':447,'Lucario':448,
  'Hippopotas':449,'Hippodocus':450,
  'Rapion':451,'Drascore':452,
  'Cradopaud':453,'Coatox':454,
  'Vortente':455,
  'Écayon':456,'Luminéon':457,
  'Blizzi':459,'Blizzaroi':460,
  'Motisma':479,
  'Créhelf':480,'Créfollet':481,'Créfadet':482,
  'Dialga':483,'Palkia':484,
  'Heatran':485,
  'Regigigas':486,
  'Giratina':487,
  'Cresselia':488,
  'Phione':489,'Manaphy':490,
  'Darkrai':491,
  'Shaymin':492,
  'Moufouette':434,'Moufflair':435,
  'Arceus':493
};
