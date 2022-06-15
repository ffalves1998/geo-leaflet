let h2 = document.querySelector('h2');

var map;

function success(pos) {
    console.log(-8.76183, -63.902);
    //h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

    //se a variavel map não possui valor faça
    if(map === undefined){
        //comando para selecionar div do map e mostrar latitude e longitude
        map = L.map('map').setView([-8.76183, -63.902], 13); 
    }
    // senão exclua o mapa
    else{
        map.remove();
        //comando para selecionar div do map e mostrar latitude e longitude
        map = L.map('map').setView([-8.76183, -63.902], 13);
    }
    //mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //pino do mapa
    //L.marker([-8.76183, -63.902]).addTo(map)
        //.bindPopup()
        //.openPopup();
     
}

function error(error) {
    console.log(error);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

