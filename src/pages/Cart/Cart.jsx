import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Anouncement from '../../component/Anouncement/Anouncement';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

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
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Yout Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Buttom>
                <Info>
                <Product>
                <ProductDetail>
                    <Image src='https://i.ibb.co/pQq0WMR/kisspng-laptop-intel-core-i7-hard-drives-terabyte-acer-asp-laptops-5ab73234c6e301-253649541521955380.png'/>
                    <Details>
                        <ProductName><b>Product:</b> ACER NITRO 5 </ProductName>
                        <ProductId><b>ID</b> 1237912873</ProductId>
                        <ProductBrand><b>BRAND</b>ACER </ProductBrand>
                        <Spesification><b>SPESIFICATION: </b> core  i 7.</Spesification>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>3</ProductAmount>
                        <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>Rp. 18.000.000</ProductPrice>
                </PriceDetail>
                </Product>
                <HR/>
                <Product>
                <ProductDetail>
                    <Image src='https://i.ibb.co/pQq0WMR/kisspng-laptop-intel-core-i7-hard-drives-terabyte-acer-asp-laptops-5ab73234c6e301-253649541521955380.png'/>
                    <Details>
                        <ProductName><b>Product:</b> ACER NITRO 5 </ProductName>
                        <ProductId><b>ID</b> 1237912873</ProductId>
                        <ProductBrand><b>BRAND</b>ACER </ProductBrand>
                        <Spesification><b>SPESIFICATION: </b> core  i 7.</Spesification>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>3</ProductAmount>
                        <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>Rp. 18.000.000</ProductPrice>
                </PriceDetail>
                </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>RP. 80.000.000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>RP. 200.000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>RP. -50.000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>RP 80.000.000</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Buttom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart