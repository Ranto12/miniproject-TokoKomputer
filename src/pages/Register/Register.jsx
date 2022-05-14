import { useState } from 'react';
import styled from 'styled-components';
 import { useMutation } from '@apollo/client';
import { ADD_USERS } from '../../GraphQL/Mutation/Mutation';
import FormPembeli from '../../component/FormPembelian/FormPembeli/FormPembeli';

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
const Form = styled.form`
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
  const [inputs, setInputs] = useState([
    {
      name: "firtsName",
      type: "text",
      placeholder: "firtsName",
      value: "",
    },
    {
      name: "lastNama",
      type: "text",
      placeholder: "lastNama",
      value: "",
    },
    {
      name: "email",
      type: "text",
      placeholder: "email",
      value: "",
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
      value: "",
    }
  ]);

  const handleInput = (value, index) => {
    const newInputs = inputs.map((input, inputIdx) => {
      if (inputIdx === index) {
        return { ...input, value: value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const [addUsers, {data, loading, error}]= useMutation(ADD_USERS, {
    onCompleted: (data) => {
      console.log(data)
    }
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    addUsers({
      variables: {
        object :{
          firstName : inputs[0].value,
          lastNama : inputs[1].value,
          email: inputs[2].value,
          password: inputs[3].value,
        }
      }
    })
  }
   

  return (
    <Container>
      <Wrapper>
      <Title>DATA BUYING</Title>

    <Form onSubmit={handleSubmit}>
      {inputs &&
        inputs.map((input, inputIdx) => (
          <div key={inputIdx} >
            <label >{input.label}</label>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={input.value}
              onChange={(e) => handleInput(e.target.value, inputIdx)}
              required
            />
            
          </div>
        ))}
        <Agreement>
          By Create an account, I consent to the processing of my personal data in according with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type='submit'>submit</Button>
    </Form>
    </Wrapper>
    </Container>
  )
}
export default Register