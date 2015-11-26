var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <div id='header-container'>
        <div id='logo'>
          <h1>Sgetti</h1>
        </div>
        <headerNavMenu />
      </div>
    )
  }
});










module.exports = Header;