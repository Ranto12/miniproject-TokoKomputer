import { Check, HourglassEmpty } from '@material-ui/icons'
import React, { useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
background-color:gray;
color: white;
justify-content: center;
text-align: center;
align-items: center;
`

const Text = styled.div`
    padding: 50px;
`
const Table = styled.table`
    width: 100%;
    margin: 0;
`
const TR = styled.tr`
    
`
const TD = styled.td`
    
`
const TH = styled.th`
    border: 1px solid lightgrey;
    padding: 0px;
    margin: 0;
    background-color: gray;
`

const MutationPage = ({item, loading}) => {
console.log(item.id)
  return (
    <div>
        <Container>
        <Text>
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
        <TR>
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
        </TR>
        </Table>
       
        <p>{loading} </p>
        </Text>
        </Container>
    </div>
  )
}

export default MutationPage