import {  Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color: teal;
margin-bottom: 0;
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px; 
`;

const Logo = styled.h1``;
const Decs = styled.p`
margin: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
cursor: pointer;
`;

const Center = styled.div`
flex: 1;
   padding: 20px;
`;

const Title= styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`;

const Right = styled.div`
flex:1;
padding: 20px;
`;

const ContactItem = styled.div`
cursor: pointer;
margin-bottom: 10px;
`;

const Payment = styled.img`
margin-top: 10px;
cursor: pointer;
width: 50%;
`;

const Footer = () => {
  return (
   <Container>
       <Left>
           <Logo>J.Kom</Logo>
           <Decs>Ini adalah Footer dari Website Jual Komputer</Decs>
           <SocialContainer>
               <SocialIcon color='3B5999 '>
                   <Facebook/>
               </SocialIcon>
               <SocialIcon color='E4405F'>
                   <Instagram/>
               </SocialIcon>
               <SocialIcon color='55ACEE'> 
                   <Twitter/>
               </SocialIcon>
               <SocialIcon color='E60023'>
                   <YouTube/>
               </SocialIcon>
           </SocialContainer>
       </Left>
       <Center>
           <Title>List Product</Title>
           <List>
               <ListItem>Acer</ListItem>
               <ListItem>Assus</ListItem>
               <ListItem>Lenovo</ListItem>
               <ListItem>Dell</ListItem>
               <ListItem>Apple</ListItem>
           </List>
       </Center>
       <Right>
           <Title>Contact</Title>
           <ContactItem> <Room style={{marginRight:"10px"}} /> Jln marga setia cinta abadi No. 10 Jakarta </ContactItem>
           <ContactItem> <Phone style={{marginRight:"10px"}}/> 082281827844 </ContactItem>
           <ContactItem> <MailOutline style={{marginRight:"10px"}}/> JualKomputer@gmail.com </ContactItem>
           <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
       </Right>
   </Container>
  )
}

export default Footer