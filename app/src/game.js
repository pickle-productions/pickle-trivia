let score = 0;
let round = 0;

export const initGame = () => {
  score = 0;
  round = 10;
};


export function playRound(arr) {
  if (round === 0) {
    document.getElementById("score-page").style.display = "block";
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-play").style.display = "none";
  } else {

    document.getElementById("question").textContent = arr.results[round - 1].question;
    console.log(round)

    let answers = [
      ...arr.results[round - 1].incorrect_answers,
      arr.results[round - 1].correct_answer,
    ];
    answers.sort(() => Math.random() - 0.5);

    document.getElementById("one").textContent = answers[0];
    document.getElementById("two").textContent = answers[1];
    document.getElementById("three").textContent = answers[2];
    document.getElementById("four").textContent = answers[3];
    handleScore(arr);
    //console.log(arr.results[round - 1].correct_answer)
    round--;
  }
}

export function handleScore(stuff) {
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const userSelection = this.textContent;
        const correctAnswer = stuff.results[round].correct_answer;
        //console.log(correctAnswer)

        if (userSelection === correctAnswer) {
            //console.log('correct')
          score++;
        } else {
            //console.log('incorrect')
        }
      });
    });
  }
