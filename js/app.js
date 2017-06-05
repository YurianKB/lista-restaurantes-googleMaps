var listaRestaurantes = [{
    "nombre": "Restaurante1",
  },
  {
    "nombre": "Restaurante2",
  },
  {
    "nombre": "Restaurante3",
  },
];






























var cargarPagina = function() {
  $("#get-location").click(obtenerUbicacion);
};

var obtenerUbicacion = function(e) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
  } else {
    alert("Actualice su navegador");
  }
};

var mostrarPosicion = function(posicion) {
  console.log(posicion);

  var coordenadas = {
    lat: posicion.coords.latitude,
    lng: posicion.coords.longitude
  };
  mostrarMapa(coordenadas);
};

var mostrarMapa = function(coordenadas) {
  var map = new google.maps.Map($('.map')[0], {
    zoom: 17,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}

$(document).ready(cargarPagina);
