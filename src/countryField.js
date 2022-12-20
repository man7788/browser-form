import { countryElement } from './findElement';

function checkCountryValid() {
  const { country } = countryElement();
  const { countryError } = countryElement();

  country.addEventListener('focus', () => {
    country.classList.remove('initial');
    countryError.textContent = '';
    countryError.className = 'error';
  });

  country.addEventListener('blur', () => {
    if (country.validity.valid) {
      countryError.textContent = '';
      countryError.className = 'error';
    } else {
      showCountryError();
      countryError.className = 'error active';
    }
  });
}

function showCountryError() {
  const { country } = countryElement();
  const { countryError } = countryElement();

  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a country name.';
  }
}
export { checkCountryValid, showCountryError };
