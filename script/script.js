const check = function () {
  if (document.getElementById("password").value ===
      document.getElementById("confirm-password").value &&
      document.getElementById("error-message").innerHTML === 
      "* Passwords do not match") {
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("confirm-password").style.borderColor = "green";
    document.getElementById("error-message").style.color = "green";
    document.getElementById("error-message").innerHTML = "Passwords match";
  }
}

const submitForm = function () {
  document.forms["main-form"].reportValidity();

  if (document.getElementById("password").value ===
    document.getElementById("confirm-password").value &&
    document.getElementById("password").value !== "") {
    alert("Submitted")
    document.getElementById("main-form").submit();
  } else {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirm-password").style.borderColor = "red";
    document.getElementById("error-message").style.color = "red";
    document.getElementById("error-message").innerHTML = "* Passwords do not match";
  }
}
