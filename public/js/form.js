console.log('... form.js loaded ');

var app = app || {};


// Submit Action
app.bindSignupForm = function(){
  $('#create-signup').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serializeJSON();
    var testData = app.checkForm(data);
    if (testData === true){

      app.signups.create(data.signup);
      app.clearForm();
    }
  });
}


// Test Inputs
app.checkForm = function(data){

  // Input Fields
  var name = $('.name-input').val();
  var phone = $('.phone-input').val();
  var email = $('.email-input').val();

  // Validation Test
  var nameValidation = app.validateName(name);
  var emailValidation = app.validateEmail(email);

  if (nameValidation && emailValidation) {
    app.nameError(nameValidation);
    app.emailError(emailValidation);

    return true;
  } else {
    app.nameError(nameValidation);
    app.emailError(emailValidation);

    return false;
  }

}

// Validation Functions
 app.validateEmail = function(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

 app.validateName = function(name) {
  if (name.length > 0) {
    return true;
  } else {
    return false;
  }
}


// Render Errors
app.nameError = function (nameValidation){
  if (!nameValidation){
    $('.name-error').css({'display': 'inline-block'})
  } else if (nameValidation){
    $('.name-error').css({'display': 'none'})
    }
}

 app.emailError = function(emailValidation){
  if (!emailValidation){
    console.log('email error')
    $('.email-error').css({'display': 'inline-block'})
  } else if (emailValidation){
    $('.email-error').css({'display': 'none'})
    }
}


// Clear Form
 app.clearForm = function(){
  var $name = $('.name-input');
  var $phone = $('.phone-input');
  var $email = $('.email-input');

  $name.val('');
  $phone.val('');
  $email.val('');
}
