import { gql } from "@apollo/client";
export const ALL_USER_INFO = gql`
  query {
    users {
      id
      name
      rocket
      timestamp
      twitter
      
    }
  }
`;

export const USER_INFO = gql`
  query GET_USER_INFO($id: uuid!) {
    users_by_pk(id: $id) {
      name
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($name: String) {
    insert_users(objects: { name: $name }) {
      returning {
        name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($name: String) {
    update_users(
      where: { name: { _eq: $name } }
      _set: { name: "updatename" }
    ) {
      returning {
        name
      }
    }
  }
`;
export const COUNT_USER = gql`
  query {
    users_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;