console.log('... signupModel.js loaded ');

var app = app || {};

app.Signup = Backbone.Model.extend({
  defaults: {
    username: '',
    email: '',
    phone_number: 0
  }
});
