/* ==== pokemon/gen3.js : Pokédex n°252 à 386 ==== */
const LINES_GEN3 = [
{id:'treecko',abilities:['Engrais','Turbo'],moveIds:['leer','tackle','quickattack','absorb','detect','gigadrain','doubleteam','dragonbreath','slash','leafblade','screech','synthesis','dragonclaw','brickbreak','rockslide','protect','aerialace','thunderpunch','crunch','swift','dig','swordsdance','bodyslam','nightslash','endure','rocktomb','bulletseed','hyperbeam','agility','safeguard','doubleedge','solarbeam','earthquake','dragonpulse','bulldoze','irontail','outrage','focusblast','facade','falseswipe','razorwind','frenzyplant','pound','megadrain','slam','endeavor','furycutter','takedown','lowkick','thief','magicalleaf','sunnyday','sleeptalk','rest','grassyterrain','dragondance','focuspunch'],
 stages:[
  {name:'Arcko',types:['plante'],base:st(40,45,35,65,55,70)},
  {name:'Massko',types:['plante'],base:st(50,65,45,85,65,95)},
  {name:'Jungko',types:['plante'],base:st(70,85,65,105,85,120)}]},
{id:'torchic',abilities:['Brasier','Turbo'],moveIds:['growl','peck','ember','quickattack','detect','aerialace','slash','bounce','focusenergy','flamethrower','bulkup','blazekick','featherdance','brickbreak','rockslide','protect','poweruppunch','thunderpunch','swift','dig','firepunch','swordsdance','bodyslam','nightslash','endure','rocktomb','fireblast','hyperbeam','knockoff','agility','overheat','doubleedge','willowisp','shadowclaw','solarbeam','stoneedge','heatwave','earthquake','firespin','poisonjab','bulldoze','uturn','curse','focusblast','closecombat','cometpunch','facade','blastburn','doublekick','scratch','sandattack','reversal','takedown','mudslap','lowkick','thief','sunnyday','sleeptalk','rest','aurasphere','batonpass','uproar','focuspunch'],
 stages:[
  {name:'Poussifeu',types:['feu'],base:st(45,60,40,70,50,45)},
  {name:'Galifeu',types:['feu','combat'],base:st(60,85,60,85,60,55)},
  {name:'Braségali',types:['feu','combat'],base:st(80,120,70,110,70,80)}]},
{id:'mudkip',abilities:['Torrent','Moiteur'],moveIds:['bite','growl','sandtomb','tackle','watergun','rocksmash','rockthrow','protect','supersonic','bubblebeam','rockslide','takedown','amnesia','surf','screech','sludgebomb','muddywater','earthquake','hydropump','mudshot','brickbreak','bulkup','icebeam','dig','bodyslam','endure','rocktomb','stealthrock','waterpulse','hyperbeam','knockoff','icywind','doubleedge','stoneedge','whirlpool','poisonjab','bulldoze','irontail','curse','outrage','waterfall','focusblast','blizzard','facade','ancientpower','fissure','hydrocannon','mudslap','scaryface','lowkick','raindance','sleeptalk','rest','icepunch','uproar','focuspunch','weatherball','endeavor'],
 stages:[
  {name:'Gobou',types:['eau'],base:st(50,70,50,50,50,40)},
  {name:'Flobio',types:['eau','sol'],base:st(70,85,70,60,70,50)},
  {name:'Laggron',types:['eau','sol'],base:st(100,110,90,85,90,60)}]},
{id:'poochyena',abilities:['Fuite','Pied Véloce'],moveIds:['bite','crunch','sandattack','tackle','thief','howl','leer','swagger','scaryface','taunt','yawn','takedown','suckerpunch','playrough','charm','mudslap','protect','facade','endure','sunnyday','raindance','dig','bodyslam','sleeptalk','rest','darkpulse','shadowball','hypervoice','hyperbeam','spite','superfang','uproar'],
 stages:[
  {name:'Medhyèna',types:['tenebres'],base:st(35,55,35,30,30,35)},
  {name:'Grahyèna',types:['tenebres'],base:st(70,90,70,60,60,70)}]},
{id:'zigzagoon',abilities:['Ramassage','Gloutonnerie'],moveIds:['babydolleyes','growl','pinmissile','sandattack','slash','tackle','tailwhip','headbutt','furyswipes','rest','takedown','flail','bellydrum','doubleedge','charm','extremespeed','mudslap','tickle','trick','waterpulse','sunnyday','icebeam','blizzard','hyperbeam','protect','raindance','irontail','thunderbolt','thunder','dig','shadowball','doubleteam','shockwave','facade','attract','thief','endure','shadowclaw','thunderwave','sleeptalk','swagger','cut','surf','strength','rocksmash'],
 stages:[
  {name:'Zigzaton',types:['normal'],base:st(38,30,41,30,41,60)},
  {name:'Linéon',types:['normal'],base:st(78,70,61,50,61,100)}]},
{id:'wurmple',abilities:['Écran Poudre','Fuite'],moveIds:['tackle','poisonsting','silverwind','irondefense'],
 stages:[
  {name:'Chenipotte',types:['insecte'],base:st(45,45,35,20,30,20)}],
 branches:[
  {name:'Charmillon',types:['insecte','vol'],base:st(60,70,50,90,50,65),abilities:['Essaim'],extraMoveIds:['aircutter','stunspore','airslash','aerialace','hyperbeam','leechlife','psychic','rest','shadowball','swift']},
  {name:'Papinox',types:['insecte','poison'],base:st(60,50,70,50,90,65),abilities:['Écran Poudre','Œil Composé'],extraMoveIds:['confusion','poisonpowder','extrasensory','aerialace','hyperbeam','psychic','rest','shadowball','sludgebomb','swift']}
 ]},
{id:'lotad',abilities:['Glissade','Cuvette'],moveIds:['bubblebeam','fakeout','raindance','absorb','astonish','flail','furyswipes','growl','hydropump','knockoff','megadrain','mist','teeterdance','watergun','zenheadbutt','takedown','protect','waterpulse','thief','disarmingvoice','facade','swift','magicalleaf','icywind','mudshot','endure','sunnyday','bulletseed','brickbreak','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','waterfall','metronome','rest','swordsdance','gigadrain','hypervoice','surf','amnesia','icebeam','grassyterrain','blizzard','focusblast','hyperbeam','solarbeam','uproar','focuspunch','weatherball','doubleedge','whirlpool','muddywater'],
 stages:[
  {name:'Nénupiot',types:['eau','plante'],base:st(40,30,30,40,50,30)},
  {name:'Lombre',types:['eau','plante'],base:st(60,50,50,60,70,50)},
  {name:'Ludicolo',types:['eau','plante'],base:st(80,70,70,90,100,70)}]},
{id:'seedot',abilities:['Chlorophylle','Matinal'],moveIds:['aircutter','hurricane','sunnyday','leafblade','absorb','astonish','beatup','explosion','extrasensory','fakeout','growth','harden','megadrain','razorleaf','rollout','suckerpunch','swagger','synthesis','tackle','torment','whirlwind','takedown','scaryface','protect','lowkick','confuseray','thief','facade','aerialace','swift','magicalleaf','icywind','rocktomb','endure','raindance','dig','bulletseed','falseswipe','brickbreak','airslash','bodyslam','sleeptalk','rest','rockslide','taunt','swordsdance','imprison','darkpulse','willowisp','gigadrain','shadowball','heatwave','amnesia','reversal','grassyterrain','focusblast','solarbeam','spite','knockoff','uproar','weatherball','psychup','doubleedge','endeavor','petalblizzard','curse'],
 stages:[
  {name:'Grainipiot',types:['plante'],base:st(40,40,50,30,30,30)},
  {name:'Pifeuil',types:['plante','tenebres'],base:st(70,70,40,60,40,60)},
  {name:'Tengalice',types:['plante','tenebres'],base:st(90,100,60,90,60,80)}]},
{id:'taillow',abilities:['Cran'],moveIds:['airslash','focusenergy','growl','peck','quickattack','wingattack','doubleteam','aerialace','agility','endeavor','reversal','hurricane','skyattack','supersonic','whirlwind','sunnyday','hyperbeam','protect','raindance','facade','rest','attract','thief','steelwing','endure','sleeptalk','swagger','uturn','fly'],
 stages:[
  {name:'Nirondelle',types:['normal','vol'],base:st(40,55,30,30,30,85)},
  {name:'Hélédelle',types:['normal','vol'],base:st(60,85,60,75,50,125)}]},
{id:'wingull',abilities:['Regard Vif','Hydratation'],moveIds:['agility','airslash','growl','protect','quickattack','supersonic','watergun','waterpulse','spitup','stockpile','swallow','mist','hurricane','hydropump','aerialace','aircutter','gust','knockoff','twister','takedown','facade','swift','icywind','endure','raindance','uturn','bodyslam','sleeptalk','waterfall','rest','fly','surf','icebeam','blizzard','hyperbeam','weatherball','whirlpool','muddywater','featherdance'],
 stages:[
  {name:'Goélise',types:['eau','vol'],base:st(40,30,30,55,30,85)},
  {name:'Bekipan',types:['eau','vol'],base:st(60,50,100,95,70,65)}]},
{id:'ralts',abilities:['Synchro','Calque'],moveIds:['disarmingvoice','growl','confusion','hypnosis','drainingkiss','teleport','psybeam','magicalleaf','confuseray','charm','doubleteam','wish','calmmind','psychic','mysticalfire','moonblast','futuresight','dazzlinggleam','thunderwave','lightscreen','protect','thunderpunch','icepunch','swift','firepunch','reflect','bodyslam','endure','hyperbeam','icywind','safeguard','willowisp','zenheadbutt','thunderbolt','hypervoice','shadowball','taunt','metronome','focusblast','facade','torment','mimic','dreameater','swagger','mistyterrain','destinybond','disable','knockoff','meanlook','memento','thief','nightshade','sunnyday','raindance','sleeptalk','rest','skillswap','imprison','trick','aurasphere','encore','psychicterrain'],
 stages:[
  {name:'Tarsal',types:['psy'],base:st(28,25,25,45,35,40)},
  {name:'Kirlia',types:['psy'],base:st(38,35,35,65,55,50)}], branches:[
  {name:'Gardevoir',types:['psy','fee'],base:st(68,65,65,125,115,80),abilities:['Synchro','Calque'],extraMoveIds:['moonlight'],forms:{
    gardevoirite:{name:'Méga-Gardevoir',types:['psy','fee'],base:st(68,85,65,165,135,100),abilities:['Aura Féérique']}
  }},
  {name:'Gallame',types:['psy','combat'],base:st(68,125,65,65,115,80),abilities:['Impassible','Cœur Noble'],extraMoveIds:['swordsdance','leafblade','closecombat','slash','nightslash','brickbreak','bulkup','rocktomb','shadowclaw','stoneedge','earthquake','cometpunch','falseswipe','lowkick','bulldoze','poisonjab','rockslide','reversal']}
 ]},
{id:'surskit',abilities:['Glissade'],moveIds:['quickattack','sweetscent','watergun','whirlwind','gust','aircutter','scaryface','stunspore','airslash','gigadrain','bugbite','fellstinger','hydropump','mudshot','psybeam','takedown','agility','mudslap','protect','waterpulse','thief','facade','aerialace','swift','icywind','endure','sunnyday','raindance','uturn','sleeptalk','waterfall','rest','leechlife','surf','icebeam','blizzard','hurricane','hyperbeam','solarbeam','haze','weatherball','psychup'],
 stages:[
  {name:'Arakdo',types:['insecte','eau'],base:st(40,30,32,50,52,65)},
  {name:'Maskadra',types:['insecte','vol'],base:st(70,60,62,80,82,60)}]},
{id:'shroomish',abilities:['Pose Spore','Pied Véloce'],moveIds:['absorb','growth','poisonpowder','stunspore','tackle','toxic','megadrain','headbutt','counter','brickbreak','dynamicpunch','focuspunch','machpunch','spore','charm','faketears','takedown','mudslap','protect','lowkick','facade','aerialace','bulldoze','swift','magicalleaf','mudshot','rocktomb','endure','sunnyday','raindance','dig','bulletseed','falseswipe','zenheadbutt','bulkup','bodyslam','thunderpunch','sleeptalk','poisonjab','rest','rockslide','swordsdance','gigadrain','reversal','grassyterrain','sludgebomb','stoneedge','focusblast','hyperbeam','closecombat','solarbeam'],
 stages:[
  {name:'Balignon',types:['plante'],base:st(60,40,60,40,60,35)},
  {name:'Chapignon',types:['plante','combat'],base:st(60,130,80,60,60,70)}]},
{id:'slakoth',abilities:['Absentéisme'],moveIds:['encore','scratch','suckerpunch','yawn','amnesia','counter','flail','megakick','swagger','bodyslam','curse','nightslash','slash','snore','tickle','takedown','mudslap','scaryface','protect','lowkick','thief','facade','aerialace','bulldoze','metalclaw','icywind','mudshot','rocktomb','endure','sunnyday','raindance','dig','falseswipe','brickbreak','zenheadbutt','shadowclaw','bulkup','firepunch','thunderpunch','icepunch','sleeptalk','metronome','thunderwave','poisonjab','rest','rockslide','taunt','shadowball','hypervoice','flamethrower','thunderbolt','playrough','reversal','icebeam','fireblast','blizzard','earthquake','outrage','focusblast','hyperbeam','thunder','solarbeam','knockoff','uproar','focuspunch','doubleedge','endeavor'],
 stages:[
  {name:'Parécool',types:['normal'],base:st(60,60,60,35,35,30)},
  {name:'Vigoroth',types:['normal'],base:st(80,80,80,55,55,90)},
  {name:'Monaflèmit',types:['normal'],base:st(150,160,100,95,65,100)}]},
{id:'nincada',abilities:['Œil Composé'],moveIds:['dig','harden','mudslap','sandattack','scratch','absorb','protect','facade','rest','thief','endure','cut'],
 stages:[
  {name:'Ningale',types:['insecte','sol'],base:st(31,45,90,30,30,40)}],
 branches:[
  {name:'Ninjask',types:['insecte','vol'],base:st(61,90,45,50,50,160),abilities:['Turbo','Infiltration'],extraMoveIds:['aerialace','batonpass','falseswipe','furycutter','metalclaw','screech','agility','bugbite','furyswipes','slash','swordsdance','flail','gust','nightslash','sunnyday','hyperbeam','gigadrain','solarbeam','shadowball','sandstorm','uturn']},
  {name:'Munja',types:['insecte','fantome'],base:st(1,90,45,30,30,40),abilities:['Garde Mystik'],extraMoveIds:['falseswipe','metalclaw','shadowclaw','confuseray','spite','phantomforce','gust','nightslash','sunnyday','hyperbeam','gigadrain','solarbeam','willowisp','sleeptalk','dreameater','swagger']}
 ]},
{id:'whismur',abilities:['Anti-Bruit'],moveIds:['astonish','bite','crunch','howl','pound','rest','sleeptalk','stomp','supersonic','uproar','screech','hypervoice','boomburst','hyperbeam','disarmingvoice','endeavor','extrasensory','faketears','smokescreen','snore','takedown','whirlwind','waterpulse','sunnyday','taunt','icebeam','blizzard','protect','raindance','solarbeam','earthquake','shadowball','brickbreak','doubleteam','shockwave','flamethrower','fireblast','rocktomb','torment','facade','attract','overheat','focusblast','endure','rockslide','bulldoze','swagger','surf','strength','rocksmash'],
 stages:[
  {name:'Chuchmur',types:['normal'],base:st(64,51,23,51,23,28)},
  {name:'Ramboum',types:['normal'],base:st(84,71,43,71,43,48)},
  {name:'Brouhabam',types:['normal'],base:st(104,91,63,91,73,68)}]},
{id:'makuhita',abilities:['Isograisse','Cran'],moveIds:['armthrust','focusenergy','sandattack','tackle','fakeout','whirlwind','knockoff','bulkup','bellydrum','detect','seismictoss','focuspunch','endure','closecombat','reversal','counter','crosschop','dynamicpunch','takedown','mudslap','scaryface','protect','lowkick','thief','facade','bulldoze','swift','mudshot','rocktomb','sunnyday','raindance','dig','brickbreak','zenheadbutt','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','metronome','poisonjab','rest','rockslide','taunt','ironhead','surf','earthquake','stoneedge','focusblast','hyperbeam','curse'],
 stages:[
  {name:'Makuhita',types:['combat'],base:st(72,60,30,20,30,25)},
  {name:'Hariyama',types:['combat'],base:st(144,120,60,40,60,50)}]},
{id:'nosepass',abilities:['Magnépiège','Fermeté'],moveIds:['block','irondefense','tackle','thunderwave','rest','spark','rockslide','rockblast','discharge','sandstorm','stoneedge','zapcannon','triattack','takedown','protect','facade','bulldoze','rocktomb','endure','sunnyday','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','dazzlinggleam','taunt','flashcannon','ironhead','stealthrock','thunderbolt','earthquake','hyperbeam','thunder','sandtomb','painsplit','doubleedge','curse'],
 stages:[
  {name:'Tarinor',types:['roche'],base:st(30,45,135,45,90,30)},
  {name:'Tarinorme',types:['roche','acier'],base:st(60,55,145,75,150,40),abilities:['Fermeté','Force Sable']}]},
{id:'skitty',abilities:['Joli Sourire','Peau Miracle'],moveIds:['attract','babydolleyes','charm','disarmingvoice','doubleedge','facade','fakeout','furyswipes','growl','healbell','playrough','sing','tackle','tailwhip','batonpass','cosmicpower','faketears','suckerpunch','tickle','uproar','wish','zenheadbutt','waterpulse','calmmind','sunnyday','icebeam','blizzard','hyperbeam','protect','raindance','safeguard','solarbeam','irontail','thunderbolt','thunder','dig','shadowball','doubleteam','shockwave','rest','endure','thunderwave','psychup','sleeptalk','dreameater','swagger','strength','rocksmash'],
 stages:[
  {name:'Skitty',types:['normal'],base:st(50,45,45,35,35,50)},
  {name:'Delcatty',types:['normal'],base:st(70,65,65,55,55,90)}]},
{id:'sableye',abilities:['Regard Vif','Insomnia'],moveIds:['leer','tackle','takedown','detect','shadowclaw','confuseray','knockoff','psybeam','nightslash','zenheadbutt','shadowball','recover','phantomforce','calmmind','thunderwave','brickbreak','bulkup','lightscreen','protect','aerialace','thunderpunch','icepunch','dig','firepunch','reflect','bodyslam','nightshade','furyswipes','meanlook','scratch','astonish','fakeout','disable','metalclaw','icywind','mudshot','rocktomb','endure','sunnyday','raindance','sleeptalk','metronome','dazzlinggleam','rest','imprison','darkpulse','skillswap','willowisp','trick','gigadrain','encore','hyperbeam','spite','focuspunch','flatter','suckerpunch','torment','thief','lowkick','mudslap'],
 stages:[
  {name:'Ténéfix',types:['tenebres','fantome'],base:st(50,75,75,65,65,50)}]},
{id:'mawile',abilities:['Hyper Cutter','Intimidation'],moveIds:['bite','fairywind','faketears','knockoff','charm','drainingkiss','irondefense','crunch','ironhead','taunt','playrough','dynamicpunch','headbutt','rocksmash','brickbreak','rockslide','icebeam','protect','poweruppunch','thunderpunch','icepunch','swordsdance','doubleteam','bodyslam','endure','rocktomb','stealthrock','fireblast','hyperbeam','sludgebomb','doubleedge','flashcannon','darkpulse','dazzlinggleam','focusblast','facade','ancientpower','falseswipe','poisonfang','swagger','astonish','growl','batonpass','spitup','stockpile','swallow','suckerpunch','sweetscent','sunnyday','raindance','solarbeam','shadowball','torment','rest','attract','stoneedge','strength','seismictoss','slam','tickle'],
 stages:[
  {name:'Mysdibule',types:['acier','fee'],base:st(50,85,85,55,55,50)}]},
{id:'aron',abilities:['Fermeté','Tête de Roc'],moveIds:['harden','screech','tackle','metalclaw','rocktomb','headbutt','protect','rockslide','ironhead','stridoson','takedown','irontail','irondefense','doubleedge','dragonclaw','thunderwave','brickbreak','icebeam','poweruppunch','thunderpunch','icepunch','crunch','dig','firepunch','bodyslam','endure','stealthrock','fireblast','hyperbeam','mudshot','shadowclaw','flamethrower','solarbeam','stoneedge','thunderbolt','earthquake','whirlpool','surf','dragonpulse','bulldoze','darkpulse','outrage','hydropump','focusblast','blizzard','thunder','facade','ancientpower','swagger','autotomize','curse','endeavor','mudslap','reversal','stomp','superpower','focuspunch','waterpulse','sunnyday','taunt','raindance','shockwave','sandstorm','aerialace','rest','attract','flashcannon','cut','strength','rocksmash'],
 stages:[
  {name:'Galekid',types:['acier','roche'],base:st(50,70,100,40,40,30)},
  {name:'Galegon',types:['acier','roche'],base:st(60,90,140,50,50,40)},
  {name:'Galeking',types:['acier','roche'],base:st(70,110,180,60,60,50)}]},
{id:'meditite',abilities:['Force Pure','Télépathe'],moveIds:['confusion','detect','endure','psybeam','calmmind','zenheadbutt','takedown','agility','recover','dynamicpunch','firepunch','icepunch','thunderpunch','brickbreak','bulkup','rockslide','lightscreen','protect','poweruppunch','aerialace','swift','reflect','bodyslam','rocktomb','hyperbeam','shadowball','poisonjab','taunt','metronome','focusblast','closecombat','cometpunch','facade','fakeout','counter','batonpass','lowkick','thief','sunnyday','raindance','sleeptalk','imprison','skillswap','trick','aurasphere','psychic','reversal','psychicterrain','focuspunch','painsplit'],
 stages:[
  {name:'Méditikka',types:['combat','psy'],base:st(30,40,55,40,55,60)},
  {name:'Charmina',types:['combat','psy'],base:st(60,60,75,60,75,80)}]},
{id:'electrike',abilities:['Paratonnerre','Statik'],moveIds:['leer','quickattack','tackle','thundershock','thunderwave','spark','bite','eerieimpulse','charge','thunderbolt','thunder','headbutt','icefang','lightscreen','protect','crunch','swift','bodyslam','endure','discharge','hyperbeam','agility','overheat','flamethrower','hypervoice','curse','howl','shockwave','electricterrain','raindance','irontail','doubleteam','rest','attract','thief','flash','sleeptalk','swagger','strength','uproar'],
 stages:[
  {name:'Dynavolt',types:['electrik'],base:st(40,45,40,65,40,65)},
  {name:'Élecsprint',types:['electrik'],base:st(70,75,60,105,60,105)}]},
{id:'plusle',abilities:['Plus'],moveIds:['growl','playnice','quickattack','thunderwave','spark','encore','swift','charge','discharge','batonpass','agility','thunder','charm','sing','sweetkiss','wish','faketears','mudslap','protect','facade','endure','raindance','thunderpunch','sleeptalk','lightscreen','rest','eerieimpulse','skillswap','thunderbolt','playrough','electricterrain','superfang','uproar','endeavor'],
 stages:[
  {name:'Posipi',types:['electrik'],base:st(60,50,40,85,75,95)}]},
{id:'minun',abilities:['Minus'],moveIds:['growl','playnice','quickattack','thunderwave','spark','encore','swift','charge','discharge','batonpass','agility','thunder','charm','faketears','sing','sweetkiss','wish','mudslap','protect','facade','endure','raindance','thunderpunch','sleeptalk','lightscreen','rest','thunderbolt','playrough','superfang','uproar','endeavor'],
 stages:[
  {name:'Négapi',types:['electrik'],base:st(60,40,50,75,85,95)}]},
{id:'volbeat',abilities:['Lumiattirance','Essaim'],moveIds:['tackle','doubleteam','confuseray','quickattack','moonlight','tailglow','protect','zenheadbutt','playrough','doubleedge','infestation','counter','seismictoss','swagger','takedown','mudslap','waterpulse','facade','aerialace','swift','aircutter','endure','sunnyday','raindance','brickbreak','uturn','airslash','bodyslam','thunderpunch','icepunch','sleeptalk','lightscreen','dazzlinggleam','metronome','thunderwave','rest','taunt','trick','gigadrain','shadowball','encore','batonpass','thunder','solarbeam','focuspunch','endeavor'],
 stages:[
  {name:'Muciole',types:['insecte'],base:st(65,73,55,47,75,85)}]},
{id:'illumise',abilities:['Benêt'],moveIds:['playnice','tackle','sweetscent','charm','quickattack','moonlight','wish','encore','flatter','zenheadbutt','playrough','infestation','attract','growth','takedown','faketears','mudslap','protect','waterpulse','confuseray','thief','disarmingvoice','facade','aerialace','swift','drainingkiss','aircutter','endure','sunnyday','raindance','brickbreak','uturn','airslash','thunderpunch','icepunch','sleeptalk','lightscreen','dazzlinggleam','metronome','thunderwave','rest','trick','gigadrain','shadowball','thunderbolt','batonpass','thunder','solarbeam','focuspunch','psychup','doubleedge','endeavor'],
 stages:[
  {name:'Lumivole',types:['insecte'],base:st(65,47,55,73,75,85)}]},
{id:'roselia',abilities:['Médic Nature','Point Poison'],moveIds:['absorb','bodyslam','bulletseed','charm','dazzlinggleam','endure','facade','gigadrain','growth','hyperbeam','magicalleaf','mudshot','petaldance','pinmissile','poisonjab','poisonpowder','poisonsting','protect','razorleaf','razorwind','rest','shadowball','sleeppowder','sludgebomb','spikes','stunspore','swift','synthesis','toxic'],
 stages:[
  {name:'Rozbouton',types:['plante','poison'],base:st(40,30,35,50,70,55)},
  {name:'Rosélia',types:['plante','poison'],base:st(50,60,45,100,80,65)},
  {name:'Roserade',types:['plante','poison'],base:st(60,70,65,125,105,90)}]},
{id:'gulpin',abilities:['Suintement','Glu'],moveIds:['smokescreen','tackle','amnesia','takedown','acidarmor','poisonjab','knockoff','rollout','bodyslam','toxic','sludgebomb','explosion','thunderwave','brickbreak','icebeam','protect','thunderpunch','icepunch','firepunch','swordsdance','endure','bulletseed','waterpulse','gigadrain','hyperbeam','selfdestruct','doubleedge','zenheadbutt','solarbeam','earthquake','shadowball','bulldoze','curse','metronome','facade','sing','dreameater','poisongas','pound','sludge','yawn','encore','spitup','stockpile','swallow','belch','destinybond','mudslap','smog','thief','mudshot','sunnyday','raindance','sleeptalk','rest','painsplit'],
 stages:[
  {name:'Gloupti',types:['poison'],base:st(70,43,53,43,53,40)},
  {name:'Avaltout',types:['poison'],base:st(100,73,83,73,83,55)}]},
{id:'carvanha',abilities:['Peau Dure','Turbo'],moveIds:['leer','nightslash','focusenergy','bite','screech','crunch','agility','takedown','bounce','doubleedge','slash','icebeam','icefang','protect','swift','endure','rocktomb','hyperbeam','icywind','zenheadbutt','earthquake','whirlpool','surf','poisonjab','darkpulse','taunt','hydropump','waterfall','blizzard','closecombat','facade','ancientpower','skullbash','poisonfang','scaryface','swagger','destinybond','thrash','waterpulse','raindance','doubleteam','torment','rest','attract','thief','sleeptalk','bulldoze','strength','rocksmash'],
 stages:[
  {name:'Carvanha',types:['eau','tenebres'],base:st(45,90,20,65,20,65)},
  {name:'Sharpedo',types:['eau','tenebres'],base:st(70,120,40,95,40,95)}]},
{id:'wailmer',abilities:['Ignifu-Voile','Benêt'],moveIds:['astonish','growl','nobleroar','splash','watergun','mist','waterpulse','whirlpool','dive','bounce','bodyslam','rest','amnesia','hydropump','curse','defensecurl','doubleedge','fissure','rollout','snore','thrash','tickle','zenheadbutt','icebeam','blizzard','hyperbeam','protect','raindance','earthquake','doubleteam','rocktomb','facade','attract','endure','sleeptalk','bulldoze','swagger','surf','strength','rocksmash','waterfall'],
 stages:[
  {name:'Wailmer',types:['eau'],base:st(130,70,35,70,35,60)},
  {name:'Wailord',types:['eau'],base:st(170,90,45,90,45,60)}]},
{id:'numel',abilities:['Benêt','Tempo Perso'],moveIds:['growl','tackle','ember','focusenergy','bulldoze','amnesia','curse','takedown','earthquake','flamethrower','doubleedge','rockslide','headbutt','protect','dig','bodyslam','endure','rocktomb','stealthrock','fireblast','hyperbeam','selfdestruct','overheat','willowisp','ironhead','zenheadbutt','stoneedge','heatwave','firespin','flashcannon','facade','ancientpower','fissure','eruption','yawn','swallow','spitup','stockpile','scaryface','howl','rollout','defensecurl','growth','stomp','charm','mudslap','mudshot','sunnyday','raindance','sandstorm','sleeptalk','rest','endeavor','solarbeam'],
 stages:[
  {name:'Chamallot',types:['feu','sol'],base:st(60,60,40,65,45,35)},
  {name:'Camérupt',types:['feu','sol'],base:st(70,100,70,105,75,40)}]},
{id:'torkoal',abilities:['Écran Fumée','Sécheresse'],moveIds:['ember','smog','withdraw','rapidspin','smokescreen','flamewheel','protect','bodyslam','irondefense','flamethrower','curse','heatwave','amnesia','eruption','ancientpower','fissure','flail','yawn','takedown','firespin','facade','bulldoze','rocktomb','endure','sunnyday','sandstorm','zenheadbutt','sleeptalk','rest','rockslide','willowisp','stealthrock','fireblast','sludgebomb','earthquake','stoneedge','overheat','hyperbeam','solarbeam','weatherball','doubleedge'],
 stages:[
  {name:'Chartor',types:['feu'],base:st(70,85,140,85,70,20)}]},
{id:'spoink',abilities:['Isograisse','Tempo Perso'],moveIds:['splash','confusion','growl','psybeam','hypnosis','confuseray','whirlwind','amnesia','psychic','bounce','futuresight','calmmind','thunderwave','brickbreak','lightscreen','protect','swift','dig','thunderpunch','icepunch','reflect','bodyslam','endure','hyperbeam','mudshot','icywind','zenheadbutt','shadowball','bulldoze','flashcannon','dazzlinggleam','taunt','metronome','focusblast','facade','payday','shadowpunch','dreameater','belch','psychup','rest','snore','teeterdance','extrasensory','mirrorcoat','trick','takedown','mudslap','lowkick','thief','imprison','skillswap','sleeptalk','encore','psychicterrain','uproar','focuspunch','endeavor'],
 stages:[
  {name:'Spoink',types:['psy'],base:st(60,25,35,70,80,60)},
  {name:'Groret',types:['psy'],base:st(80,45,55,90,110,80)}]},
{id:'spinda',abilities:['Tempo Perso'],moveIds:['tackle','teeterdance','psybeam','hypnosis','bodyslam','suckerpunch','uproar','psychup','doubleedge','flail','thrash','batonpass','disable','encore','fakeout','faketears','icywind','trick','wish','focuspunch','waterpulse','calmmind','sunnyday','protect','raindance','safeguard','dig','psychic','shadowball','brickbreak','doubleteam','shockwave','rocktomb','facade','rest','attract','thief','skillswap','endure','recycle','flash','rockslide','sleeptalk','swagger','strength','rocksmash'],
 stages:[
  {name:'Spinda',types:['normal'],base:st(60,60,60,60,60,60)}]},
{id:'trapinch',abilities:['Hyper Cutter','Piège'],moveIds:['astonish','sandattack','bite','mudslap','sandtomb','bulldoze','dig','crunch','sandstorm','earthquake','superpower','fissure','bugbite','flail','furycutter','gust','quickattack','takedown','protect','facade','mudshot','rocktomb','endure','sunnyday','bodyslam','sleeptalk','rest','rockslide','gigadrain','stealthrock','hyperbeam','stoneedge'],
 stages:[
  {name:'Kraknoix',types:['sol'],base:st(45,100,45,45,45,10)}]},
{id:'vibrava',abilities:['Lévitation'],moveIds:['bulldoze','dragonbreath','sandattack','supersonic','mudslap','sandtomb','screech','sandstorm','earthquake','uproar','dragonclaw','astonish','bite','crunch','dig','dragondance','fissure','superpower','takedown','agility','protect','firespin','facade','aerialace','swift','mudshot','rocktomb','aircutter','endure','sunnyday','uturn','airslash','bodyslam','firepunch','thunderpunch','sleeptalk','rest','rockslide','fly','gigadrain','dragonpulse','stealthrock','heatwave','flamethrower','fireblast','stoneedge','outrage','hyperbeam','solarbeam','dracometeor','bugbite'],
 stages:[
  {name:'Vibraninf',types:['dragon','sol'],base:st(50,70,50,50,50,70)},
  {name:'Libégon',types:['dragon','sol'],base:st(80,100,80,80,80,100)}]},
{id:'cacnea',abilities:['Voile Sable','Absorbe-Eau'],moveIds:['absorb','destinybond','growth','leer','poisonsting','sandattack','bulletseed','ingrain','spikes','suckerpunch','pinmissile','cottonspore','sandstorm','spikyshield','takedown','scaryface','protect','lowkick','thief','facade','bulldoze','swift','magicalleaf','endure','sunnyday','raindance','dig','brickbreak','zenheadbutt','bodyslam','thunderpunch','sleeptalk','poisonjab','rest','taunt','swordsdance','darkpulse','gigadrain','shadowball','encore','grassyterrain','focusblast','solarbeam','spite','knockoff','focuspunch','endeavor','curse'],
 stages:[
  {name:'Cacnea',types:['plante'],base:st(50,85,40,85,40,35)},
  {name:'Cacturne',types:['plante','tenebres'],base:st(70,115,60,115,60,55)}]},
{id:'swablu',abilities:['Médic Nature','Ciel Gris'],moveIds:['growl','peck','disarmingvoice','mist','dragonbreath','safeguard','twister','takedown','moonblast','featherdance','dragonpulse','dragonclaw','icebeam','protect','playrough','aerialace','swift','bodyslam','endure','fly','hyperbeam','agility','dracometeor','willowisp','flamethrower','solarbeam','heatwave','earthquake','hypervoice','firespin','bulldoze','hurricane','dazzlinggleam','outrage','facade','sing','astonish','haze','furyattack','thief','fireblast','sleeptalk','rest','dragondance','weatherball','doubleedge','endeavor'],
 stages:[
  {name:'Tylton',types:['normal','vol'],base:st(45,40,60,40,75,50)},
  {name:'Altaria',types:['dragon','vol'],base:st(75,70,90,70,105,80)}]},
{id:'zangoose',abilities:['Vaccin'],moveIds:['leer','tackle','quickattack','metalclaw','slash','nightslash','falseswipe','dig','detect','taunt','swordsdance','closecombat','headbutt','thunderwave','brickbreak','rockslide','icebeam','protect','aerialace','thunderpunch','icepunch','swift','firepunch','bodyslam','knockoff','agility','endure','rocktomb','fireblast','hyperbeam','zenheadbutt','shadowclaw','flamethrower','solarbeam','thunderbolt','surf','shadowball','poisonjab','irontail','curse','focusblast','blizzard','thunder','cometpunch','facade','fakeout','razorwind','skullbash','scratch','furycutter','counter','disable','doublekick','flail','furyswipes','takedown','lowkick','thief','sunnyday','raindance','sleeptalk','rest','aurasphere','batonpass','reversal','endeavor'],
 stages:[
  {name:'Mangriff',types:['normal'],base:st(73,115,60,60,60,90)}]},
{id:'seviper',abilities:['Mue','Infiltration'],moveIds:['belch','bite','bodyslam','brickbreak','bulldoze','crunch','curse','darkpulse','dig','doubleedge','earthquake','endeavor','endure','facade','flamethrower','gigadrain','glare','haze','hyperbeam','icefang','ironhead','irontail','knockoff','leer','lick','nightslash','poisonfang','poisonjab','poisontail','protect','raindance','rest','reversal','scaryface','screech','sleeptalk','sludgebomb','spitup','stockpile','sunnyday','swallow','swagger','swordsdance','taunt','thief','takedown','toxic','wrap','zenheadbutt'],
 stages:[
  {name:'Séviper',types:['poison'],base:st(73,100,60,100,60,65)}]},
{id:'lunatone',abilities:['Lévitation'],moveIds:['confusion','harden','moonblast','moonlight','rockthrow','tackle','hypnosis','rockslide','cosmicpower','psychic','stoneedge','futuresight','explosion','calmmind','icebeam','blizzard','hyperbeam','lightscreen','protect','raindance','safeguard','earthquake','shadowball','doubleteam','reflect','sandstorm','rocktomb','facade','rest','skillswap','endure','recycle','flash','stealthrock','psychup','sleeptalk','bulldoze','dreameater','swagger'],
 stages:[
  {name:'Séléroc',types:['roche','psy'],base:st(90,55,65,95,85,70)}]},
{id:'solrock',abilities:['Lévitation'],moveIds:['confusion','harden','morningsun','rockthrow','tackle','hypnosis','rockslide','zenheadbutt','cosmicpower','psychic','stoneedge','solarbeam','explosion','calmmind','sunnyday','hyperbeam','lightscreen','protect','raindance','safeguard','earthquake','shadowball','doubleteam','reflect','flamethrower','sandstorm','fireblast','rocktomb','facade','rest','skillswap','overheat','endure','willowisp','recycle','flash','swordsdance','stealthrock','psychup','sleeptalk','bulldoze','dreameater','swagger'],
 stages:[
  {name:'Solaroc',types:['roche','psy'],base:st(90,95,85,55,65,70)}]},
{id:'barboach',abilities:['Benêt','Hydratation'],moveIds:['belch','mudslap','rest','snore','tickle','watergun','zenheadbutt','waterpulse','amnesia','aquatail','muddywater','earthquake','futuresight','fissure','thrash','flail','spark','takedown','scaryface','protect','facade','bulldoze','swift','icywind','mudshot','rocktomb','endure','sunnyday','raindance','sandstorm','bodyslam','sleeptalk','waterfall','rockslide','spikes','dragondance','stealthrock','surf','icebeam','hydropump','blizzard','stoneedge','outrage','hyperbeam','sandtomb','weatherball','doubleedge','whirlpool','curse'],
 stages:[
  {name:'Barloche',types:['eau','sol'],base:st(50,48,43,46,41,60)},
  {name:'Barbicha',types:['eau','sol'],base:st(110,78,73,76,71,60)}]},
{id:'corphish',abilities:['Hyper Cutter','Coque Armure'],moveIds:['harden','leer','taunt','watergun','bubblebeam','knockoff','protect','nightslash','swordsdance','crunch','crabhammer','endeavor','guillotine','swift','takedown','scaryface','waterpulse','thief','facade','metalclaw','icywind','mudshot','rocktomb','endure','raindance','dig','falseswipe','brickbreak','bodyslam','sleeptalk','waterfall','rest','rockslide','irondefense','surf','icebeam','hydropump','blizzard','sludgebomb','hyperbeam','closecombat','spite','doubleedge','whirlpool','muddywater'],
 stages:[
  {name:'Écrapince',types:['eau'],base:st(43,80,65,50,35,35)},
  {name:'Colhomard',types:['eau','tenebres'],base:st(63,120,85,90,55,55)}]},
{id:'baltoy',abilities:['Lévitation'],moveIds:['confusion','harden','hyperbeam','mudslap','rapidspin','teleport','rocktomb','psybeam','ancientpower','imprison','cosmicpower','extrasensory','selfdestruct','sandstorm','explosion','calmmind','sunnyday','icebeam','lightscreen','protect','raindance','safeguard','dazzlinggleam','solarbeam','earthquake','dig','psychic','shadowball','doubleteam','reflect','flash','stoneedge','stealthrock','psychup','rockslide','sleeptalk','bulldoze','dreameater','swagger','strength','rocksmash'],
 stages:[
  {name:'Balbuto',types:['sol','psy'],base:st(40,40,55,40,70,55)},
  {name:'Kaorine',types:['sol','psy'],base:st(60,70,105,70,120,75)}]},
{id:'lileep',abilities:['Ventouse'],moveIds:['acid','astonish','confuseray','wrap','ingrain','ancientpower','megadrain','amnesia','gigadrain','spitup','stockpile','swallow','bind','curse','mirrorcoat','recover','tickle','bulletseed','sunnyday','hyperbeam','protect','solarbeam','earthquake','dig','doubleteam','sludgebomb','sandstorm','rocktomb','facade','rest','attract','endure','stoneedge','swordsdance','stealthrock','rockslide','sleeptalk','bulldoze','swagger','strength','rocksmash'],
 stages:[
  {name:'Lilia',types:['roche','plante'],base:st(66,41,77,61,87,23)},
  {name:'Vacilys',types:['roche','plante'],base:st(86,81,97,81,107,43)}]},
{id:'anorith',abilities:['Armurbaston','Glissade'],moveIds:['furycutter','harden','watergun','metalclaw','ancientpower','bugbite','slash','rockblast','protect','curse','irondefense','knockoff','rapidspin','sandattack','screech','waterpulse','sunnyday','hyperbeam','irontail','earthquake','dig','brickbreak','doubleteam','sandstorm','rocktomb','aerialace','facade','rest','attract','falseswipe','endure','shadowclaw','stoneedge','swordsdance','stealthrock','rockslide','sleeptalk','bulldoze','swagger','flashcannon','cut','strength','rocksmash'],
 stages:[
  {name:'Anorith',types:['roche','insecte'],base:st(45,95,50,40,50,75)},
  {name:'Armaldo',types:['roche','insecte'],base:st(75,125,100,70,80,45)}]},
{id:'feebas',abilities:['Glissade','Benêt'],moveIds:['splash','watergun','disarmingvoice','twister','whirlpool','tackle','drainingkiss','hypnosis','recover','safeguard','surf','hydropump','waterpulse','haze','mist','calmmind','icebeam','lightscreen','protect','swift','bodyslam','endure','hyperbeam','mudshot','icywind','doubleedge','ironhead','dragonpulse','bulldoze','irontail','dazzlinggleam','waterfall','blizzard','facade','mimic','muddywater','flail','wrap','attract','aquatail','raindance','takedown','confuseray','sleeptalk','rest','imprison','dragondance','weatherball','psychup'],
 stages:[
  {name:'Barpau',types:['eau'],base:st(20,15,20,10,55,80)},
  {name:'Milobellus',types:['eau'],base:st(95,60,79,100,125,81)}]},
{id:'castform',abilities:['Météo'],moveIds:['tackle','ember','powdersnow','watergun','headbutt','hail','raindance','sunnyday','weatherball','blizzard','fireblast','hydropump','hurricane','amnesia','cosmicpower','disable','futuresight','waterpulse','icebeam','protect','solarbeam','thunderbolt','thunder','shadowball','doubleteam','shockwave','flamethrower','sandstorm','facade','rest','attract','thief','endure','flash','thunderwave','psychup','sleeptalk','swagger'],
 stages:[
  {name:'Morphéo',types:['normal'],base:st(70,70,70,70,70,70)}]},
{id:'kecleon',abilities:['Déguisement'],moveIds:['conversion','lick','tailwhip','knockoff','psybeam','rockslide','slash','stealthrock','shadowclaw','screech','conversion2','thunderwave','brickbreak','icebeam','protect','poweruppunch','aerialace','thunderpunch','icepunch','swift','dig','firepunch','bodyslam','endure','rocktomb','fireblast','icywind','flamethrower','solarbeam','thunderbolt','shadowball','irontail','metronome','blizzard','thunder','facade','ancientpower','fakeout','astonish','scratch','thief','bind','furyswipes','disable','detect','suckerpunch','recover','trick','focuspunch','waterpulse','sunnyday','raindance','doubleteam','shockwave','rest','attract','skillswap','recycle','flash','psychup','sleeptalk','swagger','cut','strength','rocksmash'],
 stages:[
  {name:'Kecleon',types:['normal'],base:st(60,90,70,60,120,40)}]},
{id:'shuppet',abilities:['Insomnia','Corps Maudit'],moveIds:['lick','screech','slash','confuseray','knockoff','willowisp','shadowclaw','curse','shadowball','swordsdance','phantomforce','headbutt','calmmind','thunderwave','protect','bodyslam','endure','hyperbeam','zenheadbutt','psychic','thunderbolt','darkpulse','taunt','metronome','thunder','facade','torment','dreameater','swagger','razorwind','iciclespear','nightshade','spite','suckerpunch','trick','scaryface','psybeam','thief','icywind','sunnyday','raindance','sleeptalk','dazzlinggleam','skillswap','rest','destinybond','disable','imprison'],
 stages:[
  {name:'Polichombr',types:['fantome'],base:st(44,75,35,63,33,45)},
  {name:'Branette',types:['fantome'],base:st(64,115,65,83,63,65)}]},
{id:'duskull',abilities:['Lévitation'],moveIds:['astonish','bind','disable','firepunch','icepunch','leer','shadowpunch','thunderpunch','confuseray','nightshade','willowisp','meanlook','curse','shadowball','futuresight','destinybond','protect','thief','facade','swift','icywind','rocktomb','endure','sunnyday','raindance','brickbreak','bodyslam','sleeptalk','metronome','rest','rockslide','taunt','imprison','darkpulse','leechlife','skillswap','trick','psychic','calmmind','icebeam','blizzard','earthquake','phantomforce','focusblast','hyperbeam','haze','spite'],
 stages:[
  {name:'Skelénox',types:['fantome'],base:st(20,40,90,30,90,25)},
  {name:'Téraclope',types:['fantome'],base:st(40,70,130,60,130,25)},
  {name:'Noctunoir',types:['fantome'],base:st(45,100,135,65,135,45),abilities:['Pression','Fouille']}]},
{id:'tropius',abilities:['Chlorophylle','Force Soleil'],moveIds:['growth','gust','leer','razorleaf','sweetscent','stomp','magicalleaf','whirlwind','airslash','bodyslam','outrage','synthesis','solarbeam','curse','dragondance','headbutt','leafblade','slam','takedown','protect','facade','aerialace','bulldoze','aircutter','endure','sunnyday','raindance','bulletseed','zenheadbutt','uturn','fly','gigadrain','dragonpulse','calmmind','grassyterrain','earthquake','hurricane','hyperbeam','doubleedge','petalblizzard','spite','rest','swordsdance','sleeptalk'],
 stages:[
  {name:'Tropius',types:['plante','vol'],base:st(99,68,83,72,87,51)}]},
{id:'chimecho',abilities:['Lévitation'],moveIds:['astonish','batonpass','calmmind','charm','confusion','curse','dazzlinggleam','disarmingvoice','doubleedge','drainingkiss','endure','encore','extrasensory','facade','faketears','flashcannon','futuresight','growl','healbell','hypervoice','icywind','imprison','knockoff','lightscreen','protect','psybeam','psychup','psychic','raindance','reflect','rest','safeguard','shadowball','skillswap','sleeptalk','sunnyday','supersonic','swift','tackle','takedown','taunt','thunderwave','trick','uproar','waterpulse','wrap','yawn','zenheadbutt','stridoson'],
 stages:[
  {name:'Korillon',types:['psy'],base:st(45,30,50,65,50,45)},
  {name:'Éoko',types:['psy'],base:st(65,50,70,95,80,65)}]},
{id:'absol',abilities:['Pression'],moveIds:['confuseray','leer','quickattack','knockoff','detect','swordsdance','slash','nightslash','doubleteam','taunt','shadowclaw','focusenergy','airslash','futuresight','perishsong','phantomforce','calmmind','thunderwave','rockslide','icebeam','protect','playrough','aerialace','swift','bodyslam','endure','rocktomb','fireblast','hyperbeam','doubleedge','willowisp','zenheadbutt','stoneedge','thunderbolt','shadowball','darkpulse','blizzard','thunder','closecombat','facade','falseswipe','razorwind','waterpulse','sunnyday','raindance','irontail','shockwave','sandstorm','torment','rest','attract','thief','flash','psychup','sleeptalk','dreameater','swagger','cut','strength','rocksmash','bite','curse','meanlook','megahorn','suckerpunch'],
 stages:[
  {name:'Absol',types:['tenebres'],base:st(65,130,60,75,60,75)}]},
{id:'snorunt',abilities:['Attention','Rideau Neige'],moveIds:['astonish','bite','blizzard','block','bodyslam','crunch','disable','doubleteam','endure','facade','faketears','headbutt','hyperbeam','icebeam','icefang','iciclespear','leer','lightscreen','powdersnow','protect','raindance','rest','rollout','scaryface','shadowball','sheercold','sleeptalk','spikes','spite','taunt','waterpulse','weatherball'],
 stages:[
  {name:'Stalgamin',types:['glace'],base:st(50,50,50,50,50,50)}], branches:[
  {name:'Oniglali',types:['glace'],base:st(80,80,80,80,80,80),abilities:['Attention','Rideau Neige'],extraMoveIds:['bulldoze','darkpulse','earthquake','explosion','freezedry','icywind','ironhead','skullbash','takedown']},
  {name:'Momartik',types:['glace','fantome'],base:st(70,80,70,80,70,110),abilities:['Rideau Neige','Corps Maudit'],extraMoveIds:['charm','confuseray','curse','destinybond','drainingkiss','haze','imprison','nightshade','painsplit','petaldance','phantomforce','icepunch','psychic','psychup','reflect','thunder','thunderbolt','thunderwave','trick','willowisp']}
 ]},
{id:'spheal',abilities:['Isograisse','Benêt'],moveIds:['rollout','powdersnow','waterpulse','rest','icebeam','blizzard','aquatail','babydolleyes','bulldoze','hyperbeam','icefang','icywind','ironhead','irontail','rockslide','rocksmash','surf','encore','bodyslam','protect','raindance','doubleteam','facade','attract','endure','sleeptalk','swagger','waterfall','dive'],
 stages:[
  {name:'Obalie',types:['glace','eau'],base:st(70,40,50,55,50,25)},
  {name:'Phogleur',types:['glace','eau'],base:st(90,60,70,75,70,45)},
  {name:'Kaimorse',types:['glace','eau'],base:st(110,80,90,95,90,65)}]},
{id:'clamperl',abilities:['Coque Armure'],moveIds:['irondefense','watergun','whirlpool','raindance','waterpulse','dive','batonpass','aquatail','hydropump','bodyslam','confuseray','muddywater','supersonic','icebeam','blizzard','hyperbeam','protect','doubleteam','facade','rest','attract','endure','sleeptalk','swagger','surf','waterfall'],
 stages:[
  {name:'Coquiperl',types:['eau'],base:st(35,64,85,74,55,32)}],
 branches:[
  {name:'Serpang',types:['eau'],base:st(55,104,105,94,75,52),abilities:['Coque Armure'],extraMoveIds:['bite','screech','scaryface','icefang','suckerpunch','crunch','rocktomb']},
  {name:'Rosabyss',types:['eau'],base:st(55,84,105,114,75,52),abilities:['Coque Armure'],extraMoveIds:['confusion','agility','drainingkiss','amnesia','safeguard','psychic','shadowball','psychup']}
 ]},
{id:'relicanth',abilities:['Glissade','Tête de Roc'],moveIds:['harden','tackle','watergun','ancientpower','yawn','dive','takedown','aquatail','rest','flail','hydropump','doubleedge','amnesia','mudshot','mudslap','muddywater','skullbash','snore','zenheadbutt','waterpulse','calmmind','icebeam','blizzard','hyperbeam','protect','raindance','safeguard','earthquake','doubleteam','sandstorm','rocktomb','facade','attract','endure','stoneedge','stealthrock','psychup','rockslide','sleeptalk','bulldoze','swagger','surf','rocksmash','waterfall'],
 stages:[
  {name:'Relicanth',types:['eau','roche'],base:st(100,90,130,45,65,55)}]},
{id:'luvdisc',abilities:['Glissade'],moveIds:['charm','tackle','watergun','agility','wish','waterpulse','attract','drainingkiss','flail','sweetkiss','takedown','babydolleyes','hydropump','safeguard','splash','supersonic','protect','facade','icywind','endure','raindance','sleeptalk','waterfall','rest','surf','icebeam','blizzard','psychup','endeavor','whirlpool'],
 stages:[
  {name:'Lovdisc',types:['eau'],base:st(43,30,55,40,65,97)}]},
{id:'bagon',abilities:['Tête de Roc'],moveIds:['bite','dragonbreath','ember','leer','protect','headbutt','scaryface','crunch','dragonclaw','zenheadbutt','focusenergy','flamethrower','outrage','doubleedge','airslash','fly','brickbreak','rockslide','aerialace','swift','bodyslam','endure','rocktomb','fireblast','hyperbeam','dracometeor','ironhead','shadowclaw','stoneedge','earthquake','hypervoice','firespin','dragonpulse','hurricane','irondefense','skullbash','takedown','mudslap','bulldoze','dragondance','heatwave','defensecurl','thrash','twister','sleeptalk','rest'],
 stages:[
  {name:'Draby',types:['dragon'],base:st(45,75,60,40,30,50)},
  {name:'Drackhaus',types:['dragon'],base:st(65,95,100,60,50,50)},
  {name:'Drattak',types:['dragon','vol'],base:st(95,135,80,110,80,100)}]},
{id:'beldum',abilities:['Corps Sain'],moveIds:['metalclaw','tackle','zenheadbutt','flashcannon','takedown','psychic','ironhead','irondefense','hyperbeam','scaryface','meteormash','agility','explosion','mudslap','protect','facade','aerialace','bulldoze','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','brickbreak','shadowclaw','bodyslam','thunderpunch','icepunch','sleeptalk','reflect','lightscreen','rest','rockslide','trick','shadowball','stealthrock','sludgebomb','earthquake','stoneedge','knockoff','focuspunch','psychup','doubleedge','futuresight','headbutt','swift','skullbash','confusion','steelwing','irontail','autotomize','shiftgear','extrasensory','calmmind','cosmicpower','dig'],
 stages:[
  {name:'Terhal',types:['acier','psy'],base:st(40,55,80,35,60,30)},
  {name:'Métang',types:['acier','psy'],base:st(60,75,100,55,80,50)},
  {name:'Métalosse',types:['acier','psy'],base:st(80,135,130,95,90,70),forms:{
    metagrossite:{name:'Méga-Métalosse',types:['acier','psy'],base:st(80,145,150,105,110,110),abilities:['Griffe Solide']}
  }}]},
{id:'regirock',abilities:['Corps Sain','Fermeté'],moveIds:['ancientpower','rockslide','curse','irondefense','stoneedge','superpower','lockon','zapcannon','hyperbeam','explosion','takedown','protect','facade','rocktomb','endure','sunnyday','sandstorm','dig','brickbreak','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','thunderwave','rest','flashcannon','ironhead','stealthrock','thunderbolt','earthquake','focusblast','thunder','sandtomb','focuspunch','doubleedge'],
 stages:[
  {name:'Regirock',types:['roche'],base:st(80,100,200,50,100,50)}]},
{id:'regice',abilities:['Corps Sain'],moveIds:['ancientpower','icywind','bulldoze','stomp','icebeam','curse','amnesia','blizzard','superpower','lockon','zapcannon','hyperbeam','explosion','protect','facade','rocktomb','endure','raindance','brickbreak','bodyslam','thunderpunch','icepunch','sleeptalk','thunderwave','rest','rockslide','flashcannon','ironhead','thunderbolt','earthquake','focusblast','thunder','iciclespear','focuspunch'],
 stages:[
  {name:'Regice',types:['glace'],base:st(80,50,100,100,200,50)}]},
{id:'registeel',abilities:['Corps Sain'],moveIds:['metalclaw','bulldoze','ancientpower','stomp','flashcannon','ironhead','curse','amnesia','irondefense','superpower','lockon','zapcannon','hyperbeam','explosion','takedown','protect','facade','rocktomb','endure','sunnyday','raindance','sandstorm','brickbreak','shadowclaw','bodyslam','thunderpunch','icepunch','sleeptalk','thunderwave','rest','rockslide','stealthrock','thunderbolt','earthquake','focusblast','thunder','sandtomb','focuspunch','doubleedge'],
 stages:[
  {name:'Registeel',types:['acier'],base:st(80,75,150,75,150,50)}]},
{id:'latias',abilities:['Lévitation'],moveIds:['charm','mistball','lusterpurge','drainingkiss','recover','confusion','psybeam','dragonbreath','wish','waterpulse','zenheadbutt','dragonpulse','aurasphere','mysticalfire','airslash','psychic','dragonclaw','calmmind','thunderwave','icebeam','lightscreen','protect','aerialace','swift','reflect','bodyslam','endure','fly','hyperbeam','agility','icywind','safeguard','dracometeor','doubleedge','futuresight','shadowclaw','solarbeam','thunderbolt','earthquake','whirlpool','surf','shadowball','outrage','waterfall','thunder','facade','dreameater','razorwind','triattack','aircutter','sunnyday','raindance','sandstorm','sleeptalk','rest','dragondance','trick','batonpass','weatherball','psychup'],
 stages:[
  {name:'Latias',types:['dragon','psy'],base:st(80,80,90,110,130,110)}]},
{id:'latios',abilities:['Lévitation'],moveIds:['lusterpurge','mistball','twister','recover','confusion','psybeam','dragonbreath','wish','waterpulse','zenheadbutt','dragonpulse','aurasphere','mysticalfire','psychic','airslash','dragonclaw','calmmind','thunderwave','icebeam','lightscreen','protect','aerialace','swift','reflect','bodyslam','endure','fly','hyperbeam','agility','icywind','safeguard','dracometeor','doubleedge','futuresight','shadowclaw','solarbeam','thunderbolt','earthquake','whirlpool','surf','shadowball','outrage','waterfall','thunder','facade','dreameater','razorwind','triattack','dragondance','memento','takedown','aircutter','sunnyday','raindance','sandstorm','sleeptalk','rest','trick','batonpass','weatherball','psychup'],
 stages:[
  {name:'Latios',types:['dragon','psy'],base:st(80,90,80,130,110,110)}]},
{id:'kyogre',abilities:['Crachin'],moveIds:['ancientpower','aquatail','blizzard','bodyslam','brickbreak','bulldoze','calmmind','doubleedge','earthquake','endure','facade','headbutt','hydropump','hyperbeam','icebeam','iciclespear','icywind','ironhead','muddywater','protect','raindance','rest','rockslide','rocksmash','rocktomb','safeguard','scaryface','sheercold','sleeptalk','surf','swagger','takedown','thunder','thunderbolt','thunderwave','waterpulse','waterfall','whirlpool'],
 stages:[
  {name:'Kyogre',types:['eau'],base:st(100,100,90,150,140,90)}]},
{id:'groudon',abilities:['Sécheresse'],moveIds:['ancientpower','mudshot','sandtomb','bulkup','rockblast','firespin','earthquake','stoneedge','fissure','dynamicpunch','fireblast','solarbeam','dragonclaw','thunderwave','brickbreak','rockslide','protect','poweruppunch','aerialace','thunderpunch','crunch','dig','firepunch','swordsdance','bodyslam','endure','rocktomb','stealthrock','hyperbeam','overheat','safeguard','doubleedge','willowisp','ironhead','zenheadbutt','shadowclaw','flamethrower','thunderbolt','heatwave','bulldoze','irontail','spikes','focusblast','thunder','facade','scaryface','rest','eruption','takedown','mudslap','metalclaw','sunnyday','sandstorm','focuspunch'],
 stages:[
  {name:'Groudon',types:['sol'],base:st(100,150,140,100,90,90)}]},
{id:'rayquaza',abilities:['Air Lock'],moveIds:['airslash','dragonascent','twister','crunch','extremespeed','dragonpulse','hypervoice','fly','hurricane','outrage','hyperbeam','dragonclaw','thunderwave','brickbreak','bulkup','rockslide','icebeam','protect','aerialace','swift','swordsdance','bodyslam','endure','rocktomb','stealthrock','fireblast','icywind','irontail','whirlwind','hydropump','waterfall','focusblast','blizzard','thunder','facade','ancientpower','doubleedge','uturn','shadowclaw','flamethrower','solarbeam','stoneedge','thunderbolt','earthquake','whirlpool','dracometeor','overheat','takedown','scaryface','bulldoze','sunnyday','raindance','sandstorm','sleeptalk','rest','dragondance'],
 stages:[
  {name:'Rayquaza',types:['dragon','vol'],base:st(105,150,90,150,90,95)}]},
{id:'jirachi',abilities:['Sérénité'],moveIds:['confusion','wish','swift','zenheadbutt','psychic','meteormash','rest','futuresight','doubleedge','cosmicpower','doomdesire','charm','faketears','mudslap','protect','waterpulse','psybeam','confuseray','facade','icywind','endure','sunnyday','raindance','sandstorm','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','reflect','lightscreen','dazzlinggleam','metronome','thunderwave','imprison','flashcannon','skillswap','ironhead','irondefense','trick','aurasphere','shadowball','stealthrock','encore','thunderbolt','playrough','amnesia','calmmind','batonpass','uturn','hyperbeam','thunder','psychup'],
 stages:[
  {name:'Jirachi',types:['acier','psy'],base:st(100,100,100,100,100,100)}]},
{id:'deoxys',abilities:['Pression'],moveIds:['leer','wrap','nightshade','teleport','knockoff','psychic','skillswap','zenheadbutt','cosmicpower','recover','psychoboost','hyperbeam','taunt','superpower','zapcannon','spikes','protect','amnesia','irondefense','counter','mirrorcoat','doubleteam','swift','agility','extremespeed','takedown','scaryface','waterpulse','lowkick','psybeam','facade','aerialace','icywind','rocktomb','endure','sunnyday','raindance','brickbreak','firepunch','thunderpunch','icepunch','sleeptalk','reflect','lightscreen','thunderwave','poisonjab','rest','rockslide','imprison','flashcannon','darkpulse','trick','shadowball','stealthrock','thunderbolt','calmmind','icebeam','psychicterrain','focusblast','thunder','solarbeam','painsplit','psychup','futuresight'],
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
  'Lovdisc':370,
  'Draby':371,'Drackhaus':372,'Drattak':373,
  'Terhal':374,'Métang':375,'Métalosse':376,
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
