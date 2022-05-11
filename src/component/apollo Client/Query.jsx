 import { gql, useQuery } from "@apollo/client";
 import Products from "../Product/Products";

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

function ProductList(){
    const {error, data,loading} = useQuery(GetProductList);

    console.log({error, loading, data});
    
    if(loading) return <div>spinner...</div>
    if (error) return <div>Somting went wrong</div>
    return(
      <div>
        {data.TokoKomputer_Products.map(item=> {
          return <div>
            <img src={item.img} />
            <h1>{item.nama}</h1>
          </div>
        })}
      </div>
    )
}
export default ProductList


