import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.div`

font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
font-size: 23px;
width: 50%;
height: 10%;
background-color: white;
display:flex;
justify-content: space-between;
border: 1px solid lightgray;
`;
const Input = styled.input`
border : none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
border: none;
background-color:teal;
color: white;
cursor: pointer;

`
const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>update geh makanya ya , biar cepet kaya</Description>
        <InputContainer>
            <Input placeholder='masukan email: '/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter