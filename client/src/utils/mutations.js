import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      player {
        _id
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer(
    $playerName: String!
    $email: String!
    $password: String!
  ) {
    addPlayer(playerName: $playerName, email: $email, password: $password) {
      token
      player {
        _id
      }
    }
  }
`;

export const UPDATE_PLAYER = gql`
  mutation updatePlayer(
    $playerName: String!
    $email: String!
    $password: String!
    $experience: String!
  ) {
    updatePlayer(playerName: $playerName, email: $email, password: $password, experience: $experience) {
    }
  }
`;

export const CREATE_CARD = gql`
  mutation createCard(
    $fieldName: String!
    $calendar: String!
    $time: String!
    $description: String!
  ) {
    createCard(fieldName: $fieldName, calendar: $calendar, time: $time, description: $description) {
    }
  }
`;