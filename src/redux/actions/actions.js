import axios from 'axios';

import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_UPDATE_RESET,
  GET_USER_RESET,
  USER_LIST_RESET,
  USER_LOGOUT,
} from '../constants/constants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:4000/api/auth/login/admin', { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userLoginDetails', JSON.stringify(data));
  } catch (error) {

    console.log(error.response, "error")
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.error,
    });
  }
};

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    console.log("jjvbdhmvhdbbvdvd")

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWU4NmNmODc0ODJlMDAxN2QyZTY2NSIsImlhdCI6MTYzNjYzMjM2NCwiZXhwIjoxNjM5MjI0MzY0fQ.RFDOaR0Fd24UyTeMctlAG4FG8XoP91AxHVcOEOdOfo0`,
      },
    };

    const { data } = await axios.get('http://localhost:4000/api/user/accounts', config);


    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.error,
    });
  }
};

export const getUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });

    let id = '5f1e86cf87482e0017d2e665';

    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWU4NmNmODc0ODJlMDAxN2QyZTY2NSIsImlhdCI6MTYzNjYzMjM2NCwiZXhwIjoxNjM5MjI0MzY0fQ.RFDOaR0Fd24UyTeMctlAG4FG8XoP91AxHVcOEOdOfo0`,
      },
    };

    console.log(id, "jvdhdvdbcd")

    const { data } = await axios.get(`http://localhost:4000/api/user/profile/${id}`, config);

    console.log(data, 'data');

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.error,
    });
  }
};

export const register = (first_name, last_name, brand_name, email, password, confirm_password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    console.log(first_name, last_name, brand_name);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWU4NmNmODc0ODJlMDAxN2QyZTY2NSIsImlhdCI6MTYzNjYzMjM2NCwiZXhwIjoxNjM5MjI0MzY0fQ.RFDOaR0Fd24UyTeMctlAG4FG8XoP91AxHVcOEOdOfo0`,
      },
    };

    const { data } = await axios.post(
      'http://localhost:4000/api/user/create_account',
      { first_name, last_name, brand_name, email, password, confirm_password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    console.log(data, "console.loe(data")

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.error,
    });
  }
};

export const updateUserProfile = (first_name, last_name, email, password, confirm_password) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    console.log(first_name, last_name,);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWU4NmNmODc0ODJlMDAxN2QyZTY2NSIsImlhdCI6MTYzNjYzMjM2NCwiZXhwIjoxNjM5MjI0MzY0fQ.RFDOaR0Fd24UyTeMctlAG4FG8XoP91AxHVcOEOdOfo0`,
      },
    };

    const { data } = await axios.post(
      'http://localhost:4000/api/user/create_account',
      { first_name, last_name,  email, password, confirm_password },
      config
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });

    console.log(data, 'console.loe(data');
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userLoginDetails');
  localStorage.removeItem('room_name');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: GET_USER_RESET });
  dispatch({ type: USER_LIST_RESET }); 
  dispatch({ type: USER_UPDATE_RESET});
};