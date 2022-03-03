import gql from 'graphql-tag';

export const SUBSCRIBE_TO_ONLINE_USERS = gql`
  subscription onlineUsers{
    online_users(order_by: {user: {name: asc}}) {
      user {
        name
        id
      }
      id
    }
  }
`;
