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
var sediciNumeriRandomPc = generatoreAutomatico(1, 100);
var sediciNumeriRandomUtente = inseritoreNumeriUtente(1, 100);

// array con numeri random pc
console.log(sediciNumeriRandomPc);
// array con numeri utente
inseritoreNumeriUtente();
console.log(sediciNumeriRandomUtente);
// messaggio
inseritoreNumeriUtente();
  if (messaggio == true){
  console.log('Hai perso');
} else {
  console.log('Hai vinto');
}




// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO TRA 1 E 100 UNO ALLA VOLTA

function inseritoreNumeriUtente(min, max) {
  var numeriUtente = [];
  var messaggio = false;
  var i = 1;
  while ( i <= 16) {
    var numeroUtente = prompt('inserire un numero tra 1 e 100');
    i++
  }
  while (sediciNumeriRandomPc.includes(numeroUtente) && numeriUtente=<16 ){
    numeriUtente.push(numeroUtente);
    }
  if 
  return massaggio;
}


// CREAZIONE DEL GENERATORE AUTOMATICO TRA 1 E 100.

function generatoreAutomatico(min, max) {
  var numeriRandom =[];

  for (var i = 1; i <= 16; i++) {
    var numeroRandom = Math.floor(Math.random() * (max - min) ) + min;
    numeriRandom.push(numeroRandom);
  }
  return numeriRandom;
}
