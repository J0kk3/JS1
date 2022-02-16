// /* element.setAttribute("attribute", "value");
// element här uppe == document.querySelector("elementet");
// måste först hämta elementet!
// -------------------*/
// //Händer inget
// document.querySelector("h2");
// //node, eller h2-elementet loggas till konsolen
// //querySelector väljer endast det första elementet
// //som passar in på css-selectorn
// console.log(document.querySelector("h2"));
// //Ändrar textfärgen till orange
// document.querySelector("h2").style.color = "orange";
// //Alla h2 som finns i DOMen
// console.log(document.querySelectorAll("h2"));
// //Ändrar textfärgen på andra h2-elementet
// document.querySelectorAll("h2")[1].style.color = "green";
// //Ändrar textfärgen på tredje h2-elementet
// document.querySelectorAll("h2")[2].style.color = "hotpink";
// //Dubbelkollar så det är första a-elementet
// console.log(document.querySelector("a"));
// //Byter sätter attributet till en ny länk
// document.querySelector("a").setAttribute("href", "https://esportal.com/sv/home");
// //Tar bort ett element
// document.querySelector("#header-navigation").removeChild(document.querySelectorAll("a")[1]);
// //Lägger till ett element, syns inte för det finns inget innehåll;
// //Men öppnar du DOM-inspecter i devtools så ser du h1 elementet i nav-elementet
// document.createElement("#header-navigation").appendChild(document.createElement("h1").innerText = "nu syns texten!");
// //Element:
// document.querySelector("img");
// //2 olika sätt att hämta ett element
// console.log(document.querySelector("#header-navigation"));
// console.log(document.getElementById("header-navigation"));

//-------------ÖVNINGSPPGIFTER---------------------------
document.querySelector("h3").innerText = "Potato";
document.querySelector("a").innerText = "Start";
document.querySelectorAll("a")[2].innerText = "Mail us";
document.querySelectorAll("p")[1].innerText = "Mail us";
document.querySelectorAll("p")[3].innerText = "Mail us";
document.querySelectorAll("button")[0].innerText = "Add to vagn";
document.querySelectorAll("button")[1].innerText = "Add to vagn";
document.querySelectorAll("button")[2].innerText = "Add to vagn";
//css stil (js.del två)
document.querySelectorAll("button")[0].style.backgroundColor = "hotpink";
document.querySelectorAll("button")[1].style.backgroundColor = "hotpink";
document.querySelectorAll("button")[2].style.backgroundColor = "hotpink";
document.querySelector("article").style.backgroundColor = "yellow";
document.querySelectorAll("p")[0].style.color = "yellow";
document.querySelectorAll("p")[1].style.color = "white";
document.querySelectorAll("p")[2].style.color = "white";
document.querySelectorAll("p")[3].style.color = "white";
document.querySelectorAll("a")[0].className = "active";
document.querySelectorAll("img")[0].classList.remove("logo");

document.querySelectorAll("img")[2].style.width = "50%";
document.querySelectorAll("img")[3].style.width = "50%";
document.querySelectorAll("img")[4].style.width = "50%";

document.querySelector("#header-navigation").appendChild(document.createElement("a"));
document.querySelector("#header-navigation").removeChild(document.querySelectorAll("a")[2]);
document.querySelector("main").appendChild(document.createElement("article"));

document.querySelectorAll("footer article")[2].removeChild( document.querySelectorAll("footer article a")[5] );
document.querySelectorAll("footer article")[2].removeChild( document.querySelectorAll("footer article a")[4] );
document.querySelectorAll("footer article")[2].removeChild( document.querySelectorAll("footer article a")[3] );
// document.querySelectorAll("a")[6].remove();  <-- samma kod som ovan (tar bort alla element som metoden utförs på)

document.querySelectorAll("article")[0].appendChild(document.createElement("button"));
document.querySelectorAll("article")[1].appendChild(document.createElement("button"));
document.querySelectorAll("article")[2].appendChild(document.createElement("button"));
document.querySelectorAll("article")[3].appendChild(document.createElement("button"));
