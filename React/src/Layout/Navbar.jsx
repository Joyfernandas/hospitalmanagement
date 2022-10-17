import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
           
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/doctor">specialist</Link></li>
                      <li><Link to="/department">Department</Link></li>
                      <li><Link to="/employee">Employee</Link>
                        <ul className="submenu">

                        </ul>
                      </li>
                      <li><Link to="/userregistration">USER</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-btn f-right d-none d-lg-block ml-30">
                  <Link to="/adminlogin" className="btn header-btn"> Login</Link>
                </div>
              </div>
            </div>  
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Navbar;