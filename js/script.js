let btnNav = document.querySelector('.btn-nav');
let mainContent = document.querySelector('.main-content');
let footer = document.querySelector('footer');

btnNav.addEventListener('click', ()=>{
    btnNav.classList.toggle('toggle');
    mainContent.classList.toggle('toggle');
    footer.classList.toggle('toggle');
});