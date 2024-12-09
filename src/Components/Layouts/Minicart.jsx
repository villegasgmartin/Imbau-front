import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comprarProducto } from "../../../redux/actions";
import "../Styles/Layouts/MiniCart.css"

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
    <>
    {cartItems.length === 0 ? (
          <div className="miniCart-empty-container">
            <div className="miniCart-noProducts-container">
              <p className="miniCart-noProducts-text">
                No tienes productos en el carrito.
              </p>
              <button>
                <a href="/" className="miniCart-noProducts-button">Volver al inicio</a>
              </button>
            </div>
          </div>
        ) : (
        <div className="miniCart-main-container">
          <div className="miniCart-container">
            {/* Lista de productos en el carrito */}
            <div className="miniCart-products-container">
              <h1 className="miniCart-title">Mi carrito</h1>
              <h3 className="miniCart-subTitle">Productos</h3>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="miniCart-product"
                >
                {/* Imagen del producto */}
                {/*
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                 */}

                  {/* Información del producto */}
                  <div className="miniCart-product-info">
                    <h2 className="miniCart-product-name">
                      {item.nombre}
                    </h2>
                    <p className="miniCart-product-quantity">
                      Cantidad: {item.cantidad || 1}
                    </p>
                    {/* Botón para quitar del carrito */}
                    <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="miniCart-quit-button"
                  >
                    Eliminar
                  </button>
                  </div>
                  <p className="miniCart-product-price">
                      ${item.precio}
                  </p>
                </div>
              ))}
            </div>

            <div className="resumen-button-container"> 
            {/* Resumen de compra */}
            <div className="resumen-container">
              <h2 className="resumen-title">
                Resumen de compra
              </h2>
              <div className="resumen-info-container">
                <p className="resumen-text01">Producto</p>
                <p className="resumen-text02">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.precio * (item.cantidad || 1),
                    0
                  )}
                </p>
              </div>
              <div className="resumen-info-container">
                <p className="resumen-text01">Envío</p>
                <p className="resumen-text02">$0</p>
              </div>
              <div className="resumen-divider"></div>
              <div className="resumen-info-container">
                <p className="resumen-text01">Pagás</p>
                <p className="resumen-text03">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.precio * (item.cantidad || 1),
                    0
                  )}
                </p>
              </div>
            </div>
            <button
                onClick={handleBuyNow}
                className="miniCart-compra-button"
              >
                Continuar compra
              </button>
            </div>
          </div>
      </div>
        )}
    </>
  );
};

export default Cart;
