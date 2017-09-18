import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todo';
import Assignment from './Assignment';
import AssignmentForm from './AssignmentForm';

class Assignments extends Component {

  constructor() {
    super();
    this.state = {
      isAddNew: false
    };
  }

  toggleAddForm() {
    this.setState({
      isAddNew: !this.state.isAddNew
    });
  }

  handleAddSubmit(values) {
    console.log('In handleAddSubmit >> values=', values);
  }

  render () {

    let assignmentList = this.props.todos.map(todo => <Assignment key={todo.id} todo={todo} />);

    return (
      <div>
        <a onClick={this.toggleAddForm.bind(this)} className="btn btn-primary">Add a New Assignment</a>
        {this.state.isAddNew ?
          <div>
            <hr />
            <AssignmentForm onSubmit={this.handleAddSubmit} />
          </div> :
          <div></div>
        }
        <hr />
        <h4>Manage Assignments</h4>
        <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assignmentList}
          </tbody>
        </table>
      </div>
    )

  }

}

function mapStateToProps(state, props) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignments)
