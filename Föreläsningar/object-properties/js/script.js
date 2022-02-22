const mammal0 =
{
    type: "gorilla",
    tail: false,
    legs: 2,
    sound: "AAAAAH",
    makeSound: function()
    {
        console.log(mammal0.sound, mammal0.sound);
    }
}
console.log(mammal0);
console.log(mammal0.legs);
mammal0.makeSound();
const mammal1 =
{
    type: "dog",
    tail: true,
    legs: 4,
    sound: "woff",
    makeSound: function(numOfUses)
    {
        for (let i = 0; i < numOfUses; i++)
        {
            console.log(this.sound);
        }
    }
}
console.log("Type: ", mammal1.type, ", no of legs: ", mammal1.legs);
mammal0.legs = 6;
mammal0.tail = true;
mammal0.sound = "Hissss";
console.log("Type: ", mammal0.type,", no of legs: ", mammal0.legs,", Tail: ", mammal0.tail,", Sound: ", mammal0.sound);
mammal0.makeSound();
mammal1.makeSound(3);
console.log("                                                     ");
console.log("_____________________________________________________");
console.log("                                                     ");
const el0 =
{
    type: "h1",
    id: "title",
    color: "hotpink",
    content: "Hello user!"
};
const el1 =
{
    type: "p",
    id: "paragraph",
    color: "limegreen",
    content: "Hello again!"
};
createEl(el0);
createEl(el1);
function createEl(obj)
{
    const newEL = document.createElement(obj.type);
    document.body.appendChild(newEL);

    newEL.id = obj.id;
    newEL.style.color = obj.color;
    newEL.innerText = obj.content;
}
console.log("                                                     ");
console.log("_____________________________________________________");
console.log("                                                     ");
let array0 = [0, 1, 2, 3, 4];
let array1 = array0;
console.log (array0, array1);

array1[0] = 100;
console.log(array0, array1);

let arrayCopy = [];
Object.assign(arrayCopy, array1);
console.log("array1 ",array1,", arraCopy: ", arrayCopy);

arrayCopy[0] = 0;
console.log("array1", array1);
console.log("arrayCopy", arrayCopy);