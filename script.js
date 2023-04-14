var defaultCoordinate = document
  .getElementById("default-coordinate")
  .value.split(",");
const map = L.map("map").setView(defaultCoordinate, 13);

// var circle = L.circle([-7.282103, 112.747903], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.2,
//   radius: 3000,
// }).addTo(map);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
