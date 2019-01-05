import { combineReducers } from 'redux';
import books from './books_reducer';
import users from './users_reducer';

const rootReducer = combineReducers({
  books,
  users
});

export default rootReducer;
