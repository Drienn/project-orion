import axios from 'axios';

const api_url = 'http://localhost:8000';

export const fetchAssignments = () => {
  return ({
    type: 'TODO',
    payload: axios.get(`${api_url}/staff/todo`)
  });
};
