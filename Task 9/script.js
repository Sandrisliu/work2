/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
let Movie = new Object();

Movie.name = 'Breaking Dawn';
Movie.director = 'Bill Condon';
Movie.budget = '37000000';

console.log(Movie);

let budget = 100000000;
if (budget <= 100000000) {
    console.log(false);
}else {
    if (budget >= 100000000) {
        console.log(true);
    }
}