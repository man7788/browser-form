import { emailElement } from './findElement';

function checkEmailValid() {
  const { email } = emailElement();
  const { emailError } = emailElement();

  email.addEventListener('focus', () => {
    email.classList.remove('initial');
    emailError.textContent = '';
    emailError.className = 'error';
  });

  email.addEventListener('blur', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showError();
    }
  });
}

function showError() {
  const { email } = emailElement();
  const { emailError } = emailElement();

  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = 'error active';
}

export default checkEmailValid;
