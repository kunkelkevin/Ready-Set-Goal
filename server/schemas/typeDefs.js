const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Field {
    _id: ID
    fieldType: String
    lat: Float
    lng: Float
  }

  type Game {
    _id: ID
    time: String
    players: [Player]
    field: Field
  }

  type Player {
    _id: ID
    playerName: String
    email: String
    password: String
    createdAt: String
    experience: String
    games: [Game]
  }

  type Auth {
    token: ID
    user: Player
  }

  type Query {
    me: Player
    fields: [Field]
    field(_id: ID!): Field
    player: Player
    games: [Game]
  }

  type Mutation {
    addPlayer(playerName: String!, email: String!, password: String!): Auth
    # addGame(time: String!, field: Field!): Game
    removeGame(_id: ID!): Game
    updateGame(_id: ID!, time: String): Game
    updatePlayer(
      firstName: String
      lastName: String
      email: String
      password: String
    ): Player
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
