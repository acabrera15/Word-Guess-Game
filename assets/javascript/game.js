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

//functions makes something happen when a key is pushed
document.onkeyup = function (e) {
    var currentWord = document.getElementById('currentWord');
    var wordString = '';
    var randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

    if (currentWord.textContent === '') {

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === ' ') {
                wordString = wordString.concat(' ')
            } else {
                wordString = wordString.concat('_')
            }
        }
        alert(randomWord);
        currentWord.textContent = wordString; 
    }
};