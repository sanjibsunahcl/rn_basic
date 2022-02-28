import {gql} from '@apollo/client';

export const REMOVE_TODO = gql`
  mutation ($id: Int) {
    delete_todos(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;
