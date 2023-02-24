import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CatalogEdit(props) {
  let navigate = useNavigate()
    let cat = useLocation()
    
    const [newCat,setNewCat]= useState("")
    const [status,setStatus]= useState("")
  
    const handleUpdate = ()=>{
   
      axios.put(`http://localhost:3001/catalogs/${cat.state.id}`,{...cat.state,'name':newCat,'status':status})
      .then(res=> {
        axios.get("http://localhost:3001/catalogs")
      .then(res=> {
        setNewCat("")
        setStatus("")
      })
      })
      navigate("/admin"); 
    }
    useEffect(()=>{
        if(cat.state){
            setNewCat(cat.state.name)
            setStatus(cat.state.status)
        }
    },[cat.state])
  return (
    <div>
    <h1> chỉnh sửa danh mục</h1>
       <form>
        <table className='catalogedit'>
          <table>
             <tr>
            <td><h4>tên danh mục</h4></td>
             <td><input type={"text"} value={newCat} onChange={(e)=>setNewCat(e.target.value)}/> </td> 
          </tr>
          </table>
         <table>
          <tr>
            <td><h4>trạng thái dm</h4></td>
          <td> <input type={"text"} value={status} onChange={(e)=>setStatus(e.target.value)}/></td>  
          </tr>
         </table>
         <table>
          <tr>    
       <td>  <button className='butoncatalogeditbutton' onClick={handleUpdate}>Update</button></td>
          </tr>
         </table>
        </table>
       </form>
    </div>
  )
}
