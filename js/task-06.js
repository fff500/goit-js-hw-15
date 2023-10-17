const input = document.getElementById('validation-input');

function handleInput(event) {
  if (event.target.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

input.addEventListener('blur', handleInput);