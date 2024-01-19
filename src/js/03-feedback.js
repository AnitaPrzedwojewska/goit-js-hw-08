import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formState = { email: '', message: ''};

try {
  formState.email = JSON.parse(localStorage.getItem(localStorageKey)).email;
} catch {
  // nothing to do
} finally {
  form.elements.email.value = formState.email;
}
try {
  formState.message = JSON.parse(localStorage.getItem(localStorageKey)).message;
} catch {
  // nothing to do
} finally {
  form.elements.message.value = formState.message;
}

form.elements.email.addEventListener('input', throttle((event) => {
  formState.email = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
}, 500));
form.elements.message.addEventListener('input', throttle((event) => {
  formState.message = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
}, 500));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if ((formState.email.trim().length > 0) && (formState.message.trim().length > 0)) {
    console.log(formState);
    localStorage.removeItem(localStorageKey);
    formState.email = '';
    formState.message = '';
    form.reset();
  } else {
    window.alert("Wypełnij wszystkie pola!");
  }
});
