var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello.js');
var MessageForm = require('./components/MessageForm.js');
var MessageText = require('./components/MessageText.js');
ReactDOM.render(
<MessageText name="Khoa" message="90 le thi rieng"/>,
  document.getElementById('root')
);
