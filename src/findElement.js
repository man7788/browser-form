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

function passwordElement() {
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('#password + span.error');
  return { password, passwordError };
}

function confirmElement() {
  const confirm = document.querySelector('#confirm');
  const confirmError = document.querySelector('#confirm + span.error');
  return { confirm, confirmError };
}

export {
  emailElement,
  countryElement,
  zipElement,
  passwordElement,
  confirmElement,
};
