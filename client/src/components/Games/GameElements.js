import styled from "styled-components";

export const GameContainer = styled.div`
display: flex;
flex-direction: column;
background: #010606;
`;

export const Gamesh3 = styled.h3`
color: #fff;
text-align: center;
`;

export const GameWrapper = styled.div`
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

export const GameCardContainer = styled.div`
background: #01bf71;
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

