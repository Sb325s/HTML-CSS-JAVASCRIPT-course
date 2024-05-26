const COLORS_ARRAY = [
  'blue',
  'cyan',
  'gold',
  'gray',
  'green',
  'magenta',
  'orange',
  'red',
  'white',
  'yellow',
];

function runGame() {
  let numTries = 0;
  let guess = '';
  let correct = false;

  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
  const target = COLORS_ARRAY[targetIndex];
  console.log(target);

  do {
    guess = prompt(
      'I am thinking of one of these colors:\n\n' +
        COLORS_ARRAY.join(',') +
        '\n\nWhat color am I thinking of?\n'
    );
    numTries += 1;
    if (guess === null) {
      alert('You have canceled the game.');
      return;
    }
    correct = checkGuess(guess, target);
  } while (!correct);

  alert(
    'Congrats you win!\n\n' +
      'It took you ' +
      numTries +
      ' tries to finish the game!\n\n' +
      'Hit ok to see the color in the background'
  );
  document.body.style.background = guess;

  function checkGuess(guess, target) {
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
      alert('Sorry, I dont recognize this color\n\n' + 'Please try again');
      return false;
    } else if (guess > target) {
      alert(
        'Sorry your guess is incorrect!\n\n' +
          'Hint: Your color is alphabetically higher than target.\n\n' +
          'Please try again'
      );
      return false;
    } else if (guess < target) {
      alert(
        'Sorry your guess is incorrect!\n\n' +
          'Hint: Your color is alphabetically lower than target.\n\n' +
          'Please try again'
      );
      return false;
    } else correct = true;

    return correct;
  }
}
