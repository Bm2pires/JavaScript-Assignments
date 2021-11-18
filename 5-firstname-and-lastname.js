// code to stop page from reloading after submit

var form = document.getElementById("form1");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// function to get values from input fields
function getFormvalue() {
  let fname = document.getElementById("form1").elements[0].value;
  let sname = document.getElementById("form1").elements[1].value;
  console.log(`First name: ${fname}\nLast name: ${sname}`);
}
