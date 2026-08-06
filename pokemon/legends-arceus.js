/* ==== Contenu de Pokémon Légendes : Arceus (v0.9.1) : 12 lignées de Formes de Hisui
   (mêmes principes que les Formes d'Alola/Galar) + Amovénus (légendaire, forme Totémique).
   DEX_NUMBERS_HISUI (numéros de Pokédex, pour les sprites) est à la fin du fichier. ==== */
const LINES_HISUI = [
{id:'growlithehisui',abilities:['Intimidation','Torche','Tête de Roc'],moveIds:['leer','ember','bite','firepunch','flamethrower','rockthrow','rockslide','stoneedge','crunch','willowisp','overheat','earthquake','closecombat','extremespeed','scaryface','thief','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:"Caninos d'Hisui",types:['feu','roche'],base:st(60,75,45,65,50,55)},
  {name:"Arcanin d'Hisui",types:['feu','roche'],base:st(95,115,80,95,80,90)}]},
{id:'voltorbhisui',abilities:['Anti-Bruit','Statik','Boom Final'],moveIds:['discharge','thunderbolt','thunder','thunderwave','magicalleaf','gigadrain','sludgebomb','raindance','sunnyday','lightscreen','reflect','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:"Voltorbe d'Hisui",types:['electrik','plante'],base:st(40,30,50,55,55,100)},
  {name:"Électrode d'Hisui",types:['electrik','plante'],base:st(60,50,70,80,80,150)}]},
{id:'typhlosionhisui',abilities:['Brasier','Fouille'],moveIds:['ember','flamethrower','firepunch','overheat','willowisp','mysticalfire','shadowball','shadowclaw','lick','hypervoice','nightslash','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:"Typhlosion d'Hisui",types:['feu','fantome'],base:st(73,84,78,119,85,95)}]},
{id:'qwilfishhisui',abilities:['Point Poison','Glissade','Intimidation'],moveIds:['poisonjab','sludgebomb','crunch','suckerpunch','knockoff','icefang','waterfall','surf','hydropump','barbbarrage','direclaw','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Qwilfish de Hisui',types:['tenebres','poison'],base:st(65,95,85,55,55,85)},
  {name:'Qwilpik',types:['tenebres','poison'],base:st(85,115,95,65,65,85)}]},
{id:'sneaselhisui',abilities:['Pression','Délestage','Toxitouche'],moveIds:['closecombat','crosschop','lowkick','poisonjab','direclaw','suckerpunch','knockoff','nightslash','throatchop','swordsdance','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Farfuret de Hisui',types:['combat','poison'],base:st(55,95,55,35,75,115)},
  {name:'Farfurex',types:['combat','poison'],base:st(80,130,60,40,80,120)}]},
{id:'samurotthisui',abilities:['Torrent','Incisif'],moveIds:['nightslash','crunch','suckerpunch','knockoff','waterfall','surf','hydropump','icebeam','swordsdance','throatchop','ceaselessedge','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Clamiral de Hisui',types:['eau','tenebres'],base:st(90,108,80,100,65,85)}]},
{id:'lilliganthisui',abilities:['Chlorophylle','Agitation','Feuille Garde'],moveIds:['closecombat','lowkick','crosschop','magicalleaf','gigadrain','swordsdance','sunnyday','solarbeam','triplearrows','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Fragilady de Hisui',types:['plante','combat'],base:st(70,105,75,50,75,105)}]},
{id:'zoruahisui',abilities:['Illusion'],moveIds:['shadowball','shadowclaw','nightslash','suckerpunch','knockoff','hypervoice','darkpulse','taunt','agility','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Zorua de Hisui',types:['normal','fantome'],base:st(35,60,40,85,40,70)},
  {name:'Zoroark de Hisui',types:['normal','fantome'],base:st(55,100,60,125,60,110)}]},
{id:'braviaryhisui',abilities:['Regard Vif','Sans Limite','Lentiteintée'],moveIds:['psychic','zenheadbutt','airslash','hurricane','esperwing','extrasensory','futuresight','agility','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Gueriaigle de Hisui',types:['psy','vol'],base:st(110,83,70,112,70,65)}]},
{id:'sliggoohisui',abilities:['Herbivore','Coque Armure','Point Gluant'],moveIds:['flashcannon','ironhead','dragonpulse','icebeam','thunderbolt','irondefense','raindance','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Colimucus de Hisui',types:['acier','dragon'],base:st(58,75,83,83,113,40)},
  {name:'Muplodocus de Hisui',types:['acier','dragon'],base:st(80,100,100,110,150,60)}]},
{id:'avalugghisui',abilities:['Mâchouille','Corps Gel','Fermeté'],moveIds:['icebeam','blizzard','icefang','rockslide','stoneedge','crunch','mountaingale','earthquake','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Séracrawl de Hisui',types:['glace','roche'],base:st(95,127,184,34,36,38)}]},
{id:'decidueyehisui',abilities:['Engrais','Querelleur'],moveIds:['closecombat','lowkick','crosschop','magicalleaf','gigadrain','triplearrows','nightslash','swordsdance','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Archéduc de Hisui',types:['plante','combat'],base:st(88,112,80,95,95,60)}]},
{id:'amovenus',abilities:['Cœur Soin','Contestation'],moveIds:['playrough','dazzlinggleam','moonblast','hurricane','airslash','springtidestorm','calmmind','psychic','protect','swift','endure','hyperbeam','facade','doubleedge','sleeptalk','rest'],
 stages:[
  {name:'Amovénus',types:['fee','vol'],base:st(74,115,70,135,80,106),forms:{
    miroirSacre:{name:'Amovénus (Totémique)',types:['fee','vol'],base:st(74,115,110,135,100,46),abilities:['Envelocape']}
  }}]}
];
const DEX_NUMBERS_HISUI = {
  "Caninos d'Hisui":58,"Arcanin d'Hisui":59,
  "Voltorbe d'Hisui":100,"Électrode d'Hisui":101,
  "Typhlosion d'Hisui":157,
  'Qwilfish de Hisui':211,'Qwilpik':904,
  'Farfuret de Hisui':215,'Farfurex':903,
  'Clamiral de Hisui':503,
  'Fragilady de Hisui':549,
  'Zorua de Hisui':570,'Zoroark de Hisui':571,
  'Gueriaigle de Hisui':628,
  'Colimucus de Hisui':705,'Muplodocus de Hisui':706,
  'Séracrawl de Hisui':713,
  'Archéduc de Hisui':724,
  'Amovénus':905
};
