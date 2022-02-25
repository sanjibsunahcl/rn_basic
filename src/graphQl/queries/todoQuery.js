import {gql} from '@apollo/client';

export const FETCH_TODOS = gql`
  query ($isPublic: Boolean) {
    todos(order_by: {created_at: desc}, where: {is_public: {_eq: $isPublic}}) {
      id
      title
      is_completed
      created_at
      is_public
      user {
        name
      }
    }
  }
`;