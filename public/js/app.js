console.log(' ... app.js loaded .');


var app = app || {};

$.ajaxSetup({
  headers:{
    "accept": "application/json"
  }
});

  // Signups
  app.signups = new app.SignupCollection({});

  // Signups View
  app.signupPainter = new app.SignupListView({
    collection: app.signups
  });

  app.signups.fetch();



  $( document ).ready(function() {
    app.bindSignupForm();
  });
