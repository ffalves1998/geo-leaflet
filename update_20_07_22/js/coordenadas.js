var map = new L.Map('map');

var url = 'http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpeg',
    attr = 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data {attribution.OpenStreetMap}',
    service = new L.TileLayer(url, { subdomains: "1234", attribution: attr });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    zoom: 13,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var bounds = new L.LatLngBounds(new L.LatLng(-8.76183, -63.902), new L.LatLng(-8.76183, -63.902));

map.addLayer(service).fitBounds(bounds);
//add standard controls
L.control.coordinates().addTo(map);
//add configured controls
/*L.control.coordinates({
    position: "bottomleft",
    decimals: 2,
    decimalSeperator: ",",
    labelTemplateLat: "Latitude: {y}",
    labelTemplateLng: "Longitude: {x}"
}).addTo(map);*/
L.control.coordinates({
    position: "topright",
    useDMS: true,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map);