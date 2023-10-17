const input = document.getElementById('font-size-control');

function handleInput(event) {
  const span = document.getElementById('text');

  span.style.fontSize = `${event.target.value}px`
}

input.addEventListener('input', handleInput);