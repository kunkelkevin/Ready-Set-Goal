let map;
// global array to store the marker object
let markersArray = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.282566215657706, lng: -97.79394520785672 },
    zoom: 14,
  });
  addMarker({ lat: 30.26785608130884, lng: -97.76767361254434 }, "icon49");
  addMarker({ lat: 30.27782929442951, lng: -97.81307150664183 }, "icon57");
  addMarker({ lat: 30.272051460558384, lng: -97.80390648750793 });
}

function addMarker(latLng, url, type) {
  if (type) {
    let url = "http://maps.google.com/mapfiles/kml/pal2/" + type + ".png";

    //url += color + "-dot.png";

    let marker = new google.maps.Marker({
      map: map,
      position: latLng,
      icon: {
        url: url,
        //scaledSize: new google.maps.Size(38, 38)
      },
    });
  } else {
    let marker = new google.maps.Marker({
      map: map,
      position: latLng,
    });
  }
  //store the marker object drawn in global array
  //markersArray.push(marker);
}
