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
} from "./SigninElements";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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
              <FormH1>Sign in to your account</FormH1>
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
              <FormButton typle="submit">Sign In</FormButton>
              <SignUp to="/signup">Need to Sign Up? Click Here</SignUp>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
