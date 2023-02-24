import React from 'react'

 import Carousel from 'react-bootstrap/Carousel';


export const SapaBanner = () => {
  return (
     <Carousel >
  <Carousel.Item  className='height-banner'>

    <img  
      className="d-block w-52" 
      src="https://media.vneconomy.vn/images/upload/2021/04/20/sapa-mapjpg-1512441006817-18-18-895-1580-crop-1512441018734.jpg" 
    />
    <Carousel.Caption >
      <h1>GuideSapa</h1>
      <p>tiếng khèn môi ngẩn ngơ quanh sườn núi  </p>
      <p > đón em từ sáng đến chiều phong lưu </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item 
 className='height-banner'>
    <img
      // className="d-block w-52"
      src="https://www.invert.vn/media/uploads/uploads/2022/12/03143748-12-hinh-anh-dep.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>SAPA NƠI GẶP GỠ ĐẤT TRỜI</h1>
      <p >tiếng khèn môi ngẩn ngơ quanh sườn núi  </p>
      <p> đón em từ sáng đến chiều phong lưu </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='height-banner'>
    <img
      className="d-block w-52"
      src="https://www.invert.vn/media/uploads/uploads/2022/12/03143719-10-hinh-anh-dep.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 >SAPA NƠI GẶP GỠ ĐẤT TRỜI</h1>
      <p >tiếng khèn môi ngẩn ngơ quanh sườn núi  </p>
      <p > đón em từ sáng đến chiều phong lưu </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
