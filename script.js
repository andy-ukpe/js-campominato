// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// VARIABILI FUNZIONI
var rangeMaxNumeri = 100;
var numeroDiBombe = 16;
var arrayBombe = generatoreAutomatico(rangeMaxNumeri, numeroDiBombe);

var sediciNumeriRandomUtente = inseritoreNumeriUtente(1, 100);

// array con numeri random pc
console.log(arrayBombe);
// array con numeri utente
inseritoreNumeriUtente();
console.log(sediciNumeriRandomUtente);




// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO TRA 1 E 100 UNO ALLA VOLTA

var numeroImmissioniUtente = 0;
var bombaBeccata = false;

var numeroMassimoTentativi = rangeMaxNumeri - numeroDiBombe;
while(bombaBeccata === false && (numeroImmissioniUtente < numeroMassimoTentativi)){
  var numeroUtente = prompt('dimmi un numero da uno a' + rangeMaxNumeri);

  // se l'utente becca la mina,blocca il ciclo
  if (verificaSeElementoInArray(numeroUtente, arrayBombe) === true) {
    bombaBeccata = true;
    numeroImmissioniUtente++;
  }

}
if (bombaBeccata === false) {
  console.log('hai vinto, il tuo punteggio è' + numeroImmissioniUtente)
} else{
  var punteggio = numeroImmissioniUtente - 1;
  console.log('boom, hai perso il tuo punteggio è ' + punteggio)
}
// function inseritoreNumeriUtente(min, max) {
//   var numeriUtente = [];
//   var messaggio = false;
//   var i = 1;
//   while ( i <= 16) {
//     var numeroUtente = prompt('inserire un numero tra 1 e 100');
//     i++
//   }
//   while (sediciNumeriRandomPc.includes(numeroUtente) && numeriUtente=<16 ){
//     numeriUtente.push(numeroUtente);
//     }
//   if
//   return massaggio;
}


// CREAZIONE DEL GENERATORE AUTOMATICO TRA 1 E 100.

function generatoreAutomatico(rangeMaxNumeri, numeroDiBombe) {
  var numeriRandom =[];

  while (numeriRandom.lenght < numeroDiBombe) {
    var numeroRandom = Math.floor(Math.random() * (rangeMaxNumeri - 1) ) + 1;
    if (verificaSeElementoInArray(numeroRandom, numeriRandom) === false;){
        numeriRandom.push(numeroRandom);
    }

  }
  return numeriRandom;
}
// verifica se elemento è presente in un array
function verificaSeElementoInArray(elemento, listaArray){
  var inArray = false;

  // scorrere l'array in cerca dell'verificaSePresenteElementoArray
  for(var i = 0; 1 < listaArray.lenght; i++){
    if(elemento === listaArray[i]){
      isArray=true;
    }
  }

  return inArray;
}
