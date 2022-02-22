//Övning 1
stringArr = ["ett", "två", "3", "fyra", "5"];
function concatString(arr)
{
    let resultArr = '';
    for (let i = 0; i < arr.length; i++) {
        resultArr = resultArr.concat(arr[i]);
    }
    return resultArr;
}
console.log(concatString(stringArr));
//Övning 4
function rndIntN(n)
{
    return Math.floor(Math.random() * (0 + n + 1));
}
console.log(rndIntN(100));
//Övning 5 koden funkar
//TODO: fixa onclick
const myButton = document.querySelector("button");
const num2Text = document.getElementById("num2");
num2Text.style.display = "none";
if (myButton.onclick)
{
    num2Text.innerText = getRndInteger(1, 10);
}
else
{
    num2Text.style.display = "none";
}
function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// myButton.onclick = getRndInteger()
// {
//     num2Text.innerText = getRndInteger(1, 10);
// }

// myButton.onclick = num2Text.innerText = getRndInteger(1, 10);
// function getRndInteger(min, max)
// {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//Slumpar ett tal från 1 till 6
document.getElementById("num").innerHTML = Math.floor(Math.random() * 6 + 1);
//Övning 6
function rndIntBool()
{
    return Math.floor(Math.random())
}

const names = ["Clara", "Forqan", "Jocke", "Sohny"];
randomH1(names);
function randomH1(nameArr)
{
    const h1 = document.createElement("h1");
    const randomIndex = Math.floor(Math.random() * nameArr.length);
    h1.innerText = nameArr[randomIndex];
    document.body.appendChild(h1);
    const randomHue = Math.round(Math.random() * 360);
    h1.style.color = `hsl(${randomHue}, 70%, 60%)`;
}
function rndHiInt()
{
    const rndOneInt = Math.ceil(Math.random() * 10 - 1);
    const rndTwoInt = Math.ceil(Math.random() * 10 - 1);
    if(rndOneInt < rndTwoInt)
    {
        return rndTwoInt;
    }
    else
    {
        return rndOneInt;
    }
}
console.log(rndHiInt());
function rndBoolInt()
{
    const rndOneInt = Math.floor(Math.random() * 4);
    const rndTwoInt = Math.floor(Math.random() * 4);
    if(rndOneInt === rndTwoInt)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(rndBoolInt());
//Övning 2
function concatArrays()
{
    finalArr = stringArr.concat(names);
    return finalArr;
}
console.log(concatArrays());

//Övning 7
adjArr = ["fint", "dåligt", "underbart", "skitbra"];
verbArr = ["hoppar", "springer", "simmar", "kör"];
function concatCentence(verb, adj)
{
    
    // const rndVerbArr = Math.random();
    randomAdjIndex = Math.floor(Math.random() * adj.length);
    randomVerbIndex = Math.floor(Math.random() * verb.length);
    return "Jag " + verb[randomVerbIndex] + " " + adj[randomAdjIndex];
}
console.log(concatCentence(verbArr, adjArr));

//Övning 3 funkar inte
const mixedArr = ["string0", 0, "string1", 1, "string2", 2];
let numArr = [];
function returnIntfromArray(val)
{
    let numbersOnly = (val)
    if( typeof (val) === "number")
    {
        return val;
    }
    let numbers = numArr.filter(numbersOnly);
    console.log(numbers);
}
returnIntfromArray(mixedArr);