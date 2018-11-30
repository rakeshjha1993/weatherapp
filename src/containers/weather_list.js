import React, { Component } from 'react'
import {connect} from 'react-redux';


class WeatherList extends Component {

  renderWeather(cityData){
    console.log(this.props.weather);
    return (
        <tr>
            <td>{cityData.city.name}</td>
        </tr>
    );
  }

  render() {
    console.log(this.props.weather)
    return (
        
      <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City </th>
                    <th>Temperature </th>
                    <th>Pressure </th>
                    <th>Humidity </th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps({weather}){
    console.log(weather);
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList)