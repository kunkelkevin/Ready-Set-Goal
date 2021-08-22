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
  GalleryP
} from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer id="score">
      <GalleryH1>Testimonials</GalleryH1>
      <GalleryWrapper>
        <GalleryCard>
          <GalleryImg src={Gallery1} />
          <GalleryH2>Daniel K.</GalleryH2>
          <GalleryP>
           It was so hard to get all of my friends together to get a full game going. Now I can play whenever and my friends can join along.
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src={Gallery2} />
          <GalleryH2>Sarah H.</GalleryH2>
          <GalleryP>
           I love this app! It is so easy to find fun coed pick up games and meet new people. I try and get at leasat 1 game in a week.
          </GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src={Gallery3} />
          <GalleryH2>James F.</GalleryH2>
          <GalleryP>
            I play for a local club but it is always hard to get extra practice in. Using this app I am able to get in extra games.
          </GalleryP>
        </GalleryCard>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
