import { useState, useEffect } from "react";
import {GetProductList} from '../Query';



const GetData = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts]= useState([]);
    const [search, setSearch] = useState("");

    //Query
    const  {data: dataAllProducts, loading: loadingAllProducts } = useQuery(GetProductList);

    
  return (
    <>
    <span>ini</span>
    </>
  )
}

export default GetData
