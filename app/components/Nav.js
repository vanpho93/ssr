var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  render(){
    return(
      <div className="top-bar">
          <div className="top-bar-title">
              <strong>Site Title</strong>
          </div>
         <div id="responsive-menu">
          <div className="top-bar-left">
              <ul className="menu">
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink></li>
                <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link></li>
                <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link></li>
              </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search"/></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
