import { combineReducers, createStore } from 'redux';
import toDoList from  './reducers/toDoList';

const reducer = combineReducers({ toDoList });
const store = createStore( reducer );

export default store;
