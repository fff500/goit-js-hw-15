const input = document.getElementById('font-size-control');
const span = document.getElementById('text');

input.addEventListener('input', handleInput);

function handleInput(event) {
  span.style.fontSize = `${event.target.value}px`
}