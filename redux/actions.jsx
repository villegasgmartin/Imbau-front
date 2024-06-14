const url = 'http://localhost:8080';
import axios from 'axios';

export const POST_VENDEDOR = 'POST_VENDEDOR'
export const POST_COMPRADOR = 'POST_COMPRADOR';
export const POST_PRESTADOR = 'POST_PRESTADOR';
export const POST_ADMIN = 'POST_ADMIN'
export const GET_USERS = 'GET_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const PUT_USER_DATA = 'PUT_USER_DATA'
export const DELETE_USER = 'DELETE_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';

// Funciones para crear tipos de usuarios
export function postVendedor(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/new-seller`, payload);			
			return dispatch({
				type: POST_VENDEDOR,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function postComprador(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/new-buyer`, payload);
			return dispatch({
				type: POST_COMPRADOR,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function postPrestador(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`${url}/api/new-service`, payload);
			return dispatch({
				type: POST_PRESTADOR,
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
			return dispatch({
				type: LOGIN_USER,
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
