import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formState = { email: '', message: '' };

try {
  formState.email = JSON.parse(localStorage.getItem(localStorageKey)).email;
} catch {
  // nothing
} finally {
  form.elements.email.value = formState.email;
}
try {
  formState.message = JSON.parse(localStorage.getItem(localStorageKey)).message;
} catch {
  // nothing
} finally {
  form.elements.message.value = formState.message;
}

form.elements.email.addEventListener('input', event => {
  formState.email = event.target.value;
  throttle(
    localStorage.setItem(localStorageKey, JSON.stringify(formState)),
    500
  );
  console.log(formState);
  console.log(currentTime);
});
form.elements.message.addEventListener('input', event => {
  formState.message = event.target.value;
  throttle(
    localStorage.setItem(localStorageKey, JSON.stringify(formState)),
    500
  );
  console.log(formState);
  console.log(currentTime);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formState);
  localStorage.removeItem(localStorageKey);
  formState.email = '';
  formState.message = '';
  form.reset();
});
