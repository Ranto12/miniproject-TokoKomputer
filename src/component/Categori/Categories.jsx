import styled from 'styled-components'
import {Categori} from "../Data"
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px;
`
const Image = styled.img`
`
 const Categories = () => {
   return (
    <Container>
        {Categori.map((item)=>(
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
   );
 }
 
 export default Categories
 