const form = document.querySelector('form.login-form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) return alert('All fields should be filled');

  const elements = {
    email: email.value,
    password: password.value
  };

  console.log(elements);

  form.reset();
}