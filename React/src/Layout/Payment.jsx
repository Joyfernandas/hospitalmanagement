import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';





function Payment() {
  
    const [state, setstate] = useState([]);
useEffect(() => {
  axios.get('api/Payment/')      
.then((response) => {
 setstate(response.data)
;
})
}, []);


  return (
    <>

   <Sidebar/>
    {/*? Hero Start */}
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 text-center">
                <h2>Payment</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="department_area section-padding2">
      <div className="container">
        {/* Section Tittle */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <span>Payment Successfull</span>
              <h2>Our Medical Services</h2>
            </div>
          </div>
        
    <div class="container" id='table'>
  {/* <p>The .table-bordered class adds borders to a table:</p>*/}
  


  <table class="table table-hover">
    <thead>
      <tr>
        <th scope='row'>Name</th>
        <th scope='row'>Mobile</th>
        <th scope='row'>Start_Date</th>
        <th scope='row'>End_Date</th>
        <th scope='row'>Room_Rent</th>
        <th scope='row'>Total</th>
      </tr>
    </thead>
    <tbody>
      {state.map((res)=>{
        return(
          <tr>
        <td>{res.name}</td>
        <td>{res.mobile}</td>
        <td>{res.start_date}</td>
        <td>{res.end_date}</td>
        <td>{res.room_rent}</td>
        <td>{res.Total}</td>
      
      </tr> 
        )
      })}
    </tbody>
  </table>
</div>
</div>
</div>
</div>
 {/*? Footer Start*/}
 <div className="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
              <div className="single-footer-caption mb-50">
                {/* logo */}
                <div className="footer-logo">
                  <Link to="index.html"><img src="assets/img/logo/logo2_footer.png" alt /></Link>          
                      </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>About Us</h4>
                  <div className="footer-pera">
                    <p className="info1"> </p>
                    <p className="info1">Isak Hospital pincode:605225 thirupattur Dt.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-number mb-50">
                  <h4><span>+0444 </span>7885 3222</h4>
                  <p>joyfernandas186@gmail.com</p>
                </div>
                {/* Form */}
                <div className="footer-form">
                  <div id="mc_embed_signup">
                   
                      <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                      <div className="form-icon">
                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                          Send
                        </button>
                      </div>
                      <div className="mt-10 info" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-8">
              
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* Footer Social */}
              <div className="footer-social f-right">
                <Link to="#"><i className="fab fa-twitter" /></Link>

                <Link to="#"><i className="fas fa-globe" /></Link>
                <Link to="#"><i className="fab fa-instagram" /></Link>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Payment;