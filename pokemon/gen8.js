/* ==== SOMMAIRE ====
   Pokédex n°810 à 898 (région de Galar) + 14 lignées de Formes de Galar + contenu DLC. Repères
   (lignes approximatives) :
   - L.3-148   : Starters, lignées classiques de Galar, fossiles combinés
   - L.149-188 : Légendaires de Galar (Zacian/Zamazenta/Éthernatos) + DLC (Wushours/Shifours,
     Zarude, Régieleki, Régidrago, Blizzeval/Spectreval, Sylveroy)
   - L.189-241 : Formes de Galar (lignées séparées, réutilisent le n° de Pokédex national)
   - L.242-fin : DEX_NUMBERS_GEN8 (numéros de Pokédex, utilisés pour résoudre les sprites)
==== */
const LINES_GEN8 = [
{id:'ouistempo',abilities:['Engrais','Copeaux Surge'],moveIds:['scratch','growl','vinewhip','branchpoke','razorleaf','leafblade','drumbeating','synthesis','grassyglide','solarblade','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','swordsdance','closecombat'],
 stages:[
  {name:'Ouistempo',types:['plante'],base:st(50,65,50,40,40,65)},
  {name:'Badabouin',types:['plante'],base:st(70,85,70,55,60,80)},
  {name:'Gorythmic',types:['plante'],base:st(100,125,90,60,70,85)}]},
{id:'flambino',abilities:['Brasier','Libéro'],moveIds:['scratch','growl','ember','flamewheel','doublekick','pyroball','flamethrower','fireblast','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest','closecombat','suckerpunch'],
 stages:[
  {name:'Flambino',types:['feu'],base:st(50,71,40,40,40,69)},
  {name:'Lapyro',types:['feu'],base:st(65,86,60,55,60,94)},
  {name:'Pyrobut',types:['feu'],base:st(80,116,75,65,75,119)}]},
{id:'larmeleon',abilities:['Torrent','Sniper'],moveIds:['pound','watergun','disarmingvoice','snipeshot','icebeam','surf','hydropump','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','dazzlinggleam'],
 stages:[
  {name:'Larméléon',types:['eau'],base:st(50,40,40,70,40,70)},
  {name:'Arrozard',types:['eau'],base:st(65,60,55,95,55,90)},
  {name:'Lézargus',types:['eau'],base:st(70,85,65,125,65,120)}]},
{id:'rongourmand',abilities:['Gloutonnerie','Mûrissement'],moveIds:['tackle','bite','superfang','stuffcheeks','bodyslam','crunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Rongourmand',types:['normal'],base:st(70,55,55,35,35,25)},
  {name:'Rongrigou',types:['normal'],base:st(120,95,95,55,75,20)}]},
{id:'minisange',abilities:['Regard Vif','Armure Miroir'],moveIds:['peck','growl','quickattack','pursuit','beakblast','dualwingbeat','ironhead','flashcannon','protect','swift','endure','hyperbeam','fly','facade','sleeptalk','rest'],
 stages:[
  {name:'Minisange',types:['vol'],base:st(38,47,35,33,35,57)},
  {name:'Bleuseille',types:['vol'],base:st(68,67,55,43,55,77)},
  {name:'Corvaillus',types:['vol','acier'],base:st(98,87,105,53,85,67)}]},
{id:'larvadar',abilities:['Écran Poudre','Farfouille'],moveIds:['tackle','confusion','leechlife','psybeam','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','futuresight'],
 stages:[
  {name:'Larvadar',types:['insecte'],base:st(25,20,20,25,45,45)},
  {name:'Coléodôme',types:['insecte','psy'],base:st(50,35,80,50,90,30)},
  {name:'Astronelle',types:['insecte','psy'],base:st(60,45,110,80,120,90)}]},
{id:'goupilou',abilities:['Fuite','Farceur'],moveIds:['tackle','pursuit','bite','crunch','darkestlariat','throatchop','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Goupilou',types:['tenebres'],base:st(40,28,28,47,52,50)},
  {name:'Roublenard',types:['tenebres'],base:st(70,58,58,87,92,90)}]},
{id:'tournicoton',abilities:["Cœur Soin",'Chute Cotonneuse'],moveIds:['absorb','fairywind','cottonspore','drainingkiss','gigadrain','dazzlinggleam','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest','synthesis'],
 stages:[
  {name:'Tournicoton',types:['plante'],base:st(40,40,60,40,60,10)},
  {name:'Blancoton',types:['plante'],base:st(60,50,90,80,120,60)}]},
{id:'moumouton',abilities:['Fourrure','Costaud'],moveIds:['tackle','headbutt','bodyslam','doubleedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup'],
 stages:[
  {name:'Moumouton',types:['normal'],base:st(42,40,55,40,45,48)},
  {name:'Moumouflon',types:['normal'],base:st(72,80,100,60,90,88)}]},
{id:'khelocrok',abilities:['Mâchouille','Solide Roc'],moveIds:['tackle','bite','liquidation','crunch','wavecrash','stoneedge','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest'],
 stages:[
  {name:'Khélocrok',types:['eau'],base:st(50,64,50,38,38,44)},
  {name:'Torgamord',types:['eau','roche'],base:st(90,115,90,48,68,74)}]},
{id:'voltoutou',abilities:['Ramassage','Régénération'],moveIds:['tackle','thundershock','bite','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Voltoutou',types:['electrik'],base:st(59,45,50,40,50,26)},
  {name:'Fulgudog',types:['electrik'],base:st(69,90,60,90,60,121)}]},
{id:'charbi',abilities:['Solide Roc','Ferraille'],moveIds:['tackle','rockthrow','ember','stealthrock','rockslide','stoneedge','flamethrower','fireblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Charbi',types:['roche'],base:st(30,40,50,40,50,30)},
  {name:'Wagomine',types:['roche','feu'],base:st(80,60,90,60,70,50)},
  {name:'Monthracite',types:['roche','feu'],base:st(110,80,120,80,90,30)}]},
{id:'verpom',abilities:['Feuille Garde','Mûrissement'],moveIds:['tackle','appleacid','gravapple','leafblade','drumbeating','dragonpulse','protect','swift','endure','hyperbeam','solarbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Verpom',types:['plante','dragon'],base:st(40,40,80,40,40,20)},
  {name:'Pomdrapi',types:['plante','dragon'],base:st(70,110,80,95,60,70)},
  {name:'Dratatin',types:['plante','dragon'],base:st(110,85,80,100,80,30)}]},
{id:'dunaja',abilities:['Voile Sable','Costaud'],moveIds:['tackle','glare','bulldoze','headlongrush','earthquake','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Dunaja',types:['sol'],base:st(52,57,75,35,50,46)},
  {name:'Dunaconda',types:['sol'],base:st(72,107,125,65,70,71)}]},
{id:'nigosier',abilities:['Dégobage'],moveIds:['watergun','peck','surf','hurricane','icebeam','hydropump','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','uturn'],
 stages:[
  {name:'Nigosier',types:['vol','eau'],base:st(70,85,55,85,95,85)}]},
{id:'embrochet',abilities:['Cran','Poing Furtif'],moveIds:['tackle','watergun','fishiousrend','liquidation','crunch','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest'],
 stages:[
  {name:'Embrochet',types:['eau'],base:st(41,63,40,40,30,66)},
  {name:'Hastacuda',types:['eau'],base:st(61,123,60,60,50,136)}]},
{id:'toxizap',abilities:['Point Poison','Punk Rock'],moveIds:['tackle','poisonsting','overdrive','sludgebomb','poisonjab','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Toxizap',types:['electrik','poison'],base:st(40,38,35,54,35,40)},
  {name:'Salarsen',types:['electrik','poison'],base:st(75,98,70,114,70,75)}]},
{id:'grillepattes',abilities:['Corps Ardent','Turbo Vapeur'],moveIds:['tackle','ember','lunge','firelash','flamethrower','leechlife','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Grillepattes',types:['feu','insecte'],base:st(50,65,45,50,50,45)},
  {name:'Scolocendre',types:['feu','insecte'],base:st(100,115,65,90,90,65)}]},
{id:'poulpaf',abilities:['Regard Vif','Poing Furtif'],moveIds:['pound','watergun','closecombat','liquidation','brickbreak','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest'],
 stages:[
  {name:'Poulpaf',types:['combat'],base:st(50,68,60,50,50,32)},
  {name:'Krakos',types:['combat'],base:st(80,118,90,70,80,42)}]},
{id:'theffroi',abilities:['Lévitation','Corps Maudit'],moveIds:['confuseray','astonish','shadowball','strengthsap','stuffcheeks','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Théffroi',types:['fantome'],base:st(40,45,45,74,54,50)},
  {name:'Polthégeist',types:['fantome'],base:st(60,65,65,134,114,70)}]},
{id:'bibichut',abilities:['Synchro','Voile Aromatique'],moveIds:['tackle','disarmingvoice','psybeam','magicpowder','psychic','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Bibichut',types:['psy'],base:st(42,30,45,56,53,39)},
  {name:'Chapotus',types:['psy'],base:st(57,40,65,86,73,49)},
  {name:'Sorcilence',types:['psy','fee'],base:st(57,90,95,136,103,29)}]},
{id:'grimalin',abilities:['Farceur','Voile Aromatique'],moveIds:['tackle','faketears','spiritbreak','playrough','darkestlariat','throatchop','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Grimalin',types:['tenebres','fee'],base:st(45,45,30,55,40,50)},
  {name:'Fourbelin',types:['tenebres','fee'],base:st(65,60,45,75,55,70)},
  {name:'Angoliath',types:['tenebres','fee'],base:st(95,120,65,95,75,60)}]},
{id:'cremy',abilities:["Cœur Soin",'Mûrissement'],moveIds:['tackle','fairywind','drainingkiss','decorate','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Crèmy',types:['fee'],base:st(45,40,40,50,61,34)},
  {name:'Charmilly',types:['fee'],base:st(65,60,75,110,121,64)}]},
{id:'hexadron',abilities:['Cran'],moveIds:['tackle','triplearrows','thunderouskick','closecombat','victorydance','noretreat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Hexadron',types:['combat'],base:st(65,100,100,70,60,75)}]},
{id:'wattapik',abilities:['Statik'],moveIds:['tackle','thundershock','risingvoltage','thundercage','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Wattapik',types:['electrik'],base:st(48,101,95,91,85,15)}]},
{id:'frissonille',abilities:['Cape Neige','Effet Spore'],moveIds:['tackle','powdersnow','leechlife','icebeam','gigadrain','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Frissonille',types:['glace','insecte'],base:st(30,25,35,45,30,20)},
  {name:'Beldeneige',types:['glace','insecte'],base:st(70,65,60,125,90,65)}]},
{id:'dolman',abilities:['Solide Roc'],moveIds:['tackle','rockthrow','stealthrock','stoneaxe','rockslide','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Dolman',types:['roche'],base:st(100,125,135,20,20,70)}]},
{id:'bekaglacon',abilities:['Tête de Gel'],moveIds:['tackle','powdersnow','icehammer','mountaingale','icebeam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Bekaglaçon',types:['glace'],base:st(75,80,110,65,90,50)}]},
{id:'wimessir',abilities:['Synchro','Téléportation'],moveIds:['confusion','psybeam','expandingforce','psychic','futuresight','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Wimessir',types:['psy','normal'],base:st(60,65,55,105,95,95)}]},
{id:'morpeko',abilities:['Déclic Fringale'],moveIds:['tackle','thundershock','ragingfury','discharge','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Morpeko',types:['electrik','tenebres'],base:st(58,95,58,70,58,97)}]},
{id:'charibari',abilities:["Nerfs d'Acier",'Costaud'],moveIds:['tackle','ironhead','headlongrush','steelroller','earthquake','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Charibari',types:['acier'],base:st(72,80,49,40,49,40)},
  {name:'Pachyradjah',types:['acier'],base:st(122,130,69,80,69,30)}]},
{id:'galvagon',abilities:['Statik'],moveIds:['tackle','thundershock','dragondarts','wildboltstorm','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Galvagon',types:['electrik','dragon'],base:st(90,100,90,80,70,75)}]},
{id:'galvagla',abilities:['Cape Neige'],moveIds:['tackle','powdersnow','dragondarts','icebeam','thunderbolt','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Galvagla',types:['electrik','glace'],base:st(90,100,90,90,80,55)}]},
{id:'hydragon',abilities:['Voix Aquatique'],moveIds:['tackle','watergun','dragondarts','liquidation','dragonpulse','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest'],
 stages:[
  {name:'Hydragon',types:['eau','dragon'],base:st(90,90,100,70,80,75)}]},
{id:'hydragla',abilities:['Cape Neige'],moveIds:['tackle','watergun','dragondarts','icebeam','liquidation','protect','swift','endure','hyperbeam','surf','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Hydragla',types:['eau','glace'],base:st(90,90,100,80,90,55)}]},
{id:'duralugon',abilities:['Ferraille','Solide Roc'],moveIds:['tackle','ironhead','steelbeam','dragonpulse','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Duralugon',types:['acier','dragon'],base:st(70,95,115,120,50,85)}]},
{id:'fantyrm',abilities:['Corps Maudit','Infiltration'],moveIds:['dragonbreath','astonish','dracometeor','shadowball','dragonpulse','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Fantyrm',types:['dragon','fantome'],base:st(28,60,30,40,30,82)},
  {name:'Dispareptil',types:['dragon','fantome'],base:st(68,80,50,60,50,102)},
  {name:'Lanssorien',types:['dragon','fantome'],base:st(88,120,75,100,75,142)}]},
