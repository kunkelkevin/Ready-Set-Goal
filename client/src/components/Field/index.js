import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_FIELDS } from "../../utils/queries";
import { UPDATE_FIELDS } from "../../utils/actions";
import Games from "../Games";
import { FieldH1, FieldP, FieldButton, FieldContainer } from "./FieldElements";

function Field() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentField, setCurrentField] = useState({});

  const { loading, data } = useQuery(QUERY_ALL_FIELDS);

  const { fields } = state;
  useEffect(() => {
    // already in global store
    if (fields.length) {
      setCurrentField(fields.find((field) => field._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_FIELDS,
        fields: data.fields,
      });

      data.fields.forEach((field) => {
        idbPromise("fields", "put", field);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("fields", "get").then((indexedFields) => {
        dispatch({
          type: UPDATE_FIELDS,
          fields: indexedFields,
        });
      });
    }
  }, [fields, data, loading, dispatch, id]);

  return (
    <FieldContainer>
      <FieldH1 id="about">{currentField.name}</FieldH1>
      <FieldP>Field Type  <br></br>{currentField.fieldType}</FieldP>
        <FieldButton id={id} to={"/CreateGame/" + id}>Create New Game</FieldButton>
      <Games></Games>
      <FieldButton to="/LoggedIn">← Back to the game map</FieldButton>
    </FieldContainer>
  );
}

export default Field;
