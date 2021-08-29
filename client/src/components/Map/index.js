import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useStoreContext } from "../../utils/GlobalState";
import CustomMarker from "../Marker";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_FIELDS } from "../../utils/queries";
import { UPDATE_FIELDS } from "../../utils/actions";

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
  GoogleMapContainer,
  MapP,
  PageContainer,
} from "./MapElements";

function GameMap() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_ALL_FIELDS);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_FIELDS,
        fields: data.fields,
      });
      data.fields.forEach((field) => {
        idbPromise("fields", "put", field);
      });
    } else if (!loading) {
      idbPromise("fields", "get").then((fields) => {
        dispatch({
          type: UPDATE_FIELDS,
          fields: fields,
        });
      });
    }
  }, [data, loading, dispatch]);

  const containerStyle = {
    width: "80%",
    height: "60vw",
  };

  const center = {
    lat: 30.282566215657706,
    lng: -97.79394520785672,
  };

  const fieldPositions = () => {
    return state.fields.map((field) => {
      field.position = {
        lat: field.lat,
        lng: field.lng,
      };
      return field;
    });
  };
  console.log(fieldPositions());

  console.log(containerStyle, center);
  return (
    <>
      {/* <h1 id="about">Game Map</h1> */}
      <PageContainer>
        <GoogleMapContainer>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              {state.fields.map((field) => (
                <CustomMarker
                  position={field.position}
                  key={field._id}
                  id={field._id}
                />
              ))}

              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </GoogleMapContainer>
        <MapP>Click on a field marker to join or create games!</MapP>
      </PageContainer>
    </>
  );
}

export default GameMap;
