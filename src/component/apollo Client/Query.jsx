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

export const GetDataCart = gql`
query GetDataCarts {
  TokoKomputer_Cart {
    brand
    categori
    color
    jumlah
    id
    nama
    price
    spesifikasi
    img
  }
}
`

export const insertDataToCart = gql`
  mutation MyMutation($object: TokoKomputer_Cart_insert_input!) {
  insert_TokoKomputer_Cart_one(object: $object) {
    id
  }
}
`


export const UpdateCartEJumlahItem = gql`
mutation MyMutation($id: Int!, $jumlah: Int!) {
  update_TokoKomputer_Cart_by_pk(pk_columns: {id: $id}, _set: {jumlah: $jumlah}) {
    jumlah
  }
}
`


export const InsetMutasiPembelian = gql`
  mutation MyMutation($object: TokoKomputer_MutasiPembelian_insert_input!) {
  insert_TokoKomputer_MutasiPembelian_one(object: $object) {
    id
  }
}

`;

export const GetMutationData = gql`
  query MyQuery {
  TokoKomputer_MutasiPembelian {
    id
    nama
    email
    alamat
    noHp
  }
}
`

