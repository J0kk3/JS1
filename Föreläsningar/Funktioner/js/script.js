//Går att anropa trots att funktionen deklareras senare i koden, pga "hoisting"
minFunction();
minAndraFunktion();
minFunction();

//Deklarerar funktionen
function myFunction()
{
    console.log("Kattbajs!");
}
//Kallar funktionen
minFunction();

//Går att deklarera om
function minFunction()
{
    console.log("Overwritten!");
}

function minAndraFunktion()
{
    console.log("Kaffe är gott!");
}

function createH1()
{
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = "Created in createH1()";
    h1.style.color = "hotpink";
}
createH1();

function hej (namn)
{
    console.log (`Hej, ${namn}!`);
}
//Return typen
function add (x, y)
{
    return x + y;
}
const sum = add (100, 1)
console.log(sum);

//Funktionen tar ett argument och kollar
//om det är jämnt
function isEven(x)
{
    if (x % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isEven(3));

function getMin()
{
    console.log(arguments, arguments.length)

    let minVal = Infinity;    
    for (let i = 0; i < arguments.length; i++)
    {
        if (arguments[i] < minVal)
        {
            minVal = arguments[i];
        }
    }
    return minVal;
}
const minValResult = getMin(4, 2, 754);
console.log(minValResult);