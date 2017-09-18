import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as studentTodoAction from '../../actions/todo_student';
import StudentAssg from './StudentAssg';

const Overdue = (props) => {
  let overdueList = props.overdue.map(studentTodo => <StudentAssg key={studentTodo.id} studentTodo={studentTodo} />);
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Overdue</h3>
      </div>
      <div className="panel-body">
        <h4>Overdue Assignments</h4>
        <table className="table table-striped table-hover ">
          <thead>
            <tr className="danger">
              <th>Cohort</th>
              <th>Due Date</th>
              <th>Student</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            {overdueList}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    studentTodos: state.studentTodos,
    overdue: state.studentTodos.filter(studentTodo => {
      let date_due = new Date(studentTodo.date_due).toLocaleDateString();
      let date_today = new Date().toLocaleDateString();
      return date_today > date_due;
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    studentTodoAction: bindActionCreators(studentTodoAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overdue)
