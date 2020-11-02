let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

 //generate target function that generates random nos btw 0 and 9
 const generateTarget = () => {
     return Math.floor(Math.random() * 9);
 }

 //comparing guesses for both human and computer
 const compareGuesses = (human, computer, target) => {
     if (human > 9) {
         return alert('Guess out of range!');
     }
     let humanDiff = Math.abs(target - human);
     let computerDiff = Math.abs(target - computer);
     if (computerDiff > humanDiff) {
         return false;
     } else {
         return true;
     }
 }

 //updating the winner's score after each round
 const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Error');
    }
 }

 //advancing rounds after a winner has emerged from the previous round
 const advanceRound = () => {
     currentRoundNumber++;
 }