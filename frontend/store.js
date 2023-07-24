import { createStore, combineReducers } from 'redux';
import loginReducer from './loginreducer';
// import rootReducer from './loginreducer'

const store = createStore(loginReducer);

export default store;
