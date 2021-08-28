import React from "react";
import Map from "../components/Map";
import NavbarLI from "../components/NavbarLI";
import Games from "../components/Games";
import FooterLI from "../components/FooterLI";

const LoggedInPage = () => {
  return (
    <>
      <NavbarLI />
      <Map />
      <Games></Games>
      <FooterLI />
    </>
  );
};

export default LoggedInPage;
