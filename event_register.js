map.on("click", onMapClick);

async function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
  var url = document.getElementById("url-json").value;
  const res = await axios.get(url);

  var listOfNode = [];
  res.data.record.forEach((e) => {
    listOfNode.push([e["lat"], e["lng"], e["value"]]);
  });
  L.heatLayer(listOfNode, { radius: 10 }).addTo(map);
}

// [
//   [-7.282103, 112.747903, 1300000], // lat, lng, intensity
//   [-7.282103, 112.748013, 2000000],
// ],
