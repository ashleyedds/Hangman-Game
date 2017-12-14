var wordList = ["TARHEELS", "WOLFPACK", "BLUEDEVILS", "EAGLES", "TIGERS", "SEMINOLES", "CARDINALS", "FIGHTINGIRISH", "ORANGE", "DEMONDEACONS", "YELLOWJACKETS", "HURRICANES", "PANTHERS", "CAVALIERS", "HOKIES"];
var lettersGuessed = [];
var answerArray = [];
var remainingGuesses = 10;
var wins = 0;


//Generates random word from array
var targetWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(targetWord);

//Displays target as a series of blanks
for (var i = 0; i < targetWord.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = targetWord.length;


//HTML display
var html = "<p>Press any key to get started!</p>" +
    "<br>" +
    "<p>Wins" +
    "<br>" +
    wins + "</p>" +
    "<br>" +
    "<p id=>Current word" +
    "<br>" +
    answerArray.join("") + "</p>" +
    "<br>" +
    "<p>Number of guesses remaining" +
    "<br>" +
    remainingGuesses + "</p>" +
    "<br>" +
    "<p>Letters already guessed</p>"

document.querySelector('#game').innerHTML = html;

//Captures user's keypress
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var correctGuess = false;

    for (var j = 0; j < targetWord.length; j++) {
        if (targetWord[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
            correctGuess = true;
        }
    }

    if (correctGuess === false) {
        remainingGuesses--;
        if (lettersGuessed.indexOf(userGuess) === -1) {
            lettersGuessed.push(userGuess);
        }
    }

    //For losing
    if (remainingGuesses === 0) {
        alert("Too bad, you didn't get it this time.");
        window.location.reload();
        }
    
    //For winning
    if (remainingLetters === 0){
        wins++;
        }

    //HTML display
    var html = "<p>Press any key to get started!</p>" +
        "<br>" +
        "<p>Wins" +
        "<br>"+
        wins + "</p>" +
        "<br>" +
        "<p>Current word" +
        "<br>" +
        answerArray.join("") + "</p>" +
        "<br>" +
        "<p>Number of guesses remaining" +
        "<br>" +
        remainingGuesses + "</p>" +
        "<br>" +
        "<p>Letters already guessed" +
        "<br>" +
        lettersGuessed + "</p>"

    document.querySelector('#game').innerHTML = html;
};

