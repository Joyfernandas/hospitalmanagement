import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card';
import Sidebar from './sidebar';

function Admindashboard() {
  return (
   <>
   <Sidebar/>
   <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <Link to="/#" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
      </Link>
      <Link to="#" className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars" />
      </Link>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-envelope me-lg-2" />
            <span className="d-none d-lg-inline-flex">Message</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <Link to="#" className="drospdown-item">
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item text-center">See all message</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-bell me-lg-2" />
            <span className="d-none d-lg-inline-flex">Notificatin</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <Link to="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link to="#" className="dropdown-item text-center">See all notifications</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <span className="d-none d-lg-inline-flex">John Doe</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <Link to="#" className="dropdown-item">My Profile</Link>
            <Link to="#" className="dropdown-item">Settings</Link>
            <Link to="#" className="dropdown-item">Log Out</Link>
          </div>
        </div>
      </div>
    </nav>
   <Card/>
     <div className="container-xxl position-relative bg-white d-flex p-0">
  {/* Content Start */}
  <div className="content">

    {/* Navbar Start */}
    
  
  <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></Link>
</div>
</div>
   
   </>
  )
}

export default Admindashboard;