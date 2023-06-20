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


const user = {
  memberUName: username,
  password: password,
  memberEmail: email,
  memberFName: firstName,
  memberLName: lastName,
  memberPhone: phone,
  //address: address,
  //apt_door_number: aptDoorNumber,
  //state: state,
  //city: city,
  //zip_code: zipCode
};

//save user data to database
function registerUser(user) {
  const sql = 'INSERT INTO memberData SET ?';
  connection.query(sql, user, (err, result) => {
    if (err) {
      console.error('register user error:', err);
      throw err;
    }
    console.log('register user success');
  });
}

registerUser(user);
// close connection
connection.end();