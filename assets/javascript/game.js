//Word Guess game by Ivo Kolev

//Variables 


// Create an array - carBrands Array
var carBrandsArray = ["FERRARI", "FORD", "BMW", "MERCEDES", "CORVETTE", "FIAT", "MITSUBISHI"];

// Create a variable set to an empty array, where you will placece the underscore _ characters here
var lettersGuessedElement = [];

// Create a variable - Wins - number of times a user succeded on guessing the word
var winsElement = 0;

// Create a variable - Losses - number of times a user failed to guess a letter
var lossesElement = 0;

//Create a variable set to an empty array,where you will store which letters you have guessed
var storeGuessedLetters = [];

// Create a variable - to use
var maxLives = 12;

//Create a variable - to store number of times a user failed to guess a letter 
var guessesRemaining = 0;

//Create a variable - to track when the game is over using a boolean
var gameOver = false;

//create a variable - to randomly select a word from the array and have the functions keep referring to it for the word
var wordAnswer;


//create a function which will run at the beginning at game and whenever the user has won or lost the game


//Methods 


//Create a randomizer to randomly choose a word from the array and store it in the wordAnswer variable
function initializeTheGame() {
  wordAnswer =
    carBrandsArray[Math.floor(Math.random() * carBrandsArray.length)];
    //reset the underscore characters back to empty string
    lettersGuessedElement = [];
//Create a loop which will run through the character length of the randomly chosen word and store a "_" in the lettersGuessedElement the amount of character length times
  for (var i = 0; i < wordAnswer.length; i++) {
    lettersGuessedElement[i] = "_";
  }
  //Reset the guessesRemaining variable back to 12
  guessesRemaining = maxLives;
  //reset the guessed letters back to empty string
  storeGuessedLetters = [];
  //run the function updateHTML (see below)
  updateHtml();
}

 //Create a function  which will write the value for the wins, lost, guessed remaining, letters guesses in the word, and previously guessed letters
function updateHtml() {
  document.getElementById("wins").innerText = winsElement;
  document.getElementById("losses").innerText = lossesElement;
  document.getElementById("letters-guessed").innerText = storeGuessedLetters;
  document.getElementById("lives-remaining").innerText = guessesRemaining;
  //Use join to remove the commas added to lettersGussedElement
  document.getElementById("word-answer").innerText = lettersGuessedElement.join(
    ""
  );
}

//Create a function to check if you have guessed the word correctly and congratulate if so end the game, congratulate, and increase wins by 1
function wonGame() {
    // Create a condition that checks if the underscore storage variable does not have any values in its array
  if (lettersGuessedElement.indexOf("_") === -1) {
    winsElement++;
    // Set the variable gameover to true so the word can reinitialize
    gameOver = true;
     //send an allert that you lost the game
    alert("Congratulations! You guessed the word correctly.");
  }
}

//Create a function to check if you have guessed the word correctly and congratulate if so end the game, say you should try again, and increase lost by 1
function lostGame() {
    // Create a condition that checks if the guesses remaining storage variable has 0 or less chances
  if (guessesRemaining <= 0) {
      //If you ran out of guessed, increase lost by 1
    lossesElement++;
    // Set the variable gameover to true so the word can reinitialize
    gameOver = true;
    //send an allert that you lost the game
    alert("I'm Sorry. You did not guess the word in enough tries.");
  }
}

//Main Process

//Create a function which will fire on a key press 
document.onkeyup = function(event) {
//Create a condition to check if the gameover variable has been set to true, which means the game just ended
  if (gameOver) {
//If the game just ended run the initializeTheGame function
    initializeTheGame();
//And set the gameOver variable to false so this does not run again
    gameOver = false;
  } else {
//If the game is not over, create a condition to monitor that only alphabet is pressed using keycode between 65 and 90
    if (event.keyCode >= 65 && event.keyCode <= 90) {
//Run the function guess and set the key to upper case
      guess(event.key.toUpperCase());
//Run the updateHTML and update all the variables on the HTML with their current values
      updateHtml();
//Runt the wonGame check function
      wonGame();
      //Runt the lostGame check function
      lostGame();
    }
  }
};

//Create a function which will run after a key has been pressed from the event function above
function guess(lettersFunction) {
//Create a condition to count the elemnet indexes of the parameter of guess function
    if (storeGuessedLetters.indexOf(lettersFunction) === -1) {
//If there are no element indexes inside of lettersFunction then push the value of storeGuessedLetters into the parameter
      storeGuessedLetters.push(lettersFunction);
//Create a condition to count the elemnet indexes of the lettersfunction
      if (wordAnswer.indexOf(lettersFunction) === -1) {
        guessesRemaining--;
      } else {
        for (var i = 0; i < wordAnswer.length; i++) {
          if (lettersFunction === wordAnswer[i]) {
            lettersGuessedElement[i] = lettersFunction;
          }
        }
      }
    }
  }

initializeTheGame();
updateHtml();
