 import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import {id_data_product} from '../../pages/Product/Product'

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

export const GETDATA = gql`
query MyQuery {
  TokoKomputer_Products {
    id
    nama
    brand
    categori
    color
    img
    price
    spesifikasi
  }
}
`;




export const GetProductById = gql`
query MyQuery($_eq: Int!) {
  TokoKomputer_Products(where: {id: {_eq: $_eq }}) {
    id
    img
    nama
    color
    categori
    brand
    spesifikasi
    price
  }
}
`



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

export const UpdateData = gql`
  mutation MyMutation($id1: Int!, brand:  String!) {
  update_TokoKomputer_Products_by_pk(pk_columns: {id: $id1}, _set: {brand: $brand, categori: $categori}) {
    id
  }
}

`