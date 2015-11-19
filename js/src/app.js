
var React = require('react'),
	ReactDOM = require('react-dom'),
	_ = require('lodash'),
	d3 = require('d3');

var Graph = React.createClass({

	componentWillMount: function(){
		this.loadRawData();
	},

	getInitialState: function(){
		return {rawData: []};
	},

	loadRawData: function(){
		d3.csv(this.props.url)
			.get(function(err, rows){
				if(err){
					console.error(err);
					console.error(err.stack);
				} else{
					this.setState({rawData: rows});
				}
			}.bind(this));
	},
	render: function(){

		if(!this.state.rawData.length){
			return(
				<h2>Loading sgetti data</h2>
			);
		}
		console.log(this.state.rawData);
		return (
			<div className="row">
				<div className="col-md-12">
					<svg width="700" height="500">

					</svg>
				</div>
			</div>
		);
	}
});



ReactDOM.render(
	<Graph url="data/sgetti.csv" />,
	document.querySelectorAll('.graph')[0]
);