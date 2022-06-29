var limite_distrito = L.tileLayer.wms("http://10.101.106.10:8080/geoserver/wms", {
    layers: 'limite_distrito',
    format: 'image/png',
    transparent: true,
    attribution: ""
});
limite_distrito.addTo(map);
