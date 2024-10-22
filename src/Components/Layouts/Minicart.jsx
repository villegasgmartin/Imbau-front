import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comprarProducto } from "../../../redux/actions";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const link = useSelector((state) => state.buymplink)
  console.log(link, 'mp');
  
  // Al cargar el componente, obtener los productos del carrito desde localStorage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Función para manejar la compra
const handleBuyNow = async () => {
  swal({
    title: "¿Estás seguro?",
    text: "¿Quieres realizar la compra de los productos en tu carrito?",
    icon: "warning",
    buttons: ["No", "Sí"],
  }).then(async (respuesta) => {
    if (respuesta) {
      const ids = cartItems.map((item) => item._id);
      const cantidad = cartItems.map((item) => item.cantidad || 1); // Suponiendo que cada item tiene una propiedad cantidad
      const payload = { ids, cantidad };

      try {
        const link = await dispatch(comprarProducto(payload)); // Se asume que la acción devuelve el link
        setCartItems([]); // Limpia el carrito
        localStorage.removeItem("cartItems"); // Elimina el carrito del localStorage

        // Abrir el link en una nueva pestaña
        window.open(link?.payload, "_blank");
      
        

        swal({
          text: "¡Compra realizada con éxito! será redirigido a Mercado Pago ",
          icon: "success",
        });
      } catch (error) {
        console.error("Error al realizar la compra:", error);
        swal({
          text: "Error al realizar la compra. Intenta nuevamente.",
          icon: "error",
        });
      }
    } else {
      swal({
        text: "No se ha realizado la compra.",
        icon: "info",
      });
    }
  });
};


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          Tu Carrito de Compras
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center align-center">
            <p className="text-center text-gray-500 mb-10">
              No tienes productos en el carrito.
            </p>
            <button>
              <a href="/" className="border-2 border-solid border-green-400 rounded-xl p-2 mt-20 hover:bg-green-400 hover:text-white">Volver al inicio</a>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lista de productos en el carrito */}
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105"
                >
                  {/* Imagen del producto */}
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Información del producto */}
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-700">
                      {item.nombre}
                    </h2>
                    <p className="text-gray-500">
                      Cantidad: {item.cantidad || 1}
                    </p>
                    <p className="text-gray-800 text-lg font-bold">
                      ${item.precio}
                    </p>
                  </div>

                  {/* Botón para quitar del carrito */}
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-red-600 border border-red-600 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            {/* Resumen de compra */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Resumen de la compra
              </h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <p>Subtotal:</p>
                <p className="font-semibold">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.precio * (item.cantidad || 1),
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <p>Envío:</p>
                <p className="font-semibold">$0</p>
              </div>
              <div className="flex justify-between text-gray-700 mb-6">
                <p className="text-lg font-bold">Total:</p>
                <p className="font-semibold text-lg">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.precio * (item.cantidad || 1),
                    0
                  )}
                </p>
              </div>
              <button
                onClick={handleBuyNow}
                className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                Comprar ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
