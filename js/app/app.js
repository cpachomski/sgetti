define([
  'jquery',
  'underscore',
  'backbone',
  'views/share',
  'views/gmap',
  'text!templates/search.html'
], function( $, _, Backbone, ShareView, GMapView, SearchTemplate ){

"use strict";

$(document).ready(function(){

	var sv = new ShareView({el: $('#share-icon')});

	$('#find-sgetti').on('click', function(){
	  	var gmap = new GMapView();
	});

});

});



