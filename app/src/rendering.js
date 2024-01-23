


export const displayCategories = (categories) => {
    const list = document.querySelector('#category-select');
    categories.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.name;
        list.appendChild(option);
    });
}
