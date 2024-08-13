import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class FooterMapBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <Map
                mapboxAccessToken="pk.eyJ1IjoibGFrc2htaXByYXNhbm5hMDgwMiIsImEiOiJjam9pYWY3YnYwNmZyM3FxbjF0YTVna2ViIn0.Ic_QhPlRWL4BDytuJ8xbNQ"
                initialViewState={{
                    longitude: this.props?.center?.lng,
                    latitude: this.props?.center?.lat,
                    zoom: 14.5,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11">
                <Marker longitude={this.props?.center?.lng} latitude={this.props?.center?.lat} anchor="bottom" >
                </Marker>
            </Map>
        );
    }
}
