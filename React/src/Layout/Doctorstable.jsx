import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

function Doctorstable() {

    const [Input, setInput] = useState([]);
    const [state, setstate] = useState([]);
    const [app, setApp] = useState([])

    console.log(Input)

    useEffect(() => {
        getinput()
    }, []);


    const getinput = () => {
        axios.get('api/Doctor/')
            .then((response) => {
                setstate(response.data)

            })

    }
    const handleInputChange = (e) => {
        // console.log("----------: ", e)
        if (e.target.name === "Doctor") {
            setInput({ ...Input, ['Doctor']: +e.target.value })
        } else {
            setInput({ ...Input, [e.target.name]: e.target.value })
        }

    }
    const Submit = () => {

        console.log("-----------------")
        axios.post('api/Doctor/', Input)
            .then((res) => {
                setApp(res.data)
            })
        setInput()
    }
    return (
        <>
            <Sidebar />

            {/* Section Tittle */}
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-tittle text-center mb-50">
                        <span>Our Doctors</span>
                    </div>
                </div>

                <div class="container" id='table'>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Doctor</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>

                                        <div className="form-group">

                                            <label htmlFor="recipient-name" className="col-form-label">Doctor:</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name='name' className="form-control" id="recipient-name" />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">age:</label>
                                            <input onChange={(e) => handleInputChange(e)} type="number" name='age' className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Mobile:</label>
                                            <input onChange={(e) => handleInputChange(e)} type="number" name='mobile' className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Address:</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="address" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Experience:</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" className="form-control" id="recipient-name" name="experience" />
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
                    {/* <p>The .table-bordered class adds borders to a table:</p>*/}
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                {/* <th scope='row'>Patient_name</th> */}
                                <th scope='row'>Doctor_name</th>
                                <th scope='row'>Age</th>
                                <th scope='row'>Mobile</th>
                                <th scope='row'>Address</th>
                                <th scope='row'>Experience</th>

                            </tr>
                        </thead>
                        <tbody>
                            {state.map((res) => {
                                return (
                                    <tr>

                                        <td>{res.name}</td>
                                        <td>{res.age}</td>
                                        <td>{res.mobile}</td>
                                        <td>{res.address}</td>
                                        <td>{res.experience}</td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Insert</button>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default Doctorstable