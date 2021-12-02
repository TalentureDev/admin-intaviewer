import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userRegisterReducer, getUserReducer, updateUserReducer, userLoginReducer } from '../reducers/reducers';


const reducer = combineReducers({
  userList: userListReducer,
  user: userRegisterReducer,
  userDetails: getUserReducer,
  userUpdate: updateUserReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userLoginDetails') ? JSON.parse(localStorage.getItem('userLoginDetails')) : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;