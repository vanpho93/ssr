var url = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric&q=';
var React = require('react');
var WeatherForm = require('./WeatherForm.js');
var WeatherMessage = require('./WeatherMessage.js');
var Weather = React.createClass({
  getInitialState(){
    return {city: 'Hanoi', temp: 28}
  },
  setStatus(cityName){
    this.setState({city: cityName, temp: 30});
    $.get(url+cityName, (data) => {
      this.setState({city: this.state.city, temp: data.main.temp});
    })
  },
  render(){
    return (
      <div className="small-12 medium-6 large-4 columns small-centered">
          <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm setWeather={this.setStatus}/>
          <WeatherMessage city={this.state.city} temp={this.state.temp}/>
      </div>
    );
  }
});
module.exports = Weather;
