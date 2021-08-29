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

export const ADD_PLAYER_TO_GAME = gql`
  mutation addPlayerToGame($_id: ID!, $player: ID!) {
    addPlayerToGame(_id: $_id, player: $player) {
      playerCount
    }
  }
`;

export const REMOVE_PLAYER_FROM_GAME = gql`
  mutation removePlayerFromGame($_id: ID!, $player: ID!) {
    removePlayerFromGame(_id: $_id, player: $player) {
      playerCount
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($_id: ID!) {
    removeGame(_id: $_id) {
      playerCount
    }
  }
`;

export const ADD_GAME = gql`
  mutation addGame(
    $time: String!
    $description: String
    $field: ID!
    $players: [ID]
  ) {
    addGame(
      time: $time
      description: $description
      field: $field
      players: $players
    ) {
      time
      description
      field {
        _id
      }
    }
  }
`;
