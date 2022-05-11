import { useEffect } from "react";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components"
// import { popularProducts } from "../Data"
import Product from './Product'
import { GetProductList } from "../apollo Client/Query";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;


function Products ({cat, filter, sort }){
  console.log(cat, filter, sort);


  const {error, data,loading} = useQuery(GetProductList);
  if(loading) return <div>spinner...</div>
    if (error) return <div>Somting went wrong</div>

    console.log({error, loading, data});
    
    if(loading) return <div>spinner...</div>
    if (error) return <div>Somting went wrong</div>
    return(
      <Container>
        {data.TokoKomputer_Products.map(item=>(
            <Product item={item} key={item.id} />
        ) )}
      </Container>
    )






  //usestate
  // const [products, setProducts] = useState([]);
  // const [filterProducts, setFilterProducts] = useState([]);


  // return (
  //   <Container>
  //     <Product item={item} key={key} />
  //       {popularProducts.map((item)=>(
  //           <Product item={item} key={item.id} />
  //       ))}
  //   </Container>
  // )
}

export default Products