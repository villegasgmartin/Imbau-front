const url = 'http://localhost:8080';
import axios from 'axios';

export const REGISTER = 'REGISTER'
export const POST_ADMIN = 'POST_ADMIN'
export const GET_USERS = 'GET_USERS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT = 'LOGOUT'
export const PUT_USER_DATA = 'PUT_USER_DATA'
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_ALL_PRODUCTS1 = "GET_ALL_PRODUCTS1";
export const GET_ALL_PRODUCTS2 = "GET_ALL_PRODUCTS2";
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'
export const POST_PRODUCTO = 'POST_PRODUCTO'
export const POST_SERVICE = 'POST_SERVICE'
export const DELETE_USER = 'DELETE_USER'
export const ACTIVATE_USER = 'ACTIVATE_USER'
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const COMPRAR_PRODUCTO = "COMPRAR_PRODUCTO";
export const GET_COMPRAS_POR_USUARIO = "GET_COMPRAS_POR_USUARIO";
export const GET_VENTAS_POR_USUARIO = "GET_VENTAS_POR_USUARIO";
export const GET_CATEGORIAS = "GET_CATEGORIAS"
export const GET_SUBCATEGORIAS = "GET_SUBCATEGORIAS";
export const POST_CATEGORIAS = "POST_CATEGORIAS";
export const POST_SUBCATEGORIAS = "POST_SUBCATEGORIAS";


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
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .get(`${url}/api/admin/usuarios`, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: GET_USERS,
            payload: response.data,
          });
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

export function getAllProducts1() {
  return async function (dispatch) {
    try {
      const info = await axios.get(`${url}/api/products/productos1`);	
      return dispatch({
        type: GET_ALL_PRODUCTS1,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllProducts2() {
  return async function (dispatch) {
    try {
      const info = await axios.get(`${url}/api/products/productos2`);	
      return dispatch({
        type: GET_ALL_PRODUCTS2,
        payload: info.data,
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

// Funcion para crear producto

export function postProducto(payload) {
	return async function (dispatch) {
		try {
			const token = localStorage.getItem('token'); // Obtén el token almacenado en localStorage
			console.log(token, 'token');
			const headers = {
				'x-token': token
			};
			axios
				.post(`${url}/api/products/new-product`, payload,  {
					headers
				})	
				.then((response) => {
					return dispatch({
						type: POST_PRODUCTO,
						payload: response.data
					});
				});
		} catch (error) {
			console.log(error);
		}
	};
}

// Funcion para crear servicio

export function postServicio(payload) {
	return async function (dispatch) {
		try {
			const token = localStorage.getItem('token'); // Obtén el token almacenado en localStorage
			console.log(token, 'token');
			const headers = {
				'x-token': token
			};
			axios
				.post(`${url}/api/products/new-service`, payload,  {
					headers
				})	
				.then((response) => {
					return dispatch({
						type: POST_SERVICE,
						payload: response.data
					});
				});
		} catch (error) {
			console.log(error);
		}
	};
}




export function activateUser(id) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .put(`${url}/api/admin/activar?id=${id}`, null, {
          headers
        })
        .then((response) => {	
          return dispatch({
            type: ACTIVATE_USER,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");

      const headers = {
        "x-token": token,
      };

      // Asegúrate de pasar los headers como tercer argumento en axios.put
      axios
        .put(`${url}/api/admin/delete?id=${id}`, null, { headers })
        .then((response) => {
          return dispatch({
            type: DELETE_USER,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

// redux/actions/cartActions.js
export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });
};

export function comprarProducto(payload) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtiene el token almacenado en localStorage
      const headers = {
        "x-token": token,
      };

      // Hacer el POST con el payload y los headers
      const response = await axios.post(
        `${url}/api/products/comprar-producto`,
        payload,
        {
          headers,
        }
      );

      // Despachar la acción con la respuesta de la API
      return dispatch({
        type: COMPRAR_PRODUCTO,
        payload: response.data,
      });
	
    } catch (error) {
      console.error("Error al realizar la compra:", error);
    }
  };
}

export function getCompras() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .get(`${url}/api/compras-por-usuario`, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: GET_COMPRAS_POR_USUARIO,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getVentas() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .get(`${url}/api/ventas-por-usuario`, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: GET_VENTAS_POR_USUARIO,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategorias() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .get(`${url}/api/admin/categorias`, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: GET_CATEGORIAS,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getSubcategorias() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .get(`${url}/api/admin/subcategorias`, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: GET_SUBCATEGORIAS,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCategoria(payload) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .post(`${url}/api/admin/crear-categoria`, payload, {
          headers,
        })
        .then((response) => {
          return dispatch({
            type: POST_CATEGORIA,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}


export function postSubcategoria(categoria, payload) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage
      console.log(token, "token");
      const headers = {
        "x-token": token,
      };
      axios
        .post(
          `${url}/api/admin/agregar-subcategoria?categoria=${categoria}`,
          payload,
          {
            headers,
          }
        )
        .then((response) => {
          return dispatch({
            type: POST_SUBCATEGORIA,
            payload: response.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}
