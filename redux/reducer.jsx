/* eslint-disable no-unused-vars */

import { POST_ADMIN, GET_USERS, LOGIN_USER, PUT_USER_DATA, DELETE_USER,GET_USER_BY_ID, GET_ALL_PRODUCTS,GET_PRODUCT_BY_ID, GET_ALL_SERVICES} from './actions'
let initialState = {loggedUser: {}, allUsers:[], userData:{},allProducts:[], allServices: [], productById:{}}

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
                    ...state,
                    userData: action.payload
                }
            case GET_ALL_PRODUCTS: 
                return{
                    ...state,
                    allProducts: action.payload
                }    
            case GET_PRODUCT_BY_ID:
                return{
                    ...state,
                    productById:action.payload
                }    
                case GET_ALL_SERVICES: 
                return{
                    ...state,
                    allServices: action.payload
                }  
            default : return state

        
    }
}

export default rootReducer;