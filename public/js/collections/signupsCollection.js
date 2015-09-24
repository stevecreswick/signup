console.log('... signupCollection.js loaded ');

var app = app || {};

app.SignupCollection = Backbone.Collection.extend({

  model: app.Signup,
  url: '/api/signups'
  
});
