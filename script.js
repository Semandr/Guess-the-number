'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input or input number 0
  if (!guess || guess <= 0) {
    document.querySelector('.message').textContent = ' No number';

    // When player win
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      // console.log(highscore);
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When gues is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = '20';
  // document.querySelector('.highscore').textContent = '0';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
