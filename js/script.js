// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// richiedere livello di difficolta
var difficolta = parseInt(prompt('inserisci un numero da 0 a 2 per scegliere la difficoltà'));

// variabili generali
var rangeMaxNumeri = calcolareLivelloGioco(difficolta);
var numeroDiBombe = 16;
var tentativi = rangeMaxNumeri - numeroDiBombe;
var arrayNumeriUtente = [];



var listaArrayBombe = creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe);
console.log(listaArrayBombe);

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// -->funzione: chiedere all'utente di inserire un numero per volta tra 1 e 100, con un massimo di tentativi(100-16)  ;
// -->elementi:mi serve un ciclo while per la domanda, un array per collezionare gli input;
//  -->ritorna: l'array con il numeri inseri dall'utente e il risultato della partita;
var bombaBeccata = false;
var inputUtente = 0;

while (bombaBeccata === false && inputUtente < tentativi) {
  // richiesta inserimento
  var numeroUtente = parseInt(prompt(' Inserisci un numero tra 1 e ' + rangeMaxNumeri ));
  // verifica inserimento
  while((numeroUtente < 1) || (numeroUtente > rangeMaxNumeri) || isNaN(numeroUtente)){
    var messaggio;
    numeroUtente = parseInt(prompt(' Errore! Inserisci un numero tra 1 e '+ rangeMaxNumeri ));

  }
  while (verificaSeElementoInArray(numeroUtente, arrayNumeriUtente) === true ) {
    numeroUtente = parseInt(prompt(' Errore! Hai già inserito questo numero: Inserisci un numero tra 1 e '+ rangeMaxNumeri ));
  }
  // stringa if per capire se la bomba è stata beccata o meno
  if (verificaSeElementoInArray(numeroUtente, listaArrayBombe) === true ) {
    bombaBeccata = true;
    arrayNumeriUtente.push(numeroUtente);
    inputUtente++;
  } else {
    arrayNumeriUtente.push(numeroUtente);
    inputUtente++;
  }

}
console.log(bombaBeccata);
console.log(arrayNumeriUtente);

if(bombaBeccata === false){
  alert('hai vinto, il tuo punteggio è ' + inputUtente +
  '. I tuoi numeri sono: ' + arrayNumeriUtente +
  '. Le bombe erano rappresentate dai numeri: ' + listaArrayBombe);
}else {
  var punteggio = inputUtente - 1;
  alert('boom, hai perso il tuo punteggio è ' + punteggio +
  '. il numero che hai inserito è ' + arrayNumeriUtente +
  '. Le bombe erano rappresentate dai numeri: ' + listaArrayBombe);
}

// funzione livello
function calcolareLivelloGioco(difficolta){
  var numberRange;

  switch (difficolta) {
    case 0:
      numberRange = 100;
      break;
      case 1:
        numberRange = 80;
        break;
        case 2:
          numberRange = 50;
          break;
    default:
      numberRange = 100;
  }
  return numberRange;
}


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// -->funzione:genera array di 16 numeri casuali tra 1 e 100;
// -->elementi:mi serve una funzione e un  ciclo for per generare i vari elementi della stringa;
//  -->ritorna: i numeri arrai completo dove invoca la funzione;

function creazioneArrayBombe(rangeMaxNumeri, numeroDiBombe){

  var arrayBombe = [];

  while(arrayBombe.length < numeroDiBombe){

    var numeroRandom = Math.floor(Math.random() * (rangeMaxNumeri - 1) ) + 1 ;
     if (!verificaSeElementoInArray(numeroRandom, arrayBombe)) {
       arrayBombe.push(numeroRandom);
     }
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
    if( elementoDaVerificare === listaArray[i] ){
      inArray = true;
    }

  }
    return inArray;
}
