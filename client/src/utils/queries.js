import gql from "graphql-tag";

export const QUERY_ALL_FIELDS = gql`
  {
    fields {
      _id
      name
      fieldType
      lat
      lng
    }
  }
`;

export const QUERY_CREATE_GAME_DATA = gql`
  {
    fields {
      _id
      name
      fieldType
      lat
      lng
    }
    me {
      _id
    }
  }
`;

export const QUERY_GAMES_BY_FIELD_ID = gql`
  query gamesByFieldId($_id: _id) {
    gamesByFieldId(_id: $_id) {
      time
      description
      players {
        _id
      }
      field {
        _id
      }
      playerCount
    }
  }
`;

export const QUERY_SINGLE_FIELD = gql`
  query field($ID: ID!) {
    field(_id: $id) {
      _id
      name
      fieldType
      lat
      lng
    }
  }
`;

export const QUERY_GAMES = gql`
  {
    games {
      _id
      time
      description
      players {
        _id
        playerName
        experience
      }
      field {
        _id
        name
      }
      playerCount
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      playerName
      email
      experience
    }
  }
`;
