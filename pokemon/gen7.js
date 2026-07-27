/* ==== pokemon/gen7.js : Pokédex n°722 à 809 (Alola) + Formes d'Alola ==== */
const LINES_GEN7 = [
{id:'brindibou',abilities:['Engrais','Longue Distance'],moveIds:['tackle','growl','leafage','peck','razorleaf','synthesis','magicalleaf','airslash','leafblade','nightslash','spiritshackle','protect','swift','endure','gigadrain','hyperbeam','solarbeam','facade','falseswipe','sleeptalk','rest','swordsdance','bulletseed','hurricane','shadowball','darkpulse','moongeistbeam'],
 stages:[
  {name:'Brindibou',types:['plante','vol'],base:st(68,55,55,50,50,42)},
  {name:'Efflèche',types:['plante','vol'],base:st(78,75,75,70,70,52)},
  {name:'Archéduc',types:['plante','fantome'],base:st(78,107,75,100,100,70)}]},
{id:'flamiaou',abilities:['Brasier','Farouche'],moveIds:['scratch','leer','ember','lick','flamewheel','darkpulse','crunch','flamethrower','firelash','throatchop','fireblast','overheat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','swordsdance','closecombat','suckerpunch','mindblown','sunsteelstrike'],
 stages:[
  {name:'Flamiaou',types:['feu'],base:st(45,65,40,60,40,70)},
  {name:'Matoufeu',types:['feu'],base:st(65,85,50,80,50,90)},
  {name:'Félinferno',types:['feu','tenebres'],base:st(95,115,90,80,90,60)}]},
{id:'otaquin',abilities:['Torrent','Voix Aquatique'],moveIds:['pound','watergun','disarmingvoice','bubblebeam','sing','aquatail','moonblast','sparklingaria','fleurcannon','hydropump','protect','swift','endure','hyperbeam','facade','surf','icebeam','moonlight','sleeptalk','rest','calmmind','dazzlinggleam','hypervoice'],
 stages:[
  {name:'Otaquin',types:['eau'],base:st(50,54,54,66,56,40)},
  {name:'Otarlette',types:['eau'],base:st(60,69,69,91,81,50)},
  {name:'Oratoria',types:['eau','fee'],base:st(80,74,74,126,116,60)}]},
{id:'picassaut',abilities:['Regard Vif','Ramassage'],moveIds:['peck','growl','quickattack','pursuit','aircutter','drillpeck','airslash','beakblast','brickbreak','uturn','protect','swift','endure','hyperbeam','fly','facade','doubleedge','sleeptalk','rest','rockslide','stealthrock'],
 stages:[
  {name:'Picassaut',types:['normal','vol'],base:st(35,75,30,30,30,65)},
  {name:'Piclairon',types:['normal','vol'],base:st(55,85,50,40,50,75)},
  {name:'Bazoucan',types:['normal','vol'],base:st(80,120,75,75,75,60)}]},
{id:'manglouton',abilities:['Mâchouille','Adaptabilité'],moveIds:['tackle','leer','bite','superfang','crunch','hyperfang','stompingtantrum','takedown','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bodyslam','earthquake','rockslide'],
 stages:[
  {name:'Manglouton',types:['normal'],base:st(48,70,30,30,30,45)},
  {name:'Argouste',types:['normal'],base:st(88,110,60,55,60,45)}]},
{id:'larvibule',abilities:['Essaim','Batterie'],moveIds:['stringshot','tackle','bite','thundershock','furycutter','leechlife','thunderbolt','plasmafists','zingzap','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','irondefense','flashcannon','discharge'],
 stages:[
  {name:'Larvibule',types:['insecte'],base:st(47,62,45,55,45,46)},
  {name:'Chrysapile',types:['insecte','electrik'],base:st(57,82,95,55,75,36)},
  {name:'Lucanon',types:['insecte','electrik'],base:st(77,70,90,145,75,43)}]},
{id:'crabagarre',abilities:['Poing de Fer','Choc Nerveux'],moveIds:['bubble','leer','superpower','rocksmash','icepunch','closecombat','crabhammer','icehammer','firstimpression','brickbreak','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','stoneedge'],
 stages:[
  {name:'Crabagarre',types:['combat'],base:st(47,82,57,42,47,63)},
  {name:'Crabominable',types:['combat','glace'],base:st(97,132,77,62,67,43)}]},
{id:'bombydou',abilities:['Écran Poudre','Voile Sucré'],moveIds:['stringshot','fairywind','absorb','drainingkiss','leechlife','pollenpuff','moonblast','dazzlinggleam','endeavor','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','psychic','gigadrain'],
 stages:[
  {name:'Bombydou',types:['insecte','fee'],base:st(40,45,40,55,40,84)},
  {name:'Rubombelle',types:['insecte','fee'],base:st(60,55,60,95,70,124)}]},
{id:'rocabot',abilities:['Regard Vif','Cran'],moveIds:['tackle','rockthrow','bite','accelerock','rockslide','crunch','stoneedge','throatchop','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','stealthrock','fireblast','earthquake'],
 stages:[
  {name:'Rocabot',types:['roche'],base:st(45,65,40,30,40,60)}],
 branches:[
  {name:'Lougaroc (Forme Diurne)',types:['roche'],base:st(75,115,65,55,65,112),abilities:['Regard Vif','Cran'],extraMoveIds:[]},
  {name:'Lougaroc (Forme Nocturne)',types:['roche'],base:st(75,115,75,55,75,82),abilities:['Regard Vif','Esprit Vital'],extraMoveIds:[]},
  {name:'Lougaroc (Forme Crépusculaire)',types:['roche'],base:st(75,117,65,55,65,110),abilities:['Griffe Solide'],extraMoveIds:[]}]},
{id:'vorasterie',abilities:['Point Poison','Sans Pitié'],moveIds:['tackle','poisonsting','toxicthread','poisonjab','sludgebomb','venomdrench','banefulbunker','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover','icebeam','surf','toxic'],
 stages:[
  {name:'Vorastérie',types:['poison','eau'],base:st(50,53,62,43,52,45)},
  {name:'Prédastérie',types:['poison','eau'],base:st(50,63,152,53,142,35)}]},
{id:'tiboudet',abilities:['Ténacité','Costaud'],moveIds:['tackle','stompingtantrum','bulldoze','highhorsepower','earthquake','superpower','icehammer','ironhead','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','rockslide','stoneedge'],
 stages:[
  {name:'Tiboudet',types:['sol'],base:st(70,100,70,45,55,45)},
  {name:'Bourrinos',types:['sol'],base:st(100,125,100,55,85,35)}]},
{id:'araqua',abilities:['Écume','Absorbe-Eau'],moveIds:['bubble','watergun','stringshot','bite','liquidation','crunch','hydropump','lunge','mirrorcoat','protect','swift','endure','hyperbeam','facade','surf','sleeptalk','rest','icebeam','leechlife'],
 stages:[
  {name:'Araqua',types:['eau','insecte'],base:st(38,40,52,40,72,27)},
  {name:'Tarenbulle',types:['eau','insecte'],base:st(68,70,92,50,132,42)}]},
{id:'mimantis',abilities:['Chlorophylle','Régénération'],moveIds:['leafage','growth','absorb','razorleaf','leafblade','synthesis','solarblade','leechlife','megahorn','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','gigadrain'],
 stages:[
  {name:'Mimantis',types:['plante'],base:st(40,55,35,50,35,35)},
  {name:'Floramantis',types:['plante'],base:st(70,105,90,80,90,45)}]},
{id:'spododo',abilities:['Illumination','Effet Spore'],moveIds:['absorb','moonlight','confuseray','sleeppowder','stunspore','moonblast','strengthsap','gigadrain','dazzlinggleam','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','psychic'],
 stages:[
  {name:'Spododo',types:['plante','fee'],base:st(40,35,55,65,75,15)},
  {name:'Lampignon',types:['plante','fee'],base:st(60,45,80,90,100,30)}]},
{id:'tritox',abilities:['Corrosion'],moveIds:['smog','ember','poisonsting','flamethrower','sludgebomb','fireblast','venomdrench','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','toxic','calmmind'],
 stages:[
  {name:'Tritox',types:['poison','feu'],base:st(48,44,40,71,40,77)},
  {name:'Malamandre',types:['poison','feu'],base:st(68,64,60,111,60,117)}]},
{id:'nounourson',abilities:['Pelage Moelleux','Longue Distance'],moveIds:['tackle','leer','lick','bite','crunch','closecombat','superpower','brutalswing','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','rockslide'],
 stages:[
  {name:'Nounourson',types:['normal','combat'],base:st(70,75,50,45,50,50)},
  {name:'Chelours',types:['normal','combat'],base:st(120,125,80,55,60,60)}]},
{id:'croquine',abilities:['Feuille Garde','Voile Sucré'],moveIds:['growth','tackle','sweetscent','razorleaf','troppkick','magicalleaf','highjumpkick','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','synthesis'],
 stages:[
  {name:'Croquine',types:['plante'],base:st(42,30,38,30,38,32)},
  {name:'Candine',types:['plante'],base:st(52,40,48,40,48,62)},
  {name:'Sucreine',types:['plante'],base:st(72,120,98,50,98,72)}]},
{id:'guerilande',abilities:['Voile Aromatique'],moveIds:['absorb','fairywind','vinewhip','drainingkiss','moonblast','dazzlinggleam','gigadrain','synthesis','floralhealing','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Guérilande',types:['fee'],base:st(51,52,90,82,110,100)}]},
{id:'gouroutan',abilities:['Symbiose','Téléportation'],moveIds:['confusion','tackle','psybeam','instruct','psychic','futuresight','calmmind','recover','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','shadowball','focusblast'],
 stages:[
  {name:'Gouroutan',types:['normal','psy'],base:st(90,60,80,90,110,60)}]},
{id:'quartermac',abilities:['Réceptacle'],moveIds:['tackle','rockthrow','closecombat','stoneedge','firstimpression','superpower','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','rockslide'],
 stages:[
  {name:'Quartermac',types:['combat'],base:st(100,120,90,40,60,80)}]},
{id:'sovkipou',abilities:['Sur-Régime'],moveIds:['tackle','leer','leechlife','liquidation','firstimpression','lunge','waterpulse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','crunch'],
 stages:[
  {name:'Sovkipou',types:['insecte','eau'],base:st(25,35,40,20,30,80)},
  {name:'Sarmuraï',types:['insecte','eau'],base:st(75,125,140,60,90,40)}]},
{id:'bacabouh',abilities:['Compression','Voile Sable'],moveIds:['tackle','harden','shadowclaw','earthquake','shadowball','bulldoze','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','curse','recover'],
 stages:[
  {name:'Bacabouh',types:['fantome','sol'],base:st(55,55,80,70,45,15)},
  {name:'Trépassable',types:['fantome','sol'],base:st(85,75,110,100,75,35)}]},
{id:'concombaffe',abilities:['Chair-Piège','Lucidité'],moveIds:['tackle','harden','recover','toxic','bodyslam','counter','mirrorcoat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Concombaffe',types:['eau'],base:st(55,60,130,30,130,5)}]},
{id:'type0',abilities:['Carapace Rigide'],moveIds:['tackle','headbutt','crunch','ironhead','multiattack','shadowclaw','flamethrower','icebeam','thunderbolt','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','earthquake','psychic'],
 stages:[
  {name:'Type:0',types:['normal'],base:st(95,95,95,95,95,59)},
  {name:'Silvallié',types:['normal'],base:st(95,95,95,95,95,95),abilities:['Architecture'],forms:{
    memoireCombat:{name:'Silvallié (Combat)',types:['combat'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireVol:{name:'Silvallié (Vol)',types:['vol'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoirePoison:{name:'Silvallié (Poison)',types:['poison'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireSol:{name:'Silvallié (Sol)',types:['sol'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireRoche:{name:'Silvallié (Roche)',types:['roche'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireInsecte:{name:'Silvallié (Insecte)',types:['insecte'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireFantome:{name:'Silvallié (Fantôme)',types:['fantome'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireAcier:{name:'Silvallié (Acier)',types:['acier'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireFeu:{name:'Silvallié (Feu)',types:['feu'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireEau:{name:'Silvallié (Eau)',types:['eau'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoirePlante:{name:'Silvallié (Plante)',types:['plante'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireElectrik:{name:'Silvallié (Électrik)',types:['electrik'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoirePsy:{name:'Silvallié (Psy)',types:['psy'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireGlace:{name:'Silvallié (Glace)',types:['glace'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireDragon:{name:'Silvallié (Dragon)',types:['dragon'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireTenebres:{name:'Silvallié (Ténèbres)',types:['tenebres'],base:st(95,95,95,95,95,95),abilities:['Architecture']},
    memoireFee:{name:'Silvallié (Fée)',types:['fee'],base:st(95,95,95,95,95,95),abilities:['Architecture']}
  }}]},
{id:'plumeline',abilities:['Danseur'],moveIds:['peck','growl','airslash','revelationdance','hurricane','flamethrower','firespin','fireblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn','recover'],
 stages:[
  {name:'Plumeline (Style Flamenco)',types:['feu','vol'],base:st(75,70,70,98,70,93)}],
 branches:[
  {name:'Plumeline (Style Pom-Pom)',types:['electrik','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['thunderbolt','discharge','plasmafists']},
  {name:'Plumeline (Style Hula)',types:['psy','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['psychic','psybeam','calmmind']},
  {name:'Plumeline (Style Buyō)',types:['fantome','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['shadowball','moongeistbeam','shadowclaw']}]},
{id:'froussardine',abilities:['Banc de Poissons'],moveIds:['pound','watergun','sparklingaria','hydropump','surf','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover'],
 stages:[
  {name:'Froussardine',types:['eau'],base:st(45,140,130,140,135,30)}]},
{id:'meteno',abilities:['Corps Blindé'],moveIds:['tackle','rockthrow','stealthrock','accelerock','rockslide','stoneedge','ancientpower','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','earthquake','flashcannon'],
 stages:[
  {name:'Météno',types:['roche','vol'],base:st(60,100,60,100,60,120)}]},
{id:'dodoala',abilities:['Comateux'],moveIds:['tackle','flail','rest','sleeptalk','bodyslam','crunch','superpower','shadowclaw','protect','swift','endure','hyperbeam','facade','doubleedge'],
 stages:[
  {name:'Dodoala',types:['normal'],base:st(65,115,65,75,95,65)}]},
{id:'boumata',abilities:['Corps Blindé'],moveIds:['tackle','ember','shelltrap','dragonpulse','flashcannon','flamethrower','outrage','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','stoneedge','earthquake'],
 stages:[
  {name:'Boumata',types:['feu','dragon'],base:st(60,78,135,91,85,36)}]},
{id:'togedemaru',abilities:['Pointes Piquantes'],moveIds:['tackle','thundershock','zingzap','discharge','ironhead','thunderbolt','spikes','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','flashcannon'],
 stages:[
  {name:'Togedemaru',types:['electrik','acier'],base:st(65,98,63,40,73,96)}]},
{id:'mimiqui',abilities:['Fantaisie'],moveIds:['scratch','shadowclaw','playrough','suckerpunch','shadowball','moonblast','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Mimiqui',types:['fantome','fee'],base:st(55,90,80,50,105,96)}]},
{id:'denticrisse',abilities:['Solide Roc'],moveIds:['bite','watergun','crunch','psychicfangs','waterpulse','icefang','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','surf'],
 stages:[
  {name:'Denticrisse',types:['eau','psy'],base:st(68,105,70,70,70,92)}]},
{id:'draieul',abilities:['Rebond'],moveIds:['tackle','hypervoice','dragonpulse','dracometeor','psychic','thunderbolt','glare','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Draïeul',types:['normal','dragon'],base:st(78,60,85,135,91,36)}]},
{id:'sinistrail',abilities:['Ballon'],moveIds:['tackle','constrict','anchorshot','leafblade','shadowball','gigadrain','ironhead','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Sinistrail',types:['fantome','plante'],base:st(70,131,100,86,90,40)}]},
{id:'bebecaille',abilities:['Robustesse'],moveIds:['tackle','leer','dragonbreath','dragonclaw','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Bébécaille',types:['dragon'],base:st(45,55,65,45,45,45)},
  {name:'Écaïd',types:['dragon','combat'],base:st(55,75,90,65,70,65)},
  {name:'Ékaïser',types:['dragon','combat'],base:st(75,110,125,100,105,85),abilities:['Robustesse','Solide Roc']}]},
{id:'vemini',abilities:['Éclosion'],moveIds:['poisonsting','pursuit','poisonjab','sludgebomb','dragonpulse','fellstinger','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Vémini',types:['poison'],base:st(67,73,67,73,67,73)},
  {name:'Mandrillon',types:['poison','dragon'],base:st(73,73,73,127,73,121)}]},
{id:'zeroid',abilities:['Éclosion'],moveIds:['tackle','rockslide','poisonjab','sludgebomb','stoneedge','psychic','ancientpower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Zéroïd',types:['roche','poison'],base:st(109,53,47,127,131,103)}]},
{id:'mouscoto',abilities:['Éclosion'],moveIds:['tackle','superpower','closecombat','icepunch','thunderpunch','poweruppunch','leechlife','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Mouscoto',types:['insecte','combat'],base:st(107,139,139,53,53,79)}]},
{id:'cancrelove',abilities:['Éclosion'],moveIds:['tackle','highjumpkick','closecombat','icebeam','poweruppunch','lowkick','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Cancrelove',types:['insecte','combat'],base:st(71,137,37,137,37,151)}]},
{id:'cablifere',abilities:['Éclosion'],moveIds:['thundershock','discharge','thunderbolt','thunder','shockwave','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Câblifère',types:['electrik'],base:st(83,89,71,173,71,83)}]},
{id:'bamboiselle',abilities:['Éclosion'],moveIds:['tackle','flashcannon','ironhead','airslash','steelwing','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Bamboiselle',types:['acier','vol'],base:st(97,101,103,107,101,61)}]},
{id:'katagami',abilities:['Éclosion'],moveIds:['leafblade','airslash','closecombat','swordsdance','leechlife','ironhead','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Katagami',types:['plante','acier'],base:st(59,181,131,59,31,109)}]},
{id:'engloutyran',abilities:['Éclosion'],moveIds:['tackle','crunch','outrage','earthquake','darkestlariat','dragonclaw','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Engloutyran',types:['tenebres','dragon'],base:st(223,101,53,97,53,43)}]},
{id:'amaama',abilities:['Éclosion'],moveIds:['tackle','stoneedge','earthquake','ironhead','flashcannon','irondefense','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Ama-Ama',types:['roche','acier'],base:st(61,131,211,53,101,13)}]},
{id:'pierroteknik',abilities:['Éclosion'],moveIds:['ember','mindblown','shadowball','flamethrower','fireblast','shadowbone','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Pierroteknik',types:['feu','fantome'],base:st(53,127,53,151,79,107)}]},
{id:'tokorico',abilities:['Électro Surge'],moveIds:['tackle','discharge','dazzlinggleam','thunderbolt','thunder','plasmafists','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn'],
 stages:[
  {name:'Tokorico',types:['electrik','fee'],base:st(70,115,85,95,75,130)}]},
{id:'tokopiyon',abilities:['Psycho Surge'],moveIds:['confusion','psychic','moonblast','dazzlinggleam','futuresight','calmmind','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Tokopiyon',types:['psy','fee'],base:st(70,85,75,130,115,95)}]},
{id:'tokotoro',abilities:['Copeaux Surge'],moveIds:['tackle','megahorn','gigadrain','solarbeam','stompingtantrum','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Tokotoro',types:['plante','fee'],base:st(70,130,115,85,95,75)}]},
{id:'tokopisco',abilities:['Aqua Surge'],moveIds:['watergun','surf','hydropump','moonblast','naturesmadness','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Tokopisco',types:['eau','fee'],base:st(70,75,115,95,130,85)}]},
{id:'cosmog',abilities:['Lucidité'],moveIds:['splash','teleport','cosmicpower','wish','protect','rest','sleeptalk'],
 stages:[
  {name:'Cosmog',types:['psy'],base:st(43,29,31,29,31,37)},
  {name:'Cosmovum',types:['psy'],base:st(43,29,131,29,131,37),abilities:['Fermeté']}],
 branches:[
  {name:'Solgaleo',types:['psy','acier'],base:st(137,137,107,113,89,97),abilities:['Intégral Métal'],extraMoveIds:['sunsteelstrike','firepunch','ironhead']},
  {name:'Lunala',types:['psy','fantome'],base:st(137,113,89,137,107,97),abilities:['Bouclier Ombre'],extraMoveIds:['moongeistbeam','shadowball','psychic']}]},
{id:'necrozma',abilities:['Armure Prisme'],moveIds:['tackle','confusion','psychic','photongeyser','prismaticlaser','shadowball','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Necrozma',types:['psy'],base:st(97,107,101,127,89,79),forms:{
    prismeCouchant:{name:'Necrozma (Crinière du Couchant)',types:['psy','acier'],base:st(97,157,127,113,109,77),abilities:['Armure Prisme']},
    prismeAurore:{name:"Necrozma (Ailes de l'Aurore)",types:['psy','fantome'],base:st(97,113,109,157,127,77),abilities:['Armure Prisme']},
    ultranecrozium:{name:'Ultra-Necrozma',types:['psy','dragon'],base:st(97,167,97,167,97,129),abilities:['Force Neurale']}
  }}]},
{id:'magearna',abilities:["Cœur d'Âme"],moveIds:['tackle','flashcannon','fleurcannon','moonblast','ironhead','dazzlinggleam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Magearna',types:['acier','fee'],base:st(80,95,115,130,115,65)}]},
{id:'marshadow',abilities:['Ombre Vive'],moveIds:['tackle','closecombat','spectralthief','shadowclaw','shadowball','icepunch','thunderpunch','firepunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Marshadow',types:['combat','fantome'],base:st(90,125,80,90,90,125)}]},
{id:'zeraora',abilities:['Statik'],moveIds:['tackle','plasmafists','zingzap','thunderpunch','closecombat','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Zeraora',types:['electrik'],base:st(88,112,75,102,80,143)}]},
{id:'meltan',abilities:['Ferraille'],moveIds:['tackle','ironhead','flashcannon','irondefense','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Meltan',types:['acier'],base:st(46,65,65,55,35,34)},
  {name:'Melmetal',types:['acier'],base:st(135,143,143,80,65,34),abilities:['Ferraille']}]},
{id:'rattataalola',abilities:['Gloutonnerie','Isograisse'],moveIds:['tackle','tailwhip','bite','crunch','throatchop','darkestlariat','superfang','hyperfang','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:"Rattata d'Alola",types:['tenebres','normal'],base:st(30,56,35,25,35,72)},
  {name:"Rattatac d'Alola",types:['tenebres','normal'],base:st(75,71,70,40,80,77)}]},
{id:'sabelettealola',abilities:['Cape Neige','Glisse Neige'],moveIds:['scratch','powdersnow','icywind','iciclespear','icehammer','icebeam','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:"Sabelette d'Alola",types:['glace','acier'],base:st(50,75,90,10,35,40)},
  {name:"Sablaireau d'Alola",types:['glace','acier'],base:st(75,100,120,25,65,65)}]},
{id:'goupixalola',abilities:['Cape Neige','Rideau Neige'],moveIds:['tackle','powdersnow','icywind','auroraveil','icebeam','moonblast','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:"Goupix d'Alola",types:['glace'],base:st(38,41,40,50,65,65)},
  {name:"Feunard d'Alola",types:['glace','fee'],base:st(73,67,75,81,100,109)}]},
{id:'taupiqueuralola',abilities:['Voile Sable','Emmêlement'],moveIds:['scratch','mudslap','metalclaw','mudshot','dig','earthquake','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Taupiqueur d'Alola",types:['sol','acier'],base:st(10,55,30,35,45,90)},
  {name:"Triopikeur d'Alola",types:['sol','acier'],base:st(35,100,60,50,70,110)}]},
{id:'miaoussalola',abilities:['Ramassage','Mâchouille'],moveIds:['scratch','bite','crunch','darkestlariat','throatchop','suckerpunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:"Miaouss d'Alola",types:['tenebres'],base:st(40,35,35,50,40,90)},
  {name:"Persian d'Alola",types:['tenebres'],base:st(65,60,60,75,65,115)}]},
{id:'racailloualola',abilities:['Magnétisme','Fermeté'],moveIds:['tackle','rockthrow','thundershock','rockslide','discharge','stoneedge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Racaillou d'Alola",types:['roche','electrik'],base:st(40,80,100,30,30,20)},
  {name:"Gravalanch d'Alola",types:['roche','electrik'],base:st(55,95,115,45,45,35)},
  {name:"Grolem d'Alola",types:['roche','electrik'],base:st(80,120,130,55,65,45)}]},
{id:'tadmorvalola',abilities:['Point Poison','Gloutonnerie'],moveIds:['pound','poisongas','sludge','crunch','darkpulse','sludgebomb','poisonjab','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Tadmorv d'Alola",types:['poison','tenebres'],base:st(80,80,50,40,50,25)},
  {name:"Grotadmorv d'Alola",types:['poison','tenebres'],base:st(105,105,75,65,100,50)}]},
{id:'noadkokoalola',abilities:['Farfouille'],moveIds:['absorb','leafblade','dragonpulse','dracometeor','solarbeam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Noadkoko d'Alola",types:['plante','dragon'],base:st(95,105,85,125,75,45)}]},
{id:'ossatueuralola',abilities:['Corps Maudit'],moveIds:['leer','shadowbone','flamethrower','shadowball','fireblast','willowisp','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Ossatueur d'Alola",types:['feu','fantome'],base:st(60,80,110,50,80,45)}]},
{id:'raichualola',abilities:['Surfeur Voltaïque'],moveIds:['thundershock','psybeam','thunderbolt','psychic','plasmafists','zingzap','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:"Raichu d'Alola",types:['electrik','psy'],base:st(60,85,50,95,85,110)}]},
];
const DEX_NUMBERS_GEN7 = {
  'Brindibou':722,'Efflèche':723,'Archéduc':724,
  'Flamiaou':725,'Matoufeu':726,'Félinferno':727,
  'Otaquin':728,'Otarlette':729,'Oratoria':730,
  'Picassaut':731,'Piclairon':732,'Bazoucan':733,
  'Manglouton':734,'Argouste':735,
  'Larvibule':736,'Chrysapile':737,'Lucanon':738,
  'Crabagarre':739,'Crabominable':740,
  'Plumeline':741,
  'Bombydou':742,'Rubombelle':743,
  'Rocabot':744,'Lougaroc':745,
  'Froussardine':746,
  'Vorastérie':747,'Prédastérie':748,
  'Tiboudet':749,'Bourrinos':750,
  'Araqua':751,'Tarenbulle':752,
  'Mimantis':753,'Floramantis':754,
  'Spododo':755,'Lampignon':756,
  'Tritox':757,'Malamandre':758,
  'Nounourson':759,'Chelours':760,
  'Croquine':761,'Candine':762,'Sucreine':763,
  'Guérilande':764,
  'Gouroutan':765,
  'Quartermac':766,
  'Sovkipou':767,'Sarmuraï':768,
  'Bacabouh':769,'Trépassable':770,
  'Concombaffe':771,
  'Type:0':772,'Silvallié':773,
  'Météno':774,
  'Dodoala':775,
  'Boumata':776,
  'Togedemaru':777,
  'Mimiqui':778,
  'Denticrisse':779,
  'Draïeul':780,
  'Sinistrail':781,
  'Bébécaille':782,'Écaïd':783,'Ékaïser':784,
  'Tokorico':785,'Tokopiyon':786,'Tokotoro':787,'Tokopisco':788,
  'Cosmog':789,'Cosmovum':790,'Solgaleo':791,'Lunala':792,
  'Zéroïd':793,'Mouscoto':794,'Cancrelove':795,'Câblifère':796,'Bamboiselle':797,'Katagami':798,'Engloutyran':799,
  'Necrozma':800,
  'Magearna':801,
  'Marshadow':802,
  'Vémini':803,'Mandrillon':804,
  'Ama-Ama':805,
  'Pierroteknik':806,
  'Zeraora':807,
  'Meltan':808,'Melmetal':809,
};
