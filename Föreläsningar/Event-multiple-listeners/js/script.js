const div = document.querySelector("div");
//En event listener på en div som innehåller 5 knappar
div.addEventListener("click", function(event)
{
    console.log(event.target);
    //Kollar om elementet är en knapp
    //Heter DIV i DOMen (case-sensitive)
    if(event.target.tagName ==="BUTTON")
    {
        //Endast då ändrar vi texten i p
        const p = document.querySelector("p");
        p.innerText = event.target.innerText;
    }
    
});