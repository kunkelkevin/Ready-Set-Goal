import React, { useState } from "react";
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
import { useMutation } from "@apollo/react-hooks";
import { CREATE_CARD } from "../../utils/mutations";

const CreateCard = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [createGame] = useMutation(CREATE_CARD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await createGame({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    return (mutationResponse);
  };

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
              <FormLabel htmlFor="fieldName">Field Name</FormLabel>
              <FormInput
                type="text"
                onChange={handleChange}
                required
                />
              <FormLabel htmlFor="calendar">Date</FormLabel>
              <FormInput
                type="date"
                min="2021-01-1"
                max="2023-12-31"
                onChange={handleChange}
                required
                />
              <FormLabel htmlFor="time">Time</FormLabel>
              <FormInput
                type="text"
                onChange={handleChange}
                required 
                />
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormInput
                type="text" 
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
