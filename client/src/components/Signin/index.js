import React from 'react'
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, Text, Icon, FormWrap, FormGrid } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Ready! Set! Goal!</Icon>
                <FormGrid>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton typle='submit'>Sign In</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign Up to Play</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton typle='submit'>Sign In</FormButton>
                        <Text>Verify Account</Text>
                    </Form>
                </FormContent>
                </FormGrid>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignIn
