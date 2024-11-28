function validateForm() {
    // Check if all required fields are filled out.
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var element = document.forms[0].elements[i];
      if (element.required && element.value == "") {
        alert("Please fill out all required fields.");
        return false;
      }
    }
    // Check if the card number is valid.
    var cardNumber = document.getElementById("card-number").value;
    if (!cardNumber.match(/^[0-9]{16}$/)) {
      alert("Please enter a valid card number.");
      return false;
    }
    // Check if the card expiration date is valid.
    var cardExpiration = document.getElementById("card-expiration").value;
    if (!cardExpiration.match(/^[0-9]{2}\/[0-9]{2}$/)) {
      alert("Please enter a valid card expiration date.");
      return false;
    }
    // Check if the card CVV is valid.
    var cardCVV = document.getElementById("card-cvv").value;
    if (!cardCVV.match(/^[0-9]{3}$/)) {
      alert("Please enter a valid card CVV.");
      return false;
    }
    // The form is valid.
    return true;
}