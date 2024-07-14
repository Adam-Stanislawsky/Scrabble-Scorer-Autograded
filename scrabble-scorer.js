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
   // console.log("Let's play some scrabble! Enter a word:");
   initialWord = input.question("Let's play some scrabble! Enter a word: ");
   return initialWord;
};

let newPointStructure;


// simple score-------------------------------------
let simpleScorer;

simpleScorer = function(word){
	word = word.toLowerCase();
	let score = 0;
 
	for (let i = 0; i < word.length; i++) {
      score++
	}
	return score;
 }
//---------------------------------------------------

 //vowel bonus score----------------------------------
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
//----------------------------------------------------

let scrabbleScorer;

const scoringAlgorithms = [
   { name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer, },
   { name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScorer, },
   { name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: oldScrabbleScorer, }
];


function scorerPrompt() {
   let scoreChoice = input.question()
}

// function scorerPrompt() {
//     // Prompt the user to select a scoring algorithm
//     let userChoice = prompt("Select a scoring algorithm:\n0 - Simple Scorer\n1 - Vowel Bonus Scorer\n2 - Scrabble Scorer");
    
//     // Convert the user input to a number
//     userChoice = parseInt(userChoice, 10);
    
//     // Return the corresponding scoring function based on user input
//     if (userChoice === 0) {
//         return simpleScorer;
//     } else if (userChoice === 1) {
//         return vowelBonusScorer;
//     } else if (userChoice === 2) {
//         return scrabbleScorer;
//     } else {
//         // If the input is invalid, default to simple scorer
//         console.log("Invalid choice. Defaulting to Simple Scorer.");
//         return simpleScorer;
//     }
// }

function transform() {};


//--------------------------program running portion
function runProgram() {
   initialPrompt();
   // console.log(oldScrabbleScorer(initialWord));
   console.log(vowelBonusScorer(initialWord));
   console.log(simpleScorer(initialWord));
}
//--------------------------program running portion

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
