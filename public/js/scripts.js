console.log('...scripts loaded');


$.ajaxSetup({
  headers:{
    "accept": "application/json"
  }
});



// Model

var Signup = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    phone_number: 0
  },
  validate: function (attrs) {
      if (!attrs.email) {
          return 'Please fill email field.';
      }
      if (!attrs.phone_number) {
          return 'Please fill feedback field.';
      }
  }
});

// Collection

var SignupCollection = Backbone.Collection.extend({
  model: Signup,
  url: '/api/signups'
});


// Views

var SignupView = Backbone.View.extend({
  tagName: 'tr',
  className: 'signup',
  template: _.template( $('#signup-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $(html);
    this.$el.append( $html );
  },
  events: {
    'click button.remove': 'removeSignup'
  },
  removeSignup: function(){
    this.model.destroy();
    this.$el.remove();
  }
});

var SignupListView = Backbone.View.extend({
  el: $('#signups-list'),
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  render: function(){
    this.$el.empty();
    var signups = this.collection.models;
    var view;
    for (var i = 0; i < signups.length; i++) {
      view = new SignupView({model: signups[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});


// Forms

var SignupForm = Backbone.Model.extend({});

var SignupFormView = Backbone.View.extend({
  el: $('#form-container'),
  template: _.template( $('#form-template').html() ),
  render: function(){
    this.$el.html(this.template);

   return this;
  }
  // events: {
  //   'click button.submit': ''
  // },
})


function bindSignup(){
  $('#create-signup').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serializeJSON();
    checkForm(data);
  });
}

function checkForm(data){
  var name = $('.name-input').val();
  var phone = $('.phone-input').val();
  var email = $('.email-input').val();

  var nameValidation = validateName(name);
  var emailValidation = validateEmail(email);

  if (nameValidation && emailValidation) {
    nameError(nameValidation);
    emailError(emailValidation);
    signups.create(data.signup);
    clearForm();
  } else {
    nameError(nameValidation);
    emailError(emailValidation);
    console.log('checkForm Failed  name:' + nameValidation + ' ' + 'email:' + emailValidation);
  }
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateName(name) {
  if (name.length > 0) {
    return true;
  } else {
    return false;
  }
}

function clearForm() {
  var $name = $('.name-input');
  var $phone = $('.phone-input');
  var $email = $('.email-input');

  $name.val('');
  $phone.val('');
  $email.val('');
}

function nameError(nameValidation){
  if (!nameValidation){
    console.log('name error')
    $('.name-input').parent().addClass('error');
  } else if (nameValidation){
      $('.name-input').parent().removeClass('error');
    }
}

function emailError(emailValidation){
  if (!emailValidation){
    console.log('email error')
    $('.email-input').parent().addClass('error');
  } else if (emailValidation){
      $('.email-input').parent().removeClass('error');
    }
}


  // SignUps List

  var signups = new SignupCollection({});

  var signupPainter = new SignupListView({
    collection: signups
  });

  signups.fetch();


// Form

  var form = new SignupForm({});

  var formPainter = new SignupFormView({
    model: form
  });

  formPainter.render();


// Document Ready
$( document ).ready(function() {
  bindSignup();

});
