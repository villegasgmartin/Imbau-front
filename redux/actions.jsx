const url = 'http://localhost:8080';
import axios from 'axios';

export const REGISTER = 'REGISTER'
export const POST_ADMIN = 'POST_ADMIN'
export const GET_USERS = 'GET_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT = 'LOGOUT'
export const PUT_USER_DATA = 'PUT_USER_DATA'
export const DELETE_USER = 'DELETE_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'

// Funciones para crear tipos de usuarios
export function register(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/login`, payload);			
			return dispatch({
				type: REGISTER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}




// Funcion para iniciar sesion
export function loginUser(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/auth/login`, payload);
			window.location.href='/'
			return dispatch({
				type: LOGIN_USER,
				payload: info.data
			})

		} catch (error) {
			console.log(error);
		}
	};
}

export function logout(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/auth/logout`, payload);
			localStorage.removeItem('token')
            localStorage.removeItem('username');         
            localStorage.removeItem('userId') 
            localStorage.removeItem('rol');
			return dispatch({
				type: LOGOUT,
				payload: info.data
			})

		} catch (error) {
			console.log(error);
		}
	};
}

//Funcion para traer a todos los usuarios 
export function getUsers() {
	return async function (dispatch) {
		try {
			const info = await axios.get(`${url}/api/users`);
			return dispatch({
				type: GET_USERS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Funcion para modificar los datos de un usuario
export function putUserData(id, payload) {
	return async function (dispatch) {
		try {
			const info = await axios.put(`${url}/api?id${id}`, payload);
			return dispatch({
				type: PUT_USER_DATA,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Funcion para borrar usuarios
export function deleteUser(id, payload) {
	return async function (dispatch) {
		try {
			const info = await axios.delete(`${url}/api?id${id}`, payload);
			return dispatch({
				type: DELETE_USER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Funcion para obtener los datos de un usuario
export function getUserById(id) {
	return async function (dispatch) {
		try {
			const token = localStorage.getItem('token'); // Obtén el token almacenado en localStorage
			console.log(token, 'token');
			const headers = {
				'x-token': token
			};
			axios
				.get(`${url}/api/perfil?id=${id}`, {
					headers
				})
				.then((response) => {
					return dispatch({
						type: GET_USER_BY_ID,
						payload: response.data
					});
				});
		} catch (error) {
			console.log(error);
		}
	};
}

// Funcion para obtener todos los productos
export function getAllProducts() {
	return async function (dispatch) {
		try {
			const info = await axios.get(`${url}/api/products/productos`);
			return dispatch({
				type: GET_ALL_PRODUCTS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}


export function getProductById(id){
	return async function (dispatch){
		try {
			const info = await axios.get(`${url}/api/products/producto?id=${id}`)
			return dispatch({
				type:GET_PRODUCT_BY_ID,
				payload:info.data
			})
		} catch (error) {
			console.log(error);
			
		}
	}
}
// Funcion para obtener todos los productos
export function getAllServices() {
	return async function (dispatch) {
		try {
			const info = await axios.get(`${url}/api/products/servicios`);
			return dispatch({
				type: GET_ALL_SERVICES,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}