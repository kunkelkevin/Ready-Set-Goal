import React from 'react'
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, SignUp, Icon, FormWrap, FormGrid } from './CreateCardElements'

const CreateCard = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/Loggedin">Austin League</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Create Pick Up Match</FormH1>
                        <FormLabel htmlFor='fieldName'>Field Name</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='calandar'>Date</FormLabel>
                        <FormInput type='date' min="2021-01-1" max="2023-12-31" required />
                        <FormLabel htmlFor='time'>Time</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <FormInput type='text' required />
                        <FormButton typle='submit'>Sign In</FormButton>
                        <SignUp to="/Profile">Update your Profile</SignUp>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default CreateCard
