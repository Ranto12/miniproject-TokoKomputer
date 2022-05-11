import styled from 'styled-components';
import Navbar from '../../component/Navbar/Navbar'
import Announcement from '../../component/Anouncement/Anouncement'
import Newslleter from '../../component/Newsletter/Newsletter';
import Footer from '../../component/Footer/Footer'
import { Add, Remove } from '@material-ui/icons';


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


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/YWQB1L6/kisspng-laptop-acer-aspire-intel-core-i5.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Laptop acer Nitro</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae repellendus accusamus deserunt laboriosam eum pariatur possimus nostrum nihil inventore dolor, repudiandae quam. Dolorum rerum fugit obcaecati architecto reiciendis perspiciatis. Quisquam cum quidem numquam, quis nemo similique? Facere explicabo deleniti, sint aut adipisci nostrum? Explicabo, reiciendis maxime? Eveniet, facere fugit.
                </Desc>
                <Price>
                    Rp.16.400.000
                </Price>
                <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                    <Button>Tambahkan Keranjang</Button>
                </AmountContainer>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        {/* <Newslleter/> */}
        <Footer/>
    </Container>
  )
}

export default Product
