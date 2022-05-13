import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../../GraphQL/Mutation';
import { useMutation } from '@apollo/client';


const Form = () => {
    const [firstName, setFirtsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [createUser, {error}] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
          variables: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
        });
    
        if (error) {
          console.log(error);
        }
      };

  return (
    <div>
      <input 
      type="text"
      placeholder='Fisrt Name'
      onChange= {(e)=>{
          setFirtsName(e.target.value);
      }}
      />

      <input 
      type="text"
      placeholder='Last Name'
      onChange= {(e)=>{
          setLastName(e.target.value);
      }}
      />
      <input 
      type="text"
      placeholder='Email'
      onChange= {(e)=>{
          setEmail(e.target.value);
      }}
      />
      <input 
      type="password"
      placeholder='pasword'
      onChange= {(e)=>{
          setPassword(e.target.value);
      }}
      />
      <button onClick={addUser}>
      Create users
      </button>
    </div>
  )
}

export default Form
