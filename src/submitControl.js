import { submitElement } from './findElement';
import { showEmailError } from './emailField';
import { showCountryError } from './countryField';
import { showZipError } from './zipField';
import { showPasswordError } from './passwordField';
import { showConfirmError } from './confirmField';

function initialFrom() {
  const input = document.querySelectorAll('input');
  input.forEach((element) => {
    element.classList.add('initial');
  });
}

function showAllErrors(form) {
  if (!form.checkValidity()) {
    showEmailError();
    showCountryError();
    showZipError();
    showPasswordError();
    showConfirmError();
  }
}

function checkFromValid() {
  const { form } = submitElement();
  const { highfive } = submitElement();

  form.addEventListener('submit', (event) => {
    if (form.checkValidity()) {
      event.preventDefault();
      highfive.textContent = 'Form Submitted!';
      form.reset();
      initialFrom();
    } else {
      event.preventDefault();
      showAllErrors(form);
      highfive.textContent = 'Please complete the form.';
    }
  });
}

export { initialFrom, checkFromValid };
