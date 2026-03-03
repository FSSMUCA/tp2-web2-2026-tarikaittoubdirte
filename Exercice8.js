let nom = "   Fatima   ";
let nomCorrige= nom.trim();
if(nomCorrige==="")
    nomCorrige = "Inconnu";
console.log("nom : \"" + nomCorrige + "\""+ "(corrige : espace supprimes)");
let age = "23";
let num = parseInt(age); 
if (num ===NaN || num <= 0)
    num = "Invalide";
else
    num = "valide";
    console.log("age :" + age +"  "+ num );
    
let email = "fatima@example";
let pointEmail=email.indexOf(".",email);
if ( pointEmail===-1)
    pointEmail = "invalide : pas de point apres @";
    
else 
    console.log("valide");
console.log("email :" + email +"  "+ pointEmail);
let scoreJeu = "150pts";
let jeuScore = parseInt(scoreJeu);
 if ( jeuScore === NaN) 
    jeuScore = "invalide"
else 
    jeuScore = " extrait depuis (150pts)";
console.log("scorejeu  : " + scoreJeu + jeuScore );
let estAdmin = "false";
let bool = (estAdmin === true );
console.log("estAdmin  : " + estAdmin + "  "+"(attention : boolean false  = true" +",conersion manulle requise");
let derniereConnexion = null;
let conniexion = derniereConnexion ?? "jamais connecte";

console.log( "dernierConnexion:" +"  "+ conniexion + "(valeur par defaut via ??)");
let nombreConnexions = "0";
 let nb = Number(nombreConnexions);
let resultat = (nb === 0) ? "Aucune connexion" : nb;
console.log( "nombreConnexion  : "+resultat+"  "+"(0 apres conversion)");