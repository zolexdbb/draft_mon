/* ==== SOMMAIRE ====
   Pokédex n°722 à 809 (région d'Alola) + les 10 lignées de Formes d'Alola. Repères (lignes
   approximatives) :
   - L.3-99    : Starters et lignées classiques d'Alola
   - L.100-164 : Cas spéciaux (Silvallié/type0, Plumeline/branches, Lougaroc/branches,
     Cosmog→Cosmovum→Solgaleo/Lunala, Necrozma + ses 3 fusions)
   - L.165-230 : Ultra-Chimères + légendaires d'Alola (Gardiens des Îles...) + Meltan/Melmetal
   - L.231-269 : Formes d'Alola (lignées séparées, réutilisent le n° de Pokédex national)
   - L.270-fin : DEX_NUMBERS_GEN7 (numéros de Pokédex, utilisés pour résoudre les sprites)
==== */
const LINES_GEN7 = [
{id:'brindibou',abilities:['Engrais','Longue Distance'],moveIds:['tackle','growl','leafage','peck','razorleaf','synthesis','magicalleaf','airslash','leafblade','nightslash','spiritshackle','protect','swift','endure','gigadrain','hyperbeam','solarbeam','facade','falseswipe','sleeptalk','rest','swordsdance','bulletseed','hurricane','shadowball','darkpulse','moongeistbeam','sunnyday','raindance','takedown','thief','bodyslam','aerialace','doubleedge','scaryface','taunt','brickbreak','curse','rockslide','psychic','agility','knockoff'],
 stages:[
  {name:'Brindibou',types:['plante','vol'],base:st(68,55,55,50,50,42)},
  {name:'Efflèche',types:['plante','vol'],base:st(78,75,75,70,70,52)},
  {name:'Archéduc',types:['plante','fantome'],base:st(78,107,75,100,100,70)}]},
{id:'flamiaou',abilities:['Brasier','Farouche'],moveIds:['scratch','leer','ember','lick','flamewheel','darkpulse','crunch','flamethrower','firelash','throatchop','fireblast','overheat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','swordsdance','closecombat','suckerpunch','mindblown','sunsteelstrike','sunnyday','raindance','takedown','bodyslam','thief','taunt','dig','rocktomb','rockslide','scaryface','shadowball','tackle','brickbreak','bulldoze','focusblast','solarbeam','heatwave'],
 stages:[
  {name:'Flamiaou',types:['feu'],base:st(45,65,40,60,40,70)},
  {name:'Matoufeu',types:['feu'],base:st(65,85,50,80,50,90)},
  {name:'Félinferno',types:['feu','tenebres'],base:st(95,115,90,80,90,60)}]},
{id:'otaquin',abilities:['Torrent','Voix Aquatique'],moveIds:['pound','watergun','disarmingvoice','bubblebeam','sing','aquatail','moonblast','sparklingaria','fleurcannon','hydropump','protect','swift','endure','hyperbeam','facade','surf','icebeam','moonlight','sleeptalk','rest','calmmind','dazzlinggleam','hypervoice','raindance','takedown','waterpulse','bodyslam','icywind','blizzard','doubleedge','waterfall','sunnyday','tackle','whirlpool','rockslide','rocktomb','bulldoze','brickbreak','thief','dig','focusblast','scaryface'],
 stages:[
  {name:'Otaquin',types:['eau'],base:st(50,54,54,66,56,40)},
  {name:'Otarlette',types:['eau'],base:st(60,69,69,91,81,50)},
  {name:'Oratoria',types:['eau','fee'],base:st(80,74,74,126,116,60)}]},
{id:'picassaut',abilities:['Regard Vif','Ramassage'],moveIds:['peck','growl','quickattack','pursuit','aircutter','drillpeck','airslash','beakblast','brickbreak','uturn','protect','swift','endure','hyperbeam','fly','facade','doubleedge','sleeptalk','rest','rockslide','stealthrock','raindance','sunnyday','takedown','thief','bodyslam','aerialace','agility','shadowball','tackle','thunderbolt','bulldoze','zenheadbutt','dig','solarbeam','scaryface','rocktomb','thunderwave','thunder','uproar','icebeam','doubleteam'],
 stages:[
  {name:'Picassaut',types:['normal','vol'],base:st(35,75,30,30,30,65)},
  {name:'Piclairon',types:['normal','vol'],base:st(55,85,50,40,50,75)},
  {name:'Bazoucan',types:['normal','vol'],base:st(80,120,75,75,75,60)}]},
{id:'manglouton',abilities:['Mâchouille','Adaptabilité'],moveIds:['tackle','leer','bite','superfang','crunch','hyperfang','stompingtantrum','takedown','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bodyslam','earthquake','rockslide','raindance','sunnyday','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice'],
 stages:[
  {name:'Manglouton',types:['normal'],base:st(48,70,30,30,30,45)},
  {name:'Argouste',types:['normal'],base:st(88,110,60,55,60,45)}]},
{id:'larvibule',abilities:['Essaim','Batterie'],moveIds:['stringshot','tackle','bite','thundershock','furycutter','leechlife','thunderbolt','plasmafists','zingzap','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','irondefense','flashcannon','discharge','raindance','sunnyday','takedown','bodyslam','thief','lightscreen','thunderwave','agility','doubleedge','thunder','dig','rockslide','brickbreak','rocktomb','bulldoze','solarbeam','aerialace','gigadrain','knockoff','scaryface','focusblast','swordsdance','shadowball'],
 stages:[
  {name:'Larvibule',types:['insecte'],base:st(47,62,45,55,45,46)},
  {name:'Chrysapile',types:['insecte','electrik'],base:st(57,82,95,55,75,36)},
  {name:'Lucanon',types:['insecte','electrik'],base:st(77,70,90,145,75,43)}]},
{id:'crabagarre',abilities:['Poing de Fer','Choc Nerveux','Hennissement Glacial'],moveIds:['bubble','leer','superpower','rocksmash','icepunch','closecombat','crabhammer','icehammer','firstimpression','brickbreak','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','stoneedge','raindance','bodyslam','takedown','sunnyday','focusblast','rockslide','rocktomb','bulldoze','dig','scaryface','thief','taunt','earthquake','zenheadbutt','tackle','poisonjab','icebeam','icywind','reversal','aerialace','blizzard','swordsdance'],
 stages:[
  {name:'Crabagarre',types:['combat'],base:st(47,82,57,42,47,63)},
  {name:'Crabominable',types:['combat','glace'],base:st(97,132,77,62,67,43)}]},
{id:'bombydou',abilities:['Écran Poudre','Voile Sucré'],moveIds:['stringshot','fairywind','absorb','drainingkiss','leechlife','pollenpuff','moonblast','dazzlinggleam','endeavor','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','psychic','gigadrain','sunnyday','raindance','takedown','tackle','bodyslam','thief','doubleedge','lightscreen','dig','rockslide','solarbeam','brickbreak','rocktomb','shadowball','bulldoze','aerialace','focusblast','swordsdance','knockoff','thunderwave','agility','calmmind','zenheadbutt','irondefense'],
 stages:[
  {name:'Bombydou',types:['insecte','fee'],base:st(40,45,40,55,40,84)},
  {name:'Rubombelle',types:['insecte','fee'],base:st(60,55,60,95,70,124)}]},
{id:'rocabot',abilities:['Regard Vif','Cran','Anti-Écran'],moveIds:['tackle','rockthrow','bite','accelerock','rockslide','crunch','stoneedge','throatchop','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','stealthrock','fireblast','earthquake','raindance','sunnyday','rocktomb','takedown','bulldoze','bodyslam','sandstorm','dig','curse','brickbreak','irondefense','thief','icebeam','ancientpower','scaryface','focusblast','ironhead','attract','blizzard','taunt','rockblast','thunderbolt','zenheadbutt'],
 stages:[
  {name:'Rocabot',types:['roche'],base:st(45,65,40,30,40,60)}],
 branches:[
  {name:'Lougaroc (Forme Diurne)',types:['roche'],base:st(75,115,65,55,65,112),abilities:['Regard Vif','Cran'],extraMoveIds:[]},
  {name:'Lougaroc (Forme Nocturne)',types:['roche'],base:st(75,115,75,55,75,82),abilities:['Regard Vif','Esprit Vital'],extraMoveIds:[]},
  {name:'Lougaroc (Forme Crépusculaire)',types:['roche'],base:st(75,117,65,55,65,110),abilities:['Griffe Solide'],extraMoveIds:[]}]},
{id:'vorasterie',abilities:['Point Poison','Sans Pitié','Corps Fatal'],moveIds:['tackle','poisonsting','toxicthread','poisonjab','sludgebomb','venomdrench','banefulbunker','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover','icebeam','surf','toxic','barbbarrage','corrosivegas','direclaw','shellsidearm','raindance','takedown','bodyslam','waterpulse','icywind','blizzard','doubleedge','sunnyday','waterfall','hydropump','watergun','thief','scaryface','whirlpool','bulldoze','rockslide','rocktomb','brickbreak','dig','mudshot'],
 stages:[
  {name:'Vorastérie',types:['poison','eau'],base:st(50,53,62,43,52,45)},
  {name:'Prédastérie',types:['poison','eau'],base:st(50,63,152,53,142,35)}]},
{id:'tiboudet',abilities:['Ténacité','Costaud'],moveIds:['tackle','stompingtantrum','bulldoze','highhorsepower','earthquake','superpower','icehammer','ironhead','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','rockslide','stoneedge','takedown','sunnyday','raindance','bodyslam','rocktomb','dig','sandstorm','stealthrock','brickbreak','mudslap','thief','mudshot','scaryface','focusblast','curse','icebeam','crunch','swordsdance','taunt','icywind','aerialace','blizzard','thunderbolt','zenheadbutt'],
 stages:[
  {name:'Tiboudet',types:['sol'],base:st(70,100,70,45,55,45)},
  {name:'Bourrinos',types:['sol'],base:st(100,125,100,55,85,35)}]},
{id:'araqua',abilities:['Écume','Absorbe-Eau','Hennissement Sinistre'],moveIds:['bubble','watergun','stringshot','bite','liquidation','crunch','hydropump','lunge','mirrorcoat','protect','swift','endure','hyperbeam','facade','surf','sleeptalk','rest','icebeam','leechlife','raindance','takedown','waterpulse','bodyslam','icywind','doubleedge','blizzard','sunnyday','waterfall','rockslide','thief','bulldoze','tackle','rocktomb','dig','brickbreak','whirlpool','scaryface','earthquake','agility','swordsdance','knockoff','mudshot'],
 stages:[
  {name:'Araqua',types:['eau','insecte'],base:st(38,40,52,40,72,27)},
  {name:'Tarenbulle',types:['eau','insecte'],base:st(68,70,92,50,132,42)}]},
{id:'mimantis',abilities:['Chlorophylle','Régénération','Voile Pastel'],moveIds:['leafage','growth','absorb','razorleaf','leafblade','synthesis','solarblade','leechlife','megahorn','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','gigadrain','appleacid','branchpoke','chloroblast','drumbeating','gravapple','jungleheal','snaptrap','sunnyday','raindance','takedown','bodyslam','doubleedge','tackle','bulletseed','bulldoze','rockslide','magicalleaf','thief','brickbreak','curse','dig','earthquake','lightscreen'],
 stages:[
  {name:'Mimantis',types:['plante'],base:st(40,55,35,50,35,35)},
  {name:'Floramantis',types:['plante'],base:st(70,105,90,80,90,45)}]},
{id:'spododo',abilities:['Illumination','Effet Spore'],moveIds:['absorb','moonlight','confuseray','sleeppowder','stunspore','moonblast','strengthsap','gigadrain','dazzlinggleam','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','psychic','sunnyday','raindance','takedown','bodyslam','tackle','doubleedge','lightscreen','swordsdance','magicalleaf','thief','rockslide','bulldoze','brickbreak','dig','focusblast','bulletseed','shadowball','zenheadbutt','knockoff','calmmind','charm','rocktomb','curse','reflect'],
 stages:[
  {name:'Spododo',types:['plante','fee'],base:st(40,35,55,65,75,15)},
  {name:'Lampignon',types:['plante','fee'],base:st(60,45,80,90,100,30)}]},
{id:'tritox',abilities:['Corrosion'],moveIds:['smog','ember','poisonsting','flamethrower','sludgebomb','fireblast','venomdrench','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','toxic','calmmind','sunnyday','takedown','raindance','bodyslam','doubleedge','thief','solarbeam','dig','rockslide','scaryface','rocktomb','shadowball','bulldoze','tackle','taunt','earthquake','brickbreak','poisonjab','focusblast','heatwave','curse','willowisp','zenheadbutt','overheat','firespin','swordsdance'],
 stages:[
  {name:'Tritox',types:['poison','feu'],base:st(48,44,40,71,40,77)},
  {name:'Malamandre',types:['poison','feu'],base:st(68,64,60,111,60,117)}]},
{id:'nounourson',abilities:['Pelage Moelleux','Longue Distance'],moveIds:['tackle','leer','lick','bite','crunch','closecombat','superpower','brutalswing','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','rockslide','raindance','sunnyday','takedown','bodyslam','thief','dig','brickbreak','bulldoze','rocktomb','focusblast','zenheadbutt','shadowball','earthquake','thunderbolt','taunt','aerialace','thunderpunch','scaryface','agility','knockoff','stoneedge','swordsdance','thunder','solarbeam'],
 stages:[
  {name:'Nounourson',types:['normal','combat'],base:st(70,75,50,45,50,50)},
  {name:'Chelours',types:['normal','combat'],base:st(120,125,80,55,60,60)}]},
{id:'croquine',abilities:['Feuille Garde','Voile Sucré'],moveIds:['growth','tackle','sweetscent','razorleaf','troppkick','magicalleaf','highjumpkick','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','synthesis','sunnyday','raindance','takedown','bodyslam','gigadrain','doubleedge','bulletseed','bulldoze','rockslide','thief','brickbreak','curse','dig','earthquake','lightscreen','scaryface','rocktomb','knockoff','zenheadbutt','focusblast','shadowball','aerialace','poisonjab','taunt','reflect'],
 stages:[
  {name:'Croquine',types:['plante'],base:st(42,30,38,30,38,32)},
  {name:'Candine',types:['plante'],base:st(52,40,48,40,48,62)},
  {name:'Sucreine',types:['plante'],base:st(72,120,98,50,98,72)}]},
{id:'guerilande',abilities:['Voile Aromatique'],moveIds:['absorb','fairywind','vinewhip','drainingkiss','moonblast','dazzlinggleam','gigadrain','synthesis','floralhealing','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','bodyslam','takedown','tackle','doubleedge','lightscreen','thief','rockslide','psychic','shadowball','dig','brickbreak','focusblast','rocktomb','thunderbolt','bulldoze','thunderwave','zenheadbutt','charm','taunt','reflect','icebeam','thunder','solarbeam'],
 stages:[
  {name:'Guérilande',types:['fee'],base:st(51,52,90,82,110,100)}]},
{id:'gouroutan',abilities:['Symbiose','Téléportation'],moveIds:['confusion','tackle','psybeam','instruct','psychic','futuresight','calmmind','recover','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','shadowball','focusblast','raindance','sunnyday','takedown','bodyslam','doubleedge','zenheadbutt','thunderwave','thief','thunderbolt','lightscreen','thunder','reflect','psychup','dig','rockslide','brickbreak','rocktomb','bulldoze','solarbeam','icebeam','agility','skillswap','trick','doubleteam','taunt'],
 stages:[
  {name:'Gouroutan',types:['normal','psy'],base:st(90,60,80,90,110,60)}]},
{id:'quartermac',abilities:['Réceptacle','Punk Rock'],moveIds:['tackle','rockthrow','closecombat','stoneedge','firstimpression','superpower','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','bulkup','rockslide','bodypress','coaching','meteorassault','noretreat','octolock','thunderouskick','triplearrows','victorydance','raindance','sunnyday','bodyslam','takedown','brickbreak','focusblast','rocktomb','dig','bulldoze','thief','taunt','zenheadbutt','scaryface','earthquake','poisonjab','knockoff','thunderpunch','swordsdance'],
 stages:[
  {name:'Quartermac',types:['combat'],base:st(100,120,90,40,60,80)}]},
{id:'sovkipou',abilities:['Sur-Régime'],moveIds:['tackle','leer','leechlife','liquidation','firstimpression','lunge','waterpulse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance','crunch','raindance','takedown','icebeam','bodyslam','surf','icywind','doubleedge','blizzard','sunnyday','waterfall','hydropump','watergun','rockslide','thief','bulldoze','rocktomb','dig','brickbreak','whirlpool','scaryface','earthquake','agility','knockoff','mudshot','focusblast','aerialace'],
 stages:[
  {name:'Sovkipou',types:['insecte','eau'],base:st(25,35,40,20,30,80)},
  {name:'Sarmuraï',types:['insecte','eau'],base:st(75,125,140,60,90,40)}]},
{id:'bacabouh',abilities:['Compression','Voile Sable'],moveIds:['tackle','harden','shadowclaw','earthquake','shadowball','bulldoze','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','curse','recover','raindance','sunnyday','bodyslam','takedown','rockslide','rocktomb','dig','thief','stoneedge','scaryface','brickbreak','doubleedge','sandstorm','mudslap','mudshot','focusblast','icywind','taunt','icebeam','psychic','knockoff','thunderbolt','zenheadbutt','crunch','ironhead','blizzard'],
 stages:[
  {name:'Bacabouh',types:['fantome','sol'],base:st(55,55,80,70,45,15)},
  {name:'Trépassable',types:['fantome','sol'],base:st(85,75,110,100,75,35)}]},
{id:'concombaffe',abilities:['Chair-Piège','Lucidité'],moveIds:['tackle','harden','recover','toxic','bodyslam','counter','mirrorcoat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','icebeam','waterpulse','surf','icywind','blizzard','waterfall','hydropump','watergun','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam'],
 stages:[
  {name:'Concombaffe',types:['eau'],base:st(55,60,130,30,130,5)}]},
// ---- Cas spéciaux : Silvallié, Plumeline, Lougaroc, Cosmog, Necrozma ----
{id:'type0',abilities:['Carapace Rigide','Déclic Fringale'],moveIds:['tackle','headbutt','crunch','ironhead','multiattack','shadowclaw','flamethrower','icebeam','thunderbolt','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','earthquake','psychic','raindance','sunnyday','takedown','bodyslam','thief','shadowball','dig','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','solarbeam','uproar','focusblast','blizzard','aerialace','attract','waterpulse','doubleteam'],
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
{id:'plumeline',abilities:['Danseur'],moveIds:['peck','growl','airslash','revelationdance','hurricane','flamethrower','firespin','fireblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn','recover','raindance','sunnyday','takedown','bodyslam','thief','shadowball','psychic','lightscreen','doubleedge','zenheadbutt','thunderwave','calmmind','taunt','agility','aerialace','reflect','thunderbolt','scaryface','tackle','solarbeam','rockslide','brickbreak','thunder','rocktomb','focusblast'],
 stages:[
  {name:'Plumeline (Style Flamenco)',types:['feu','vol'],base:st(75,70,70,98,70,93)}],
 branches:[
  {name:'Plumeline (Style Pom-Pom)',types:['electrik','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['thunderbolt','discharge','plasmafists']},
  {name:'Plumeline (Style Hula)',types:['psy','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['psychic','psybeam','calmmind']},
  {name:'Plumeline (Style Buyō)',types:['fantome','vol'],base:st(75,70,70,98,70,93),abilities:['Danseur'],extraMoveIds:['shadowball','moongeistbeam','shadowclaw']}]},
{id:'froussardine',abilities:['Banc de Poissons'],moveIds:['pound','watergun','sparklingaria','hydropump','surf','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover','raindance','takedown','waterpulse','icywind','bodyslam','blizzard','waterfall','doubleedge','whirlpool','bulldoze','rockslide','rocktomb','sunnyday','brickbreak','dig','thief','scaryface','tackle','earthquake','mudshot','muddywater','focusblast','zenheadbutt','weatherball','mudslap','bubblebeam','taunt','agility'],
 stages:[
  {name:'Froussardine',types:['eau'],base:st(45,140,130,140,135,30)}]},
{id:'meteno',abilities:['Corps Blindé'],moveIds:['tackle','rockthrow','stealthrock','accelerock','rockslide','stoneedge','ancientpower','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','earthquake','flashcannon','raindance','sunnyday','takedown','bodyslam','thief','rocktomb','aerialace','sandstorm','bulldoze','doubleedge','airslash','scaryface','agility','brickbreak','fly','taunt','dig','uturn','curse','attract','icebeam','focusblast','doubleteam','swagger','hurricane'],
 stages:[
  {name:'Météno',types:['roche','vol'],base:st(60,100,60,100,60,120)}]},
{id:'dodoala',abilities:['Comateux'],moveIds:['tackle','flail','rest','sleeptalk','bodyslam','crunch','superpower','shadowclaw','protect','swift','endure','hyperbeam','facade','doubleedge','raindance','sunnyday','takedown','thief','shadowball','dig','thunderbolt','bulldoze','thunder','rockslide','rocktomb','thunderwave','zenheadbutt','agility','brickbreak','icebeam','solarbeam','uproar','focusblast','earthquake','blizzard','aerialace','attract','waterpulse','doubleteam','hypervoice','swagger','scaryface'],
 stages:[
  {name:'Dodoala',types:['normal'],base:st(65,115,65,75,95,65)}]},
{id:'boumata',abilities:['Corps Blindé'],moveIds:['tackle','ember','shelltrap','dragonpulse','flashcannon','flamethrower','outrage','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','stoneedge','earthquake','sunnyday','takedown','bodyslam','raindance','doubleedge','rockslide','rocktomb','bulldoze','fireblast','scaryface','solarbeam','focusblast','dig','heatwave','brickbreak','zenheadbutt','thief','firespin','shadowball','willowisp','overheat','taunt','aerialace','sandstorm','shadowclaw','crunch'],
 stages:[
  {name:'Boumata',types:['feu','dragon'],base:st(60,78,135,91,85,36)}]},
{id:'togedemaru',abilities:['Pointes Piquantes'],moveIds:['tackle','thundershock','zingzap','discharge','ironhead','thunderbolt','spikes','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','flashcannon','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','doubleedge','rockslide','rocktomb','lightscreen','bulldoze','irondefense','brickbreak','dig','agility','sandstorm','thief','scaryface','earthquake','focusblast','taunt','stealthrock','thunderpunch','shadowball','reflect','stoneedge','curse'],
 stages:[
  {name:'Togedemaru',types:['electrik','acier'],base:st(65,98,63,40,73,96)}]},
{id:'mimiqui',abilities:['Fantaisie'],moveIds:['scratch','shadowclaw','playrough','suckerpunch','shadowball','moonblast','swordsdance','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','thief','psychic','tackle','calmmind','lightscreen','taunt','doubleedge','rockslide','thunderwave','brickbreak','focusblast','icywind','thunderbolt','rocktomb','zenheadbutt','scaryface','dig','curse','knockoff','reflect','dazzlinggleam','thunder','bulldoze','skillswap'],
 stages:[
  {name:'Mimiqui',types:['fantome','fee'],base:st(55,90,80,50,105,96)}]},
{id:'denticrisse',abilities:['Solide Roc'],moveIds:['bite','watergun','crunch','psychicfangs','waterpulse','icefang','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','surf','raindance','takedown','icebeam','bodyslam','icywind','sunnyday','blizzard','shadowball','doubleedge','zenheadbutt','lightscreen','waterfall','calmmind','hydropump','rockslide','rocktomb','thief','brickbreak','bulldoze','whirlpool','reflect','psychup','tackle','thunderwave','earthquake','scaryface','focusblast'],
 stages:[
  {name:'Denticrisse',types:['eau','psy'],base:st(68,105,70,70,70,92)}]},
{id:'draieul',abilities:['Rebond'],moveIds:['tackle','hypervoice','dragonpulse','dracometeor','psychic','thunderbolt','glare','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','doubleedge','shadowball','bulldoze','rockslide','thief','rocktomb','dig','thunder','earthquake','brickbreak','thunderwave','zenheadbutt','focusblast','scaryface','icebeam','agility','aerialace','solarbeam','flamethrower','waterpulse','blizzard','icywind','outrage','surf'],
 stages:[
  {name:'Draïeul',types:['normal','dragon'],base:st(78,60,85,135,91,36),forms:{
    drampanite:{name:'Méga-Draïeul',types:['normal','dragon'],base:st(78,85,110,160,116,36),abilities:['Furie Ultime']}
  }}]},
{id:'sinistrail',abilities:['Ballon'],moveIds:['tackle','constrict','anchorshot','leafblade','shadowball','gigadrain','ironhead','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','solarbeam','thief','swordsdance','curse','doubleedge','scaryface','rockslide','bulldoze','brickbreak','bulletseed','knockoff','zenheadbutt','magicalleaf','lightscreen','dig','focusblast','rocktomb','earthquake','psychic','taunt','calmmind','aerialace','icywind','reflect'],
 stages:[
  {name:'Sinistrail',types:['fantome','plante'],base:st(70,131,100,86,90,40)}]},
{id:'bebecaille',abilities:['Robustesse'],moveIds:['tackle','leer','dragonbreath','dragonclaw','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bodyslam','sunnyday','raindance','takedown','rockslide','focusblast','rocktomb','brickbreak','bulldoze','scaryface','earthquake','stoneedge','doubleedge','dig','zenheadbutt','aerialace','thief','taunt','outrage','poisonjab','thunderpunch','swordsdance','ironhead','shadowclaw','reversal','knockoff','lowkick','shadowball','dragonpulse','closecombat','bulkup'],
 stages:[
  {name:'Bébécaille',types:['dragon'],base:st(45,55,65,45,45,45)},
  {name:'Écaïd',types:['dragon','combat'],base:st(55,75,90,65,70,65)},
  {name:'Ékaïser',types:['dragon','combat'],base:st(75,110,125,100,105,85),abilities:['Robustesse','Solide Roc']}]},
{id:'vemini',abilities:['Éclosion'],moveIds:['poisonsting','pursuit','poisonjab','sludgebomb','dragonpulse','fellstinger','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','scaryface','rockslide','earthquake','rocktomb','bulldoze','doubleedge','thief','shadowball','brickbreak','focusblast','tackle','dig','outrage','stoneedge','toxic','aerialace','solarbeam','thunderbolt','zenheadbutt','taunt','icebeam','thunder','crunch','swordsdance','flamethrower'],
 stages:[
  {name:'Vémini',types:['poison'],base:st(67,73,67,73,67,73)},
  {name:'Mandrillon',types:['poison','dragon'],base:st(73,73,73,127,73,121)}]},
// ---- Ultra-Chimères + légendaires d'Alola + Meltan/Melmetal ----
{id:'zeroid',abilities:['Éclosion'],moveIds:['tackle','rockslide','poisonjab','sludgebomb','stoneedge','psychic','ancientpower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','rocktomb','bulldoze','earthquake','sandstorm','dig','thief','stealthrock','doubleedge','curse','scaryface','brickbreak','taunt','swordsdance','focusblast','shadowball','icebeam','knockoff','irondefense','attract','mudshot','blizzard','toxic','solarbeam','thunderbolt'],
 stages:[
  {name:'Zéroïd',types:['roche','poison'],base:st(109,53,47,127,131,103)}]},
{id:'mouscoto',abilities:['Éclosion'],moveIds:['tackle','superpower','closecombat','icepunch','thunderpunch','poweruppunch','leechlife','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','brickbreak','thief','rockslide','dig','rocktomb','doubleedge','focusblast','bulldoze','swordsdance','poisonjab','aerialace','stoneedge','knockoff','earthquake','scaryface','zenheadbutt','taunt','solarbeam','reversal','agility','gigadrain','lightscreen','lowkick','focuspunch'],
 stages:[
  {name:'Mouscoto',types:['insecte','combat'],base:st(107,139,139,53,53,79)}]},
{id:'cancrelove',abilities:['Éclosion'],moveIds:['tackle','highjumpkick','closecombat','icebeam','poweruppunch','lowkick','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','brickbreak','thief','rockslide','dig','rocktomb','doubleedge','focusblast','bulldoze','swordsdance','poisonjab','aerialace','stoneedge','knockoff','earthquake','scaryface','zenheadbutt','taunt','solarbeam','reversal','agility','gigadrain','thunderpunch','lightscreen','focuspunch','irondefense'],
 stages:[
  {name:'Cancrelove',types:['insecte','combat'],base:st(71,137,37,137,37,151)}]},
{id:'cablifere',abilities:['Éclosion'],moveIds:['thundershock','discharge','thunderbolt','thunder','shockwave','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','lightscreen','thief','doubleedge','agility','tackle','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','thunderpunch','taunt','shadowball','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff'],
 stages:[
  {name:'Câblifère',types:['electrik'],base:st(83,89,71,173,71,83)}]},
{id:'bamboiselle',abilities:['Éclosion'],moveIds:['tackle','flashcannon','ironhead','airslash','steelwing','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','aerialace','thief','doubleedge','agility','rockslide','scaryface','rocktomb','brickbreak','taunt','fly','sandstorm','bulldoze','uturn','earthquake','irondefense','shadowball','thunderwave','hurricane','focusblast','swordsdance','solarbeam','zenheadbutt','psychic','aircutter','stoneedge'],
 stages:[
  {name:'Bamboiselle',types:['acier','vol'],base:st(97,101,103,107,101,61)}]},
{id:'katagami',abilities:['Éclosion'],moveIds:['leafblade','airslash','closecombat','swordsdance','leechlife','ironhead','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','solarbeam','doubleedge','tackle','rockslide','gigadrain','bulldoze','rocktomb','brickbreak','earthquake','irondefense','scaryface','dig','curse','lightscreen','focusblast','bulletseed','thief','aerialace','zenheadbutt','sandstorm','knockoff','stealthrock','shadowball','magicalleaf','flashcannon'],
 stages:[
  {name:'Katagami',types:['plante','acier'],base:st(59,181,131,59,31,109)}]},
{id:'engloutyran',abilities:['Éclosion'],moveIds:['tackle','crunch','outrage','earthquake','darkestlariat','dragonclaw','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','scaryface','rocktomb','rockslide','thief','taunt','doubleedge','brickbreak','focusblast','shadowball','bulldoze','dig','aerialace','darkpulse','shadowclaw','stoneedge','zenheadbutt','icywind','dragonpulse','thunderwave','icebeam','leer','knockoff','sandstorm','swordsdance','flamethrower'],
 stages:[
  {name:'Engloutyran',types:['tenebres','dragon'],base:st(223,101,53,97,53,43)}]},
{id:'amaama',abilities:['Éclosion'],moveIds:['tackle','stoneedge','earthquake','ironhead','flashcannon','irondefense','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','rockslide','takedown','rocktomb','bodyslam','sandstorm','bulldoze','stealthrock','dig','doubleedge','brickbreak','curse','scaryface','ancientpower','focusblast','taunt','icebeam','swordsdance','thunderwave','thunderbolt','thief','attract','thunder','blizzard','rockblast','lightscreen','zenheadbutt','aerialace'],
 stages:[
  {name:'Ama-Ama',types:['roche','acier'],base:st(61,131,211,53,101,13)}]},
{id:'pierroteknik',abilities:['Éclosion'],moveIds:['ember','mindblown','shadowball','flamethrower','fireblast','shadowbone','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','thief','willowisp','doubleedge','solarbeam','rockslide','taunt','rocktomb','scaryface','dig','curse','tackle','bulldoze','zenheadbutt','psychic','brickbreak','earthquake','focusblast','heatwave','overheat','calmmind','firespin','stoneedge','darkpulse','confuseray','icywind'],
 stages:[
  {name:'Pierroteknik',types:['feu','fantome'],base:st(53,127,53,151,79,107)}]},
{id:'tokorico',abilities:['Électro Surge','Dégainage Rapide'],moveIds:['tackle','discharge','dazzlinggleam','thunderbolt','thunder','plasmafists','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn','raindance','sunnyday','takedown','bodyslam','lightscreen','thunderwave','thief','doubleedge','dig','rockslide','brickbreak','focusblast','psychic','rocktomb','shadowball','agility','charm','thunderpunch','bulldoze','reflect','calmmind','taunt','zenheadbutt','playrough','charge','scaryface','knockoff','sandstorm'],
 stages:[
  {name:'Tokorico',types:['electrik','fee'],base:st(70,115,85,95,75,130)}]},
{id:'tokopiyon',abilities:['Psycho Surge'],moveIds:['confusion','psychic','moonblast','dazzlinggleam','futuresight','calmmind','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','lightscreen','shadowball','bodyslam','reflect','zenheadbutt','takedown','thunderwave','skillswap','psychup','doubleedge','tackle','thunderbolt','thief','psybeam','trick','brickbreak','taunt','rockslide','safeguard','focusblast','rocktomb','charm','thunder','thunderpunch','solarbeam','icepunch','icebeam'],
 stages:[
  {name:'Tokopiyon',types:['psy','fee'],base:st(70,85,75,130,115,95)}]},
{id:'tokotoro',abilities:['Copeaux Surge'],moveIds:['tackle','megahorn','gigadrain','solarbeam','stompingtantrum','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','doubleedge','lightscreen','swordsdance','magicalleaf','thief','rockslide','bulldoze','brickbreak','dig','focusblast','bulletseed','shadowball','zenheadbutt','knockoff','calmmind','charm','rocktomb','curse','psychic','reflect','dazzlinggleam','earthquake','scaryface','aerialace','taunt'],
 stages:[
  {name:'Tokotoro',types:['plante','fee'],base:st(70,130,115,85,95,75)}]},
{id:'tokopisco',abilities:['Aqua Surge'],moveIds:['watergun','surf','hydropump','moonblast','naturesmadness','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','waterpulse','bodyslam','icywind','blizzard','doubleedge','waterfall','sunnyday','tackle','whirlpool','rockslide','rocktomb','bulldoze','brickbreak','thief','dig','focusblast','scaryface','earthquake','mudshot','lightscreen','zenheadbutt','shadowball','muddywater','taunt','psychic','knockoff','calmmind'],
 stages:[
  {name:'Tokopisco',types:['eau','fee'],base:st(70,75,115,95,130,85)}]},
{id:'cosmog',abilities:['Lucidité'],moveIds:['splash','teleport','cosmicpower','wish','protect','rest','sleeptalk','endure','hyperbeam','facade','raindance','sunnyday','shadowball','swift','psychic','bodyslam','takedown','calmmind','lightscreen','zenheadbutt','thunderwave','reflect','trick','thief','rockslide','skillswap','taunt','rocktomb','doubleedge','thunderbolt','brickbreak','tackle','psychup','scaryface','earthquake','psybeam','futuresight','imprison','bulldoze','sandstorm','thunder','irondefense'],
 stages:[
  {name:'Cosmog',types:['psy'],base:st(43,29,31,29,31,37)},
  {name:'Cosmovum',types:['psy'],base:st(43,29,131,29,131,37),abilities:['Fermeté']}],
 branches:[
  {name:'Solgaleo',types:['psy','acier'],base:st(137,137,107,113,89,97),abilities:['Intégral Métal'],extraMoveIds:['sunsteelstrike','firepunch','ironhead']},
  {name:'Lunala',types:['psy','fantome'],base:st(137,113,89,137,107,97),abilities:['Bouclier Ombre'],extraMoveIds:['moongeistbeam','shadowball','psychic']}]},
{id:'necrozma',abilities:['Armure Prisme'],moveIds:['tackle','confusion','psychic','photongeyser','prismaticlaser','shadowball','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','lightscreen','zenheadbutt','reflect','bodyslam','takedown','thunderwave','skillswap','psychup','futuresight','doubleedge','psybeam','trick','thief','thunderbolt','rockslide','brickbreak','taunt','rocktomb','safeguard','imprison','earthquake','solarbeam','icebeam','thunder','focusblast'],
 stages:[
  {name:'Necrozma',types:['psy'],base:st(97,107,101,127,89,79),forms:{
    prismeCouchant:{name:'Necrozma (Crinière du Couchant)',types:['psy','acier'],base:st(97,157,127,113,109,77),abilities:['Armure Prisme']},
    prismeAurore:{name:"Necrozma (Ailes de l'Aurore)",types:['psy','fantome'],base:st(97,113,109,157,127,77),abilities:['Armure Prisme']},
    ultranecrozium:{name:'Ultra-Necrozma',types:['psy','dragon'],base:st(97,167,97,167,97,129),abilities:['Force Neurale']}
  }}]},
{id:'magearna',abilities:["Cœur d'Âme"],moveIds:['tackle','flashcannon','fleurcannon','moonblast','ironhead','dazzlinggleam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','raindance','sunnyday','takedown','bodyslam','rockslide','doubleedge','rocktomb','irondefense','brickbreak','bulldoze','lightscreen','thunderwave','stealthrock','dig','sandstorm','focusblast','thunderbolt','shadowball','thief','taunt','earthquake','reflect','stoneedge','thunder','zenheadbutt','scaryface','solarbeam'],
 stages:[
  {name:'Magearna',types:['acier','fee'],base:st(80,95,115,130,115,65)}]},
{id:'marshadow',abilities:['Ombre Vive'],moveIds:['tackle','closecombat','spectralthief','shadowclaw','shadowball','icepunch','thunderpunch','firepunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','bodyslam','takedown','thief','brickbreak','focusblast','rocktomb','rockslide','taunt','scaryface','dig','bulldoze','zenheadbutt','doubleedge','knockoff','stoneedge','earthquake','poisonjab','curse','calmmind','psychic','swordsdance','reversal','aerialace','lowkick','icywind'],
 stages:[
  {name:'Marshadow',types:['combat','fantome'],base:st(90,125,80,90,90,125)}]},
{id:'zeraora',abilities:['Statik'],moveIds:['tackle','plasmafists','zingzap','thunderpunch','closecombat','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','takedown','sunnyday','bodyslam','thunderwave','thunder','lightscreen','thief','doubleedge','agility','dig','rockslide','rocktomb','bulldoze','brickbreak','focusblast','charge','scaryface','taunt','shadowball','earthquake','zenheadbutt','curse','reflect','sandstorm','mudslap','quickattack','knockoff'],
 stages:[
  {name:'Zeraora',types:['electrik'],base:st(88,112,75,102,80,143)}]},
{id:'meltan',abilities:['Ferraille'],moveIds:['tackle','ironhead','flashcannon','irondefense','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rockslide','rocktomb','doubleedge','bulldoze','brickbreak','earthquake','sandstorm','stealthrock','dig','scaryface','thunderwave','stoneedge','focusblast','taunt','thief','shadowball','swordsdance','zenheadbutt','thunder','curse','aerialace','lightscreen','solarbeam','icebeam','agility','reflect'],
 stages:[
  {name:'Meltan',types:['acier'],base:st(46,65,65,55,35,34)},
  {name:'Melmetal',types:['acier'],base:st(135,143,143,80,65,34),abilities:['Ferraille']}]},
// ---- Formes d'Alola (lignées séparées et draftables) ----
{id:'rattataalola',abilities:['Gloutonnerie','Isograisse'],moveIds:['tackle','tailwhip','bite','crunch','throatchop','darkestlariat','superfang','hyperfang','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','shadowball','dig','rocktomb','rockslide','taunt','brickbreak','bulldoze','thunderbolt','zenheadbutt','scaryface','thunderwave','focusblast','aerialace','icebeam','thunder','knockoff','agility','swagger','darkpulse','swordsdance','blizzard'],
 stages:[
  {name:"Rattata d'Alola",types:['tenebres','normal'],base:st(30,56,35,25,35,72)},
  {name:"Rattatac d'Alola",types:['tenebres','normal'],base:st(75,71,70,40,80,77)}]},
{id:'sabelettealola',abilities:['Cape Neige','Glisse Neige'],moveIds:['scratch','powdersnow','icywind','iciclespear','icehammer','icebeam','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','takedown','bodyslam','sunnyday','rockslide','rocktomb','doubleedge','bulldoze','irondefense','tackle','brickbreak','earthquake','scaryface','sandstorm','dig','focusblast','stealthrock','taunt','lightscreen','shadowball','stoneedge','thief','curse','thunderwave','waterpulse','reflect'],
 stages:[
  {name:"Sabelette d'Alola",types:['glace','acier'],base:st(50,75,90,10,35,40)},
  {name:"Sablaireau d'Alola",types:['glace','acier'],base:st(75,100,120,25,65,65)}]},
{id:'goupixalola',abilities:['Cape Neige','Rideau Neige'],moveIds:['tackle','powdersnow','icywind','auroraveil','icebeam','moonblast','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard','raindance','bodyslam','takedown','sunnyday','lightscreen','doubleedge','rockslide','thief','brickbreak','focusblast','shadowball','rocktomb','psychic','bulldoze','calmmind','waterpulse','dig','reflect','taunt','scaryface','thunderbolt','charm','earthquake','zenheadbutt','thunderwave','icepunch','thunder'],
 stages:[
  {name:"Goupix d'Alola",types:['glace'],base:st(38,41,40,50,65,65)},
  {name:"Feunard d'Alola",types:['glace','fee'],base:st(73,67,75,81,100,109)}]},
{id:'taupiqueuralola',abilities:['Voile Sable','Emmêlement'],moveIds:['scratch','mudslap','metalclaw','mudshot','dig','earthquake','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','takedown','sunnyday','raindance','rockslide','bodyslam','rocktomb','bulldoze','sandstorm','stealthrock','stoneedge','doubleedge','brickbreak','tackle','irondefense','scaryface','focusblast','curse','thief','swordsdance','taunt','icebeam','aerialace','thunderbolt','crunch','thunderwave','thunder','shadowclaw'],
 stages:[
  {name:"Taupiqueur d'Alola",types:['sol','acier'],base:st(10,55,30,35,45,90)},
  {name:"Triopikeur d'Alola",types:['sol','acier'],base:st(35,100,60,50,70,110)}]},
{id:'miaoussalola',abilities:['Ramassage','Mâchouille'],moveIds:['scratch','bite','crunch','darkestlariat','throatchop','suckerpunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','taunt','scaryface','rocktomb','shadowball','rockslide','dig','darkpulse','brickbreak','tackle','knockoff','focusblast','bulldoze','aerialace','swordsdance','leer','zenheadbutt','icywind','curse','earthquake','thunderwave','icebeam','shadowclaw','calmmind'],
 stages:[
  {name:"Miaouss d'Alola",types:['tenebres'],base:st(40,35,35,50,40,90)},
  {name:"Persian d'Alola",types:['tenebres'],base:st(65,60,60,75,65,115)}]},
{id:'racailloualola',abilities:['Magnétisme','Fermeté'],moveIds:['tackle','rockthrow','thundershock','rockslide','discharge','stoneedge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','bodyslam','rocktomb','bulldoze','sandstorm','dig','earthquake','thunder','stealthrock','thunderwave','doubleedge','lightscreen','thief','brickbreak','curse','focusblast','scaryface','agility','irondefense','taunt','attract','ancientpower','thunderpunch','icebeam','mudslap','ironhead'],
 stages:[
  {name:"Racaillou d'Alola",types:['roche','electrik'],base:st(40,80,100,30,30,20)},
  {name:"Gravalanch d'Alola",types:['roche','electrik'],base:st(55,95,115,45,45,35)},
  {name:"Grolem d'Alola",types:['roche','electrik'],base:st(80,120,130,55,65,45)}]},
{id:'tadmorvalola',abilities:['Point Poison','Gloutonnerie'],moveIds:['pound','poisongas','sludge','crunch','darkpulse','sludgebomb','poisonjab','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','sunnyday','takedown','thief','bodyslam','scaryface','taunt','shadowball','doubleedge','dig','rocktomb','knockoff','rockslide','brickbreak','tackle','swordsdance','focusblast','bulldoze','toxic','curse','aerialace','leer','earthquake','zenheadbutt','icywind','spite','gigadrain','bite'],
 stages:[
  {name:"Tadmorv d'Alola",types:['poison','tenebres'],base:st(80,80,50,40,50,25)},
  {name:"Grotadmorv d'Alola",types:['poison','tenebres'],base:st(105,105,75,65,100,50)}]},
{id:'noadkokoalola',abilities:['Farfouille'],moveIds:['absorb','leafblade','dragonpulse','dracometeor','solarbeam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','takedown','raindance','bodyslam','bulldoze','doubleedge','rockslide','gigadrain','scaryface','earthquake','tackle','swordsdance','rocktomb','brickbreak','focusblast','aerialace','zenheadbutt','dig','outrage','bulletseed','lightscreen','thief','shadowball','magicalleaf','curse','stoneedge','knockoff','shadowclaw','sandstorm'],
 stages:[
  {name:"Noadkoko d'Alola",types:['plante','dragon'],base:st(95,105,85,125,75,45)}]},
{id:'ossatueuralola',abilities:['Corps Maudit'],moveIds:['leer','shadowbone','flamethrower','shadowball','fireblast','willowisp','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','sunnyday','raindance','takedown','bodyslam','thief','doubleedge','solarbeam','rockslide','taunt','rocktomb','scaryface','dig','curse','tackle','bulldoze','zenheadbutt','psychic','brickbreak','earthquake','focusblast','heatwave','overheat','calmmind','firespin','stoneedge','darkpulse','confuseray','icywind','knockoff'],
 stages:[
  {name:"Ossatueur d'Alola",types:['feu','fantome'],base:st(60,80,110,50,80,45)}]},
{id:'raichualola',abilities:['Surfeur Voltaïque'],moveIds:['thundershock','psybeam','thunderbolt','psychic','plasmafists','zingzap','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','raindance','lightscreen','sunnyday','thunderwave','takedown','shadowball','bodyslam','reflect','zenheadbutt','calmmind','thunder','thief','doubleedge','skillswap','psychup','tackle','agility','thunderpunch','futuresight','brickbreak','taunt','rockslide','trick','rocktomb','confusion','focusblast','bulldoze','dig'],
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
