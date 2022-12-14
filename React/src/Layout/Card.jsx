import React from "react";
import Sidebar from "./sidebar";
function Card() {
  return (
    <>
      <Sidebar />
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-light rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Calender</h6>
            <a href>Show All</a>
          </div>
          <div id="calender" />
        </div>
      </div>

      {/* Sale & Revenue Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-line fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Today Sale</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-bar fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Total Sale</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-area fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Today Revenue</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-pie fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Total Revenue</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale & Revenue End */}

      {/* Recent Sales Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Salse</h6>
            <a href>Show All</a>
          </div>
          <div className="table-responsive">
            <table className="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr className="text-dark">
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col">Date</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href>
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href>
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href>
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href>
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href>
                      Detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Recent Sales End */}
    </>
  );
}

export default Card;
