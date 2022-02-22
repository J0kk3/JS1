const firstFunc = function(){
    console.log('Det här sker från firstFunc, våran callback-funktion');
}
const secondFunc = function(callback){
    console.log('Det här sker från secondFunc, våran higher-order-funktion');
    callback();
}
secondFunc(firstFunc); //Loggar först rad 5, sen rad 2 på en ny rad

const square = function(x)
{
    return x*x;
}
const timesTwo = function(x)
{
    return x*2;
}
let result = square(23)
console.log(result);

result = timesTwo(23);
console.log(result);

const numbers = [2, 5, 9, 23, 57];
const numbersSquared = [];

//Vi loopar igenom alla element i arrayen numbers,
//för varje element skickar vi det värdet som argument till
//Funktionen square. Det returnerade värdet läggs sedan till i arrayen
//numbersSquared
for (let i = 0; i < numbers.length; i++)
{
    const result = square(numbers[i]);
    numbersSquared.push( result );
}
console.log(numbersSquared);
const numbersTimesTwo = [];
console.log(numbersTimesTwo);

const doMathOnArray = function(arr, func)
{
    const results = [];
    for(let i=0; i < arr.length; i++)
    {
        results.push(func( arr[i]) );
    }
    return results;
}
//Square är callback function
const numbersSquared2 = doMathOnArray(numbers, square);
console.log(numbersSquared2);
//timesTwo är callback
const numbersTimesTwo2 = doMathOnArray(numbers, timesTwo);
console.log(numbersTimesTwo2);