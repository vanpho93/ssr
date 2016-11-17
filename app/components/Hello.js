var React = require('react');
var Hello = React.createClass({
  say(){
    var msg = this.refs.txtMessage.value;
    alert(msg);
  },
  render(){
    return(
      <div>
        <input type="text" ref="txtMessage" placeholder="Enter your message"/>
        <button onClick={this.say}>Alert</button>
      </div>
    );
  }
});

module.exports = Hello;
