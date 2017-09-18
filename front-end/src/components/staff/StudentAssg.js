import React from 'react';

const StudentAssg = (props) => {
  return (
    <tr>
      <td>g54</td>
      <td>{new Date(props.studentTodo.date_due).toLocaleDateString()}</td>
      <td>{props.studentTodo.student_id}</td>
      <td>{props.studentTodo.todo_id}</td>
    </tr>
  )
}

export default StudentAssg;
