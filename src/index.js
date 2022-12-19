import './style.css';
import checkEmailValid from './emailField';
import checkCountryValid from './countryField';
import checkZipValid from './zipField';
import checkpasswordValid from './passwordField';
import checkconfirmValid from './confirmField';

checkEmailValid();
checkCountryValid();
checkZipValid();
checkpasswordValid();
checkconfirmValid();

const input = document.querySelectorAll('input');
input.forEach((element) => {
  element.classList.add('initial');
});

// 1 Email
// 2 Country
// 3 Zip Codes
// 4 Password
// 5 Password Confirmation

// Red highlight
// Helpful error message

// Button give error message,
// if active errors, or unfilled required

// All validation in Javascript

// Give the user a high five, if successful

// Auto validate if user leaves a field
