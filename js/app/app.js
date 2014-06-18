/*global Ember,$,console*/
var App = Ember.Application.create();

App.Router.map(function () {
    "use strict";

    this.resource("teams", function () {
        this.route("edit");
    });

    
    App.listController = Ember.ArrayController.create();

    $.get('data/info.json', function (data) {
        App.listController.set('content', data);
    });
    
    
});