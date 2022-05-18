import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components"
// import { popularProducts } from "../Data"
import Product from './Product'
import { GetProductList } from "../apollo Client/Query";
import Navbar from "../Navbar/Navbar";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Loading = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  position: inherit;
`;


function Products ({cat, filter, sort }){
  console.log(cat, filter, sort);

  const {error, data,loading} = useQuery(GetProductList);
  if(loading) return <Loading>spinner...</Loading>
  if (error) return <Loading>Somting went wrong</Loading>

  // console.log(data.TokoKomputer_Products)
      return(
        <>
      <Container>
        { data.TokoKomputer_Products.map(item =>(
            <Product item={item} key={item.id} />
        ) )}
      </Container>
      </>
    )
}

export default Products