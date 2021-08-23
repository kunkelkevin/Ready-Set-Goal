import React from 'react'
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, SignUp, Icon, FormWrap, FormGrid } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Ready! Set! Goal!</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton typle='submit'>Sign In</FormButton>
                        <SignUp to="/signup">Need to Sign Up? Click Here</SignUp>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignIn
