import './style.css';
import checkEmailValid from './emailField';
import checkCountryValid from './countryField';
import checkZipValid from './zipField';
import checkpasswordValid from './passwordField';
import checkconfirmValid from './confirmField';
import { checkFromValid, initialFrom } from './submitControl';

checkEmailValid();
checkCountryValid();
checkZipValid();
checkpasswordValid();
checkconfirmValid();
checkFromValid();
initialFrom();

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
