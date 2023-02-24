import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';

export const Sapaheart = () => {
  return (
    <Navbar className='heart1'  expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nameheart">
          <NavLink className="m-3" to="/">THỊ TRẤN SAPA</NavLink>
          <NavLink className="m-3" to="/danhlamthangcanh"> DANH LAM THẮNG CẢNH </NavLink>
          <NavLink className="m-3" to="/hotel"> KHÁCH SẠN </NavLink>
          <NavLink className="m-3" to="/nhaHang">NHÀ HÀNG</NavLink>
          <NavLink className="m-3" to="/trainghiem">TRẢI NGHIỆM</NavLink>
          <NavLink className="m-3" to="/register">ĐĂNG KÍ</NavLink>
          <NavLink className="m-3" to="/login">ĐĂNG NHẬP</NavLink>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}
