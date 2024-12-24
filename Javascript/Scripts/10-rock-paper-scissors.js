let score = JSON.parse(localStorage.getItem('Score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

        function play(userMove) {
            const randomnum = Math.random();
            let comMove = '';
            if (randomnum < 1 / 3) {
                comMove = 'Rock';
            } else if (randomnum < 2 / 3) {
                comMove = 'Paper';
            } else {
                comMove = 'Scissors';
            }

            let result = '';
            if (userMove.toLowerCase() === comMove.toLowerCase()) {
                result = 'Tie!';
                score.ties += 1;
            } else if (
                (userMove.toLowerCase() === 'rock' && comMove === 'Scissors') ||
                (userMove.toLowerCase() === 'paper' && comMove === 'Rock') ||
                (userMove.toLowerCase() === 'scissors' && comMove === 'Paper')
            ) {
                result = 'You Win!';
                score.wins += 1;
            } else {
                result = 'You Lose!';
                score.losses += 1;
            }

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-move').innerHTML = `
                You picked <img src="images/${userMove.toLowerCase()}-emoji.png" class="move-icon" alt="${userMove}"> 
                and computer picked <img src="images/${comMove.toLowerCase()}-emoji.png" class="move-icon" alt="${comMove}">
            `;

            localStorage.setItem('Score', JSON.stringify(score));
            updateScoreElement();
        }

        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function resetScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.setItem('Score', JSON.stringify(score));
            updateScoreElement();
        }
  