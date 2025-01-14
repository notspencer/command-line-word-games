// Use command line arguments: to take the player’s move as an input from process.argv.
const args = process.argv.slice(2);
console.log(args);

// Set three options in an array and WIN, LOSS, DRAW as variables.
const rps = ['ROCK', 'PAPER', 'SCISSORS'];
const win = 'You have foiled me this time human, you better watch your back';
const loss = 'Easiest win of my robot life, GG human';
const draw = 'Simple human, we are barely equals; try again if you must stroke your ego.';

// Check if user provided one option && its one of the 3 set options. 
// Using args[0] because its the first user-generated option.
// Changing args[0] when checking for option inclusion to account for upper or lowercase variation. 
// All variation accepted with correct spelling.
if (args.length ===1 && rps.includes(args[0].toUpperCase())) {
  console.log('You chose: ', args[0].toUpperCase());
} else {
    console.log('Silly human, please provide a valid option from this curated menu:', rps.join(' [OR] '));
}

// The program should randomly generate a move for the computer (3 parts).
// 1. Generate random index
const randomizer = Math.floor(Math.random() * rps.length);

// 2. Select string from array using computerChoice
const robotChoice = rps[randomizer];

// 3. Log robotChoice and include string to make it clear which choice is the robots.
console.log('Your robot nemesis chose: ', robotChoice);

// Determine the winner based on the rules of Rock Paper Scissors. 
// Had an issue with this section because I wrote toUpperCase without parameters, getting 
// This error: TypeError: args[0].toUppercase is not a function
const result = determineResult(args[0].toUpperCase(), robotChoice);

function determineResult () {
if (
    args[0].toUpperCase() === 'ROCK' && robotChoice === 'ROCK' || 
    args[0].toUpperCase() === 'PAPER' && robotChoice === 'PAPER' ||
    args[0].toUpperCase() === 'SCISSORS' && robotChoice === 'SCISSORS') {
  return draw;
} else if (
    args[0].toUpperCase() === 'ROCK' && robotChoice === 'SCISSORS' ||
    args[0].toUpperCase() === 'SCISSORS' && robotChoice === 'PAPER' ||
    args[0].toUpperCase() === 'PAPER' && robotChoice === 'ROCK'){
  return win;  
} else {
  return loss;
}
}

// Output the result (win, lose, or draw) to the console.
console.log(result);