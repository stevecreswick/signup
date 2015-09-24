console.log(' ... app.js loaded .');


var app = app || {};


$.ajaxSetup({
  headers:{
    "accept": "application/json"
  }
});


  app.signups = new app.SignupCollection({});

  app.signupPainter = new app.SignupListView({
    collection: app.signups
  });

  app.signups.fetch();



  $( document ).ready(function() {
    app.bindSignup();

  });
