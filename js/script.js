let btnNav = document.querySelector('.btn-nav');
let mainContent = document.querySelector('.main-content');

btnNav.addEventListener('click', ()=>{
    btnNav.classList.toggle('toggle');
    mainContent.classList.toggle('toggle');
});