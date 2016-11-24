var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  render(){
    return(
      <div>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
