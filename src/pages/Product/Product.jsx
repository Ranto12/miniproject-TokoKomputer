import styled from 'styled-components';
import Navbar from '../../component/Navbar/Navbar'
import Announcement from '../../component/Anouncement/Anouncement'
import Newslleter from '../../component/Newsletter/Newsletter';
import Footer from '../../component/Footer/Footer'
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';
import { GetProductById, GetProductList } from '../../component/apollo Client/Query';
import {  useQuery } from '@apollo/client';
import {useLocation, useParams} from 'react-router';


const Container =styled.div`
    
`;
const Wrapper =styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer =styled.div`
    flex: 1;
`;
const Image =styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;
const InfoContainer =styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title =styled.h1`
    font-weight: 200;
`;
const Desc =styled.p`
    margin: 20px 0px;
`;
const Price =styled.span`
font-weight: 100;
    font-size: 35px;
`;

//bagian add cart
const AddContainer = styled.div`
    
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    
`;
const Button = styled.button`
    padding: 15px;
    margin-left:30px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
`;

const Klik = styled.div`
cursor: pointer;
`;

const Increment = styled.div`
cursor: pointer;
`;

const Total = styled.span`
    
`;


const Product = () => {
    const { id } = useParams();

    const [count, setCount] = useState(1);
    
    const {data, error, loading} = useQuery(GetProductById,{variables:{
        _eq : id
    }
    // onCompleted: (data)=>{
    //     console.log("complate" + data);
    // }
   });
    if(loading) return <h1>spinner...</h1>
    if(error) return <h1>ini eror</h1>


    console.log(data.TokoKomputer_Products)
    const img = data.TokoKomputer_Products[0].img;
    const nama =  data.TokoKomputer_Products[0].nama;
    const spesifikasi =  data.TokoKomputer_Products[0].spesifikasi;
    const price =  data.TokoKomputer_Products[0].price;
    // console.log(nama)

    const handleCounter = () =>{
        setCount(count + 1);
    }
    const handleCounterDecrement = () =>{
        setCount(count - 1)
    }

    const Total = price * count;

  return (
      
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer >
                <Image src= {img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{nama}</Title>
                <Desc>
                    {spesifikasi}
                </Desc>
                <Price>
                    {price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                </Price>
                <AddContainer>
                <AmountContainer>
                <Increment>
                    <Klik onClick={handleCounterDecrement}>
                    <Remove/>
                    </Klik>
                    </Increment>
                    <Amount>{count}</Amount>
                    <Increment>
                    <Klik onClick={handleCounter}>
                    <Add />
                    </Klik>
                    </Increment>
                    {/* <Button onSubmit={onSubmitSearch}>cari</Button> */}
                    <Button onSubmit={()=>{}}>Tambahkan Keranjang</Button>
                </AmountContainer>
                <Title>
                    {Total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                </Title>
            </AddContainer>
            
            </InfoContainer>
        </Wrapper>
        {/* <Newslleter/> */}
        <Footer/>
    </Container>
  )
}

export default Product
