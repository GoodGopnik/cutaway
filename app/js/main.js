let btn = document.querySelector('.block__home__menu__btn');
let blockHomeMenu = document.querySelector('.block__home__menu');
let burgerBlock1 = document.querySelector('.burger__block1');
let burgerBlock2 = document.querySelector('.burger__block2');
let burgerBlock3 = document.querySelector('.burger__block3');
let serviceBloks = document.querySelector('#service__bloks');



btn.addEventListener('click', () => {
    blockHomeMenu.classList.toggle('display__block__nav');
    burgerBlock1.classList.toggle('burger__block1__active');
    burgerBlock2.classList.toggle('burger__block2__active');
    burgerBlock3.classList.toggle('burger__block3__active');
})

