/*global Ember,$,console*/
var App = Ember.Application.create();

App.Router.map(function () {
    "use strict";

    this.resource("teams", function () {
        this.route("edit");
    });

    
    //App.listController = Ember.ArrayController.create();


    
    
    App.PostsController = Ember.ArrayController.extend({
        itemController: 'teams'
    });

    $.get('data/info.json', function (data) {
        App.PostsController.set('content', data);
    });
    
    App.PostController = Ember.ObjectController.extend({
      // the `title` property will be proxied to the underlying post.

        getTeams: function () {
            return this.get('teams');
        }.property('teams')
    });
    
    
});