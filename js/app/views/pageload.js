define([
  'jQuery',
  'underscore',
  'backbone'
], function($, _, Backbone ){

'use strict';


var PageLoadView = Backbone.View.extend({
    initialize: function(opts){
        console.log('initialized PageLoadView');
    }
});



return PageLoadView;

});