import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import * as todoAction from './actions/todo';
import * as studentTodoAction from './actions/todo_student';

// Staff Components
import Header from './components/staff/Header';
import LeftNav from './components/staff/LeftNav';
import Home from './components/staff/Home';
import Profile from './components/staff/Profile';
import Welcome from './components/staff/Welcome';
import Gradebook from './components/staff/Gradebook';
import Assignments from './components/staff/Assignments';
import Students from './components/staff/Students';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.todoAction.fetchAssignments();
    this.props.studentTodoAction.fetchStudentAssignments();
  }

  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Welcome />
              <LeftNav />
            </div>
            <div className="col-md-10">
              <Route exact path="/" component={Home}/>
              <Route path="/gradebook" component={Gradebook}/>
              <Route path="/assignments" component={Assignments}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/student" component={Students}/>
            </div>
          </div>
        </div>
      </div>
      </Router>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    todoAction: bindActionCreators(todoAction, dispatch),
    studentTodoAction: bindActionCreators(studentTodoAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
