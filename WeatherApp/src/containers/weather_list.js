import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        //ES6: weather => weather.main.temp same as
        // map(function(weather) {
        //   return weather.main.temp; 
        // })
        // return keyword is implied with fat arrow as long as it is on the same line
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat }= cityData.city.coord;
        console.log(temps);
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="purple" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//ES6: ({weather}) is the same as const weather = state.weather;
// *Only works when one param is passed in
function mapStateToProps({ weather }) {
    //ES6: { weather } is the same as { weather : weather }
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);