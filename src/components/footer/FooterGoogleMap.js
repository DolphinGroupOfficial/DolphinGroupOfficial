import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

export default class FooterGoogleMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            map: null
        };
    }

    onLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(this.props.center); // Extend bounds to include center

        map.fitBounds(bounds); // Fit map to the bounds including center

        this.setState({ map });
    }

    onUnmount = () => {
        this.setState({ map: null });
    }

    render() {

        return (
            <LoadScript
                googleMapsApiKey="AIzaSyA1orG-Pl9NcXEvg-K7CSbNIzMz-9KWZQg"
                onLoad={() => this.setState({ isLoaded: true })}
            >
                {this.state.isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={this.props.center}
                        zoom={10} // Adjust zoom level as needed
                        onLoad={this.onLoad}
                        onUnmount={this.onUnmount}>
                        <Marker position={this.props.center} />
                    </GoogleMap>
                )}
            </LoadScript>
        );
    }
}
