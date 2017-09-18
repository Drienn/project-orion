import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">
          Welcome, <br />
          Maria Montoya
        </h3>
      </div>
      <div className="panel-body">
        <Link to='/profile'>
        <img alt="profile" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA2NAAAAJDdjYmUzZmQ3LTlkNDQtNGNmMC1hMzZiLWY2MTY3NTg0YmRhNQ.jpg" width="135" />
        </Link>
      </div>
    </div>
  )
}

export default Welcome;
