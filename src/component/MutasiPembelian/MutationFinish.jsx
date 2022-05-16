import { useQuery } from '@apollo/client'
import React from 'react'
import MutationPage from '../../pages/MutasiPage/MutationPage';
import { GetMutationData } from '../apollo Client/Query'

const MutationFinish = () => {
    const {data, error, loading} = useQuery(GetMutationData);
    if(loading) return <p>Data Anda...</p>
    if(error) return <p>Data Anda error...</p>
  return (
    <div>
       {data.TokoKomputer_MutasiPembelian.map(item=>(
           <MutationPage item ={item} key={item.id} />
       ))}
    </div>
  )
}

export default MutationFinish