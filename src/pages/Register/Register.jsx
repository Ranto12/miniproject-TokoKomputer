import { gql } from '@apollo/client';
import { useState } from 'react';
import styled from 'styled-components';
 import { useMutation } from '@apollo/client';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:  url(https://i.ibb.co/12dwKs3/ASUS-RTX.png);

    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.div`
    
`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   color: white;
   background-color: teal;
   cursor: pointer;
`;


const Register = () => {
    const [values, setValues] = useState({
        nama : '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        
    })

    const onChange =(e)=>{
        setValues({ ...values, [e.target.name]: e.target.value})
    }


    const onSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <Container>
        <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form onSubmit={onSubmit} noValidate>
            <Input name='nama' type="text" value={values.name} placeholder='name' onChange={onChange}/>
            <Input name='lastName' type="text" value={values.lastName} placeholder='lastName' onChange={onChange} />
            <Input name='userName' value={values.userName} placeholder='UserName' onChange={onChange} />
            <Input name='email' value={values.email} placeholder='email' onChange={onChange} />
            <Input name='password' type='password' value={values.password} placeholder='password' onChange={onChange} />
            <Input name='confirmPassword' type='password' value={values.confirmPassword} placeholder='confirm password' onChange={onChange} />
            
            <Agreement>
                By Create an account, I consent to the processing of my personal data in according with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type='submit' primary>CREATE ACOOUNT</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}

// const REGISTER_USER =gql`
//     mutation register(
//         $name: String!
//         $lastName: String!
//         $userName: String!
//         $email: String!
//         $password: String!
//         $confirmPassword: String!
//     ){
//         register:(
//         registerInput:{
//         name: $name
//         lastName: $lastName
//         userName: $userName
//         email: $email
//         password: $password
//         confirmPassword: $confirmPassword
//         }
//         ){
//             id email username createdAt token
//         }
//     }
// `

export default Register