/* ==== Pokédex n°494 à 649 (Unova), lignées classiques en ordre de Pokédex.
   DEX_NUMBERS_GEN5 (numéros de Pokédex, pour les sprites) est à la fin du fichier. ==== */
const LINES_GEN5 = [
{id:'victini',abilities:['Victorieux'],moveIds:['confusion','focusenergy','quickattack','headbutt','endure','zenheadbutt','reversal','doubleedge','overheat','megapunch','megakick','firepunch','thunderpunch','hyperbeam','solarbeam','firespin','thunderwave','lightscreen','safeguard','rest','snore','protect','sunnyday','willowisp','facade','swift','brickbreak','bounce','uturn','mysticalfire','flamethrower','thunderbolt','thunder','psychic','fireblast','sleeptalk','batonpass','encore','shadowball','futuresight','uproar','heatwave','taunt','trick','skillswap','blazekick','dazzlinggleam'],
 stages:[
  {name:'Victini',types:['psy','feu'],base:st(100,100,100,100,100,100)}]},
{id:'snivy',abilities:['Engrais','Contestation'],moveIds:['leer','tackle','vinewhip','wrap','growth','magicalleaf','megadrain','slam','leafblade','gigadrain','takedown','scaryface','protect','facade','aerialace','swift','endure','sunnyday','bulletseed','bodyslam','sleeptalk','reflect','lightscreen','rest','taunt','swordsdance','dragonpulse','calmmind','solarbeam','knockoff','doubleedge','petalblizzard'],
 stages:[
  {name:'Vipélierre',types:['plante'],base:st(45,45,55,45,55,63)},
  {name:'Lianaja',types:['plante'],base:st(60,60,75,60,75,83)},
  {name:'Majaspic',types:['plante'],base:st(75,75,95,75,95,113)}]},
{id:'tepig',abilities:['Brasier','Isograisse'],moveIds:['tackle','tailwhip','ember','rollout','smokescreen','flamewheel','firespin','focusenergy','flamethrower','takedown','bulkup','closecombat','poweruppunch','headbutt','rocksmash','brickbreak','rockslide','protect','thunderpunch','dig','firepunch','doubleteam','endure','rocktomb','fireblast','hyperbeam','knockoff','overheat','doubleedge','willowisp','ironhead','zenheadbutt','stoneedge','heatwave','earthquake','poisonjab','curse','taunt','focusblast','cometpunch','facade','defensecurl','smog','mudslap','scaryface','lowkick','bulldoze','sunnyday','bodyslam','rest','reversal','sleeptalk','focuspunch'],
 stages:[
  {name:'Gruikui',types:['feu'],base:st(65,63,45,45,45,45)},
  {name:'Grotichon',types:['feu','combat'],base:st(90,93,55,70,55,55)},
  {name:'Roitiflam',types:['feu','combat'],base:st(110,123,65,100,65,65),abilities:['Brasier','Téméraire'],forms:{
    emboarite:{name:'Méga-Roitiflam',types:['feu','combat'],base:st(110,148,75,110,110,75),abilities:['Brise Moule']}
  }}]},
{id:'oshawott',abilities:['Torrent','Coque Armure'],moveIds:['megahorn','tackle','tailwhip','watergun','focusenergy','furycutter','waterpulse','aerialace','aquatail','encore','swordsdance','hydropump','slash','suckerpunch','airslash','detect','knockoff','nightslash','screech','takedown','scaryface','protect','facade','bulldoze','swift','icywind','endure','raindance','dig','falseswipe','brickbreak','bodyslam','sleeptalk','waterfall','rest','taunt','surf','icebeam','blizzard','hydrocannon','hyperbeam','whirlpool','darkpulse'],
 stages:[
  {name:'Moustillon',types:['eau'],base:st(55,55,45,63,45,45)},
  {name:'Mateloutre',types:['eau'],base:st(75,75,60,83,60,60)},
  {name:'Clamiral',types:['eau'],base:st(95,100,85,108,70,70)}]},
{id:'patrat',abilities:['Fuite','Regard Vif'],moveIds:['tackle','leer','bite','detect','crunch','hypnosis','superfang','focusenergy','irontail','takedown','doubleedge','confuseray','rocksmash','toxic','thunderwave','lightscreen','protect','poweruppunch','thunderpunch','icepunch','swift','dig','firepunch','swordsdance','doubleteam','endure','bulletseed','hyperbeam','mudshot','zenheadbutt','flamethrower','thunderbolt','shadowball','facade','skullbash','lowkick','sandattack','psychup','hyperfang','meanlook','slam','flail','foresight','pursuit','revenge','screech','aquatail','endeavor','focuspunch','knockoff','snore','sunnyday','raindance','thunder','attract','focusblast','dreameater','swagger','sleeptalk'],
 stages:[
  {name:'Ratentif',types:['normal'],base:st(45,55,39,35,39,42)},
  {name:'Miradar',types:['normal'],base:st(60,85,69,60,69,77),abilities:['Luminescence','Regard Vif']}]},
{id:'lillipup',abilities:['Esprit Vital','Ramassage'],moveIds:['bite','leer','tackle','babydolleyes','playrough','crunch','takedown','reversal','howl','lick','mudslap','yawn','hyperbeam','thunderwave','dig','rest','snore','protect','charm','attract','raindance','sunnyday','facade','rocktomb','surf','thunderbolt','thunder','endure','sleeptalk','shadowball','uproar','superpower','hypervoice','ironhead'],
 stages:[
  {name:'Ponchiot',types:['normal'],base:st(45,60,45,25,45,55)},
  {name:'Ponchien',types:['normal'],base:st(65,80,65,35,65,60),abilities:['Intimidation','Baigne Sable']},
  {name:'Mastouffe',types:['normal'],base:st(85,100,90,45,90,80),abilities:['Intimidation','Baigne Sable']}]},
{id:'purrloin',abilities:['Échauffement','Délestage'],moveIds:['fakeout','growl','mimic','quickattack','lick','bite','torment','faketears','slash','screech','nightslash','playrough','thunderwave','protect','crunch','swift','swordsdance','doubleteam','endure','hyperbeam','knockoff','agility','shadowclaw','hypervoice','shadowball','uturn','irontail','darkpulse','taunt','facade','swagger','sandattack','scratch','furyswipes','suckerpunch','yawn','sleeptalk','thief','snore','charm','attract','raindance','sunnyday','encore','trick'],
 stages:[
  {name:'Chacripan',types:['tenebres'],base:st(41,50,37,50,37,66)},
  {name:'Léopardus',types:['tenebres'],base:st(64,88,50,88,50,106)}]},
{id:'pansage',abilities:['Gloutonnerie','Engrais'],moveIds:['tackle','leer','lick','vinewhip','bulletseed','bite','magicalleaf','headbutt','crunch','focusblast','toxic','brickbreak','rockslide','protect','poweruppunch','swift','dig','endure','rocktomb','gigadrain','hyperbeam','mudshot','shadowclaw','solarbeam','irontail','taunt','facade','fakeout','astonish','disarmingvoice','lowkick','tickle','endeavor','focuspunch','snore','superpower','synthesis','uproar','sunnyday','doubleteam','rest','attract','thief','swagger','sleeptalk','rocksmash'],
 stages:[
  {name:'Feuillajou',types:['plante'],base:st(50,53,48,53,48,64)},
  {name:'Feuiloutan',types:['plante'],base:st(75,98,63,98,63,101)}]},
{id:'pansear',abilities:['Gloutonnerie','Brasier'],moveIds:['firespin','tackle','leer','lick','ember','flamewheel','bite','amnesia','headbutt','fireblast','crunch','focusblast','brickbreak','rockslide','protect','poweruppunch','swift','dig','firepunch','endure','rocktomb','hyperbeam','mudshot','overheat','shadowclaw','flamethrower','solarbeam','heatwave','irontail','taunt','facade','blazekick','fakeout','belch','furyswipes','astonish','disarmingvoice','yawn','toxic','sunnyday','doubleteam','torment','attract','thief','swagger','sleeptalk','rocksmash'],
 stages:[
  {name:'Flamajou',types:['feu'],base:st(50,53,48,53,48,64)},
  {name:'Flamoutan',types:['feu'],base:st(75,98,63,98,63,101)}]},
{id:'panpour',abilities:['Gloutonnerie','Torrent'],moveIds:['tackle','leer','lick','watergun','bubblebeam','bite','taunt','headbutt','hydropump','crunch','focusblast','brickbreak','rockslide','icebeam','protect','poweruppunch','icepunch','swift','dig','endure','rocktomb','hyperbeam','mudshot','icywind','shadowclaw','surf','irontail','waterfall','facade','fakeout','furyswipes','aquatail','astonish','disarmingvoice','lowkick','tickle','endeavor','focuspunch','snore','superpower','uproar','doubleteam','torment','attract','thief','swagger','sleeptalk','rocksmash'],
 stages:[
  {name:'Flotajou',types:['eau'],base:st(50,53,48,53,48,64)},
  {name:'Flotoutan',types:['eau'],base:st(75,98,63,98,63,101)}]},
{id:'munna',abilities:['Prédiction','Synchro'],moveIds:['hypnosis','psybeam','amnesia','moonlight','charm','zenheadbutt','dreameater','calmmind','psychic','moonblast','futuresight','thunderwave','rockslide','lightscreen','protect','swift','reflect','doubleteam','endure','rocktomb','hyperbeam','safeguard','shadowball','curse','dazzlinggleam','facade','silverwind','triattack','defensecurl','imprison','magiccoat','psychicterrain','yawn','rest','snore','attract','raindance','trick','skillswap','sleeptalk'],
 stages:[
  {name:'Munna',types:['psy'],base:st(76,25,45,67,55,24)},
  {name:'Mushana',types:['psy'],base:st(116,55,85,107,95,29)}]},
{id:'pidove',abilities:['Cœur de Coq','Chanceux'],moveIds:['growl','gust','leer','quickattack','taunt','aircutter','swagger','featherdance','detect','airslash','skyattack','hypnosis','morningsun','nightslash','wish','fly','hyperbeam','rest','snore','protect','steelwing','attract','raindance','sunnyday','facade','swift','uturn','agility','focusenergy','endure','sleeptalk','uproar','heatwave','hurricane'],
 stages:[
  {name:'Poichigeon',types:['normal','vol'],base:st(50,55,50,36,30,43)},
  {name:'Colombeau',types:['normal','vol'],base:st(62,77,62,50,42,65)},
  {name:'Déflaisan',types:['normal','vol'],base:st(80,105,80,65,55,93)}]},
{id:'blitzle',abilities:['Paratonnerre','Motorisé'],moveIds:['charge','quickattack','tailwhip','thunderwave','shockwave','spark','stomp','discharge','agility','thrash','takedown','protect','lowkick','facade','bulldoze','swift','endure','sunnyday','raindance','bodyslam','sleeptalk','lightscreen','rest','taunt','eerieimpulse','thunderbolt','electricterrain','overheat','hyperbeam','thunder','uproar','doubleedge','endeavor'],
 stages:[
  {name:'Zébibron',types:['electrik'],base:st(45,60,32,50,32,76)},
  {name:'Zéblitz',types:['electrik'],base:st(75,100,63,80,63,116)}]},
{id:'roggenrola',abilities:['Fermeté','Armure Rouillée'],moveIds:['harden','sandattack','stealthrock','tackle','mudslap','irondefense','headbutt','rockslide','rockblast','sandstorm','stoneedge','explosion','autotomize','curse','takedown','hyperbeam','solarbeam','selfdestruct','rest','snore','protect','attract','facade','weatherball','rocktomb','sandtomb','bulldoze','earthquake','endure','sleeptalk','superpower','flashcannon','ironhead'],
 stages:[
  {name:'Nodulithe',types:['roche'],base:st(55,75,85,25,25,15)},
  {name:'Géolithe',types:['roche'],base:st(70,105,105,50,40,20)},
  {name:'Gigalithe',types:['roche'],base:st(85,135,130,60,70,25),abilities:['Fermeté','Force Sable']}]},
{id:'woobat',abilities:['Inconscient','Maladresse'],moveIds:['attract','confusion','endeavor','gust','aircutter','imprison','amnesia','airslash','psychic','calmmind','futuresight','flatter','knockoff','supersonic','fly','hyperbeam','thunderwave','lightscreen','reflect','safeguard','rest','thief','snore','protect','gigadrain','charm','steelwing','raindance','facade','swift','faketears','uturn','sleeptalk','batonpass','shadowball','uproar','heatwave','taunt','trick','skillswap','zenheadbutt'],
 stages:[
  {name:'Chovsourir',types:['psy','vol'],base:st(55,45,43,55,43,72)},
  {name:'Rhinolove',types:['psy','vol'],base:st(67,57,55,77,55,114)}]},
{id:'drilbur',abilities:['Baigne Sable','Force Sable'],moveIds:['leer','mudshot','tackle','metalclaw','sandtomb','rockblast','bulldoze','slash','dig','rockslide','swordsdance','earthquake','megahorn','rocksmash','brickbreak','protect','endure','rocktomb','stealthrock','hyperbeam','agility','sludgebomb','doubleedge','ironhead','poisonjab','irondefense','focusblast','facade','skullbash','fissure','mudslap','rapidspin','scratch','furyswipes','sandstorm','scaryface','takedown','sunnyday'],
 stages:[
  {name:'Rototaupe',types:['sol'],base:st(60,85,40,30,45,68)},
  {name:'Minotaupe',types:['sol','acier'],base:st(110,135,60,50,65,88),abilities:['Baigne Sable','Brise Moule'],forms:{
    excadrite:{name:'Méga-Minotaupe',types:['sol','acier'],base:st(110,165,100,65,65,103),abilities:['Foreuse Perçante']}
  }}]},
{id:'audino',abilities:['Cœur Soin','Régé-Force'],moveIds:['playnice','pound','disarmingvoice','babydolleyes','growl','zenheadbutt','takedown','hypervoice','doubleedge','mistyterrain','sweetkiss','wish','yawn','megapunch','megakick','firepunch','icepunch','thunderpunch','hyperbeam','solarbeam','thunderwave','dig','lightscreen','reflect','safeguard','rest','snore','protect','icywind','attract','raindance','sunnyday','facade','drainingkiss','bodyslam','flamethrower','surf','icebeam','blizzard','lowkick','thunderbolt','thunder','psychic','fireblast','endure','sleeptalk','encore','irontail','shadowball','uproar','skillswap','calmmind','dazzlinggleam'],
 stages:[
  {name:'Nanméouïe',types:['normal'],base:st(103,60,86,60,86,50),forms:{
    nanmeouite:{name:'Méga-Nanméouïe',types:['normal','fee'],base:st(103,60,126,80,126,50),abilities:["Cœur Soin"]}
  }}]},
{id:'timburr',abilities:['Cran','Sans Limite'],moveIds:['leer','lowkick','pound','rockthrow','focusenergy','bulkup','rockslide','slam','scaryface','dynamicpunch','stoneedge','superpower','focuspunch','takedown','protect','thief','facade','bulldoze','rocktomb','endure','sunnyday','raindance','dig','brickbreak','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','rockblast','poisonjab','rest','taunt','reversal','earthquake','focusblast','hyperbeam','closecombat','knockoff','doubleedge','curse'],
 stages:[
  {name:'Charpenti',types:['combat'],base:st(75,80,55,25,35,35)},
  {name:'Ouvrifier',types:['combat'],base:st(85,105,85,40,50,40)},
  {name:'Bétochef',types:['combat'],base:st(105,140,95,55,65,45),abilities:['Cran','Poing de Fer']}]},
{id:'tympole',abilities:['Glissade','Hydratation'],moveIds:['acid','growl','supersonic','mudshot','bubblebeam','flail','uproar','hypervoice','muddywater','raindance','hydropump','mist','mudslap','toxic','waterpulse','megapunch','megakick','icepunch','hyperbeam','dig','screech','rest','rockslide','snore','protect','icywind','attract','facade','brickbreak','dive','weatherball','rocktomb','bounce','bulldoze','surf','lowkick','earthquake','sludgebomb','endure','sleeptalk','poisonjab','focusblast','stealthrock'],
 stages:[
  {name:'Tritonde',types:['eau'],base:st(50,50,40,50,40,64)},
  {name:'Batracné',types:['eau','sol'],base:st(75,65,55,65,55,69)},
  {name:'Crapustule',types:['eau','sol'],base:st(105,85,75,85,75,74),abilities:['Glissade','Toxitouche']}]},
{id:'throh',abilities:['Cran','Attention'],moveIds:['leer','focusenergy','rollout','rockblast','bulkup','brickbreak','endure','amnesia','outrage','dynamicpunch','rocksmash','protect','poweruppunch','thunderpunch','icepunch','dig','firepunch','bodyslam','rocktomb','ironhead','zenheadbutt','stoneedge','earthquake','poisonjab','bulldoze','irondefense','taunt','focusblast','closecombat','facade','skullbash','bind','revenge','vitalthrow','seismictoss','reversal','superpower','megapunch','megakick','rest','snore','scaryface','attract','raindance','sunnyday','lowkick','sleeptalk'],
 stages:[
  {name:'Judokrak',types:['combat'],base:st(120,100,85,30,85,45)}]},
{id:'sawk',abilities:['Fermeté','Attention'],moveIds:['leer','rocksmash','focusenergy','detect','machpunch','knockoff','poweruppunch','bulkup','brickbreak','endure','outrage','closecombat','dynamicpunch','thunderpunch','icepunch','dig','firepunch','swordsdance','bodyslam','rocktomb','ironhead','zenheadbutt','stoneedge','earthquake','poisonjab','bulldoze','taunt','focusblast','cometpunch','facade','blazekick','doublekick','counter','reversal','megapunch','megakick','rest','snore','protect','scaryface','attract','raindance','sunnyday','revenge','lowkick','sleeptalk','superpower'],
 stages:[
  {name:'Karaclée',types:['combat'],base:st(75,125,75,30,75,85)}]},
{id:'sewaddle',abilities:['Essaim','Chlorophylle'],moveIds:['falseswipe','razorleaf','stringshot','tackle','fellstinger','leafblade','swordsdance','slash','bugbite','takedown','charm','agility','protect','lowkick','facade','magicalleaf','endure','sunnyday','raindance','bulletseed','shadowclaw','airslash','sleeptalk','reflect','lightscreen','poisonjab','rest','irondefense','gigadrain','calmmind','batonpass','hyperbeam','solarbeam','knockoff'],
 stages:[
  {name:'Larveyette',types:['insecte','plante'],base:st(45,53,70,40,60,42)},
  {name:'Couverdure',types:['insecte','plante'],base:st(55,63,90,50,80,42),abilities:['Feuille Garde','Chlorophylle']},
  {name:'Manternel',types:['insecte','plante'],base:st(75,103,80,70,70,92),abilities:['Essaim','Chlorophylle']}]},
{id:'venipede',abilities:['Point Poison','Essaim'],moveIds:['irondefense','leer','poisonsting','rollout','protect','infestation','screech','pinmissile','takedown','poisonjab','toxic','irontail','agility','doubleedge','megahorn','rockslide','dig','swordsdance','endure','rocktomb','hyperbeam','sludgebomb','solarbeam','earthquake','uturn','spikes','facade','bugbite','rest','attract','sunnyday','bulldoze','sleeptalk','superpower'],
 stages:[
  {name:'Venipatte',types:['insecte','poison'],base:st(30,45,59,30,39,57)},
  {name:'Scobolide',types:['insecte','poison'],base:st(40,55,99,40,79,47)},
  {name:'Brutapode',types:['insecte','poison'],base:st(60,90,89,55,69,112),abilities:['Point Poison','Turbo'],forms:{
    scolipite:{name:'Méga-Brutapode',types:['insecte','poison'],base:st(60,140,149,75,99,62),abilities:['Coque Armure']}
  }}]},
{id:'cottonee',abilities:['Farceur','Infiltration'],moveIds:['absorb','charm','cottonspore','endeavor','fairywind','gigadrain','growth','gust','hurricane','megadrain','memento','moonblast','poisonpowder','razorleaf','solarbeam','stunspore','sunnyday','faketears','protect','thief','facade','swift','endure','uturn','sleeptalk','lightscreen','dazzlinggleam','rest','taunt','shadowball','psychic','encore','playrough','mistyterrain','hyperbeam'],
 stages:[
  {name:'Doudouvet',types:['plante'],base:st(40,27,60,37,50,66)},
  {name:'Farfaduvet',types:['plante'],base:st(60,67,85,77,75,116),abilities:['Farceur','Infiltration']}]},
{id:'petilil',abilities:['Chlorophylle','Tempo Perso'],moveIds:['absorb','charm','gigadrain','growth','megadrain','petalblizzard','sleeppowder','stunspore','sunnyday','synthesis','teeterdance','magicalleaf','leafblade','megakick','petaldance','ingrain','sweetscent','protect','facade','endure','bulletseed','sleeptalk','lightscreen','rest','swordsdance','solarbeam','weatherball','takedown','lowkick','aerialace','raindance','brickbreak','airslash','metronome','poisonjab','closecombat','hurricane'],
 stages:[
  {name:'Chlorobule',types:['plante'],base:st(45,35,50,70,50,30)},
  {name:'Fragilady',types:['plante'],base:st(70,60,75,110,75,90),abilities:['Chlorophylle','Tempo Perso']}]},
{id:'basculin',abilities:['Téméraire','Adaptabilité'],moveIds:['tailwhip','watergun','tackle','flail','bite','scaryface','headbutt','crunch','takedown','thrash','doubleedge','uproar','bubblebeam','endeavor','agility','protect','icefang','waterpulse','facade','swift','icywind','mudshot','endure','raindance','zenheadbutt','sleeptalk','waterfall','rest','taunt','surf','reversal','icebeam','hydropump','blizzard','hyperbeam','whirlpool','muddywater','shadowball','infernalparade'],
 stages:[
  {name:'Bargantua',types:['eau'],base:st(70,92,65,80,55,98)},
  {name:'Paragruel',types:['eau','fantome'],base:st(120,112,65,80,75,78),abilities:['Phobique','Adaptabilité','Brise Moule']}]},
{id:'sandile',abilities:['Intimidation','Impudence'],moveIds:['leer','tackle','sandtomb','bite','dig','takedown','crunch','irontail','earthquake','doubleedge','outrage','dragonclaw','brickbreak','bulkup','rockslide','protect','aerialace','knockoff','bodyslam','endure','rocktomb','stealthrock','hyperbeam','sludgebomb','shadowclaw','stoneedge','bulldoze','irondefense','darkpulse','curse','taunt','focusblast','closecombat','facade','torment','swagger','sandattack','scaryface','sandstorm','thrash','aquatail','counter','spite','mudslap','thief','mudshot','sleeptalk','rest','focuspunch','dragonpulse'],
 stages:[
  {name:'Mascaïman',types:['sol','tenebres'],base:st(50,72,35,35,35,65)},
  {name:'Escroco',types:['sol','tenebres'],base:st(60,82,45,45,45,74)},
  {name:'Crocorible',types:['sol','tenebres'],base:st(95,117,70,65,70,92),abilities:['Intimidation','Impudence']}]},
{id:'darumaka',abilities:['Agitation','Attention'],moveIds:['bite','ember','tackle','taunt','headbutt','firepunch','uproar','bellydrum','thrash','superpower','powdersnow','icefang','icepunch','blizzard','extrasensory','flamewheel','focuspunch','takedown','yawn','megapunch','megakick','hyperbeam','solarbeam','firespin','dig','rest','rockslide','thief','snore','protect','attract','sunnyday','willowisp','facade','brickbreak','rocktomb','uturn','bodyslam','flamethrower','earthquake','psychic','focusenergy','fireblast','reversal','endure','sleeptalk','encore','heatwave','trick','overheat','irondefense','bulkup','focusblast','zenheadbutt','ironhead','stoneedge'],
 stages:[
  {name:'Darumarond',types:['feu'],base:st(70,90,45,15,45,50)},
  {name:'Darumacho',types:['feu'],base:st(105,140,55,30,55,95),abilities:['Sans Limite','Mode Zen']}]},
{id:'maractus',abilities:['Absorbe-Eau','Chlorophylle'],moveIds:['absorb','ingrain','peck','spikyshield','growth','megadrain','suckerpunch','pinmissile','gigadrain','sweetscent','synthesis','petalblizzard','cottonspore','sunnyday','solarbeam','petaldance','screech','safeguard','rest','snore','protect','attract','raindance','facade','weatherball','bulletseed','bounce','spikes','endure','sleeptalk','uproar','hypervoice','poisonjab'],
 stages:[
  {name:'Maracachi',types:['plante'],base:st(75,86,67,106,67,60)}]},
{id:'dwebble',abilities:['Fermeté','Coque Armure'],moveIds:['furycutter','sandattack','withdraw','bugbite','flail','slash','rockslide','stealthrock','rockblast','block','counter','curse','knockoff','nightslash','hyperbeam','solarbeam','dig','rest','snore','protect','attract','sandstorm','facade','rocktomb','sandtomb','shadowclaw','bulldoze','swordsdance','earthquake','spikes','endure','sleeptalk','irondefense','poisonjab','stoneedge'],
 stages:[
  {name:'Crabicoque',types:['insecte','roche'],base:st(50,65,85,35,35,55)},
  {name:'Crabaraque',types:['insecte','roche'],base:st(70,95,125,65,75,45)}]},
{id:'scraggy',abilities:['Mue','Impudence'],moveIds:['leer','tackle','headbutt','poweruppunch','rocktomb','protect','brickbreak','detect','crunch','irontail','dynamicpunch','dragonclaw','rocksmash','bulkup','rockslide','thunderpunch','icepunch','dig','firepunch','swordsdance','endure','knockoff','sludgebomb','doubleedge','ironhead','zenheadbutt','stoneedge','dragonpulse','poisonjab','irondefense','darkpulse','curse','outrage','taunt','metronome','focusblast','closecombat','facade','torment','swagger','fakeout','skullbash','lowkick','sandattack','scaryface','highjumpkick','focuspunch','takedown','faketears','thief','sunnyday','raindance','bodyslam','sleeptalk','rest','encore','amnesia','reversal','spite'],
 stages:[
  {name:'Baggiguane',types:['tenebres','combat'],base:st(50,75,70,35,70,48)},
  {name:'Baggaïd',types:['tenebres','combat'],base:st(65,90,115,45,115,58),abilities:['Mue','Intimidation'],forms:{
    scraftinite:{name:'Méga-Baggaïd',types:['tenebres','combat'],base:st(65,130,135,55,135,68),abilities:['Intimidation']}
  }}]},
{id:'sigilyph',abilities:['Peau Miracle','Garde Magik'],moveIds:['confusion','gust','hypnosis','aircutter','psybeam','whirlwind','cosmicpower','airslash','psychic','lightscreen','reflect','skyattack','ancientpower','fly','hyperbeam','solarbeam','thunderwave','safeguard','rest','thief','snore','protect','icywind','steelwing','attract','raindance','facade','swift','imprison','icebeam','shadowball','futuresight','heatwave','trick','calmmind','darkpulse','zenheadbutt','flashcannon','dazzlinggleam'],
 stages:[
  {name:'Cryptéro',types:['psy','vol'],base:st(72,58,80,103,80,97)}]},
{id:'yamask',abilities:['Momie'],moveIds:['confusion','protect','haze','confuseray','faketears','willowisp','infestation','curse','shadowball','darkpulse','phantomforce','shadowclaw','calmmind','thunderwave','endure','stealthrock','gigadrain','hyperbeam','knockoff','mudshot','selfdestruct','icywind','safeguard','zenheadbutt','psychic','irondefense','shadowpunch','dreameater','astonish','nightshade','scaryface','disable','craftyshield','meanlook','grudge','destinybond','memento','rest','thief','snore','attract','raindance','revenge','imprison','trick','skillswap','sleeptalk'],
 stages:[
  {name:'Tutafeh',types:['fantome'],base:st(38,30,85,55,65,30)},
  {name:'Tutankafer',types:['fantome'],base:st(58,50,145,95,105,30)}]},
{id:'tirtouga',abilities:['Solide Roc','Fermeté'],moveIds:['protect','watergun','withdraw','ancientpower','bite','crunch','curse','irondefense','aquatail','raindance','hydropump','dig','rest','snore','icywind','attract','sandstorm','whirlpool','facade','dive','rocktomb','mudshot','rockblast','bulldoze','bodyslam','surf','icebeam','blizzard','lowkick','earthquake','waterfall','endure','sleeptalk','irontail','superpower','muddywater','focusblast','zenheadbutt','ironhead','stoneedge','stealthrock'],
 stages:[
  {name:'Carapagos',types:['eau','roche'],base:st(54,78,103,53,45,22)},
  {name:'Mégapagos',types:['eau','roche'],base:st(74,108,133,83,65,32)}]},
{id:'archen',abilities:['Défaitiste'],moveIds:['leer','quickattack','rockthrow','wingattack','dragonbreath','ancientpower','uturn','rockslide','scaryface','crunch','agility','dragonclaw','thrash','endeavor','fly','hyperbeam','dig','rest','snore','protect','steelwing','attract','sandstorm','facade','swift','rocktomb','bounce','rockblast','shadowclaw','bulldoze','airslash','earthquake','outrage','endure','sleeptalk','irontail','uproar','heatwave','taunt','irondefense','dragonpulse','focusblast','stoneedge','stealthrock'],
 stages:[
  {name:'Arkéapti',types:['roche','vol'],base:st(55,112,45,74,45,70)},
  {name:'Aéroptéryx',types:['roche','vol'],base:st(75,140,65,112,65,110)}]},
{id:'trubbish',abilities:['Puanteur','Armure Rouillée'],moveIds:['headbutt','metalclaw','smokescreen','amnesia','rollout','takedown','poisonjab','sludgebomb','toxic','selfdestruct','explosion','protect','bodyslam','bulletseed','gigadrain','hyperbeam','mudshot','psychic','solarbeam','thunderbolt','spikes','darkpulse','focusblast','facade','ancientpower','poisongas','pound','recycle','sludge','stockpile','swallow','belch','painsplit','autotomize','curse','haze','sandattack','screech','rest','thief','snore','attract','raindance','sunnyday','rockblast','sleeptalk'],
 stages:[
  {name:'Miamiasme',types:['poison'],base:st(50,50,62,40,62,65)},
  {name:'Miasmax',types:['poison'],base:st(80,95,82,60,82,75)}]},
{id:'zorua',abilities:['Illusion'],moveIds:['leer','scratch','torment','uturn','furyswipes','taunt','knockoff','faketears','agility','imprison','curse','spite','shadowball','nightslash','shadowclaw','counter','detect','extrasensory','memento','suckerpunch','takedown','scaryface','protect','lowkick','confuseray','thief','facade','aerialace','swift','nightshade','endure','sunnyday','raindance','dig','brickbreak','icywind','sleeptalk','rest','swordsdance','darkpulse','crunch','trick','hypervoice','psychic','encore','flamethrower','calmmind','sludgebomb','focusblast','hyperbeam','toxic','painsplit','psychup','willowisp','phantomforce','focuspunch'],
 stages:[
  {name:'Zorua',types:['tenebres'],base:st(40,65,40,80,40,65)},
  {name:'Zoroark',types:['tenebres'],base:st(60,105,60,120,60,105)}]},
{id:'minccino',abilities:['Joli Sourire','Technicien'],moveIds:['bulletseed','charm','pound','sing','encore','babydolleyes','hypervoice','rockblast','slam','swift','tickle','takedown','faketears','mudslap','protect','thief','facade','endure','sunnyday','raindance','dig','uturn','sleeptalk','lightscreen','dazzlinggleam','thunderwave','rest','hyperbeam','thunderbolt','playrough','calmmind','batonpass','focusblast','thunder','knockoff','superfang','uproar','doubleedge','endeavor'],
 stages:[
  {name:'Chinchidou',types:['normal'],base:st(55,50,40,40,40,75)},
  {name:'Pashmilla',types:['normal'],base:st(75,95,60,65,60,115),abilities:['Joli Sourire','Technicien']}]},
{id:'gothita',abilities:['Fouille','Battant'],moveIds:['confusion','playnice','pound','tickle','psybeam','charm','hypnosis','faketears','psychup','psychic','flatter','futuresight','fakeout','meanlook','mirrorcoat','torment','protect','thief','facade','swift','rocktomb','endure','raindance','brickbreak','zenheadbutt','bodyslam','sleeptalk','reflect','lightscreen','metronome','thunderwave','rest','rockslide','taunt','imprison','darkpulse','skillswap','trick','shadowball','thunderbolt','calmmind','hyperbeam'],
 stages:[
  {name:'Scrutella',types:['psy'],base:st(45,30,50,55,65,45)},
  {name:'Mesmérella',types:['psy'],base:st(60,45,70,75,85,55)},
  {name:'Sidérella',types:['psy'],base:st(70,55,95,95,110,65)}]},
{id:'solosis',abilities:['Envelocape','Garde Magik'],moveIds:['confusion','endeavor','protect','recover','psybeam','charm','reflect','painsplit','psychic','skillswap','futuresight','confuseray','facade','swift','rocktomb','nightshade','endure','sunnyday','raindance','zenheadbutt','bodyslam','firepunch','thunderpunch','icepunch','sleeptalk','thunderwave','rest','rockslide','imprison','flashcannon','irondefense','trick','shadowball','encore','calmmind','hyperbeam','thunder','knockoff','focuspunch','psychup'],
 stages:[
  {name:'Nucléos',types:['psy'],base:st(45,30,40,105,50,20)},
  {name:'Méios',types:['psy'],base:st(65,40,50,125,60,30)},
  {name:'Symbios',types:['psy'],base:st(110,65,75,125,85,30),abilities:['Envelocape','Garde Magik']}]},
{id:'ducklett',abilities:['Regard Vif','Cœur de Coq'],moveIds:['watergun','wingattack','waterpulse','aerialace','bubblebeam','featherdance','airslash','raindance','hurricane','protect','disarmingvoice','facade','swift','icywind','aircutter','endure','sleeptalk','rest','fly','icebeam','hydropump','hyperbeam','knockoff','weatherball','doubleedge','endeavor','whirlpool','surf'],
 stages:[
  {name:'Couaneton',types:['eau','vol'],base:st(62,44,50,44,50,55)},
  {name:'Lakmécygne',types:['eau','vol'],base:st(75,87,63,87,63,98)}]},
{id:'vanillite',abilities:['Corps Gel','Rideau Neige'],moveIds:['harden','tackle','taunt','mist','icywind','selfdestruct','acidarmor','icebeam','explosion','blizzard','lightscreen','protect','endure','hyperbeam','hypervoice','irondefense','flashcannon','iciclespear','sheercold','astonish','weatherball','uproar','mirrorcoat','autotomize','rest','snore','attract','raindance','imprison','sleeptalk'],
 stages:[
  {name:'Sorbébé',types:['glace'],base:st(36,50,50,65,60,44)},
  {name:'Sorboul',types:['glace'],base:st(51,65,65,80,75,59)},
  {name:'Sorbouboul',types:['glace'],base:st(71,95,85,110,95,79),abilities:['Corps Gel','Alerte Neige']}]},
{id:'deerling',abilities:['Chlorophylle','Herbivore'],moveIds:['growl','megahorn','sandattack','tackle','doublekick','bulletseed','takedown','zenheadbutt','charm','doubleedge','solarbeam','agility','batonpass','faketears','headbutt','sleeptalk','synthesis','protect','facade','bulldoze','magicalleaf','endure','sunnyday','raindance','dig','bodyslam','lightscreen','thunderwave','rest','swordsdance','gigadrain','shadowball','playrough','curse'],
 stages:[
  {name:'Vivaldaim',types:['normal','plante'],base:st(60,60,50,40,50,75)},
  {name:'Haydaim',types:['normal','plante'],base:st(80,100,70,60,70,95)}]},
{id:'emolga',abilities:['Statik','Motorisé'],moveIds:['tailwhip','doubleteam','charm','quickattack','thundershock','charge','wingattack','eerieimpulse','spark','airslash','thunderwave','protect','swift','endure','agility','solarbeam','uturn','thunderbolt','taunt','thunder','facade','rest','snore','attract','raindance','astonish','shockwave','tickle'],
 stages:[
  {name:'Emolga',types:['electrik','vol'],base:st(55,75,60,75,60,103)}]},
{id:'karrablast',abilities:['Essaim','Mue'],moveIds:['doubleedge','endure','fellstinger','flail','furycutter','leer','peck','scaryface','takedown','falseswipe','headbutt','reversal','irondefense','swordsdance','ironhead','bugbite','counter','knockoff','nightslash','slash','hyperbeam','screech','rest','snore','protect','raindance','attract','facade','revenge','agility','encore','taunt','closecombat','poisonjab','focusblast','megahorn','sleeptalk'],
 stages:[
  {name:'Carabing',types:['insecte'],base:st(50,75,45,40,45,60)},
  {name:'Lançargot',types:['insecte','acier'],base:st(70,135,105,60,105,20),abilities:['Essaim','Coque Armure']}]},
{id:'foongus',abilities:['Pose Spore','Régé-Force'],moveIds:['absorb','astonish','bodyslam','bulletseed','defensecurl','dazzlinggleam','endure','facade','ingrain','magicalleaf','megadrain','mimic','mudshot','poisonpowder','protect','raindance','rest','rollout','scaryface','sleeptalk','sludgebomb','solarbeam','spore','stunspore','sunnyday','sweetscent','synthesis','toxic','torment','gigadrain'],
 stages:[
  {name:'Trompignon',types:['plante','poison'],base:st(69,55,45,55,55,15)},
  {name:'Gaulet',types:['plante','poison'],base:st(114,85,70,85,80,30)}]},
{id:'frillish',abilities:['Absorbe-Eau','Corps Maudit'],moveIds:['absorb','acidarmor','nightshade','poisonsting','watergun','waterpulse','raindance','recover','shadowball','whirlpool','hydropump','destinybond','bubblebeam','confuseray','mist','painsplit','hyperbeam','safeguard','rest','snore','protect','icywind','gigadrain','attract','willowisp','facade','imprison','dive','surf','icebeam','blizzard','psychic','waterfall','endure','sleeptalk','sludgebomb','taunt','trick','muddywater','darkpulse','dazzlinggleam'],
 stages:[
  {name:'Viskuse',types:['eau','fantome'],base:st(55,40,50,65,85,40)},
  {name:'Moyade',types:['eau','fantome'],base:st(100,60,70,85,105,60)}]},
{id:'alomomola',abilities:['Hydratation','Cœur Soin'],moveIds:['playnice','pound','protect','waterpulse','wish','safeguard','whirlpool','hydropump','bounce','endure','mirrorcoat','mist','painsplit','tickle','takedown','facade','icywind','raindance','zenheadbutt','bodyslam','sleeptalk','lightscreen','waterfall','rest','skillswap','shadowball','psychic','surf','playrough','calmmind','batonpass','icebeam','mistyterrain','blizzard','hyperbeam'],
 stages:[
  {name:'Mamanbo',types:['eau'],base:st(165,75,80,40,45,65)}]},
{id:'joltik',abilities:['Œil Composé','Tension'],moveIds:['absorb','agility','bugbite','charge','discharge','endure','gigadrain','hyperbeam','leechlife','lightscreen','poisonjab','protect','raindance','rest','screech','slash','sleeptalk','stickyweb','stringshot','suckerpunch','swift','thief','thunder','thunderwave','thunderbolt'],
 stages:[
  {name:'Statitik',types:['insecte','electrik'],base:st(50,47,50,57,50,65)},
  {name:'Mygavolt',types:['insecte','electrik'],base:st(70,77,60,97,60,108),abilities:['Œil Composé','Essaim']}]},
{id:'ferroseed',abilities:['Épine de Fer'],moveIds:['harden','metalclaw','pinmissile','tackle','ingrain','flashcannon','ironhead','selfdestruct','irondefense','curse','explosion','knockoff','toxic','hyperbeam','solarbeam','thunderwave','rest','snore','protect','gigadrain','attract','sandstorm','sunnyday','facade','revenge','bulletseed','shadowclaw','bulldoze','swordsdance','thunderbolt','thunder','spikes','endure','sleeptalk','poisonjab','stealthrock'],
 stages:[
  {name:'Grindur',types:['plante','acier'],base:st(44,50,91,24,86,10)},
  {name:'Noacier',types:['plante','acier'],base:st(74,94,131,54,116,20),abilities:['Épine de Fer','Anticipation']}]},
{id:'klink',abilities:['Plus','Moins'],moveIds:['bind','charge','thundershock','autotomize','discharge','screech','lockon','shiftgear','zapcannon','hyperbeam','electricterrain','rest','snore','protect','sandstorm','facade','thunderbolt','thunder','endure','sleeptalk','uproar','irondefense','flashcannon'],
 stages:[
  {name:'Tic',types:['acier'],base:st(40,55,70,45,60,30)},
  {name:'Clic',types:['acier'],base:st(60,80,95,70,85,50)},
  {name:'Cliticlic',types:['acier'],base:st(60,100,115,70,85,90),abilities:['Plus','Moins']}]},
{id:'tynamo',abilities:['Lévitation'],moveIds:['acid','bodyslam','brickbreak','bulkup','bulldoze','charge','closecombat','cometpunch','confuseray','crunch','dragonclaw','dragonpulse','endure','facade','firepunch','flamethrower','flashcannon','focuspunch','gigadrain','headbutt','hyperbeam','knockoff','lightscreen','muddywater','outrage','protect','raindance','rest','rockslide','rocktomb','scaryface','sleeptalk','swift','takedown','tackle','thunder','thunderpunch','thunderwave','thunderbolt','thrash','uturn','waterfall','zenheadbutt','zapcannon'],
 stages:[
  {name:'Anchwatt',types:['electrik'],base:st(35,55,40,45,40,60)},
  {name:'Lampéroie',types:['electrik'],base:st(65,85,70,75,70,40)},
  {name:'Ohmassacre',types:['electrik'],base:st(85,115,80,105,80,50),forms:{
    eelektrossite:{name:'Méga-Ohmassacre',types:['electrik'],base:st(85,145,80,135,90,80),abilities:['Survoltage']}
  }}]},
{id:'elgyem',abilities:['Télépathe','Synchro'],moveIds:['confusion','growl','imprison','psychicterrain','teleport','psybeam','headbutt','zenheadbutt','recover','calmmind','psychic','astonish','destinybond','disable','psychup','hyperbeam','thunderwave','screech','lightscreen','reflect','safeguard','rest','rockslide','thief','snore','protect','steelwing','attract','raindance','facade','rocktomb','thunderbolt','agility','triattack','endure','sleeptalk','shadowball','futuresight','uproar','trick','skillswap','cosmicpower','darkpulse','flashcannon'],
 stages:[
  {name:'Lewsor',types:['psy'],base:st(55,55,55,85,55,30)},
  {name:'Neitram',types:['psy'],base:st(75,75,75,125,95,40)}]},
{id:'litwick',abilities:['Torche','Corps Ardent'],moveIds:['ember','smokescreen','haze','confuseray','acidarmor','willowisp','firespin','flamethrower','shadowball','flamewheel','curse','overheat','calmmind','protect','doubleteam','endure','fireblast','hyperbeam','safeguard','psychic','solarbeam','heatwave','darkpulse','taunt','facade','astonish','memento','minimize','nightshade','smog','thief','sunnyday','sleeptalk','rest','imprison','trick','spite'],
 stages:[
  {name:'Funécire',types:['fantome','feu'],base:st(50,30,55,65,55,20)},
  {name:'Mélancolux',types:['fantome','feu'],base:st(60,40,60,95,60,55)},
  {name:'Lugulabre',types:['fantome','feu'],base:st(60,55,90,145,90,80),abilities:['Torche','Marque Ombre'],forms:{
    chandelurite:{name:'Méga-Lugulabre',types:['fantome','feu'],base:st(60,75,110,175,110,90),abilities:['Infiltration']}
  }}]},
{id:'axew',abilities:['Rivalité','Brise Moule'],moveIds:['bite','falseswipe','leer','scratch','taunt','slash','dragonclaw','scaryface','crunch','dragondance','focusenergy','dragonpulse','swordsdance','outrage','guillotine','takedown','protect','lowkick','facade','aerialace','bulldoze','swift','rocktomb','endure','sunnyday','raindance','dig','brickbreak','shadowclaw','bodyslam','sleeptalk','poisonjab','rest','rockslide','ironhead','surf','reversal','earthquake','focusblast','hyperbeam','closecombat','dracometeor','aquatail','counter','irontail','nightslash'],
 stages:[
  {name:'Coupenotte',types:['dragon'],base:st(46,87,60,30,40,57)},
  {name:'Incisache',types:['dragon'],base:st(66,117,70,40,50,67)},
  {name:'Tranchodon',types:['dragon'],base:st(76,147,90,60,70,97),abilities:['Rivalité','Tension']}]},
{id:'cubchoo',abilities:['Rideau Neige'],moveIds:['charm','endure','furyswipes','growl','powdersnow','icywind','playnice','slash','flail','swagger','thrash','rest','blizzard','sheercold','superpower','focuspunch','nightslash','yawn','takedown','mudslap','scaryface','protect','icefang','waterpulse','lowkick','thief','facade','aerialace','bulldoze','metalclaw','mudshot','rocktomb','raindance','dig','brickbreak','shadowclaw','bulkup','bodyslam','icepunch','sleeptalk','rockslide','taunt','swordsdance','crunch','encore','surf','playrough','reversal','icebeam','earthquake','stoneedge','focusblast','hyperbeam','closecombat','iciclespear','doubleedge','curse'],
 stages:[
  {name:'Polarhume',types:['glace'],base:st(55,70,40,60,40,40)},
  {name:'Polagriffe',types:['glace'],base:st(95,110,80,70,80,50),abilities:['Rideau Neige','Glissade']}]},
{id:'cryogonal',abilities:['Lévitation'],moveIds:['confuseray','icywind','haze','mist','slash','nightslash','lightscreen','reflect','recover','icebeam','acidarmor','solarbeam','explosion','sheercold','protect','bodyslam','endure','waterpulse','hyperbeam','selfdestruct','blizzard','poisonjab','irondefense','flashcannon','bind','rapidspin','ancientpower','aurorabeam','scaryface','facade','raindance','sleeptalk','rest','takedown'],
 stages:[
  {name:'Hexagel',types:['glace'],base:st(70,50,30,95,135,105)}]},
{id:'shelmet',abilities:['Hydratation','Coque Armure'],moveIds:['absorb','acid','acidarmor','agility','attract','batonpass','bodyslam','curse','doubleedge','doubleteam','encore','endure','facade','focusblast','gigadrain','hyperbeam','leechlife','megadrain','mudshot','protect','quickattack','raindance','recover','reversal','rest','sandstorm','sleeptalk','sludgebomb','snore','spikes','swift','toxic','uturn','yawn'],
 stages:[
  {name:'Escargaume',types:['insecte'],base:st(50,40,85,40,65,25)},
  {name:'Limaspeed',types:['insecte'],base:st(80,70,40,100,60,145),abilities:['Hydratation','Glu']}]},
{id:'stunfisk',abilities:['Statik','Échauffement'],moveIds:['tackle','thundershock','watergun','endure','mudshot','rocktomb','charge','spark','earthquake','discharge','bounce','eerieimpulse','metalclaw','screech','irondefense','crunch','stealthrock','thunderwave','rockslide','protect','dig','sludgebomb','stoneedge','thunderbolt','surf','bulldoze','curse','thunder','facade','muddywater','fissure','toxic','icefang','mudslap','revenge','suckerpunch','electricterrain','flail','rest','snore','attract','sandstorm','raindance','sleeptalk','uproar','flashcannon'],
 stages:[
  {name:'Limonde',types:['sol','electrik'],base:st(109,66,84,81,99,32)}]},
{id:'mienfoo',abilities:['Attention','Régé-Force'],moveIds:['detect','fakeout','pound','reversal','furyswipes','uturn','aurasphere','bounce','calmmind','highjumpkick','takedown','agility','protect','lowkick','facade','aerialace','swift','rocktomb','endure','sunnyday','raindance','dig','brickbreak','bulkup','sleeptalk','poisonjab','rest','taunt','swordsdance','stoneedge','focusblast','hyperbeam','closecombat','knockoff','focuspunch','psychup','doubleedge'],
 stages:[
  {name:'Kungfouine',types:['combat'],base:st(45,85,50,55,50,65)},
  {name:'Shaofouine',types:['combat'],base:st(65,125,60,95,60,105),abilities:['Attention','Téméraire']}]},
{id:'druddigon',abilities:['Peau Dure','Sans Limite'],moveIds:['leer','scratch','bite','metalclaw','scaryface','slash','dragonclaw','crunch','ironhead','outrage','superpower','glare','nightslash','poisontail','suckerpunch','megapunch','firepunch','thunderpunch','hyperbeam','dig','rest','rockslide','snore','protect','attract','raindance','sunnyday','facade','revenge','rocktomb','shadowclaw','bulldoze','bodyslam','flamethrower','surf','earthquake','sludgebomb','endure','sleeptalk','irontail','taunt','heatwave','dragonpulse','darkpulse','focusblast','flashcannon','stealthrock'],
 stages:[
  {name:'Drakkarmin',types:['dragon'],base:st(77,120,90,60,90,48)}]},
{id:'golett',abilities:['Poing de Fer','Maladresse'],moveIds:['harden','tackle','shadowpunch','curse','rollout','bulldoze','irondefense','shadowball','phantomforce','earthquake','dynamicpunch','brickbreak','rockslide','icebeam','protect','thunderpunch','icepunch','dig','firepunch','reflect','bodyslam','endure','rocktomb','stealthrock','fly','hyperbeam','knockoff','mudshot','selfdestruct','icywind','safeguard','doubleedge','ironhead','zenheadbutt','psychic','solarbeam','stoneedge','thunderbolt','flashcannon','focusblast','closecombat','cometpunch','facade','astonish','defensecurl','pound','nightshade','megapunch','focuspunch','mudslap','takedown','lowkick','confuseray','thief','sunnyday','raindance','sandstorm','sleeptalk','rest','imprison','trick'],
 stages:[
  {name:'Gringolem',types:['sol','fantome'],base:st(59,74,50,35,50,35)},
  {name:'Golemastoc',types:['sol','fantome'],base:st(89,124,80,55,80,55),abilities:['Poing de Fer','Annule Garde']}]},
{id:'pawniard',abilities:['Acharné','Attention'],moveIds:['furycutter','leer','metalclaw','scratch','torment','scaryface','slash','nightslash','irondefense','ironhead','swordsdance','guillotine','headbutt','meanlook','suckerpunch','takedown','protect','lowkick','thief','facade','aerialace','rocktomb','endure','raindance','sandstorm','dig','falseswipe','brickbreak','shadowclaw','airslash','sleeptalk','thunderwave','poisonjab','rest','taunt','flashcannon','darkpulse','stealthrock','reversal','stoneedge','focusblast','hyperbeam'],
 stages:[
  {name:'Scalpion',types:['tenebres','acier'],base:st(45,85,70,40,40,60)},
  {name:'Scalproie',types:['tenebres','acier'],base:st(65,125,100,60,70,70),abilities:['Acharné','Pression']}]},
{id:'bouffalant',abilities:['Téméraire','Herbivore'],moveIds:['leer','tackle','focusenergy','furyattack','revenge','scaryface','hornattack','reversal','swordsdance','megahorn','belch','endeavor','headbutt','mudslap','skullbash','stomp','rest','rockslide','snore','protect','attract','raindance','sunnyday','facade','rocktomb','mudshot','bulldoze','bodyslam','surf','earthquake','amnesia','endure','sleeptalk','uproar','taunt','superpower','closecombat','poisonjab','zenheadbutt','ironhead','stoneedge'],
 stages:[
  {name:'Frison',types:['normal'],base:st(95,110,95,40,95,55)}]},
{id:'rufflet',abilities:['Regard Vif','Sans Limite'],moveIds:['leer','peck','skyattack','wingattack','scaryface','aerialace','slash','whirlwind','airslash','thrash','superpower','rocksmash','takedown','agility','protect','facade','metalclaw','swift','rocktomb','aircutter','endure','sunnyday','raindance','zenheadbutt','uturn','shadowclaw','bulkup','bodyslam','sleeptalk','rest','rockslide','fly','ironhead','heatwave','reversal','hyperbeam','hurricane','closecombat','doubleedge','featherdance','psybeam','confuseray','icywind','nightshade','shadowball','hypervoice','psychic','calmmind'],
 stages:[
  {name:'Furaiglon',types:['normal','vol'],base:st(70,83,50,37,50,60)},
  {name:'Gueriaigle',types:['normal','vol'],base:st(100,123,75,57,75,80),abilities:['Regard Vif','Acharné']}]},
{id:'vullaby',abilities:['Cœur de Coq','Envelocape'],moveIds:['flatter','gust','leer','toxic','knockoff','irondefense','whirlwind','airslash','darkpulse','attract','bonerush','takedown','faketears','scaryface','protect','thief','facade','aerialace','swift','rocktomb','aircutter','endure','sunnyday','raindance','sandstorm','uturn','sleeptalk','rest','taunt','shadowball','heatwave','hyperbeam','hurricane','spite','uproar','doubleedge','featherdance','fly'],
 stages:[
  {name:'Vostourno',types:['tenebres','vol'],base:st(70,55,75,45,65,60)},
  {name:'Vaututrice',types:['tenebres','vol'],base:st(110,65,105,55,95,80),abilities:['Cœur de Coq','Envelocape']}]},
{id:'heatmor',abilities:['Gloutonnerie','Torche'],moveIds:['lick','tackle','furyswipes','bugbite','spitup','stockpile','swallow','slash','bind','amnesia','firespin','belch','curse','nightslash','suckerpunch','tickle','firepunch','thunderpunch','solarbeam','dig','rest','thief','snore','protect','gigadrain','attract','raindance','sunnyday','willowisp','facade','rocktomb','shadowclaw','bodyslam','flamethrower','lowkick','fireblast','sleeptalk','endure','heatwave','taunt','superpower','overheat','focusblast'],
 stages:[
  {name:'Aflamanoir',types:['feu'],base:st(85,97,66,105,66,65)}]},
{id:'durant',abilities:['Essaim','Agitation'],moveIds:['furycutter','sandattack','visegrip','metalclaw','beatup','bugbite','bite','agility','dig','crunch','ironhead','irondefense','guillotine','flail','infestation','thunderwave','screech','rest','rockslide','snore','protect','attract','sandstorm','facade','rocktomb','shadowclaw','endure','sleeptalk','batonpass','superpower','gigadrain','flashcannon','stoneedge'],
 stages:[
  {name:'Fermite',types:['insecte','acier'],base:st(58,109,112,48,48,109)}]},
{id:'deino',abilities:['Agitation'],moveIds:['bite','dragonbreath','focusenergy','tackle','triattack','headbutt','slam','crunch','scaryface','dragonpulse','bodyslam','hypervoice','outrage','hyperbeam','astonish','belch','takedown','protect','icefang','thief','firespin','facade','bulldoze','rocktomb','endure','sunnyday','raindance','zenheadbutt','uturn','sleeptalk','reflect','thunderwave','rest','rockslide','taunt','flashcannon','darkpulse','fly','dragondance','heatwave','surf','flamethrower','fireblast','hydropump','earthquake','stoneedge','focusblast','dracometeor','spite','psychup'],
 stages:[
  {name:'Solochi',types:['tenebres','dragon'],base:st(52,65,50,45,50,38)},
  {name:'Diamat',types:['tenebres','dragon'],base:st(72,85,70,65,70,58)},
  {name:'Trioxhydre',types:['tenebres','dragon'],base:st(92,105,90,125,90,98),abilities:['Lévitation']}]},
{id:'larvesta',abilities:['Corps Ardent','Essaim'],moveIds:['doubleedge','ember','firespin','gust','stringshot','takedown','whirlwind','flamewheel','bugbite','screech','leechlife','heatwave','amnesia','hurricane','fireblast','protect','facade','aircutter','endure','sunnyday','raindance','zenheadbutt','uturn','airslash','bodyslam','sleeptalk','lightscreen','poisonjab','rest','fly','willowisp','gigadrain','psychic','flamethrower','calmmind','hyperbeam','overheat','solarbeam','morningsun','thrash','harden','absorb'],
 stages:[
  {name:'Pyronille',types:['insecte','feu'],base:st(55,85,55,50,55,60)},
  {name:'Pyrax',types:['insecte','feu'],base:st(85,60,65,135,105,100),abilities:['Corps Ardent','Essaim']}]},
{id:'cobalion',abilities:['Cœur Noble'],moveIds:['leer','quickattack','metalclaw','bodyslam','takedown','bounce','aurasphere','airslash','megahorn','swordsdance','ironhead','closecombat','headbutt','calmmind','thunderwave','brickbreak','protect','aerialace','swift','reflect','endure','stealthrock','hyperbeam','doubleedge','zenheadbutt','stoneedge','poisonjab','irondefense','flashcannon','taunt','focusblast','facade','falseswipe','skullbash','scaryface','sleeptalk','rest','psychup'],
 stages:[
  {name:'Cobaltium',types:['acier','combat'],base:st(91,90,129,90,72,108)}]},
{id:'terrakion',abilities:['Cœur Noble'],moveIds:['leer','quickattack','rockthrow','bodyslam','takedown','rockblast','aurasphere','rockslide','megahorn','swordsdance','stoneedge','closecombat','headbutt','calmmind','brickbreak','protect','aerialace','swift','reflect','endure','rocktomb','stealthrock','hyperbeam','safeguard','doubleedge','ironhead','zenheadbutt','focusblast','facade','falseswipe','skullbash','scaryface','bulldoze','sandstorm','sleeptalk','poisonjab','reversal','rest','psychup'],
 stages:[
  {name:'Terrakium',types:['roche','combat'],base:st(91,129,90,72,90,108)}]},
{id:'virizion',abilities:['Cœur Noble'],moveIds:['leer','quickattack','synthesis','magicalleaf','bodyslam','takedown','bounce','aurasphere','airslash','megahorn','swordsdance','leafblade','closecombat','headbutt','calmmind','brickbreak','lightscreen','protect','aerialace','swift','reflect','endure','stealthrock','bulletseed','gigadrain','hyperbeam','doubleedge','zenheadbutt','solarbeam','stoneedge','poisonjab','irondefense','taunt','focusblast','facade','falseswipe','skullbash','scaryface','sunnyday','sleeptalk','rest','reversal','psychup'],
 stages:[
  {name:'Viridium',types:['plante','combat'],base:st(91,90,72,90,129,108)}]},
{id:'tornadus',abilities:['Farceur'],moveIds:['astonish','gust','leer','swagger','bite','aircutter','agility','airslash','crunch','extrasensory','uproar','hurricane','thrash','takedown','scaryface','protect','thief','facade','icywind','endure','sunnyday','sandstorm','brickbreak','uturn','bulkup','bodyslam','sleeptalk','metronome','rest','taunt','darkpulse','fly','heatwave','psychic','reversal','sludgebomb','hyperbeam','focusblast','knockoff','weatherball'],
 stages:[
  {name:'Boréas',types:['vol'],base:st(79,115,70,125,80,111),forms:{
    miroirSacre:{name:'Boréas (Totémique)',types:['vol'],base:st(79,100,80,110,90,121),abilities:['Régé-Force']}
  }}]},
{id:'thundurus',abilities:['Farceur'],moveIds:['astonish','thundershock','leer','swagger','bite','shockwave','agility','charge','discharge','uproar','thrash','takedown','scaryface','protect','thief','facade','endure','sunnyday','brickbreak','zenheadbutt','uturn','bulkup','bodyslam','thunderpunch','sleeptalk','thunderwave','rest','taunt','flashcannon','darkpulse','eerieimpulse','fly','psychic','thunderbolt','electricterrain','sludgebomb','hyperbeam','focusblast','knockoff','weatherball','thunder'],
 stages:[
  {name:'Fulguris',types:['electrik','vol'],base:st(79,115,70,125,80,111),forms:{
    miroirSacre:{name:'Fulguris (Totémique)',types:['electrik','vol'],base:st(79,105,70,145,80,101),abilities:['Absorbe-Volt']}
  }}]},
{id:'reshiram',abilities:['Turbo Brasier'],moveIds:['ancientpower','dragonbreath','nobleroar','slash','crunch','extrasensory','dragonpulse','flamethrower','hypervoice','fireblast','imprison','outrage','takedown','scaryface','protect','firespin','facade','swift','rocktomb','dragonclaw','endure','sunnyday','raindance','zenheadbutt','shadowclaw','bodyslam','sleeptalk','reflect','lightscreen','rest','rockslide','fly','dragondance','willowisp','shadowball','heatwave','psychic','stoneedge','hyperbeam','overheat','focusblast','solarbeam','dracometeor','weatherball','doubleedge'],
 stages:[
  {name:'Reshiram',types:['dragon','feu'],base:st(100,120,100,150,120,90)}]},
{id:'zekrom',abilities:['Téra-Voltage'],moveIds:['ancientpower','dragonbreath','nobleroar','slash','crunch','zenheadbutt','dragonclaw','thunderbolt','hypervoice','thunder','imprison','outrage','takedown','scaryface','protect','facade','swift','rocktomb','endure','sunnyday','raindance','brickbreak','shadowclaw','bodyslam','thunderpunch','sleeptalk','reflect','lightscreen','thunderwave','rest','rockslide','flashcannon','fly','dragondance','shadowball','dragonpulse','stealthrock','psychic','stoneedge','hyperbeam','focusblast','dracometeor','weatherball','doubleedge','haze','focuspunch'],
 stages:[
  {name:'Zekrom',types:['dragon','electrik'],base:st(100,150,120,120,100,90)}]},
{id:'landorus',abilities:['Force Sable'],moveIds:['sandtomb','leer','block','bulldoze','rocktomb','imprison','rockslide','extrasensory','stoneedge','sandstorm','earthquake','outrage','fissure','takedown','mudslap','scaryface','protect','facade','mudshot','endure','sunnyday','raindance','dig','brickbreak','uturn','bulkup','bodyslam','sleeptalk','rest','taunt','swordsdance','fly','crunch','stealthrock','psychic','calmmind','sludgebomb','hyperbeam','focusblast','weatherball'],
 stages:[
  {name:'Démétéros',types:['sol','vol'],base:st(89,125,90,115,80,101),forms:{
    miroirSacre:{name:'Démétéros (Totémique)',types:['sol','vol'],base:st(89,145,90,105,80,91),abilities:['Intimidation']}
  }}]},
{id:'kyurem',abilities:['Pression'],moveIds:['ancientpower','dragonbreath','nobleroar','slash','endeavor','dragonpulse','icebeam','hypervoice','scaryface','blizzard','imprison','outrage','sheercold','takedown','protect','icefang','facade','aerialace','swift','icywind','rocktomb','endure','sunnyday','raindance','zenheadbutt','shadowclaw','bodyslam','sleeptalk','reflect','lightscreen','dragonclaw','rest','rockslide','flashcannon','fly','ironhead','dragondance','shadowball','psychic','stoneedge','hyperbeam','focusblast','dracometeor','iciclespear','weatherball'],
 stages:[
  {name:'Kyurem',types:['dragon','glace'],base:st(125,130,90,130,90,95)}]},
{id:'keldeo',abilities:['Cœur Noble'],moveIds:['leer','bubblebeam','bodyslam','takedown','bounce','aurasphere','airslash','megahorn','swordsdance','hydropump','closecombat','headbutt','calmmind','brickbreak','icebeam','lightscreen','protect','aerialace','swift','reflect','endure','stealthrock','waterpulse','hyperbeam','icywind','safeguard','doubleedge','zenheadbutt','stoneedge','whirlpool','surf','poisonjab','taunt','waterfall','focusblast','facade','falseswipe','muddywater','aquatail','lowkick','raindance','sleeptalk','batonpass','reversal','painsplit','psychup'],
 stages:[
  {name:'Keldeo',types:['eau','combat'],base:st(91,72,90,129,90,108)}]},
{id:'meloetta',abilities:['Sérénité'],moveIds:['confusion','quickattack','sing','disarmingvoice','faketears','swordsdance','psybeam','uturn','psychic','hypervoice','closecombat','perishsong','calmmind','thunderwave','brickbreak','lightscreen','protect','poweruppunch','playrough','thunderpunch','icepunch','swift','firepunch','doubleteam','endure','hyperbeam','knockoff','agility','zenheadbutt','shadowclaw','stoneedge','thunderbolt','dazzlinggleam','metronome','focusblast','thunder','cometpunch','facade','mimic','dreameater','petaldance','teeterdance','charm','lowkick','sunnyday','raindance','sleeptalk','rest','skillswap','trick','shadowball','batonpass','reversal','focuspunch','psychup'],
 stages:[
  {name:'Meloetta',types:['normal','psy'],base:st(100,77,77,128,128,90)}]},
{id:'genesect',abilities:['Télécharge'],moveIds:['quickattack','screech','metalclaw','flashcannon','leechlife','ironhead','zapcannon','selfdestruct','thunderwave','icebeam','lightscreen','protect','swift','reflect','endure','gigadrain','fly','hyperbeam','irondefense','uturn','shadowclaw','flamethrower','psychic','solarbeam','thunderbolt','shadowball','darkpulse','blizzard','thunder','facade','ancientpower','blazekick','skullbash','triattack','furycutter','fellstinger','lockon','snore','rest','zenheadbutt','sleeptalk'],
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
  'Bargantua':550,'Paragruel':902,
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
