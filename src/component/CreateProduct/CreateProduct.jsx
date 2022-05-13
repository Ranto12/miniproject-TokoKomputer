// import { useMutation } from '@apollo/client';
// import { useState } from 'react';
// import styled from 'styled-components';
// import {ADD_PRODUCTS} from '../apollo Client/Query'

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     margin-top: 20px;
// `
// const Wrapper = styled.div`

// `;

// const Title = styled.span`
//   font-size: 20px;
//   font-weight: 500;  
// `;

// const CreateProduct = () => {
    
//     // create product komputer
//     const [nama, setNama] = useState("");
//     const [brand, setBrand] = useState("");
//     const [img, setImg] = useState("");
//     const [price, setPrice] = useState(0);
//     const [spesifikasi, setSpesifikasi] = useState("");

//     const [createProduct] = useMutation(ADD_PRODUCTS);
//   return (
//     <Container>   
//       <Wrapper>
//           <Title>
//           <input
//           type="text"
//           placeholder="Name..."
//           onChange={(event) => {
//             setNama(event.target.value);
//           }}
//         />
//           <input
//           type="text"
//           placeholder="Name..."
//           onChange={(event) => {
//             setBrand(event.target.value);
//           }}
//         />
//           <input
//           type="text"
//           placeholder="Name..."
//           onChange={(event) => {
//             setImg(event.target.value);
//           }}
//         />
//           <input
//           type="number"
//           placeholder="Name..."
//           onChange={(event) => {
//             setPrice(event.target.value);
//           }}
//         />
//           <input
//           type="text"
//           placeholder="spesifikasi..."
//           onChange={(event) => {
//             setSpesifikasi(event.target.value);
//           }}
//         />
//           </Title>
//           <button
//           onClick={() => {
//             createProduct({
//               variables: {
//                 input: { nama, img, nama, price:Number(price), spesifikasi },
//               },
//             });
//             // refetch();
//           }}
//         >
//           CREATE   
//           </button>
//       </Wrapper>
//     </Container>
//   )
// }

// export default CreateProduct