import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function Appointment() {
  const [state, setstate] = useState([]);
  const [input, setInput] = useState([]);
  console.log(input)


  useEffect(() => {
    axios.get('api/Appointment/')
      .then((response) => {
        setstate(response.data)

      })
  }, []);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getinput();
  }, []);

  const getinput = () => {
    axios.get("api/Appointment/").then((response) => {
      setData(response.data);
    });
  };
  const handledelete = (id) => {
    console.log(id, "___________________________")
    axios.delete(`api/Appointment/${id}/`);
    getinput();
  };

  function handleinput(e) {
    setInput({ ...state, [e.target.name]: e.target.value })
  }



  function handleclick() {
    axios.post("/api/Appointment/", input)
    Swal.fire(
      'Registered!',
      'Success',
      'success'
    )
  }



  return (
    <>
      <Sidebar />
      {/*? Hero Start */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 text-center">
                  <h2>Todays Appointment</h2>
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
                <span>Patient Appointments</span>
                {/* <h2>Our Medical Services</h2> */}
              </div>
            </div>
          </div>




          <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Treatment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">Patient_name:</label>
                      <select class="border border-dark input-style" name="pat_name" onChange={(e) => handleinput(e)}>
                        <option>---Select---</option>
                        {
                          state.map((item) => {
                            return (
                              <option onChange={(e) => Text(e, 'name')} value={item.id}>{item.pat_name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">Timing</label>
                      <select class="border border-dark input-style" name="timing" onChange={(e) => handleinput(e)}>
                        <option>---Select---</option>
                        {
                          state.map((item) => {
                            return (
                              <option onChange={(e) => Text(e, 'name')} value={item.id}>{item.timing}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">Symptoms:</label>
                      <select class="border border-dark input-style" name="symptoms" onChange={(e) => handleinput(e)}>
                        <option>---Select---</option>
                        {
                          state.map((item) => {
                            return (
                              <option onChange={(e) => Text(e, 'name')} value={item.id}>{item.symptoms}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={(e) => handleclick(e)}>Register</button>
                </div>
              </div>
            </div>
          </div>

          <table class="table table-hover">
            <thead>
              <tr>
                <th scope='row'>Pat_Name</th>
                <th scope='row'>Timing</th>
                <th scope='row'>symptoms</th>

              </tr>
            </thead>
            <tbody>
              {state.map((res) => {
                return (
                  <tr>
                    <td>{res.pat_name}</td>
                    <td>{res.timing}</td>
                    <td>{res.symptoms}</td>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Insert</button>
                    <button type="button" class="btn btn-danger" onClick={() => handledelete(res.id)}>Delete</button>
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

export default Appointment;