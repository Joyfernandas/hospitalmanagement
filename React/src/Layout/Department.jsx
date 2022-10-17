import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Department() {
  return (
    <>
      <Navbar />
      <main>
        {/*? Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-center">
                    <h2>Departments</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/*? department_area_start  */}
        <div className="department_area section-padding2">
          <div className="container">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-100">
                  <span>Our Departments</span>
                  <h2>Our Medical Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="depart_ment_tab mb-30">
                  {/* Tabs Buttons */}
                  <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        <i className="flaticon-teeth" />
                        <h4>Dentistry</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                        <i className="flaticon-cardiovascular" />
                        <h4>Cardiology</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                        <i className="flaticon-ear" />
                        <h4>ENT Specialists</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="Astrology-tab" data-toggle="tab" href="#Astrology" role="tab" aria-controls="contact" aria-selected="false">
                        <i className="flaticon-bone" />
                        <h4>Petiatrition</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="Neuroanatomy-tab" data-toggle="tab" href="#Neuroanatomy" role="tab" aria-controls="contact" aria-selected="false">
                        <i className="flaticon-lung" />
                        <h4>Neuroanatomy</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                        <i className="flaticon-cell" />
                        <h4>Blood Screening</h4>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dept_main_info white-bg">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane " id="home" role="tabpanel" aria-labelledby="home-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                        <p>Image result for dentist details Most bachelor's dental degrees will comprise of modules in anatomy, physiology, biology, patient care, and pharmacology, combining both theoretical and practical forms of study</p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
                <div className="tab-pane " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>Cardiology with surgical mask holding <br /> scaler near patient</h3>
                        <p>Cardiologists diagnose, assess and treat patients with defects and diseases of the heart and the blood vessels. </p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man1.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
                <div className="tab-pane " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>ENT specialist with surgical mask holding <br /> scaler near patient</h3>
                        <p>That's someone who treats issues in your ears, nose, or throat as well as related areas in your head and neck. </p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man3.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
                <div className="tab-pane " id="Petiatrition" role="tabpanel" aria-labelledby="Astrology-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>Petiatritions with surgical mask holding <br /> scaler near patient</h3>
                        <p> who manages the physical, behavioral, and mental care for children from birth until age 18.</p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man2.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
                <div className="tab-pane " id="Neuroanatomy" role="tabpanel" aria-labelledby="Neuroanatomy-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>Neuroanatomy with surgical mask holding <br /> scaler near patient</h3>
                        <p>It performs higher functions like interpreting touch, vision and hearing, as well as speech, reasoning, emotions, learning, and fine control of movement.</p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man4.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
                <div className="tab-pane " id="Blood" role="tabpanel" aria-labelledby="Blood-tab">
                  {/* single_content  */}
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-7">
                      <div className="dept_info">
                        <h3>Blood Screening with surgical mask holding <br /> scaler near patient</h3>
                        <p>to detect markers of infection in order to prevent the release of infected blood and blood components for clinical use</p>
                        <Link to="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dept_thumb">
                        <img src="assets/img/gallery/department_man5.png" alt />
                      </div>
                    </div>
                  </div>
                  {/* single_content  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* department area_end  */}
      </main>
      <footer>
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
      </footer>
      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
      </div>


    </>
  )
}

export default Department