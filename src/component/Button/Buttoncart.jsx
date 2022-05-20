import { useMutation } from '@apollo/client'
import React from 'react'
import { insertDataToCart } from '../apollo Client/Query'

const Buttoncart = ({item, count}) => {
    const [InsetDataCart,{loading, data, error}] = useMutation(insertDataToCart,{
        onCompleted:(datacart)=>{
            console.log(datacart)
        }
    });
        // if(loading) return <h1>spinner...</h1>
        // if(error) return <h1>ini eror</h1>

    console.log("ini item" + item.nama)

    const InsertCart = (e)=>{
        e.preventDefault();
        InsetDataCart({
            variables:{
                    object:{
                    brand: item.brand,
                    categori:item.categori, 
                    color: item.color, 
                    img: item.img, 
                    jumlah:count, 
                    nama: item.nama, 
                    price: item.price, 
                    spesifikasi: item.spesifikasi
                    }
            }
        })
    }

  return (
    <button onClick={InsertCart}>
            ADD TO CART
            {/* {item.img} */}
    </button>
  )
}

export default Buttoncart