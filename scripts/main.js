document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("membership-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Reset previous error messages
    resetErrorMessages();

    // Perform validation checks
    let isValid = true;

    if (!isValidName(firstname)) {
      displayErrorMessage(firstnameInput, "Invalid first name");
      isValid = false;
    }

    if (!isValidName(lastname)) {
      displayErrorMessage(lastnameInput, "Invalid last name");
      isValid = false;
    }

    if (!isValidUsername(username)) {
      displayErrorMessage(usernameInput, "Invalid username");
      isValid = false;
    }

    if (!isValidPassword(password)) {
      displayErrorMessage(passwordInput, "Invalid password");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      displayErrorMessage(emailInput, "Invalid email address");
      isValid = false;
    }

    if (!isValidPhoneNumber(phone)) {
      displayErrorMessage(phoneInput, "Invalid phone number");
      isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
      form.submit();
    }
  }

  function resetErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.remove();
    });
  }

  function displayErrorMessage(inputElement, message) {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");

    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    errorContainer.appendChild(errorMessage);
    inputElement.parentNode.insertBefore(
      errorContainer,
      inputElement.nextSibling
    );
  }

  function isValidName(name) {
    // Check if the name contains any numbers
    return !/\d/.test(name);
  }

  function isValidUsername(username) {
    // Add your username validation logic here
    return /^[a-zA-Z0-9]+$/.test(username);
  }

  function isValidPassword(password) {
    // Add your password validation logic here
    return /^[a-zA-Z0-9]+$/.test(password);
  }

  function isValidEmail(email) {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhoneNumber(phone) {
    // Add your phone number validation logic here
    return /^[0-9]+$/.test(phone);
  }
});
