'use strict';

/*¿Qué hace el juego? --> movimiento al azar de piedra, papel o tijera. 
Ganar, empatar o perder. 
Contabilizar el número de pintos del jugador y el ordenador. 
Fin a los 10 movimientos. 

Desplegable pidra, papel o tijera. + seleccione su jugada. Botón SELECT. 
Botón jugar

botón ¡Vamos a jugar!
Empate / has ganado / has perdido

1. Select, botón y resultado. 
2. Número aleatorio entre 1 y 9. 
3. Generar un movimiento aleatorio:
<= que 3, piedra
>= que 7, papel
Si no, tijera. 

Comparar el movimiento de la jugadora y el del ordena y pintar resultado.

*/

//CONSTANTES
const userChoice = document.querySelector('.js-selection');
const btnPlay = document.querySelector('.js-btnplay');
const goPlay = document.querySelector('.js-goPlay');
const playerScore = document.querySelector('.js-player-score');
const pcScore = document.querySelector('.js-pc-score');

const playerResult = userChoice.value;

//FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function selectChoice() {
  const randomNumber = getRandomNumber(10);
  if (playerResult === '') {
    goPlay.innerHTML = 'Tienes que elegir una opción';
  } else if (playerResult === randomNumber <= 3) {
    goPlay.innerHTML = '¡Empate!';
  } else if (playerResult !== randomNumber <= 3) {
    goPlay.innerHTML = '¡Piedra!';
  } else if (playerResult === randomNumber >= 7) {
    goPlay.innerHTML = '¡Empate!';
  } else if (playerResult !== randomNumber >= 7) {
    goPlay.innerHTML = 'Papel!';
  } else if (playerResult === randomNumber >= 8) {
    goPlay.innerHTML = 'Empate!';
  } else if (playerResult !== randomNumber >= 8) {
    goPlay.innerHTML = '¡Tijera!';
  }
}

function totalResult(playerScore, pcScore) {
  if (playerScore === pcScore) {
    return 'Es un empate.';
  } else if (
    (playerScore === 'piedra' && computer === 'tijera',
    playerScore === 'papel' && computer === 'piedra',
    playerScore === 'tijera' && computer === 'papel')
  ) {
    playerScore.innerHTML = '¡Ganaste!';
  } else {
    pcScore.innerHTML = 'Ganó el ordenador.';
  }
}

function handleClick() {
  selectChoice();
  totalResult();
}

//EVENTOS

btnPlay.addEventListener('click', handleClick);
