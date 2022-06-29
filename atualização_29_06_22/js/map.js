
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

//base de mapas
var satellite = L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//mapa
var map = L.map('map', {
	center: [-8.7619444444444, -63.903888888889],
	zoom: 13,
	layers: [osm]
});

//coordenada em decimais
L.control.coordinates().addTo(map);
//configuração de posição de coordenada em grau, minuto e segundo
L.control.coordinates({
    position: "topright",
    useDMS: true,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map);

//escala
L.control.scale({
	position: "bottomleft",
}).addTo(map);



//base de camadas do mapa
var baseLayers = {
	'OpenStreetMap': osm,
	'Streets': streets,
	'Satelite': satellite
};
/*
//sobreposições
var overlays = {
	'Bairro': cities,
	
};*/

//controle de camadas
var layerControl = L.control.layers(baseLayers).addTo(map);

//zoom 
/*L.control.zoom({
	position: "topright",
}).addTo(map);*/

//geolet
L.geolet({
	position: 'topleft'
}).addTo(map);


//var crownHill = L.marker([-8.76183, -63.902]).bindPopup();
//var rubyHill = L.marker([-8.76183, -63.902]).bindPopup();
//var parks = L.layerGroup([crownHill, rubyHill]);
