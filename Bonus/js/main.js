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
//acquisizione variabili
let numGrabber = document.getElementById('grabber');
numGrabber.addEventListener('click',
    function(){
        let num = parseInt(document.getElementById('luckyGuess').value);
        let num2 = parseInt(document.getElementById('luckyGuess2').value);
        let num3 = parseInt(document.getElementById('luckyGuess3').value);
        let num4 = parseInt(document.getElementById('luckyGuess4').value);
        let num5 = parseInt(document.getElementById('luckyGuess5').value);
        userGuess.push(num);
        userGuess.push(num2);
        userGuess.push(num3);
        userGuess.push(num4);
        userGuess.push(num5);
        document.getElementById('answers').innerHTML = 'hai dato ' + simonCheck(simonNumbers, userGuess) + ' risposte esatte!';
        if(simonCheck(simonNumbers, userGuess) == 0)
            document.getElementById('answers').innerHTML = 'veramente neanche un numero?';
    }
)
// Un alert() espone 5 numeri generati casualmente.
for (let i = 0; i < 5; i++){
    simonNumbers.push(rndGenerator());
}
// Da li parte un timer di 30 secondi.
document.getElementById('simonNumbers').innerHTML = simonNumbers
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(simonNone, 3000);
//FUNZIONI 
// genero numeri random da 1 a 100 con la formula (max - min + 1) + min
function rndGenerator(){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//acquisisco i numeri dall'utente
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
function simonNone() {
    document.getElementById('simonNumbers').className = "none";
}