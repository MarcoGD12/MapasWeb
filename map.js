//Mandar llamar la petición de mapa de openstreetmap
var map = L.map('map').setView([18.132279, -94.463814],13);

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(map);



//Agregar solo un marcador con el icono por default
//var marker = L.marker([18.150107, -94.467789]).addTo(map);



//Agregar varios marcadores
var lugares = [
    [18.150107, -94.467789],
    [18.140371, -94.554126],
    [18.148434, -94.527255],
    [18.136853, -94.371844],
    [18.116667, -94.401176],
    ];



//Para editar marcadores hay que agregar una variable y un ciclo "for" para que cada marcador se llame de manera diferente"
//Este codigo es para tener ya un icono personalizado
var icononegro = L.icon({
      iconUrl:'img/marker-15.svg',
      iconSize:[24,24]
    })

     var arregloDeMarcadores = [];
      for (var i=0; i < lugares.length; i++) {
                  arregloDeMarcadores[i] = new L.marker(lugares[i], {icon: icononegro}).addTo(map); }



//Agregar un nombre a un marcador
   //arregloDeMarcadores[0].bindPopup('<p>Vertedero</p>');



//El marcador arrojara una imagen y un nombre con bindPopUp
    //arregloDeMarcadores[0].bindPopup('<img src="img/Vertedero.jpg"><p>Vertedero</p>')
    //arregloDeMarcadores[1].bindPopup('<img src="img/Olmeca.jpg"><p>Cd.Olmeca</p>')
    //arregloDeMarcadores[2].bindPopup('<img src="img/Barrillas.jpg"><p>Lomas de Barrillas</p>')
    //arregloDeMarcadores[3].bindPopup('<img src="img/Petroquimica.jpg"><p>Petroquimica</p>')
    //arregloDeMarcadores[4].bindPopup('<img src="img/Pajaritos.jpg"><p>PEMEX Pajaritos</p>')



//Dar formato a la ventana que contiene la imagen del marcador (titulo, imagen, tamaño de la ventana)
var popup = L.popup({minWidth:200}).setContent('<b>Vertedero</b><img src="img/Vertedero.jpg"><p>Aqui se puede colocar un texto descriptivo para cada sitio</p>');arregloDeMarcadores[0].bindPopup(popup);
var popup = L.popup({minWidth:250}).setContent('<b>Cd.Olmeca</b><img src="img/Olmeca.jpg"><p>Aqui se puede colocar un texto descriptivo para cada sitio</p>');arregloDeMarcadores[1].bindPopup(popup);
var popup = L.popup({minWidth:250}).setContent('<b>Lomas de Barrillas</b><img src="img/Barrillas.jpg"><p>Aqui se puede colocar un texto descriptivo para cada sitio</p>');arregloDeMarcadores[2].bindPopup(popup);
var popup = L.popup({minWidth:250}).setContent('<b>Petroquimica</b><img src="img/Petroquimica.jpg"><p>Aqui se puede colocar un texto descriptivo para cada sitio</p>');arregloDeMarcadores[3].bindPopup(popup);
var popup = L.popup({minWidth:250}).setContent('<b>PEMEX Pajaritos</b><img src="img/Pajaritos.jpg"><p>Aqui se puede colocar un texto descriptivo para cada sitio</p>');arregloDeMarcadores[4].bindPopup(popup);



//Cambiar el icono del marcador (REVISAR TODO ESTE TEMA PARA QUE QUEDE MAS CLARO)
//var IconoWheels = L.icon({
    //iconUrl:'img/wheelchair-15.svg',
    //iconSize:[24,24]
//})
//Cambiar el icono del marcador
//var IconoWheels = L.icon({
    //iconUrl:'img/wheelchair-15.svg',
    //iconSize:[24,24],
    //iconAnchor: [12,22],
    //popupAnchor: [0, -24]
//});
// Cambiar el icono del marcador
//var arregloDeMarcadores = [];
    //for (var i=0; i < lugares.length; i++) {
    //arregloDeMarcadores[i] = new L.marker(lugares[i], {icon:IconoWheels}).addTo(map);
//}



//Agregar poligonos a GeoJson (PENDIENTE DE RESOLVER)
//L.geoJson(CoatzaLoc).addTo(map);



//Crear mapa tematico de categorias con PopUp
function getColor(b) {
    return b == 'Coatzacoalcos' ? '#f03b20' :
           b == 'Allende' ? '#feb24c' :
           b == 'Mundo Nuevo' ? '#ffeda0' :
           b == 'Lomas de Barrillas' ? '#addd8e' :
           b == 'Fraccionamiento Ciudad Olmeca' ? '#31a354' :
           b == 'Puerto Esmeralda' ? '#636363' :
                          'black';
    }
    function style(feature) {
      return {
          fillColor: getColor(feature.properties.NOMBRE),
          weight: 0.5,
          opacity: 1.5,
          color: 'black',
          fillOpacity: 1
      };
    }
L.geoJson(NOMBRE, {style: style}).addTo(map);


// Agregando POPUPS a la capa GeoJSON //
function popUpInfo(feature, layer) { 
    if (feature.properties && feature.properties.NOMBRE){
        layer.bindPopup(feature.properties.NOMBRE);  
    }
  }
   
  L.geoJson(NOMBRE, { 
    style: style, onEachFeature: popUpInfo 
    }).addTo(map);