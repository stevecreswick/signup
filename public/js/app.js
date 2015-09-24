console.log('...app loaded');

var app = app || {};


$.ajaxSetup({
  headers:{
    "accept": "application/json"
  }
});


  var signups = new SignupCollection({});

  var signupPainter = new SignupListView({
    collection: signups
  });

  signups.fetch();
