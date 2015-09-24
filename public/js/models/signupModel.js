console.log('signup model loaded');

var Signup = Backbone.Model.extend({
  defaults: {
    username: '',
    email: '',
    phone_number: 0
  }
});
