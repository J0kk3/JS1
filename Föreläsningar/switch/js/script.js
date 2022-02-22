const randomNumber = Math.ceil( math.random() * 3 );
console.log( randomNumber );

switch ( randomNumber )
{
    case 1:
        console.log("En etta");
        break;
    case 2:
        console.log("En tvåa");
        break;
    case 3:
        console.log("En trea");
        break;
}

if (randomNumber === 1)
{
    console.log("En etta");
}
else if ( randomNumber === 2)
{
    console.log("En tvåa");
}
else if (randomNumber === 3)
{
    console.log("En trea");
}

const word = "three";
switch (word)
{
    case "one":
        console.log("en etta")
        break;
    case "two":
        console.log("en tvåa");
        break;
    case "three":
        console.log("en trea");
        break;
}
//Case utan break
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const day = [ Math.floor( Math.random() * 7) ];
console.log ("today is" + day);
switch(day)
{
    case "monday":
        console.log("monday, sad times");
    case "tuesday":
    console.log ("tuesday");
    case "wednesday":
    console.log ("wednesday");
    case "thursday":
    console.log ("thursday");
    case "friday":
    console.log ("friday");
    case "saturday":
    console.log ("saturday");
    case "sunday":
    console.log ("sunday");
}
//Default
const randomNumber = Math.ceil( Math.random() * 10 );
console.log(randomNumber);
switch (randomNumber)
{
  case 1:
    console.log("En etta");
    break;
  case 2:
    console.log("En tvåa");
    break;
  case 3:
    console.log("En trea");
    break;
  default:
    console.log('Numret är mer än tre');
}