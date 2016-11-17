var React = require('react');
var MessageText = React.createClass({
  render(){
    return (
      <h1>{this.props.name + ': ' + this.props.message}</h1>
    );
  }
});
module.exports = MessageText;
