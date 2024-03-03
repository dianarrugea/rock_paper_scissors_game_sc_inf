// Implement “play” function that is a “Rock, paper, scissors” game.
// Implementations notes:
// ­Create an array with all the possibilities (rock, paper, scissors);
// ­Pick a random option for Computer ( use Math.random);
// ­Pick a random option for User ( use Math.random);
// ­Apply game rules for both options (use if/else if structures)
// Calling “play()” function will display in console something like this:
// Computer choice: “Rock”
// User choice: “Paper”
// User wins

gamePossibilities = ['rock', 'paper', 'scissors'];

function play () {
  var computerRoll = Math.floor(Math.random() * 3);
  var computerChoice = gamePossibilities[computerRoll];
  console.log('Computer choice: ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));

  var userRoll = Math.floor(Math.random() * 3);
  var userChoice = gamePossibilities[userRoll];
  console.log('User choice: ' + userChoice.charAt(0).toUpperCase() + userChoice.slice(1));

  if (computerRoll === 2 && userRoll === 1 || computerRoll === 1 && userRoll === 0 || computerRoll === 0 && userRoll === 2){
    console.log('Computer wins!')
  } else if (computerRoll === userRoll) {
    console.log("It's a tie!")
  } else {
    console.log('User wins!')
  }

}

play();

