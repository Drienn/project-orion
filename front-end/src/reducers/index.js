import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import todos from './todo';
import studentTodos from './todo_student';

const rootReducer = combineReducers({
  todos,
  studentTodos,
  form: formReducer
});

export default rootReducer;
