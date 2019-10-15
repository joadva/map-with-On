import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
//import io from 'socket.io-client';

import json from './db.json';



// iconos Repartidor

import Repartidor from './iconos/UGTruck-Blue.png';


//Iconos Marcador
import Marcador1 from './iconos/MapMarker-Green.png';
import Marcador2 from './iconos/MapMarker-Red.png';
import Marcador3 from './iconos/MapMarker-Yellow.png';
import Marcador4 from './iconos/blue.png';
// socket 



export class MapContainer extends Component {
    constructor() {
        super();
        this.socket = null;
        this.state = {
            coordenadas: {},
            socketUrl: 'http://192.168.1.179:3000/',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            Verde: {
                lat: 17.9940921,
                lng: -92.9429324

            },
            Verde2: {
                lat: 17.9894948,
                lng: -92.9236895
            },
            Amarillo: {
                lat: 17.996791, lng: -92.955446
            },
            Amarillo2: {
                lat: 18.012646, lng: -92.920019
            },
            Rojo: {
                lat: 18.010373, lng: -92.939398
            },
            Rojo1: {
                lat: 17.973961, lng: -92.935851
            },
            Azul: {
                lat: 18.006064, lng: -92.953628
            },
            Azul1: {
                lat: 17.999006, lng: -92.925308
            }

        };

        for (const prop in json) {

            let { coordenadas2 } = json[prop];

            console.log(coordenadas2);

            // console.log(`json.${prop} = ${json[prop]}`);
        }

        for (const prop in this.state.coordenadas) {

            let { lat, lng } = json[prop];
            this.setState({ coordenadas: "Helo" });
            console.log(lat, lng);

            // console.log(`json.${prop} = ${json[prop]}`);
        }
        //console.log(json);







    }

    componentDidMount() {
        this.setState({ coordenadas: json }, (resp) => {

            for (var coordenadas in this.state.coordenadas) {
                console.log(this.state.coordenadas[coordenadas]);
            }

            for (var coordenadas2 in this.state.coordenadas) {
                console.log(this.state.coordenadas[coordenadas2]);
            }

            console.log(this.state.coordenadas);
            //  console.log(this.state.coordenadas)
        });



    }

    /* componentDidMount() {
         const { socketUrl } = this.state;
         this.socket = io(socketUrl, {
             query:
                 'auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDdjMTM2ZWQ0ZjBkMDA0OTc3ZDRhOTAiLCJuYW1lIjoidGVzdCIsImxhc3RfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdXJnZWdhcy5jb20iLCJpYXQiOjE1NjkxNzc3NzB9.EXfPzmqw9pN7itQyeSTNjRU4EbCTKiib_gV7G9_C6u4',
         });
         this.socket.on("clients-coordinates", resp => {
             this.setState({ coordenadas: resp })
             console.log(resp);
         });
     }
     
    */





    //Activar click en el marcador y mostrar con el info 
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    //Quitar en infoWindow cuando clickqueas en el mapa
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };






    //metodo obtener coordenadas 


    render() {
        var coordenadas;
        var coordenadas2;
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: 17.99,
                    lng: -92.94
                }}


                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}
                onClick={this.onMapClicked}

            >

                {/* Marcadores Verdes    */}
                <Marker
                    onClick={this.onMarkerClick}

                    name={'SOMA'}
                    position={this.state.Verde}
                    icon={Marcador1} />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Av. 27 de Febrero '}

                    position={this.state.Verde2}
                    icon={Marcador1} />


                {/* REpartido   */}

                <Marker
                    icon={Repartidor}
                    onClick={this.onMarkerClick}
                    name={'jejej'}

                    position={this.state.coordenadas[coordenadas]}

                />

                {/* Marcadores Amarillow    */}

                <Marker
                    onClick={this.onMarkerClick}
                    name={'The Castro'}
                    position={this.state.Amarillo}
                    icon={Marcador3}



                />
                <Marker
                    name={' Lake Street'}
                    position={this.state.Amarillo2}
                    icon={Marcador3}

                />
                {/* Marcadores Rojos  */}
                <Marker
                    onClick={this.onMarkerClick}
                    name={' Laurel Heights'}
                    position={this.state.Rojo}
                    icon={Marcador2}

                />
                <Marker
                    onClick={this.onMarkerClick}
                    name={' PetrolHill'}
                    position={this.state.Rojo1}
                    icon={Marcador2}

                />

                {/*marcador azul */}
                <Marker
                    onClick={this.onMarkerClick}
                    name={''}
                    position={this.state.Azul}
                    icon={Marcador4} />

                <Marker
                    onClick={this.onMarkerClick}
                    name={''}
                    position={this.state.Azul1}
                    icon={Marcador4} />


                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}

export default GoogleApiWrapper({

    apiKey: ('')
})(MapContainer)
