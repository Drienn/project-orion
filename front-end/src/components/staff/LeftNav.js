import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = (props) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">
          Go To...
        </h3>
      </div>
      <div className="panel-body">
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/gradebook">Gradebook</Link></li>
          <li><Link to="/assignments">Assignments</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftNav;
