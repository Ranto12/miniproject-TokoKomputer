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
    width: 25%;
    padding: 20px;
   
    background-color: white;
`;
const Title = styled.div`
    
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   color: white;
   background-color: teal;
   cursor: pointer;
`;
 const Link = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration: underline;
     cursor: pointer;
 `;

const Login = () => {
  return (
    <Container>
    <Wrapper>
    <Title>SIGN IN</Title>
    <Form>
        <Input placeholder='UserName' />
        <Input placeholder='password' />
        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
    </Form>
    </Wrapper>
</Container>
  )
}

export default Login