/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];

// 2. Parcourez ce tableau pour afficher les films qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");

for (let i = 0; i <= films.length - 1; i++) {
    console.log(films[i])
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");
let filme = -1;
while (filme < films.length -1) {
    filme++
    console.log(films[filme])
}

//    3°) avec une boucle for of
console.log("Avec une boucle for of :");

for (const film of films) {
    console.log(film)
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");

for (let i = 0; i < john.length; i++) {
    console.log(john[i])
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");
let j = -1;
while (j < john.length -1) {
    j++;
    console.log(john[j])
}
//    3°) avec une boucle for of
console.log("Avec une boucle for of")
for (const johnElement of john) {
    console.log(johnElement)
}

// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.

console.log(`Voici mon tableau :`)
console.log(nombres)

// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.
const carres = [];

// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.

nombres.forEach(nb => carres.push(nb * nb));




// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.
console.log(`Voici mon tableau de nombres au carré :`)
console.log(carres)