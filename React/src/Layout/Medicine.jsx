import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './sidebar';

function Medicine() {
   const [state, setstate] = useState([]);


useEffect(() => {
  axios.get('api/Medicine/')      
.then((response) => {
 setstate(response.data)

})
}, []);

return (
<>
<Sidebar/>
<div className="row">
      <div className="col-lg-12">
        <div className="section-tittle text-center mb-100">
          <span>Medicine</span>
          <h2>Our Medical Services</h2>
        </div>
      </div>
    </div>
<div class="container" id='table'>
{/* <p>The .table-bordered class adds borders to a table:</p>*/}



<table class="table table-hover">
<thead>
  <tr>
    <th scope='row'>Patient_name</th>
    <th scope='row'>Mdicine_type</th>
    <th scope='row'>Medicine_name</th>
    <th scope='row'>Limit</th>
  
  </tr>
</thead>
<tbody>
  {state.map((res)=>{
    return(
      <tr>
    <td>{res.patient_name}</td>
    <td>{res.med_type}</td>
    <td>{res.med_name}</td>
    <td>{res.limit}</td>
  </tr>
    )
  })}
</tbody>
</table>
</div>
   </>
  )
}

export default Medicine