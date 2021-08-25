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
} from "./ProfileElements";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PLAYER } from "../../utils/mutations";

const Profile = () => {
  const [formState, setFormState] = useState({
    playerName: "",
    email: "",
    password: "",
  });
  const [updatePlayer] = useMutation(UPDATE_PLAYER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await updatePlayer({
      variables: {
        email: formState.email,
        password: formState.password,
        playerName: formState.playerName,
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
              <FormH1>Update Your Profile</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput
                type="text"
                name="playerName"
                onChange={handleChange}
                required
                />
              <FormLabel htmlFor="description">Experience</FormLabel>
              <FormInput 
                type="textarea" 
                name="experience"
                onChange={handleChange}
                required
                />
              <FormButton typle="submit">Update Changes</FormButton>
              <SignUp to="/create">Create Pick Up Match</SignUp>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Profile;
