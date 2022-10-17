import React from 'react'
import Navbar from './Navbar';

function Contact() {
  return (
    <>
      <Navbar />
      <div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Give your feedback</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-home" /></span>
              <div className="media-body">
                <h3>India . thirupattur dt.</h3>
                <p>Yelagiri Hills, postal code :635853</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-tablet" /></span>
              <div className="media-body">
                <h3>+044 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-email" /></span>
              <div className="media-body">
                <h3>isakhospital.clinic.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
        {/* ================ contact section end ================= */}
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
                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>About Us</h4>
                        <div className="footer-pera">
                          <p className="info1">Isak Hospital pincode:605225 thirupattur Dt. </p>
                          <p className="info1">joyfernandas186@gmail.com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-number mb-50">
                        <h4><span>+0444 </span>7885 3222</h4>
                        <p>joyfernandas186@gmail</p>
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
                    {/* Footer Social */}
                    <div className="footer-social f-right">
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fas fa-globe" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
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
      </div>

    </>
  )
}

export default Contact;