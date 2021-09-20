const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulItem = document.getElementById('ingredients');

const createEl = (option: string[]) => {
    return option.map(el => {
        const elLi = document.createElement('li');
        elLi.textContent = el;
        return elLi;
    })
}

const elements = createEl(ingredients);

ulItem.append(...elements);