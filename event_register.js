map.on("click", onMapClick);
urlButton.addEventListener("click", onUrlButton);
defaultCoordinateButton.addEventListener("click", onDefaultCoordinateButton);

function onMapClick(e) {
  latlngString = String(e.latlng).split("(");
  latLgn = latlngString[1].split(")");
  finalLatLgn = latLgn[0].split(",");
  value = `{
    "lat": ${finalLatLgn[0]},
    "lng": ${finalLatLgn[1]},
    "value": 10
  }`;
  alert("You clicked the map at \n" + value);
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
