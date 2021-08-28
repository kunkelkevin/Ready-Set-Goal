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
      }
      field {
        _id
        name
      }
      playerCount
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
