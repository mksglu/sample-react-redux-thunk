import * as constants from '../constants'

const initialState = {
    data: {},
    isLoading : false,
    isLoggedIn : false,
    error : false
}

export default function loginReducer(state = initialState, {
    type,
    payload
}) {
    switch (type){
        case constants.USER_LOGGING_IN:
            return {
                ...state,
                isLoading: true
            }
            break
        case constants.USER_LOGGED_IN:
            return {
                ...state,
                data: payload,
                isLoggedIn: true
            }
            break
        default:
            return initialState
    }
}



const store = {
    auth: {
        data: null,isloading: false
    }
}