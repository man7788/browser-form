import { passwordElement } from './findElement';

function checkPasswordValid() {
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
      showPasswordError();
      passwordError.className = 'error active';
    }
  });
}

function showPasswordError() {
  const { password } = passwordElement();
  const { passwordError } = passwordElement();

  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'Password should contain at least one capital letter, one small letter and one special character.';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
}
export { checkPasswordValid, showPasswordError };
