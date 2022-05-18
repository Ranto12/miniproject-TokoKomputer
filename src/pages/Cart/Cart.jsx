import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import Anouncement from "../../component/Anouncement/Anouncement";
import { GetDataCart } from "../../component/apollo Client/Query"
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Carts from "./Carts";


const Cart = () => {
  const [Cart, setCart] = useState()
    const {data, error, loading, refetch} = useQuery(GetDataCart, {
      onCompleted:(data)=>{
        setCart(data.TokoKomputer_Cart);
      }
      ,fetchPolicy: "network-only"
    });
   

    if(loading) return <p>loading ....</p>
    if (error) return <p>eror....</p>

    

  return (
    <div>
       <Navbar/>
       <Anouncement/>
        {Cart?.map((item)=>{
            return(
                <Carts item = {item} key={item.id} />
            )
        })}
        <Footer/>
    </div>
  )
}

export default Cart