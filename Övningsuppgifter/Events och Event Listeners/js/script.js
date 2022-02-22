const body = document.body;
txtInp = document.getElementById("ColInput");
const btn = document.getElementById("btn");
// txtInp.addEventListener("keyup", function(event)
// {
//     body.style.color = txtInp.input;
// })
btn.addEventListener("click", function(event)
{
    //Får alltid fel på rad 4... är null.........(oavsett vad som är på rad 4)
    console.log(event);
    //Textinput = background color
   body.style.backgroundColor = txtInp.value;
//    event.stopPropagation();
});
body.addEventListener("click", function(event)
{
    //body.click == change saturation on bodys backgroundcolor (using mouse y pos)
    const hue = event.clientX;
    //body.click == change hue (of background) using event.clientx (mouse x pos)    
    const light = event.clientY;
    
    body.style.backgroundColor = `hsl(${hue}, ${light}%, 30%)`;
    // event.stopPropagation();
});
//Övning 2.1-2.3
Libtn = document.getElementById("Li-btn");
LiInput = document.getElementById("LiInput");
ul = document.createElement("ul");
body.appendChild(ul);


Libtn.addEventListener("click", function()
{       
    li = document.createElement("li");
    ul.appendChild(li);
    li.style.color = "black";
    li.style.margin = "0px 0px 0px 0px";
    li.style.listStyleType = "none";
    li.innerText = LiInput.value;
    // li.addEventListener("click", function()
    // {
    //     li.remove();
    // });

    if(document.querySelectorAll("li").length % 2 == 0)
    {        
        li.style.backgroundColor = "white";
    }  
});

ul.addEventListener("click", function(event)
{
    event.target.remove()
    console.log(event.target);
})
//Övning 3.1
function celToFar(tempC)
{
    return resultTempF = (tempC * 1.8) + 32;    
}

reminder = document.getElementById("reminder");
inputId = document.getElementById("inputId");
reminder.addEventListener("click", function(event)
{
    // let tempC = inputId.value;
    // event = tempC;
    // inputId.value = celToFar.tempC;
    console.log(celToFar( inputId.value ));
});
//Övning 4.1
const mathP0 = document.getElementById("mathX2_0");
const mathP1 = document.getElementById("mathX2_1");
const MathX2Btn = document.getElementById("MathX2Btn");
let scoreTxt = document.getElementById("scoreTxt");
comparision = document.getElementById("comparision");

MathX2Btn.addEventListener("click", function(event)
    {
        mathP0.innerText = Math.floor(Math.random()*101);
        mathP1.innerText = Math.floor(Math.random()*101);

        if (mathP0.innerText > mathP1.innerText)
        {
            console.log("Loser!");
            scoreTxt.innerText--;
        }
        else if (mathP0.innerText < mathP1.innerText)
        {
            console.log("Winner!");
            scoreTxt.innerText++;
        }
        if (scoreTxt.innerText == 3)
        {            
            alert("You Won!");
            resetGame();
            
        }
        else if(scoreTxt.innerText == -3)
        {
            alert("You Lost, sad times...");
            resetGame();
        }
        
    });
    function resetGame()
    {
        scoreTxt.innerText = 0;
    }