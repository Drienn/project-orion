import React, { Component } from 'react';

import Overdue from './Overdue';
import AlmostDue from './AlmostDue';

class Home extends Component {

  // constructor() {
  //   super();
  // }

  render () {
    return (
      <div className="row">
        <Overdue />
        <AlmostDue />
      </div>
    )
  }

}

export default Home;
