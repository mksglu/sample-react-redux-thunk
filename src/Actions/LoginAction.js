import * as constants from '../constants'
import axios from 'axios'

function userLoginRequest() {
  return {
    type: constants.USER_LOGGING_IN
  }
}

function userLoggedIn(data) {
  return {
    type: constants.USER_LOGGED_IN,
    payload: data
  }
}
export const login = data => dispatch => {
  dispatch(userLoginRequest())
  return new Promise((resolve, reject) => {
    /*axios.post('apiurl',{
            data: {
                username : data.username,
                password : data.password
            }
        }).then((user) => {
            dispatch({
                type: constants.USER_LOGGED_IN,
                payload: user
            })
        })*/
    setTimeout(() => {
      dispatch(userLoggedIn({ username: 'Mert' }))
    }, 2000)
    resolve()
  })
}
