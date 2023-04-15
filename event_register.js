map.on("click", onMapClick);
urlButton.addEventListener("click", onUrlButton);
defaultCoordinateButton.addEventListener("click", onDefaultCoordinateButton);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

async function onUrlButton(e) {
  var url = document.getElementById("url-json").value;
  var res = await axios.get(url);

  var listOfNode = [];
  if (res.data.record == null) {
    res.data.forEach((e) => {
      listOfNode.push([e["lat"], e["lng"], e["value"]]);
    });
  } else {
    res.data.record.forEach((e) => {
      listOfNode.push([e["lat"], e["lng"], e["value"]]);
    });
  }

  L.heatLayer(listOfNode, { radius: 10 }).addTo(map);
}

function onDefaultCoordinateButton(e) {
  map.setView(
    document.getElementById("default-coordinate").value.split(","),
    13
  );
}
