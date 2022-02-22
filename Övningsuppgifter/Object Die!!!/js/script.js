const die0 =
{
    side: 6,
    rollDie: function()
    {
        return Math.floor(1+Math.random() * this.side);
    }
}
console.log(die0.rollDie());

const dice = [];
for (let i = 0; i<5; i++)
{
    dice.push
    (
        {
            side: 6,
            currentValue: 1,
            rollDie: function()
            {
                this.currentValue = Math.floor(1+Math.random()
                * this.side);
            }
        }
    )
}
console.log(dice);
for(let i = 0; i<dice.length; i++)
{
    console.log(dice[i].currentValue);
}
for(let i = 0; i<dice.length; i++)
{
    dice[i].rollDie();
    console.log(dice[i].currentValue);
}