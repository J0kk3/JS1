//Övning 1
function dividedBy (x, y)
{
    console.log(x / y);
}
dividedBy(10, 2);
//Övning 2
const stringArray = ["katt0", "katt1", "katt2", "katt3"];
function returnArrayFunction(array)
{
return array[2];
}
console.log(returnArrayFunction(stringArray));
//Övning 3
const numArray = [5, 6, 7, 43];
const num = [1, 1, 1, 1];
function addNumbers(funcArr)
{
    let sum = 0;
    for (let i = 0; i < funcArr.length; i++)
    {
        //plussar ihop värdena i arrayen
        sum = sum + funcArr[i];
        //sum += funcArr[i];
    }
    return sum;
}
console.log(addNumbers(num));
console.log(addNumbers(numArray));
//Övning 4
function biggestNum()
{
    let minVal = -Infinity;
    for ( let i = 0; i < arguments.length; i++)
    {
        if (arguments[i] > minVal)
        {
            minVal = arguments[i];
        }
    }
    return minVal;    
}
const minValResult = biggestNum(1, 2, 3, 56789);
console.log(minValResult);
//Övning 5
function medelvärde()
{
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        sum = sum + arguments[i];
    }
    const medel = sum/arguments.length;
    return medel;
}
console.log(medelvärde(3, 6, 2, 8, 4));
//Övning 6
function celToFar(tempC)
{
    return resultTempF = (tempC * 1.8) + 32;
}
//Övning 7
function farToCel(tempF)
{
    return resultTempC = (tempF - 32) / 1.8;
}
console.log(celToFar(25));
console.log(farToCel(78));

//Övning 2.1 (DOM)
function blueToPurple(numElements)
{
    
    for (let i = 0; i < numElements; i++)
    {
        //blå = 240;
        //lila = 290;  
        const element = document.createElement("h1");
        const hue = 240 + (i * 50 / numElements); 
        // const hue = 240 + i *(50 / numElements);     
        element.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
        element.innerText = "jävla skit";
        document.body.appendChild(element);        
    }
}
blueToPurple(25);
//Övning 2.2
body = document.body;
function namnetPåFunktionen(storlek, färg)
{
    div = document.createElement("div");
    body.appendChild(div)
    p = document.createElement("p");
    div.appendChild(p);
    p.innerText = "kattabjs x 2";

    div.style.width = storlek;
    div.style.backgroundColor = färg;
    div.style.height = "200px";
}
namnetPåFunktionen("200px", "purple");
//Övning 2.3
function createRandomTxtE(txtString, priority)
{
    p = document.createElement("p");
    document.body.appendChild(p)
    p.innerText = txtString;
    if(priority === 1)
    {
        p.style.color = "orange";
    }
    else if(priority === 2)
    {
        p.style.color = "purple";
    }
    else if(priority === 3)
    {
        p.style.color = "blue";
    }
}
createRandomTxtE("kattbajs", 1);
createRandomTxtE("påskmust", 2);
createRandomTxtE("julmust", 3);
//Övning 2.4
function createSquares(numberOf, colorOfString)
{
    for(let i = 0; i < numberOf; i++)
    {
        div = document.createElement("div");
        document.body.appendChild(div);
        div.style.display = "inline-block";
        div.style.width = "150px";
        div.style.height = "150px";
        div.style.backgroundColor = colorOfString;
        div.style.margin = "30px 30px 30px 30px"
    }
}
createSquares(6, "hotpink");
//Övning 2.5, kanske ska använda css-grid istället?
function createSquaresRowCol(numRowPx, numColPx)
{
    div = document.createElement("div");
    document.body.appendChild(div);
    div.style.display = "inline-block";
    div.style.width = numRowPx;
    div.style.height = numColPx;
    div.style.backgroundColor = "red";
    div.style.margin = "30px 30px 30px 30px"
}
createSquaresRowCol("400px", "600px");