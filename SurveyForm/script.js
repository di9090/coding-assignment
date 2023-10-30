function submitForm() {
    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let profession = document.getElementById("profession").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
  
    // Validate all fields
    let validationMessage = validateForm(firstName, lastName, dob, country, gender, profession, email, mobile);
    
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
  
    // Display popup with values
    var popupContent = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Date of Birth: " + dob + "\n" +
                       "Country: " + country + "\n" +
                       "Gender: " + gender.value + "\n" +
                       "Profession: " + profession + "\n" +
                       "Email: " + email + "\n" +
                       "Mobile Number: " + mobile;
  
    alert(popupContent);
  
    // Reset the form
    resetForm();
  }
  
  function resetForm() {
    document.getElementById("surveyForm").reset();
  }
  
  function validateForm(firstName, lastName, dob, country, gender, profession, email, mobile) {
    // Validate each field and return an error message if any field is invalid
    if (!firstName) {
      return "Please enter your First Name.";
    }
  
    if (!lastName) {
      return "Please enter your Last Name.";
    }
  
    if (!isValidDate(dob)) {
      return "Please enter a valid Date of Birth that is not in the future.";
    }
   
    if (!country || country === "Select Country")  {
      return "Please select your Country.";
    }
  
    if (!gender) {
      return "Please select your Gender.";
    }
  
    if (!profession) {
      return "Please enter your Profession.";
    }
  
    if (!isValidEmail(email)) {
      return "Please enter a valid Email address.";
    }
  
    if (!isValidMobile(mobile)) {
      return "Please enter a valid Mobile Number.";
    }
  
    // If all fields are valid, return null
    return null;
  }
  
  function isValidDate(dateString) {
    // Basic date validation (not empty and not in the future)
    if (!dateString) {
      return false;
    }
  
    var currentDate = new Date();
    var selectedDate = new Date(dateString);
  
    return selectedDate <= currentDate;
  }
  
  function isValidEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidMobile(mobile) {
    // Basic mobile number validation (10 digits)
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }
  