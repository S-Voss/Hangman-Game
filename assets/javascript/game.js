  var wordList = ["entrepreneurial", "ambitious", "analytical", "humurous"];
  var vowelsList = ["a", "e", "i" , "o", "u"];
  var consonantsList = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

  //This code snippet randomly chooses a word for the game out of the wordList Array
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);

    //This code snippet populates the website with the blanks based on the length of the randomly chosen word
    var wordLength = randomWord.length + 1;

    var wordBlanks = [];
    for (var i = 0; i < randomWord.length; i++) {
      wordBlanks.push('_');
    }
    var wordBlanksString = wordBlanks.join(' ');

    var targetBlank = document.getElementById("wordBlank");
    targetBlank.innerHTML = "<h1>" + wordBlanksString + "</h1>";

    var guessedLetters = [];
    for (var i = 0; i < randomWord.length; i++) {
      guessedLetters.push('_');
    }

    var allGuessedLetters = [];

    var playerLives = 11;
    var totalGuesses = 0;
    var wonGames = 0;
    var lostGames = 0;

//GAME FUNCTION DECLARATIONS

    //This function runs if the user's guess is correct
    function correctGuess(userGuess) {
      for(var i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === userGuess) guessedLetters[i] = userGuess;
          console.log('Guessed letters: ', guessedLetters);
          var guessedLettersWord = guessedLetters.join(' ');
          targetBlank.innerHTML = guessedLetters.join(' ');
      }
      allGuessedLetters.push(userGuess);
    };

    //This function runs if the user's guess is incorrect
    function incorrectGuess(userGuess) {
      playerLives--;

      if (playerLives > 0) {
        var livesLeft = document.getElementById("lives");
          lives.innerHTML = "<li>Lives: " + playerLives + "</li>";
        allGuessedLetters.push(userGuess);
      } else {
        alert("You Lose");
        lostGames++;
        losses.innerHTML = "<li># of Losses: " + lostGames + "</li>";
      };
    };

//GAME LOGIC

  //This code-snippet listens for a user's guess
  document.onkeyup = function(event) {

    //This code snippet aptures the key press, converts it to lowercase, and saves it to the variable userGuess.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);

    //This function decides whether or not the user's guess is correct or not
    function checkUserGuess() {

      document.getElementById("guesses");
        guesses.innerHTML = "<li># of Guesses: " + totalGuesses + "</li>";

      if (randomWord.includes(userGuess) && allGuessedLetters.includes(userGuess) != true && guessedLetters.includes("_") === true) {
        correctGuess(userGuess);
        totalGuesses++;
      } else if (allGuessedLetters.includes(userGuess) != true && guessedLetters.includes("_") === true) {
        incorrectGuess(userGuess);
        totalGuesses++;
      } else if (guessedLetters.includes("_") === true) {
        alert("You already guess that!")
      } else {
        //This code snippet adds 1 to the total wins count.
        wonGames++;
        var wonGamesCount = document.getElementById("wins");
          wonGamesCount.innerHTML = "<li># of Wins: " + wonGames + "</li>"

        alert("YOU WON!!!")

        //This code snippet resets the game after you win.
          targetBlank.innerHTML = "<h1>" + wordBlanksString + "</h1>";

      }
    }

console.log(allGuessedLetters.includes(userGuess));
          checkUserGuess();

      //This code snippet displays the current user guesses.
      document.getElementById("overallGuesses");
        var allGuessedLettersString = allGuessedLetters.join(' ');
        overallGuesses.innerHTML = "<h6>Current Guesses: " + allGuessedLettersString + " ]" + "</h6>";

      console.log(allGuessedLetters);
  }
