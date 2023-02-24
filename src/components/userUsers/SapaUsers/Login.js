import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()
    const handleLogin = () =>{
        axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
        .then((res)=>{
            if(res.data.length===0){
                alert("Thong tin dang nhap khong chinh xac, vui long thu lai")
            }else{
                let user=res.data[0]
           if(user.permission==1){
            localStorage.setItem("admin",JSON.stringify(user));
            alert("Dang nhap thanh cong")
            navigate("/admin")
           }else{
           
                localStorage.setItem("user",JSON.stringify(user));
                alert("Dang nhap thanh cong")
                navigate("/");
           }

            }
        })
    }
    return (

        <div>
            <h2>ĐĂNG NHẬP</h2>
            <table className='dangnhap'>
                <table>
                    <tr>
                       <td> <label htmlFor='email'>Email</label></td>  
           <td> <input type={'text'} name='email' id='email' onChange={(e) => setEmail(e.target.value)} /><br /></td> 
                    </tr>
                </table>

                <table>
                    <tr>
                       <td> <label htmlFor='password'>Password</label> </td> 
           <td> <input type={'password'} name='password' id='password' onChange={(e) => setPassword(e.target.value)} /><br /></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                     <td> <button className='dangnhapbutoon' onClick={handleLogin}>login</button> </td>   
                    </tr>
                </table>

            </table>
           
           
           
        </div>
    )
}