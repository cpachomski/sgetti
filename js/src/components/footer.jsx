var React = require('react');



var Footer = React.createClass({
  render: function(){
    return(
      <div className='footer-contents'>
        <BottomNav/>
        <ThanksEgg />
      </div>
    )
  }
});




var BottomNav = React.createClass({
  render: function(){
    return(
      <ul>
        <li>Find Sgetti</li>
        <li>Learn More</li>
        <li>About</li>
      </ul>
    )
  }
});





var ThanksEgg = React.createClass({
  render: function(){
    return(
      <div>
        Thanks!
      </div>
    )
  }
});






module.exports = Footer;