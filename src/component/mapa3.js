import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



//Styles 
//import './Style/Marker.css';

//icono Marker

//Se crea la constante como un anycompoenent para hacer el marcador se muestre.
//const Marker = ({ text }) => <div>{text}</div>;

class Mapa extends Component {
    static defaultProps = {
        center: {
            lat: 17.99,
            lng: -92.94
        },
        iniciar: {
            lat: 17.9940921,
            lng: -92.9429324
        },
        terminar: {
            lat: 17.9894948,
            lng: -92.9236895
        },
        repartidor: {
            lat: 17.9922123,
            lng: -92.9337137,
        },
        zoom: 11
    };

    render() {



        return (
            //¡Importante!  Establezca siempre la altura del contenedor explícitamente

            <Map google={this.props.google}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}
            >






                <Marker
                    lat={this.props.iniciar.lat}
                    lng={this.props.iniciar.lng}

                />
                <Marker
                    lat={18.001508}
                    lng={-92.925009}


                />

                <Marker
                    lat={this.props.terminar.lat}
                    lng={this.props.terminar.lng}

                />

                <Marker
                    lat={17.998450}
                    lng={-92.932827}

                />

                <Marker
                    lat={18.005409}
                    lng={-92.933243}

                />

                <Marker
                    lat={17.999640}
                    lng={-92.927176}

                />

                <Marker
                    lat={this.props.repartidor.lat}
                    lng={this.props.repartidor.lng}

                />


                <Marker
                    lat={17.997554}
                    lng={-92.940485}

                />
                <Marker
                    lat={18.001773}
                    lng={-92.929847}

                />
                <Marker
                    lat={18.000212}
                    lng={-92.937937}

                />




            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('')
})(Mapa)



