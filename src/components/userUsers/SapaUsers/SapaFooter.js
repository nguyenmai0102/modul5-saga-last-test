import React from 'react'

export const SapaFooter = () => {
  return (
<>
  {/* Footer */}
  <footer className="text-center text-lg-start  text-muted SapaBg">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
             về sapa
            </h6>
            <p>
            Nằm ở vùng núi phía Tây Bắc của Việt Nam, thị trấn chợ Sapa rực rỡ sắc màu và rất duyên dáng, mang đến cho du khách một ốc lạnh giá đảo hoàn hảo cho chuyến du lịch tại một quốc gia vùng nhiệt đới.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">sản phẩm thủ công </h6>
            <p>
              <a href="#!" className="text-reset">
                chạm khắc bạc
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                thổ cẩm
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              đúc đồng
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
               nấu rượu
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">món ăn truyền thống</h6>
            <p>
              <a href="#!" className="text-reset">
               thắng cố
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                xôi bảy màu
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                cá suối
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                lơn cắp nách
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">trao đổi thông tin</h6>
           
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
            <p>hãy gửi cho chúng tôi những trải nghiệm của bạn</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4 "
      style={{ backgroundColor: "rgb(208, 133, 20)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}
