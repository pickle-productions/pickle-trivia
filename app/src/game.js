
let score = 0;
let round = 0;

export const initGame = () => {
  score = 0;
  round = 10;
};

const click = new Audio('src/audio/Click.wav')


// const convertHTML = (text) => {
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

//   return text.replace(/&amp;|&lt;|&gt;|&quot;|&apos;|&#39;|&#x27;|&#x2F;|&#x60;|&#x3D;/g, (match) => {
//     return entityMap[match];
//   });
// };

function decodeHTML(html) {
  let temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}

export function playRound(arr,) {
  if (round === 0) {
    document.getElementById("score-page").style.display = "block";
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-play").style.display = "none";
    displayScore(score);
  } else {
    document.getElementById("question").textContent =
      decodeHTML(arr.results[round - 1].question);
    console.log(arr.results[round - 1].question);

    let answers = [
      ...arr.results[round - 1].incorrect_answers,
      arr.results[round - 1].correct_answer,
    ];
    answers.sort(() => Math.random() - 0.5);

    // adjustFontSize();

    document.getElementById("one").textContent = decodeHTML(answers[0]);
    document.getElementById("two").textContent = decodeHTML(answers[1]);
    document.getElementById("three").textContent = decodeHTML(answers[2]);
    document.getElementById("four").textContent = decodeHTML(answers[3]);
    handleScore(arr);
    round--;
  }
}


// export function adjustFontSize() {
//   const buttons = document.querySelectorAll('.answer');
//   buttons.forEach(button => {
//     let fontSize = 4; // start with a base font size
//     button.style.fontSize = `${fontSize}vw`;

//     // Reduce font size if text overflows
//     while (button.scrollHeight > button.offsetHeight || button.scrollWidth > button.offsetWidth) {
//       fontSize -= 0.2;
//       button.style.fontSize = `${fontSize}vw`;
//     }
//   });
// }

export function displayScore(score){
  let scoreHolder = document.getElementById('score')
  scoreHolder.innerText = `SCORE: ${score}/10`
}


export function handleScore(stuff) {
  const answerButtons = document.querySelectorAll(".answer");
  let answered = false;

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      click.play()
      if (!answered) { 
        const userSelection = this.textContent;
        const correctAnswer = stuff.results[round].correct_answer;

        if (userSelection === correctAnswer) {
          button.style.boxShadow = "0 0 10px green";
          score++;
          console.log('This is your score', score);
        } else {
          button.style.boxShadow = "0 0 10px red";
        }

        button.classList.add('answered');
        answered = true;
      }

      setTimeout(() => {
        button.style.border = "";
        button.style.boxShadow = "";
      }, 1000);
    });
  });
}

