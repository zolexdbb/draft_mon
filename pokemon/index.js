/* ==== pokemon/index.js : fusionne les 3 générations en LINES / DEX_NUMBERS ==== */
const LINES = [...LINES_GEN1, ...LINES_GEN2, ...LINES_GEN3];
const DEX_NUMBERS = Object.assign({}, DEX_NUMBERS_GEN1, DEX_NUMBERS_GEN2, DEX_NUMBERS_GEN3);
