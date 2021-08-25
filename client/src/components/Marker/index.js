import React from "react";
import { Marker } from "@react-google-maps/api";

const CustomMarker = (props) => {
  const { id } = props;

  const onMarkerClick = (evt) => {
    window.location.assign("/field/" + id);
  };

  return <Marker onClick={onMarkerClick} {...props} />;
};

export default CustomMarker;
