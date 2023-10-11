if (!sessionStorage.getItem("modalShown")) {
  var delayInMilliseconds = 1000;
  setTimeout(showModal, delayInMilliseconds);
  sessionStorage.setItem("modalShown", "true");
}

function showModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    if (isValidEmail(emailValue)) {
      alert(
        "Thank you for signing up! You will receive Bose emails and communications."
      );
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
