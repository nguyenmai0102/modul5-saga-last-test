import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductList(props) {
    const [list, setList] = useState([]);
    let navigate = useNavigate()
   
    const handleEdit=(product)=>{
        navigate("edit-product",{state: product})
    }
    const handleDelete = (id)=>{
 
        axios.delete(`http://localhost:3001/products/${id}`)
        .then(res=> {
          axios.get("http://localhost:3001/products")
        .then(res=> {
          setList(res.data)
        })
        })
        // navigate("/admin/product");
      }
    useEffect(()=>{
        axios.get("http://localhost:3001/products")
        .then(res=> {
          setList(res.data)
        })
      },[])
  return (
    <div>
        <Link to={"add-product"}><button className='proadd'>Add</button></Link>
    
        <h1>Table</h1>
        <table className='prodt' >
            <tr>
                <td>STT</td>
            
                <td>postTitle</td>
                <td>postContents</td>
                <td>image</td>
                <td>createDate</td>
                <td>status</td>
                <td>catalogId</td>

                <td colSpan={2}>Action</td>
            </tr>
            {
                list.map((product,index)=><tr key={product.id}>
                <td>{index+1}</td>

                <td>{product.postTitle}</td>
                <td>{product.postContents.slice(0,30)}</td>
                <td><img src={product.image} style={{width:"150px"}}></img></td>
                <td>{product.createDate}</td>
                <td>{product.status}</td>
                <td>{product.catalogId}</td>


                <td><button onClick={()=>handleEdit(product)}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(product.id)}}>Delete</button></td>
              

            </tr> )
            }
            
        </table>
    </div>
  )
}


