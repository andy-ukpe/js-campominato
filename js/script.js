// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.



// variabili generali
var rangeMaxNumeri = 100;
var numeroDiBombe = 16;

var listaArrayBombe = creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe);

var bombe = verificaSeElementoInArray(listaArrayBombe[i], listaArrayBombe)
console.log(bombe);

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// -->funzione: chiedere all'utente di inserire un numero per volta tra 1 e 100  ;
// -->elementi:mi serve un ciclo while per la domanda ;
//  -->ritorna: i numeri arrai completo dove invoca la funzione;











// Il computer deve generare 16 numeri casuali tra 1 e 100.
// -->funzione:genera array di 16 numeri casuali tra 1 e 100;
// -->elementi:mi serve una funzione e un  ciclo for per generare i vari elementi della stringa;
//  -->ritorna: i numeri arrai completo dove invoca la funzione;

function creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe){

  var arrayBombe = [];

  while(arrayBombe.length < numeroDiBombe){

    var numeroRandom = Math.floor(Math.random() * (rangeMaxNumeri - 1) ) + 1 ;
    arrayBombe.push(numeroRandom);

  }

  return arrayBombe;
}

// verifica che i numeri inseriti non siano doppioni
// funzione: verificare che all'interno dell'arraybombe non ci siano doppioni;
// elementi:mi serve un ciclo in cui verificare che i numeri generati dalla fnzione bombe non siano doppi;
// ritorna: lista array con elementi diversi l'uno dall'altro;

function verificaSeElementoInArray(elementoDaVerificare, listaArray){
  var inArray = false;

  // scorrere l'array in cerca dell'verificaSePresenteElementoArray
  for (var i = 0; i < listaArray.length; i++) {
    if( elemento === listaArray[i] ){
      inArray = true;
    }

  }
    return inArray;
}
