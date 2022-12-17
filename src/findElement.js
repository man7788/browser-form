function emailElement() {
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email + span.error');
  const inputList = document.querySelectorAll('input');
  return { form, email, emailError, inputList };
}

function countryElement() {}
export { emailElement, countryElement };
