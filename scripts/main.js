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
    return /^\d{10,}$/.test(phone);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const membershipForm = document.getElementById("Staff-contact-form");

  membershipForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateMembershipForm();
  });

  

  function validateMembershipForm() {
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
      membershipForm.submit();
    }
  }

  // ...

  const contactForm = document.getElementById("Staff-contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateContactForm();
  });

  function validateContactForm() {
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const _phoneInput = document.getElementById("phone");
    const inquiryInput = document.getElementById("inquiry");

    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const _phoneNumber = _phoneInput.value.trim();
    const inquiry = inquiryInput.value.trim();

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

    if (!isValidEmail(email)) {
      displayErrorMessage(emailInput, "Invalid email address");
      isValid = false;
    }

    if (!isValidInquiry(inquiry)) {
      displayErrorMessage(
        inquiryInput,
        "For better assistance, please state your question for at least 10 words"
      );
      isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
      contactForm.submit();
    }
  }

  // ...

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
    return /^[a-zA-Z]+$/.test(name);
  }

  function isValidUsername(username) {
    // Add your username validation logic here
    return /^[a-zA-Z0-9]+$/.test(username);
  }

  function isValidPassword(password) {
    // Add your password validation logic here
    return password.length >= 6;
  }

  function isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  function isValidPhoneNumber(phone) {
    // Add your phone number validation logic here
    return /^\d{10,}$/.test(phone);
  }

  function isValidInquiry(inquiry) {
    return inquiry.split(" ").filter(Boolean).length >= 10;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateLoginForm();
  });

  function validateLoginForm() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset previous error messages
    resetErrorMessages();

    // Check if the login credentials are correct
    if (isCorrectCredentials(username, password)) {
      showSuccessMessage("Successfully logged in");
      loginForm.submit(); // Submit the form
    } else {
      if (!usernameExists(username)) {
        displayErrorMessage("Incorrect account. Would you like to create one?");
      } else {
        displayErrorMessage("Incorrect password");
      }
    }
  }

  function resetErrorMessages() {
    const errorContainer = document.getElementById("error-container");
    errorContainer.textContent = "";
  }

  function displayErrorMessage(message) {
    const errorContainer = document.getElementById("error-container");
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
  }

  function showSuccessMessage(message) {
    alert(message);
  }

  // Simulated account database
  const accounts = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
  ];

  function isCorrectCredentials(username, password) {
    return accounts.some(function (account) {
      return account.username === username && account.password === password;
    });
  }

  function usernameExists(username) {
    return accounts.some(function (account) {
      return account.username === username;
    });
  }
});

// import MySQL
const mysql = require('mysql');

// create connection
const connection = mysql.createConnection({
  host: 'localhost', // 数据库主机名
  user: 'your_username', // 数据库用户名
  password: 'your_password', // 数据库密码
});

// connect db
connection.connect((err) => {
  if (err) {
    console.error('database connection error:', err);
    throw err;
  }
  console.log('database connection success');
});

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected");
  connection.query("create database `shoesWebsite`", function(err, result){
    if(err) throw err;
    console.log("DB Created");
  });
});

connection.connect(function(err){
  if(err) throw err;
  var SQLTable1 = "create table `memberData` (`memberID` int NOT NULL AUTO_INCREMENT,`password` varchar(20) DEFAULT NULL,`memberEmail` varchar(50) NOT NULL,`memberFName` varchar(20) NOT NULL,`memberLName` varchar(20) NOT NULL,`memberUName` varchar(20) NOT NULL, `memberPhone` varchar(20) NOT NULL, `memberAddress` varchar(100) DEFAULT NULL, PRIMARY KEY (`memberID`));"
  connection.query(SQLTable1, function(err, result){
    if(err) throw err;
    console.log("Table 1 created");
  });
});

connection.connect(function(err){
  if(err) throw err;
  var SQLTable2 = "Create table `customerService`(`inquiryID` int NOT NULL auto_increment,`INQFName` varchar(20) NOT NULL,`INQLName` varchar(20) NOT NULL,`INQEmail` varchar(50) NOT NULL,`inquiry` varchar(500) NOT NULL, PRIMARY KEY (`inquiryID`));"
  connection.query(SQLTable2, function(err, result){
    if(err) throw err;
    console.log("Table 2 created");
  });
});

function submitMemberdata() {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");

  const firstname = firstnameInput.value.trim();
  const lastname = lastnameInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = address.value.trim();
  var query ="INSERT INTO `memberData`( password, memberEmail, memberFName, memberLName, memberUName, memberPhone, memberAddress) VALUES("+password+", "+email+", "+firstname+", "+lastname+", "+username+", "+phone+", "+address+")";
  if(err) throw err;
  connection.query()
}

function submitInquiry() {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const _phoneInput = document.getElementById("phone");
  const inquiryInput = document.getElementById("inquiry");

  const firstname = firstnameInput.value.trim();
  const lastname = lastnameInput.value.trim();
  const email = emailInput.value.trim();
  const _phoneNumber = _phoneInput.value.trim();
  const inquiry = inquiryInput.value.trim();

  var query = "INSERT INTO `customerService`(INQFName, INQLName, INQEmail, inquiry) VALUES("+firstname+", "+lastname+", "+email+", "+inquiry+")";
  if(err) throw err;
  connection.query()
}

connection.end();