import { useQuery, gql } from "@apollo/client"
import { useEffect, useState } from "react";
import {LOAD_USERS} from '../GraphQL/Query';

const GetUsers = () => {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])
    useEffect(() => {
       if(data){
           setUsers(data.getAllusers)
       }
    }, [data])
  return (
    <div>
        {users.map((item)=>{
            return <h1>{item.firstName}</h1>
        })}
    </div>
  )
}

export default GetUsers
