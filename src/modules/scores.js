const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/$^@<!/scores/';

export default class Scores {
  // Adds new score to the API
  addScore = async (name, score) => {
    await fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        name: "Snaky's game",
        result: 'Game with ID: $^@<! added.',
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  // Adds all the scores in the scoreboard from the API
  displayScore = async () => {
    const responce = await fetch(api);
    const arrayData = await responce.json();
    const scoreArray = arrayData.result.sort((a, b) => b.score - a.score);
    const scoreboard = document.querySelector('.scoreboard');
    scoreboard.innerHTML = '';
    scoreArray.forEach((player) => {
      const li = document.createElement('li');
      li.innerHTML = `
            ${player.user}: ${player.score}
            `;
      scoreboard.appendChild(li);
    });
  }
}