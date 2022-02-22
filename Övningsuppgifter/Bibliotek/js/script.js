const progressBar = document.getElementById("progressBar");
const progressBox = document.getElementById("progressBox");
const clickToAnimate = document.getElementById("clickToAnimate");

anime({
    targets: '#progressBox',
    width: ["0%", "100%"],
    // width: "100%",
    easing: 'easeInOutQuad',
    direction: 'alternate',
    // translateX: [0, 400],
    loop: true
  });

clickToAnimate.addEventListener("click", function(event)
{
    anime(
                {
                    targets: "#clickToAnimate",
                    background: "hsl(800, 100%, 71%)",
                    direction: "alternate",
                    easing: "linear",
                    duration: 250,

                    //TODO: lägg in en ny animation på en ny div som snurrar och har sig wait-animation
                    //som sen försvinner, ej loading då
                }
        )
});