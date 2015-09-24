console.log('... signupListView.js loaded ');

var app = app || {};

app.SignupListView = Backbone.View.extend({
  el: $('#signups-list'),
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  render: function(){
    this.$el.empty();
    var signups = this.collection.models;
    var view;
    for (var i = 0; i < signups.length; i++) {
      view = new app.SignupView({model: signups[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});
