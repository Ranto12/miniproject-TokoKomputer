import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react";
import Index from "./Index";
import { GetUsersList, InsetUsers } from "../Query"




const MutationUsers = () => {
  const [firstName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let input;
  const [addTodo, { data, loading, error }] = useMutation(InsetUsers);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { firstName: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default MutationUsers



// import { useMutation } from "@apollo/client";
// import { useState } from "react";
// import { ADD_USERS } from "../Query";


// const MutationUsers = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastNamme, setLastNama] = useState("");
//     const [email, setEmail] = useState("");
//     const [passowrd, setPassword] = useState("");
  

//     const [addUsers, {data, loading, error}]= useMutation(ADD_USERS);

//     if(loading) return  'loading push....';
//     if(error) return `error is ${error.message}`;

//     const onSubmitInput = ()=>{
//         e.preventDefault();
//         addUsers({
//             variables:{
//                 object:{
//                     firstName : firstName,
//                     lastNamme : lastNamme
//                 }
//             }
//         })
//     }

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           addUsers({ variables: { firstName: input.value } });
//           input.value = '';
//         }}
//       >
//           <input
//           ref={node => {
//             input = node;
//           }}
//         />
//         <button type="submit"> Add Users</button>
//       </form>
//     </div>
//   )
// }

// export default MutationUsers
