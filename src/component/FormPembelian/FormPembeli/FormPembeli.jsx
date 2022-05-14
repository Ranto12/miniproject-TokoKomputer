import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import {ADD_USERS} from '../../../GraphQL/Mutation/Mutation'

 const FormPembeli = () => {
  const [inputs, setInputs] = useState([
    {
      name: "firtsName",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
    {
      name: "lastNama",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
    {
      name: "password",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    }
  ]);

  const handleInput = (value, index) => {
    const newInputs = inputs.map((input, inputIdx) => {
      if (inputIdx === index) {
        return { ...input, value: value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const [addUsers, {data, loading, error}]= useMutation(ADD_USERS, {
    onCompleted: (data) => {
      console.log(data)
    }
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    addUsers({
      variables: {
        object :{
          firstName : inputs[0].value,
          lastNama : inputs[1].value,
          email: inputs[2].value,
          password: inputs[3].value,
        }
      }
    })
  }

  // console.log(inputs)

  return (
    <>
    <form onSubmit={handleSubmit}>
    
      {inputs &&
        inputs.map((input, inputIdx) => (
          <div key={inputIdx} >
            <label >{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={input.value}
              onChange={(e) => handleInput(e.target.value, inputIdx)}
              required
            />
          </div>
        ))}
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default FormPembeli