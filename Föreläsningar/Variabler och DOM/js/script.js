//Vi deklarerar en variabel som heter h1 och skapar ett h1-element som vi förvarar i den variablen
const h1 = document.createElement("h1");
console.log(typeof h1, h1); //Finns inte i DOM
//Vi deklarerar en variabel som heter body, där vi förvarar body-elementet som vi hämtar från DOMen
const body = document.querySelector("body");
console.log(body);
//Lägger till h1-elementet till body-elementet
body.appendChild(h1);
h1.innerText = "Använd inspektorn!"

let h1Text = "Den här texten är sparad i en variabel";
h1.innerText = h1Text;
//Lägger till en onumrerad lista med 5 stycken list items
const ul = document.createElement("ul");
body.appendChild(ul);
//Skapar ett ul-element och förarar det i variablen ul
//Skapar första LI elementet och förarar den i LI1
const li1 = document.createElement("li");
li1.innerText = "item 1";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "item 2";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "item 3";
ul.appendChild(li3);
const li4 = document.createElement("li");
li4.innerText = "item 4";
ul.appendChild(li4);
const li5 = document.createElement("li");
li5.innerText = "item 5";
ul.appendChild(li5);