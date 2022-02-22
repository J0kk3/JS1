//URL vi ska använda för att hämta data
const url = `https://dog.ceo/api/breed/dalmatian/images/random`;

//För att visa hur Promise-objektet ser ut
// const dogPromise = fetch(url);
// console.log(dogPromise);

fetch(url)
  .then(function (dogResponse)
  {
    //När promiset från fetch() är genomfört,
    //tar vi emot datan i en callback funktion och väljer att
    //hämta JSON-datan och göra om det till js-objekt.
    //json()-metoden returnerar ett nytt promise
    // console.log(dogResponse);
    return dogResponse.json();
  })
  .then(function (dogData)
  /*När promiset från json()-metoden är genomfört
  alltså när JSON-datan har koverterats till js-objekt,
  hanterar vi js-objekten i en ny callback-funktion.
  dessa objekt innehåller nu infon om hundarna.
  */
  {
    // console.log(dogData);
    createImg(dogData.message);
  });

  function createImg(imgUrl)
{
const img = document.createElement("img");
img.src = imgUrl;
img.style.width = "20vw";
document.body.appendChild(img);
}
//---------------------------------------------------------------
const url2 = `https://dog.ceo/api/breed/pomeranian/images/random/10`;
// console.log(url2);

fetch(url2).then(function(dogResponse)
{
    // console.log(dogResponse)
    return dogResponse.json();
})
.then(function(dogData)
{
    // console.log(dogData);
    createImg2(dogData.message);
});
function createImg2(imgUrl)
{
    for (let i = 0; i < imgUrl.length; i++)
    {
        const img = document.createElement("img");
        img.src = imgUrl[i];
        document.body.appendChild(img);
        img.style.width = "20vw";
        
    }
}
//---------------------------------------------------------------
let foodSearch = window.prompt("skriv en jävla öl eller nåt...");

let url3 = `https://api.punkapi.com/v2/beers?food=${foodSearch}`;

fetch(url3).then
(
    function(response)
    {
        // console.log(response);
        return response.json();
    }
).then
(
    function(data)
    {
        //Skickar datan till displayBeers()
        displayBeers(data);
    }
)
//displayBeers() tar emot en array med objekt
function displayBeers(beerArray)
{
    // console.log(beerArray);
    const div = document.querySelector("div");
    const divEl = document.querySelectorAll("div *");
    // console.log(divEl);
    //Tar bort alla element i diven
    for (let i = 0; i < divEl.length; i++)
    {
        const el = divEl[i];
        el.remove();
    }
    //Lägger till nya element i diven
    for (let i = 0; i < beerArray.length; i++)
    {
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        
        h1.innerText = beerArray[i].name;
        p.innerText = beerArray[i].tagline;

        div.appendChild(h1);
        div.appendChild(p);
    }
}