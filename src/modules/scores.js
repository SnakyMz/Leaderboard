export default class Scores {
  constructor() {
    this.array = [];
  }

    // Adds new score to the array
    addScore = (name, score) => {
      const arrayObject = {};
      arrayObject.name = name;
      arrayObject.score = score;
      this.array.push(arrayObject);
      this.displayScore();
    }

    // Adds all the scores in the scoreboard from the array
    displayScore = () => {
      const scoreboard = document.querySelector('.scoreboard');
      scoreboard.innerHTML = '';
      this.array.forEach((player) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${player.name}: ${player.score}
            `;
        scoreboard.appendChild(li);
      });
    }
}