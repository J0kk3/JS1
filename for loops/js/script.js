//Mindre än <
for (let i = 0; i < 10; i++)
{
    const loop1 = "Loop ett ";
    console.log(loop1 + i);
}
console.log("____________________________________");
//Mer än >
for (let j = 20; j >0; j--)
{
    const loop2 = "Loop två ";
    console.log(loop2 + j);
}

for (let k = 0; k < 5; k++)
{
    //Måste vara backtick ``
    const textAttLogga = `Det här är varv ${k+1} utav 5`;
    console.log(textAttLogga);
}
console.log(`ett citat ser ut såhär: "yolo"`);


const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);

for (let i = 0; i < 5; i++)
{
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerText = `Item ${i+1}`;
}
//Ändrar bakgrundsfärg på alla element
const allLi = document.querySelectorAll("li");
for (let i = 0; i < allLi.length; i++)
{
    let hue = (360 / allLi.length) * i;
    allLi[i].style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
}