console.log('signups loaded...');

var app = app || {};

var SignupCollection = Backbone.Collection.extend({
  model: Signup,
  url: '/api/signups'
});
