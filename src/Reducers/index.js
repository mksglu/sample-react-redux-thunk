import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'

const RootReducer = combineReducers({
    auth : LoginReducer,
    //Register: RegisterReducer
})

export default RootReducer