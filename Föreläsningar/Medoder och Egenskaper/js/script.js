//Length - enda array-egenskapen
let cars = ["bugatti", "ferrarri", "tesla", "volvo", "maybach", "volkswagen"];
console.log(cars, cars.length);
//Push - lägger till en grej längst bak i arrayen
cars.push("lucid");
console.log(cars, cars.length);
//Metoden returnerar även den uppdaterade egenskapen length
console.log(cars.push("bmw", "toyota"));
console.log(cars, cars.length);
//Pop - tar bort det senaste i arrayen
console.log(cars.pop());
console.log(cars);
console.log(cars.pop());
console.log(cars);
//Shift - tar bort det första i arrayen
//Pop - tar bort det senaste i arrayen
console.log(cars.shift());
console.log(cars);
console.log(cars.shift());
console.log(cars);
//Unshift - lägger till en grej längst fram i arrayen
cars.unshift("volvo", "audi");
console.log(cars);
//Concat - mergar två arrayer till en
let food = ["Ramen", "Bolognese", "Manaish", "pizza"];
const array3 = cars.concat(food);
console.log(array3);
//Includes - returnerar en bool om arrayen innehåller 'X' case sensitive
console.log(food.includes("ramen"));
console.log(food.includes("Lamen"));
//Reverse - ersätter orginalarrayen med en ny "omvänd" array även om man sparar den i en egen jävla variabel
let reverseFood = food.reverse();
console.log(reverseFood);
//Filter
const ages = [13, 63, 23, 18, 9, 33];
const result = ages.filter(checkAdult);
function checkAdult(age)
{
    return age >= 18;
}
console.log(result);
//Foreach
let sum = 0;
ages.forEach
(
    function(element, index)
    {
        ages[index] = element * element;
    }
);
console.log(ages);