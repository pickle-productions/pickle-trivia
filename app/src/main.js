import { fetchData, getCategories, getQuestions } from "./fetching.js";
import { displayCategories } from "./rendering.js";
import { initGame, playRound, displayScore, handleScore } from "./game.js";

let questionsData = null;
const music = new Audio(
  "src/audio/2 Minutes Countdown Timer with Relaxing Jazz Background Music.mp3"
);
const click = new Audio("src/audio/Click.wav");

const main = async () => {
  try {
    const categories = await getCategories();
    displayCategories(categories);
  } catch (error) {
    console.error(error.message);
  }
};

main();

const categorySelect = document.querySelector("#category-select");
const playButton = document.querySelector("#play-button");

categorySelect.addEventListener("change", async (event) => {
  console.log("change occurred");
  questionsData = await getQuestions(event.target.value);
});

playButton.addEventListener("click", function () {
  console.log(questionsData);
  if (questionsData) {
    document.querySelector("#game-play").style.display = "block";
    document.querySelector("#main-menu").style.display = "none";
    initGame();
    playRound(questionsData);
    click.play();
    music.play();
  } else {
    console.error("No questions data available");
    click.play();
  }
});

const next = document.getElementById("next-button");
next.addEventListener("click", () => {
  click.play();
  playRound(questionsData);
});
