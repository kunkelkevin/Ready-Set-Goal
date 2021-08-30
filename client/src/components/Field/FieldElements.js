import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FieldButton = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 44%;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const FieldContainer = styled.div`
background-color: #000;
height: 748px;
width: 100%;
padding: 0;
margin-top: 0;
padding-top: 0;
`

export const FieldH1 =  styled.h1`
background-color: #000;
color: #fff;
text-align: center;
font-size: 32px;
`;

export const FieldP =  styled.p`
background-color: #000;
color: #fff;
text-align: center;
font-size: 24px;
`;



