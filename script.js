var defaultCoordinateButton = document.getElementById(
  "default-coordinate-button"
);
var urlButton = document.getElementById("url-json-button");
var map = L.map("map").setView(
  document.getElementById("default-coordinate").value.split(","),
  13
);
// var circle = L.circle([-7.282103, 112.747903], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.2,
//   radius: 3000,
// }).addTo(map);

var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
