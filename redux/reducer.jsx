/* eslint-disable no-unused-vars */
import { POST_ADMIN, GET_USERS, LOGIN_USER, PUT_USER_DATA, DELETE_USER,GET_USER_BY_ID} from './actions'
let initialState = {loggedUser: {}, allUsers:[], userData:{}}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
			return {
				...state,
				allUsers: action.payload
			};
           case LOGIN_USER:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('username', action.payload.usuario.nombre);         
            localStorage.setItem('userId', action.payload.usuario.uid) 
            localStorage.setItem('rol', action.payload.usuario.rol);
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