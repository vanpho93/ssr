var React = require('react');
var WeatherForm = React.createClass({
  update(){
      this.props.setWeather(this.refs.txtName.value);
      this.refs.txtName.value = '';
  },
  render(){
    return(
      <div>
        <input type="text" ref="txtName" placeholder="Enter your city"/>
        <br/><br/>
        <button className="expanded button" onClick={this.update}>Get Weather</button>
      </div>
    );
  }
});
module.exports = WeatherForm;
