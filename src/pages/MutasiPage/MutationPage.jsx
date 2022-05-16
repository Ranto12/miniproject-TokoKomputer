import React from 'react'

const MutationPage = ({item}) => {
  return (
    <div>
        <p>{item.nama}</p>
        <p>{item.noHp}</p>
        <p>{item.email}</p>
        <p>{item.alamat}</p>
        <p>Succes</p>
    </div>
  )
}

export default MutationPage