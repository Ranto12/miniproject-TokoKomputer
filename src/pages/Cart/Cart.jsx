import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { Link , useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Anouncement from "../../component/Anouncement/Anouncement";
import { GetDataCart } from "../../component/apollo Client/Query"
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Carts from "./Carts";
import Totalpayment from "./Totalpayment";


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Buttom = styled.div`
display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Summary = styled.span`
    flex: 1;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
   font-weight: 200;
`;
const SummaryItem = styled.div`
     margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span`
    
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    font-weight: 600;
    color: white;
    cursor: pointer;
    text-decoration: none ;
`;


const Cart = () => {
  const [payment, setPayment] = useState(0);
  const navigate = useNavigate();
  const [Cart, setCart] = useState()
    const {data, error, loading, refetch} = useQuery(GetDataCart, {
      onCompleted:(data)=>{
        setCart(data.TokoKomputer_Cart);
      }
      ,fetchPolicy: "network-only"
    });
   

    if(loading) return <p>loading ....</p>
    if (error) return <p>eror....</p>

    const total = Cart.jumlah * Cart.price;
    const Shipping = 2 * total / 100;
    const Discound = 10 * Shipping / 100;
    const Total = total + Shipping + Discound;
    const Perhitungan = 0;
    
  
  const PAY =  Cart.map((pay)=>{
      const perhitungan1 = Perhitungan + pay.jumlah * pay.price;
      console.log("total" +perhitungan1)
      var max = Math.max(perhitungan1);
      <Totalpayment pay={pay}  key={pay.id} /> 
      console.log("ini adalah peyment" + perhitungan1)
    });
    console.log(PAY + "ini adalah pay")
    

    const handleClick = () => {
      navigate('/mutasiPembelian');
   }    
    
    

  return (
    <div>
       <Navbar/>
       <Anouncement />
       <Container>
         <Wrapper>
       <Title>YOUR BAG</Title>
        <Buttom>
          <Info>
        {Cart?.map((item)=>{
            return(
                <Carts item = {item} key={item.id} />
            )
        })}
        </Info>
        <Summary>   
    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> <Totalpayment/> </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>{Shipping.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem >
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>{Discound.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice> <Totalpayment/></SummaryItemPrice>
                    </SummaryItem>
                        <Button onClick={handleClick}>
                            CHECKOUT NOW
                        </Button>
                </Summary>
                </Buttom>
                </Wrapper>
                </Container>
        <Footer/>
    </div>
  )
}

export default Cart