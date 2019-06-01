//holds the total number of wins
var winTotal = 0;

//holds number of guesses
var numOfGuesses = 15;

//holds letters already guessed
var lettersGuessed = [];

//Songs that can be guessed
const hangmanWords = [
    'Enter Sandman',
    'Of Wolf and Man',
    'Moth Into Flame',
    'Metal Militia',
    'All Nightmare Long',
    'Trapped Under Ice',
    'The Unforgiven',
    'Bleeding Me',
    'My Friend of Misery',
    'Master of Puppets',
    'Fuel',
    'Until it Sleeps',
    'The Day That Never Comes'
]

var currentWord = document.getElementById('currentWord');//gets the current word ouputed to screen
var numGuesses = document.getElementById('numberOfGuesses'); //guess num of gueses output to screen
var winsOuput = document.getElementById('wins'); //total wins ouput
var wordString = '';//holds the string that will be ouput to screen
var randomWord;

//functions makes something happen when a key is pushed
document.onkeyup = function (e) {

    //initializes game
    if (currentWord.textContent === '') {
        randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]; //get random word from array

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === ' ') {
                wordString = wordString.concat(' ')
            } else {
                wordString = wordString.concat('_')
            }
        }
        alert(randomWord);
        currentWord.textContent = wordString;
        numGuesses.textContent = numOfGuesses.toString();
        letterChecker(e.key);
    } else {
        letterChecker(e.key);
        if (!wordString.includes('_')) {
            winTotal++;
            winsOuput.textContent = winTotal;
        }
    }
};

let letterChecker = function (letter) {
    if (randomWord.includes(letter.toLowerCase()) ||
        randomWord.includes(letter.toUpperCase())) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter.toLowerCase() ||
                randomWord[i] === letter.toUpperCase()) {
                wordString = wordString.substr(0, i) + letter + wordString.substr(i + 1);
            }
        }
        currentWord.textContent = wordString;
    } else {
        numOfGuesses--;
        numGuesses.textContent = numOfGuesses.toString();
    }
}