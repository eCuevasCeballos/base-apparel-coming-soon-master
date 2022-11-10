const email = document.querySelector(".email");
const errorIcon = document.querySelector(".icon-error");
const errorMsg = document.querySelector(".error-msg");
const submitBtn = document.querySelector(".submit");

function validateEmail(email) {
  var userInput = /\S+@\S+\.\S+/;
  return userInput.test(email);
}

submitBtn.addEventListener("click", function () {
  if (validateEmail(email.value) === true) {
    errorIcon.classList.add("error");
    errorMsg.classList.add("error");
    document.querySelector(".email").style.borderColor =
      "rgba(128, 128, 128, 0.219)";
  } else {
    errorIcon.classList.remove("error");
    errorMsg.classList.remove("error");
    document.querySelector(".email").style.borderColor = "hsl(0, 93%, 68%)";
  }
});
