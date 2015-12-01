var React = require('react');

var GMap = React.createClass({
	componentDidMount: function(){
		this.setupMap();
	},

	setupMap: function(){
		this.getUserLocation();
	},

	getUserLocation: function(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(this.showUserLocation);
		} else {
			console.log('CANNOT ')
		}
	},
	showUserLocation: function(position){
		
		var location = {lat: position.coords.latitude, lng: position.coords.longitude}
		this.setState({
			userLocation: location,
		});
	},

	render: function(){
		return(

			<div id='map'>

			</div>

		)
	}
})