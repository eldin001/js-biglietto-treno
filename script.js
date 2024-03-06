/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

let passengerAge = parseInt(prompt('Quanti anni hai?'));
let kmNumber = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const pricePerKm = 0.21;
let ticketPrice = kmNumber * pricePerKm;
let minorDiscount;
let seniorDiscount;

if (isNaN(kmNumber) || isNaN(passengerAge)) {
    document.getElementById('price').innerHTML = "Dato non valido. Inserisci un numero.";  
} 

if (passengerAge < 18) {
    minorDiscount = ticketPrice * 0.2;
    document.getElementById('price').innerHTML = `Hai diritto ad uno sconto per i minorenni. Il prezzo del tuo biglietto è ${minorDiscount} €`;
} else if (passengerAge > 65) {
    seniorDiscount = ticketPrice * 0.4;
    document.getElementById('price').innerHTML = `Hai diritto ad uno sconto per gli over 65. Il prezzo del tuo biglietto è ${seniorDiscount} €`;
} else {
    minorDiscount = ticketPrice;
    seniorDiscount = ticketPrice;
    document.getElementById('price').innerHTML = `Il prezzo del tuo biglietto è ${ticketPrice} €`;
}  

console.log(minorDiscount);
