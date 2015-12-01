
var React = require('react'),
		ReactDOM = require('react-dom'),
		d3 = require('d3'),
		Header = require('./components/header.jsx'),
		Footer = require('./components/footer.jsx')






var App = React.createClass({
	componentDidMount: function(){
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
		console.log(location)	
	},
	render: function(){
		return(
			<div className='app-container'>
				
			</div>
		)
	}

});






ReactDOM.render(
	<Header />,
	document.getElementsByTagName('header')[0]
);


ReactDOM.render(
	<App />,
	document.getElementById('app')
);


ReactDOM.render(
	<Footer />,
	document.getElementsByTagName('footer')[0]
);