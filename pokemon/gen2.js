/* ==== pokemon/gen2.js : Pokédex n°152 à 251 ==== */
const LINES_GEN2 = [
{id:'chikorita',abilities:['Engrais','Feuille Garde'],moveIds:['vinewhip','razorleaf','solarbeam','megadrain','gigadrain','bodyslam','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Germignon',types:['plante'],base:st(45,49,65,49,65,45)},
  {name:'Macronium',types:['plante'],base:st(60,62,80,63,80,60)},
  {name:'Méganium',types:['plante'],base:st(80,82,100,83,100,80)}]},
{id:'cyndaquil',abilities:['Brasier','Torche'],moveIds:['ember','flamethrower','fireblast','firepunch','quickattack','bodyslam','swordsdance','agility','growl','leer','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','extremespeed','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Héricendre',types:['feu'],base:st(39,52,43,60,50,65)},
  {name:'Feurisson',types:['feu'],base:st(58,64,58,80,65,80)},
  {name:'Typhlosion',types:['feu'],base:st(78,84,78,109,85,100)}]},
{id:'totodile',abilities:['Torrent','Intimidation'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','bite','crabhammer','waterfall','slash','swordsdance','agility','growl','leer','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Kaiminus',types:['eau'],base:st(50,65,64,44,48,43)},
  {name:'Crocrodil',types:['eau'],base:st(65,80,80,59,63,58)},
  {name:'Aligatueur',types:['eau'],base:st(85,105,100,79,83,78)}]},
{id:'sentret',abilities:['Fuite','Regard Vif'],moveIds:['tackle','quickattack','headbutt','furyattack','bodyslam','doubleedge','swift','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam'],
 stages:[
  {name:'Fouinette',types:['normal'],base:st(35,46,34,35,45,20)},
  {name:'Fouinar',types:['normal'],base:st(85,76,64,45,55,90)}]},
{id:'hoothoot',abilities:['Insomnia','Regard Vif'],moveIds:['tackle','peck','wingattack','gust','confuseray','hyperbeam','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','screech','scaryface','fly','skyattack','mirrormove'],
 stages:[
  {name:'Hoothoot',types:['normal','vol'],base:st(60,30,30,36,56,50)},
  {name:'Noarfang',types:['normal','vol'],base:st(100,50,50,76,96,70)}]},
{id:'ledyba',abilities:['Essaim','Matinal'],moveIds:['tackle','leechlife','bugbite','pinmissile','gust','wingattack','swift','growl','leer','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Coxy',types:['insecte','vol'],base:st(40,20,30,40,80,55)},
  {name:'Coxyclaque',types:['insecte','vol'],base:st(55,35,50,55,110,85)}]},
{id:'spinarak',abilities:['Insomnia','Essaim'],moveIds:['leechlife','bugbite','poisonsting','sludge','sludgebomb','pinmissile','bite','swordsdance','agility','growl','leer','toxic','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','acidarmor','poisongas','poisonpowder','smog','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Mimigal',types:['insecte','poison'],base:st(40,60,40,40,40,30)},
  {name:'Migalos',types:['insecte','poison'],base:st(70,90,70,60,70,40)}]},
{id:'chinchou',abilities:['Absorbe-Volt','Lumiattirance'],moveIds:['watergun','bubblebeam','surf','thundershock','thunderbolt','discharge','bodyslam','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','spark','zapcannon'],
 stages:[
  {name:'Loupio',types:['eau','electrik'],base:st(75,38,38,56,56,67)},
  {name:'Lanturn',types:['eau','electrik'],base:st(125,58,58,76,76,67)}]},
{id:'togepi',abilities:['Agitation','Sérénité'],moveIds:['tackle','swift','bodyslam','extrasensory','toxic','sleeppowder','sing','growl','leer','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','sweetscent','charm','metronome','mimic'],
 stages:[
  {name:'Togepi',types:['normal'],base:st(35,20,65,40,65,20)},
  {name:'Togetic',types:['normal','vol'],base:st(55,40,85,80,105,40)},
  {name:'Togekiss',types:['normal','vol'],base:st(85,50,95,120,115,80)}]},
{id:'natu',abilities:['Synchro','Matinal'],moveIds:['confusion','psychic','psybeam','extrasensory','peck','wingattack','swordsdance','agility','growl','leer','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Natu',types:['psy','vol'],base:st(40,50,45,70,45,70)},
  {name:'Xatu',types:['psy','vol'],base:st(65,75,70,95,70,95)}]},
{id:'mareep',abilities:['Statik','Plus'],moveIds:['thundershock','thunderbolt','thunder','discharge','bodyslam','headbutt','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','spark','zapcannon'],
 stages:[
  {name:'Wattouat',types:['electrik'],base:st(55,40,40,65,45,35)},
  {name:'Lainergie',types:['electrik'],base:st(70,55,55,80,60,45)},
  {name:'Pharamp',types:['electrik'],base:st(90,75,85,115,90,55)}]},
{id:'marill',abilities:['Isograisse','Coloforce'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','bodyslam','doubleedge','tackle','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Azurill',types:['normal'],base:st(50,20,40,20,40,20)},
  {name:'Marill',types:['eau'],base:st(70,20,50,20,50,40)},
  {name:'Azumarill',types:['eau'],base:st(100,50,80,50,80,50)}]},
{id:'sudowoodo',abilities:['Tête de Roc','Fermeté'],moveIds:['rockthrow','rockslide','stoneedge','tackle','headbutt','doubleedge','bodyslam','swordsdance','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','rollout','ancientpower'],
 stages:[
  {name:'Manzaï',types:['roche'],base:st(50,80,95,10,45,10)},
  {name:'Simularbre',types:['roche'],base:st(70,100,115,30,65,30)}]},
{id:'hoppip',abilities:['Chlorophylle','Feuille Garde'],moveIds:['vinewhip','razorleaf','megadrain','gust','wingattack','airslash','sleeppowder','growl','leer','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Granivol',types:['plante','vol'],base:st(35,35,40,35,55,50)},
  {name:'Floravol',types:['plante','vol'],base:st(55,45,50,45,65,80)},
  {name:'Cotovol',types:['plante','vol'],base:st(75,55,70,55,95,110)}]},
{id:'aipom',abilities:['Fuite','Ramassage'],moveIds:['tackle','quickattack','furyattack','headbutt','doubleslap','swift','doubleedge','agility','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','cometpunch','megapunch'],
 stages:[
  {name:'Capumain',types:['normal'],base:st(55,70,55,40,55,85)},
  {name:'Capidextre',types:['normal'],base:st(75,100,66,60,66,115),abilities:['Technicien','Ramassage']}]},
{id:'sunkern',abilities:['Chlorophylle','Force Soleil'],moveIds:['sunnyday','vinewhip','megadrain','gigadrain','solarbeam','sleeppowder','growl','leer','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Tournegrain',types:['plante'],base:st(30,30,30,30,30,30)},
  {name:'Héliatronc',types:['plante'],base:st(75,75,55,105,85,30)}]},
{id:'yanma',abilities:['Œil Composé','Turbo'],moveIds:['leechlife','bugbite','gust','wingattack','airslash','drillpeck','quickattack','swift','agility','growl','leer','recover','protect','endure','safeguard','doubleteam','focusenergy','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Yanma',types:['insecte','vol'],base:st(65,65,45,75,45,95)},
  {name:'Yanmega',types:['insecte','vol'],base:st(86,76,86,116,56,95),abilities:['Turbo','Lentiteintée']}]},
{id:'wooper',abilities:['Absorbe-Eau','Moiteur'],moveIds:['watergun','surf','bubblebeam','dig','earthquake','mudshot','bodyslam','tackle','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw','mudslap','magnitude','boneclub','bonerush','sandattack'],
 stages:[
  {name:'Axoloto',types:['eau','sol'],base:st(55,45,45,25,25,15)},
  {name:'Maraiste',types:['eau','sol'],base:st(95,85,85,65,65,35)}]},
{id:'murkrow',abilities:['Insomnia','Regard Vif'],moveIds:['crunch','darkpulse','suckerpunch','feintattack','gust','wingattack','peck','quickattack','swift','agility','growl','leer','toxic','protect','endure','safeguard','doubleteam','focusenergy','fly','skyattack','mirrormove','thief','pursuit','beatup'],
 stages:[
  {name:'Cornèbre',types:['tenebres','vol'],base:st(60,85,42,85,42,91)},
  {name:'Corboss',types:['tenebres','vol'],base:st(100,125,52,105,52,71),abilities:['Insomnia','Chanceux']}]},
{id:'misdreavus',abilities:['Lévitation','Corps Maudit'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','sludge','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','curse','nightmare'],
 stages:[
  {name:'Feuforêve',types:['fantome'],base:st(60,60,60,85,85,85)},
  {name:'Magirêve',types:['fantome'],base:st(60,60,60,105,105,105),abilities:['Lévitation']}]},
{id:'wobbuffet',abilities:['Marque Ombre','Annule Garde'],moveIds:['tackle','confusion','psybeam','harden','amnesia','recover','growl','leer','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Wynaut',types:['psy'],base:st(95,23,48,23,48,23)},
  {name:'Qulbutoké',types:['psy'],base:st(190,33,58,33,58,33)}]},
{id:'girafarig',abilities:['Attention','Matinal'],moveIds:['tackle','headbutt','confusion','psychic','psybeam','zenheadbutt','doubleedge','agility','growl','leer','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','scaryface','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Girafarig',types:['normal','psy'],base:st(70,80,65,90,65,85)}]},
{id:'pineco',abilities:['Fermeté','Envelocape'],moveIds:['tackle','headbutt','ironhead','irondefense','bodyslam','doubleedge','harden','growl','leer','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','metalclaw','irontail','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Kokiabo',types:['insecte'],base:st(50,65,90,35,35,15)},
  {name:'Sécorang',types:['insecte','acier'],base:st(75,90,140,60,60,40)}]},
{id:'dunsparce',abilities:['Sérénité','Fuite'],moveIds:['tackle','headbutt','bite','furyattack','bodyslam','doubleedge','swift','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam'],
 stages:[
  {name:'Insolourdo',types:['normal'],base:st(100,70,70,65,65,45)}]},
{id:'gligar',abilities:['Voile Sable','Hyper Cutter'],moveIds:['dig','earthquake','mudshot','gust','wingattack','airslash','quickattack','slash','swordsdance','agility','growl','leer','recover','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','fly','skyattack','mirrormove','mudslap','magnitude','boneclub','bonerush','sandattack'],
 stages:[
  {name:'Scorplane',types:['sol','vol'],base:st(65,75,105,35,65,85)},
  {name:'Scorvol',types:['sol','vol'],base:st(75,95,125,45,75,95),abilities:['Hyper Cutter','Soin Poison']}]},
{id:'snubbull',abilities:['Intimidation','Phobique'],moveIds:['tackle','bite','hyperfang','headbutt','bodyslam','doubleedge','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','slam','sweetscent','charm','scaryface'],
 stages:[
  {name:'Snubbull',types:['normal'],base:st(60,80,50,40,40,30)},
  {name:'Grimbull',types:['normal'],base:st(90,120,75,60,60,45)}]},
{id:'qwilfish',abilities:['Point Poison','Glissade'],moveIds:['watergun','surf','bubblebeam','sludge','poisonsting','sludgebomb','poisonjab','acid','waterfall','toxic','growl','leer','harden','recover','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','acidarmor','poisongas','poisonpowder','smog'],
 stages:[
  {name:'Qwilfish',types:['eau','poison'],base:st(65,95,75,55,55,85)}]},
{id:'shuckle',abilities:['Fermeté','Gloutonnerie'],moveIds:['rockthrow','rockslide','bugbite','leechlife','harden','growl','leer','amnesia','recover','toxic','protect','endure','safeguard','doubleteam','focusenergy','furycutter','stringshot','spiderweb','rollout','ancientpower'],
 stages:[
  {name:'Caratroc',types:['insecte','roche'],base:st(20,10,230,10,230,5)}]},
{id:'heracross',abilities:['Essaim','Cran'],moveIds:['leechlife','megahorn','pinmissile','bugbite','karatechop','submission','crosschop','brickbreak','swordsdance','agility','growl','leer','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lowkick','counter','detect','machpunch','rocksmash','dynamicpunch','reversal','seismictoss','jumpkick','furycutter','stringshot','spiderweb'],
 stages:[
  {name:'Scarhino',types:['insecte','combat'],base:st(80,125,75,40,95,85)}]},
{id:'sneasel',abilities:['Attention','Regard Vif'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','icepunch','icefang','slash','quickattack','swordsdance','agility','growl','leer','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','thief','pursuit','beatup','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Farfuret',types:['glace','tenebres'],base:st(55,95,55,35,75,115)},
  {name:'Dimoret',types:['tenebres','glace'],base:st(70,120,65,45,85,125),abilities:['Pression','Pickpocket']}]},
{id:'teddiursa',abilities:['Ramassage','Pied Véloce'],moveIds:['tackle','furyattack','bite','headbutt','slash','bodyslam','doubleedge','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','slam','cometpunch','megapunch'],
 stages:[
  {name:'Teddiursa',types:['normal'],base:st(60,80,50,50,50,40)},
  {name:'Ursaring',types:['normal'],base:st(90,130,75,75,75,55)}]},
{id:'slugma',abilities:['Armumagma','Corps Ardent'],moveIds:['ember','flamethrower','fireblast','rockthrow','rockslide','bodyslam','harden','growl','leer','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','rollout','ancientpower','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Limagma',types:['feu'],base:st(40,40,40,70,40,20)},
  {name:'Volcaropod',types:['feu','roche'],base:st(60,50,120,90,80,30)}]},
{id:'swinub',abilities:['Benêt','Rideau Neige'],moveIds:['icebeam','icepunch','icefang','icywind','dig','earthquake','mudshot','bodyslam','tackle','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','mudslap','magnitude','boneclub','bonerush','sandattack','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Marcacrin',types:['glace','sol'],base:st(50,50,40,30,30,50)},
  {name:'Cochignon',types:['glace','sol'],base:st(100,100,80,60,60,50)},
  {name:'Mammochon',types:['glace','sol'],base:st(110,130,80,70,60,80)}]},
{id:'corsola',abilities:['Agitation','Médic Nature'],moveIds:['watergun','bubblebeam','surf','rockthrow','rockslide','stoneedge','harden','growl','leer','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','whirlpool','clamp','octazooka','withdraw','rollout','ancientpower'],
 stages:[
  {name:'Corayon',types:['eau','roche'],base:st(65,55,95,65,95,35)}]},
{id:'remoraid',abilities:['Agitation','Sniper'],moveIds:['watergun','bubblebeam','hydropump','surf','aquatail','swift','growl','leer','harden','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Rémoraid',types:['eau'],base:st(35,65,35,65,35,65)},
  {name:'Octillery',types:['eau'],base:st(75,105,75,105,75,45)}]},
{id:'delibird',abilities:['Esprit Vital','Agitation'],moveIds:['icebeam','icywind','icefang','gust','wingattack','peck','quickattack','swift','growl','leer','recover','protect','endure','safeguard','doubleteam','focusenergy','present','fly','skyattack','mirrormove','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Delibird',types:['glace','vol'],base:st(45,55,45,65,45,75)}]},
{id:'mantine',abilities:['Glissade','Absorbe-Eau'],moveIds:['watergun','surf','bubblebeam','gust','wingattack','airslash','hurricane','harden','growl','leer','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','fly','skyattack','mirrormove','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Babimanta',types:['eau','vol'],base:st(45,20,50,60,120,50)},
  {name:'Démanta',types:['eau','vol'],base:st(65,40,70,80,140,70)}]},
{id:'skarmory',abilities:['Regard Vif','Fermeté'],moveIds:['steelwing','ironhead','irondefense','flashcannon','gust','wingattack','airslash','peck','slash','swordsdance','agility','growl','leer','protect','endure','safeguard','doubleteam','focusenergy','fly','skyattack','mirrormove','metalclaw','irontail'],
 stages:[
  {name:'Airmure',types:['acier','vol'],base:st(65,80,140,40,70,70)}]},
{id:'houndour',abilities:['Matinal','Torche'],moveIds:['crunch','darkpulse','suckerpunch','nightslash','feintattack','ember','flamethrower','fireblast','firepunch','bite','swordsdance','agility','growl','leer','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','thief','pursuit','beatup','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Malosse',types:['tenebres','feu'],base:st(45,60,30,80,50,65)},
  {name:'Démolosse',types:['tenebres','feu'],base:st(75,90,50,110,80,95)}]},
{id:'phanpy',abilities:['Ramassage','Fermeté'],moveIds:['dig','earthquake','mudshot','rockslide','tackle','headbutt','bodyslam','doubleedge','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','slam','mudslap','magnitude','boneclub','bonerush','sandattack'],
 stages:[
  {name:'Phanpy',types:['sol'],base:st(90,60,60,40,40,40)},
  {name:'Donphan',types:['sol'],base:st(90,120,120,60,60,50)}]},
{id:'stantler',abilities:['Intimidation','Prédiction'],moveIds:['tackle','headbutt','zenheadbutt','confusion','psybeam','doubleedge','swift','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam'],
 stages:[
  {name:'Cerfrousse',types:['normal'],base:st(73,95,62,85,65,85)}]},
{id:'smeargle',abilities:['Tempo Perso','Technicien'],moveIds:['tackle','quickattack','headbutt','swift','growl','leer','harden','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','sketch','mimic','metronome'],
 stages:[
  {name:'Queulorior',types:['normal'],base:st(55,20,35,20,45,75)}]},
{id:'tyrogue',abilities:['Cran','Esprit Vital'],moveIds:['karatechop','doublekick','bodyslam','doubleedge','swordsdance','agility','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','lowkick','counter','detect','machpunch','rocksmash','dynamicpunch','reversal','seismictoss','jumpkick'],
 stages:[
  {name:'Debugant',types:['combat'],base:st(35,35,35,35,35,35)}], branches:[
  {name:'Kicklee',types:['combat'],base:st(50,120,53,35,110,87),abilities:['Échauffement','Téméraire'],extraMoveIds:['highjumpkick','submission','crosschop','rockslide']},
  {name:'Tygnon',types:['combat'],base:st(50,105,79,35,110,76),abilities:['Regard Vif','Poing de Fer'],extraMoveIds:['firepunch','icepunch','thunderpunch','submission']},
  {name:'Kicklang',types:['combat'],base:st(50,95,95,35,110,70),abilities:['Intimidation','Technicien'],extraMoveIds:['crosschop','brickbreak','submission']}
 ]},
{id:'smoochum',abilities:['Benêt','Prédiction'],moveIds:['icebeam','icepunch','icefang','confusion','psychic','psybeam','sing','doubleslap','growl','leer','amnesia','recover','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave','aurorabeam','powdersnow','mist','haze'],
 stages:[
  {name:'Lippouti',types:['glace','psy'],base:st(45,30,15,85,65,65)}]},
{id:'miltank',abilities:['Isograisse','Corps Sain'],moveIds:['tackle','stomp','bodyslam','doubleedge','hyperbeam','headbutt','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','slam','sweetscent','charm'],
 stages:[
  {name:'Écrémeuh',types:['normal'],base:st(95,80,105,40,70,100)}]},
{id:'raikou',abilities:['Pression','Absorbe-Volt'],moveIds:['thundershock','thunderbolt','thunder','thunderpunch','discharge','quickattack','bite','swift','hyperbeam','agility','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','spark','zapcannon'],
 stages:[
  {name:'Raikou',types:['electrik'],base:st(90,85,75,115,100,115)}]},
{id:'entei',abilities:['Pression','Attention'],moveIds:['ember','flamethrower','fireblast','firepunch','bite','stomp','doubleedge','hyperbeam','swordsdance','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','slam','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Entei',types:['feu'],base:st(115,115,85,90,75,100)}]},
{id:'suicune',abilities:['Pression','Attention'],moveIds:['watergun','hydropump','surf','bubblebeam','aquatail','icebeam','bite','hyperbeam','agility','growl','leer','recover','strength','protect','endure','safeguard','return','doubleteam','focusenergy','tailwhip','extremespeed','whirlpool','clamp','octazooka','withdraw'],
 stages:[
  {name:'Suicune',types:['eau'],base:st(100,75,115,90,115,85)}]},
{id:'larvitar',abilities:['Cran','Sable Volant'],moveIds:['rockthrow','rockslide','stoneedge','dig','earthquake','crunch','bite','bodyslam','doubleedge','swordsdance','growl','leer','harden','amnesia','recover','strength','protect','endure','safeguard','doubleteam','focusenergy','tailwhip','slam','thief','pursuit','beatup','mudslap','magnitude','boneclub','bonerush','sandattack','rollout','ancientpower'],
 stages:[
  {name:'Embrylex',types:['roche','sol'],base:st(50,64,50,45,50,41)},
  {name:'Ymphect',types:['roche','sol'],base:st(70,84,70,65,70,51)},
  {name:'Séracrawl',types:['roche','tenebres'],base:st(100,134,110,95,100,61)}]},
{id:'lugia',abilities:['Pression','Fermeté'],moveIds:['confusion','psychic','psybeam','extrasensory','gust','wingattack','airslash','hurricane','hyperbeam','recover','growl','leer','harden','amnesia','strength','protect','endure','safeguard','doubleteam','focusenergy','fly','skyattack','mirrormove','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Lugia',types:['psy','vol'],base:st(106,90,130,90,154,110)}]},
{id:'hooh',abilities:['Pression','Régé-Force'],moveIds:['ember','flamethrower','fireblast','firepunch','gust','wingattack','airslash','hurricane','hyperbeam','recover','growl','leer','harden','amnesia','strength','protect','endure','safeguard','doubleteam','focusenergy','fly','skyattack','mirrormove','sacredfire','flamewheel','firespin'],
 stages:[
  {name:'Ho-Oh',types:['feu','vol'],base:st(106,130,90,110,154,90)}]},
{id:'celebi',abilities:['Synchro','Médic Nature'],moveIds:['confusion','psychic','psybeam','extrasensory','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','recover','growl','leer','harden','amnesia','swordsdance','agility','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave','cottonspore','synthesis','stunspore','petaldance','spore'],
 stages:[
  {name:'Celebi',types:['psy','plante'],base:st(100,100,100,100,100,100)}]},
{id:'unown',abilities:['Lévitation','Annule Garde'],moveIds:['confusion','psybeam','psychic','extrasensory','swift','hyperbeam','protect','endure','safeguard','doubleteam','focusenergy','lightscreen','reflect','futuresight','mirrorcoat','dreameater','hypnosis','teleport','kinesis','psywave'],
 stages:[
  {name:'Zarbi',types:['psy'],base:st(48,72,48,72,48,48)}]},

