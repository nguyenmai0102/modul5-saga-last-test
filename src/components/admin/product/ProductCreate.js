import axios from 'axios'
import React, { useState } from 'react'
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom'
import { storage } from '../../../filebase';
import '../../../css/style.css'

export default function ProductCreate(props) {
  let navigate = useNavigate()
  // const [newPro,setNewPro]= useState("")
  const [postTitle, setPostTitle] = useState("")
  const [postContents, setPostContents] = useState("")
  const [createDate, setCreateDate] = useState("")
  const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3001/products", { 'postTitle': postTitle, 'postContents': postContents, 'image': imageUrl, 'createDate': createDate, 'status': status })
      .then(res => {
        setPostTitle("")
        setPostContents("")
        setImageUrl("")
        setCreateDate("")
        setStatus("")
      })


    navigate("/admin/product");

  }

  console.log(imageUrl);
  const upload = (e) => {
    let imageUpload = e.target.files[0]


    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  }

  return (
    <div>
      
      <h1> TẠO MỚI SẢN PHẨM</h1>
      <form>

        {/* <input type={"text"} value={newPro} onChange={(e)=>setNewPro(e.target.value)}/> */}
   
          <table className='productCreate'>
            <table>
               <tr>
            <td> <h3>Tiêu đề</h3></td>  
        <td > <input type={"text"} value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/></td>
          </tr>
            </table>
            <table>
               <tr>
          <td> <h3> Nội dung</h3> </td> 
          <td> <input type={"text"} value={postContents} onChange={(e) => setPostContents(e.target.value)}/></td> 
        </tr>
            </table>
           
        <table>
           <tr>
        <td>  <h3> Tạo ảnh</h3></td> 
       <td> <input type={"file"} onChange={upload} /> </td>  
       <td><img width={"150px"} src={imageUrl} /> </td> 
        </tr>
        </table>

        <table>
           <tr>
       <td> <h3>Ngày tạo</h3> </td>
        <td><input type={"date"} value={createDate} onChange={(e) => setCreateDate(e.target.value)}/> </td> 
       </tr>
        </table>
        
       <table>
         <tr>
        <td> <h3>Trạng thái</h3> </td> 
        <td> <input type={"text"} value={status} onChange={(e) => setStatus(e.target.value)}/></td>  
        </tr>
       </table>
       
       <table >
         <tr>
         <td> <button className='add1' onClick={handleAdd}>tạo mới</button></td>  
         </tr>
       </table>
       
         </table> 
      </form>
    </div>
  )

}
