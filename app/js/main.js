let btn = document.querySelector('.block__home__menu__btn');
let blockHomeMenu = document.querySelector('.block__home__menu')

btn.addEventListener('click', () =>{
    blockHomeMenu.classList.toggle('display__block__nav');
    blockHomeMenu.classList.toggle('block__home__menu__right');
})