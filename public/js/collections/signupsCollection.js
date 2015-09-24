console.log('signups loaded...');

var SignupCollection = Backbone.Collection.extend({
  model: Signup,
  url: '/api/signups'
});
