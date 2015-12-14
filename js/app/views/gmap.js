define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/result-tab.html',
  'views/slider'
], function($, _, Backbone, ResultTabTemplate, SliderView ){

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
			styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#434343"},{"weight":".45"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"weight":"0.45"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"weight":".45"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"color":"#9a9a9a"},{"weight":"0.45"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e5e5e5"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dddddd"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
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

	placeMarkers: function(location){
		var locationCoords = {lat: location.latitude, lng: location.longitude};
		var marker = new google.maps.Marker({
					position: locationCoords,
					map: this.map,
					title: '' + location.name
		});
	},

	setMapCenter: function(location){
		console.log(this.map);
		console.log(location.latitude, " location")
		this.map.panTo({lat: location.latitude, lng: location.longitude});

	},
	getSgettiLocations: function(lat,lng){
		// var sgettiRoute = 'http://api.v3.factual.com/t/restaurants-us?filters={"$and":[{"cuisine":{"$includes":"italian"}}]}&geo={"$circle":{"$center":['+lat+','+lng+'],"$meters":5000}}&KEY=XT3lQasien4oEqKnwuLRWDGwH1VvYyGtbTFbCHQh';
		var sgettiRoute = 'l!';
		var that = this;
		$.get(sgettiRoute, function(d){

			// this.locations = d.response.data;
			this.locations = [
			{ name: "The Spotted Pig 1",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 1,
			 	latitude: 11,
			 	longitude: 15
			},
			{ name: "The Spotted Pig 2",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 2,
			 	latitude: 11,
			 	longitude: 15
			},
			{ name: "The Spotted Pig 3",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 3,
			 	latitude: 51,
			 	longitude: 15
			},
			{ name: "The Spotted Pig 4",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 4,
			 	latitude: 11,
			 	longitude: 14
			},
			{ name: "The Spotted Pig 5",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 5,
			 	latitude: 11,
			 	longitude: 11
			},
			{ name: "The Spotted Pig 6",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 6,
			 	latitude: 11,
			 	longitude: 5
			},
			{ name: "The Spotted Pig 7",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 7,
			 	latitude: 11,
			 	longitude: 0
			},
			{ name: "The Spotted Pig 8",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 8,
			 	latitude: 11,
			 	longitude: 15
			},
			{ name: "The Spotted Pig 9",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 9,
			 	latitude: 11,
			 	longitude: 15
			},
			{ name: "The Spotted Pig 10",
			 	address: '123 that rd.',
			 	hours_display:"1pm - 1am daily",
			 	price: 3,
			 	rating: 5,
			 	factual_id: 10,
			 	latitude: 11,
			 	longitude: 15
			},];

			this.currentLocation = this.locations[0];
			this.currentLocation.active = true;

			var containerWidth = that.tabWidth * that.locations.length;
			$('.results').css('width', containerWidth);

			//BUILD TEMPLATE VIEWS

			_.each(this.locations, function(location){
				var resultTab = _.template(ResultTabTemplate, {variable: 'data'})({'location': location});

				//Place Markers
				this.placeMarkers(location);

				$('.results').append(resultTab);
				// $('.result-details-slider').append(resultDetails);
			}.bind(this));



		}.bind(this)).done(function(){


			$('#find-sgetti').toggle();

			_.each($('.result-tab'), function(result){
				$(result).css('width', that.tabWidth);
			});
			$('.right').removeClass('hidden');

			this.setMapCenter(this.currentLocation);
			var SV = new SliderView({ el: $('.results'), locations: this.locations, map: this.map});

		}.bind(this));

	},




});

return MapView;


});