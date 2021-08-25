import React, { useEffect } from "react";
import mapImage from "../../images/dummymap.jpg";
import {
  MapContainer,
  MapWrapper,
  MapRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./MapElements";

function GameMap() {
  // useEffect(() => {
  // const script = document.createElement("script");
  // const script2 = document.createElement("script");
  // script2.innerHTML = `
  // let map;
  // // global array to store the marker object
  // let markersArray = [];

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 30.282566215657706, lng: -97.79394520785672 },
  //     zoom: 14,
  //   });
  //   addMarker(
  //     { lat: 30.26785608130884, lng: -97.76767361254434 },
  //     "icon49"
  //   );
  //   addMarker(
  //     { lat: 30.27782929442951, lng: -97.81307150664183 },
  //     "icon57"
  //   );
  //   addMarker({ lat: 30.272051460558384, lng: -97.80390648750793 });
  // }

  // function addMarker(latLng, url, type) {
  //   if (type) {
  //     let url = "http://maps.google.com/mapfiles/kml/pal2/" + type + ".png";

  //     //url += color + "-dot.png";

  //     let marker = new google.maps.Marker({
  //       map: map,
  //       position: latLng,
  //       icon: {
  //         url: url,
  //         //scaledSize: new google.maps.Size(38, 38)
  //       },
  //     });
  //   } else {
  //     let marker = new google.maps.Marker({
  //       map: map,
  //       position: latLng,
  //     });
  //   }
  //   //store the marker object drawn in global array
  //   //markersArray.push(marker);
  // }`;
  // script.async = true;
  // script.defer = true;
  // script.src =
  //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwAeZJKbQRs3xWuL0Ew2ZeSfJjJehpo7M&callback=initMap";
  // document.body.appendChild(script2);
  // document.body.appendChild(script);

  // return () => {
  // document.body.removeChild(script);
  //     document.body.removeChild(script2);
  //   };
  // }, []);

  return (
    <section className="my-5">
      <h1 id="about">Game Map</h1>
      <div id="map"></div>
      {/* <img
        src={mapImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div className="my-2">
        <p>Click on the map and find a game!</p>
      </div>
    </section>
  );
}

export default GameMap;
