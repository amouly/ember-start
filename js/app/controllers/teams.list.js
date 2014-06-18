/*global App,Ember,$,console*/
App.ListTeamsController = Ember.ObjectController.extend({

    start: function () {
        "use strict";
        
        App.listController = Ember.ArrayController.create();

        $.get('data/info.json', function (data) {
            App.listController.set('content', data);
        });
    }
});