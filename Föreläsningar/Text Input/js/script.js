const btn = document.getElementById("btn");
btn.addEventListener("click", function()
{
    const input = document.querySelector("input");
    const p = document.querySelector("p");

    p.innerText = input.value;
})

let article = document.getElementById("article");
//const body = document.body;
// btn.addEventListener("click", function()
// {
//     const input = document.querySelector("input");
//     const p = document.querySelector("p");
    
//     document.createElement("p");
//     article.appendChild("p");
//     p.innerText = input.value;
// })