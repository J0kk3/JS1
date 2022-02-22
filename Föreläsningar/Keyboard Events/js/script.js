const body = document.body;
body.style.height = "100vh";
const håett = document.getElementById("håett");
let light = 0;

body.addEventListener("keydown", function(event)
{
    console.log(event.key);
    //Ändrar på H1 till värdet av tangenten
    håett.innerText = event.key;
    //om vi trycker på ArrowUp || ArrowDown, så kommer lightness ändras på body bg-color
    
    if(event.key === "ArrowUp")
    {
        light++;
        if(light >= 100)
        {
            light=100;
        }
    }
    else if (event.key === "ArrowDown")
    {
        light--;
        if(light <= 0)
        {
            light=0
        }
    }
    // console.log(light);
    body.style.backgroundColor = `hsl(140, 70%, ${light}%)`;
});

const inputP = document.getElementById("inputP");
const input = document.querySelector("input");

input.addEventListener("keyup", function(event)
{
    inputP.innerText = input.value;
})