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

export const InsetUsers = gql`
  mutation MyMutation($object: Users_user_insert_input!) {
  insert_Users_user_one(object: $object) {
    id
  }
}
`

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
