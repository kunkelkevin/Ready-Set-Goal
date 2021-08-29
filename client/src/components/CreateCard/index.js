import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CREATE_GAME_DATA } from "../../utils/queries";
import { UPDATE_FIELDS } from "../../utils/actions";
import { ADD_GAME } from "../../utils/mutations";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  Container,
  Form,
  FormContent,
  SignUp,
  Icon,
  FormWrap,
  FormGrid,
} from "./CreateCardElements";

const CreateCard = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentField, setCurrentField] = useState({});
  const [playerId, setPlayerId] = useState("");

  const { loading, data } = useQuery(QUERY_CREATE_GAME_DATA);

  const { fields } = state;

  const [formState, setFormState] = useState({
    time: "",
    description: "",
  });

  const [addGame] = useMutation(ADD_GAME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addGame({
      variables: {
        time: formState.time,
        description: formState.description,
        field: id,
        players: [playerId],
      },
    });
    window.location.assign("/Loggedin");
  };

  useEffect(() => {
    // already in global store
    if (fields.length) {
      setCurrentField(fields.find((field) => field._id === id));
    }
    // retrieved from server
    else if (data) {
      setPlayerId(data.me._id);
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/Loggedin">Austin League</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleFormSubmit}>
              <FormH1>Create Pick Up Match</FormH1>
              <FormH1>Field Name: {currentField.name}</FormH1>
              <FormLabel htmlFor="calendar">Date</FormLabel>
              <FormInput
                type="date"
                min="2021-01-1"
                max="2023-12-31"
                name="time"
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormInput
                type="text"
                name="description"
                onChange={handleChange}
                required
              />
              <FormButton typle="submit">Sign In</FormButton>
              <SignUp to="/Profile">Update your Profile</SignUp>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default CreateCard;
