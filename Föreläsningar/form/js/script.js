const email = document.getElementById("email");
const btn = document.querySelector("button");

email.addEventListener("input", function()
{
    if (email.validity.typeMismatch)
    {
        email.setCustomValidity("Här kan du skriva vad du vill");
    }
    else
    {
        email.setCustomValidity("");
    }
});
//Funkar inte med submit
btn.addEventListener("click", function(event)
{
    event.preventDefault();
})