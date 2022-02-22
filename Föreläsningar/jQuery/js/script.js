//Vanilla
console.log( document.querySelector("h1"));
//jQuery
console.log($("h1"));
$("h1").css("color", "hotpink");
$("h1").css("border", "3px solid black");
console.log($("h1").css("color"));
$("h1").click(function()
{
   alert("h1-element har clickats");
});
$("h1").on("mouseenter", function()
{
    $("h1").css("backgroundColor", "black");
});
$("h1").on("mouseleave", function()
{
    $("h1").css("backgroundColor", "transparent");
});
$("h2").hover(function(event)
{
    console.log( event.type );
});
//HTTP Requests (ajax)
// $.get("http://dog.ceo/api/breeds/image/random", function(data)
// {
//     console.log(data.message);
//     let dog = $("img");
//     dog.attr("src", data.message)
//     $("body").append(dog);
// });
// const img = $("img");
// $("img").attr(
//     {
//         src : "http://dog.ceo/api/breeds/image/random"
//     }
// );

//-------------------------------------

//jQuery Effects
$("#fade-out").click(function()
{
    $("#firstDiv").fadeOut();
});
$("#fade-in").click(function()
{
    $("#firstDiv").fadeIn();
});
$("#animDiv").click(function()
{
    $("section").animate({
        left: "200px"
    })
    $("#animDiv").animate(
        {
            left: "0px",
            width: "100px"
        }
    );
});
