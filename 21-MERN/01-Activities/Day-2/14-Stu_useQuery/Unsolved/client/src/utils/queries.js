import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  # TODO: Add a query called 'getThoughts' that returns a thought's _id, thoughtText, thoughtAuthor, and createdAt fields
  query Query {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
