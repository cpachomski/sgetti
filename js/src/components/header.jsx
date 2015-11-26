var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <div id='header-container'>
        <div id='logo'>
          <h1>Sgetti</h1>
        </div>
        <HeaderNav />
      </div>
    )
  }
});


var HeaderNav = React.createClass({
  render: function() {
    return(
      <div className='nav-container'>
          <ul className='nav'>

          </ul>
      </div>
    )
  }
});



module.exports = Header;