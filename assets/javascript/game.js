var wordList = ["TARHEELS", "WOLFPACK", "BLUEDEVILS", "EAGLES", "TIGERS", "SEMINOLES", "CARDINALS", "FIGHTINGIRISH", "ORANGE", "DEMONDEACONS", "YELLOWJACKETS", "HURRICANES", "PANTHERS", "CAVALIERS", "HOKIES"];
var lettersGuessed = [];
var answerArray = [];
var remainingGuesses = 10;
var wins = 0;

function refreshHTML() {
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
        lettersGuessed + "</p>";
    document.querySelector('#game').innerHTML = html;
}

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

refreshHTML();

//Captures user's keypress
document.onkeyup = function () {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
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
        document.getElementById("winning").play();
        switch (targetWord) {
            case "TARHEELS":
                document.getElementById("basePhoto").src = "assets/images/tarheels.jpg";
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

        switch (targetWord) {
            case "TARHEELS":
                document.getElementById("teamName").innerHTML = "<p>UNC Tar Heels!</p>"
                break;

            case "BLUEDEVILS":
                document.getElementById("teamName").innerHTML = "<p>Duke Blue Devils!!</p>"
                break;

            case "CARDINALS":
                document.getElementById("teamName").innerHTML = "<p>Louisville Cardinals!</p>"
                break;

            case "CAVALIERS":
                document.getElementById("teamName").innerHTML = "<p>UVA Cavaliers!</p>"
                break;

            case "DEMONDEACONS":
                document.getElementById("teamName").innerHTML = "<p>Wake Forest Demon Deacons!</p>"
                break;

            case "EAGLES":
                document.getElementById("teamName").innerHTML = "<p>Boston College Eagles!</p>"
                break;

            case "FIGHTINGIRISH":
                document.getElementById("teamName").innerHTML = "<p>Notre Dame Fighting Irish!</p>"
                break;

            case "HOKIES":
                document.getElementById("teamName").innerHTML = "<p>Virginia Tech Hokies!</p>"
                break;

            case "HURRICANES":
                document.getElementById("teamName").innerHTML = "<p>Miami Hurricanes!</p>"
                break;

            case "ORANGE":
                document.getElementById("teamName").innerHTML = "<p>Syracuse Orange!</p>"
                break;

            case "PANTHERS":
                document.getElementById("teamName").innerHTML = "<p>Pittsburgh Panthers!</p>"
                break;

            case "SEMINOLES":
                document.getElementById("teamName").innerHTML = "<p>Florida State Seminoles!</p>"
                break;

            case "TIGERS":
                document.getElementById("teamName").innerHTML = "<p>Clemson Tigers!</p>"
                break;

            case "WOLFPACK":
                document.getElementById("teamName").innerHTML = "<p>NC State Wolfpack!</p>"
                break;

            case "YELLOWJACKETS":
                document.getElementById("teamName").innerHTML = "<p>Georgia Tech Yellow Jackets!</p>"
                break;
        }
        resetGame();
    }
    refreshHTML();
};
