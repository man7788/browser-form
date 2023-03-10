import { zipElement } from './findElement';

function checkZipValid() {
  const { zip } = zipElement();
  const { zipError } = zipElement();

  zip.addEventListener('focus', () => {
    zip.classList.remove('initial');
    zipError.textContent = '';
    zipError.className = 'error';
  });

  zip.addEventListener('blur', () => {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
    } else {
      showZipError();
      zipError.className = 'error active';
    }
  });
}

function showZipError() {
  const { zip } = zipElement();
  const { zipError } = zipElement();

  if (zip.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  } else if (zip.validity.patternMismatch) {
    zipError.textContent =
      'Zip code only accepts capital letters, numbers or "-".';
  } else if (zip.validity.tooShort) {
    zipError.textContent = `Zip code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
  }
}

export { checkZipValid, showZipError };
