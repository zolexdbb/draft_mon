/* ==== pokemon/gen1.js : Pokédex n°1 à 151 ==== */
const LINES_GEN1 = [
{id:'bulbasaur',abilities:['Engrais','Chlorophylle',"Cercle d'Énergie"],moveIds:['growl','tackle','vinewhip','growth','razorleaf','poisonpowder','sleeppowder','takedown','magicalleaf','synthesis','amnesia','doubleedge','solarbeam','toxic','lightscreen','protect','swordsdance','bodyslam','endure','bulletseed','gigadrain','safeguard','sludgebomb','facade','falseswipe','petaldance','charm','sunnyday','sleeptalk','rest','grassyterrain','knockoff','weatherball','curse','ingrain','earthquake','outrage','scaryface','poisonjab','frenzyplant','petalblizzard','hyperbeam','leafage','solarblade','strengthsap','troppkick'],
 stages:[
  {name:'Bulbizarre',types:['plante','poison'],base:st(45,49,49,65,65,45)},
  {name:'Herbizarre',types:['plante','poison'],base:st(60,62,63,80,80,60)},
  {name:'Florizarre',types:['plante','poison'],base:st(80,82,83,100,100,80),forms:{
    venusaurite:{name:'Méga-Florizarre',types:['plante','poison'],base:st(80,100,123,122,120,80),abilities:['Isograisse']}
  }}]},
{id:'charmander',abilities:['Brasier','Force Soleil'],moveIds:['ancientpower','bellydrum','bite','bodyslam','brickbreak','counter','crunch','dragonclaw','dragondance','dragonpulse','dig','ember','endure','facade','falseswipe','fireblast','firepunch','firespin','flamethrower','focusblast','focuspunch','growl','heatwave','irontail','metalclaw','outrage','overheat','protect','rockslide','rocktomb','scaryface','scratch','shadowclaw','slash','sleeptalk','smokescreen','swift','swordsdance','tackle','takedown','thunderpunch','weatherball','willowisp','airslash','blazekick','blastburn','earthquake','fly','hyperbeam','hurricane','skullbash'],
 stages:[
  {name:'Salamèche',types:['feu'],base:st(39,52,43,60,50,65)},
  {name:'Reptincel',types:['feu'],base:st(58,64,58,80,65,80)},
  {name:'Dracaufeu',types:['feu','vol'],base:st(78,84,78,109,85,100),forms:{
    charizarditeX:{name:'Méga-Dracaufeu X',types:['feu','dragon'],base:st(78,130,111,130,85,100),abilities:['Griffe Solide']},
    charizarditeY:{name:'Méga-Dracaufeu Y',types:['feu','vol'],base:st(78,104,78,159,115,100),abilities:['Sécheresse']}
  }}]},
{id:'squirtle',abilities:['Torrent','Cuvette','Dégobage'],moveIds:['tackle','tailwhip','watergun','bite','bubblebeam','icywind','irondefense','headbutt','brickbreak','icebeam','protect','icepunch','dig','bodyslam','endure','rocktomb','waterpulse','mudshot','doubleedge','ironhead','zenheadbutt','whirlpool','surf','dragonpulse','irontail','hydropump','waterfall','blizzard','facade','muddywater','fakeout','skullbash','withdraw','rapidspin','raindance','aquatail','takedown','sleeptalk','rest','haze','focuspunch','weatherball','mist','yawn','mirrorcoat','flashcannon','rockslide','hyperbeam','earthquake','darkpulse','outrage','focusblast','falseswipe','hydrocannon','scaryface','crunch','aurasphere','liquidation','sparklingaria','fishiousrend','flipturn','lifedew','snipeshot','surgingstrikes','wavecrash'],
 stages:[
  {name:'Carapuce',types:['eau'],base:st(44,48,65,50,64,43)},
  {name:'Carabaffe',types:['eau'],base:st(59,63,80,65,80,58)},
  {name:'Tortank',types:['eau'],base:st(79,83,100,85,105,78),forms:{
    blastoisite:{name:'Méga-Tortank',types:['eau'],base:st(79,103,120,135,115,78),abilities:['Méga-Lanceur']}
  }}]},
{id:'caterpie',abilities:['Écran Poudre','Fuite'],moveIds:['stringshot','tackle','bugbite','snore','harden','supersonic','confusion','poisonpowder','sleeppowder','stunspore','psybeam','whirlwind','airslash','safeguard','sunnyday','hyperbeam','protect','raindance','gigadrain','solarbeam','psychic','shadowball','doubleteam','aerialace','facade','rest','attract','thief','skillswap','flash','psychup','sleeptalk','dreameater','swagger'],
 stages:[
  {name:'Chenipan',types:['insecte'],base:st(45,30,35,20,20,45)},
  {name:'Chrysacier',types:['insecte'],base:st(50,20,55,25,25,30)},
  {name:'Papilusion',types:['insecte','vol'],base:st(60,45,50,90,80,70)}]},
{id:'weedle',abilities:['Écran Poudre','Fuite','Chute Cotonneuse'],moveIds:['poisonsting','stringshot','bugbite','facade','harden','focusenergy','poisonjab','pinmissile','rocksmash','toxic','brickbreak','protect','aerialace','swordsdance','endure','gigadrain','hyperbeam','agility','sludgebomb','solarbeam','outrage','silverwind','falseswipe','furyattack','furycutter','fellstinger','sunnyday','doubleteam','rest','attract','thief','flash','sleeptalk','swagger','cut','firstimpression','lunge','pollenpuff'],
 stages:[
  {name:'Aspicot',types:['insecte','poison'],base:st(40,35,30,20,20,50)},
  {name:'Coconfort',types:['insecte','poison'],base:st(45,25,50,25,25,35)},
  {name:'Dardargnan',types:['insecte','poison'],base:st(65,90,40,45,80,75)}]},
{id:'pidgey',abilities:['Regard Vif','Pieds Fébriles','Propulseur'],moveIds:['growl','tackle','gust','quickattack','twister','wingattack','whirlwind','agility','airslash','featherdance','hurricane','headbutt','protect','aerialace','reflect','doubleteam','endure','fly','heatwave','uturn','facade','sandattack','aircutter','uproar','sunnyday','raindance','steelwing','sleeptalk','swagger','thief','attract','rest','hyperbeam','razorwind','skyattack','beakblast','floatyfall','bleakwindstorm','dualwingbeat'],
 stages:[
  {name:'Roucool',types:['normal','vol'],base:st(40,45,40,35,35,56)},
  {name:'Roucoups',types:['normal','vol'],base:st(63,60,55,50,50,71)},
  {name:'Roucarnage',types:['normal','vol'],base:st(83,80,75,70,70,101)}]},
{id:'rattata',abilities:['Fuite','Cran'],moveIds:['focusenergy','quickattack','scaryface','swordsdance','tackle','tailwhip','bite','takedown','crunch','suckerpunch','superfang','doubleedge','endeavor','sunnyday','taunt','icebeam','blizzard','hyperbeam','protect','raindance','irontail','thunderbolt','thunder','dig','shadowball','doubleteam','shockwave','sludgebomb','facade','rest','attract','thief','endure','thunderwave','sleeptalk','swagger','cut','strength','rocksmash','counter','flamewheel','furyswipes','revenge','reversal','screech','uproar','hyperfang'],
 stages:[
  {name:'Rattata',types:['normal'],base:st(30,56,35,25,35,72)},
  {name:'Rattatac',types:['normal'],base:st(55,81,60,50,70,97)}]},
{id:'spearow',abilities:['Regard Vif','Sniper'],moveIds:['growl','leer','peck','furyattack','aerialace','wingattack','takedown','agility','focusenergy','drillpeck','astonish','featherdance','quickattack','scaryface','skyattack','triattack','uproar','whirlwind','sunnyday','hyperbeam','protect','raindance','doubleteam','facade','rest','attract','thief','steelwing','falseswipe','endure','sleeptalk','swagger','uturn','fly'],
 stages:[
  {name:'Piafabec',types:['normal','vol'],base:st(40,60,30,31,31,70)},
  {name:'Rapasdepic',types:['normal','vol'],base:st(65,90,65,61,61,100)}]},
{id:'ekans',abilities:['Intimidation','Mue'],moveIds:['leer','tackle','poisonsting','bite','glare','screech','toxic','leechlife','poisonjab','haze','crunch','rockslide','icefang','protect','dig','bodyslam','endure','rocktomb','gigadrain','hyperbeam','knockoff','mudshot','sludgebomb','doubleedge','earthquake','irontail','darkpulse','facade','poisonfang','wrap','acid','spitup','stockpile','swallow','belch','takedown','mudslap','scaryface','thief','poisontail','sunnyday','raindance','sleeptalk','rest','painsplit','spite'],
 stages:[
  {name:'Abo',types:['poison'],base:st(35,60,44,40,54,55)},
  {name:'Arbok',types:['poison'],base:st(60,85,69,65,79,80)}]},
{id:'pikachu',abilities:['Statik','Paratonnerre','Transistor'],moveIds:['agility','bodyslam','brickbreak','calmmind','charge','charm','discharge','disarmingvoice','dig','dazzlinggleam','drainingkiss','doubleteam','eerieimpulse','electricterrain','endeavor','endure','encore','facade','fakeout','faketears','focusblast','focuspunch','growl','hyperbeam','irontail','knockoff','lightscreen','playnice','playrough','protect','psychic','psychicterrain','quickattack','raindance','reflect','rest','reversal','skillswap','sleeptalk','spark','surf','sweetkiss','swift','tailwhip','takedown','thief','thunder','thunderpunch','thundershock','thunderwave','thunderbolt','tickle','volttackle','wish','plasmafists','zingzap','aurawheel','boltbeak','overdrive','risingvoltage','thundercage','wildboltstorm'],
 stages:[
  {name:'Pichu',types:['electrik'],base:st(20,40,15,35,35,60)},
  {name:'Pikachu',types:['electrik'],base:st(35,55,40,50,50,90)},
  {name:'Raichu',types:['electrik'],base:st(60,90,55,90,80,110)}]},
{id:'sandshrew',abilities:['Voile Sable','Baigne Sable'],moveIds:['scratch','defensecurl','poisonsting','sandattack','rollout','furycutter','rapidspin','bulldoze','swift','furyswipes','sandtomb','slash','dig','swordsdance','sandstorm','earthquake','metalclaw','irondefense','takedown','agility','protect','lowkick','thief','facade','aerialace','mudslap','mudshot','rocktomb','endure','sunnyday','falseswipe','brickbreak','shadowclaw','bodyslam','sleeptalk','poisonjab','rest','rockslide','spikes','leechlife','stealthrock','amnesia','stoneedge','focusblast','hyperbeam','knockoff','superfang','focuspunch','doubleedge','endeavor','curse'],
 stages:[
  {name:'Sabelette',types:['sol'],base:st(50,75,85,20,30,40)},
  {name:'Sablaireau',types:['sol'],base:st(65,100,110,45,55,65)}]},
{id:'nidoranf',abilities:['Point Poison','Rivalité'],moveIds:['bite','crunch','doublekick','flatter','furyswipes','growl','poisonsting','scratch','superpower','tailwhip','toxic','beatup','charm','counter','disable','focusenergy','poisonfang','poisontail','skullbash','supersonic','takedown','venomdrench','focuspunch','waterpulse','sunnyday','taunt','icebeam','blizzard','hyperbeam','protect','raindance','irontail','thunderbolt','thunder','earthquake','dig','shadowball','brickbreak','doubleteam','shockwave','flamethrower','sludgebomb','sandstorm','fireblast','rocktomb','aerialace','torment','facade','rest','attract','thief','focusblast','endure','dragonpulse','shadowclaw','stoneedge','stealthrock','rockslide','sleeptalk','bulldoze','poisonjab','swagger','cut','surf','strength','rocksmash'],
 stages:[
  {name:'Nidoran♀',types:['poison'],base:st(55,47,52,40,40,41)},
  {name:'Nidorina',types:['poison'],base:st(70,62,67,55,55,56)},
  {name:'Nidoqueen',types:['poison','sol'],base:st(90,82,87,75,85,76)}]},
{id:'nidoranm',abilities:['Point Poison','Rivalité'],moveIds:['doublekick','flatter','focusenergy','furyattack','hornattack','leer','megahorn','peck','poisonjab','poisonsting','toxic','amnesia','beatup','confusion','counter','disable','horndrill','poisontail','suckerpunch','supersonic','takedown','thrash','venomdrench','focuspunch','waterpulse','sunnyday','taunt','icebeam','blizzard','hyperbeam','protect','raindance','irontail','thunderbolt','thunder','earthquake','dig','shadowball','brickbreak','doubleteam','shockwave','flamethrower','sludgebomb','sandstorm','fireblast','rocktomb','torment','facade','rest','attract','thief','focusblast','endure','dragonpulse','shadowclaw','stoneedge','stealthrock','rockslide','sleeptalk','bulldoze','swagger','cut','surf','strength','rocksmash'],
 stages:[
  {name:'Nidoran♂',types:['poison'],base:st(46,57,40,40,40,50)},
  {name:'Nidorino',types:['poison'],base:st(61,72,57,55,55,65)},
  {name:'Nidoking',types:['poison','sol'],base:st(81,92,77,85,75,85)}]},
{id:'clefairy',abilities:['Joli Sourire','Médic Nature','Mimétisme'],moveIds:['splash','tackle','fairywind','disarmingvoice','charm','drainingkiss','magicalleaf','metronome','bubblebeam','moonlight','amnesia','dazzlinggleam','mysticalfire','moonblast','airslash','doubleedge','headbutt','calmmind','thunderwave','icebeam','lightscreen','protect','playrough','thunderpunch','icepunch','swift','dig','firepunch','reflect','bodyslam','endure','stealthrock','fireblast','hyperbeam','safeguard','zenheadbutt','flamethrower','psychic','solarbeam','thunderbolt','hypervoice','shadowball','irontail','focusblast','blizzard','thunder','facade','sing','dreameater','triattack','cosmicpower','defensecurl','encore','growl','pound','sweetkiss','takedown','faketears','waterpulse','psybeam','thief','icywind','nightshade','sunnyday','raindance','brickbreak','sleeptalk','rest','imprison','skillswap','trick','knockoff','uproar','focuspunch','mistyterrain','psychup','endeavor','futuresight','fleurcannon','floralhealing','naturesmadness','decorate','mistyexplosion','spiritbreak','springtidestorm','strangesteam'],
 stages:[
  {name:'Mélo',types:['fee'],base:st(50,25,28,45,55,15)},
  {name:'Mélofée',types:['fee'],base:st(70,45,48,60,65,35)},
  {name:'Mélodelfe',types:['fee'],base:st(95,70,73,95,90,60)}]},
{id:'vulpix',abilities:['Torche','Sécheresse'],moveIds:['flamethrower','quickattack','tailwhip','imprison','confuseray','disable','ember','extrasensory','fireblast','firespin','safeguard','spite','willowisp','takedown','charm','faketears','agility','protect','swift','nightshade','endure','sunnyday','dig','zenheadbutt','bodyslam','sleeptalk','rest','darkpulse','shadowball','heatwave','encore','calmmind','batonpass','overheat','hyperbeam','solarbeam','weatherball','painsplit','psychup','doubleedge','facade','raindance'],
 stages:[
  {name:'Goupix',types:['feu'],base:st(38,41,40,50,65,65)},
  {name:'Feunard',types:['feu'],base:st(73,76,75,81,100,100)}]},
{id:'jigglypuff',abilities:['Joli Sourire','Battant'],moveIds:['charm','disarmingvoice','sing','tackle','rollout','drainingkiss','faketears','confusion','facade','takedown','bodyslam','mimic','hypervoice','wish','doubleedge','perishsong','moonblast','headbutt','calmmind','thunderwave','brickbreak','icebeam','lightscreen','protect','playrough','thunderpunch','icepunch','swift','dig','firepunch','reflect','endure','stealthrock','fireblast','waterpulse','hyperbeam','knockoff','selfdestruct','icywind','zenheadbutt','flamethrower','psychic','solarbeam','thunderbolt','shadowball','darkpulse','dazzlinggleam','taunt','metronome','focusblast','blizzard','thunder','triattack','defensecurl','disable','pound','rest','spitup','stockpile','swallow','sweetkiss','present','thief','magicalleaf','sunnyday','raindance','sandstorm','skillswap','encore','amnesia','batonpass','mistyterrain','psychup','endeavor'],
 stages:[
  {name:'Toudoudou',types:['fee'],base:st(90,30,15,40,20,15)},
  {name:'Rondoudou',types:['fee'],base:st(115,45,20,45,25,20)},
  {name:'Grodoudou',types:['fee'],base:st(140,70,45,75,50,45)}]},
{id:'zubat',abilities:['Attention','Infiltration','Ramasse Ball'],moveIds:['absorb','screech','supersonic','gust','bite','wingattack','quickattack','whirlwind','hypnosis','haze','confuseray','poisonfang','airslash','leechlife','toxic','protect','aerialace','crunch','swift','doubleteam','nightslash','endure','gigadrain','fly','hyperbeam','knockoff','agility','sludgebomb','zenheadbutt','heatwave','shadowball','hurricane','darkpulse','curse','taunt','facade','swagger','razorwind','skyattack','aircutter','rest','banefulbunker','purify'],
 stages:[
  {name:'Nosferapti',types:['poison','vol'],base:st(40,45,35,30,40,55)},
  {name:'Nosferalto',types:['poison','vol'],base:st(75,80,70,65,75,90)},
  {name:'Nostenfer',types:['poison','vol'],base:st(85,90,80,70,80,130)}]},
{id:'oddish',abilities:['Chlorophylle','Fuite'],moveIds:['absorb','acid','gigadrain','grassyterrain','growth','megadrain','moonblast','moonlight','petaldance','poisonpowder','sleeppowder','stunspore','sweetscent','toxic','petalblizzard','charm','protect','facade','magicalleaf','endure','sunnyday','bulletseed','bodyslam','sleeptalk','dazzlinggleam','rest','swordsdance','sludgebomb','hyperbeam','solarbeam','weatherball'],
 stages:[
  {name:'Mystherbe',types:['plante','poison'],base:st(45,50,55,75,65,30)},
  {name:'Ortide',types:['plante','poison'],base:st(60,65,70,85,75,40)}], branches:[
  {name:'Rafflesia',types:['plante','poison'],base:st(75,80,85,100,90,50),abilities:['Chlorophylle','Force Soleil'],extraMoveIds:[]},
  {name:'Joliflor',types:['plante'],base:st(75,80,95,90,100,50),abilities:['Chlorophylle','Force Soleil'],extraMoveIds:['leafblade']}
 ]},
{id:'paras',abilities:['Pose Spore','Peau Sèche'],moveIds:['absorb','stunspore','poisonpowder','slash','spore','aerialace','falseswipe','hyperbeam','leechlife','rest','rocksmash','sludgebomb'],
 stages:[
  {name:'Paras',types:['insecte','plante'],base:st(35,70,55,45,55,25)},
  {name:'Parasect',types:['insecte','plante'],base:st(60,95,80,60,80,30)}]},
{id:'venonat',abilities:['Œil Composé','Fuite'],moveIds:['disable','supersonic','tackle','confusion','poisonpowder','psybeam','stunspore','sleeppowder','leechlife','zenheadbutt','poisonfang','psychic','airslash','agility','batonpass','bugbite','morningsun','screech','toxic','takedown','protect','confuseray','thief','facade','swift','aircutter','nightshade','endure','sunnyday','sleeptalk','rest','skillswap','gigadrain','sludgebomb','hyperbeam','solarbeam','doubleedge','endeavor'],
 stages:[
  {name:'Mimitoss',types:['insecte','poison'],base:st(60,55,50,40,55,45)},
  {name:'Aéromite',types:['insecte','poison'],base:st(70,65,60,90,75,90)}]},
{id:'diglett',abilities:['Voile Sable','Piège'],moveIds:['astonish','growl','nightslash','sandattack','scratch','triattack','mudslap','bulldoze','suckerpunch','slash','sandstorm','dig','earthquake','fissure','metalclaw','sandtomb','ancientpower','headbutt','thrash','takedown','charm','agility','protect','thief','facade','mudshot','rocktomb','endure','sunnyday','shadowclaw','bodyslam','sleeptalk','rockblast','rest','rockslide','swordsdance','stealthrock','reversal','sludgebomb','stoneedge','hyperbeam','uproar','doubleedge','endeavor','curse','scaryface','irondefense'],
 stages:[
  {name:'Taupiqueur',types:['sol'],base:st(10,55,25,35,45,95)},
  {name:'Triopikeur',types:['sol'],base:st(50,100,50,50,70,120)}]},
{id:'meowth',abilities:['Ramassage','Technicien'],moveIds:['growl','payday','tailwhip','bite','taunt','metalclaw','screech','slash','hypnosis','takedown','charm','faketears','mimic','playrough','headbutt','thunderwave','protect','aerialace','swift','dig','doubleteam','bodyslam','endure','waterpulse','hyperbeam','knockoff','agility','icywind','doubleedge','shadowclaw','thunderbolt','hypervoice','shadowball','irontail','spikes','darkpulse','curse','metronome','thunder','facade','falseswipe','fakeout','skullbash','scratch','furyswipes','flail','spite','flatter','confuseray','thief','sunnyday','raindance','sleeptalk','amnesia','painsplit','psychup','endeavor'],
 stages:[
  {name:'Miaouss',types:['normal'],base:st(40,45,35,40,40,90)},
  {name:'Persian',types:['normal'],base:st(65,70,60,65,65,115)}]},
{id:'psyduck',abilities:['Moiteur','Ciel Gris'],moveIds:['confusion','scratch','tailwhip','watergun','furyswipes','waterpulse','disable','zenheadbutt','screech','aquatail','psychup','amnesia','hydropump','confuseray','crosschop','hypnosis','psybeam','yawn','takedown','protect','lowkick','thief','facade','swift','icywind','mudshot','endure','raindance','dig','brickbreak','shadowclaw','bodyslam','icepunch','sleeptalk','lightscreen','waterfall','metronome','rest','taunt','skillswap','psychic','encore','surf','calmmind','icebeam','blizzard','focusblast','hyperbeam','haze','knockoff','focuspunch','doubleedge','endeavor','whirlpool','muddywater','futuresight'],
 stages:[
  {name:'Psykokwak',types:['eau'],base:st(50,52,48,65,50,55)},
  {name:'Akwakwak',types:['eau'],base:st(80,82,78,95,80,85)}]},
{id:'mankey',abilities:['Esprit Vital','Colérique'],moveIds:['focusenergy','leer','tackle','rockthrow','rocksmash','takedown','knockoff','bulldoze','brickbreak','facade','screech','closecombat','outrage','dynamicpunch','headbutt','bulkup','rockslide','protect','poweruppunch','thunderpunch','icepunch','swift','dig','firepunch','bodyslam','nightslash','endure','rocktomb','stealthrock','hyperbeam','doubleedge','shadowclaw','stoneedge','thunderbolt','earthquake','poisonjab','curse','metronome','thunder','cometpunch','torment','swagger','scratch','furyswipes','lowkick','seismictoss','crosschop','thrash','beatup','counter','encore','spite','scaryface','thief','sleeptalk','rest','taunt','focusblast','reversal','uproar','focuspunch','endeavor'],
 stages:[
  {name:'Férosinge',types:['combat'],base:st(40,80,35,35,45,70)},
  {name:'Colossinge',types:['combat'],base:st(65,105,60,60,70,95)}]},
{id:'growlithe',abilities:['Intimidation','Torche','Libéro'],moveIds:['agility','bite','crunch','ember','flamewheel','howl','leer','playrough','reversal','takedown','flamethrower','doubleedge','doublekick','morningsun','thrash','charm','scaryface','protect','thief','firespin','facade','aerialace','bulldoze','swift','endure','sunnyday','dig','bodyslam','sleeptalk','rest','willowisp','dragonpulse','hypervoice','heatwave','fireblast','outrage','overheat','hyperbeam','closecombat','solarbeam','curse','sandstorm','burnup','firelash','mindblown','shelltrap','burningjealousy','pyroball','ragingfury'],
 stages:[
  {name:'Caninos',types:['feu'],base:st(55,70,45,70,50,60)},
  {name:'Arcanin',types:['feu'],base:st(90,110,80,100,80,95)}]},
{id:'poliwag',abilities:['Absorbe-Eau','Moiteur'],moveIds:['bodyslam','bubblebeam','hypnosis','dynamicpunch','bellydrum','doubleedge','hydropump','mudshot','pound','raindance','watergun','takedown','mudslap','scaryface','protect','waterpulse','lowkick','thief','facade','bulldoze','swift','icywind','rocktomb','endure','dig','brickbreak','bulkup','icepunch','sleeptalk','waterfall','metronome','poisonjab','rest','rockslide','taunt','psychic','encore','surf','amnesia','reversal','icebeam','blizzard','earthquake','focusblast','hyperbeam','closecombat','haze','knockoff','focuspunch','weatherball','psychup','endeavor','whirlpool','muddywater'],
 stages:[
  {name:'Ptitard',types:['eau'],base:st(40,50,40,40,40,90)},
  {name:'Têtarte',types:['eau'],base:st(65,65,65,50,50,90)}], branches:[
  {name:'Tartard',types:['eau','combat'],base:st(90,85,95,70,90,70),abilities:['Absorbe-Eau','Moiteur'],extraMoveIds:['submission','crosschop']},
  {name:'Tarpaud',types:['eau'],base:st(90,75,75,90,100,70),abilities:['Absorbe-Eau','Moiteur'],extraMoveIds:['icebeam','mudshot']}
 ]},
{id:'abra',abilities:['Synchro','Attention','Remède Étrange'],moveIds:['psybeam','teleport','reflect','recover','psychic','safeguard','futuresight','calmmind','confusion','hypnosis','zenheadbutt','thunderwave','lightscreen','protect','thunderpunch','icepunch','swift','firepunch','doubleteam','bodyslam','endure','hyperbeam','irontail','dazzlinggleam','taunt','metronome','focusblast','facade','dreameater','triattack','rest','shadowball','instruct','photongeyser','prismaticlaser','psychicfangs','speedswap','eeriespell','esperwing','expandingforce','freezingglare','lunarblessing','magicpowder','mysticalpower','psyshieldbash','takeheart'],
 stages:[
  {name:'Abra',types:['psy'],base:st(25,20,15,105,55,90)},
  {name:'Kadabra',types:['psy'],base:st(40,35,30,120,70,105)},
  {name:'Alakazam',types:['psy'],base:st(55,50,45,135,95,120)}]},
{id:'machop',abilities:['Cran','Annule Garde'],moveIds:['leer','rocksmash','focusenergy','poweruppunch','knockoff','bulkup','brickbreak','bulldoze','detect','doubleedge','dynamicpunch','stoneedge','earthquake','poisonjab','metronome','focusblast','closecombat','cometpunch','facade','tackle','machpunch','firepunch','flamethrower','rockslide','lightscreen','protect','thunderpunch','icepunch','dig','bodyslam','endure','rocktomb','fireblast','hyperbeam','rest'],
 stages:[
  {name:'Machoc',types:['combat'],base:st(70,80,50,35,35,35)},
  {name:'Machopeur',types:['combat'],base:st(80,100,70,50,60,45)},
  {name:'Mackogneur',types:['combat'],base:st(90,130,80,65,85,55)}]},
{id:'bellsprout',abilities:['Chlorophylle','Gloutonnerie'],moveIds:['growth','vinewhip','infestation','razorleaf','sleeppowder','poisonpowder','stunspore','knockoff','magicalleaf','poisonjab','leechlife','sludgebomb','toxic','protect','swordsdance','reflect','endure','bulletseed','gigadrain','hyperbeam','solarbeam','scaryface','thief','facade','swift','sunnyday','bodyslam','sleeptalk','rest','encore','grassyterrain','bugbite','weatherball','sweetscent','leafblade','spitup','stockpile','swallow'],
 stages:[
  {name:'Chétiflor',types:['plante','poison'],base:st(50,75,35,70,30,40)},
  {name:'Boustiflor',types:['plante','poison'],base:st(65,90,50,85,45,55)},
  {name:'Empiflor',types:['plante','poison'],base:st(80,105,65,100,60,70)}]},
{id:'tentacool',abilities:['Corps Sain','Suintement'],moveIds:['acid','poisonsting','watergun','wrap','supersonic','waterpulse','screech','bubblebeam','acidarmor','poisonjab','surf','scaryface','protect','confuseray','thief','facade','swift','icywind','mudshot','endure','raindance','sleeptalk','dazzlinggleam','rest','swordsdance','sludgebomb','gigadrain','icebeam','blizzard','hyperbeam','haze','toxic','knockoff','weatherball','whirlpool','muddywater'],
 stages:[
  {name:'Tentacool',types:['eau','poison'],base:st(40,40,35,50,100,70)},
  {name:'Tentacruel',types:['eau','poison'],base:st(80,70,65,80,120,100)}]},
{id:'geodude',abilities:['Tête de Roc','Fermeté','Crache-Sable'],moveIds:['takedown','mudslap','scaryface','protect','facade','bulldoze','mudshot','rocktomb','endure','sunnyday','sandstorm','dig','brickbreak','bodyslam','firepunch','thunderpunch','sleeptalk','rockblast','metronome','thunderwave','rest','rockslide','ironhead','irondefense','stealthrock','flamethrower','thunderbolt','fireblast','earthquake','stoneedge','focusblast','hyperbeam','thunder','curse','charge','defensecurl','tackle','rockthrow','selfdestruct','explosion','discharge','spark','meteorbeam','stoneaxe','tarshot'],
 stages:[
  {name:'Racaillou',types:['roche','sol'],base:st(40,80,100,30,30,20)},
  {name:'Gravalanch',types:['roche','sol'],base:st(55,95,115,45,45,35)},
  {name:'Grolem',types:['roche','sol'],base:st(80,120,130,55,65,45)}]},
{id:'ponyta',abilities:['Fuite','Torche'],moveIds:['tackle','ember','flamewheel','hypnosis','fireblast','doubleedge','flamethrower','hyperbeam','irontail','megahorn','mysticalfire','poisonjab','rest','swift'],
 stages:[
  {name:'Ponyta',types:['feu'],base:st(50,85,55,65,65,90)},
  {name:'Galopa',types:['feu'],base:st(65,100,70,80,80,105)}]},
{id:'slowpoke',abilities:['Benêt','Tempo Perso'],moveIds:['confusion','curse','tackle','growl','watergun','psybeam','waterpulse','headbutt','zenheadbutt','amnesia','surf','psychic','futuresight','acid','yawn','disable','psychup','raindance','belch','bellydrum','block','stomp','takedown','protect','bulldoze','swift','icywind','mudshot','endure','sunnyday','dig','brickbreak','bodyslam','icepunch','sleeptalk','lightscreen','waterfall','metronome','thunderwave','rest','imprison','skillswap','trick','irondefense','shadowball','flamethrower','fireblast','hydropump','blizzard','focusblast','earthquake','whirlpool','muddywater','hyperbeam','icebeam','ancientpower','dreameater','toxic','sludgebomb','poisonjab','sandstorm','icefang','scaryface','rockblast','weatherball','doubleedge'],
 stages:[
  {name:'Ramoloss',types:['eau','psy'],base:st(90,65,65,40,40,15)}], branches:[
  {name:'Flagadoss',types:['eau','psy'],base:st(95,75,80,100,80,30),abilities:['Benêt','Tempo Perso'],extraMoveIds:[]},
  {name:'Roigada',types:['eau','psy'],base:st(95,75,80,100,110,30),abilities:['Benêt','Tempo Perso'],extraMoveIds:['icebeam']}
 ]},
{id:'magnemite',abilities:['Magnépiège','Fermeté'],moveIds:['electricterrain','mirrorcoat','supersonic','tackle','thundershock','thunderwave','triattack','spark','screech','flashcannon','discharge','lightscreen','zapcannon','explosion','takedown','protect','confuseray','facade','swift','endure','sunnyday','raindance','sandstorm','bodyslam','sleeptalk','reflect','rest','ironhead','irondefense','thunderbolt','hyperbeam','thunder','charge','doubleedge'],
 stages:[
  {name:'Magnéti',types:['electrik'],base:st(25,35,70,95,55,45)},
  {name:'Magnéton',types:['electrik'],base:st(50,60,95,120,70,70)},
  {name:'Magnézone',types:['electrik','acier'],base:st(70,70,115,130,90,60),abilities:['Magnépiège','Analyste']}]},
{id:'farfetchd',abilities:['Regard Vif','Attention'],moveIds:['leer','peck','gust','steelwing','aerialace','knockoff','quickattack','falseswipe','focusenergy','slash','swordsdance','featherdance','airslash','leafblade','agility','detect','rocksmash','brickbreak','protect','swift','bodyslam','nightslash','endure','fly','uturn','irontail','curse','closecombat','facade','razorwind','skyattack','sandattack','furycutter','cut','aircutter','flail','mudslap','revenge','sunnyday','doubleteam','rest','attract','thief','sleeptalk','poisonjab','swagger'],
 stages:[
  {name:'Canarticho',types:['normal','vol'],base:st(52,90,55,58,62,60)}]},
{id:'doduo',abilities:['Fuite','Matinal'],moveIds:['growl','peck','quickattack','furyattack','agility','uproar','swordsdance','drillpeck','endeavor','thrash','triattack','takedown','mudslap','scaryface','protect','lowkick','thief','facade','aerialace','swift','endure','sunnyday','raindance','bodyslam','sleeptalk','rest','taunt','fly','hyperbeam','knockoff','doubleedge','featherdance'],
 stages:[
  {name:'Doduo',types:['normal','vol'],base:st(35,85,45,35,35,75)},
  {name:'Dodrio',types:['normal','vol'],base:st(60,110,70,60,60,110)}]},
{id:'seel',abilities:['Isograisse','Hydratation'],moveIds:['growl','headbutt','icywind','encore','rest','aurorabeam','takedown','dive','aquatail','icebeam','safeguard','sheercold','charm','protect','waterpulse','thief','facade','endure','raindance','bodyslam','sleeptalk','waterfall','surf','playrough','hydropump','blizzard','hyperbeam','haze','knockoff','iciclespear','uproar','weatherball','doubleedge','endeavor','whirlpool','muddywater','curse'],
 stages:[
  {name:'Otaria',types:['eau'],base:st(65,45,55,45,70,45)},
  {name:'Lamantine',types:['eau'],base:st(90,70,80,70,95,70)}]},
{id:'grimer',abilities:['Puanteur','Glu'],moveIds:['harden','mudslap','poisongas','pound','disable','sludge','mudshot','minimize','toxic','sludgebomb','screech','acidarmor','belch','memento','bite','poisonfang','knockoff','crunch','takedown','scaryface','protect','confuseray','thief','facade','swift','rocktomb','endure','sunnyday','raindance','sandstorm','dig','brickbreak','zenheadbutt','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','metronome','poisonjab','rest','rockslide','taunt','imprison','darkpulse','gigadrain','shadowball','flamethrower','thunderbolt','fireblast','focusblast','hyperbeam','thunder','haze','spite','focuspunch','stoneedge','curse','banefulbunker','purify'],
 stages:[
  {name:'Tadmorv',types:['poison'],base:st(80,80,50,40,50,25)},
  {name:'Grotadmorv',types:['poison'],base:st(105,105,75,65,100,50)}]},
{id:'shellder',abilities:['Coque Armure','Multi-Coups'],moveIds:['aurorabeam','hydropump','icebeam','irondefense','leer','protect','spikes','supersonic','tackle','watergun','whirlpool','withdraw','iciclespear','bubblebeam','waterpulse','takedown','scaryface','facade','swift','icywind','mudshot','endure','raindance','bodyslam','sleeptalk','lightscreen','rockblast','waterfall','poisonjab','rest','surf','blizzard','hyperbeam','weatherball'],
 stages:[
  {name:'Kokiyas',types:['eau'],base:st(30,65,100,45,25,40)},
  {name:'Crustabri',types:['eau','glace'],base:st(50,95,180,85,45,70)}]},
{id:'gastly',abilities:['Lévitation','Corps Maudit','Âme Vagabonde'],moveIds:['confuseray','lick','hypnosis','confusion','shadowclaw','curse','haze','icywind','darkpulse','shadowball','perishsong','phantomforce','toxic','thunderwave','protect','thunderpunch','icepunch','firepunch','endure','gigadrain','hyperbeam','selfdestruct','sludgebomb','willowisp','psychic','poisonjab','dazzlinggleam','taunt','metronome','focusblast','thunder','shadowpunch','dreameater','meanlook','spite','nightshade','suckerpunch','destinybond','scaryface','thief','sunnyday','raindance','brickbreak','bodyslam','sleeptalk','skillswap','imprison','trick','knockoff','focuspunch','psychup','moongeistbeam','shadowbone','spectralthief','spiritshackle','astralbarrage','bittermalice','infernalparade','poltergeist'],
 stages:[
  {name:'Fantominus',types:['fantome','poison'],base:st(30,35,30,100,35,80)},
  {name:'Spectrum',types:['fantome','poison'],base:st(45,50,45,115,55,95)},
  {name:'Ectoplasma',types:['fantome','poison'],base:st(60,65,60,130,75,110)}]},
{id:'onix',abilities:['Tête de Roc','Fermeté','Armure Miroir'],moveIds:['crunch','harden','rockthrow','tackle','dragonbreath','curse','rockslide','screech','sandtomb','stealthrock','dig','stoneedge','doubleedge','irontail','rockblast','icefang','protect','bodyslam','endure','rocktomb','hyperbeam','selfdestruct','ironhead','earthquake','dragonpulse','irondefense','flashcannon','darkpulse','taunt','facade','ancientpower','fissure','rollout','bulldoze','aquatail','rest','rocksmash','accelerock'],
 stages:[
  {name:'Onix',types:['roche','sol'],base:st(35,45,160,30,45,70)},
  {name:'Steelix',types:['roche','acier'],base:st(75,85,200,55,65,30)}]},
{id:'drowzee',abilities:['Insomnia','Prédiction'],moveIds:['confusion','disable','hypnosis','pound','headbutt','poisongas','psybeam','psychup','zenheadbutt','swagger','psychic','futuresight','firepunch','flatter','icepunch','thunderpunch','takedown','scaryface','protect','lowkick','confuseray','thief','facade','swift','drainingkiss','nightshade','endure','sunnyday','raindance','brickbreak','bodyslam','sleeptalk','reflect','lightscreen','dazzlinggleam','metronome','thunderwave','rest','taunt','imprison','skillswap','trick','shadowball','encore','calmmind','psychicterrain','focusblast','hyperbeam','haze','toxic','knockoff','focuspunch','doubleedge','endeavor','curse'],
 stages:[
  {name:'Soporifik',types:['psy'],base:st(60,48,45,43,90,42)},
  {name:'Hypnomade',types:['psy'],base:st(85,73,70,73,115,67)}]},
{id:'krabby',abilities:['Hyper Cutter','Coque Armure'],moveIds:['harden','leer','metalclaw','watergun','mudshot','protect','bubblebeam','stomp','flail','slam','swordsdance','crabhammer','guillotine','agility','amnesia','ancientpower','haze','knockoff','nightslash','slash','waterpulse','icebeam','blizzard','hyperbeam','raindance','dig','brickbreak','doubleteam','rocktomb','facade','rest','attract','thief','falseswipe','endure','rockslide','sleeptalk','swagger','cut','surf','strength','rocksmash'],
 stages:[
  {name:'Krabby',types:['eau'],base:st(30,105,90,25,25,50)},
  {name:'Krabboss',types:['eau'],base:st(50,130,115,50,50,75)}]},
{id:'voltorb',abilities:['Anti-Bruit','Statik'],moveIds:['charge','eerieimpulse','tackle','thundershock','spark','rollout','screech','discharge','swift','selfdestruct','lightscreen','explosion','mirrorcoat','stunspore','takedown','agility','scaryface','protect','thief','facade','endure','raindance','sleeptalk','thunderwave','rest','taunt','electricterrain','hyperbeam','thunder','curse','reflect','stridoson','recycle'],
 stages:[
  {name:'Voltorbe',types:['electrik'],base:st(40,30,50,55,55,100)},
  {name:'Electrode',types:['electrik'],base:st(60,50,70,80,80,150)}]},
{id:'exeggcute',abilities:['Chlorophylle','Récolte'],moveIds:['absorb','bodyslam','brickbreak','bulletseed','bulldoze','calmmind','confusion','curse','doubleedge','endure','earthquake','extrasensory','facade','flamethrower','futuresight','gigadrain','growth','hyperbeam','hypnosis','imprison','ironhead','knockoff','lightscreen','lowkick','magicalleaf','megadrain','protect','psychup','psychic','psychicterrain','psybeam','reflect','rest','skillswap','sleeptalk','sludgebomb','solarbeam','stomp','sunnyday','swordsdance','takedown','thief','trick','uproar','zenheadbutt'],
 stages:[
  {name:'Noeunoeuf',types:['plante','psy'],base:st(60,40,80,60,45,40)},
  {name:'Noadkoko',types:['plante','psy'],base:st(95,95,85,125,75,55)}]},
{id:'cubone',abilities:['Tête de Roc','Paratonnerre'],moveIds:['growl','tackle','tailwhip','leer','falseswipe','headbutt','detect','bulldoze','focusenergy','bonemerang','swordsdance','doubleedge','brickbreak','rockslide','icebeam','protect','poweruppunch','thunderpunch','swift','dig','bodyslam','endure','rocktomb','stealthrock','hyperbeam','icywind','ironhead','stoneedge','earthquake','irontail','outrage','focusblast','blizzard','facade','ancientpower','skullbash','fissure','mudslap','bonerush','endeavor','thrash','doublekick','screech','focuspunch','sunnyday','doubleteam','sandstorm','aerialace','rest','attract','thief','sleeptalk','swagger','strength','rocksmash','thunder'],
 stages:[
  {name:'Osselait',types:['sol'],base:st(50,50,95,40,50,35)},
  {name:'Ossatueur',types:['sol'],base:st(60,80,110,50,80,45)}]},
{id:'lickitung',abilities:['Tempo Perso','Benêt'],moveIds:['tackle','rest','bulldoze','zenheadbutt','doubleedge','rollout','aquatail','firepunch','flamethrower','hyperbeam','iceball','icebeam','icepunch','icywind','irontail','rockslide','rocksmash','shadowball','thunderpunch','thunderbolt','waterpulse'],
 stages:[
  {name:'Excelangue',types:['normal'],base:st(90,55,75,60,75,30)},
  {name:'Coudlangue',types:['normal'],base:st(110,85,95,80,95,50)}]},
{id:'koffing',abilities:['Lévitation','Gaz Inhibiteur'],moveIds:['heatwave','poisongas','smog','smokescreen','tackle','sludge','haze','selfdestruct','sludgebomb','toxic','belch','explosion','memento','destinybond','takedown','scaryface','protect','psybeam','thief','facade','endure','sunnyday','raindance','bodyslam','sleeptalk','rest','taunt','darkpulse','willowisp','shadowball','thunderbolt','fireblast','hyperbeam','thunder','spite','painsplit','curse','overheat','doubleedge'],
 stages:[
  {name:'Smogo',types:['poison'],base:st(40,65,95,60,45,35)},
  {name:'Smogogo',types:['poison'],base:st(65,90,120,85,70,60)}]},
{id:'rhyhorn',abilities:['Paratonnerre','Tête de Roc',"Nerfs d'Acier"],moveIds:['tackle','tailwhip','hornattack','scaryface','stomp','rockblast','takedown','earthquake','stoneedge','megahorn','horndrill','bulldoze','mudslap','protect','icefang','thief','facade','icywind','mudshot','rocktomb','endure','sunnyday','raindance','sandstorm','dig','brickbreak','shadowclaw','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','poisonjab','rest','rockslide','swordsdance','flashcannon','ironhead','irondefense','crunch','dragonpulse','stealthrock','surf','flamethrower','thunderbolt','reversal','icebeam','fireblast','hydropump','blizzard','outrage','focusblast','hyperbeam','thunder','uproar','focuspunch','doubleedge','endeavor','curse','accelerock','highhorsepower','shoreup','stompingtantrum','headlongrush','sandsearstorm','scorchingsands'],
 stages:[
  {name:'Rhinocorne',types:['sol','roche'],base:st(80,85,95,30,30,25)},
  {name:'Rhinoféros',types:['sol','roche'],base:st(105,130,120,45,45,40)},
  {name:'Rhinastoc',types:['sol','roche'],base:st(115,140,130,55,55,40),abilities:['Paratonnerre','Solide Roc']}]},
{id:'chansey',abilities:['Médic Nature','Sérénité'],moveIds:['charm','defensecurl','disarmingvoice','pound','sweetkiss','tailwhip','sing','takedown','lightscreen','doubleedge','softboiled','healbell','present','seismictoss','protect','waterpulse','thief','facade','bulldoze','swift','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','brickbreak','zenheadbutt','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','dazzlinggleam','metronome','thunderwave','rest','rockslide','skillswap','trick','shadowball','stealthrock','hypervoice','psychic','flamethrower','thunderbolt','calmmind','icebeam','electricterrain','fireblast','blizzard','earthquake','focusblast','hyperbeam','thunder','solarbeam','focuspunch','psychup','endeavor'],
 stages:[
  {name:'Ptiravi',types:['normal'],base:st(100,5,5,15,65,30)},
  {name:'Leveinard',types:['normal'],base:st(250,5,5,35,105,50)},
  {name:'Leuphorie',types:['normal'],base:st(255,10,10,75,135,55)}]},
{id:'tangela',abilities:['Chlorophylle','Feuille Garde'],moveIds:['absorb','stunspore','poisonpowder','ancientpower','sleeppowder','sludgebomb','aerialace','bulldoze','poisonjab','rest','rockslide','rocksmash'],
 stages:[
  {name:'Saquedeneu',types:['plante'],base:st(65,55,115,100,40,60)},
  {name:'Bouldeneu',types:['plante'],base:st(100,100,125,110,50,50)}]},
{id:'kangaskhan',abilities:['Matinal','Audacieux','Instinct Gorille'],moveIds:['tackle','tailwhip','growl','bite','focusenergy','headbutt','takedown','crunch','endure','outrage','dynamicpunch','brickbreak','rockslide','icebeam','protect','poweruppunch','aerialace','thunderpunch','icepunch','dig','firepunch','bodyslam','rocktomb','fireblast','hyperbeam','safeguard','doubleedge','shadowclaw','flamethrower','solarbeam','thunderbolt','earthquake','whirlpool','surf','shadowball','bulldoze','irontail','focusblast','blizzard','thunder','cometpunch','facade','fakeout','pound','stomp','suckerpunch','reversal','counter','disable','endeavor','uproar','waterpulse','sunnyday','raindance','shockwave','sandstorm','doubleteam','attract','thief','sleeptalk','swagger','cut','strength','rocksmash','laserfocus','multiattack','revelationdance','tearfullook','courtchange','powershift','stuffcheeks','teatime','terrainpulse'],
 stages:[
  {name:'Kangourex',types:['normal'],base:st(105,95,80,40,80,90),forms:{
    kangaskhanite:{name:'Méga-Kangourex',types:['normal'],base:st(105,125,100,60,100,100),abilities:['Lien Parental']}
  }}]},
{id:'horsea',abilities:['Glissade','Sniper'],moveIds:['leer','smokescreen','twister','watergun','whirlpool','yawn','focusenergy','dragonbreath','bubblebeam','agility','waterpulse','dragonpulse','hydropump','dragondance','raindance','takedown','scaryface','protect','facade','swift','icywind','endure','bodyslam','sleeptalk','waterfall','rest','flashcannon','ironhead','surf','icebeam','blizzard','outrage','hurricane','hyperbeam','dracometeor','weatherball','muddywater','doubleedge'],
 stages:[
  {name:'Hypotrempe',types:['eau'],base:st(30,40,70,70,25,60)},
  {name:'Hypocéan',types:['eau'],base:st(55,65,95,95,45,85)},
  {name:'Hyporoi',types:['eau','dragon'],base:st(75,95,95,95,95,85)}]},
{id:'goldeen',abilities:['Glissade','Ignifu-Voile'],moveIds:['peck','supersonic','tailwhip','waterpulse','hornattack','agility','flail','waterfall','megahorn','horndrill','aquatail','bodyslam','haze','hydropump','mudshot','mudslap','psybeam','skullbash','icebeam','blizzard','hyperbeam','protect','raindance','doubleteam','facade','rest','attract','endure','swordsdance','sleeptalk','poisonjab','swagger','surf'],
 stages:[
  {name:'Poissirène',types:['eau'],base:st(45,67,60,35,50,63)},
  {name:'Poissoroy',types:['eau'],base:st(80,92,65,65,80,68)}]},
{id:'staryu',abilities:['Lumiattirance','Médic Nature'],moveIds:['harden','tackle','takedown','watergun','confuseray','swift','bubblebeam','psybeam','lightscreen','psychic','surf','recover','hydropump','headbutt','thunderwave','icebeam','protect','reflect','waterpulse','agility','selfdestruct','icywind','safeguard','doubleedge','zenheadbutt','thunderbolt','whirlpool','flashcannon','dazzlinggleam','waterfall','blizzard','thunder','facade','ancientpower','dreameater','skullbash','triattack','cosmicpower','minimize','rapidspin','hyperbeam','raindance','doubleteam','skillswap','recycle','flash','psychup','sleeptalk','swagger'],
 stages:[
  {name:'Stari',types:['eau'],base:st(30,45,55,70,55,85)},
  {name:'Staross',types:['eau','psy'],base:st(60,75,85,100,85,115)}]},
{id:'mrmime',abilities:['Anti-Bruit','Filtre'],moveIds:['aerialace','bodyslam','brickbreak','calmmind','charm','cometpunch','confusion','confuseray','dazzlinggleam','dreameater','endure','facade','firepunch','focusblast','freezedry','futuresight','haze','headbutt','hyperbeam','hypnosis','icebeam','icepunch','iciclespear','infestation','irondefense','icywind','lightscreen','magicalleaf','metronome','mimic','mist','mysticalfire','playrough','protect','psybeam','psychic','reflect','rest','safeguard','shadowball','sheercold','smokescreen','solarbeam','stealthrock','swagger','tackle','taunt','thunder','thunderpunch','thunderbolt','thunderwave','torment','zenheadbutt'],
 stages:[
  {name:'Mime Jr.',types:['psy','fee'],base:st(20,25,45,70,90,60)},
  {name:'M. Mime',types:['psy','fee'],base:st(40,45,65,100,120,90)}]},
{id:'scyther',abilities:['Essaim','Technicien','Poing Furtif'],moveIds:['leer','quickattack','wingattack','doubleteam','steelwing','slash','focusenergy','airslash','irondefense','swordsdance','ironhead','brickbreak','lightscreen','protect','aerialace','swift','nightslash','endure','hyperbeam','knockoff','agility','safeguard','doubleedge','uturn','flashcannon','curse','closecombat','facade','silverwind','falseswipe','razorwind','metalclaw','counter','takedown','scaryface','thief','aircutter','sunnyday','raindance','sandstorm','sleeptalk','rest','batonpass','reversal','bugbite','furycutter','firstimpression','lunge','pollenpuff','skittersmack'],
 stages:[
  {name:'Insécateur',types:['insecte','vol'],base:st(70,110,80,55,80,105)},
  {name:'Cizayox',types:['insecte','acier'],base:st(70,130,100,55,80,65),forms:{
    scizorite:{name:'Méga-Cizayox',types:['insecte','acier'],base:st(70,150,140,65,100,75),abilities:['Technicien']}
  }}]},
{id:'jynx',abilities:['Benêt','Prédiction'],moveIds:['lick','pound','powdersnow','sweetkiss','confusion','sing','faketears','icepunch','psychic','lovelykiss','meanlook','perishsong','blizzard','fakeout','wish','focuspunch','waterpulse','calmmind','taunt','icebeam','hyperbeam','lightscreen','protect','raindance','shadowball','brickbreak','doubleteam','reflect','torment','facade','rest','attract','thief','skillswap','focusblast','endure','recycle','flash','psychup','sleeptalk','dreameater','swagger'],
 stages:[
  {name:'Lippouti',types:['glace','psy'],base:st(45,30,15,85,65,65)},
  {name:'Lippoutou',types:['glace','psy'],base:st(65,50,35,115,95,95)}]},
{id:'electabuzz',abilities:['Statik','Esprit Vital'],moveIds:['charge','leer','quickattack','thundershock','swift','shockwave','thunderwave','screech','thunderpunch','discharge','lowkick','thunderbolt','lightscreen','thunder','takedown','protect','thief','facade','bulldoze','rocktomb','endure','raindance','dig','brickbreak','bulkup','bodyslam','firepunch','icepunch','sleeptalk','reflect','metronome','rockslide','taunt','eerieimpulse','psychic','flamethrower','electricterrain','earthquake','focusblast','hyperbeam','knockoff','uproar','focuspunch','weatherball','doubleedge'],
 stages:[
  {name:'Élekid',types:['electrik'],base:st(45,63,37,65,55,95)},
  {name:'Élektek',types:['electrik'],base:st(65,83,57,95,85,105)},
  {name:'Élékable',types:['electrik'],base:st(75,123,67,95,85,95),abilities:['Motorisé','Esprit Vital']}]},
{id:'magmar',abilities:['Corps Ardent','Esprit Vital'],moveIds:['ember','leer','smog','smokescreen','flamewheel','confuseray','scaryface','firepunch','lowkick','flamethrower','sunnyday','fireblast','hyperbeam','takedown','protect','thief','firespin','facade','bulldoze','rocktomb','endure','brickbreak','bodyslam','thunderpunch','sleeptalk','metronome','poisonjab','rest','rockslide','taunt','willowisp','hypervoice','heatwave','psychic','thunderbolt','earthquake','overheat','focusblast','solarbeam','knockoff','uproar','focuspunch','weatherball','doubleedge','curse'],
 stages:[
  {name:'Magby',types:['feu'],base:st(45,75,37,70,55,83)},
  {name:'Magmar',types:['feu'],base:st(65,95,57,100,85,93)},
  {name:'Maganon',types:['feu'],base:st(75,95,67,125,95,83)}]},
{id:'pinsir',abilities:['Hyper Cutter','Brise Moule'],moveIds:['harden','tackle','focusenergy','rocksmash','detect','takedown','swordsdance','closecombat','brickbreak','bulkup','rockslide','protect','aerialace','dig','endure','rocktomb','stealthrock','hyperbeam','stoneedge','earthquake','irondefense','outrage','focusblast','facade','falseswipe','visegrip','bind','seismictoss','bugbite','doubleteam','strength','submission','guillotine','superpower','flail','furyattack','quickattack','thrash','focuspunch','sunnyday','raindance','thief','sleeptalk','bulldoze','swagger','cut'],
 stages:[
  {name:'Scarabrute',types:['insecte'],base:st(65,125,100,55,70,85)}]},
{id:'tauros',abilities:['Intimidation','Colérique'],moveIds:['tackle','tailwhip','hornattack','scaryface','zenheadbutt','rest','swagger','thrash','doubleedge','curse','endeavor','takedown','protect','thief','facade','bulldoze','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','dig','bodyslam','sleeptalk','rockslide','ironhead','shadowball','thunderbolt','reversal','icebeam','blizzard','earthquake','stoneedge','outrage','hyperbeam','thunder'],
 stages:[
  {name:'Tauros',types:['normal'],base:st(75,100,95,40,70,110)}]},
{id:'magikarp',abilities:['Glissade','Phobique'],moveIds:['leer','splash','tackle','twister','waterfall','crunch','ironhead','hurricane','hydropump','hyperbeam','bite','watergun','whirlpool','thunderwave','icebeam','icefang','protect','bodyslam','endure','fireblast','waterpulse','icywind','doubleedge','flamethrower','stoneedge','thunderbolt','earthquake','surf','dragonpulse','bulldoze','irontail','darkpulse','outrage','taunt','blizzard','thunder','facade','muddywater','skullbash','flail','scaryface','raindance','aquatail','dragondance','sunnyday','sandstorm','sleeptalk','rest','spite','endeavor','takedown'],
 stages:[
  {name:'Magicarpe',types:['eau'],base:st(20,10,55,15,20,80)},
  {name:'Léviator',types:['eau','vol'],base:st(95,125,79,60,100,81),forms:{
    gyaradosite:{name:'Méga-Léviator',types:['eau','tenebres'],base:st(95,155,109,70,130,81),abilities:['Brise Moule']}
  }}]},
{id:'lapras',abilities:['Absorbe-Eau','Coque Armure','Écailles Glacées'],moveIds:['growl','watergun','sing','mist','confuseray','waterpulse','bodyslam','icebeam','raindance','hydropump','perishsong','sheercold','ancientpower','curse','fissure','freezedry','horndrill','takedown','charm','protect','disarmingvoice','facade','bulldoze','icywind','endure','zenheadbutt','sleeptalk','reflect','waterfall','rest','ironhead','dragondance','dragonpulse','hypervoice','psychic','surf','thunderbolt','blizzard','earthquake','outrage','hyperbeam','thunder','haze','iciclespear','weatherball','doubleedge','whirlpool','muddywater','auroraveil','icehammer','glaciallance','mountaingale','tripleaxel'],
 stages:[
  {name:'Lokhlass',types:['eau','glace'],base:st(130,85,80,85,95,60)}]},
{id:'eevee',abilities:['Fuite','Adaptabilité'],moveIds:['growl','tackle','tailwhip','quickattack','disarmingvoice','swift','bite','wish','takedown','charm','doubleedge','calmmind','protect','dig','bodyslam','endure','hypervoice','shadowball','irontail','facade','mimic','sandattack','babydolleyes','batonpass','curse','detect','doublekick','flail','mudslap','tickle','yawn','faketears','sunnyday','raindance','sleeptalk','rest','weatherball'],
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
{id:'porygon',abilities:['Calque','Télécharge'],moveIds:['charge','confuseray','conversion','tackle','eerieimpulse','thundershock','psybeam','conversion2','agility','recover','discharge','selfdestruct','zapcannon','hyperbeam','headbutt','thunderwave','icebeam','protect','swift','reflect','endure','doubleedge','zenheadbutt','psychic','solarbeam','thunderbolt','shadowball','flashcannon','irontail','darkpulse','blizzard','thunder','facade','skullbash','triattack','defensecurl','recycle','takedown','thief','icywind','sunnyday','raindance','sleeptalk','rest','trick','uproar'],
 stages:[
  {name:'Porygon',types:['normal'],base:st(65,60,70,85,75,40)},
  {name:'Porygon2',types:['normal'],base:st(85,80,90,105,95,60)},
  {name:'Porygon-Z',types:['normal'],base:st(85,80,70,135,75,90),abilities:['Adaptabilité','Télécharge']}]},
{id:'omanyte',abilities:['Glissade','Coque Armure'],moveIds:['bind','crunch','rollout','sandattack','withdraw','watergun','leer','mudshot','ancientpower','protect','rockblast','surf','aurorabeam','bite','bubblebeam','haze','knockoff','muddywater','slam','spikes','supersonic','tickle','whirlpool','waterpulse','icebeam','blizzard','hyperbeam','raindance','doubleteam','sandstorm','rocktomb','facade','rest','attract','thief','endure','stoneedge','stealthrock','rockslide','sleeptalk','swagger','waterfall'],
 stages:[
  {name:'Amonita',types:['roche','eau'],base:st(35,40,100,90,55,35)},
  {name:'Amonistar',types:['roche','eau'],base:st(70,60,125,115,70,55)}]},
{id:'kabuto',abilities:['Glissade','Armurbaston'],moveIds:['absorb','harden','nightslash','sandattack','scratch','slash','leer','mudshot','ancientpower','protect','leechlife','stoneedge','aurorabeam','bubblebeam','confuseray','flail','icywind','knockoff','megadrain','rapidspin','screech','takedown','waterpulse','icebeam','blizzard','hyperbeam','raindance','gigadrain','dig','brickbreak','doubleteam','sandstorm','rocktomb','aerialace','facade','rest','attract','thief','endure','swordsdance','stealthrock','rockslide','sleeptalk','swagger','cut','surf','rocksmash','waterfall'],
 stages:[
  {name:'Kabuto',types:['roche','eau'],base:st(30,80,90,55,45,55)},
  {name:'Kabutops',types:['roche','eau'],base:st(60,115,105,65,70,80)}]},
{id:'aerodactyl',abilities:['Tête de Roc','Pression'],moveIds:['bite','steelwing','supersonic','wingattack','rockblast','rockslide','crunch','ironhead','takedown','stoneedge','hyperbeam','dragonclaw','protect','swift','endure','rocktomb','stealthrock','fireblast','fly','agility','flamethrower','heatwave','earthquake','dragonpulse','hurricane','irontail','whirlwind','taunt','facade','ancientpower','swagger','skyattack','scaryface','curse','dragonbreath','sunnyday','raindance','doubleteam','sandstorm','aerialace','torment','rest','attract','thief','sleeptalk','bulldoze','rocksmash','strength'],
 stages:[
  {name:'Ptéra',types:['roche','vol'],base:st(80,105,65,60,75,130)}]},
{id:'snorlax',abilities:['Vaccin','Isograisse','Mûrissement'],moveIds:['block','defensecurl','flail','lick','metronome','recycle','screech','stockpile','swallow','tackle','yawn','bite','rest','sleeptalk','snore','crunch','bodyslam','amnesia','bellydrum','belch','takedown','charm','mudslap','protect','facade','bulldoze','icywind','rocktomb','endure','sunnyday','raindance','sandstorm','dig','brickbreak','zenheadbutt','firepunch','thunderpunch','icepunch','rockslide','ironhead','shadowball','hypervoice','encore','surf','flamethrower','thunderbolt','icebeam','fireblast','blizzard','earthquake','outrage','focusblast','hyperbeam','thunder','solarbeam','uproar','focuspunch','doubleedge','curse','laserfocus','multiattack','revelationdance','tearfullook'],
 stages:[
  {name:'Goinfrex',types:['normal'],base:st(135,85,40,40,85,5),abilities:['Ramassage','Isograisse']},
  {name:'Ronflex',types:['normal'],base:st(160,110,65,65,110,30)}]},
{id:'articuno',abilities:['Pression','Rideau Neige'],moveIds:['gust','mist','powdersnow','reflect','agility','ancientpower','freezedry','icebeam','hurricane','haze','blizzard','sheercold','takedown','protect','waterpulse','facade','aerialace','swift','icywind','aircutter','endure','sunnyday','raindance','sandstorm','uturn','airslash','sleeptalk','lightscreen','rest','fly','hyperbeam','iciclespear','weatherball','featherdance','doubleedge'],
 stages:[
  {name:'Artikodin',types:['glace','vol'],base:st(90,85,100,95,125,85)}]},
{id:'zapdos',abilities:['Pression','Paratonnerre'],moveIds:['peck','thunderwave','thundershock','lightscreen','agility','ancientpower','charge','drillpeck','discharge','raindance','thunder','zapcannon','takedown','protect','facade','aerialace','swift','aircutter','endure','sunnyday','sandstorm','uturn','sleeptalk','rest','eerieimpulse','fly','heatwave','thunderbolt','electricterrain','hurricane','hyperbeam','weatherball'],
 stages:[
  {name:'Électhor',types:['electrik','vol'],base:st(90,90,85,125,90,100)}]},
{id:'moltres',abilities:['Pression','Corps Ardent'],moveIds:['gust','leer','ember','safeguard','wingattack','agility','ancientpower','airslash','heatwave','sunnyday','hurricane','endure','overheat','skyattack','takedown','protect','firespin','facade','aerialace','swift','aircutter','raindance','sandstorm','uturn','sleeptalk','rest','willowisp','flamethrower','fireblast','hyperbeam','solarbeam','weatherball','doubleedge'],
 stages:[
  {name:'Sulfura',types:['feu','vol'],base:st(90,100,90,125,85,90)}]},
{id:'dratini',abilities:['Mue','Écaille Spéciale',"Mâchoire du Dragon"],moveIds:['airslash','leer','tackle','twister','thunderwave','takedown','safeguard','extremespeed','outrage','hyperbeam','firepunch','thunderpunch','wingattack','dragonclaw','brickbreak','rockslide','icebeam','lightscreen','protect','aerialace','swift','icepunch','endure','rocktomb','fireblast','waterpulse','fly','agility','dracometeor','ironhead','flamethrower','thunderbolt','stoneedge','heatwave','earthquake','whirlpool','firespin','surf','dragonpulse','hurricane','whirlwind','hydropump','waterfall','blizzard','thunder','facade','focusblast','razorwind','skullbash','slam','aquatail','raindance','dragondance','dragonbreath','mist','supersonic','scaryface','lowkick','bulldoze','icywind','aircutter','sunnyday','sandstorm','bodyslam','sleeptalk','metronome','rest','encore','haze','focuspunch','weatherball','coreenforcer','breakingswipe','dragondarts','dragonenergy','dynamaxcannon','eternabeam','scaleshot'],
 stages:[
  {name:'Minidraco',types:['dragon'],base:st(41,64,45,50,50,50)},
  {name:'Draco',types:['dragon'],base:st(61,84,65,70,70,70)},
  {name:'Dracolosse',types:['dragon','vol'],base:st(91,134,95,100,100,80)}]},
{id:'mewtwo',abilities:['Pression','Trouble-Fête'],moveIds:['confusion','swift','psybeam','safeguard','amnesia','aurasphere','psychic','mist','recover','futuresight','calmmind','toxic','thunderwave','brickbreak','bulkup','rockslide','icebeam','lightscreen','protect','aerialace','thunderpunch','icepunch','firepunch','reflect','endure','rocktomb','fireblast','discharge','hyperbeam','agility','selfdestruct','doubleedge','willowisp','zenheadbutt','flamethrower','solarbeam','stoneedge','thunderbolt','earthquake','shadowball','poisonjab','hurricane','irontail','darkpulse','taunt','metronome','focusblast','blizzard','thunder','cometpunch','facade','payday','ancientpower','dreameater','triattack','disable','takedown','scaryface','lowkick','confuseray','icywind','nightshade','sunnyday','raindance','sandstorm','bodyslam','sleeptalk','rest','imprison','skillswap','trick','knockoff','focuspunch','weatherball','psychup','curse','reversal','psychicterrain'],
 stages:[
  {name:'Mewtwo',types:['psy'],base:st(106,110,90,154,90,130),forms:{
    mewtwonitey:{name:'Méga-Mewtwo Y',types:['psy'],base:st(106,150,70,194,120,140),abilities:['Insomnia']}
  }}]},
{id:'mew',abilities:['Synchro'],moveIds:['pound','amnesia','batonpass','ancientpower','metronome','imprison','transform','aurasphere','psychic','takedown','charm','faketears','agility','mudslap','scaryface','protect','waterpulse','lowkick','psybeam','confuseray','thief','disarmingvoice','firespin','facade','poisontail','aerialace','bulldoze','metalclaw','swift','magicalleaf','icywind','mudshot','rocktomb','drainingkiss','aircutter','nightshade','endure','sunnyday','raindance','sandstorm','dig','bulletseed','falseswipe','brickbreak','zenheadbutt','uturn','shadowclaw','bulkup','airslash','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','reflect','lightscreen','rockblast','waterfall','dragonclaw','dazzlinggleam','thunderwave','poisonjab','rest','rockslide','taunt','swordsdance','spikes','flashcannon','darkpulse','leechlife','eerieimpulse','fly','skillswap','ironhead','dragondance','irondefense','willowisp','crunch','trick','gigadrain','shadowball','dragonpulse','stealthrock','hypervoice','heatwave','encore','surf','flamethrower','thunderbolt','playrough','calmmind','icebeam','electricterrain','grassyterrain','psychicterrain','mistyterrain','fireblast','hydropump','blizzard','sludgebomb','earthquake','stoneedge','phantomforce','blastburn','hydrocannon','frenzyplant','outrage','overheat','focusblast','hurricane','hyperbeam','thunder','closecombat','solarbeam','dracometeor','charge','haze','toxic','sandtomb','spite','knockoff','bugbite','superfang','iciclespear','uproar','focuspunch','weatherball','painsplit','psychup','doubleedge','endeavor','petalblizzard','whirlpool','muddywater','featherdance','futuresight','curse'],
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
