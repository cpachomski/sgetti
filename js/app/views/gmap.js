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

				this.map.setCenter(geolocate);

			}.bind(this));

		

			



		} else{
			$('#map').text('no geolocation so no sgetti');
		}

		console.log(this.duck);
	},

});

return MapView;


});