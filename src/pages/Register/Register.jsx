import styled from 'styled-components';

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
  return (
    <Container>
        <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
            <Input placeholder='name' />
            <Input placeholder='last Name' />
            <Input placeholder='UserName' />
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Input placeholder='confirm password' />
          
            <Agreement>
                By Create an account, I consent to the processing of my personal data in according with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE ACOOUNT</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Register