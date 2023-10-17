const form = document.querySelector('.login-form');

function handleForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) return alert('All fields shoul be filled');

  const elements = {
    email: email.value,
    password: password.value
  };

  console.log(elements);

  form.reset();
}

form.addEventListener('submit', handleForm);
