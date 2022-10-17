
import './App.css';
// import Navbar from './Layout/Navbar';
// import Blog from './Layout/blog';
import About from './Layout/About';
import Department from './Layout/Department';
import Index from './Layout/Index';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Doctor from './Layout/Doctor';
import Adminlogin from './Layout/Adminlogin';
import Contact from './Layout/Contact';
import Admindashboard from './Layout/Admindashboard';
import Adminform from './Layout/Adminform';
import Employee from './Layout/Employee';
import Employeelogin from './Layout/Employeelogin';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import Patientdetails from './Layout/patientdetails';
import Card from './Layout/Card';
import Appointment from './Layout/Appointment';
import Treatment from './Layout/Treatment';
import Discharge from './Layout/Discharge';
import Medicine from './Layout/Medicine';
import Userregistration from './Layout/Userregistration';
import Payment from './Layout/Payment';
import Doctorstable from './Layout/Doctorstable';
// import Loginform from './Layout/loginform';

function App() {

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const PrivateRoute = () => {
    return (
      auth ?
        <Outlet /> : <Navigate to='/adminlogin' />
    )
  }
  useLayoutEffect(() => {
    async function getDatas() {
      try {
        let temp = localStorage.getItem('access')
        if (temp !== null) {
          axios.defaults.headers['Authorization'] = 'JWT ' + temp;
          setAuth(true);
        }
        else { setAuth(false) }

      } finally { setLoading(false) }

    }
    getDatas();
  }, [])
  if (loading) return (<></>)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/userregistration" element={<Userregistration />} />
        <Route path="/adminlogin" element={<Adminlogin test={setAuth} />} />
        <Route element={<PrivateRoute />}>

          <Route path="/department" element={<Department />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorstable" element={<Doctorstable />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/card" element={<Card />} />

          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/discharge" element={<Discharge />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/patientdetails" element={<Patientdetails />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
          <Route path="/Payment" element={<Payment />} />
        </Route>

        {/* <Route path="/loginform" element={<Loginform/>}/> */}
        {/* <Index/> */}
        {/* <Department/>
 <Blog />
  <About/>
  */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
