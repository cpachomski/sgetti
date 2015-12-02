define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search.html'
], function($, _, Backbone, SearchTemplate ){

'use strict';


var SearchView = Backbone.View.extend({
    initialize: function(opts){
    	
        console.log('initialized SearchView');
    }
});



return SearchView;

});