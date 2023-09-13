const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function guessNumber() {
    rl.question('Gib eine Zahl zwischen 1 und 100 ein: ', (input) => {
      const guess = parseInt(input);

      if (isNaN(guess)) {
        console.log('Ungültige Eingabe. Bitte gib eine Zahl ein.');
        guessNumber();
      } else {
        attempts++;

        if (guess < randomNumber) {
          console.log('Zu niedrig!');
          guessNumber();
        } else if (guess > randomNumber) {
          console.log('Zu hoch!');
          guessNumber();
        } else {
          console.log(`Richtig geraten! Die Zahl war ${randomNumber}. Du hast ${attempts} Versuche gebraucht.`);
          rl.question('Möchtest du ein neues Spiel starten? (ja/nein) ', (answer) => {
            if (answer.toLowerCase() === 'ja') {
              startGame();
            } else {
              rl.close();
            }
          });
        }
      }
    });
  }

  guessNumber();
}

startGame();