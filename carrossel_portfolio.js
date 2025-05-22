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

