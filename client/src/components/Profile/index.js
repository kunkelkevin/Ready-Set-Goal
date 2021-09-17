import React, {useState} from 'react';
import { FormButton, FormH1, FormInput, FormLabel, Container, Form, FormContent, SignUp, Icon, FormWrap} from './ProfileElements';
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PLAYER } from "../../utils/mutations";

const Profile = () => {

    const [formState, setFormState] = useState({
        playerName: "",
        experience: "",
      });
      const [updatePlayer] = useMutation(UPDATE_PLAYER);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        await updatePlayer({
          variables: {
            playerName: formState.playerName,
            experience: formState.experience,
          },
        });
        window.location.assign("/Loggedin");
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
                <Icon to="/Loggedin">Austin League</Icon>
                <FormContent>
                    <Form action="#" onSubmit={handleFormSubmit}>
                        <FormH1>Update Your Profile</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='text' name="playerName" onChange={handleChange} required />
                        <FormLabel htmlFor='experience'>Experience</FormLabel>
                        <FormInput type='text' name="experience" onChange={handleChange}  list="xpList" required />
                          <datalist id="xpList">
                            <option value="Beginner"></option>
                            <option value="Have played some"></option>
                            <option value="Competitive"></option>
                          </datalist>  
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
