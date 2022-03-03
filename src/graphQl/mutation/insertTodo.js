import gql from 'graphql-tag';

export const INSERT_TODO = gql`
  mutation insertTodo($text: String!, $isPublic: Boolean) {
    insert_todos(objects: [{title: $text, is_public: $isPublic}]) {
      returning {
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
  }
`;
