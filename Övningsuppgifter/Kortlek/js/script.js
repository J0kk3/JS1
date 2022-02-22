let deck = [];

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// let deckH3 = document.getElementById("deckH3");

function makeDeck()
{
    for(let i = 0; i < suits.length; i++)
    {
        //Valör
        for(let j = 0; j < values.length; j++)
        {

            deck.push(
                {
                    Value: values[j],
                    Suit: suits[i]
                }
            );
        }
    }
    //Sätt färg på skiten, förhoppningsvis
    // switch (suits)
    // {
    //     case "Hearts":
    //         //TODO: change 'X' below to the deckH3-HTML-element
    //         //X == color of the string printed out
    //         X.style.color = "red";
    //         break;
    //     case "Diamonds":
    //         X.style.color = "red";
    //         break;
    //     case "Spades":
    //         X.style.color = "black"
    //         break;
    //     case "Clubs":
    //         X.style.color = "black"
    //         break;
    //     default:
    //         console.log("Something went wrong i think...");
    //         break;
    // }
}
makeDeck();
// console.log(makeDeck());
// console.log(deck);

//This far everything gucci

function shuffleDeck(deckToShuffle)
{
    let shuffledDeck = [];
    for(let i = 0; i < 52; i++)
    {
        let shuffle = deckToShuffle.splice(Math.floor(Math.random()* deckToShuffle.length), 1);
        // console.log(shuffle);
        shuffledDeck.push( shuffle[0] );
    }
    return shuffledDeck;
}
const newDeck = shuffleDeck(deck);
console.log(newDeck);
//Funkar inte
function makePokerHand(deck)
{
    let pokerHand = [];
    for ( let i = 0; i < deck.length; i++)
    {
        pokerHand = deck.splice(5, 1);
        pokerHand.push(pokerHand[0])
    }
    return pokerHand;
}
makePokerHand(newDeck);
console.log(makePokerHand());