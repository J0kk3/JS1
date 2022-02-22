// const divs = document.querySelectorAll("div");
// // console.log(div[0]);
// divs[0].addEventListener("click", function()
// {
//     anime(
//         {
//             targets: divs[0],
//             backgroundColor: "hsl(330, 100%, 71%)",
//             translateX: "80vw",
//             borderRadius: [ "0%", "50%"],
//             duration: 4000,
//             easing: "linear",
//             direction: "alternate",
//             loop: true,
//         }
//     );
// });

// divs[1].addEventListener("click", function()
// {
//     anime(
//         {
//             targets: divs[1],
//             backgroundColor: "hsl(800, 100%, 71%)",
//             translateX: "80vw",
//             rotate: "540deg",
//             borderRadius: [ "0%", "50%"],
//             duration: 5000,
//             easing: "easeInOutSine",
//             direction: "alternate",
//             loop: true,
//         }
//     );
// });

// anime(
//     {
//         targets: "h1",
//         rotate: "1turn",
//         easing: "linear",
//         duration: 3000,
//         delay: anime.stagger(500),
//         loop: true,
//     }
// );

// const div = document.querySelector("div");
// div.addEventListener("click", function(event)
// {
//     const col = _.random(0, 360);
//     if (event.target.nodeName === "H1")
//     {
//         anime(
//             {
//                 targets: event.target,
//                 scale: "300%",
//                 color: `hsl(${col} 80%, 70%)`,
//                 easing: "linear",
//                 direction: "alternate",
//                 duration: 200,
//             }
//         );
//     }
// });
const dots = document.querySelectorAll(".animation div");


const dotAnimation = anime(
    {
        targets: dots,
        translateX: "92vw",
        delay: anime.stagger(100),
        direction: "alternate",
        easing: "easeOutInBounce",
        loop: true,
        duration: 3000,
        backgroundColor: `hsl(330, 100%, 71%)`
        
    }
)
dotAnimation.pause();
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
// dotAnimation.pause();
play.addEventListener("click", dotAnimation.play);
pause.addEventListener("click", dotAnimation.pause);
