import { submitElement } from './findElement';

function initialFrom() {
  const input = document.querySelectorAll('input');
  input.forEach((element) => {
    element.classList.add('initial');
  });
}

function checkFromValid() {
  const { form } = submitElement();
  const { highfive } = submitElement();

  form.addEventListener('submit', (event) => {
    if (form.checkValidity()) {
      event.preventDefault();
      highfive.textContent = 'Form Completed!';
      form.reset();
      initialFrom();
    } else {
      event.preventDefault();
      highfive.textContent = 'Please complete the form.';
    }
  });
}

export { initialFrom, checkFromValid };
