
	var cities = L.layerGroup();



	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
 
	var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

	var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	var map = L.map('map', {
		center: [-8.76183, -63.902],
		zoom: 10,
		layers: [osm, cities]
	});

	var baseLayers = {
		'OpenStreetMap': osm,
		'Streets': streets
	};

	var overlays = {
		//'Cities': cities
	};

	var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
	var crownHill = L.marker([-8.76183, -63.902]).bindPopup();
	var rubyHill = L.marker([-8.76183, -63.902]).bindPopup();

	//var parks = L.layerGroup([crownHill, rubyHill]);

	var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	layerControl.addBaseLayer(satellite, 'Satellite');
	//layerControl.addOverlay(parks, 'Parks');
  

 