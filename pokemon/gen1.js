/* ==== pokemon/gen1.js : Pokédex n°1 à 151 ==== */
const LINES_GEN1 = [
{id:'bulbasaur',abilities:['Engrais','Chlorophylle'],moveIds:['absorb','vinewhip','razorleaf','megadrain','gigadrain','solarbeam','sludge','poisonjab','bodyslam','doubleedge','toxic','sleeppowder','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Bulbizarre',types:['plante','poison'],base:st(45,49,49,65,65,45)},
  {name:'Herbizarre',types:['plante','poison'],base:st(60,62,63,80,80,60)},
  {name:'Florizarre',types:['plante','poison'],base:st(80,82,83,100,100,80),forms:{
    venusaurite:{name:'Méga-Florizarre',types:['plante','poison'],base:st(80,100,123,122,120,80),abilities:['Isograisse']}
  }}]},
{id:'charmander',abilities:['Brasier','Force Soleil'],moveIds:['scratch','ember','flamethrower','fireblast','firepunch','slash','bite','bodyslam','doubleedge','dragonrage','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','rage','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Salamèche',types:['feu'],base:st(39,52,43,60,50,65)},
  {name:'Reptincel',types:['feu'],base:st(58,64,58,80,65,80)},
  {name:'Dracaufeu',types:['feu','vol'],base:st(78,84,78,109,85,100),forms:{
    charizarditeX:{name:'Méga-Dracaufeu X',types:['feu','dragon'],base:st(78,130,111,130,85,100),abilities:['Griffe Solide']},
    charizarditeY:{name:'Méga-Dracaufeu Y',types:['feu','vol'],base:st(78,104,78,159,115,100),abilities:['Sécheresse']}
  }}]},
{id:'squirtle',abilities:['Torrent','Cuvette'],moveIds:['raindance','tackle','bubble','watergun','surf','hydropump','bubblebeam','waterfall','icebeam','bite','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','withdraw','whirlpool','clamp','octazooka'],
 stages:[
  {name:'Carapuce',types:['eau'],base:st(44,48,65,50,64,43)},
  {name:'Carabaffe',types:['eau'],base:st(59,63,80,65,80,58)},
  {name:'Tortank',types:['eau'],base:st(79,83,100,85,105,78),forms:{
    blastoisite:{name:'Méga-Tortank',types:['eau'],base:st(79,103,120,135,115,78),abilities:['Méga-Lanceur']}
  }}]},
{id:'caterpie',abilities:['Écran Poudre','Fuite'],moveIds:['tackle','leechlife','bugbite','pinmissile','megahorn','bodyslam','harden','growl','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','stringshot','spiderweb'],
 stages:[
  {name:'Chenipan',types:['insecte'],base:st(45,30,35,20,20,45)},
  {name:'Chrysacier',types:['insecte'],base:st(50,20,55,25,25,30)},
  {name:'Papilusion',types:['insecte','vol'],base:st(60,45,50,90,80,70)}]},
{id:'weedle',abilities:['Écran Poudre','Fuite'],moveIds:['poisonsting','twineedle','bugbite','pinmissile','sludge','acid','tackle','bodyslam','harden','growl','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','stringshot','spiderweb'],
 stages:[
  {name:'Aspicot',types:['insecte','poison'],base:st(40,35,30,20,20,50)},
  {name:'Coconfort',types:['insecte','poison'],base:st(45,25,50,25,25,35)},
  {name:'Dardargnan',types:['insecte','poison'],base:st(65,90,40,45,80,75)}]},
{id:'pidgey',abilities:['Regard Vif','Pieds Fébriles'],moveIds:['tackle','peck','gust','quickattack','wingattack','furyattack','drillpeck','bodyslam','doubleedge','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','fly','skyattack','mirrormove','sweetscent','mimic'],
 stages:[
  {name:'Roucool',types:['normal','vol'],base:st(40,45,40,35,35,56)},
  {name:'Roucoups',types:['normal','vol'],base:st(63,60,55,50,50,71)},
  {name:'Roucarnage',types:['normal','vol'],base:st(83,80,75,70,70,101)}]},
{id:'rattata',abilities:['Fuite','Cran'],moveIds:['tackle','quickattack','bite','hyperfang','slash','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','cometpunch','sketch'],
 stages:[
  {name:'Rattata',types:['normal'],base:st(30,56,35,25,35,72)},
  {name:'Rattatac',types:['normal'],base:st(55,81,60,50,70,97)}]},
{id:'spearow',abilities:['Regard Vif','Sniper'],moveIds:['tackle','peck','furyattack','quickattack','drillpeck','wingattack','agility','bodyslam','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','fly','skyattack','mirrormove'],
 stages:[
  {name:'Piafabec',types:['normal','vol'],base:st(40,60,30,31,31,70)},
  {name:'Rapasdepic',types:['normal','vol'],base:st(65,90,65,61,61,100)}]},
{id:'ekans',abilities:['Intimidation','Mue'],moveIds:['tackle','poisonsting','acid','sludge','sludgebomb','bite','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','toxic','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','glare'],
 stages:[
  {name:'Abo',types:['poison'],base:st(35,60,44,40,54,55)},
  {name:'Arbok',types:['poison'],base:st(60,85,69,65,79,80)}]},
{id:'pikachu',abilities:['Statik','Paratonnerre'],moveIds:['tackle','quickattack','thundershock','thunderbolt','thunder','thunderpunch','parabolicharge','electricterrain','bodyslam','doubleedge','agility','swordsdance','growl','leer','harden','amnesia','thunderwave','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','spark','zapcannon'],
 stages:[
  {name:'Pichu',types:['electrik'],base:st(20,40,15,35,35,60)},
  {name:'Pikachu',types:['electrik'],base:st(35,55,40,50,50,90)},
  {name:'Raichu',types:['electrik'],base:st(60,90,55,90,80,110)}]},
{id:'sandshrew',abilities:['Voile Sable','Baigne Sable'],moveIds:['sandstorm','scratch','slash','dig','earthquake','bonemerang','rockslide','mudshot','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','mudslap','magnitude','boneclub','bonerush','sandattack','defensecurl'],
 stages:[
  {name:'Sabelette',types:['sol'],base:st(50,75,85,20,30,40)},
  {name:'Sablaireau',types:['sol'],base:st(65,100,110,45,55,65)}]},
{id:'nidoranf',abilities:['Point Poison','Rivalité'],moveIds:['tackle','poisonsting','hornattack','doublekick','bite','sludge','sludgebomb','bodyslam','doubleedge','earthquake','swordsdance','agility','growl','leer','harden','amnesia','toxic','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Nidoran♀',types:['poison'],base:st(55,47,52,40,40,41)},
  {name:'Nidorina',types:['poison'],base:st(70,62,67,55,55,56)},
  {name:'Nidoqueen',types:['poison','sol'],base:st(90,82,87,75,85,76)}]},
{id:'nidoranm',abilities:['Point Poison','Rivalité'],moveIds:['tackle','poisonsting','hornattack','doublekick','bite','sludge','sludgebomb','bodyslam','doubleedge','earthquake','swordsdance','agility','growl','leer','harden','amnesia','toxic','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Nidoran♂',types:['poison'],base:st(46,57,40,40,40,50)},
  {name:'Nidorino',types:['poison'],base:st(61,72,57,55,55,65)},
  {name:'Nidoking',types:['poison','sol'],base:st(81,92,77,85,75,85)}]},
{id:'clefairy',abilities:['Joli Sourire','Médic Nature'],moveIds:['tackle','doubleslap','sing','bodyslam','doubleedge','hyperbeam','psychic','psybeam','swift','moonblast','playrough','dazzlinggleam','disarmingvoice','babydolleyes','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','sweetscent','charm','metronome','mimic','minimize'],
 stages:[
  {name:'Mélo',types:['fee'],base:st(50,25,28,45,55,15)},
  {name:'Mélofée',types:['fee'],base:st(70,45,48,60,65,35)},
  {name:'Mélodelfe',types:['fee'],base:st(95,70,73,95,90,60)}]},
{id:'vulpix',abilities:['Torche','Sécheresse'],moveIds:['tackle','ember','flamethrower','fireblast','quickattack','bite','bodyslam','confuseray','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Goupix',types:['feu'],base:st(38,41,40,50,65,65)},
  {name:'Feunard',types:['feu'],base:st(73,76,75,81,100,100)}]},
{id:'jigglypuff',abilities:['Joli Sourire','Battant'],moveIds:['tackle','doubleslap','sing','bodyslam','doubleedge','hyperbeam','psychic','psybeam','swift','moonblast','playrough','dazzlinggleam','disarmingvoice','babydolleyes','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','sweetscent','charm','metronome','mimic','minimize'],
 stages:[
  {name:'Toudoudou',types:['fee'],base:st(90,30,15,40,20,15)},
  {name:'Rondoudou',types:['fee'],base:st(115,45,20,45,25,20)},
  {name:'Grodoudou',types:['fee'],base:st(140,70,45,75,50,45)}]},
{id:'zubat',abilities:['Attention','Infiltration'],moveIds:['tackle','leechlife','bite','gust','wingattack','poisonsting','acid','sludge','confuseray','swordsdance','agility','growl','leer','harden','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','fly','skyattack','mirrormove','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Nosferapti',types:['poison','vol'],base:st(40,45,35,30,40,55)},
  {name:'Nosferalto',types:['poison','vol'],base:st(75,80,70,65,75,90)},
  {name:'Nostenfer',types:['poison','vol'],base:st(85,90,80,70,80,130)}]},
{id:'oddish',abilities:['Chlorophylle','Fuite'],moveIds:['absorb','vinewhip','megadrain','gigadrain','razorleaf','solarbeam','sludge','acid','poisonjab','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Mystherbe',types:['plante','poison'],base:st(45,50,55,75,65,30)},
  {name:'Ortide',types:['plante','poison'],base:st(60,65,70,85,75,40)}], branches:[
  {name:'Rafflesia',types:['plante','poison'],base:st(75,80,85,100,90,50),abilities:['Chlorophylle','Force Soleil'],extraMoveIds:[]},
  {name:'Joliflor',types:['plante'],base:st(75,80,95,90,100,50),abilities:['Chlorophylle','Force Soleil'],extraMoveIds:['leafblade']}
 ]},
{id:'paras',abilities:['Pose Spore','Peau Sèche'],moveIds:['scratch','leechlife','bugbite','pinmissile','megahorn','absorb','megadrain','gigadrain','razorleaf','swordsdance','agility','growl','leer','harden','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','cottonspore','synthesis','stunspore','petaldance','spore','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Paras',types:['insecte','plante'],base:st(35,70,55,45,55,25)},
  {name:'Parasect',types:['insecte','plante'],base:st(60,95,80,60,80,30)}]},
{id:'venonat',abilities:['Œil Composé','Fuite'],moveIds:['tackle','leechlife','bugbite','poisonsting','psybeam','confusion','psychic','sludge','acid','swordsdance','agility','growl','leer','harden','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Mimitoss',types:['insecte','poison'],base:st(60,55,50,40,55,45)},
  {name:'Aéromite',types:['insecte','poison'],base:st(70,65,60,90,75,90)}]},
{id:'diglett',abilities:['Voile Sable','Piège'],moveIds:['scratch','dig','earthquake','slash','bonemerang','mudshot','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','mudslap','magnitude','boneclub','bonerush','sandattack'],
 stages:[
  {name:'Taupiqueur',types:['sol'],base:st(10,55,25,35,45,95)},
  {name:'Triopikeur',types:['sol'],base:st(50,100,50,50,70,120)}]},
{id:'meowth',abilities:['Ramassage','Technicien'],moveIds:['scratch','bite','slash','furyattack','quickattack','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','sweetscent','charm','scaryface','metronome','mimic'],
 stages:[
  {name:'Miaouss',types:['normal'],base:st(40,45,35,40,40,90)},
  {name:'Persian',types:['normal'],base:st(65,70,60,65,65,115)}]},
{id:'psyduck',abilities:['Moiteur','Ciel Gris'],moveIds:['scratch','tackle','bubble','watergun','surf','hydropump','bubblebeam','psybeam','confusion','psychic','bite','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Psykokwak',types:['eau'],base:st(50,52,48,65,50,55)},
  {name:'Akwakwak',types:['eau'],base:st(80,82,78,95,80,85)}]},
{id:'mankey',abilities:['Esprit Vital','Colérique'],moveIds:['scratch','karatechop','submission','highjumpkick','doublekick','crosschop','bite','bodyslam','rockslide','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','rage','tailwhip','slam','lowkick','counter','detect','machpunch','rocksmash','dynamicpunch','reversal','seismictoss','jumpkick'],
 stages:[
  {name:'Férosinge',types:['combat'],base:st(40,80,35,35,45,70)},
  {name:'Colossinge',types:['combat'],base:st(65,105,60,60,70,95)}]},
{id:'growlithe',abilities:['Intimidation','Torche'],moveIds:['tackle','bite','ember','flamethrower','firepunch','fireblast','bodyslam','agility','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Caninos',types:['feu'],base:st(55,70,45,70,50,60)},
  {name:'Arcanin',types:['feu'],base:st(90,110,80,100,80,95)}]},
{id:'poliwag',abilities:['Absorbe-Eau','Moiteur'],moveIds:['tackle','bubble','watergun','surf','hydropump','bubblebeam','waterfall','bodyslam','doubleedge','submission','doublekick','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','lowkick','counter','detect','rocksmash'],
 stages:[
  {name:'Ptitard',types:['eau'],base:st(40,50,40,40,40,90)},
  {name:'Têtarte',types:['eau'],base:st(65,65,65,50,50,90)}], branches:[
  {name:'Tartard',types:['eau','combat'],base:st(90,85,95,70,90,70),abilities:['Absorbe-Eau','Moiteur'],extraMoveIds:['submission','crosschop']},
  {name:'Tarpaud',types:['eau'],base:st(90,75,75,90,100,70),abilities:['Absorbe-Eau','Moiteur'],extraMoveIds:['icebeam','mudshot']}
 ]},
{id:'abra',abilities:['Synchro','Attention'],moveIds:['confusion','psychic','psybeam','extrasensory','shadowball','swift','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Abra',types:['psy'],base:st(25,20,15,105,55,90)},
  {name:'Kadabra',types:['psy'],base:st(40,35,30,120,70,105)},
  {name:'Alakazam',types:['psy'],base:st(55,50,45,135,95,120)}]},
{id:'machop',abilities:['Cran','Annule Garde'],moveIds:['tackle','karatechop','submission','highjumpkick','doublekick','crosschop','brickbreak','poweruppunch','flyingpress','bodyslam','rockslide','earthquake','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','rage','slam','lowkick','counter','detect','machpunch','rocksmash','dynamicpunch','reversal','seismictoss','jumpkick'],
 stages:[
  {name:'Machoc',types:['combat'],base:st(70,80,50,35,35,35)},
  {name:'Machopeur',types:['combat'],base:st(80,100,70,50,60,45)},
  {name:'Mackogneur',types:['combat'],base:st(90,130,80,65,85,55)}]},
{id:'bellsprout',abilities:['Chlorophylle','Gloutonnerie'],moveIds:['absorb','vinewhip','megadrain','gigadrain','razorleaf','solarbeam','sludge','acid','poisonjab','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Chétiflor',types:['plante','poison'],base:st(50,75,35,70,30,40)},
  {name:'Boustiflor',types:['plante','poison'],base:st(65,90,50,85,45,55)},
  {name:'Empiflor',types:['plante','poison'],base:st(80,105,65,100,60,70)}]},
{id:'tentacool',abilities:['Corps Sain','Suintement'],moveIds:['tackle','watergun','surf','hydropump','bubblebeam','acid','sludge','sludgebomb','waterfall','bodyslam','swordsdance','agility','growl','leer','harden','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Tentacool',types:['eau','poison'],base:st(40,40,35,50,100,70)},
  {name:'Tentacruel',types:['eau','poison'],base:st(80,70,65,80,120,100)}]},
{id:'geodude',abilities:['Tête de Roc','Fermeté'],moveIds:['tackle','rockthrow','rockslide','stoneedge','earthquake','dig','bonemerang','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','mudslap','magnitude','boneclub','bonerush','sandattack','rollout','ancientpower'],
 stages:[
  {name:'Racaillou',types:['roche','sol'],base:st(40,80,100,30,30,20)},
  {name:'Gravalanch',types:['roche','sol'],base:st(55,95,115,45,45,35)},
  {name:'Grolem',types:['roche','sol'],base:st(80,120,130,55,65,45)}]},
{id:'ponyta',abilities:['Fuite','Torche'],moveIds:['tackle','stomp','ember','flamethrower','firepunch','fireblast','bodyslam','agility','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Ponyta',types:['feu'],base:st(50,85,55,65,65,90)},
  {name:'Galopa',types:['feu'],base:st(65,100,70,80,80,105)}]},
{id:'slowpoke',abilities:['Benêt','Tempo Perso'],moveIds:['tackle','headbutt','watergun','surf','psybeam','confusion','psychic','amnesia','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Ramoloss',types:['eau','psy'],base:st(90,65,65,40,40,15)}], branches:[
  {name:'Flagadoss',types:['eau','psy'],base:st(95,75,80,100,80,30),abilities:['Benêt','Tempo Perso'],extraMoveIds:[]},
  {name:'Roigada',types:['eau','psy'],base:st(95,75,80,100,110,30),abilities:['Benêt','Tempo Perso'],extraMoveIds:['icebeam']}
 ]},
{id:'magnemite',abilities:['Magnépiège','Fermeté'],moveIds:['tackle','thundershock','thunderbolt','thunder','thunderpunch','swift','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','thunderwave','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','spark','zapcannon','flashcannon','ironhead','mirrorcoat'],
 stages:[
  {name:'Magnéti',types:['electrik'],base:st(25,35,70,95,55,45)},
  {name:'Magnéton',types:['electrik'],base:st(50,60,95,120,70,70)},
  {name:'Magnézone',types:['electrik','acier'],base:st(70,70,115,130,90,60),abilities:['Magnépiège','Analyste']}]},
{id:'farfetchd',abilities:['Regard Vif','Attention'],moveIds:['tackle','peck','furyattack','slash','wingattack','quickattack','bodyslam','agility','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','fly','skyattack','mirrormove','sweetscent','charm','mimic'],
 stages:[
  {name:'Canarticho',types:['normal','vol'],base:st(52,90,55,58,62,60)}]},
{id:'doduo',abilities:['Fuite','Matinal'],moveIds:['tackle','peck','furyattack','drillpeck','quickattack','bite','bodyslam','agility','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','extremespeed','fly','skyattack','mirrormove'],
 stages:[
  {name:'Doduo',types:['normal','vol'],base:st(35,85,45,35,35,75)},
  {name:'Dodrio',types:['normal','vol'],base:st(60,110,70,60,60,110)}]},
{id:'seel',abilities:['Isograisse','Hydratation'],moveIds:['tackle','bubble','watergun','surf','hydropump','bubblebeam','icebeam','icepunch','blizzard','bodyslam','headbutt','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Otaria',types:['eau'],base:st(65,45,55,45,70,45)},
  {name:'Lamantine',types:['eau'],base:st(90,70,80,70,95,70)}]},
{id:'grimer',abilities:['Puanteur','Glu'],moveIds:['tackle','poisonsting','sludge','sludgebomb','acid','bite','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Tadmorv',types:['poison'],base:st(80,80,50,40,50,25)},
  {name:'Grotadmorv',types:['poison'],base:st(105,105,75,65,100,50)}]},
{id:'shellder',abilities:['Coque Armure','Multi-Coups'],moveIds:['tackle','watergun','surf','bubblebeam','icebeam','icepunch','blizzard','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Kokiyas',types:['eau'],base:st(30,65,100,45,25,40)},
  {name:'Crustabri',types:['eau','glace'],base:st(50,95,180,85,45,70)}]},
{id:'gastly',abilities:['Lévitation','Corps Maudit'],moveIds:['tackle','lick','shadowball','shadowclaw','nightshade','sludge','sludgebomb','confusion','bite','confuseray','swordsdance','agility','harden','growl','leer','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','curse','nightmare','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Fantominus',types:['fantome','poison'],base:st(30,35,30,100,35,80)},
  {name:'Spectrum',types:['fantome','poison'],base:st(45,50,45,115,55,95)},
  {name:'Ectoplasma',types:['fantome','poison'],base:st(60,65,60,130,75,110)}]},
{id:'onix',abilities:['Tête de Roc','Fermeté'],moveIds:['tackle','rockthrow','rockslide','stoneedge','diamondstorm','earthquake','dig','bonemerang','thousandarrows','ironhead','irondefense','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','metalclaw','irontail','mudslap','magnitude','boneclub','bonerush','sandattack','rollout','ancientpower'],
 stages:[
  {name:'Onix',types:['roche','sol'],base:st(35,45,160,30,45,70)},
  {name:'Steelix',types:['roche','acier'],base:st(75,85,200,55,65,30)}]},
{id:'drowzee',abilities:['Insomnia','Prédiction'],moveIds:['tackle','headbutt','confusion','psychic','psybeam','zenheadbutt','bodyslam','meditate','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Soporifik',types:['psy'],base:st(60,48,45,43,90,42)},
  {name:'Hypnomade',types:['psy'],base:st(85,73,70,73,115,67)}]},
{id:'krabby',abilities:['Hyper Cutter','Coque Armure'],moveIds:['tackle','watergun','surf','bubblebeam','crabhammer','waterfall','bite','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Krabby',types:['eau'],base:st(30,105,90,25,25,50)},
  {name:'Krabboss',types:['eau'],base:st(50,130,115,50,50,75)}]},
{id:'voltorb',abilities:['Anti-Bruit','Statik'],moveIds:['tackle','thundershock','thunderbolt','thunder','thunderpunch','swift','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','thunderwave','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','spark','zapcannon','selfdestruct','explosion'],
 stages:[
  {name:'Voltorbe',types:['electrik'],base:st(40,30,50,55,55,100)},
  {name:'Electrode',types:['electrik'],base:st(60,50,70,80,80,150)}]},
{id:'exeggcute',abilities:['Chlorophylle','Récolte'],moveIds:['absorb','megadrain','gigadrain','razorleaf','solarbeam','psybeam','confusion','psychic','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','confuseray','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Noeunoeuf',types:['plante','psy'],base:st(60,40,80,60,45,40)},
  {name:'Noadkoko',types:['plante','psy'],base:st(95,95,85,125,75,55)}]},
{id:'cubone',abilities:['Tête de Roc','Paratonnerre'],moveIds:['tackle','bonemerang','earthquake','dig','rockslide','stoneedge','headbutt','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','mudslap','magnitude','boneclub','bonerush','sandattack'],
 stages:[
  {name:'Osselait',types:['sol'],base:st(50,50,95,40,50,35)},
  {name:'Ossatueur',types:['sol'],base:st(60,80,110,50,80,45)}]},
{id:'lickitung',abilities:['Tempo Perso','Benêt'],moveIds:['tackle','lick','bodyslam','doubleedge','hyperbeam','stomp','headbutt','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','metronome','mimic'],
 stages:[
  {name:'Excelangue',types:['normal'],base:st(90,55,75,60,75,30)},
  {name:'Coudlangue',types:['normal'],base:st(110,85,95,80,95,50)}]},
{id:'koffing',abilities:['Lévitation','Gaz Inhibiteur'],moveIds:['tackle','poisonsting','sludge','sludgebomb','acid','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','selfdestruct','explosion'],
 stages:[
  {name:'Smogo',types:['poison'],base:st(40,65,95,60,45,35)},
  {name:'Smogogo',types:['poison'],base:st(65,90,120,85,70,60)}]},
{id:'rhyhorn',abilities:['Paratonnerre','Tête de Roc'],moveIds:['tackle','hornattack','stomp','rockthrow','rockslide','stoneedge','earthquake','dig','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','slam','mudslap','magnitude','boneclub','bonerush','sandattack','rollout','ancientpower'],
 stages:[
  {name:'Rhinocorne',types:['sol','roche'],base:st(80,85,95,30,30,25)},
  {name:'Rhinoféros',types:['sol','roche'],base:st(105,130,120,45,45,40)},
  {name:'Rhinastoc',types:['sol','roche'],base:st(115,140,130,55,55,40),abilities:['Paratonnerre','Solide Roc']}]},
{id:'chansey',abilities:['Médic Nature','Sérénité'],moveIds:['tackle','doubleslap','sing','bodyslam','doubleedge','hyperbeam','swift','psybeam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','sweetscent','charm','metronome','mimic'],
 stages:[
  {name:'Ptiravi',types:['normal'],base:st(100,5,5,15,65,30)},
  {name:'Leveinard',types:['normal'],base:st(250,5,5,35,105,50)},
  {name:'Leuphorie',types:['normal'],base:st(255,10,10,75,135,55)}]},
{id:'tangela',abilities:['Chlorophylle','Feuille Garde'],moveIds:['absorb','vinewhip','megadrain','gigadrain','razorleaf','solarbeam','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','toxic','sleeppowder','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Saquedeneu',types:['plante'],base:st(65,55,115,100,40,60)},
  {name:'Bouldeneu',types:['plante'],base:st(100,100,125,110,50,50)}]},
{id:'kangaskhan',abilities:['Matinal','Audacieux'],moveIds:['tackle','bite','stomp','bodyslam','doubleedge','hyperbeam','slash','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','megapunch'],
 stages:[
  {name:'Kangourex',types:['normal'],base:st(105,95,80,40,80,90),forms:{
    kangaskhanite:{name:'Méga-Kangourex',types:['normal'],base:st(105,125,100,60,100,100),abilities:['Lien Parental']}
  }}]},
{id:'horsea',abilities:['Glissade','Sniper'],moveIds:['bubble','watergun','surf','hydropump','bubblebeam','waterfall','dragonbreath','dragonclaw','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','twister','outrage'],
 stages:[
  {name:'Hypotrempe',types:['eau'],base:st(30,40,70,70,25,60)},
  {name:'Hypocéan',types:['eau'],base:st(55,65,95,95,45,85)},
  {name:'Hyporoi',types:['eau','dragon'],base:st(75,95,95,95,95,85)}]},
{id:'goldeen',abilities:['Glissade','Ignifu-Voile'],moveIds:['tackle','peck','hornattack','furyattack','watergun','surf','bubblebeam','icebeam','waterfall','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Poissirène',types:['eau'],base:st(45,67,60,35,50,63)},
  {name:'Poissoroy',types:['eau'],base:st(80,92,65,65,80,68)}]},
{id:'staryu',abilities:['Lumiattirance','Médic Nature'],moveIds:['tackle','watergun','surf','hydropump','bubblebeam','psybeam','confusion','swift','waterfall','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Stari',types:['eau'],base:st(30,45,55,70,55,85)},
  {name:'Staross',types:['eau','psy'],base:st(60,75,85,100,85,115)}]},
{id:'mrmime',abilities:['Anti-Bruit','Filtre'],moveIds:['tackle','confusion','psychic','psybeam','extrasensory','shadowball','swift','barrier','meditate','dazzlinggleam','disarmingvoice','babydolleyes','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Mime Jr.',types:['psy','fee'],base:st(20,25,45,70,90,60)},
  {name:'M. Mime',types:['psy','fee'],base:st(40,45,65,100,120,90)}]},
{id:'scyther',abilities:['Essaim','Technicien'],moveIds:['tackle','leechlife','bugbite','pinmissile','megahorn','slash','quickattack','wingattack','ironhead','steelwing','agility','swordsdance','harden','growl','leer','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','extremespeed','fly','skyattack','mirrormove','metalclaw','irontail','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Insécateur',types:['insecte','vol'],base:st(70,110,80,55,80,105)},
  {name:'Cizayox',types:['insecte','acier'],base:st(70,130,100,55,80,65),forms:{
    scizorite:{name:'Méga-Cizayox',types:['insecte','acier'],base:st(70,150,140,65,100,75),abilities:['Technicien']}
  }}]},
{id:'jynx',abilities:['Benêt','Prédiction'],moveIds:['tackle','doubleslap','sing','icebeam','icepunch','blizzard','psychic','psybeam','confusion','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Lippouti',types:['glace','psy'],base:st(45,30,15,85,65,65)},
  {name:'Lippoutou',types:['glace','psy'],base:st(65,50,35,115,95,95)}]},
{id:'electabuzz',abilities:['Statik','Esprit Vital'],moveIds:['tackle','quickattack','thundershock','thunderbolt','thunder','thunderpunch','bodyslam','firepunch','icepunch','swordsdance','agility','harden','growl','leer','amnesia','thunderwave','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','spark','zapcannon'],
 stages:[
  {name:'Élekid',types:['electrik'],base:st(45,63,37,65,55,95)},
  {name:'Élektek',types:['electrik'],base:st(65,83,57,95,85,105)},
  {name:'Élékable',types:['electrik'],base:st(75,123,67,95,85,95),abilities:['Motorisé','Esprit Vital']}]},
{id:'magmar',abilities:['Corps Ardent','Esprit Vital'],moveIds:['tackle','ember','flamethrower','fireblast','firepunch','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Magby',types:['feu'],base:st(45,75,37,70,55,83)},
  {name:'Magmar',types:['feu'],base:st(65,95,57,100,85,93)},
  {name:'Maganon',types:['feu'],base:st(75,95,67,125,95,83)}]},
{id:'pinsir',abilities:['Hyper Cutter','Brise Moule'],moveIds:['tackle','slash','leechlife','bugbite','pinmissile','megahorn','bodyslam','doubleedge','swordsdance','agility','harden','growl','leer','amnesia','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Scarabrute',types:['insecte'],base:st(65,125,100,55,70,85)}]},
{id:'tauros',abilities:['Intimidation','Colérique'],moveIds:['tackle','stomp','bite','hornattack','bodyslam','doubleedge','hyperbeam','agility','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','thrash','takedown'],
 stages:[
  {name:'Tauros',types:['normal'],base:st(75,100,95,40,70,110)}]},
{id:'magikarp',abilities:['Glissade','Phobique'],moveIds:['tackle','watergun','bubble','surf','hydropump','waterfall','bodyslam','doubleedge','bite','hyperbeam','agility','swordsdance','harden','growl','leer','amnesia','dragonrage','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Magicarpe',types:['eau'],base:st(20,10,55,15,20,80)},
  {name:'Léviator',types:['eau','vol'],base:st(95,125,79,60,100,81),forms:{
    gyaradosite:{name:'Méga-Léviator',types:['eau','tenebres'],base:st(95,155,109,70,130,81),abilities:['Brise Moule']}
  }}]},
{id:'lapras',abilities:['Absorbe-Eau','Coque Armure'],moveIds:['tackle','watergun','surf','hydropump','bubblebeam','icebeam','icepunch','blizzard','freezedry','bodyslam','sing','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Lokhlass',types:['eau','glace'],base:st(130,85,80,85,95,60)}]},
{id:'eevee',abilities:['Fuite','Adaptabilité'],moveIds:['tackle','quickattack','bite','bodyslam','doubleedge','swift','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','sweetscent','charm'],
 stages:[
  {name:'Évoli',types:['normal'],base:st(55,55,50,45,65,55)}], branches:[
  {name:'Aquali',types:['eau'],base:st(130,65,60,110,95,65),abilities:['Absorbe-Eau','Hydratation'],extraMoveIds:['watergun','surf','hydropump','bubblebeam','waterfall','icebeam','blizzard']},
  {name:'Voltali',types:['electrik'],base:st(65,65,60,110,95,130),abilities:['Absorbe-Volt','Pied Véloce'],extraMoveIds:['thundershock','thunderbolt','thunder','thunderpunch','thunderwave','discharge']},
  {name:'Pyroli',types:['feu'],base:st(65,130,60,95,110,65),abilities:['Torche','Coloforce'],extraMoveIds:['ember','flamethrower','fireblast','firepunch']},
  {name:'Mentali',types:['psy'],base:st(65,65,60,130,95,110),abilities:['Synchro','Prédiction'],extraMoveIds:['confusion','psychic','psybeam','extrasensory']},
  {name:'Noctali',types:['tenebres'],base:st(95,65,110,60,130,65),abilities:['Insomnia','Synchro'],extraMoveIds:['crunch','darkpulse','suckerpunch','nightslash']},
  {name:'Phyllali',types:['plante'],base:st(65,110,130,60,65,95),abilities:['Chlorophylle','Feuille Garde'],extraMoveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade']},
  {name:'Givrali',types:['glace'],base:st(65,60,110,130,95,65),abilities:['Rideau Neige','Corps Gel'],extraMoveIds:['icebeam','icepunch','blizzard','icefang','icywind']}
 ]},
{id:'porygon',abilities:['Calque','Télécharge'],moveIds:['tackle','bodyslam','hyperbeam','swift','psybeam','confusion','psychic','thunderbolt','thunderwave','icebeam','agility','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','conversion','metronome','mimic'],
 stages:[
  {name:'Porygon',types:['normal'],base:st(65,60,70,85,75,40)},
  {name:'Porygon2',types:['normal'],base:st(85,80,90,105,95,60)},
  {name:'Porygon-Z',types:['normal'],base:st(85,80,70,135,75,90),abilities:['Adaptabilité','Télécharge']}]},
{id:'omanyte',abilities:['Glissade','Coque Armure'],moveIds:['tackle','watergun','surf','hydropump','bubblebeam','waterfall','icebeam','rockthrow','rockslide','bite','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','rollout','ancientpower'],
 stages:[
  {name:'Amonita',types:['roche','eau'],base:st(35,40,100,90,55,35)},
  {name:'Amonistar',types:['roche','eau'],base:st(70,60,125,115,70,55)}]},
{id:'kabuto',abilities:['Glissade','Armurbaston'],moveIds:['scratch','tackle','rockthrow','rockslide','stoneedge','watergun','surf','waterfall','slash','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','rollout','ancientpower'],
 stages:[
  {name:'Kabuto',types:['roche','eau'],base:st(30,80,90,55,45,55)},
  {name:'Kabutops',types:['roche','eau'],base:st(60,115,105,65,70,80)}]},
{id:'aerodactyl',abilities:['Tête de Roc','Pression'],moveIds:['tackle','bite','peck','wingattack','rockthrow','rockslide','stoneedge','hyperbeam','agility','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','fly','skyattack','mirrormove','rollout','ancientpower'],
 stages:[
  {name:'Ptéra',types:['roche','vol'],base:st(80,105,65,60,75,130)}]},
{id:'snorlax',abilities:['Vaccin','Isograisse'],moveIds:['tackle','bodyslam','doubleedge','hyperbeam','headbutt','bite','surf','icebeam','blizzard','swordsdance','amnesia','harden','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','scaryface'],
 stages:[
  {name:'Goinfrex',types:['normal'],base:st(135,85,40,40,85,5),abilities:['Ramassage','Isograisse']},
  {name:'Ronflex',types:['normal'],base:st(160,110,65,65,110,30)}]},
{id:'articuno',abilities:['Pression','Rideau Neige'],moveIds:['hail','tackle','peck','gust','icebeam','icepunch','blizzard','freezedry','icefang','wingattack','agility','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','extremespeed','fly','skyattack','mirrormove','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Artikodin',types:['glace','vol'],base:st(90,85,100,95,125,85)}]},
{id:'zapdos',abilities:['Pression','Paratonnerre'],moveIds:['tackle','thundershock','thunderbolt','thunder','thunderpunch','drillpeck','agility','thunderwave','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','extremespeed','fly','skyattack','mirrormove','spark','zapcannon'],
 stages:[
  {name:'Électhor',types:['electrik','vol'],base:st(90,90,85,125,90,100)}]},
{id:'moltres',abilities:['Pression','Corps Ardent'],moveIds:['tackle','ember','flamethrower','fireblast','firepunch','wingattack','drillpeck','agility','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','extremespeed','fly','skyattack','mirrormove','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Sulfura',types:['feu','vol'],base:st(90,100,90,125,85,90)}]},
{id:'dratini',abilities:['Mue','Écaille Spéciale'],moveIds:['tackle','bodyslam','surf','agility','bite','swordsdance','harden','growl','leer','amnesia','recover','strength','dragonrage','dragonbreath','dragonclaw','dragonhammer','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','slam','twister','outrage'],
 stages:[
  {name:'Minidraco',types:['dragon'],base:st(41,64,45,50,50,50)},
  {name:'Draco',types:['dragon'],base:st(61,84,65,70,70,70)},
  {name:'Dracolosse',types:['dragon','vol'],base:st(91,134,95,100,100,80)}]},
{id:'mewtwo',abilities:['Pression','Trouble-Fête'],moveIds:['tackle','confusion','psychic','psybeam','extrasensory','shadowball','swift','hyperbeam','thunderbolt','icebeam','blizzard','thunder','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Mewtwo',types:['psy'],base:st(106,110,90,154,90,130),forms:{
    mewtwonitey:{name:'Méga-Mewtwo Y',types:['psy'],base:st(106,150,70,194,120,140),abilities:['Insomnia']}
  }}]},
{id:'mew',abilities:['Synchro'],moveIds:['tackle','confusion','psychic','psybeam','extrasensory','shadowball','swift','hyperbeam','thunderbolt','icebeam','blizzard','thunder','flamethrower','surf','earthquake','bodyslam','swordsdance','agility','harden','growl','leer','amnesia','confuseray','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','extremespeed','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Mew',types:['psy'],base:st(100,100,100,100,100,100)}]},

