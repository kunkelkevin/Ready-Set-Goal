import React from 'react';
import mapImage from '../../src/images/dummymap.jpg';
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

function gameMap() {
  return (
    <section className="my-5">
      <h1 id="about">Game Map</h1>
      <img src={mapImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Click on the map and find a game!
        </p>
      </div>
    </section>
  );
}

export default gameMap;