import axios from 'axios';

import { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/constants';


export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWU4NmNmODc0ODJlMDAxN2QyZTY2NSIsImlhdCI6MTYzNjYzMjM2NCwiZXhwIjoxNjM5MjI0MzY0fQ.RFDOaR0Fd24UyTeMctlAG4FG8XoP91AxHVcOEOdOfo0`,
      },
    };

    const { data } = await axios.get('http://localhost:4000/api/user/accounts', config);

    console.log(data, 'data');

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
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
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};