/* =================== POKÉDEX GÉNÉRATION 2 (100) =================== */
];

const DEX_NUMBERS_GEN1 = {
  'Bulbizarre':1,'Herbizarre':2,'Florizarre':3,
  'Salamèche':4,'Reptincel':5,'Dracaufeu':6,
  'Carapuce':7,'Carabaffe':8,'Tortank':9,
  'Chenipan':10,'Chrysacier':11,'Papilusion':12,
  'Aspicot':13,'Coconfort':14,'Dardargnan':15,
  'Roucool':16,'Roucoups':17,'Roucarnage':18,
  'Rattata':19,'Rattatac':20,
  'Piafabec':21,'Rapasdepic':22,
  'Abo':23,'Arbok':24,
  'Pichu':172,'Pikachu':25,'Raichu':26,
  'Sabelette':27,'Sablaireau':28,
  'Nidoran♀':29,'Nidorina':30,'Nidoqueen':31,
  'Nidoran♂':32,'Nidorino':33,'Nidoking':34,
  'Mélofée':35,'Mélodelfe':36,'Mélo':173,
  'Goupix':37,'Feunard':38,
  'Rondoudou':39,'Grodoudou':40,'Toudoudou':174,
  'Nosferapti':41,'Nosferalto':42,'Nostenfer':169,
  'Mystherbe':43,'Ortide':44,'Rafflesia':45,'Joliflor':182,
  'Paras':46,'Parasect':47,
  'Mimitoss':48,'Aéromite':49,
  'Taupiqueur':50,'Triopikeur':51,
  'Miaouss':52,'Persian':53,
  'Psykokwak':54,'Akwakwak':55,
  'Férosinge':56,'Colossinge':57,
  'Caninos':58,'Arcanin':59,
  'Ptitard':60,'Têtarte':61,'Tartard':62,'Tarpaud':186,
  'Abra':63,'Kadabra':64,'Alakazam':65,
  'Machoc':66,'Machopeur':67,'Mackogneur':68,
  'Chétiflor':69,'Boustiflor':70,'Empiflor':71,
  'Tentacool':72,'Tentacruel':73,
  'Racaillou':74,'Gravalanch':75,'Grolem':76,
  'Ponyta':77,'Galopa':78,
  'Ramoloss':79,'Flagadoss':80,'Roigada':199,
  'Magnéti':81,'Magnéton':82,'Magnézone':462,
  'Canarticho':83,
  'Doduo':84,'Dodrio':85,
  'Otaria':86,'Lamantine':87,
  'Tadmorv':88,'Grotadmorv':89,
  'Kokiyas':90,'Crustabri':91,
  'Fantominus':92,'Spectrum':93,'Ectoplasma':94,
  'Onix':95,'Steelix':208,
  'Soporifik':96,'Hypnomade':97,
  'Krabby':98,'Krabboss':99,
  'Voltorbe':100,'Electrode':101,
  'Noeunoeuf':102,'Noadkoko':103,
  'Osselait':104,'Ossatueur':105,
  'Kicklee':106,
  'Tygnon':107,
  'Excelangue':108,'Coudlangue':463,
  'Smogo':109,'Smogogo':110,
  'Rhinocorne':111,'Rhinoféros':112,'Rhinastoc':464,
  'Leveinard':113,'Leuphorie':242,
  'Saquedeneu':114,'Bouldeneu':465,
  'Kangourex':115,
  'Hypotrempe':116,'Hypocéan':117,'Hyporoi':230,
  'Poissirène':118,'Poissoroy':119,
  'Stari':120,'Staross':121,
  'Mime Jr.':439,'M. Mime':122,
  'Insécateur':123,'Cizayox':212,
  'Lippoutou':124,'Lippouti':238,
  'Élektek':125,'Élekid':239,'Élékable':466,
  'Magmar':126,'Magby':240,'Maganon':467,
  'Scarabrute':127,
  'Tauros':128,
  'Magicarpe':129,'Léviator':130,
  'Lokhlass':131,
  'Évoli':133,
  'Aquali':134,
  'Voltali':135,
  'Pyroli':136,
  'Mentali':196,
  'Noctali':197,
  'Phyllali':470,
  'Givrali':471,
  'Porygon':137,'Porygon2':233,'Porygon-Z':474,
  'Amonita':138,'Amonistar':139,
  'Kabuto':140,'Kabutops':141,
  'Ptéra':142,
  'Ptiravi':440,'Goinfrex':446,'Ronflex':143,
  'Artikodin':144,
  'Électhor':145,
  'Sulfura':146,
  'Minidraco':147,'Draco':148,'Dracolosse':149,
  'Mewtwo':150,
  'Mew':151,
};
