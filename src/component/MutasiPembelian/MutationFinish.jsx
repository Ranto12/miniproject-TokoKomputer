import { useQuery } from '@apollo/client'
import React from 'react'
import { Eclipse } from 'react-loading-io/dist/Eclipse';
import MutationPage from '../../pages/MutasiPage/MutationPage';
import { GetMutationData } from '../apollo Client/Query'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';


const Container =styled.div`
    background-color: #6e6c6c;
    width: 100%;
    right: 100%;
    display: inline-block;
`
const Table = styled.table`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`
const TH = styled.th`
    border: 1px solid lightgrey;
    padding: 0px;
    margin: 0;
    background-color: 53ee94;
    text-align: start;
`
const TR = styled.tr`
    margin: 10px;
    border: 1px white;
`
const TD = styled.td`
    color: white;
`
const Image= styled.img`
width: 100px;
margin-right: 0;

`;
const Footers = styled.div`
width: 100%;
position: absolute;
margin-bottom: 0px;
margin-top: 1000px ;
`
const HR = styled.hr`
background-color:#000000;
border: none;
height: 2px;
opacity: 50%;
`;



const MutationFinish = () => {
    const {data, error, loading} = useQuery(GetMutationData);
    if(loading) return <Eclipse/>
    if(error) return <p>Data Anda error...</p>

  return (
      <>
        <Navbar/>
    <Container>
        
           
        <Table>
             {/* <MutationPage item ={item} key={item.id} loading={loading} /> */}
            <TR>
            <TH>Nomor</TH>
            <TH>nama</TH>
            <TH>alamat</TH>
            <TH>email</TH>
            <TH>noHp</TH>
            <TH>BARCODE</TH>
            </TR>
            {data.TokoKomputer_MutasiPembelian.map(item=>(
            <TR>
            <TD>
                <p>{item.id}</p>
            </TD>
            <TD>
                <p>{item.nama}</p>
            </TD>
            <TD>
                <p>{item.noHp}</p>
            </TD>
            <TD>
            <p>{item.email}</p>
            </TD>
            <TD>
            <p>{item.alamat}</p>
            </TD>
            <TD>
                <Image  src="https://i.ibb.co/5rzPLd4/fed2ccff-d2f3-4e79-9ed7-2e3f073bd5d2.jpg" />
                
            </TD>
        </TR>
       ))}
        </Table>
        
        <Footers>
             <Footer/>
        </Footers>
    </Container>
    </>
  )
}

export default MutationFinish