import { fetchData, getCategories } from './fetching.js';
import { displayCategories} from './rendering.js';

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

const playButton = document.querySelector("#play-button");
playButton.addEventListener('click', function() {
    document.querySelector("#game-play").style.display = 'block';
    document.querySelector("#main-menu").style.display = 'none';
});


