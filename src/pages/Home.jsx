import React from 'react'
import Anouncement from '../component/Anouncement/Anouncement'
import Categories from '../component/Categori/Categories'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import Newsletter from '../component/Newsletter/Newsletter'
import Products from '../component/Product/Products'
import Slider from '../component/Slider/Slider'

function Home() {
  return (
    <div>
       
        <Navbar/>
         <Anouncement/>
        <Slider/>
        <Categories/>
        <Products/>
        {/* <Newsletter/> */}
        <Footer/>
    </div>
  )
}

export default Home

