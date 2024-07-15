// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let initialWord;

function initialPrompt() {
   initialWord = input.question("Let's play some scrabble! Enter a word: ");
   return initialWord;
};


let newPointStructure = transform(oldPointStructure);



let simpleScorer;

simpleScorer = function(word){
	word = word.toLowerCase();
	let score = 0;
 
	for (let i = 0; i < word.length; i++) {
      score++;
	}
	return score;
 }

let vowelBonusScorer;

vowelBonusScorer = function(word){
   let vowels = "aeiou";
   let score = 0;
   word = word.toLowerCase();
   
   for (let i = 0; i < word.length; i++) {
       let char = word[i];
       
       if (vowels.includes(char)) {
           score += 3;
       } else {
           score += 1;
       }
   }    return score;
}

let scrabbleScorer;

scrabbleScorer = function(word) {
	word = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      letterPoints += newPointStructure[letter];
	}
	return letterPoints;
 }

const scoringAlgorithms = [
   { name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer, },
   { name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScorer, },
   { name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: scrabbleScorer, }
];


function scorerPrompt() {
   let scoreChoice = input.question(
   `Which scoring algorithm would you like to use?

   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `
   );

   return console.log(`Points for '${initialWord}': ${scoringAlgorithms[scoreChoice].scorerFunction(initialWord)}`);

}


function transform(oldStructure) {

   let newScrabblePointStructure = {};

   for (let pointValue in oldStructure) {
      let letters = oldStructure[pointValue];
      for (let i = 0; i < letters.length; i++) {
          let letter = letters[i];
          newScrabblePointStructure[letter.toLowerCase()] = Number(pointValue); 
      }
  }
  
  return newScrabblePointStructure;

};


function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
