class Card {
    constructor(value, suite) {
        this.value = value; 
        this.suite = suite; 
    }
  
  toString() {
    //makes a string out of whatever is after $
    return `${this.value} of ${this.suite}`;
  }
}

// use const here because it is block scoped and can't change the  data the const points to --> safety bc can't be overridden
//can override propoerty inside the object card.value = 4 
// let is block scoped but can be changed 
const card = new Card(2, 'hearts');
console.log(card.toString());

class Deck {
  // setting properties
  cards = [];
  values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  suites = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  constructor(){
    // for loop shorthand
    for(let value of this.values){
      for(let suite of this.suites){
        const card = new Card(value, suite);
        this.cards.push(card);
      }
    }
  }
  
  draw(){
  return this.cards.pop();
  };

  shuffle(){
    // Fisher-Yates shuffle: walk through array, find random value and replace
    // solidify: how to swap elements in an array 
    for(let i=0; i<this.cards.length; i++) {
      const temp = this.cards[i];
      const randomIndex = Math.floor(Math.random()*(this.cards.length));
      const randomCard = this.cards[randomIndex];

      //swap
      this.cards[i] = randomCard;
      this.cards[randomIndex] = temp;
    }
  }
}

const deck = new Deck();
console.log(deck);
console.log(deck.draw());
