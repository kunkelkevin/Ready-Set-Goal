import React, { useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  Container,
  Form,
  FormContent,
  Text,
  Icon,
  FormWrap,
} from "./SignupElements";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { ADD_PLAYER } from "../../utils/mutations";

const SignUp = () => {
  const [formState, setFormState] = useState({
    playerName: "",
    email: "",
    password: "",
  });
  const [addPlayer] = useMutation(ADD_PLAYER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addPlayer({
      variables: {
        email: formState.email,
        password: formState.password,
        playerName: formState.playerName,
      },
    });
    const token = mutationResponse.data.addPlayer.token;
    Auth.login(token);
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
          <Icon to="/">Ready! Set! Goal!</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleFormSubmit}>
              <FormH1>Sign Up and Pick Up</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="name"
                name="playerName"
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <FormButton typle="submit">Sign Up</FormButton>
              {/* <Text>Forgot Password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
