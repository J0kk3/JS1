const car =
{
    color: "red",
    window: "manual",
    model: "tesla",
    honk: function()
    {
        console.log("Beep!");
    },
    seat:
    {
        color: "blue",
        material: "fake-leather <3"
    }
}
console.log(car);
console.log(car.color);
car.honk();

// function drawPlayer(obj);

let propertyValue = 1;
const obj =
{
    propertyName: propertyValue,
    methodName: function()
    {
        console.log(this.propertyName);
    }
};
obj.methodName();

const players = 
[
    {
        name: "Forqan",
        score: 0
    },
    {
        name: "Benny",
        score: 0
    },
    {
        name: "Natha",
        score: 0
    },
    {
        name: "Lian",
        score: 0
    },
    {
        name: "Lina",
        score: 0
    },
    {
        name: "Jocke",
        score: 0
    }
]
console.log(players);
for( let i=0; i<players.length; i++)
{
    if(players[i].name === "Forqan")
    {
        players.splice(i, 1)
        break;
    }
}
console.log(players);