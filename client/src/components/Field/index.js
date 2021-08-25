import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_FIELDS } from "../../utils/queries";
import { UPDATE_FIELDS } from "../../utils/actions";

function Field() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  console.log("here");
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
    <section className="my-5">
      <h1 id="about">{currentField.name}</h1>
      <p>{currentField.fieldType}</p>
      <Link to="/LoggedIn">← Back to the game map</Link>
    </section>
  );
}

export default Field;
