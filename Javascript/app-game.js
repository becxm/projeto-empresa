const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startScreen = document.querySelector('.start-screen');
const gameOverScreen = document.querySelector('.game-over');
const buttonPlay = document.querySelector('.button-play');
const buttonRestart = document.querySelector('.button-restart');

let loop;
let gameStarted = false;

const jump = () => {
  if (!gameStarted) return;

  mario.classList.add('jump');
  setTimeout(() => mario.classList.remove('jump'), 500);
};

const startGame = () => {

    clearInterval(loop);

    startScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');

    mario.src = 'imagens-game/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0';
    mario.style.marginLeft = '0';
    mario.style.animation = '';

    pipe.style.animation = 'none'
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.offsetHeight;
    pipe.style.left = '';

    gameStarted = true;

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens-game/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        gameStarted = false;

        setTimeout(() => gameOverScreen.classList.add('active'),500);
    }
  }, 10);
};

buttonPlay.addEventListener('click', startGame);
buttonRestart.addEventListener('click', startGame);
document.addEventListener('keydown', jump);
