'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const bgColor = backgroundColor =>
  (document.querySelector('body').style.backgroundColor = backgroundColor);

const scoreContent = content =>
  (document.querySelector('.score').textContent = content);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input or input number 0
  if (!guess || guess <= 0) {
    displayMessage('No number');
    // When player win
  } else if (guess === secretNum) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.number').style.width = '30rem';
    bgColor('#60b347');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is too high
  }

  // When guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      score--;
      scoreContent(score);
    } else {
      displayMessage('You lost the game');
      scoreContent(0);
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  scoreContent('20');
  displayMessage('Start guessing...');
  bgColor('#222');
});
