import { useQuery } from "@apollo/client"
import Anouncement from "../../component/Anouncement/Anouncement";
import { GetDataCart } from "../../component/apollo Client/Query"
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Carts from "./Carts";


const Cart = () => {
    const {data, error, loading} = useQuery(GetDataCart);
    if(loading) return <p>loading ....</p>
    if (error) return <p>eror....</p>
    console.log(data.TokoKomputer_Cart)

  return (
    <div>
       <Navbar/>
       <Anouncement/>
       
       
        {data.TokoKomputer_Cart.map((item)=>{
            return(
                <Carts item = {item} key={item.id} />
            )
        })}
        

        <Footer/>
    </div>
  )
}

export default Cart