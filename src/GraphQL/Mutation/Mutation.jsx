import { gql } from "@apollo/client";

export const ADD_USERS = gql`
    mutation MyMutation($object: Users_user_insert_input!) {
    insert_Users_user_one(object: $object) {
        id
  }
}
`