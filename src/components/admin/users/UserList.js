import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UserList(props) {
    const [list, setList] = useState([]);
   
   
   
    const changeStatus =(user)=>{
        axios.put(`http://localhost:3001/users/${user.id}`,{...user,"status": !user.status})
        .then(res=> {
          axios.get("http://localhost:3001/users")
        .then(res=>{
            setList (res.data)

        })
    })
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then(res=> {
          setList(res.data)
        })
      },[])
      
  return (
    <div>
      
    
        <h1>Table</h1>
        <table border={1} cellPadding={10}>
            <tbody>
            <tr>
             
                <td>STT</td>
                <td>email</td>
               
                <td>fullname</td>
                <td>id</td>
                <td>status</td>
                <td colSpan={2}>Action</td>
                
            </tr>
            {
                list.map((user,index)=><tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.email}</td>
                
                <td>{user.fullname}</td>
                <td>{user.id}</td>
                <td>{user.status?"Hoạt động":"Khóa"}</td>
                <td><button onClick={()=>changeStatus(user)}>changestatus</button></td>
              

            </tr> )
            }
            </tbody>
        </table>
    </div>
  )
}