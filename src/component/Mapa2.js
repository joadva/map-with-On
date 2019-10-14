import React, { Component } from 'react';

import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
export class MapContainer extends Component {
    state = {
        coordenadas: {
           lat: 17.999006, lng: -92.925308
        }
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    render() {
        return (
            <Map google={this.props.google}
                onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
            position={this.state.coordenadas}/>

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCf5cRvagp4ZL3Bv7qcDTWgn5fEaYs3IBs')
})(MapContainer)
