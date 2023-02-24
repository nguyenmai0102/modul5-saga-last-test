import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CatalogList(props) {
    const [list, setList] = useState([]);
    let navigate = useNavigate()
   
    const handleEdit=(cat)=>{
        navigate("edit-catalog",{state: cat})
    }
    const handleDelete = (id)=>{
 
        axios.delete(`http://localhost:3001/catalogs/${id}`)
        .then(res=> {
          axios.get("http://localhost:3001/catalogs")
        .then(res=> {
          setList(res.data)
        })
        })
        // navigate("/admin");
      }
    useEffect(()=>{
        axios.get("http://localhost:3001/catalogs")
        .then(res=> {
          setList(res.data)
        })
      },[])
  return (
    <div>
        <Link to={"add-catalog"}>
            <button className='catbut'>Add</button>
            </Link>
    
        <h1>CATALOG</h1>
   
        <table className='catatable' >
            <tr>
             
                <td >STT</td>
                <td>id</td>
                <td>Name</td>
                <td>Status</td>
                <td colSpan={2}>Action</td>
                
            </tr>
            {
                list.map((cat,index)=><tr key={cat.id}>
                <td>{index+1}</td>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.status}</td>
                <td><button onClick={()=>handleEdit(cat)}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(cat.id)}}>Delete</button></td>
              

            </tr> )
            }
            
        </table>
    </div>
  )
}
