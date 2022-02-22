//underscore array methods
const arr1 = [4, 6, 1, 437, 3, 75, 4];
const arr2 = [8, 1, 75, 3, 0];

const difArr = _.difference(arr1, arr2);
console.log(difArr);

const arr3 =[1, 3, 75, 4, 10];
const interArr = _.intersection(arr1, arr2, arr3);
console.log(interArr);

//Objects - leta upp och använd keys och has
//Keys
const obj =
{
    a: 1,
    b: 2,
    c: 3,
};
const keyArray = _.keys(obj);
console.log(keyArray);
//Has (haskey)
console.log( _.has(obj, "a"));
console.log( _.has(obj, "z"));

console.log( _.random(5, 800));
console.log( _.random(0, 4));