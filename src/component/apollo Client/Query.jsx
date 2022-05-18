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


// export const InsetMutasiPembelian = gql`
//   mutation MyMutation( 
//     $jumlah: Int! 
//     $brand:String! 
//     $categori:String! 
//     $color:String! 
//     $img:String! 
//     $nama:String! 
//     $price:Int! 
//     $spesifikasi:String!) {
//   insert_TokoKomputer_MutasiPembelian_one(
//     jumlah: $jumlah 
//     brand:$brand
//     categori:$categori
//     color:$color
//     img:$img 
//     nama:$nama
//     price:$price
//     spesifikasi:$spesifikasi
//   ) {
//     id
//   }
// }
// `;

export const InsetMutasiPembelian = gql`
mutation MyMutation($object: TokoKomputer_Cart_insert_input!) {
  insert_TokoKomputer_Cart_one(object: $object) {
    id
  }
}

`

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

export const GetDataJumlahID = gql`
  query MyQuery {
  TokoKomputer_Cart {
    id
  }
}
`

export const IncrementJumlah = gql`
mutation MyMutation($id: Int!) {
  update_TokoKomputer_Cart_by_pk(pk_columns: {id: $id}, _inc: {jumlah: 1}) {
    id
    jumlah
  }
}
`
export const DecrementJumlah = gql`
mutation MyMutation($id: Int!) {
  update_TokoKomputer_Cart_by_pk(pk_columns: {id: $id}, _inc: {jumlah: -1}) {
    id
    jumlah
  }
}
`

export const DeleteDataCart = gql`
mutation MyMutation($id: Int!) {
  delete_TokoKomputer_Cart_by_pk(id: $id) {
    id
  }
}
`;