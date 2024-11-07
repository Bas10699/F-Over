import React from "react";
import Image1 from '../image/page1.jpg'

const Home = () => {
    return (
        <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-auto">
            {/* ภาพที่ปรับขนาดได้และอยู่ตรงกลาง */}
            <img 
              src={Image1}
              className="img-fluid mx-auto d-block" 
              alt="Responsive" 
              style={{ maxHeight:"80vh"}} 
            />
          </div>
        </div>
      </div>

    )
}
export default Home