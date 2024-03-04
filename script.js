const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using constraint API
  isValid = form.checkValidity();

  //Style main error or validate message
  if (!isValid) {
    message.textContent = 'Please fill all fields !';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  //check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = ' Make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  //change your message to success if form is valid
  if (isValid && passwordsMatch) {
    message.textContent = 'Registered successfully !';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // validating form message
  validateForm();

  //submit data if valid

  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
//Event that listens of form submission
form.addEventListener('submit', processFormData);
