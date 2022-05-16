import {  FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router';
// import Product from '../../pages/Product/Product';


const Info = styled.div`
opacity:0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color:rgba(0, 0, 0, 0.2);
z-index:3;
display: flex;
align-items:center;
justify-content:center;
transition: all 0.4s ease;
`;

const Container = styled.div`
flex:1;
margin:5px;
min-width: 250px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
padding:20px;
background-color: #f5fbfd;
position:relative;  
&:hover ${Info}{
  opacity: 1;
}
`;
const Circle= styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position:  absolute;
`;
const Image= styled.img`
height: 75%;
z-index: 2;
`;



const Icon = styled.div`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease; 
&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}`;



function Product({item}) {
  
  
  return (
    <Container>
      <Circle/>
      <Image  src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item.id}/`}>
          <SearchOutlined/>
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product