const dropDowns = document.querySelectorAll('.dropdown');
const dropDownLists = document.querySelectorAll('.dropdown-list');
const arrowUp = document.querySelectorAll('.arrow-up');
const arrowDown = document.querySelectorAll('.arrow-down');
const closeMenu = document.getElementById('closeMenu');
const openMenu = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const btns = document.querySelector('.btns');
const overlay = document.querySelector('.overlay');

dropDowns.forEach((dropDown, index) => {
  dropDown.addEventListener('click', function () {
    dropDownLists[index].classList.toggle('hidden');
    arrowUp[index].classList.toggle('hidden');
    arrowDown[index].classList.toggle('hidden');
    
  });
});

function openMobileMenu() {
  navLinks.style.display = 'flex';
  btns.style.display = 'flex';
  overlay.style.display = 'flex';
}

function closeMobileMenu() {
  navLinks.style.display = 'none';
  btns.style.display = 'none';
  overlay.style.display = 'none';
}

function resetMobileMenu() {
  navLinks.style.display = 'flex';
  btns.style.display = 'flex';
  overlay.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    resetMobileMenu();
  } else {
    closeMobileMenu(); 
  }
});













