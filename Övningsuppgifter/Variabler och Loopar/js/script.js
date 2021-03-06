const body = document.querySelector("body");
//Variabler.1
const h1 = document.createElement("h1");
h1.innerText = "Vi lär oss mycket nytt idag";

body.appendChild(h1);

const bCol = "hsl(120, 80%, 80%)";
const tCol = "white";

h1.style.backgroundColor = bCol;
h1.style.color = tCol;

//Variabler.2.3
const thickness = "10px";
const type = "dotted";
const col = "blue";

h1.style.border = `${thickness} ${type} ${col}`;
//Variabler.6
body.style.textAlign = "center";

const ol = document.createElement("ol");
body.appendChild(ol);

const li1 = document.createElement("li");
li1.innerText = "Ett";
ol.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Två";
ol.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Tre";
ol.appendChild(li3);

//istället för i-- tar vi i = i - 5.
for (let k = 50; k > -1; k = k-5)
{
    console.log(k);
}
//Övning 1-3
const h1 = document.createElement("h1");
h1.innerText = "Textjävel";
body.appendChild(h1);

document.body.appendChild(document.createElement("h1"));
document.querySelectorAll("h1")[1].innerText = "Lite mer text";
document.querySelectorAll("h1")[1].style.color = "green";

h1.style.color = "hotpink";
//Övning 5(loop); exponentiell ökning (0, 1, 4, 9, 16, 25) multiplicerar med sig själv
for (let j = 0; j < 11; j++)
{
    const result = j*j;
    console.log(result);
}
//Övning 7 & 8
const ol2 = document.createElement("ol");
body.appendChild(ol2);

for (let i = 0; i < 10; i++)
{
    const li = document.createElement("li");
    ol2.appendChild(li);

    const tjocklek = i+1;
    li.style.border = `${tjocklek}px solid green`;
}
//Övning 8
const lis = document.querySelectorAll("li");
for( let p=0; p<10; p++ )
{
    const light = 100-(i*10);
    lis[p].style.backgroundColor = `hsl ( 0, 0%, ${p}% )`;
}

//Fem numrerade listor med tre list items i varje
for(let i = 0; i<5; i++)
{
    const list = document.createElement("ol");
    document.body.appendChild(list);

    for(let j=0; j<3; j++)
    {
        const listItem = document.createElement("li");
        list.appendChild(listItem);
        listItem.innerText = `Lista ${1+i}`;
    }
}