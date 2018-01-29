import { makeExecutableSchema } from 'graphql-tools';

export const typeDefs = `
  interface Media {
    id: ID!
    title: String!
    media_type: String!
  }

  type Movie implements Media {
    id: ID!
    title: String!
    media_type: String!
    duration: Int!
    box_office: Int!
  }

  type TVShow implements Media {
    id: ID!
    title: String!
    media_type: String!
    running: Boolean
  }

  type Person {
    name: String!
    known_for: [Media]
  }

  type Query {
    movies: [Movie]
    movie(id: ID, imdb_id: String): Movie
  }

  type Mutation {
    rateMovie (
      title: String!
      RatingInput: Int!
    ): Movie
  }
`;

const schema = makeExecutableSchema({
  typeDefs
});

export default schema;
