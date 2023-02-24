import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Registration() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    
    const handleAdd = ()=>{
        axios.post("http://localhost:3001/users",{"email":email,"password":password, "fullname":fullName ,"status":true,"permission":0})
        .then(res=> {
          setEmail("")
          setPassword("")
          setFullName("")
        })
        navigate("/login");
    }
    return (
        <div>
            <h2>ĐĂNG KÍ</h2>
            
            <table className='dangki'>
               <table> 
                <tr>
           <td><label htmlFor='email'>Email</label> </td> 
           <td> <input type={'text'} name='email' id='email' onChange={(e) => setEmail(e.target.value)} /><br /></td> 
             </tr>
            </table>
            <table>
                <tr>
                  <td><label htmlFor='password'>Password</label> </td>  
                 <td> <input type={'password'} name='password' id='password' onChange={(e) => setPassword(e.target.value)} /><br /></td>    
                </tr>
            </table>
            <table>
                <tr>
            <td> <label htmlFor='fullName'>Full Name</label></td>
          <td> <input type={'text'} name='fullName' id='fullName' onChange={(e) => setFullName(e.target.value)} /><br /></td>  
                </tr>
            </table>
            <table>
                <tr>
                <td> <button className='dangkibutoon' onClick={handleAdd} >Create</button></td>    
                </tr>
            </table>
           </table>
            
            

           
        </div>
    )
}
