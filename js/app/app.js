define([
  'jquery',
  'underscore',
  'backbone',
  'views/pageload',
  'views/search',
  'text!templates/search.html'
], function( $, _, Backbone, PageLoadView, SearchView, SearchTemplate ){

"use strict";





$(document).ready(function(){

	console.log('app.js hit')
  	var plv = new PageLoadView();
  	var sv = new SearchView();

});

});



