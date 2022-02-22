const btn = document.getElementById("btn");
const btnP = document.getElementById("btn-p");
//Event listeners för musklick
btn.addEventListener("click", function(event)
{
    console.log(event);
    //Ändrar texten på paragrafen
    btnP.innerText = "Nu är knappen klickad!";
});
//MouseEnter och MouseLeave
btnP.addEventListener("mouseenter", function()
{
    btnP.style.backgroundColor = "hotpink";
    btnP.style.color = "black";
})
btnP.addEventListener("mouseleave", function()
{
    btnP.style.backgroundColor = "limegreen";
    btnP.style.color = "white";
})
//Mouse move - positionen av muspekaren bestämmer hue-värdet
const body = document.body;
body.style.height = "100vh";
body.addEventListener("mousemove", function(event)
{
    const hue = event.clientX;
    
    body.style.backgroundColor = `hsl(${hue}, 80%, 60%)`
});