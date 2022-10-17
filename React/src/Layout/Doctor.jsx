import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Doctor() {
  return (
    <div>
      <Navbar />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="shortcut icon" type="image/x-icon" to="assets/img/favicon.ico" />
      <div>
        <div>
          {/* Preloader Start */}
          <main>
            {/*? Hero Start */}
            <div className="slider-area2">
              <div className="slider-height2 d-flex align-items-center">


                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="hero-cap hero-cap2 text-center">
                        <h2>Doctors</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero End */}
            {/*? Team Start */}
            <div className="team-area section-padding30">
              <div className="container">
                {/* Section Tittle */}
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-tittle text-center mb-100">
                      <span>Our Doctors</span>
                      <h2>Our Specialist</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team2.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Alvin</Link></h3>
                        <span>Specialist in Exp</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team3.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Mervien</Link></h3>
                        <span>Ginoghologist specialist</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team1.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Josua</Link></h3>
                        <span>PET specialist</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team1.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Ram</Link></h3>
                        <span>Neuronatomy</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team2.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Alvin</Link></h3>
                        <span>Astrologist</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                      <div className="team-img">
                        <img src="assets/img/gallery/team3.png" alt />
                      </div>
                      <div className="team-caption">
                        <h3><Link to="#">Jeffrey</Link></h3>
                        <span>Dean</span>
                        {/* Team social */}
                        <div className="team-social">
                          <Link to="#"><i className="fab fa-twitter" /></Link>
                          <Link to="#"><i className="fas fa-globe" /></Link>
                          <Link to="#"><i className="fab fa-facebook-f" /></Link>
                          <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team End */}
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
                            <p className="info1">Isak Hospital pincode:605225 thirupattur Dt. </p>
                            <p className="info1">joyfernandas186@gmail.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                      <div className="single-footer-caption mb-50">
                        <div className="footer-number mb-50">
                          <h4><span>+6384 </span>712345566</h4>
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
                      <div className="footer-copy-right">

                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                      <div className="footer-social f-right">
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                        <Link to="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></Link>
                        <Link to="#"><i className="fas fa-globe" /></Link>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div id="back-top">
            <Link title="Go to Top" to="#"> <i className="fas fa-level-up-alt" /></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Doctor;