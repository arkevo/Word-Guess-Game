//Word Guess game by Ivo Kolev

// Create an array - carBrands Array
var carBrandsArray = ["FERRARI","FORD", "BMW", "MERCEDES","CORVETTE"];
// used to replace the word answer
var lettersGuessedElement = [];
// Create a variable - Wins - number of times a user succeded on guessing the word
var winsElement= 0;
// Create a variable - Losses - number of times a user failed to guess a letter
var lossesElement= 0;
var storeGuessedLetters =[];
// Create a variable - livesRemaining - number of times a user failed to guess a letter
var maxLives= 12;
var guessesRemaining = 0;
var gameOver = false;
var wordAnswer;

function setup() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

// Update the screen
function updateScreen() {
document.getElementById('wins').innerText = winsElement;
document.getElementById('losses').innerText = lossesElement;
document.getElementById('letters-guessed').innerText = lettersGuessedElement;
document.getElementById('lives-remaining').innerText = guessedRemaining;
document.getElementById('word-answer').innerText = storedGuessedLetters.join("");
};


