import { createStore } from 'redux';
import todo_reducer from './reducers/todo_reducer';

export default createStore(todo_reducer);