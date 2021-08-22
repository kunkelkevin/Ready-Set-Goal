import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const GalleryContainer = styled.div`
height: 1050px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding-top: 20%;
padding-bottom: 20%;

@media screen and (max-width: 768) {
    height: 1100px;
}

@media screen and (max-width: 480) {
    height: 1300px;
}
`;

export const GalleryWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 25px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const GalleryCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 25px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const GalleryImg = styled.img`
height: 180px;
width: 180px;
margin-bottom: 10px;
border-radius: 15px;
`;

export const GalleryH1 = styled.h1`
font-size: 2.5rem;
color: #ffffff;
margin-bottom: 30px;

@media screen and (max-width: 480) {
    font-size: 2rem;
}
`;

export const GalleryH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const GalleryP = styled.p`
font-size: 1rem;
text-align: center;
`;

// TESTING BUTTON TO SIGN UP

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 30px;


  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 1000px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 100px;
  color: #010606;
  font-size: 32px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;