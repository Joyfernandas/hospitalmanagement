import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import axios from 'axios';

function Adminlogin({ test }) {
  const [Username, setUsername] = useState('');
  console.log(Username)

  const [Password, setPassword] = useState('');
  console.log(Password)
  const navigate = useNavigate();

  function onhandleevent(event) {
    axios.post('api/token/', { "email": Username, "password": Password })
      .then(response => {
        console.log(response)
        if (response?.status === 200) {
          test(true);
          // axios.defaults.headers['X-CSRFToken'] = response?.data?.access
          axios.defaults.headers['Authorization'] = `JWT ${response?.data?.access}`
          localStorage.setItem('access', response?.data?.access)
          navigate('/admindashboard')
        }
        else {
          navigate(`/'${response?.data?.id - 1}`)
        }
      })
      .catch(error => {
        alert(error?.response.data.detail)
      })
  }


  return (
    <>
      {/* Sign In Start */}
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" className>
                  <h3 className="text-primary"><i className="fa fa-hashtag me-2" />ADMIN</h3>
                </a>
                <h3>Sign In</h3>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setUsername(e.target.value) }} />
                <label htmlFor="floatingInput">username</label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <a href>Forgot Password</a>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={onhandleevent}>Sign In</button>
              <p className="text-center mb-0">Don't have an Account? <a href>Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}

    </>
  )
}

export default Adminlogin;