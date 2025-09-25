//your JS code here. If required.
const board = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;

    setTimeout(() => {
      square.style.backgroundColor = '#1d1d1d';
    }, 1000);
  });

  board.appendChild(square);
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#1abc9c'];
  return colors[Math.floor(Math.random() * colors.length)];
}
