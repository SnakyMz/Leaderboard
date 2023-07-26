const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/$^@<!/scores/';
const submitMsg = document.querySelector('#submitMsg');

export default class Scores {
  // Adds new score to the array
  addScore = async (name, score) => {
    await fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        "name": "Snaky's game",
        "result": "Game with ID: $^@<! added.",
        user: name,
        score: score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
      .then(response => response.json())
      .then(json => {
        submitMsg.innerHTML = json.result;
        submitMsg.style.display = 'block';
      })
  }

  // Adds all the scores in the scoreboard from the array
  displayScore = async () => {
    await fetch(api)
      .then(responce => responce.json())
      .then(json => {
        const scoreArray = json.result.sort((a, b) => b.score - a.score);
        const scoreboard = document.querySelector('.scoreboard');
        scoreboard.innerHTML = '';
        scoreArray.forEach((player) => {
          const li = document.createElement('li');
          li.innerHTML = `
            ${player.user}: ${player.score}
            `;
          scoreboard.appendChild(li);
        });
      })
  }
}