/* =================== POKÉDEX GÉNÉRATION 3 (135) =================== */
];

const DEX_NUMBERS_GEN2 = {
  'Germignon':152,'Macronium':153,'Méganium':154,
  'Héricendre':155,'Feurisson':156,'Typhlosion':157,
  'Kaiminus':158,'Crocrodil':159,'Aligatueur':160,
  'Fouinette':161,'Fouinar':162,
  'Hoothoot':163,'Noarfang':164,
  'Coxy':165,'Coxyclaque':166,
  'Mimigal':167,'Migalos':168,
  'Loupio':170,'Lanturn':171,
  'Togepi':175,'Togetic':176,'Togekiss':468,
  'Natu':177,'Xatu':178,
  'Wattouat':179,'Lainergie':180,'Pharamp':181,
  'Marill':183,'Azumarill':184,
  'Manzaï':438,'Simularbre':185,
  'Granivol':187,'Floravol':188,'Cotovol':189,
  'Capumain':190,'Capidextre':424,
  'Tournegrain':191,'Héliatronc':192,
  'Yanma':193,'Yanmega':469,
  'Axoloto':194,'Maraiste':195,
  'Cornèbre':198,'Corboss':430,
  'Feuforêve':200,'Magirêve':429,
  'Qulbutoké':202,
  'Girafarig':203,
  'Kokiabo':204,'Sécorang':205,
  'Insolourdo':206,
  'Scorplane':207,'Scorvol':472,
  'Snubbull':209,'Grimbull':210,
  'Qwilfish':211,
  'Caratroc':213,
  'Scarhino':214,
  'Farfuret':215,'Dimoret':461,
  'Teddiursa':216,'Ursaring':217,
  'Limagma':218,'Volcaropod':219,
  'Marcacrin':220,'Cochignon':221,'Mammochon':473,
  'Corayon':222,
  'Rémoraid':223,'Octillery':224,
  'Delibird':225,
  'Babimanta':458,'Démanta':226,
  'Airmure':227,
  'Malosse':228,'Démolosse':229,
  'Phanpy':231,'Donphan':232,
  'Cerfrousse':234,
  'Queulorior':235,
  'Debugant':236,
  'Kicklang':237,
  'Écrémeuh':241,
  'Raikou':243,
  'Entei':244,
  'Suicune':245,
  'Embrylex':246,'Ymphect':247,'Séracrawl':248,
  'Lugia':249,
  'Ho-Oh':250,
  'Celebi':251,
};
