var React = require('react');
var MessageForm = React.createClass({
  update(){
      var name = this.refs.txtName.value;
      var message = this.refs.txtMessage.value;
      this.props.onUpdate(name, message);
  },
  render(){
    return(
      <div>
        <input type="text" ref="txtName" placeholder="Enter a name"/>
        <br/><br/>
        <input type="text" ref="txtMessage" placeholder="Enter a message"/>
        <br/><br/>
        <button onClick={this.update}>Update Message</button>
      </div>
    );
  }
});
module.exports = MessageForm;
