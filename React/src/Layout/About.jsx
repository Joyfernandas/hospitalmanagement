import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <>
    <Navbar/>
<div>
  <div className="mobile_menu d-block d-lg-none" />
  {/* Header End */}
  <main>
    {/*? Hero Start */}
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 text-center">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/*? About Start*/}
    <div className="about-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="about-caption mb-50">
              {/* Section Tittle */}
              <div className="section-tittle section-tittle2 mb-35">
                <span>About Our Company</span>
                <h2>Welcome To Our Hospital</h2>
              </div>
              <p>There arge many variations ohf pacgssages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
              <div className="about-btn1 mb-30">
                <a href="about.html" className="btn about-btn">Find Doctors .<i className="ti-arrow-right" /></a>
              </div>
              <div className="about-btn1 mb-30">
                <a href="about.html" className="btn about-btn2">Appointment <i className="ti-arrow-right" /></a>
              </div>
              <div className="about-btn1 mb-30">
                <a href="about.html" className="btn about-btn2">Emargency 1 <i className="ti-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <div className="about-font-img d-none d-lg-block">
                <img src="assets/img/gallery/about2.png" alt />
              </div>
              <div className="about-back-img ">
                <img src="assets/img/gallery/about1.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About  End*/}
    {/*? All startups Start */}
    <div className="all-starups-area testimonial-area fix">
      {/* left Contents */}
      <div className="starups">
        {/*? Testimonial Start */}
        <div className="h1-testimonial-active">
          {/* Single Testimonial */}
          <div className="single-testimonial text-center">
            {/* Testimonial Content */}
            <div className="testimonial-caption ">
              <div className="testimonial-top-cap">
                <img src="assets/img/gallery/testimonial.png" alt />
                <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for yout hard.”</p>
              </div>
              {/* founder */}
              <div className="testimonial-founder d-flex align-items-center justify-content-center">
                <div className="founder-img">
                  <img src="assets/img/gallery/Homepage_testi.png" alt />
                </div>
                <div className="founder-text">
                  <span>Margaret Lawson</span>
                  <p>Chif Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
      {/*Right Contents  */}
      <div className="starups-img" />
    </div>
    {/*All startups End */}
    {/*? Gallery Area Start */}
    <div className="gallery-area section-padding30">
      <div className="container">
        {/* Section Tittle */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-tittle text-center mb-100">
              <span>Our Gellary</span>
              <h2>Our Medical Camp</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Left */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-gallery mb-30">
                  <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-gallery mb-30">
                  <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Gallery Area End */}
    {/*? Contact form Start */}
    <div className="contact-form-main">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper">
              {/*Section Tittle  */}
              <div className="form-tittle">
                <div className="row ">
                  <div className="col-xl-12">
                    <div className="section-tittle section-tittle2">
                      <span>Appointment Apply Form</span>
                      <h2>Appointment Form</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Section Tittle  */}
              <form id="contact-form" action="#" method="POST">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box email-icon mb-30">
                      <input type="text" name="email" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-30">
                    <div className="select-itms">
                      <select name="select" id="select2">
                        <option value>Health Law</option>
                        <option value>saiful islam</option>
                        <option value>Arafath Miya</option>
                        <option value>Shakil Miya</option>
                        <option value>Tamim Sharker</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box subject-icon mb-30">
                      <input type="Email" name="subject" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-65">
                      <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="submit-info">
                      <button className="btn" type="submit">Submit Now <i className="ti-arrow-right" /> </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* contact left Img*/}
      <div className="from-left d-none d-lg-block">
        <img src="assets/img/gallery/contact_form.png" alt />
      </div>
    </div>
    {/* Contact form End */}
    {/*? gallery Products Start */}
    <div className="gallery-area fix">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">
                <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* gallery Products End */}
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
          {/* single Tem */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="assets/img/gallery/team2.png" alt />
              </div>
              <div className="team-caption">
                <h3><a href="#">Alvin Maxwell</a></h3>
                <span>Creative UI Designer</span>
                {/* Team social */}
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fas fa-globe" /></a>
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
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
                <h3><a href="#">Maria Smith</a></h3>
                <span>Agency Manager</span>
                {/* Team social */}
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fas fa-globe" /></a>
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
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
                <h3><a href="#">Angela Doe</a></h3>
                <span>Designer</span>
                {/* Team social */}
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fas fa-globe" /></a>
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
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
                  <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>About Us</h4>
                  <div className="footer-pera">
                    <p className="info1">Isak Hospital pincode:605225 thirupattur Dt </p>
                    <p className="info1">joyfernandas186@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-number mb-50">
                  <h4><span>+044 </span>7885 3222</h4>
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

export default About