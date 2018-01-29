export const Movie = `
  type Movie {
    id: ID!
    title: String!
    budget(currency: Currency = EUR): Int
  }
`;
