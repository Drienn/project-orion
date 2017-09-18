import React from 'react'

const AlmostDue = (props) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Almost Due</h3>
      </div>
      <div className="panel-body">
        <h4>Assignments Due in a Week</h4>
        <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>Cohort</th>
              <th>Due Date</th>
              <th>Student</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="panel-body">
        <h4>Assignments Due in Two Weeks</h4>
        <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>Cohort</th>
              <th>Due Date</th>
              <th>Student</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AlmostDue
