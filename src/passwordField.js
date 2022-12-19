import { passwordElement } from './findElement';

function checkpasswordValid() {
  const { password } = passwordElement();
  const { passwordError } = passwordElement();

  password.addEventListener('focus', () => {
    password.classList.remove('initial');
    passwordError.textContent = '';
    passwordError.className = 'error';
  });

  password.addEventListener('blur', () => {
    if (password.validity.valid) {
      passwordError.textContent = '';
      passwordError.className = 'error';
    } else {
      showError();
    }
  });
}

function showError() {
  const { password } = passwordElement();
  const { passwordError } = passwordElement();

  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'Password should contain at least one capital letter, one small letter and one special character';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
  passwordError.className = 'error active';
}

export default checkpasswordValid;
