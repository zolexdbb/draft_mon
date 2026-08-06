/* ==== Fusionne tous les fichiers pokemon/gen*.js + legends-arceus.js en deux tableaux
   globaux utilisés partout ailleurs : LINES (toutes les lignées draftables) et DEX_NUMBERS
   (nom d'espèce → numéro de Pokédex, pour résoudre les sprites). ==== */
const LINES = [...LINES_GEN1, ...LINES_GEN2, ...LINES_GEN3, ...LINES_GEN4, ...LINES_GEN5, ...LINES_GEN6, ...LINES_GEN7, ...LINES_GEN8, ...LINES_HISUI];
const DEX_NUMBERS = Object.assign({}, DEX_NUMBERS_GEN1, DEX_NUMBERS_GEN2, DEX_NUMBERS_GEN3, DEX_NUMBERS_GEN4, DEX_NUMBERS_GEN5, DEX_NUMBERS_GEN6, DEX_NUMBERS_GEN7, DEX_NUMBERS_GEN8, DEX_NUMBERS_HISUI);
