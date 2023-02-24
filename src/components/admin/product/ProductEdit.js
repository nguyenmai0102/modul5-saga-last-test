import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../../../filebase';
export default function ProductEdit(props) {
  let navigate = useNavigate()
    let product = useLocation()
    
    // const [newPro,setNewPro]= useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postContents,setPostContents] = useState("")
    const [createDate, setCreateDate] = useState("")
    const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  console.log(createDate);
  
  
    const handleUpdate = ()=>{
   
      axios.put(`http://localhost:3001/products/${product.state.id}`,{...product.state,'postTitle': postTitle, 'postContents': postContents,'image': imageUrl, 'createDate': createDate, 'status':status})
      .then(res=> {
        axios.get("http://localhost:3001/products")
      .then(res=> {
        // setNewPro("")
       
      })
      })
      navigate("/admin/product"); 
    }
   console.log(imageUrl);
    const upload=(e)=>{
      let imageUpload=e.target.files[0]
      console.log(imageUpload);
  
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      });
    }
    useEffect(()=>{
        if(product.state){
            // setNewPro(product.state.name)
            setPostTitle(product.state.postTitle)
            setPostContents(product.state.postContents)
            setImageUrl(product.state.image)
            setCreateDate(product.state.createDate)
            setStatus(product.state.status)
        }
    },[product.state])
    
  return (
    <div>
    <h1> chỉnh sửa sản phẩm</h1>
       <form>
        {/* <input type={"text"} value={newPro} onChange={(e)=>setNewPro(e.target.value)}/> */}
        <table className='productEdit'>
        <table>
          <tr>
             <td><h3>tiêu đề</h3></td>
         <td> <input type={"text"} value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/></td> 
          </tr>
        </table>
        <table>
          <tr>
            <td><h3>nội dung</h3></td>
      <td> <input type={"text"} value={postContents} onChange={(e)=>setPostContents(e.target.value)}/></td>  
          </tr>
        </table>

        <table>
      <tr>
        <td><h3>chỉnh ảnh</h3></td>
      <td><input type={"file"} onChange={upload}/> </td> 
        <img width={"150px"} src={imageUrl}/>
      </tr>
        </table>

        <table>
          <tr>
            <td><h3>ngày tạo</h3> </td>
           <td><input type={"date"} value={createDate} onChange={(e)=>setCreateDate(e.target.value)}/> </td>  
          </tr>
        </table>
        <table>
          <tr>
            <td><h3>trạng thái</h3></td>
             <td><input type={"text"} value={status} onChange={(e)=>setStatus(e.target.value)}/> </td>  
          </tr>
        </table>
        <table>
          <tr>
            <td> <button className='add2' onClick={handleUpdate}>hoàn thành chỉnh sửa</button> </td>
          </tr>
        </table>

        </table>

       </form>
    </div>
  )
}


