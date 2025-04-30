import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getOfertasTerminadas, getProductById, getServiceById, postNewChat } from "../../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../Styles/Layouts/IdProduct.css";
import VisaIcon from "../../assets/PaymentIcons/visa.png";
import AmericanExpressIcon from "../../assets/PaymentIcons/american-express.png";
import MasterCardIcon from "../../assets/PaymentIcons/master-card.png";
import MaestroIcon from "../../assets/PaymentIcons/maestro.png";
import CabalIcon from "../../assets/PaymentIcons/cabal.png";

export default function IdService() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [logged, setLogged] = useState(false);
  const [idUsuario, setidUsuario] = useState(null);
  const [rol, setRol] = useState(null); // Nueva variable de estado para el rol


    // Verificación de rol para mostrar u ocultar la sección de favoritos
    useEffect(() => {
      const storedRol = localStorage.getItem('rol');
      const idUser = localStorage.getItem('userId');
      console.log(storedRol, idUser)
      setidUsuario(idUser); 
      setRol(storedRol); // Guardamos el rol en el estado
    }, [id]);

  useEffect(() => {
    dispatch(getServiceById(id));
    dispatch(getOfertasTerminadas(id));
  }, [dispatch, id]);
  const ofertasTerminadas = useSelector((state) => state.ofertasTerminadas);
  const service = useSelector((state) => state.serviceById);
  
  const products = useSelector((state) => state.allProducts);

//   const handleAddToCart = (product) => {
//     swal({
//       title: "¿Estás seguro?",
//       text: "¿Quieres agregar este producto al carrito?",
//       icon: "warning",
//       buttons: ["No", "Sí"],
//     }).then((respuesta) => {
//       if (respuesta) {
//         // Obtener los items actuales del carrito desde localStorage
//         const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//         // Verificar si el producto ya está en el carrito
//         const existingProduct = cartItems.find(
//           (item) => item._id === product._id
//         );

//         let updatedCart;
//         if (existingProduct) {
//           // Si el producto ya existe, incrementamos la cantidad
//           updatedCart = cartItems.map((item) =>
//             item._id === product._id
//               ? { ...item, cantidad: item.cantidad + 1 }
//               : item
//           );
//         } else {
//           // Si no existe, lo agregamos con una cantidad inicial de 1
//           updatedCart = [...cartItems, { ...product, cantidad: 1 }];
//         }

//         // Guardar el carrito actualizado en localStorage
//         localStorage.setItem("cartItems", JSON.stringify(updatedCart));

//         // Mostrar un mensaje de éxito
//         swal({
//           text: "El producto ha sido agregado al carrito.",
//           icon: "success",
//         });
//       } else {
//         swal({
//           text: "No se ha agregado el producto al carrito.",
//           icon: "info",
//         });
//       }
//     });
//   };
const handleCreateChat = async (idUsuario, id) => {
  if (!idUsuario || !id) {
    console.error("idUsuario o id no son válidos");
    return;
  }

 

  try {
    await dispatch(postNewChat(idUsuario, id))
      .then(() => {
        window.location.href = '/chat'
      })
      .catch((error) => {
        console.error("Error al crear el chat:", error);
      });
  } catch (error) {
    console.error("Error al crear el chat:", error);
  }
};

const handleCreateChatNologged = ()=>{
  window.location = '/login'
}
  return (
    <main>
      <NavBar />
      <div className="bg-[#F6F0E5] min-h-screen flex justify-center p-6">
        <div className="w-full max-w-3xl ">
          {/* Header */}
          {/* <div className="bg-orange-500 rounded-t-lg p-6 relative flex items-center">
            <div className="absolute -top-8 left-6 bg-white rounded-full w-16 h-16 flex items-center justify-center border border-gray-300 shadow-md">
              <span className="text-4xl">👩‍🎨</span>
            </div>
            <div className="ml-20">
              <h2 className="text-xl font-semibold">Chiara Vallorani</h2>
              <p className="text-orange-600">Arquitecta</p>
              <p className="text-gray-500">Rosario, Santa Fe, Argentina</p>
              <div className="flex items-center mt-2 text-yellow-500">
                ★★★★★ <span className="text-gray-500 ml-2">5 (2 reseñas)</span>
              </div>
            </div>
            <button className="ml-auto border border-blue-500 text-blue-500 px-4 py-1 rounded">
              Contactar
            </button>
          </div> */}
          <div className="bg-orange-300 w-[1000px] h-[170px]"></div>
          <div className="bg-white w-[1000px] h-[200px] flex justify-evenly">
            <div className="flex flex-col justify-center items-start">
              <h4 className="text-blue-900 bold">
                {service?.usuario?.nombre} - Estrellas - reseñas
              </h4>
              <h5 className="text-orange-300 bold">{service?.servicio}</h5>
              <p>
                {service?.Provincia} {service?.Ciudad} {service?.Barrio}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h4>Aca iria estudios</h4>
            </div>
            <div>
              {rol === "USER_BUYER" && (
                <button
                  className=" border-2 border-green-700 text-green-700 rounded-xl mt-4 p-2 hover:bg-green-700 hover:text-white"
                  onClick={() => handleCreateChat(idUsuario, id)}
                >
                  Contactar
                </button>
              )}
              {rol != "USER_BUYER" && (
                <>
                  <button
                    className=" border-2 border-green-700 text-green-700 rounded-xl mt-4 p-2 hover:bg-green-700 hover:text-white"
                    onClick={() => handleCreateChatNologged()}
                  >
                    Contactar
                  </button>
                </>
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-[1000px]">
            <h3 className="text-xl font-semibold">Acerca de</h3>
            <p className="text-orange-300 font-medium">{service?.titulo}</p>
            <p className="font-semibold mt-2">
              {service?.usuario?.experiencia} años de experiencia
            </p>
            <p className="text-gray-600 mt-2">{service?.usuario?.sobremi}</p>
            <p className="text-orange-600 italic mt-4">
              $ A acordar con el vendedor
            </p>
          </div>

          {/* Activity Section */}
          <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-[1000px]">
            <h3 className="text-xl font-semibold">Actividad</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {!ofertasTerminadas.length ? (
                <p className="prestadorActivity-empty">Aún no hay actividad</p>
              ) : (
                <div>
                  {ofertasTerminadas.map((o) => {
                    return (
                      <div key={o._id}>
                        <img src="" alt="" />
                        <h2>{o.titulo}</h2>
                        <p>{o.descripcion}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-[1000px]">
            <h3 className="text-xl font-semibold">Reseñas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              Ver aca que va
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
