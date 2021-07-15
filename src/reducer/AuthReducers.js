import {  ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_REGISTER_FAIL } from '../constants/AuthConstants';



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