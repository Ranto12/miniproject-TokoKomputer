import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react";
import Index from "./Index";
import { GetUsersList, InsetUsers , ADD_USERS} from "../Query"




// const MutationUsers = () => {
//   const [firstName, setFirtsName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   const [createUser, {error}] = useMutation(InsetUsers);

//   const addUser = () => {
//       createUser({
//         variables: {
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           password: password,
//         },
//       });
//       if (error) {
//         console.log(error);
//       }
//     };

// return (
//   <div>
//       <input 
//       type="text"
//       placeholder='Fisrt Name'
//       onChange= {(e)=>{
//           setFirtsName(e.target.value);
//       }}
//       />

//       <input 
//       type="text"
//       placeholder='Last Name'
//       onChange= {(e)=>{
//           setLastName(e.target.value);
//       }}
//       />
//       <input 
//       type="text"
//       placeholder='Email'
//       onChange= {(e)=>{
//           setEmail(e.target.value);
//       }}
//       />
//       <input 
//       type="password"
//       placeholder='pasword'
//       onChange= {(e)=>{
//           setPassword(e.target.value);
//       }}
//       />
//       <button onClick={addUser}>
//       Create users
//       </button>
//     </div>
// )
// }

// export default MutationUsers



// import { useMutation } from "@apollo/client";
// import { useState } from "react";
// import { ADD_USERS } from "../Query";


const MutationUsers = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastNama] = useState("");
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");
  

    const [addUsers, {data, loading, error}]= useMutation(ADD_USERS);
  
    if(loading) return  'loading push....';
    if(error) return `error is ${error.message}`;

    const onSubmitInput = (e)=>{
        e.preventDefault();
        addUsers({
            variables:{
                object:{
                    firstName : firstName,
                    lastName : lastName,
                    email:email,
                    passowrd:passowrd,
                }
            }
        })
    }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUsers({ variables: { firstName: firstName.value, lastNamme: lastName.value, email: email.value, passowrd: passowrd.value } });
          firstName.value = '';
          lastName.value = '';
          email.value = '';
          passowrd.value = '';
        }}
      >
          <input
          ref={node => {
            firstName = node;
          }}
        />
          <input
          ref={node => {
            lastName = node;
          }}
        />
          <input
          ref={node => {
            email = node;
          }}
        />
          <input
          ref={node => {
            passowrd = node;
          }}
        />
        <button type="submit"> Add Users</button>
      </form>
    </div>
  )
}

export default MutationUsers
