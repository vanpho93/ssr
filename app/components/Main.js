var React = require('react');
var Nav = require('./Nav.js');
var Main = React.createClass({
  render(){
    return(
      <div>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
