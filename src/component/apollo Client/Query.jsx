 import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

export const GetProductList = gql`
query MyQuery {
    TokoKomputer_Products {
      brand
      categori
      id
      img
      nama
      price
      spesifikasi
    }
  }
`;

// export const ADD_PRODUCTS = gql`
//   mutation MyMutation($object: TokoKomputer_Products_insert_input!) {
//   insert_TokoKomputer_Products_one(object: $object) {
//     id
//   }
// }
// `;

export const addUsers = gql`
  mutation addUsers($object: Users_user_insert_input!) {
  insert_Users_user_one(object: $object) {
    id
  }
}
`

export const ADD_USERS = gql`
  mutation AddUsers(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ){
    addUsers(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ){
      id
      firstName
      lastName
      email
      password
    }
  }
`;

// export const GetUsersList = gql`
//   query MyQuery {
//   Users_user {
//     email
//     firstName
//     id
//     lastNama
//     password
//   }
// `;
