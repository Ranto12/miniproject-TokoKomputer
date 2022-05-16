import { useState } from 'react';
import styled from 'styled-components';
 import { useMutation } from '@apollo/client';
import { InsetMutasiPembelian } from '../../GraphQL/Mutation/Mutation';
import { Link, useNavigate } from 'react-router-dom';

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
const Blok = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Form = styled.form`

    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 95%;
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


const MutasiPembelian = () => {
    const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      name: "nama",
      type: "text",
      placeholder: "full name",
      value: "",
    },
    {
      name: "email",
      type: "text",
      placeholder: "email",
      value: "",
    },
    {
      name: "noHp",
      type: "text",
      placeholder: "no Handpone",
      value: "",
    },
    {
      name: "alamat",
      type: "text",
      placeholder: "full address",
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

  const [addMutasiPembelian, {data, loading, error}]= useMutation(InsetMutasiPembelian, {
    onCompleted: (data) => {
      console.log(data)
    }
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    addMutasiPembelian({
      variables: {
        object :{
          nama : inputs[0].value,
          email : inputs[1].value,
          noHp: inputs[2].value,
          alamat: inputs[3].value,
        }
      }
    })
    navigate('/MutationFinish');
  }

  
//   const handleClick = () => {
//     navigate('/MutationFinish');
//  }    

   

  return (
    <Container>
      <Wrapper>
      <Title>DATA BUYING</Title>
    <Blok>
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
        {/* <Link to='/MutationFinish'>  */}
        <Button type='submit' >
            submit
        </Button>
        {/* </Link> */}
    </Form>
    </Blok>
    </Wrapper>
    </Container>
  )
}

export default MutasiPembelian