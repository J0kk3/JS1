function createEl(typeOfElement, text, bColor, tColor)
{
    const el = document.createElement(typeOfElement);
    el.innerText = text;
    el.style.backgroundColor = bColor;
    el.style.color = tColor;
    document.body.appendChild(el);
}

createEl("h1", "Det här är ett h1-element", "hotpink", "white");
createEl("p", "Detta är ett p-element", "khaki", "brown");
createEl("kattbajs", "detta är et odefinerat element", "azure", "brown");
createEl("a", "ett a-element", "green", "white");


function createMultiEl(typeOfElement, text = "default", bColor, tColor, amount = 5)
{
    for (let i = 0; i<amount; i++)
    {
        const el = document.createElement(typeOfElement);
        el.innerText = text;
        el.style.backgroundColor = bColor;
        el.style.color = tColor;
        document.body.appendChild(el);
    }    
}

createMultiEl("h5", "H5", "green", "black", 5)
//Argumenten som anges går alltid i samma ordning som parametrarna där funktionen defineras
createMultiEl("h1");