var wordList = ["TARHEELS", "WOLFPACK", "BLUEDEVILS", "EAGLES", "TIGERS", "SEMINOLES", "CARDINALS", "FIGHTINGIRISH", "ORANGE", "DEMONDEACONS", "YELLOWJACKETS", "HURRICANES", "PANTHERS", "CAVALIERS", "HOKIES"];

//Generates random word from array
var targetWord = wordList[Math.floor(Math.random()*wordList.length)];

console.log(targetWord); 

//Creates blanks to fill in with the target word
var answerArray = [];

for (var i = 0; i < targetWord.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = targetWord.length;

//HTML display
var html = "<p>Press any key to get started!</p>" +
"<br>" +
"<p>Wins</p>" +
"<br>" +
"<p>Current word" + 
"<br>" +
answerArray.join (""); + "</p>" +
"<br>" +
"<p>Number of guesses reamining</p>" +
"<br>" +
"<p>Letters already guessed</p>"

document.querySelector('#game').innerHTML = html;

console.log(answerArray.join(""));

//Captures user's keypress
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

    for (var j = 0; j < targetWord.length; j++){
        if (targetWord[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
        }
        //HTML display
        var html = "<p>Press any key to get started!</p>" +
        "<br>" +
        "<p>Wins</p>" +
        "<br>" +
        "<p>Current word" + 
        "<br>" +
        answerArray.join (""); + "</p>" +
        "<br>" +
        "<p>Number of guesses reamining</p>" +
        "<br>" +
        "<p>Letters already guessed</p>"

        document.querySelector('#game').innerHTML = html;
    }
};

