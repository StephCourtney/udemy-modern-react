import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        //ES6: weather => weather.main.temp same as
        // map(function(weather) {
        //   return weather.main.temp; 
        // })
        // return keyword is implied with fat arrow as long as it is on the same line
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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