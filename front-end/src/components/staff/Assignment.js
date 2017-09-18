import React from 'react';

const Assignment = (props) => {
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.name}</td>
      <td>{props.todo.description}</td>
      <td>
        <a className="btn btn-success btn-sm">Edit</a> &nbsp;
        <a className="btn btn-success btn-sm">Delete</a>
      </td>
    </tr>
  )
}

export default Assignment;
