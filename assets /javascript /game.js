//Keyboard choices available for the player 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables set to zero 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

//The functions for the new variables once the game begins

var newGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Computer will choose a random letter from the var list above and will console log the selection
var nextLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

//Tracks and displays each letter pressed
var newGuessesSoFar = function() {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//Function to rest the game 
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    nextLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

//A key press equals one guess and removes one guess left 
document.onkeyup = function(event) {
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

    //Sets guess requirements to lowercase keys only 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //Push the user guess and update functions 
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //If the user guess the letter correctly while having guesses left, they win. If they run out of guess, they lose
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Wow! You are psychic!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("You're not a psychic, try again!");

        reset();
    }
};