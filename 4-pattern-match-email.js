// write a pattern that matches e-mail addresses
var email = "piresbredangmail.com";
const emailRegExp =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

let validateEmail = emailRegExp.test(email);

if (validateEmail == true) {
  console.log(`${email} is a valid email.`);
} else {
  console.log(`${email} is not a valid email`);
}
