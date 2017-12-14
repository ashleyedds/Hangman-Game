var wordList = ["TARHEELS", "WOLFPACK", "BLUEDEVILS", "EAGLES", "TIGERS", "SEMINOLES", "CARDINALS", "FIGHTINGIRISH", "ORANGE", "DEMONDEACONS", "YELLOWJACKETS", "HURRICANES", "PANTHERS", "CAVALIERS", "HOKIES"];
var lettersGuessed = [];
var answerArray = [];
var remainingGuesses = 10;
var wins = 0;

//Generates random word from array
var targetWord = wordList[Math.floor(Math.random() * wordList.length)];

//Displays target as a series of blanks
for (var i = 0; i < targetWord.length; i++) {
    answerArray[i] = "_ ";
}

//Resets game on win
function resetGame() {
    remainingGuesses = 10;
    lettersGuessed = [];
    answerArray = [];
    targetWord = wordList[Math.floor(Math.random() * wordList.length)]
    remainingLetters = targetWord.length;
    for (var i = 0; i < targetWord.length; i++) {
        answerArray[i] = "_ ";
    }
}

console.log(targetWord);

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
    if (event.keyCode >= 65 && event.keyCode <= 90){
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
    }

    //For losing
    if (remainingGuesses === 0) {
        document.getElementById("losing").play();
        alert("Too bad, you didn't get it this time.");
        window.location.reload();
    }

    //For winning
    if (remainingLetters === 0) {
        wins++;
        document.getElementById("winning").play()
        switch (targetWord) {
            case "TARHEELS":
                document.getElementById("basePhoto").src = "assets/images/tarheels.jpg"
                break;

            case "BLUEDEVILS":
                document.getElementById("basePhoto").src = "assets/images/bluedevils.jpg"
                break;

            case "CARDINALS":
                document.getElementById("basePhoto").src = "assets/images/cardinals.png"
                break;

            case "CAVALIERS":
                document.getElementById("basePhoto").src = "assets/images/cavaliers.png"
                break;

            case "DEMONDEACONS":
                document.getElementById("basePhoto").src = "assets/images/demondeacons.png"
                break;

            case "EAGLES":
                document.getElementById("basePhoto").src = "assets/images/eagles.jpg"
                break;

            case "FIGHTINGIRISH":
                document.getElementById("basePhoto").src = "assets/images/fightingirish.jpg"
                break;

            case "HOKIES":
                document.getElementById("basePhoto").src = "assets/images/hokies.png"
                break;

            case "HURRICANES":
                document.getElementById("basePhoto").src = "assets/images/hurricanes.png"
                break;

            case "ORANGE":
                document.getElementById("basePhoto").src = "assets/images/orange.png"
                break;

            case "PANTHERS":
                document.getElementById("basePhoto").src = "assets/images/panthers.png"
                break;

            case "SEMINOLES":
                document.getElementById("basePhoto").src = "assets/images/seminoles.png"
                break;

            case "TIGERS":
                document.getElementById("basePhoto").src = "assets/images/tigers.png"
                break;

            case "WOLFPACK":
                document.getElementById("basePhoto").src = "assets/images/wolfpack.jpg"
                break;

            case "YELLOWJACKETS":
                document.getElementById("basePhoto").src = "assets/images/yellowjackets.png"
                break;
        }
        resetGame();
    }

    //HTML display
    var html = "<p>Press any key to get started!</p>" +
        "<br>" +
        "<p>Wins" +
        "<br>" +
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

