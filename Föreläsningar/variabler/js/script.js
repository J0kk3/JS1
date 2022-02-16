//Deklaration och initiation en variabel
let firstName = "Forqan";
console.log("Mitt namn är inte " + firstName);
//ändrar variablen (overwrite)
firstName = "Hamed";
console.log("Mitt namn är inte " + firstName);
//Deklaration och initiation av en constant
const lastName = "Andersson";
console.log("Mitt efternamn är inte " + lastName);
//går inte att skriva över/ändra värdet på en const
// lastName = "Leivas";
//String
const text = "detta är en string";
console.log(typeof text, text);
//Number
const nr = 1337;
console.log(typeof nr, nr);
//Bool
const coffee = true;
console.log(typeof coffee, coffee);
//Undefined
let empty;
console.log(typeof empty, empty);
//Uträkningar med variabler
const moms = 0.25;
const pris = 300;
const totalPris = pris * (1 + moms);
console.log("Moms: ", moms);
console.log("Pris: ", pris);
console.log("Totala priset: ", totalPris);

const nr1 = 4;
const nr2 = 50;
let resultat = nr2 / nr1;
console.log("Nr 2 delat med nr1 = " +  resultat);
resultat = nr1*nr2;
console.log("Nr 2 gånger med nr1 = " +  resultat);
resultat = nr2 % nr1;
console.log("Nr2 modulo nr1 = " + resultat); //% är modulo "det som är kvar"
