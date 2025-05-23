//CARROSSEL

const track = document.querySelector('.carrossel-track');
const btnLeft = document.querySelector('.nav-button.left');
const btnRight = document.querySelector('.nav-button.right');

let currentIndex = 0;

const itemWidth = 300 + 20; // largura + gap
const itemsVisible = 4;
const totalItems = document.querySelectorAll('.img-port').length;

btnRight.addEventListener('click', () => {
  if (currentIndex < totalItems - itemsVisible) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});



// FECHAMENTO MENU LATERAL

const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Abrir menu
menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Fechar menu no botão X
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Fechar menu quando clicar em um item
function closeMenu() {
    sideMenu.classList.remove('open');
}


//OCULTANDO ICONE DO MENU AO ABRÍ-LO

menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('open');
    menuIcon.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    menuIcon.classList.remove('hidden');
});

function closeMenu() {
    sideMenu.classList.remove('open');
    menuIcon.classList.remove('hidden');
}