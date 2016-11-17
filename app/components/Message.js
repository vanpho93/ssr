var React = require('react');
var MessageText = require('./MessageText.js');
var MessageForm = require('./MessageForm.js');

var Message = React.createClass({
  getInitialState(){
    return {name: 'Khoa', message: '90 Le Thi Rieng'}
  },
  updateM(name, message){
    this.setState({name: name, message: message})
  },
  render(){
    var name = this.state.name;
    var message = this.state.message;
    return(
      <div>
        <MessageText name={name} message={message}/>
        <MessageForm onUpdate={this.updateM}/>
      </div>
    );
  }
});

module.exports = Message;
