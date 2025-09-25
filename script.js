//your JS code here. If required.
const board = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    setColor(square);
    setTimeout(() => removeColor(square), 1000); // 1 second
  });

  board.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'; // Original color
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#1abc9c'];
  return colors[Math.floor(Math.random() * colors.length)];
}
