const div = document.querySelector("div");
div.addEventListener("click", function()
{
    alert("Div");
});
const art = document.querySelector("article");
art.addEventListener("click", function()
{
    alert("Article");
});
const btn = document.querySelector("button");
btn.addEventListener("click", function()
{
    alert("Button");
});
const sec = document.querySelector("section");
sec.addEventListener("click", function()
{
    alert("Section");
});
const p = document.querySelector("p");
p.addEventListener("click", function(event)
{
    alert("Paragraph");
    event.stopPropagation();
});