// ---- Légendaires de Galar + contenu DLC ----
{id:'zacian',abilities:['Regard Vif'],moveIds:['tackle','playrough','closecombat','ironhead','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind','swordsdance'],
 stages:[
  {name:'Zacian',types:['fee'],base:st(92,120,115,80,115,138),forms:{
    epeeRouillee:{name:'Zacian (Épée Sacrée)',types:['fee','acier'],base:st(92,150,115,80,115,148),abilities:['Regard Vif']}
  }}]},
{id:'zamazenta',abilities:['Regard Vif'],moveIds:['tackle','closecombat','ironhead','bodypress','stoneedge','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup','swordsdance'],
 stages:[
  {name:'Zamazenta',types:['combat'],base:st(92,120,115,80,115,138),forms:{
    bouclierRouille:{name:'Zamazenta (Bouclier Royal)',types:['combat','acier'],base:st(92,120,140,80,140,128),abilities:['Regard Vif']}
  }}]},
{id:'ethernatos',abilities:['Attention'],moveIds:['tackle','sludgebomb','dynamaxcannon','dragonpulse','poisonjab','flamethrower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','recover'],
 stages:[
  {name:'Éthernatos',types:['poison','dragon'],base:st(140,85,95,145,95,130)}]},
{id:'wushours',abilities:['Poing Furtif'],moveIds:['tackle','closecombat','thunderouskick','triplearrows','bodypress','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup'],
 stages:[
  {name:'Wushours',types:['combat'],base:st(60,90,60,53,50,72)}],
 branches:[
  {name:'Shifours (Style Farouche)',types:['combat','tenebres'],base:st(100,130,100,63,60,97),abilities:['Poing Furtif'],extraMoveIds:['wickedblow','darkestlariat','suckerpunch']},
  {name:'Shifours (Style Aqua)',types:['combat','eau'],base:st(100,130,100,63,60,97),abilities:['Poing Furtif'],extraMoveIds:['surgingstrikes','liquidation','wavecrash']}]},
{id:'zarude',abilities:['Farouche'],moveIds:['tackle','crunch','darkestlariat','leafblade','gigadrain','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance'],
 stages:[
  {name:'Zarude',types:['tenebres','plante'],base:st(105,120,105,70,95,105)}]},
{id:'regieleki',abilities:['Statik'],moveIds:['tackle','thundershock','risingvoltage','wildboltstorm','thunderbolt','thunder','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Régieleki',types:['electrik'],base:st(80,100,50,100,50,200)}]},
{id:'regidrago',abilities:['Solide Roc'],moveIds:['tackle','dragonbreath','dragondarts','dragonenergy','dragonpulse','outrage','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Régidrago',types:['dragon'],base:st(200,100,50,100,50,80)}]},
{id:'blizzeval',abilities:['Cran'],moveIds:['tackle','icehammer','mountaingale','icebeam','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Blizzeval',types:['glace'],base:st(100,145,130,65,110,30)}]},
{id:'spectreval',abilities:['Lévitation'],moveIds:['tackle','shadowball','poltergeist','freezingglare','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Spectreval',types:['fantome'],base:st(100,65,60,145,80,130)}]},
{id:'sylveroy',abilities:['Synchro'],moveIds:['tackle','confusion','leafage','psychic','gigadrain','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Sylveroy',types:['psy','plante'],base:st(100,80,80,80,80,80),forms:{
    renePartageGlace:{name:'Sylveroy (Monture Glace)',types:['psy','glace'],base:st(100,165,150,85,130,50),abilities:['Cran']},
    renePartageSpectre:{name:'Sylveroy (Monture Spectre)',types:['psy','fantome'],base:st(100,85,80,165,100,150),abilities:['Lévitation']}
  }}]},
