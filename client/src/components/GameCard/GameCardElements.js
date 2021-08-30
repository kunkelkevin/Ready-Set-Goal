import styled from "styled-components";

export const GameP = styled.p`
font-weight: bold;
font-size: 12px;
`;

export const GameButton = styled.button`
border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 12px;
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

