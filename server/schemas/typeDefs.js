const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
      }
`;

module.exports = typeDefs;
