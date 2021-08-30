import React from "react";
import Gallery1 from "../../images/7.jpg";
import Gallery2 from "../../images/4.jpg";
import Gallery3 from "../../images/8.jpg";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryImg,
  GalleryH1,
  GalleryH2,
  GalleryP,
  NavBtn,
  NavBtnLink,
} from "./GalleryElements";

const GalleryLI = () => {
  return (
    <GalleryContainer id="score">
      <GalleryH1>Current Games</GalleryH1>
      <GalleryWrapper>
        <GalleryCard>
          <GalleryH2>Time 5:30/Date: 08/10/21</GalleryH2>
          <GalleryH2>Daniel K.</GalleryH2>
          <GalleryP>
            I want to play games with people who have little experience
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryH2>Time 4:30/Date: 08/11/21</GalleryH2>
          <GalleryH2>Sarah H.</GalleryH2>
          <GalleryP>
            I want to play games with people who have some experience
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryH2>Time 4:30/Date: 08/11/21</GalleryH2>
          <GalleryH2>James F.</GalleryH2>
          <GalleryP>
            I want to play games with people who can play competively
          </GalleryP>
        </GalleryCard>
      </GalleryWrapper>
      <NavBtn>
        <NavBtnLink to="/create">Create Match</NavBtnLink>
      </NavBtn>
    </GalleryContainer>
  );
};

export default GalleryLI;
