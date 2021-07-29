// Esercizio di oggi: Simon Says
// nome repo: js-simon
// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

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
// FINE VARIABILI
console.log(rndGenerator());

//FUNZIONI 
// genero numeri random da 1 a 100 con la formula (max - min + 1) + min
function rndGenerator(){
    return Math.floor(Math.random() * (max - min + 1) + min);
}