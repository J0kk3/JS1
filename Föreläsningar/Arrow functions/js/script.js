function double(x)
{
    return x + x;
}
const double = x => x + x;

console.log(double(3));

//Bytar ut function(x) mot (x) =>
const doubleArrowStar = (x) => x*y;

console.log(doubleArrow(3));

const noPar = () => "string";
console.log(noPar());

//Arrow function som en callback function
const numbers = [2, 3, 9, 23, 57];
const doMathOnArray = function(arr, func)
{
    const results = [];
    for (let i = 0; i < arr.length; i++)
    {
        results.push ( func(arr[i]));
    }
    return results;
}

const newNumbers = doMathOnArray(numbers, x => x * 2);
console.log(numbers);

//filter() med en arrow function som callback function
const moreNumbers = [34, 16, 64, 2, 56, 83];
const belowTwenty = moreNumbers.filter(number => number <= 20);
console.log(belowTwenty);