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

const Link = styled.a`
text-decoration: none;
color: black;
`;

const Footer = () => {
  return (
   <Container>
       <Left>
           <Logo>J.Kom</Logo>
           <Decs>Ini adalah Footer dari Website Jual Komputer</Decs>
           <SocialContainer>
               <Link href='https://www.facebook.com/ranto.koplak.121519' target="_blank" >
               <SocialIcon color='3B5999 '>
                   <Facebook/>
               </SocialIcon>
               </Link>
               <Link href='https://www.instagram.com/ranto.21/' target="_blank" >
               <SocialIcon color='E4405F'>
                   <Instagram/>
               </SocialIcon>
               </Link>
               <SocialIcon color='55ACEE'> 
                   <Twitter/>
               </SocialIcon>
               <Link href='https://www.youtube.com/channel/UClR8DnSdUvspz2nC_m5kwoQ/videos'>
               <SocialIcon color='E60023'>
                   <YouTube/>
               </SocialIcon>
               </Link>
           </SocialContainer>
       </Left>
       <Center>
           <Title>List Product</Title>
           <List>
               <ListItem>
                    <Link href='https://store.acer.com/en-id' target="_blank">
                        Acer
                    </Link>
               </ListItem>
               <ListItem>
                    <Link href='https://www.asus.com/id/' target="_blank">
                        Asus
                    </Link>
                </ListItem>
               <ListItem>
                    <Link href='https://www.lenovo.com/id/in/' target="_blank">
                        Lenovo
                    </Link>
                </ListItem>
               <ListItem>
                    <Link href='https://www.dell.com/en-id' target="_blank">
                        Dell
                    </Link>
                </ListItem>
               
               <ListItem>
                    <Link href='https://appleid.apple.com/' target="_blank">
                        Apple
                    </Link>
                </ListItem>
           </List>
       </Center>
       <Right>
           <Title>Contact</Title>
           <ContactItem> <Room style={{marginRight:"10px"}} /> <Link href='https://www.google.co.id/maps/place/Rumah+ranto/@-5.6698904,105.738329,17z/data=!3m1!4b1!4m5!3m4!1s0x2e410710b076f80f:0x6e03f230c4b274e5!8m2!3d-5.6698957!4d105.7405178'>
                Jln marga setia cinta abadi No. 10 Jakarta 
                </Link>
                </ContactItem>
           <ContactItem> <Phone style={{marginRight:"10px"}}/> 082281827844 </ContactItem>
           <ContactItem> <MailOutline style={{marginRight:"10px"}}/> JualKomputer@gmail.com </ContactItem>
           {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
       </Right>
   </Container>
  )
}

export default Footer