// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// -->funzione:genera array di 16 numeri casuali tra 1 e 100;
// -->elementi:mi serve una funzione e un  ciclo for per generare i vari elementi della stringa;
//  -->ritorna: i numeri arrai completo dove invoca la funzione;

// variabili generali
var rangeMaxNumeri = 100;
var numeroDiBombe = 16;

var bombe = creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe);
console.log(bombe);

function creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe){

  var arrayBombe = [];

  while(arrayBombe.length < numeroDiBombe){

    var numeroRandom = Math.floor(Math.random() * (rangeMaxNumeri - 1) ) + 1 ;
    arrayBombe.push(numeroRandom);

  }

  return arrayBombe;
}
