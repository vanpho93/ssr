var React = require('react');
var Nav = require('./Nav.js');
var Main = React.createClass({
  render(){
    return(
      <div>
        <Nav/>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
