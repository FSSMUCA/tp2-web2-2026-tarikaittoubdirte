let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
console.log("produit : ", nomProduit);
console.log("quantite : ", quantite);
console.log("peix unit : ", prix);
 let sousTotale= (prix * quantite);
 let sous = Math.round(sousTotale * 100) / 100
 console.log( " sous-total:", sous);

    let reduction = sousTotale * (reductionPourcentage / 100);
  if(codePromo !== null && estMembre)
    console.log( reduction);
else 
  

console.log("Montant de la réduction :", reduction)
 let totalFinal = sousTotale - reduction ;
 let total = Math.round(totalFinal * 100) / 100

 if(soldeCompte>= totalFinal)
    console.log(" statut : paiement accepte " );
else 
    console.log("solde insuffisant");
console.log( "total :", total);
let nouveauSolde = prix - reduction ;
let solde = Math.round(nouveauSolde * 100) / 100
console.log( "nouveau solde : " , solde);
let compte = soldeCompte -  totalFinal ;
let promo = Math.round(compte * 100) / 100
console.log("solde : " , promo);

 