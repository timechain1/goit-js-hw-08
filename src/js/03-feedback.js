import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  //   btn: document.querySelector('button[typea="submit]'),
};
const FEEDBACK_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};
showSavedText();

refs.form.addEventListener('input', throttle(saveValue, 500));

refs.form.addEventListener('submit', onFormSubmit);

function saveValue(e) {
  formData[e.target.name] = e.target.value;
  //   console.log(formData);
  //   console.log(formDataJSON);
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.email.value && refs.message.value) {
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));
    localStorage.removeItem(FEEDBACK_KEY);
  }
}

function showSavedText() {
  const savedDataJSON = localStorage.getItem(FEEDBACK_KEY);
  const savedData = JSON.parse(savedDataJSON);
  //   console.log(savedData.message);
  if (savedData) {
    refs.email.value = savedData.email || '';
    refs.message.value = savedData.message || '';
  }
}

