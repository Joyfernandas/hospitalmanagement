import React from 'react'
import { Link } from 'react-router-dom';
import Admindashboard from './Admindashboard';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import Swal from 'sweetalert2';
import Select from 'react-select';



function Patientdetails() {

  const [state, setstate] = useState([]);
  const [input, setinput] = useState({});
  console.log(input)
  const [, setApp] = useState([])
  const [, setInput] = useState([]);
  const [data,] = useState([]);
  console.log(data);


  const temp = [{ label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }]


  useEffect(() => {
    axios.get('api/Patient/')
      .then((response) => {
        setstate(response.data)

      })
  }, []);



  const handledelete = (id) => {
    axios.delete(`api/Patient/${id}/`);
    Swal.fire(
      'Deleted!',
      'Success',
      'success'
    )

  };



  const handeSubmit = (e) => {
    axios.post('/api/Patient/', input)
      .then((response) => {

        console.log(response);
        alert("check the value")

      })
  }

  const handleInputChange = (e) => {
    // console.log("----------: ", e)
    // if (e.target.name === "Patient") {
    //   setInput({ ...input, ['Patient']: +e.target.value })
    // } else {
    //   setInput({ ...input, [e.target.name]: e.target.value })
    // }
    setinput({ ...input, [e.target.name]: e.target.value })

  }

  const Submit = () => {

    console.log("-----------------")
    console.log(input)
    console.log("-----------------")
    axios.post('api/Patient/', input)
      .then((res) => {
        setApp(res.data)
      })
    setInput()
  }


  return (
    <>

      <Sidebar />
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle text-center mb-100">
            <span>Patient Details</span>
            {/* <h2>Our Medical Services</h2> */}
          </div>
        </div>
      </div>




      <div class="container" id='table'>
        {/* <p>The .table-bordered class adds borders to a table:</p>*/}

        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Patient</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>

                  <div className="form-group">

                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" name='name' className="form-control" id="recipient-name" />

                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Dob:</label>
                    <input onChange={(e) => handleInputChange(e)} type="date" name='dob' className="form-control" id="recipient-name" />
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Gender:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" name='gender' className="form-control" id="recipient-name" />
                    <Select options={temp} />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Address:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Mobile:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="mobile" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Aadhar:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="aadhar" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">password:</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="password" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handeSubmit}>Register</button>





              </div>
            </div>
          </div>
        </div>




        <table class="table table-hover">
          <thead>
            <tr>
              {/* <th scope='row'>Patient_name</th> */}
              <th scope='row'>Name</th>
              <th scope='row'>Dob</th>
              {/* <th scope='row'>Gender</th> */}
              <th scope='row'>Address</th>
              <th scope='row'>Mobile</th>
              <th scope='row'>Aadhar</th>
              <th scope='row'>Email</th>
              <th scope='row'>Password</th>


            </tr>
          </thead>
          <tbody>

            {state.map((i) => {
              return (
                <tr>

                  <td>{i.name}</td>
                  <td>{i.dob}</td>
                  {/* <td>{i.gender}</td> */}
                  <td>{i.address}</td>
                  <td>{i.mobile}</td>
                  <td>{i.aadhar}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Insert</button>
                  <button type="button" class="btn btn-danger" onClick={() => handledelete(i.id)}>Delete</button>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    </>
  )
}

export default Patientdetails;