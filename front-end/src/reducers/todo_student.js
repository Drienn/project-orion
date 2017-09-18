let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'TODO_STUDENT_PENDING':
      return state;
    case 'TODO_STUDENT_FULFILLED':
      return [...action.payload.data];
    case 'TODO_STUDENT_REJECTED':
      return state;

    default:
      return state;

  }

}
