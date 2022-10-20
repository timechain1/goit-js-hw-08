import throttle from 'lodash.throttle';

const CHAIN_KEY = 'feedback-form-state';
const formData = {};
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const reset = () => {
    email.value = '';
    message.value = '';
    localStorage.removeItem(CHAIN_KEY);
  };

if (localStorage.hasOwnProperty(CHAIN_KEY)) {
  const data = JSON.parse(localStorage.getItem(CHAIN_KEY));
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('submit', OnBasedSubmit);
const timing = throttle(() => {
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(CHAIN_KEY, JSON.stringify(formData));
}, 500);
form.addEventListener('input', timing);

function OnBasedSubmit(e) {
  e.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.removeItem(CHAIN_KEY);
}

