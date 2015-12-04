define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone ){

'use strict';


var MapView = Backbone.View.extend({
	initialize: function(opts){
		this.opts = opts || {}; 
		var self = this;
		this.setupMap();
		this.setGeolocation();
		
	},
	setupMap: function(){

		var mapOptions = {
			zoom: 15,
		}

		this.map = new google.maps.Map(document.getElementById('map'), mapOptions );

	},

	setGeolocation: function(){

		

		if(navigator.geolocation){
			console.log('buildMap()')

			var mapOptions = {
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			

			navigator.geolocation.getCurrentPosition(function(position){
				var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				this.getSgettiLocations(position.coords.latitude, position.coords.longitude);
				this.map.setCenter(geolocate);

			}.bind(this));

		
		} else{
			$('#map').text('no geolocation so no sgetti');
		}


	},

	getSgettiLocations: function(lat,lng){
		var sgettiRoute = 'http://api.v3.factual.com/t/restaurants-us?filters={"$and":[{"cuisine":{"$includes":"italian"}}]}&geo={"$circle":{"$center":['+lat+','+lng+'],"$meters":5000}}&KEY=XT3lQasien4oEqKnwuLRWDGwH1VvYyGtbTFbCHQh';

		$.get(sgettiRoute, function(d){

			this.locations = d.response.data;
	
		}.bind(this));

	}

});

return MapView;


});