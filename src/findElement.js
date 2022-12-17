function emailElement() {
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email + span.error');
  return { email, emailError };
}

function countryElement() {
  const country = document.querySelector('#country');
  const countryError = document.querySelector('#country + span.error');
  return { country, countryError };
}

function zipElement() {
  const zip = document.querySelector('#zip');
  const zipError = document.querySelector('#zip + span.error');
  return { zip, zipError };
}

export { emailElement, countryElement, zipElement };
