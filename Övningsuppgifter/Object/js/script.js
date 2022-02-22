let book =
{
    title: "Dog",
    author: "Joakim Sjöström",
    genres: ["Horror", "comedy", "drama"]
};
console.log(book.genres);
let person =
{
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@gritacademy.se',
    role: 'ninjah',
    adress:
    {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}
console.log(person.adress.city);

const target = newObject = 
{
    name: "",
    email: "",
    role: "",
    adress:
    {
        street: "",
        zip: "",
        city: ""
    }
};
Object.assign(target, person);
console.log("new object:");
console.log(newObject);
let dog =
{
    name: "Hilda",
    breed: "Collie",
    bark: function()
    {
        console.log(`Woff my name is: ${dog.name}`);
    }
}
dog.bark();

console.log(Object.keys(person));