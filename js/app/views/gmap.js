define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/result-details.html',
  'text!templates/result-tab.html',
  'views/slider'
], function($, _, Backbone, ResultDetailsTemplate, ResultTabTemplate, SliderView ){

'use strict';


var MapView = Backbone.View.extend({
	initialize: function(opts){
		this.opts = opts || {}; 
		var self = this;

		this.setupMap();
		this.setGeolocation();
		this.tabWidth = $('.current-result-display').width();
		
	},
	setupMap: function(){

		var mapOptions = {
			zoom: 15,
		}

		this.map = new google.maps.Map(document.getElementById('map'), mapOptions );

	},

	setGeolocation: function(){

		

		if(navigator.geolocation){
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
		// var sgettiRoute = 'l!';	
		var that = this;
		$.get(sgettiRoute, function(d){

			this.locations = d.response.data;
			// that.locations = [
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" },
			// { name: "The Spotted Pig" }];
			this.currentLocation = this.locations[0];

			this.currentLocation.active = true;
			
			var containerWidth = that.tabWidth * that.locations.length;
			$('.results').css('width', containerWidth);
			_.each(that.locations, function(location){
				var resultTab = _.template(ResultTabTemplate, {variable: 'data'})({'location': location});
				var resultDetails = _.template(ResultDetailsTemplate, {variable: 'data'})({'location': location});
				$('.results').append(resultTab);
				$('.current-result-display').append(resultDetails);
			});			


		}.bind(this)).done(function(){

			$('#find-sgetti').toggle();
			
			_.each($('.result-tab'), function(result){
				$(result).css('width', that.tabWidth);
			});
			$('.right').removeClass('hidden');
			var SV = new SliderView({ el: $('.results'), locations: this.locations});

		}.bind(this));

	},




});

return MapView;


});