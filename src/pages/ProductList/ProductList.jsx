import styled from 'styled-components';
import Navbar from '../../component/Navbar/Navbar'
import Announcement from '../../component/Anouncement/Anouncement'
import Products from '../../component/Product/Products';
import Newslleter from '../../component/Newsletter/Newsletter';
import Footer from '../../component/Footer/Footer'
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div`

`;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option`
    
`;


const ProductList = () => {
    //uselocation hook
    const location = useLocation();
    // console.log(location.pathname.split("/")[2])
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState({})

 
    const handleFilter = (e)=>{
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.value]: value
        })
    }
    
    const HandleSort =(e)=>{
        const value = e.target.value;
        setSort({
            // ...sort,
            [e.target.value]: value
        })
    }
    // console.log(sort)
    // console.log(filter)
   
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Komputer</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product: </FilterText>
                <Select name='brand' onChange={handleFilter}>
                    <Option disabled selected>Merk Laptop</Option>
                    <Option>Acer</Option>
                    <Option>asus</Option>
                    <Option>Lenovo</Option>
                    <Option>Dell</Option>
                </Select>
                <Select name='color' onChange={handleFilter}>
                    <Option disabled selected>Harga</Option>
                    <Option>blue</Option>
                    <Option>red</Option>
                    <Option>silver</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Product:</FilterText>
                <Select onChange={HandleSort}>
                    {/* <Option disabled selected>Urutkan</Option> */}
                    <Option>terendah</Option>
                    <Option>tertinggi</Option>
             
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort} />
        {/* <Newslleter/> */}
        <Footer/>
    </Container>
  )
}

export default ProductList

// 17:17