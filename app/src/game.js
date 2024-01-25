let score = 0;
let round = 0;

export const initGame = () => {
  score = 0;
  round = 10;
};



// const convertHTML = () => {
//   const question = document.getElementById('question').textContent
//   const answers = document.querySelectorAll('.answer').textContent


//   const entityMap = {
//     "&amp;": "&",
//     "&lt;": "<",
//     "&gt;": ">",
//     "&quot;": "\"",
//     "&apos;": "'",
//     "&#39;": "'",
//     "&#x27;": "'",
//     "&#x2F;": "/",
//     "&#x60;": "`",
//     "&#x3D;": "=",
//   };

//   answers.forEach((answer) => {
//     return answer.replace(/&amp;|&lt;|&gt;|&quot;|&apos;|&#39;|&#x27;|&#x2F;|&#x60;|&#x3D;/g, (match) => {
//       return entityMap[match];
//     });
//   })


// };
// const testString = "This is a test string with some HTML entities: &amp; &lt; &gt; &quot; &apos; &#x3D;";

// convertHTML()


export function adjustFontSize() {
  const buttons = document.querySelectorAll('.answer');
  buttons.forEach(button => {
    let fontSize = 4; // start with a base font size
    button.style.fontSize = `${fontSize}vw`;

    // Reduce font size if text overflows
    while (button.scrollHeight > button.offsetHeight || button.scrollWidth > button.offsetWidth) {
      fontSize -= 0.2;
      button.style.fontSize = `${fontSize}vw`;
    }
  });
}

export function displayScore(score){
  let scoreHolder = document.getElementById('score')
  scoreHolder.innerText = `SCORE: ${score}/10`
}

adjustFontSize()

export function playRound(arr) {
  if (round === 0) {
    document.getElementById("score-page").style.display = "block";
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-play").style.display = "none";
    displayScore(score);
  } else {
    document.getElementById("question").textContent =
      arr.results[round - 1].question;
    console.log(arr.results[round - 1].question);

    let answers = [
      ...arr.results[round - 1].incorrect_answers,
      arr.results[round - 1].correct_answer,
    ];
    answers.sort(() => Math.random() - 0.5);

    adjustFontSize()

    document.getElementById("one").textContent = answers[0];
    document.getElementById("two").textContent = answers[1];
    document.getElementById("three").textContent = answers[2];
    document.getElementById("four").textContent = answers[3];
    handleScore(arr);
    round--;
    console.log(round)
  }
}

export function handleScore(stuff) {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const userSelection = this.textContent;
      const correctAnswer = stuff.results[round].correct_answer;
      console.log(correctAnswer)

      let buttonBoard = document.querySelectorAll(".answer");
      buttonBoard.forEach((button) => {
        if (userSelection === correctAnswer) {
          // button.style.border = "1px solid #1ba937"; // Correct answer
          button.style.boxShadow = "0 0 10px green";
          let correctRound = true
          console.log(score)
        } else {
          // Incorrect answer: Smaller red border with glow effect
          // button.style.border = "1px solid red";
          button.style.boxShadow = "0 0 10px red";
        }

        if(correctAnswer === true){
          score++;
        }

        setTimeout(() => {
          // Reset styles after a shorter duration, e.g., 1000 milliseconds
          button.style.border = "";
          button.style.boxShadow = "";
        }, 1000);
      });
    });
  });
}