/* ==== Petits utilitaires aléatoires réutilisés partout dans le jeu (IA, événements, tirage d'objets...). ==== */
// Retourne un élément au hasard dans un tableau.
function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
// Retourne une copie mélangée d'un tableau (Fisher-Yates).
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
