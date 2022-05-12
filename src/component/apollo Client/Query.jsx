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


export const ADD_PRODUCTS = gql`
  mutation ADD_PRODUCTS($object: TokoKomputer_Products_insert_input!) {
    insert_TokoKomputer_Products_one(object: $object) {
    id
    img
    nama
    price
    spesifikasi
  }
  }
`;

