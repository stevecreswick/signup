console.log('...scripts loaded');


$.ajaxSetup({
  headers:{
    "accept": "application/json"
  }
});



// Model

var Signup = Backbone.Model.extend({
  defaults: {
    name: 'unnamed',
    email: 'blank',
    phone_number: 0
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


var signups = new SignupCollection({});

var signupPainter = new SignupListView({
  collection: signups
});

signups.fetch();


$('form.create-signup').on('submit', function(e){
  e.preventDefault
  var signup = $(this).find('#new-signup').val();
  signups.create({signup})
})