// ---- Formes de Galar (lignées séparées et draftables) ----
{id:'miaoussgalar',abilities:['Ramassage','Mâchouille'],moveIds:['scratch','bite','ironhead','steelroller','crunch','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Miaouss de Galar',types:['acier'],base:st(50,65,55,40,40,40)},
  {name:'Berserkatt',types:['acier'],base:st(70,110,100,50,60,50)}]},
{id:'ponytagalar',abilities:['Regard Vif'],moveIds:['tackle','psybeam','mysticalpower','psychic','moonblast','dazzlinggleam','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Ponyta de Galar',types:['psy'],base:st(50,85,55,65,65,90)},
  {name:'Galopa de Galar',types:['psy','fee'],base:st(65,100,70,80,80,105)}]},
{id:'ramolossgalar',abilities:['Synchro'],moveIds:['tackle','psybeam','poisonjab','sludgebomb','psychic','shellsidearm','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Ramoloss de Galar',types:['psy'],base:st(90,65,65,40,40,15)},
  {name:'Flagadoss de Galar',types:['poison','psy'],base:st(95,100,95,100,70,30)}]},
{id:'canartichogalar',abilities:['Poing Furtif'],moveIds:['peck','triplearrows','thunderouskick','closecombat','poltergeist','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','swordsdance'],
 stages:[
  {name:'Canarticho de Galar',types:['combat'],base:st(52,95,55,58,62,55)},
  {name:'Palarticho',types:['combat'],base:st(62,135,95,68,82,65)}]},
{id:'smogogogalar',abilities:['Point Poison'],moveIds:['smog','poisongas','sludgebomb','strangesteam','dazzlinggleam','moonblast','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Smogogo de Galar',types:['poison','fee'],base:st(65,90,120,85,70,60)}]},
{id:'mmimegalar',abilities:['Cape Neige'],moveIds:['tackle','powdersnow','psybeam','icebeam','psychic','mysticalpower','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'M. Mime de Galar',types:['glace','psy'],base:st(50,65,65,90,90,100)},
  {name:'M. Glaquette',types:['glace','psy'],base:st(80,85,75,110,100,70)}]},
{id:'artikodingalar',abilities:['Regard Vif'],moveIds:['tackle','psybeam','freezingglare','hurricane','psychic','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','calmmind'],
 stages:[
  {name:'Artikodin de Galar',types:['psy','vol'],base:st(90,85,85,125,100,95)}]},
{id:'electhorgalar',abilities:['Regard Vif'],moveIds:['tackle','thunderouskick','closecombat','triplearrows','hurricane','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','bulkup'],
 stages:[
  {name:'Électhor de Galar',types:['combat','vol'],base:st(90,125,90,85,90,100)}]},
{id:'sulfuragalar',abilities:['Regard Vif'],moveIds:['tackle','darkestlariat','throatchop','hurricane','crunch','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Sulfura de Galar',types:['tenebres','vol'],base:st(90,85,90,100,125,90)}]},
{id:'corayongalar',abilities:['Lévitation'],moveIds:['tackle','astonish','shadowball','ancientpower','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Corayon de Galar',types:['fantome'],base:st(60,55,100,65,100,30)},
  {name:'Corayôme',types:['fantome'],base:st(60,95,50,145,130,30)}]},
{id:'zigzatongalar',abilities:['Ramassage','Cran'],moveIds:['tackle','crunch','darkestlariat','throatchop','closecombat','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Zigzaton de Galar',types:['tenebres','normal'],base:st(38,30,41,30,41,60)},
  {name:'Linéon de Galar',types:['tenebres','normal'],base:st(78,70,61,50,61,100)},
  {name:'Ixon',types:['tenebres','normal'],base:st(93,90,101,60,81,95)}]},
{id:'darumangalar',abilities:['Cran'],moveIds:['tackle','icehammer','iciclespear','icebeam','closecombat','protect','swift','endure','hyperbeam','facade','sleeptalk','rest','blizzard'],
 stages:[
  {name:'Daruman de Galar',types:['glace'],base:st(70,90,45,15,45,50)},
  {name:'Darumacho de Galar',types:['glace'],base:st(105,140,55,30,55,95)}]},
{id:'yamaskgalar',abilities:['Corps Maudit'],moveIds:['tackle','shadowbone','earthquake','shadowball','stealthrock','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Tutafeh de Galar',types:['sol','fantome'],base:st(38,55,85,30,65,30)},
  {name:'Tutétékri',types:['sol','fantome'],base:st(58,95,145,50,105,30)}]},
{id:'stunfiskgalar',abilities:['Voile Sable'],moveIds:['tackle','mudshot','steelroller','earthquake','ironhead','flashcannon','protect','swift','endure','hyperbeam','facade','sleeptalk','rest'],
 stages:[
  {name:'Stunfisk de Galar',types:['sol','acier'],base:st(109,81,99,66,84,32)}]},
];
const DEX_NUMBERS_GEN8 = {
  'Ouistempo':810,'Badabouin':811,'Gorythmic':812,
  'Flambino':813,'Lapyro':814,'Pyrobut':815,
  'Larméléon':816,'Arrozard':817,'Lézargus':818,
  'Rongourmand':819,'Rongrigou':820,
  'Minisange':821,'Bleuseille':822,'Corvaillus':823,
  'Larvadar':824,'Coléodôme':825,'Astronelle':826,
  'Goupilou':827,'Roublenard':828,
  'Tournicoton':829,'Blancoton':830,
  'Moumouton':831,'Moumouflon':832,
  'Khélocrok':833,'Torgamord':834,
  'Voltoutou':835,'Fulgudog':836,
  'Charbi':837,'Wagomine':838,'Monthracite':839,
  'Verpom':840,'Pomdrapi':841,'Dratatin':842,
  'Dunaja':843,'Dunaconda':844,
  'Nigosier':845,
  'Embrochet':846,'Hastacuda':847,
  'Toxizap':848,'Salarsen':849,
  'Grillepattes':850,'Scolocendre':851,
  'Poulpaf':852,'Krakos':853,
  'Théffroi':854,'Polthégeist':855,
  'Bibichut':856,'Chapotus':857,'Sorcilence':858,
  'Grimalin':859,'Fourbelin':860,'Angoliath':861,
  'Ixon':862,
  'Berserkatt':863,
  'Corayôme':864,
  'Palarticho':865,
  'M. Glaquette':866,
  'Tutétékri':867,
  'Crèmy':868,'Charmilly':869,
  'Hexadron':870,
  'Wattapik':871,
  'Frissonille':872,'Beldeneige':873,
  'Dolman':874,
  'Bekaglaçon':875,
  'Wimessir':876,
  'Morpeko':877,
  'Charibari':878,'Pachyradjah':879,
  'Galvagon':880,'Galvagla':881,'Hydragon':882,'Hydragla':883,
  'Duralugon':884,
  'Fantyrm':885,'Dispareptil':886,'Lanssorien':887,
  'Zacian':888,
  'Zamazenta':889,
  'Éthernatos':890,
  'Wushours':891,
  'Zarude':893,
  'Régieleki':894,
  'Régidrago':895,
  'Blizzeval':896,
  'Spectreval':897,
  'Sylveroy':898,
};
