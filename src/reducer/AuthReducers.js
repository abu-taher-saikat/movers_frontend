import {  ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_REGISTER_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../constants/AuthConstants';



/**
 * 
 * admin Register reducer
 */
export const adminRegisterReducer = (state = {user : []}, action) => {
    switch(action.type){
        case ADMIN_REGISTER_REQUEST :
                return { loading : true, user : []}
        case ADMIN_REGISTER_SUCCESS:
                return {loading : false, user : action.payload} 
        case ADMIN_REGISTER_FAIL:
                return {loading : false, error : action.payload }
        default :
                return state
    }
}


/**
 * 
 * admin lOGIN reducer
 */
export const adminLoginReducer = (state = {user : []}, action) => {
    switch(action.type){
        case ADMIN_LOGIN_REQUEST :
                return { loading : true, user : []}
        case ADMIN_LOGIN_SUCCESS:
                return {loading : false, user : action.payload} 
        case ADMIN_LOGIN_FAIL:
                return {loading : false, error : action.payload }
        default :
                return state
    }
}