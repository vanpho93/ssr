var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.js');
var About = require('./components/About.js');
var Examples = require('./components/Examples.js');
var Weather = require('./components/Weather.js');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

//destructor es6
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>
,
  document.getElementById('root')
);
