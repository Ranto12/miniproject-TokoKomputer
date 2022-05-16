import { gql } from "@apollo/client";

export const ADD_USERS = gql`
    mutation MyMutation($object: Users_user_insert_input!) {
    insert_Users_user_one(object: $object) {
        id
  }
}
`
export const InsetMutasiPembelian = gql`
  mutation MyMutation($object: TokoKomputer_MutasiPembelian_insert_input!) {
  insert_TokoKomputer_MutasiPembelian_one(object: $object) {
    id
  }
}
`