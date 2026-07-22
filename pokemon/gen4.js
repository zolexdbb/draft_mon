/* ==== pokemon/gen4.js : Pokédex n°387 à 493 ==== */
const LINES_GEN4 = [
{id:'turtwig',abilities:['Engrais','Coque Armure'],moveIds:['absorb','amnesia','bodyslam','bulletseed','bulldoze','bite','crunch','curse','doubleedge','earthquake','endure','facade','gigadrain','hyperbeam','irondefense','ironhead','lightscreen','magicalleaf','megadrain','mudshot','mudslap','outrage','protect','razorleaf','reflect','rest','rockblast','rockslide','rocktomb','sandstorm','scaryface','solarbeam','stealthrock','stoneedge','sunnyday','swordsdance','synthesis','tackle','takedown','zenheadbutt','withdraw','frenzyplant'],
 stages:[
  {name:'Tortipouss',types:['plante'],base:st(55,68,64,45,55,31)},
  {name:'Boskara',types:['plante'],base:st(75,89,85,55,65,36)},
  {name:'Torterra',types:['plante','sol'],base:st(95,109,105,75,85,56)}]},
{id:'chimchar',abilities:['Brasier','Poing de Fer'],moveIds:['ember','flamewheel','torment','firespin','calmmind','closecombat','taunt','takedown','agility','mudslap','scaryface','protect','lowkick','thief','facade','aerialace','bulldoze','swift','rocktomb','endure','sunnyday','dig','brickbreak','zenheadbutt','uturn','shadowclaw','bulkup','bodyslam','firepunch','thunderpunch','sleeptalk','metronome','poisonjab','rest','rockslide','swordsdance','willowisp','aurasphere','stealthrock','heatwave','encore','flamethrower','reversal','fireblast','earthquake','stoneedge','blastburn','focusblast','hyperbeam','solarbeam','uproar','focuspunch','psychup','doubleedge','endeavor','overheat','knockoff','faketears'],
 stages:[
  {name:'Ouisticram',types:['feu'],base:st(44,58,44,58,44,61)},
  {name:'Chimpenfeu',types:['feu','combat'],base:st(64,78,52,78,52,81)},
  {name:'Simiabraz',types:['feu','combat'],base:st(76,104,71,104,71,108)}]},
{id:'piplup',abilities:['Torrent','Battant'],moveIds:['growl','metalclaw','tackle','watergun','swordsdance','peck','bubblebeam','swagger','furyattack','whirlpool','mist','drillpeck','hydropump','takedown','charm','agility','mudslap','scaryface','protect','waterpulse','disarmingvoice','facade','aerialace','bulldoze','swift','icywind','rocktomb','aircutter','endure','raindance','falseswipe','brickbreak','shadowclaw','airslash','bodyslam','sleeptalk','waterfall','rest','rockslide','flashcannon','irondefense','stealthrock','surf','icebeam','blizzard','earthquake','hydrocannon','hyperbeam','haze','knockoff','uproar','weatherball','featherdance'],
 stages:[
  {name:'Tiplouf',types:['eau'],base:st(53,51,53,61,56,40)},
  {name:'Prinplouf',types:['eau'],base:st(64,66,68,81,76,50)},
  {name:'Pingoléon',types:['eau','acier'],base:st(84,86,88,111,101,60)}]},
{id:'starly',abilities:['Regard Vif','Téméraire'],moveIds:['growl','peck','tackle','quickattack','gust','wingattack','doubleteam','featherdance','whirlwind','aerialace','takedown','agility','airslash','brickbreak','bulkup','protect','swift','endure','fly','hyperbeam','knockoff','doubleedge','heatwave','hurricane','uturn','outrage','focusblast','facade','torment','swagger','razorwind','skullbash','sunnyday','raindance','sleeptalk','rest','astonish','furyattack','sandattack','uproar','thief','aircutter'],
 stages:[
  {name:'Étourmi',types:['normal','vol'],base:st(40,55,30,30,30,60)},
  {name:'Étourvol',types:['normal','vol'],base:st(55,75,50,40,40,80)},
  {name:'Étouraptor',types:['normal','vol'],base:st(85,120,70,50,60,100),abilities:['Intimidation','Téméraire']}]},
{id:'bidoof',abilities:['Simple','Inconscient'],moveIds:['waterpulse','rollout','tackle','bite','rest','aquatail','crunch','swordsdance','doubleedge','bulldoze','hyperbeam','icebeam','icywind','irontail','rocksmash','shadowball','stealthrock','swift','thunderbolt'],
 stages:[
  {name:'Keunotor',types:['normal'],base:st(59,45,40,35,40,31)},
  {name:'Castorno',types:['normal','eau'],base:st(79,85,60,55,60,71)}]},
{id:'kricketot',abilities:['Mue','Fuite'],moveIds:['growl','tackle','absorb','sing','focusenergy','slash','screech','nightslash','stickyweb','fellstinger','furycutter','perishsong','takedown','protect','facade','aerialace','endure','sunnyday','raindance','falseswipe','brickbreak','sleeptalk','rest','swordsdance','leechlife','gigadrain','hypervoice','batonpass','hyperbeam','knockoff','bugbite','uproar','endeavor'],
 stages:[
  {name:'Crikzik',types:['insecte'],base:st(37,25,41,25,41,25)},
  {name:'Mélokrik',types:['insecte'],base:st(77,85,51,55,51,65),abilities:['Essaim','Technicien']}]},
{id:'shinx',abilities:['Rivalité','Intimidation'],moveIds:['charge','electricterrain','leer','tackle','thundershock','bite','spark','thunderwave','crunch','discharge','swagger','babydolleyes','doublekick','howl','nightslash','quickattack','shockwave','takedown','faketears','agility','protect','icefang','confuseray','thief','facade','swift','endure','sunnyday','raindance','bodyslam','sleeptalk','lightscreen','rest','eerieimpulse','thunderbolt','playrough','hyperbeam','thunder','doubleedge'],
 stages:[
  {name:'Lixy',types:['electrik'],base:st(45,65,34,40,34,45)},
  {name:'Luxio',types:['electrik'],base:st(60,85,49,60,49,60)},
  {name:'Luxray',types:['electrik'],base:st(80,120,79,95,79,70)}]},
{id:'cranidos',abilities:['Brise Moule','Sans Limite'],moveIds:['focusenergy','headbutt','leer','rocksmash','takedown','scaryface','slam','ancientpower','zenheadbutt','screech','mudslap','protect','thief','bulldoze','rocktomb','endure','sunnyday','raindance','sandstorm','dig','brickbreak','bodyslam','firepunch','thunderpunch','sleeptalk','rockblast','dragonclaw','rest','rockslide','swordsdance','ironhead','crunch','dragonpulse','stealthrock','surf','flamethrower','thunderbolt','icebeam','fireblast','blizzard','earthquake','stoneedge','outrage','focusblast','hyperbeam','thunder','focuspunch','doubleedge','curse','endeavor','uproar'],
 stages:[
  {name:'Kranidos',types:['roche'],base:st(67,125,40,30,30,58)},
  {name:'Charkos',types:['roche'],base:st(97,165,60,65,50,58)}]},
{id:'shieldon',abilities:['Fermeté','Anti-Bruit'],moveIds:['protect','tackle','taunt','takedown','irondefense','swagger','ancientpower','endure','ironhead','block','mudslap','scaryface','bulldoze','rocktomb','sunnyday','raindance','sandstorm','dig','bodyslam','sleeptalk','reflect','rockblast','rest','rockslide','flashcannon','stealthrock','flamethrower','thunderbolt','icebeam','fireblast','blizzard','earthquake','stoneedge','outrage','hyperbeam','thunder','curse','reversal','sandtomb'],
 stages:[
  {name:'Dinoclier',types:['roche','acier'],base:st(30,42,118,42,88,30)},
  {name:'Bastiodon',types:['roche','acier'],base:st(60,52,168,47,138,30)}]},
{id:'burmy',abilities:['Mue','Envelocape'],moveIds:['leechlife','pinmissile','megahorn','bugbite','furycutter','signalbeam','silverwind','tackle','protect','endure','safeguard','harden','growl','recover'],
 stages:[
  {name:'Cheniti',types:['insecte'],base:st(40,29,45,29,45,36)}],
 branches:[
  {name:'Cheniselle',types:['insecte','plante'],base:st(60,59,85,79,105,36),abilities:['Anticipation','Envelocape'],extraMoveIds:['gust','confusion','psychic','ironhead','bulldoze','hyperbeam','magicalleaf','rest','shadowball','stealthrock','flashcannon']},
  {name:'Papilord',types:['insecte','vol'],base:st(70,94,50,94,50,66),abilities:['Essaim','Lentiteintée'],extraMoveIds:['gust','confusion','airslash','psychic','aerialace','hyperbeam','rest','shadowball','swift']}
 ]},
{id:'combee',abilities:['Cherche Miel','Agitation'],moveIds:['bugbite','confuseray','gust','poisonsting','sweetscent','furycutter','aromaticmist','fellstinger','furyswipes','swagger','airslash','toxic','destinybond','slash','takedown','agility','scaryface','protect','thief','facade','aerialace','swift','endure','sunnyday','raindance','uturn','sleeptalk','rest','taunt','spikes','reversal','sludgebomb','hurricane','hyperbeam','spite','endeavor','wingattack'],
 stages:[
  {name:'Apitrini',types:['insecte','vol'],base:st(30,30,42,30,42,70)},
  {name:'Apireine',types:['insecte','vol'],base:st(70,80,102,80,102,40),abilities:['Pression','Tension']}]},
{id:'pachirisu',abilities:['Fuite','Ramassage'],moveIds:['growl','thundershock','quickattack','charm','spark','endure','swift','sweetkiss','thunderwave','discharge','thunder','babydolleyes','bite','charge','defensecurl','faketears','flail','rollout','takedown','mudslap','protect','thief','facade','aerialace','mudshot','sunnyday','raindance','dig','uturn','thunderpunch','sleeptalk','lightscreen','rest','eerieimpulse','thunderbolt','playrough','electricterrain','hyperbeam','tailwhip','superfang','encore'],
 stages:[
  {name:'Pachirisu',types:['electrik'],base:st(60,45,70,45,90,95)}]},
{id:'buizel',abilities:['Glissade','Ignifu-Voile'],moveIds:['crunch','growl','icefang','quickattack','watergun','bite','swift','aquatail','agility','hydropump','takedown','headbutt','mudslap','slash','scaryface','protect','waterpulse','lowkick','thief','facade','icywind','rocktomb','endure','raindance','dig','brickbreak','bulkup','bodyslam','icepunch','sleeptalk','waterfall','metronome','rest','taunt','icebeam','blizzard','focusblast','hyperbeam','focuspunch','doubleedge','surf','muddywater','furycutter','furyswipes','batonpass'],
 stages:[
  {name:'Mustébouée',types:['eau'],base:st(55,65,35,60,30,85)},
  {name:'Mustéflott',types:['eau'],base:st(85,105,55,85,50,115)}]},
{id:'cherubi',abilities:['Chlorophylle'],moveIds:['absorb','tackle','sleeppowder','drainingkiss','stunspore','doubleedge','petaldance','dazzlinggleam','hyperbeam','magicalleaf','playrough','rest','sunnyday','synthesis','ingrain','vinewhip','razorleaf','solarbeam','megadrain','gigadrain','leafblade','needlearm'],
 stages:[
  {name:'Ceribou',types:['plante'],base:st(45,35,45,62,53,35)},
  {name:'Ceriflor',types:['plante'],base:st(70,60,70,87,78,85),abilities:['Don Floral']}]},
{id:'shellos',abilities:['Glu','Lavabo'],moveIds:['harden','mudslap','recover','watergun','waterpulse','ancientpower','bodyslam','muddywater','raindance','memento','acidarmor','counter','curse','mirrorcoat','mist','sludge','spitup','stockpile','swallow','yawn','takedown','protect','bulldoze','icywind','mudshot','rocktomb','endure','sandstorm','dig','sleeptalk','rockblast','waterfall','rest','rockslide','spikes','stealthrock','surf','amnesia','icebeam','hydropump','blizzard','sludgebomb','earthquake','stoneedge','sandtomb','weatherball','painsplit','whirlpool'],
 stages:[
  {name:'Sancoki',types:['eau'],base:st(76,48,48,57,62,34)},
  {name:'Tritosor',types:['eau','sol'],base:st(111,83,68,92,82,39)}]},
{id:'drifloon',abilities:['Boom Final','Délestage'],moveIds:['astonish','focusenergy','gust','minimize','shadowball','spitup','stockpile','swallow','selfdestruct','destinybond','batonpass','explosion','phantomforce','disable','haze','hypnosis','memento','protect','psybeam','thief','facade','aerialace','swift','icywind','aircutter','nightshade','endure','sunnyday','raindance','airslash','bodyslam','sleeptalk','thunderwave','rest','imprison','fly','skillswap','willowisp','trick','calmmind','hyperbeam','thunder','spite','knockoff','weatherball','painsplit','curse','amnesia','psychic','thunderbolt'],
 stages:[
  {name:'Baudrive',types:['fantome','vol'],base:st(90,50,34,60,44,70)},
  {name:'Grodrive',types:['fantome','vol'],base:st(150,80,44,90,54,80)}]},
{id:'buneary',abilities:['Fuite','Maladresse'],moveIds:['splash','tackle','poweruppunch','machpunch','doubleteam','drainingkiss','quickattack','agility','charm','headbutt','irontail','bounce','dynamicpunch','thunderwave','icebeam','protect','playrough','thunderpunch','icepunch','swift','dig','firepunch','swordsdance','endure','hyperbeam','solarbeam','thunderbolt','hypervoice','shadowball','uturn','focusblast','blizzard','thunder','closecombat','cometpunch','facade','babydolleyes','rest','rocksmash','waterpulse','doubleedge','fakeout'],
 stages:[
  {name:'Laporeille',types:['normal'],base:st(55,66,44,44,56,85)},
  {name:'Lockpin',types:['normal'],base:st(65,76,84,54,96,105),abilities:['Joli Sourire','Maladresse']}]},
{id:'glameow',abilities:['Échauffement','Tempo Perso'],moveIds:['tackle','scratch','bite','crunch','darkpulse','suckerpunch','nightslash','feintattack','slash','quickattack','hypnosis','playrough','doubleedge','aerialace','bulldoze','hyperbeam','irontail','rest','shadowball','shadowclaw','swift','thunderbolt','waterpulse'],
 stages:[
  {name:'Chaglam',types:['normal'],base:st(49,55,42,42,37,85)},
  {name:'Chaffreux',types:['normal'],base:st(71,82,64,64,59,112),abilities:['Isograisse','Tempo Perso']}]},
{id:'stunky',abilities:['Puanteur','Boom Final'],moveIds:['poisongas','scratch','smokescreen','furyswipes','focusenergy','bite','screech','toxic','suckerpunch','memento','nightslash','belch','explosion','flamethrower','astonish','doubleedge','haze','leer','slash','smog','takedown','scaryface','protect','thief','firespin','facade','poisontail','swift','endure','sunnyday','raindance','dig','shadowclaw','bodyslam','sleeptalk','poisonjab','rest','taunt','darkpulse','crunch','shadowball','playrough','fireblast','sludgebomb','hyperbeam','knockoff','superfang'],
 stages:[
  {name:'Moufouette',types:['poison','tenebres'],base:st(63,63,47,41,41,74)},
  {name:'Moufflair',types:['poison','tenebres'],base:st(103,93,67,71,61,84)}]},
{id:'bronzor',abilities:['Lévitation','Ignifugé'],moveIds:['confuseray','confusion','sunnyday','tackle','weatherball','imprison','hypnosis','safeguard','extrasensory','irondefense','futuresight','raindance','block','recycle','takedown','protect','psybeam','facade','bulldoze','rocktomb','nightshade','endure','sandstorm','zenheadbutt','bodyslam','sleeptalk','reflect','lightscreen','rockblast','rest','rockslide','flashcannon','skillswap','ironhead','trick','shadowball','stealthrock','psychic','calmmind','earthquake','hyperbeam','solarbeam','psychup'],
 stages:[
  {name:'Archéomire',types:['acier','psy'],base:st(57,24,86,24,86,23)},
  {name:'Archéodong',types:['acier','psy'],base:st(67,89,116,79,116,33)}]},
{id:'chatot',abilities:['Regard Vif','Pieds Confus'],moveIds:['gust','swift','aircutter','airslash','mimic','playrough','hurricane','aerialace','rest'],
 stages:[
  {name:'Pijako',types:['normal','vol'],base:st(76,65,45,92,42,91)}]},
{id:'spiritomb',abilities:['Pression','Infiltration'],moveIds:['lick','shadowball','nightshade','shadowclaw','confuseray','astonish','shadowpunch','curse','nightmare','darkpulse','suckerpunch','nightslash','crunch','spite','memento','hypnosis','dreameater','destinybond','disable','painsplit','smokescreen','scaryface','protect','psybeam','thief','facade','icywind','rocktomb','endure','sunnyday','raindance','bodyslam','sleeptalk','rest','taunt','imprison','skillswap','willowisp','trick','psychic','calmmind','phantomforce','hyperbeam','toxic'],
 stages:[
  {name:'Spiritomb',types:['fantome','tenebres'],base:st(50,92,108,92,108,35)}]},
{id:'gible',abilities:['Voile Sable','Peau Dure'],moveIds:['sandtomb','tackle','dragonbreath','bulldoze','bite','slash','dragonclaw','dig','takedown','dragonrage','crunch','brickbreak','rockslide','protect','aerialace','swift','swordsdance','bodyslam','endure','rocktomb','stealthrock','fireblast','hyperbeam','dracometeor','ironhead','shadowclaw','flamethrower','stoneedge','earthquake','surf','dragonpulse','poisonjab','irontail','spikes','outrage','facade','falseswipe','razorwind','sandattack','sandstorm','metalclaw','thrash','twister','doubleedge','scaryface','mudshot','sunnyday','raindance','sleeptalk','rest'],
 stages:[
  {name:'Griknot',types:['dragon','sol'],base:st(58,70,45,40,45,42)},
  {name:'Carmache',types:['dragon','sol'],base:st(68,90,65,50,55,82)},
  {name:'Carchacrok',types:['dragon','sol'],base:st(108,130,95,80,85,102),abilities:['Voile Sable','Force Sable'],forms:{
    garchompite:{name:'Méga-Carchacrok',types:['dragon','sol'],base:st(108,170,115,120,95,92),abilities:['Force Sable']}
  }}]},
{id:'riolu',abilities:['Impassible','Attention'],moveIds:['endure','protect','quickattack','metalclaw','rocksmash','screech','aurasphere','bulldoze','swordsdance','dragonpulse','extremespeed','closecombat','detect','calmmind','brickbreak','bulkup','rockslide','poweruppunch','aerialace','thunderpunch','icepunch','crunch','swift','dig','flashcannon','irontail','darkpulse','metronome','focusblast','agility','waterpulse','psychic','stoneedge','earthquake','shadowball','zenheadbutt','shadowclaw','hyperbeam','irondefense','reversal','counter','bonerush','meteormash','takedown','scaryface','lowkick','sunnyday','raindance','bodyslam','sleeptalk','poisonjab','rest','focuspunch','psychup','machpunch','superpower','skyuppercut'],
 stages:[
  {name:'Riolu',types:['combat'],base:st(40,70,40,35,40,60)},
  {name:'Lucario',types:['combat','acier'],base:st(70,110,70,115,70,90),forms:{
    lucarionite:{name:'Méga-Lucario',types:['combat','acier'],base:st(70,145,88,140,70,112),abilities:['Adaptabilité']}
  }}]},
{id:'hippopotas',abilities:['Sable Volant','Force Sable'],moveIds:['amnesia','bodyslam','bite','bulldoze','crunch','curse','dig','doubleedge','earthquake','endure','facade','fissure','hyperbeam','hypervoice','icefang','ironhead','mudslap','mudshot','muddywater','protect','rest','rockslide','rocktomb','sandattack','sandtomb','sandstorm','sleeptalk','slackoff','stealthrock','stoneedge','stockpile','swallow','tackle','takedown','whirlwind','yawn'],
 stages:[
  {name:'Hippopotas',types:['sol'],base:st(68,72,78,38,42,32)},
  {name:'Hippodocus',types:['sol'],base:st(108,112,118,68,72,47)}]},
{id:'skorupi',abilities:['Armurbaston','Sniper'],moveIds:['poisonsting','bite','swordsdance','crunch','aerialace','aquatail','bulldoze','darkpulse','falseswipe','hyperbeam','icefang','irontail','leechlife','poisonjab','rest','rockslide','rocksmash','shadowball','sludgebomb'],
 stages:[
  {name:'Rapion',types:['poison','insecte'],base:st(40,50,90,30,55,65)},
  {name:'Drascore',types:['poison','tenebres'],base:st(70,90,110,60,75,95)}]},
{id:'croagunk',abilities:['Anticipation','Peau Sèche'],moveIds:['astonish','mudslap','poisonsting','taunt','flatter','lowkick','suckerpunch','swagger','poisonjab','toxic','sludgebomb','belch','counter','crosschop','dynamicpunch','fakeout','headbutt','takedown','scaryface','protect','thief','facade','aerialace','bulldoze','icywind','mudshot','rocktomb','endure','sunnyday','raindance','dig','brickbreak','shadowclaw','bulkup','thunderpunch','icepunch','sleeptalk','rest','rockslide','swordsdance','darkpulse','shadowball','encore','batonpass','reversal','earthquake','stoneedge','focusblast','hyperbeam','closecombat','spite','knockoff','superfang','focuspunch'],
 stages:[
  {name:'Cradopaud',types:['poison','combat'],base:st(48,61,40,61,40,50)},
  {name:'Coatox',types:['poison','combat'],base:st(83,106,65,86,65,85)}]},
{id:'carnivine',abilities:['Lévitation'],moveIds:['absorb','bite','stunspore','crunch','sleeppowder','hyperbeam','leechlife','magicalleaf','rest','sludgebomb'],
 stages:[
  {name:'Vortente',types:['plante'],base:st(74,100,72,90,72,46)}]},
{id:'finneon',abilities:['Glissade','Lavabo'],moveIds:['gust','pound','watergun','raindance','waterpulse','attract','safeguard','whirlpool','uturn','bounce','agility','aquatail','aurorabeam','charm','confuseray','flail','psybeam','sweetkiss','tickle','takedown','protect','thief','facade','swift','icywind','aircutter','endure','sleeptalk','waterfall','dazzlinggleam','rest','encore','surf','icebeam','hydropump','blizzard','hyperbeam','airslash'],
 stages:[
  {name:'Écayon',types:['eau'],base:st(49,49,56,49,61,66)},
  {name:'Luminéon',types:['eau'],base:st(69,69,76,69,86,91)}]},
{id:'snover',abilities:['Alerte Neige','Anti-Bruit'],moveIds:['leer','mist','razorleaf','icywind','growth','blizzard','icepunch','brickbreak','rockslide','icebeam','protect','swordsdance','bodyslam','endure','rocktomb','bulletseed','waterpulse','gigadrain','hyperbeam','doubleedge','solarbeam','earthquake','curse','outrage','focusblast','swagger','iciclespear','sheercold','powdersnow','ingrain','takedown','mudslap','scaryface','lowkick','bulldoze','magicalleaf','raindance','sleeptalk','rest','focuspunch'],
 stages:[
  {name:'Blizzi',types:['plante','glace'],base:st(60,62,50,62,60,40)},
  {name:'Blizzaroi',types:['plante','glace'],base:st(90,92,75,92,85,60)}]},
{id:'rotom',abilities:['Lévitation'],moveIds:['astonish','charge','confuseray','darkpulse','discharge','doubleteam','dreameater','hyperbeam','hypervoice','lightscreen','nightshade','painsplit','protect','psybeam','reflect','rest','shadowball','shockwave','sleeptalk','swift','taunt','thief','thunder','thundershock','thunderwave','thunderbolt','trick','uproar','willowisp','blizzard','overheat','hydropump','airslash'],
 stages:[
  {name:'Motisma',types:['electrik','fantome'],base:st(50,50,77,95,77,91),forms:{
    appareilChauffe:{name:'Motisma Chauffe',types:['electrik','feu'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilLavage:{name:'Motisma Lavage',types:['electrik','eau'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilFrigo:{name:'Motisma Frigo',types:['electrik','glace'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilVentilo:{name:'Motisma Ventilateur',types:['electrik','vol'],base:st(50,65,107,105,107,86),abilities:['Lévitation']},
    appareilTondeuse:{name:'Motisma Tondeuse',types:['electrik','plante'],base:st(50,65,107,105,107,86),abilities:['Lévitation']}
  }}]},
{id:'uxie',abilities:['Lévitation'],moveIds:['amnesia','batonpass','calmmind','confusion','confuseray','dazzlinggleam','drainingkiss','endure','encore','extrasensory','facade','firepunch','flail','futuresight','gigadrain','icepunch','imprison','irontail','knockoff','lightscreen','memento','metronome','mudslap','painsplit','playrough','protect','psychup','psychic','psybeam','reflect','rest','safeguard','sandstorm','shadowball','skillswap','sleeptalk','solarbeam','stealthrock','swift','thunder','thunderpunch','thunderbolt','thunderwave','trick','triattack','uturn','waterpulse','yawn','zenheadbutt'],
 stages:[
  {name:'Créhelf',types:['psy'],base:st(75,75,130,75,130,95)}]},
{id:'mesprit',abilities:['Lévitation'],moveIds:['confusion','rest','swift','protect','psybeam','imprison','extrasensory','charm','psychic','flatter','futuresight','irontail','safeguard','waterpulse','confuseray','facade','drainingkiss','endure','sunnyday','raindance','sandstorm','zenheadbutt','uturn','firepunch','thunderpunch','icepunch','sleeptalk','reflect','lightscreen','dazzlinggleam','metronome','thunderwave','skillswap','trick','shadowball','stealthrock','encore','thunderbolt','playrough','calmmind','batonpass','icebeam','blizzard','hyperbeam','thunder','knockoff','painsplit','psychup','doubleedge'],
 stages:[
  {name:'Créfollet',types:['psy'],base:st(80,105,105,105,105,80)}]},
{id:'azelf',abilities:['Lévitation'],moveIds:['calmmind','confusion','detect','dazzlinggleam','drainingkiss','doubleedge','endeavor','encore','endure','extrasensory','facade','fireblast','firepunch','flamethrower','futuresight','icepunch','imprison','irontail','knockoff','lightscreen','metronome','mudslap','playrough','protect','psychup','psychic','psybeam','raindance','reflect','rest','safeguard','sandstorm','selfdestruct','shadowball','skillswap','sleeptalk','stealthrock','swift','sunnyday','taunt','thunder','thunderpunch','thunderbolt','thunderwave','trick','triattack','uturn','uproar','waterpulse','zenheadbutt','explosion'],
 stages:[
  {name:'Créfadet',types:['psy'],base:st(75,125,70,125,70,115)}]},
{id:'dialga',abilities:['Pression'],moveIds:['metalclaw','scaryface','dragonbreath','ancientpower','slash','flashcannon','dragonclaw','aurasphere','irontail','takedown','protect','facade','bulldoze','swift','rocktomb','endure','sunnyday','raindance','sandstorm','brickbreak','shadowclaw','bulkup','bodyslam','sleeptalk','thunderwave','rest','rockslide','irondefense','trick','dragonpulse','stealthrock','hypervoice','flamethrower','thunderbolt','icebeam','fireblast','blizzard','earthquake','stoneedge','outrage','overheat','focusblast','hyperbeam','thunder','dracometeor','psychup'],
 stages:[
  {name:'Dialga',types:['acier','dragon'],base:st(100,120,120,150,100,90)}]},
{id:'palkia',abilities:['Pression'],moveIds:['scaryface','waterpulse','dragonbreath','ancientpower','slash','aquatail','aurasphere','hydropump','takedown','protect','aerialace','bulldoze','swift','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','brickbreak','shadowclaw','bulkup','bodyslam','sleeptalk','waterfall','dragonclaw','thunderwave','rest','rockslide','trick','dragonpulse','hypervoice','surf','flamethrower','thunderbolt','icebeam','fireblast','earthquake','stoneedge','outrage','focusblast','hyperbeam','thunder','dracometeor','psychup','whirlpool'],
 stages:[
  {name:'Palkia',types:['eau','dragon'],base:st(90,120,100,150,120,100)}]},
{id:'heatran',abilities:['Torche','Corps Ardent'],moveIds:['firespin','leer','metalclaw','rockblast','takedown','ironhead','crunch','heatwave','stoneedge','rockslide','protect','dig','bodyslam','endure','rocktomb','stealthrock','fireblast','hyperbeam','overheat','ancientpower','taunt','flamethrower','solarbeam','earthquake','dragonpulse','bulldoze','irondefense','scaryface','flashcannon','darkpulse','willowisp','facade','sleeptalk','rest'],
 stages:[
  {name:'Heatran',types:['feu','acier'],base:st(91,90,106,130,106,77)}]},
{id:'regigigas',abilities:['Début Calme'],moveIds:['confuseray','pound','protect','knockoff','megapunch','zenheadbutt','bulldoze','icywind','rocktomb','endure','sunnyday','raindance','brickbreak','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','thunderwave','rest','rockslide','ironhead','thunderbolt','earthquake','stoneedge','focusblast','hyperbeam','thunder','focuspunch','doubleedge','facade','stomp'],
 stages:[
  {name:'Regigigas',types:['normal'],base:st(110,160,110,80,110,100)}]},
{id:'giratina',abilities:['Lévitation'],moveIds:['dragonbreath','ancientpower','slash','scaryface','shadowclaw','painsplit','aurasphere','dragonclaw','destinybond','takedown','protect','confuseray','facade','bulldoze','swift','icywind','endure','sunnyday','raindance','bodyslam','sleeptalk','thunderwave','rest','darkpulse','fly','ironhead','willowisp','shadowball','dragonpulse','hypervoice','psychic','thunderbolt','calmmind','earthquake','stoneedge','phantomforce','outrage','hyperbeam','thunder','dracometeor','spite','curse'],
 stages:[
  {name:'Giratina',types:['fantome','dragon'],base:st(150,100,120,100,120,90),forms:{
    orbePlatine:{name:'Giratina (Origine)',types:['fantome','dragon'],base:st(150,120,100,120,100,90),abilities:['Lévitation']}
  }}]},
{id:'cresselia',abilities:['Lévitation'],moveIds:['confusion','doubleteam','mist','aurorabeam','psybeam','slash','moonlight','safeguard','psychic','moonblast','futuresight','mudslap','scaryface','protect','confuseray','facade','swift','icywind','endure','sunnyday','raindance','zenheadbutt','bodyslam','sleeptalk','reflect','lightscreen','dazzlinggleam','thunderwave','rest','skillswap','trick','shadowball','thunderbolt','calmmind','icebeam','hyperbeam','thunder','solarbeam','psychup'],
 stages:[
  {name:'Cresselia',types:['psy'],base:st(120,70,110,75,120,85)}]},
{id:'phione',abilities:['Hydratation'],moveIds:['watergun','charm','supersonic','bubblebeam','acidarmor','whirlpool','waterpulse','dive','raindance','protect','disarmingvoice','facade','swift','icywind','endure','zenheadbutt','uturn','sleeptalk','waterfall','dazzlinggleam','rest','surf','icebeam','hydropump','blizzard','haze','knockoff','weatherball','psychup'],
 stages:[
  {name:'Phione',types:['eau'],base:st(80,80,80,80,80,80)}]},
{id:'manaphy',abilities:['Hydratation'],moveIds:['tailglow','watergun','charm','supersonic','bubblebeam','acidarmor','whirlpool','waterpulse','dive','raindance','faketears','mudslap','protect','psybeam','disarmingvoice','facade','swift','icywind','zenheadbutt','uturn','sleeptalk','reflect','lightscreen','waterfall','dazzlinggleam','rest','skillswap','shadowball','psychic','surf','calmmind','icebeam','hydropump','blizzard','hyperbeam','haze','knockoff','weatherball','psychup'],
 stages:[
  {name:'Manaphy',types:['eau'],base:st(100,100,100,100,100,100)}]},
{id:'darkrai',abilities:['Mauvais Rêve'],moveIds:['confuseray','confusion','quickattack','hypnosis','psybeam','doubleteam','futuresight','haze','phantomforce','dreameater','darkpulse','calmmind','thunderwave','brickbreak','rockslide','icebeam','protect','crunch','swift','swordsdance','endure','rocktomb','hyperbeam','knockoff','icywind','sludgebomb','willowisp','shadowclaw','psychic','thunderbolt','shadowball','poisonjab','taunt','focusblast','blizzard','thunder','facade','shadowpunch','torment','disable','suckerpunch','nightshade','sleeptalk','thief','sunnyday','raindance','rest','spite','curse','trick','psychup'],
 stages:[
  {name:'Darkrai',types:['tenebres'],base:st(70,90,90,135,90,125)}]},
{id:'shaymin',abilities:['Médic Nature'],moveIds:['growth','magicalleaf','synthesis','sweetscent','playrough','sweetkiss','quickattack','airslash','takedown','protect','disarmingvoice','facade','swift','aircutter','endure','sunnyday','bulletseed','zenheadbutt','sleeptalk','dazzlinggleam','rest','swordsdance','gigadrain','psychic','batonpass','hyperbeam','solarbeam','doubleedge','endeavor','petalblizzard'],
 stages:[
  {name:'Shaymin',types:['plante'],base:st(100,100,100,100,100,100),forms:{
    gracidee:{name:'Shaymin (Ciel)',types:['plante','vol'],base:st(100,103,75,120,75,127),abilities:['Sérénité']}
  }}]},
{id:'arceus',abilities:['Multi-Type'],moveIds:['cosmicpower','seismictoss','hypervoice','extremespeed','futuresight','recover','hyperbeam','perishsong','takedown','agility','scaryface','protect','waterpulse','confuseray','facade','bulldoze','swift','magicalleaf','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','bulletseed','brickbreak','zenheadbutt','shadowclaw','bulkup','airslash','bodyslam','sleeptalk','reflect','lightscreen','waterfall','dragonclaw','dazzlinggleam','thunderwave','poisonjab','rest','rockslide','taunt','swordsdance','imprison','flashcannon','darkpulse','fly','ironhead','dragondance','irondefense','willowisp','trick','aurasphere','shadowball','dragonpulse','stealthrock','heatwave','psychic','surf','flamethrower','thunderbolt','calmmind','electricterrain','fireblast','hydropump','blizzard','sludgebomb','earthquake','stoneedge','phantomforce','outrage','overheat','focusblast','hurricane','thunder','solarbeam','dracometeor','psychup','doubleedge'],
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
