import React from 'react'
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, SignUp, Icon, FormWrap} from './ProfileElements'

const Profile = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/Loggedin">Austin League</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Update Your Profile</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <FormInput type='textarea' required />
                        <FormButton typle='submit'>Update Changes</FormButton>
                        <SignUp to="/create">Create Pick Up Match</SignUp>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default Profile
