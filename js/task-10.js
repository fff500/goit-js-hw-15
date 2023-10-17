function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const MIN_SIZE = 30;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numberInput = document.querySelector('input[type="number"]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', handleCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);

function handleCreateBtnClick() {
  createBoxes(Number(numberInput.value));
}

function createBoxes(number) {
  const divs = [];

  for (let i = 0; i < number; i++) {
    divs.push(
      `<div style="width: ${MIN_SIZE + 10 * i}px; height: ${MIN_SIZE + 10 * i}px; background-color: ${getRandomHexColor()};"></div>`
    )
  }

  boxesDiv.insertAdjacentHTML('afterBegin', divs.join(''));
};

function destroyBoxes() {
  boxesDiv.innerHTML = '';
};