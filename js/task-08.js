const form = document.querySelector('.login-form');

function handleForm(event) {
  console.log(event);
  event.preventDefault();

  const { name, password } = event.currentTarget.elements;

  const elements = {
    name: name.value,
    password: password.value
  };

  const data = {};

  const formData = new FormData(event.currentTarget);

  formData.forEach(({key, value}) => {
    data[key] = value;
  });

  console.log(data);
}

form.addEventListener('submit', handleForm);
