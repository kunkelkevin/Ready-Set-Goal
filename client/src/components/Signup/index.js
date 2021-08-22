import React from 'react'
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, Text, Icon, FormWrap, } from './SignupElements'

const SignUp = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Ready! Set! Goal!</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign Up and Pick Up</FormH1>
                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton typle='submit'>Sign Up</FormButton>
                        {/* <Text>Forgot Password</Text> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignUp