var bairro = L.tileLayer.wms("http://10.101.106.10:8080/geoserver/wms", {
    layers: 'bairro',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
bairro.addTo(map);