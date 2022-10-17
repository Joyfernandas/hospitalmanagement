import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card';
function Sidebar() {
  return (
    <>

      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="/afdagsg" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-hashtag me-2" />Welcome Admin</h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt style={{ width: 40, height: 40 }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Joy Fernandas</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/Card" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Patient</Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="/patientdetails" className="dropdown-item">Patient Details</Link>
                <Link to="/appointment" className="dropdown-item">Patient Appointment</Link>

                <Link to="/Treatment" className="dropdown-item">Patient Treatment</Link>
                <Link to="/Discharge" className="dropdown-item">Patient Discharge</Link>
              </div>
            </div>
            <Link to="/doctorstable" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Doctors</Link>
            <Link to="/Medicine" className="nav-item nav-link"><i className="fa fa-th me-2" />Medicine</Link>
            <Link to="/Payment" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Payment</Link>
            <Link to="table" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</Link>

            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="signin" className="dropdown-item">Sign In</Link>
                <Link to="signup" className="dropdown-item">Sign Up</Link>
                <Link to="404" className="dropdown-item">404 Error</Link>
                <Link to="blank" className="dropdown-item">Blank Page</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}

    </>
  )
}

export default Sidebar