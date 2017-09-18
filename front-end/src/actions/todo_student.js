import axios from 'axios';

const api_url = 'http://localhost:8000';

export const fetchStudentAssignments = () => {
  return ({
    type: 'TODO_STUDENT',
    payload: axios.get(`${api_url}/staff/student_todo`)
  });
};
