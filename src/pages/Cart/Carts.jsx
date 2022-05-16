import { useMutation } from '@apollo/client';
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Anouncement from '../../component/Anouncement/Anouncement';
import { UpdateCartEJumlahItem } from '../../component/apollo Client/Query';


const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${(props)=> props.type === "filled" && "none"};
 background-color: ${(props)=> 
    props.type === "filled" ? "black" : "transparant" };
 color: ${(props)=> props.type === "filled" && "white"};
`;

const TopTexts= styled.div`
    
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Buttom = styled.div`
display: flex;
    justify-content: space-between;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`;
const Image = styled.img`
    width: 400px;
    max-width: 400px;
    max-height: 400px;
    min-height: 300px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around  ;
`;
const ProductName = styled.span`
    
`;
const ProductId = styled.div`
    
`;
const ProductBrand = styled.span`
    
`;
const Spesification = styled.span`
    display: flex;
    justify-content: center;
    text-align: justify;
    /* padding-right: 50%; */
`;
const PriceDetail = styled.span`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    
`;
const ProductAmount = styled.div`
    font-size: 25px;
    margin: 5px;
    display: flex;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    display: flex;
`;

const Info = styled.div`
    flex: 3;
`;

const HR = styled.hr`
background-color:#000000;
border: none;
height: 2px;
opacity: 50%;
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


const Carts = ({item}) => {
    const navigate = useNavigate()
    const [count, setCount] = useState(item.jumlah);
    const [UpdateJumlah, {data, error, loading}] = useMutation(UpdateCartEJumlahItem);
    if(loading) return <p>loading ......</p>
    if(error) return <p>{error}</p>

    const handleClick = () => {
        navigate('/mutasiPembelian');
     }    
 

    const handleUpdateJumlah = (e) =>{
        e.preventDefault();
        UpdateJumlah({
            variables :{
                object:{
                    id: item.id,
                    jumlah : count
                }
            }
        })
    }


    const handleIncrement = () =>{
        setCount(count + 1);
    }
    const handleDecrement = () =>{
        setCount(count - 1);
    }
    
  
    const total = item.jumlah * item.price;
    const Shipping = 2 * total / 100;
    const Discound = 10 * Shipping / 100;
    const Total = total + Shipping + Discound;
 
    
  return (
    <Container>
       
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag({item.id})</TopText>
                    <TopText>Yout Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Buttom>
                <Info>
                <Product>
                <ProductDetail>
                    <Image src={item.img}/>
                    <Details>
                        <ProductName><b>Product:</b> {item.nama} </ProductName>
                        <ProductId><b>ID</b> {item.id}</ProductId>
                        <ProductBrand><b>BRAND</b> {item.brand} </ProductBrand>
                        <Spesification><b>SPESIFICATION: </b> {item.spesifikasi}</Spesification>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer  >
                        
                        {/* <Add  /> */}
                        
                        <ProductAmount>jumlah : {item.jumlah}</ProductAmount>
                        {/* <Remove/> */}
                    </ProductAmountContainer>
                    <ProductPrice>{item.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</ProductPrice>
                    <ProductPrice>{total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</ProductPrice>
                </PriceDetail>
                </Product>
                <HR/>
                
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>{Shipping.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>{Discound.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>{Total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}</SummaryItemPrice>
                    </SummaryItem>
                        <Button onClick={handleClick} >
                            CHECKOUT NOW
                        </Button>
                </Summary>
            </Buttom>
        </Wrapper>

    </Container>
  )
}

export default Carts