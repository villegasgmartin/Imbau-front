/* eslint-disable no-unused-vars */

import {
  POST_ADMIN,
  GET_USERS,
  LOGIN_USER,
  PUT_USER_DATA,
  DELETE_USER,
  GET_USER_BY_ID,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_ALL_SERVICES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  COMPRAR_PRODUCTO
  
} from "./actions";

let initialState = {
  loggedUser: {},
  allUsers: [],
  userData: {},
  allProducts: [],
  allServices: [],
  productById: {},
  cartItems: [],
  buymplink: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case LOGIN_USER:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.usuario.nombre);
      localStorage.setItem("userId", action.payload.usuario.uid);
      localStorage.setItem("rol", action.payload.usuario.rol);
      return {
        ...state,
        loggedUser: action.payload,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        userData: action.payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productById: action.payload,
      };

    case GET_ALL_SERVICES:
      return {
        ...state,
        allServices: action.payload,
      };
    case ADD_TO_CART:
      console.log(state.cartItems, 'cartred');
      
      // Verifica si el producto ya está en el carrito
      const existItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existItem) {
        // Si ya está, actualiza la cantidad
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === existItem._id ? action.payload : item
          ),
        };
      } else {
        // Si no está, lo agrega
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    case COMPRAR_PRODUCTO: 
    return{
      ...state,
      buymplink: action.payload
    }

    default:
      return state;
  }
}

export default rootReducer;
