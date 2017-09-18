let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'TODO_PENDING':
      return state;
    case 'TODO_FULFILLED':
      return [...action.payload.data];
    case 'TODO_REJECTED':
      return state;

    default:
      return state;

  }

}
