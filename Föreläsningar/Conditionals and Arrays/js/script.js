let x = 0;
let y = 0;
let result = x == y;
console.log("==",result);

result = x === y;
console.log("===",result);

x ="0";
result = x === y;
console.log("===",result);

x = 10;
y = 11;
result = x != y;
console.log("!=",result);

x = "text";
y = "text";
result = x===y;
console.log("text med ===", result);

x = 7;
y = "7";
result = x===y;
console.log("string och number med ===", result);

x = 10;
y = 100;
result = x<y;
console.log("<", result)
result = x>y;
console.log(">",result)

x=50;
y=50;
result = x<=y;
console.log("<=", result);

x=50;
y=50;
result = x<=y;
console.log(">=", result);

x = 15;
y = 10;
result = x<y && x>y;
console.log("&&",result);

result = x<y || x>y;
console.log("||",result);

result = !(x>y);
console.log("!" ,result)

for (let i=0; i< 65; i++)
{
    const body = document.querySelector("body");
    const h3 = document.createElement("h3");
    body.append(h3);
    h3.innerText = 1+i;
    h3.style.textAlign = "center";
    //Alla nummer som bi ser i h3 upp till 13
    if( i <= 13)
    {
        h3.style.backgroundColor = "skyblue";
    }
    else if( i <=50 && i >= 40 )
    {
        h3.style.backgroundColor = "orange";
    }
    else if( i<= 39 && i>=13 )
    {
        h3.style.backgroundColor = "hotpink";
    }
    else
    {
        h3.style.backgroundColor = "limegreen";
    }
    //Modulo ger resten från en division
    //Om vi använder %2 blir resultatet alltid 0 om
    //data är ett jämnt nummer
    if(i%2 === 1)
    {
        h3.style.color = "white";
    }
}
//Arrays. Värderna behöver inte vara a samma datatyp
const trees = ["Ek", "Al", "Julgran", "Birch"];
console.log(trees);

for ( let i=0; i< trees.length; i++ )
{
    console.log(trees[i]);    
}
trees[4] = "kastanj";
let colors = ["lila", "grön", "hotpink", "blå"];
for(let i = 0; i<colors.length; i++)
{
    const h1 = document.createElement("h1");
    body.appendChild(h1);
    h1.innerText = colors[i];
    //Vi kollar om värdet i colors[i] === hotpink; och ändrar färgen på det.
    if(colors[i] === "hotpink")
    {
        h1.style.color = colors[i];
    }
    else if(colors[i] === "lila")
    {
        h1.style.color = "purple";
    }
}
//h1 element för att få konsolen i bodyn
const body = document.querySelector("body");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.innerText = result;