import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  USER_LIST_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  USER_LOGOUT,
  GET_USER_RESET,
} from '../constants/constants';


export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const getUserReducer = (state = { user : {}}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    case GET_USER_RESET:
      return {user : {}}
    default:
      return state;
  }
};

export const userRegisterReducer = (state = { userRegister: {} }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userRegister: action.payload, success : true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateUserReducer = (state = { }, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_SUCCESS:
      return { loading: false, userInfo: action.payload,  success : true };
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_USER_RESET:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {} , action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo : action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

