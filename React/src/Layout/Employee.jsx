import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  const [state, setstate] = useState([]);


  useEffect(() => {
    axios.get('api/Employee/')
      .then((response) => {
        setstate(response.data)

      })
  }, []);


  return (
    <>
      <Navbar />
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 text-center">
                  <h2>Employees</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="department_area section-padding2">
        <div className="container"></div>
        {/* Section Tittle */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-100">
              <span>Our Employees</span>
              <h2> Employee Details</h2>
            </div>
          </div>
        </div>

        <div class="container" id='table'>
          {/* <p>The .table-bordered class adds borders to a table:</p>*/}



          <table class="table table-hover">
            <thead>
              <tr>
                <th scope='row'>Name</th>
                <th scope='row'>Age</th>
                <th scope='row'>Mobile</th>
                <th scope='row'>Address</th>
                <th scope='row'>Experience</th>

              </tr>
            </thead>
            <tbody>
              {state.map((res) => {
                return (
                  <tr>
                    <td>{res.name}</td>
                    <td>{res.age}</td>
                    <td>{res.mobile}</td>
                    <td>{res.address}</td>
                    <td>{res.experience}</td>

                  </tr>
                )
              })}
            </tbody>
          </table>
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
      {/* Footer End*/}

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
      </div>

    </>


  )
}

export default Employee;