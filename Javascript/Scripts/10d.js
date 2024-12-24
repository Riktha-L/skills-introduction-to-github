function game() {
  resetButtons(); // Reset all buttons
  let gameButton = document.querySelector('.js-game');
  gameButton.classList.add('click-game');
}

function music() {
  resetButtons(); // Reset all buttons
  let musicButton = document.querySelector('.js-music');
  musicButton.classList.add('click-music');
}

function tech() {
  resetButtons(); // Reset all buttons
  let techButton = document.querySelector('.js-tech');
  techButton.classList.add('click-tech');
}

function resetButtons() {
  let buttons = document.querySelectorAll('.game, .music, .tech');
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('click-game', 'click-music', 'click-tech');
  }
}
