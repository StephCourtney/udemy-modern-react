import React, { Component } from 'react';

class GoogleMap extends Component {
    // lifecycle method called after this component is loaded
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render(){
        return <div ref="map" />
    }
}

export default GoogleMap;