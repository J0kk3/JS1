//Comparisons
console.log(1<10); //True
console.log(10<1); //False

//Om jämförelsen är sann, händer koden innuti curly brackets;
//Om den är falsk, hoppas den över
if (1<10)
{
    console.log("ett är mindre än 10"); //Om if stämmer, körs inte else; if eller else
}
else if(1<100)
{
    console.log("det här kommer aldrig hända");
}
else
{
    console.log("öl är gott");
}

console.log(isNaN(2));
console.log(!isNaN(2));
console.log(isNaN("g"));
console.log(!isNaN("g"));
//Övning 1.1
const frukter = ["banan", "kiwi", "dragon fruit", "jack fruit", "ananas", "mango", "äpple"];

console.log(frukter[0]);
console.log(frukter[1]);
console.log(frukter);
//Övning 1.2
for (let i = 0; i < frukter.length; i++)
{
    console.log(i);
}
//Övning 1.3
body = document.body;


function jävlaSkit(arr)
{
    for(i = 0; i < arr.length; i++)
    {
        h5 = document.createElement("h5");
        body.appendChild(h5)
        h5.innerText = arr[i]; 
        if (i == 0)
        {
            h5.style.backgroundColor = "yellow";
            h5.style.color = "black";
        } 
    else if (i == 1)
        {
            h5.style.backgroundColor = "green";
            h5.style.color = "black";
        }      
    }
    
}
jävlaSkit(frukter);
console.log("--------------------------------------------------------------");
//omvänd ordning
for (let i = frukter.length-1; i>=0; i--)
{
    //Printa bara nummer (?)
    if(!isNaN(frukter[i]))
    {
        console.log(frukter[i]);
    }
    console.log(frukter[i]);
}
console.log("--------------------------------------------------------------");
//Övning 2.1-2.4
let number = [200, 180, 3 , 4 ,500, 6, 7, 8, 9 , 10];
for (let i = 0; i < number.length +1; i++)
{
    h3 = document.createElement("h3");
    body.appendChild(h3);
    h3.innerText = number[i]
    h3.style.color = `hsl(${number[i]}, 60%, 20%)`;
    // console.log(number[i]);
    if (number[i] > 180)
    {
        h3.style.color = `hsl(${number[i]}, 60%, 80%)`;
    }
    else if( number[i] <= 180)
    {
        h3.style.color = `hsl(${number[i]}, 60%, 20%)`;
    }
}
const enBraArray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju"];
for(let i = 0; i < enBraArray.length; i++)
{
    h2 = document.createElement("h2");
    body.appendChild(h2);
    h2.innerText = enBraArray[i];
    if(i % 2 === 0)
    {
        h2.style.border = "dashed 1px";        
    }
    else
    {
        h2.style.fontSize = "50px";
    }
}