### `Actual funcion`

Marker con iconos  sin errores de mover el mapa y incrementan su tamaño o decrementan depende el zoom.

EL errro se compone con propiedad de google maps o solo Crea el marker y importa la imagen.  si es la que trae de 1x, baja el porcentaje un 75 porciento o mas dependiendo .


Si  Muestra error de Ooops en el mapa solo actualzia tu APi o inhabilita y crea otra.

### Es esta libreria Google Maps react. 


InfoWindow
 Activada cada vez que el marcado sea click en el se muestra una informacion pequeña.
(Aun falta que de la informacion de google maps)

Creee una onClickal mapa para que cada vez que se clickea afuera del icono o del ViewWondows solo se quite la ventana de informacion.

### Para las rutas 

peudes guiarte de esto 2 :   

2 am  https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/directions-simple  estas verificandolo 

2:30 am  aun lo verificas : https://stackblitz.com/edit/react-cacwgk?file=index.js 


### Son funciones de google maps traidas 
 showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},


### state

 El state es asyncrono por eso se ocupa y asi ya se muestran en el state ya que tarda en responder uwu 
          this.setState({ coordenadas: json }, (resp) => {
            console.log(this.state.coordenadas)
        });


### para mostrar los objetos que estan en el state  se ocupa 

         for (var coordenadas in this.state.coordenadas) {
                console.log(this.state.coordenadas[coordenadas]);
            }