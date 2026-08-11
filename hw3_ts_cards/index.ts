// interface for card
interface Card {
    value: number|string; 
    suite: string;
}

// creating a card 
const card: Card = {
    value: 3, 
    suite: 'clubs'
}
console.log(card);

// interface for deck 
interface Deck { 
    values: Array <number|string>;
    suites: string[];
} 

// class to create card 
class CardClass implements Card {
    value: number|string; 
    suite: string;

    constructor(value:number|string, suite:string) {
        this.value = value; 
        this.suite = suite; 
    }
}

// class to create deck 
class DeckClass implements Deck {
    // do I need to declare these here 
    values: Array <number|string>;
    suites: string[];
    // values = [2,3,4,5,6,7,8,9,'J','Q','K','A'];
    // suites = ['clubs', 'spades', 'hearts', 'diamonds'];
    // is it better to put this variable in the interface?
    cards: Array<Card> = [];

    constructor(values:Array<number|string>, suites:string[]){
        this.values=values;
        this.suites=suites;
        for(let value of this.values){
            for(let suite of this.suites){
                const card = new CardClass(value, suite);
                this.cards.push(card);
            }
        }
    }
}

let values = [2,3,4,5,6,7,8,9,'J','Q','K','A'];
let suites = ['clubs', 'spades', 'hearts', 'diamonds'];
const deck = new DeckClass(values, suites);  
console.log(deck);

    

// class Deck implements Card{ 
//     value: number; 
//     suite: string; 
//     constructor(value: number, suite: string) {
//         this.valie
//     }
// }

// shuffle function that you put deck into 

// draw function that you back deck into 