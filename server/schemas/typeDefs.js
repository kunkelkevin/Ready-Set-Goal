const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Field {
    _id: ID
    name: String
    fieldType: String
    lat: Float
    lng: Float
  }
  type Player {
    _id: ID
    playerName: String
    email: String
    password: String
    createdAt: String
    experience: String
  }
  type Game {
    _id: ID
    time: String
    description: String
    players: [Player]
    field: Field
    playerCount: Int
  }

  type Auth {
    token: ID
    player: Player
  }

  type Query {
    me: Player
    fields: [Field]
    field(_id: ID!): Field
    players: [Player]
    games: [Game]
    gamesByPlayerId(_id: ID!): [Game]
    gamesByFieldId(_id: ID!): [Game]
  }

  type Mutation {
    addPlayer(playerName: String!, email: String!, password: String!): Auth
    addField(name: String!, fieldType: String!, lat: Float!, lng: Float!): Field
    addGame(time: String!, description: String, field: ID!, players: [ID]): Game
    removeGame(_id: ID!): Game
    addPlayerToGame(_id: ID!, player: ID!): Game
    removePlayerFromGame(_id: ID!, player: ID!): Game
    updatePlayer(
      playerName: String
      email: String
      password: String
      experience: String
    ): Player
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
