// Esercizio di oggi: Simon Says
// nome repo: js-simon
// Descrizione:
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Introdurre la parte di grafica oltre a quella di logica :occhiolino:
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

//VARIABILI
const max = 100;
const min = 1;
let simonNumbers = [];
let userGuess = [];
let k = 0 //k = valori uguali trovati
// FINE VARIABILI
// Un alert() espone 5 numeri generati casualmente.
for (let i = 0; i < 5; i++){
    simonNumbers.push(rndGenerator());
}
// Da li parte un timer di 30 secondi.
document.getElementById('simonNumbers').innerHTML = simonNumbers
//alert parte senza layout
alert(simonNumbers);
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(userNumbers, 3000);
//FUNZIONI 
// genero numeri random da 1 a 100 con la formula (max - min + 1) + min
function rndGenerator(){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//acquisisco i numeri dall'utente
function userNumbers() {
    for (let i = 0; i < 5; i++){
    let num = parseInt(prompt("per favore inserisca i numeri precedentemente visualizzati"));
    userGuess.push(num);
    }
    //mi mostra in console i numeri giusti
    console.log('lei ha inserito ' + simonCheck(simonNumbers, userGuess) + ' numeri giusti');
}
function simonCheck( num1,  num2) {
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            if (num1[i] == num2[j]){
                k++;; 
            }
        }
    }
    return k;
}
