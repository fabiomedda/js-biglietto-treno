/*
Il programma dovrà chiedere all'utente il numero di chilometri
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il
prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
*/

var kmUtente = prompt("quanti chilometri deve percorrere?");
var etàUtente = prompt ("quanti anni ha?");

var prezzoBiglietto = kmUtente * 0.21;
var sconto20 = (prezzoBiglietto / 100) * 20;
var sconto40 = (prezzoBiglietto / 100) * 40;

// funzione per arrotondare
function roundTo(value, places){
     var power = Math.pow(10, places);
     return Math.round(value * power) / power;
 }

if (isNaN(kmUtente) || isNaN(etàUtente)) {
    alert("You must insert a number");
} else if (etàUtente < 18){
  document.getElementById("prezzo").innerHTML = roundTo((prezzoBiglietto - sconto20), 2);
} else if (etàUtente > 65){
  document.getElementById("prezzo").innerHTML = roundTo((prezzoBiglietto - sconto40), 2);
} else{
  document.getElementById("prezzo").innerHTML = roundTo(prezzoBiglietto, 2);
}
