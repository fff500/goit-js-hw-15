const input = document.getElementById('validation-input');

input.addEventListener('blur', handleInput);

function handleInput(event) {
  if (event.target.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}