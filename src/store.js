import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {adminRegisterReducer,adminLoginReducer} from './reducer/AuthReducers'


const reducer = combineReducers({
    register : adminRegisterReducer,
    login : adminLoginReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;