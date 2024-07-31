"use strict";

const scoreBeginning0 = document.getElementById("score--0");
const scoreBeginning1 = document.getElementById("score--1");
const khiladi0 = document.querySelector(".player--0");
const khiladi1 = document.querySelector(".player--1");
const player0 = document.getElementById("current--0");
const player1 = document.getElementById("current--1");
const diceBeginning = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  khiladi0.classList.toggle("player--active");
  khiladi1.classList.toggle("player--active");
};

scoreBeginning0.textContent = 0;
scoreBeginning1.textContent = 0;

const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceBeginning.classList.add("hidden");

buttonRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (playing) {
    diceBeginning.classList.remove("hidden");
    diceBeginning.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener("click", function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      diceBeginning.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener("click", function () {
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  diceBeginning.classList.add("hidden");

  totalScore[0] = 0;
  totalScore[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  document.querySelector(`.player--0`).classList.add(`player--active`);
  document.querySelector(`.player--1`).classList.remove(`player--active`);
});
