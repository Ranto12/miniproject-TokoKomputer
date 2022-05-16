import { useQuery } from '@apollo/client'
import React from 'react'
import { Eclipse } from 'react-loading-io/dist/Eclipse';
import MutationPage from '../../pages/MutasiPage/MutationPage';
import { GetMutationData } from '../apollo Client/Query'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';


const Table = styled.table`
    width: 100%;
`
const TH = styled.th`
    border: 1px solid lightgrey;
    padding: 0px;
    margin: 0;
    background-color: gray;
`
const TR = styled.tr`
    
`
const TD = styled.td`
    
`

const MutationFinish = () => {
    const {data, error, loading} = useQuery(GetMutationData);
    if(loading) return <Eclipse/>
    if(error) return <p>Data Anda error...</p>

  return (
    <div>
        <Navbar/>
        <Table>
            <TR>
            <TH>nama</TH>
            <TH>alamat</TH>
            <TH>email</TH>
            <TH>noHp</TH>
            <TH>nama barang</TH>
            <TH>sepesifikasi</TH>
            <TH>total</TH>
            </TR>
        </Table>
       {data.TokoKomputer_MutasiPembelian.map(item=>(
           <MutationPage item ={item} key={item.id} loading={loading} />
       ))}
       <Footer/>
    </div>
  )
}

export default MutationFinish