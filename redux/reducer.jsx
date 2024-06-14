/* eslint-disable no-unused-vars */
import {POST_VENDEDOR, POST_COMPRADOR, POST_PRESTADOR, POST_ADMIN, GET_USERS, LOGIN_USER, PUT_USER_DATA, DELETE_USER,GET_USER_BY_ID} from './actions'
let initialState = {loggedUser: {}, allUsers:[], userData:{}}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
			return {
				...state,
				allUsers: action.payload
			};
           case LOGIN_USER:
            return{
                ...state,
                loggedUser: action.payload
            } 
            case GET_USER_BY_ID:
                return{
                    userData: action.payload
                }
            default : return state

        
    }
}

export default rootReducer;