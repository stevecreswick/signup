console.log('... signupView.js loaded ');

var app = app || {};

app.SignupView = Backbone.View.extend({
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
