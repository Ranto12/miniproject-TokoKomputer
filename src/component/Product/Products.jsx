import { useEffect, useState } from "react";
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

  // useState
  // const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState([]);
  // console.log(data.TokoKomputer_Products)
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