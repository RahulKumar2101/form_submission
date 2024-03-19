let submit1 = document.getElementById("myForm");
let submit2 = document.getElementById("myForm2");
let submit3 = document.getElementById("myForm3");

function submitForm1(event) {
  event.preventDefault();

  let degree = document.getElementById("degree1").value;
  let percentage = document.getElementById("Percentage1").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let formData = {
    degree: degree,
    percentage: percentage,
    name: name,
    email: email,
    number: number,
  };
  console.log(formData[percentage]);
  localStorage.setItem("formData", JSON.stringify(formData)); // Store form data in local storage

  // Redirect to display.html
  window.location.href = "display.html";
}

function submitForm2(event) {
  event.preventDefault();

  let degree = document.getElementById("degree2").value;
  let percentage = document.getElementById("Percentage2").value;
  let name = document.getElementById("name2").value;
  let email = document.getElementById("email2").value;
  let number = document.getElementById("number2").value;
  console.log(percentage);
  console.log(email);

  let formData = {
    degree: degree,
    percentage: percentage,
    name: name,
    email: email,
    number: number,
  };
  // Store form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to display.html
  window.location.href = "display.html";
}

function submitForm3(event) {
  event.preventDefault();

  let degree = document.getElementById("degree3").value;
  let percentage = document.getElementById("Percentage3").value;
  let name = document.getElementById("name3").value;
  let email = document.getElementById("email3").value;
  let number = document.getElementById("number3").value;

  let formData = {
    degree: degree,
    percentage: percentage,
    name: name,
    email: email,
    number: number,
  };
  // Store form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to display.html
  window.location.href = "display.html";
}

let submission = submit1 || submit2 || submit3;
function finalsubmit(submission) {
  // submission = submit1 || submit2 || submit3;
  if (submission == submit1) {
    submit1.addEventListener("submit", submitForm1);
  } else if (submission == submit2) {
    submit2.addEventListener("submit", submitForm2);
  } else if (submission == submit3) {
    submit3.addEventListener("submit", submitForm3);
  }
}

submission.addEventListener("click", finalsubmit(submission));
