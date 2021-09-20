var ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
var ulItem = document.getElementById('ingredients');
var createEl = function (option) {
    return option.map(function (el) {
        var elLi = document.createElement('li');
        elLi.textContent = el;
        return elLi;
    });
};
var elements = createEl(ingredients);
ulItem.append.apply(ulItem, elements);
