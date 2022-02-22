let randumNum = Math.round(Math.random() * 100);
let numOfGuesses = 0;
//Debug
// answer = document.getElementById("answer");
// answer.innerText = randumNum;


// console.log(randumNum);

const btn = document.querySelector("button");
btn.addEventListener("click", function()
{
numOfGuesses++;
document.getElementById("guesses").innerText=`Antal gissningar: ${numOfGuesses}!`;

const input = document.querySelector("input");
const guess = input.value;
input.value = "";
// console.log(input.value);
// console.log(guess);

if(guess == randumNum)
{
    alert(`Du vann! På ${numOfGuesses} försök!`);
    //Reset
    numOfGuesses = 0;
    document.getElementById("guesses").innerText=`Antal gissningar: ${numOfGuesses}!`;
    randumNum = Math.round(Math.random() * 100);
    answer.innerText = randumNum;
}
else
{
    if(guess > randumNum)
    {
        document.getElementById("hi-low").innerText = "Gissa Lägre.";
    }
    else
    {
        document.getElementById("hi-low").innerText = "Gissa högre"
    }    
}
});