import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userRegisterReducer, getUserReducer, updateUserReducer } from '../reducers/reducers';


const reducer = combineReducers({
  userList: userListReducer,
  user: userRegisterReducer,
  userDetails: getUserReducer,
  userInfo: updateUserReducer,
});


const initialState = { };

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;