// Strategies for avoiding long and nested if/else statments, which are hard to maintain 

// EXAMPLE 1: object to store data

const animalKeyAndValue = {
  'dog': 'Woof', 
  'cat': 'Maybe Meow', 
  'fox': 'hachehache', 
  'hamster':'squeak'
}

function animalNoiseGen(animal){
  const animalToReturn = animalKeyAndValue[animal];
  return animalToReturn
}

animalNoiseGen('dog')

// EXAMPLE 2: lookup 
// note lookup is part of the strategy design pattern 

const rangerLookup = {
  "yellow": "Trini",
  "red": "Jason",
  "green": "Tommy", 
}

function powerRangerChooser(color){
  const x = rangerLookup[color] || 'NOOO';
  return x;
}

powerRangerChooser('red')

// WITH CLASS TO CREATE POWER RANGER OBJECT - this could be overengineering depending on the context 
// class PowerRanger {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color
//   } 
// }

// const lookup = {
//   yellow: new PowerRanger("Trini", "yellow"),
//   red: new PowerRanger("Jason", "red"),
//   green: new PowerRanger("Tommy", "green"),
//   black: new PowerRanger("Zach", "black"),
//   blue: new PowerRanger("Billy", "blue"),
//   pink: new PowerRanger("Kimberly", "pink"),  
// }

// function powerRangerChooser(color){
//   rangerColor = lookup[color];
//   if(!rangerColor) return 'error';
  
//   return rangerColor.name;
// }

// powerRangerChooser("blue")
