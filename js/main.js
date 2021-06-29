const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menuNav = document.querySelector('.nav');

let showMenu = false;

// console.log(menuBtn);
// console.log(hamburger);
// console.log(menuNav);
// console.log(showMenu);

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // console.log(showMenu);
    if(!showMenu) {
        hamburger.classList.add('open');
        menuNav.classList.remove('close');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        menuNav.classList.add('close');
        showMenu = false;
    }
}