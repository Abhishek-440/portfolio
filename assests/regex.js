function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Your message has been delivered.");
  
      return true;
  
    }
    else {
  
      alert("Invalid email address!");
  
      return false;
  
    }
  
  }