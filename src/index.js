import './style.css';
import Scores from './modules/scores.js';

const scores = new Scores();

const form = document.querySelector('form');
const playerName = document.querySelector('.playerName');
const playerScore = document.querySelector('.playerScore');
const refreshBtn = document.querySelector('.refreshBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  scores.addScore(playerName.value, playerScore.value);
  form.reset();
});

refreshBtn.onclick = () => {
  scores.displayScore();
};