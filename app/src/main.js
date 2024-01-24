import { fetchData, getCategories, getQuestions } from './fetching.js';
import { displayCategories} from './rendering.js';
import { initGame, playRound, handleScore} from './game.js';

let questionsData = null;

const main = async () => {
    try {
        const categories = await getCategories();
        //console.log(categories);
        displayCategories(categories)
    } catch (error) {
        console.error(error.message);
    }
}



main();

const categorySelect = document.querySelector('#category-select');

// categorySelect.addEventListener('change', async(event) => {
//     const roundQuestions = await getQuestions(event.target.value)
//     return roundQuestions
// });

const playButton = document.querySelector("#play-button");
// playButton.addEventListener('click', function() {
//     document.querySelector("#game-play").style.display = 'block';
//     document.querySelector("#main-menu").style.display = 'none';
//     initGame()
//     playRound(arr);
// });

categorySelect.addEventListener('change', async(event) => {
    questionsData = await getQuestions(event.target.value);
    //console.log(questionsData)
});

playButton.addEventListener('click', function() {
    console.log(questionsData)
    if (questionsData) {
        document.querySelector("#game-play").style.display = 'block';
        document.querySelector("#main-menu").style.display = 'none';
        initGame();
        playRound(questionsData);
    } else {
        console.error('No questions data available');
    }
});




