import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import Select from 'react-select';


function Treatment() {

  const [state, setstate] = useState([]);
  const [input, setInput] = useState([])
  const [Doc, setDoc] = useState([]);
  const [App, setApp] = useState([])
  const [data, setdaata] = useState([]);

  useEffect(() => {
    axios.get('api/Treatment/')
      .then((response) => {
        setstate(response.data)

      })

    axios.get('api/Doctor/')
      .then((res) => {
        setDoc(res.data)
      })

    axios.get('api/Patient/')
      .then((res) => {
        setApp(res.data)
      })

  }, []);

  const dt = () => {
    axios.get('api/Treatment/')
      .then((response) => {
        setstate(response.data)

      })
  }

  const handledelete = (id) => {
    axios.delete(`/api/Treatment/${id}/`);
    dt();
    Swal.fire(
      'Deleted!',
      'Success',
      'success'
    )

  };
  const handleInputChange = (e) => {
    // console.log("----------: ", e)
    if (e.target.name === "appointment") {
      setInput({ ...input, ['appointment']: +e.target.value })
    } else {
      setInput({ ...input, [e.target.name]: e.target.value })
    }

  }

  const Submit = () => {
    let temp = data.id
    console.log("-----------------")
    console.log(input)
    console.log("-----------------")
    axios.post('api/Treatment/', input)
      .then((res) => {
        setApp(res.data)
      })
    setInput()
  }

  const Text = (e) => {

    setdaata(e)

  }




  // function handleclick() {
  //   axios.post("api/Treatment/")
  //     .then((response) => {
  //       setType(response.data)
  //       Swal.fire(
  //         'Registered!',
  //         'Success',
  //         'success'
  //       )
  //       getinput()
  //     }

  //     )
  // }


  return (
    <>
      <Sidebar />

      <div className="row">

        <div className="col-lg-12">
          <div className="section-tittle text-center mb-100">
            <span>Treatment</span>
            <h2>Our Medical Services</h2>

          </div>

        </div>
      </div>

      <div class="container" id='table'>
        {/* <p>The .table-bordered class adds borders to a table:</p>*/}

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

                    <label htmlFor="recipient-name" className="col-form-label">Doctor:</label>
                    <Select onChange={handleInputChange} getOptionLabel={(option) => option.doctor_name} getOptionValue={option => option.id} />
                    <select class="border border-dark input-style" onChange={handleInputChange} name="doctor_name">
                      <option>---Select---</option>
                      {
                        Doc.map((item) => {
                          return (
                            <option onChange={(e) => Text(e, 'name')} value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Appointments:</label>
                    <Select onChange={handleInputChange} getOptionLabel={(option) => option.appointment} getOptionValue={option => option.id} />
                    <select onChange={handleInputChange} class="border border-dark input-style" name="appointment">
                      <option>---Select---</option>
                      {
                        App?.map((item) => {
                          return (
                            <option value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Treatment_date:</label>
                    <input onChange={handleInputChange} type="date" name='treatment_date' className="form-control" id="recipient-name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Treatment_Name:</label>
                    <input onChange={handleInputChange} type="text" className="form-control" id="recipient-name" name="treatment_name" />
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={Submit}>Register</button>





              </div>
            </div>
          </div>
        </div>



        <table class="table table-hover">
          <thead>
            <tr>
              {/* <th scope='row'>Patient_name</th> */}
              <th scope='row'>Doctor_name</th>
              <th scope='row'>Appointments</th>
              <th scope='row'>Treatment_date</th>
              <th scope='row'>Treatment_Name</th>

            </tr>
          </thead>
          <tbody>

            {state.map((i) => {
              return (
                <tr>

                  <td>{i.doctor_name}</td>
                  <td>{i.appointment}</td>
                  <td>{i.treatment_date}</td>
                  <td>{i.treatment_name}</td>
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


export default Treatment;