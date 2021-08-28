import React, { useState }from "react";
import Map from "../components/Map";
import NavbarLI from "../components/NavbarLI";
import GalleryLI from "../components/GalleryLI";
import FooterLI from "../components/FooterLI";
import SidebarLI from "../components/SidebarLI";

const LoggedInPage = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <SidebarLI isOpen={isOpen} toggle={toggle} />
      <NavbarLI />
      <Map />
      {/* <GalleryLI /> */}
      <FooterLI />
    </>
  );
};

export default LoggedInPage;