//holds the total number of wins
var winTotal = 0;

//holds number of guesses
var numOfGuesses = 15;

//holds letters already guessed
var lettersGuessed = [];

//Songs that can be guessed with links
const hangmanWords = {
    'Enter Sandman': "https://www.youtube.com/embed/CD-E-LDc384",
    'Of Wolf and Man': "https://www.youtube.com/embed/6biUKaFD7AE",
    'Moth Into Flame': "https://www.youtube.com/embed/4tdKl-gTpZg",
    'Metal Militia': "https://www.youtube.com/embed/sdGrxMKKHbo",
    'All Nightmare Long': "https://www.youtube.com/embed/EFqjDXy9s5A",
    'Trapped Under Ice': "https://www.youtube.com/embed/455-CIgc7co",
    'The Unforgiven': "https://www.youtube.com/embed/Ckom3gf57Yw",
    'Bleeding Me': "https://www.youtube.com/embed/ftV_XepIwpo",
    'My Friend of Misery': "https://www.youtube.com/embed/ODHhWcEdrvg",
    'Master of Puppets': "https://www.youtube.com/embed/xnKhsTXoKCI",
    'Fuel': "https://www.youtube.com/embed/UBhqOvhy-6o",
    'Until it Sleeps': "https://www.youtube.com/embed/eRV9uPr4Dz4",
    'The Day That Never Comes': "https://www.youtube.com/embed/dkNfNR1WYMY"
};

var currentWord = document.getElementById('currentWord');//gets the current word ouputed to screen
var numGuesses = document.getElementById('numberOfGuesses'); //guess num of gueses output to screen
var winsOuput = document.getElementById('wins'); //total wins ouput
var videoOuput = document.getElementById('videoLink');
var lettersGuessedDiv = document.getElementById('lettersGuessedDiv');
var wordString = '';//holds the string that will be ouput to screen
var randomWord;
var randWordIndex = 0;
var guessedLetters = []

//functions makes something happen when a key is pushed
document.onkeyup = function (e) {
    console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        //initializes game
        if (currentWord.textContent === '') {
            randWordIndex = Math.floor(Math.random() * Object.keys(hangmanWords).length);
            randomWord = Object.keys(hangmanWords)[randWordIndex]; //get random word from array

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

                videoOuput.src = hangmanWords[Object.keys(hangmanWords)[randWordIndex]];
                currentWord.textContent = '';
                wordString = '';
                numOfGuesses = 15;
                numGuesses.textContent = numOfGuesses.toString();
            }
        }
    }
};

//checks to see if the letter is in the song title
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
        if (!guessedLetters.includes(letter)) {
            numOfGuesses--;
            numGuesses.textContent = numOfGuesses.toString();
            guessedLetters.push(letter);
            lettersGuessedDiv.textContent = guessedLetters.join(' ');
        }

        if (numOfGuesses === 0) {
            alert('You have lost!');
            currentWord.textContent = '';
            wordString = '';
            numOfGuesses = 15;
            numGuesses.textContent = numOfGuesses.toString();
        }
    }
}