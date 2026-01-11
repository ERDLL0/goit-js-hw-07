const controls = document.querySelector('#controls');
const inputEl = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  inputEl.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
