function first()
{
    console.log(0);
}
function second()
{
    console.log(1);
}
function third()
{
    console.log(2);
}
//setTimeout(callbackFunction, number) där
//miliseconds är antal milisekunder vi ska vänta
//innan funktionen shösh

//5 sekunder
setTimeout(third, 5000);
setTimeout(second, 3000);
setTimeout(first, 1000);

setTimeout(() => 
{console.log(2)}, 5000);