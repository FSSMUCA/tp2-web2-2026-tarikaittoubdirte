let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
console.log(nom ?? "valeur par defaut");
console.log(age ?? "valeur par defaut");
console.log(ville ?? "valeur par defaut");
console.log(score ?? "valeur par defaut");
console.log(actif ?? "valeur par defaut");
console.log(nom || "valeur par defaut");
console.log(age || "valeur par defaut");
console.log(ville || "valeur par defaut");
console.log(score || "valeur par defaut");
console.log(actif || "valeur par defaut");
console.log("nom :",(nom ?? "valeur par defaut")===(nom || "valeur par defaut") ? "meme resultat" : "resultat different");
console.log("age :" , (age ?? "valeur par defaut")===(age || "valeur par defaut") ? "mem resultat" : "resultat different");
console.log("ville :", (ville ?? "valeur par defaut")===( ville || "valeur par defaut") ? "meme resultat" : "resultat different");
console.log("score : " , (score ?? "valeur par defaut")===(score || "valeur par defaut ") ? "meme resultat": "resultat different");
console.log("actif : " , (actif ?? "valeur par defaut")===(actif || "valeur par defaut ") ? "meme resultat": "resultat different");