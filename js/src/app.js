
var React = require('react'),
	ReactDOM = require('react-dom'),
	d3 = require('d3');



var Header = React.createClass({
	render () {
		<header>
			<div className='logo'>
			</div>
		<TopNav />
		</header>
	}

});



var TopNav = React.createClass({
	render () {
		<div className='nav-container'>
				<ul className='nav'>

				</ul>
		</div>
	}
})

// var Graph = React.createClass({

// 	componentWillMount: function(){
// 		this.loadRawData();
// 	},

// 	getInitialState: function(){
// 		return {rawData: []};
// 	},

// 	loadRawData: function(){
// 		d3.csv(this.props.url)
// 			.row(function(d){
// 				return{
// 					country: d.country,
// 					kg_capita: Number(d['kg/capita']),
// 					tons_produced: Number(d['tons produced'])
// 				}
// 			})
// 			.get(function(err, rows){
// 				if(err){
// 					console.error(err);
// 					console.error(err.stack);
// 				} else{
// 					this.setState({rawData: rows});
// 				}
// 			}.bind(this));
// 	},
// 	render: function(){

// 		if(!this.state.rawData.length){
// 			return(
// 				<h2>Loading sgetti data</h2>
// 			);
// 		}
// 		console.log(this.state.rawData);
// 		return (
// 			<div className="row">
// 				<div className="col-md-12">
// 					<svg width="700" height="500">

// 					</svg>
// 				</div>
// 			</div>
// 		);
// 	}
// });



ReactDOM.render(
	<Header />,
	document.querySelectorAll('header')[0]
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);


ReactDOM.render(
	<Footer />,
	document.querySelectorAll('footer')[0]
);