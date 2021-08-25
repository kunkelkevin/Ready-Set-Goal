import React from "react";
import Map from "../components/Map";
import NavbarLI from "../components/NavbarLI";
import GalleryLI from "../components/GalleryLI";
import FooterLI from "../components/FooterLI"

const LoggedInPage = () => {
  return (
    <>
      <NavbarLI />
      {/* <Map /> */}
      <GalleryLI />
      <FooterLI />
    </>
  );
};

export default LoggedInPage;
