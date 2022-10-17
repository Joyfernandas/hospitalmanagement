import React from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import Swal from 'sweetalert2';

function Index() {

  const onsubmit = () => {
    Swal.fire(
      'success!',
      'Success',
      'success'
    )
  }
  return (
    <>
      <Navbar />
      <div id="pre-active">
        <div class="pre d-flex align-items-center justify-content-center">
          <div class="pre-inner position-relative">
            <div class="pre-circle"></div>
            <div class="pre-img pere-text">

              <div class="col-xl-2 col-lg-2 col-md-1">
                {/* mobile menu */}
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        {/*? slider Area Start*/}
        <div class="slider-area position-relative">
          <div class="slider-active">
            {/* single slider */}
            <div class="single-slider slider-height d-flex align-items-center">
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div class="hero__caption">
                      <span>Committed to success</span>
                      <h1 class="cd-headline letters scale">We care about your
                        <strong class="cd-words-wrapper">
                          <b class="is-visible">health</b>
                          <b>sushi</b>
                          <b>steak</b>
                        </strong>
                      </h1>
                      <p data-animation="fadeInLeft" data-delay="0.1s">A good laugh and a long sleep are the best cures in the doctor's book</p>
                      <Link to="/userregistration" class="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i class="ti-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single slider */}
            <div class="single-slider slider-height d-flex align-items-center">
              <div class="container">
                <div class="row">
                  <div class="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                    <div class="hero__caption">
                      <span>Committed to success</span>
                      <h1 class="cd-headline letters scale">We care about your
                        <strong class="cd-words-wrapper">
                          <b class="is-visible">health</b>
                          <b>sushi</b>
                          <b>steak</b>
                        </strong>
                      </h1>
                      <p data-animation="fadeInLeft" data-delay="0.1s">The power of community to create health is far greater than any physician, clinic or hospital</p>
                      <Link to="/userregistration" class="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i class="ti-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
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

                  <div className="about-btn1 mb-30">
                    <Link to="/doctor" className="btn about-btn">Find Doctors .<i className="ti-arrow-right" /></Link>
                  </div>
                  <div className="about-btn1 mb-30">
                    <Link to="/userregistration" className="btn about-btn2">Appointment <i className="ti-arrow-right" /></Link>
                  </div>
                  <div className="about-btn1 mb-30">
                    <Link to="/userregistration" className="btn about-btn2">Emargency <i className="ti-arrow-right" /></Link>
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
                        <h3>Dentist with surgical mask holding <br />Find the patient</h3>
                        <p> dentist details Most bachelor's dental degrees will comprise of modules in anatomy, physiology, biology, patient care, and pharmacology, combining both theoretical and practical forms of study</p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
                        <h3>Cardiology with mask holding <br /> Friendly Treatment</h3>
                        <p>Cardiologists diagnose, assess and treat patients with defects and diseases of the heart and the blood vessels. </p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
                        <h3>ENT Specialist with All the requirements for the treatment <br /> scaler near patient</h3>
                        <p>That's someone who treats issues in your ears, nose, or throat as well as related areas in your head and neck. </p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
                        <h3>Petiatrition with surgical mask holding <br /> scaler near patient</h3>
                        <p> who manages the physical, behavioral, and mental care for children from birth until age 18.</p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
                        <h3>NeuroAnatomy Brain Specialist <br /> scaler near patient</h3>
                        <p>It performs higher functions like interpreting touch, vision and hearing, as well as speech, reasoning, emotions, learning, and fine control of movement.</p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
                        <h3>Blood Screening <br /> scaler near patient</h3>
                        <p>to detect markers of infection in order to prevent the release of infected blood and blood components for clinical use</p>
                        <Link to="/userregistration" className="dep-btn">Appointment<i className="ti-arrow-right" /></Link>
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
        {/* depertment area end  */}
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
                      <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)' }} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery2.png)' }} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery3.png)' }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery4.png)' }} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-gallery mb-30">
                      <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery5.png)' }} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-gallery mb-30">
                      <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery6.png)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Area End */}
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
                    <p>“A church is a hospital for sinners, not a museum for saints.”</p>
                  </div>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img src="assets/img/gallery/Homepage_testi.png" alt />
                    </div>
                    <div className="founder-text">
                      <span>Immanuel</span>
                      <p>Dean of Hospital</p>
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
                    <h3><a href="#">John Melque</a></h3>
                    <span>Cardiologist</span>

                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team3.png" alt />
                  </div>
                  <div className="team-caption">
                    <h3><a href="#">Margret</a></h3>
                    <span>Dermatalogist</span>

                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/team1.png" alt />
                  </div>
                  <div className="team-caption">
                    <h3><a href="#">Venis</a></h3>
                    <span>Petiatrition</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Give your feedback</h2>
            </div>
            <div className="col-lg-8">
              <form className="form-contact contact_form" id="contactForm" noValidate="novalidate">
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
                  <button type="submit" className="button button-contactForm boxed-btn" onClick={onsubmit}>Submit</button>
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
        </div>
        {/* Team End */}
        {/* ? Contact form Start */}
        {/* <div className="contact-form-main">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper"> */}
        {/*Section Tittle  */}
        {/* <div className="form-tittle">
                <div className="row ">
                  <div className="col-xl-12">
                    <div className="section-tittle section-tittle2">
                      <span>Appointment Apply Form</span>
                      <h2>Appointment Form</h2>
                    </div>
                  </div>
                </div>
              </div> */}
        {/*End Section Tittle  */}
        {/* <form id="contact-form" action="#" method="POST">
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
                        <option value>heart problem</option>
                        <option value>Dental</option>
                        <option value>Skin disease</option>
                        <option value>brain issues</option>
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
      </div> */}
        {/* contact left Img*/}
        {/* <div className="from-left d-none d-lg-block">
        <img src="assets/img/gallery/contact_form.png" alt />
      </div>
    </div> */}
        {/* Contact form End */}
        {/*? gallery Products Start */}
        <div className="gallery-area fix">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery2.png)' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery3.png)' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery4.png)' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery5.png)' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery6.png)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* gallery Products End */}

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
                      <h4><span>+0444 </span>73222</h4>
                      <p>joyfernandas186@gmail.com</p>
                    </div>
                    {/* Form */}
                    <div className="footer-form">
                      <div id="mc_embed_signup">

                        <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                        <div className="form-icon">
                          <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                            Submit
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


    </>
  )
}

export default Index;