import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
margin:3px;
position:relative;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color:white;
margin-bottom: 20px
`
const Button = styled.button`
cursor:pointer;
border:none;
padding: 10px;
background-color:white;
color:gray;
`

const CategoryItem = ({item}) => {
    /* console.log(item)
    console.log('data imag')
    console.log(item.img) */
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem 
