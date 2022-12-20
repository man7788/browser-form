import { confirmElement, passwordElement } from './findElement';

function checkConfirmValid() {
  const { confirm } = confirmElement();
  const { confirmError } = confirmElement();

  confirm.addEventListener('focus', () => {
    const pwValue = passwordElement().password.value;
    confirm.classList.remove('initial');
    confirm.setAttribute('pattern', pwValue);
    confirmError.textContent = '';
    confirmError.className = 'error';
  });

  confirm.addEventListener('blur', () => {
    if (confirm.validity.valid) {
      confirmError.textContent = '';
      confirmError.className = 'error';
    } else {
      showConfirmError();
      confirmError.className = 'error active';
    }
  });
}

function showConfirmError() {
  const { confirm } = confirmElement();
  const { confirmError } = confirmElement();

  if (confirm.validity.valueMissing) {
    confirmError.textContent = 'You need to enter the same password again.';
  } else if (confirm.validity.patternMismatch) {
    confirmError.textContent = 'The passwords you entered does not match.';
  }
}

export { checkConfirmValid, showConfirmError };
