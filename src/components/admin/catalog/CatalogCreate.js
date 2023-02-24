import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CatalogCreate(props) {
  let navigate = useNavigate()
    const [newCat,setNewCat]= useState("")
    
    const handleAdd = ()=>{
      axios.post("http://localhost:3001/catalogs",{"name":newCat,"status":"true"})
      .then(res=> {
        setNewCat("")
      })
      navigate("/admin");
  
    }
  return (
    <div>
    <h1> tạo mới danh mục</h1>
       <form>
        <table className='taodanhmuc'>
          <table>
          <tr>
            <td><h3> tạo mới tên</h3></td>
          <td><input type={"text"} value={newCat} onChange={(e)=>setNewCat(e.target.value)}/> </td>   
          </tr>
        </table>
        <table>
          <tr>
           <td> <button className='taodanhmucadd' onClick={handleAdd}>ADD</button></td>  
          </tr>
        </table>
        </table>
        
       

       
       </form>
    </div>
  )
  
}
