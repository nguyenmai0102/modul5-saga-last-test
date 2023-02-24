import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GET_POST } from '../util/users_Service';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SapaContent = () => {
  const navigate= useNavigate()
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/products")
    .then(res=>{
      let list=res.data
      setData(res.data)
    })
    .catch(err=>console.log(err))

  },[])
  const handleDetail= (id)=>{
    navigate("/danhlamthangcanh",{state:id})
  }
  
  // console.log(data);
  return (
    <Container>
    <Row >
      {data.map((item)=><Col sm={3} onClick={()=>handleDetail(item.id)}>
              <img   style={{height:"150px"}}
    className="d-block w-52 sapacontent2" 
    src={item.image} 
  />
  <p>
      {item.postContents.slice(0,30)} 
  
  </p>
              </Col>)}
   
    </Row>
    
  </Container>
   
   
  )
}
