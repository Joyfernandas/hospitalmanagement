import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from './Navbar';






function Userregistration() {
  const [input, setinput] = useState({})
  console.log(input)

  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ]

  const handleinput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })

  }

  const handlesubmit = (e) => {
    Swal.fire('congrats...', 'your appointment has registered successfully!', 'our employee team will cantact you soon')
    console.log("=============================", e)
    axios.post('/api/Patient/', input)
      .then((response) => {
        console("----------", response)


      })
  }

  return (
    <>

      <Navbar />
      <section className="vh-300 bg-image" style={{ backgroundImage: 'url("assets/img/gallery/department_man.png")' }}>
        <div className="mask d-flex align-items-center h-200 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Appointment Registration</h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">Name</label>
                        <input type="text" name='name' id="form3Example1cg" className="form-control form-control-lg" onChange={handleinput} />


                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Dob</label>
                          <input type="Date" name='dob' id="form3Example3cg" className="form-control form-control-lg" onChange={handleinput} />

                        </div>
                        {/* <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Gender</label>
                          <Select value={input} options={options} onChange={handleinput}></Select>

                        </div> */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Address</label>
                          <input type="text" id="form3Example3cg" name="address" className="form-control form-control-lg" onChange={handleinput} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Mobile</label>
                          <input type="text" id="form3Example3cg" name="mobile" className="form-control form-control-lg" onChange={handleinput} />

                        </div>

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Aadhar</label>
                        <input type="number" id="form3Example3cg" name="aadhar" className="form-control form-control-lg" onChange={handleinput} />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                        <input type="email" id="form3Example3cg" name="email" className="form-control form-control-lg" onChange={handleinput} />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input type="password" id="form3Example4cg" name="password" className="form-control form-control-lg" onChange={handleinput} />

                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handlesubmit}>Register</button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/adminlogin" className="fw-bold text-body"><u>Login here</u></Link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Userregistration;