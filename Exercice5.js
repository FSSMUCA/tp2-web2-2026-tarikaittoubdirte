
let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let resultat = "";

    if (Number.isNaN(val)) {
        resultat = "INVALIDE";
    }
    else if (val === Infinity || val === -Infinity) {
        resultat = "INFINI";
    }
    else if (val === 0 && (1 / val === -Infinity)) {
        resultat = "ZERO NEGATIF";
    }
    else if (Number.isInteger(val)) {
        if (Number.isSafeInteger(val)) {
            resultat = "ENTIER SUR";
        } else {
            resultat = "ENTIER HORS LIMITES";
        }
    }
    else {
        resultat = "DECIMAL";
    }

    console.log(String(val) + " -> " + resultat);
}