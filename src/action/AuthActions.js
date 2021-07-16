import axios from 'axios'
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_REGISTER_FAIL, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS } from '../constants/AuthConstants';

const server_url = process.env.REACT_APP_SERVER_URL;

// Register user Action
export const register = ({fullName, email, password, role, phone }) => async (dispatch) => {

  console.log(fullName, email, password, role, phone);
    try {
      dispatch({
        type: ADMIN_REGISTER_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
  
      const { data } = await axios.post(`${server_url}/api/v1/auth/register` ,
        {fullName, email, password, role, phone},
        config
      )
  
      dispatch({
        type: ADMIN_REGISTER_SUCCESS,
        payload: data,
      })


      // localStorage.setItem('userInfo', JSON.stringify(data));
      
    } catch (error) {
      // console.log('error' , error.response)
      // console.log('action error' , error.response.data.error)
      dispatch({
        type: ADMIN_REGISTER_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message
      })
    }
  }




  
// Login user Action
export const login = ({ email, password}) => async (dispatch) => {

    try {
      dispatch({
        type: ADMIN_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
  
      const { data } = await axios.post(`${server_url}/api/v1/auth/login` ,
        {email, password},
        config
      )
  
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: data,
      })


      localStorage.setItem('userLoginInfo', JSON.stringify(data));
      
    } catch (error) {

      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message
      })
    }
  }
