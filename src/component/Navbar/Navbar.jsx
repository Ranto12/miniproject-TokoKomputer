import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../respondsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; 

    height: 60px;
  ${mobile({backgroundColor: "red"})}
`;
const Wrapper = styled.div`
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;
const Letf = styled.div`
align-items: center;
display: flex;
flex: 1;
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
align-items: center;
display: flex;
margin-left: 25px
`;
const Input = styled.input`
border:none;
`
const Language = styled.span`
cursor: pointer;
font-size: 14;
display:flex
`;
const Center = styled.div`
flex:1;
text-align:center;
`;

const Logo = styled.h1`
    font-weight:bold;
`
const Right = styled.div`
flex:1;
text-align:center;
display: flex;
justify-content: flex-end;

`;

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const LINK = styled(Link)`
    text-decoration: none;
    color: black;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Letf>
                <Language>
                    IN
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Language>
            </Letf>
            <Center>
                <Logo>
                   <LINK to='/home'>
                    J.Kom
                    </LINK>
                </Logo>
            </Center>
            <Right>
            
                <MenuItems>
                <LINK to='/products'>
                    PRODUCT
                </LINK>
                </MenuItems>
               {/*   <MenuItems>
                <LINK to='/login'>
                    SIGN IN
                </LINK>
                </MenuItems>
                <MenuItems>
                <LINK to='/register'>
                REGISTER
                </LINK>
                </MenuItems>*/}
                <MenuItems>
                <Badge badgeContent={10} color="primary">
                <LINK to='/cart'>
                <ShoppingCartOutlined />
                </LINK>    
                </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar