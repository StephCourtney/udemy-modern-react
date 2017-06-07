import React, { Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
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