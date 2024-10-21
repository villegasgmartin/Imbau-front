import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function IdProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getAllProducts());
  }, [dispatch, id]);

  const product = useSelector((state) => state.productById);
  const products = useSelector((state) => state.allProducts);



const handleAddToCart = (product) => {
  swal({
    title: "¿Estás seguro?",
    text: "¿Quieres agregar este producto al carrito?",
    icon: "warning",
    buttons: ["No", "Sí"],
  }).then((respuesta) => {
    if (respuesta) {
      // Obtener los items actuales del carrito desde localStorage
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Verificar si el producto ya está en el carrito
      const existingProduct = cartItems.find(
        (item) => item._id === product._id
      );

      let updatedCart;
      if (existingProduct) {
        // Si el producto ya existe, incrementamos la cantidad
        updatedCart = cartItems.map((item) =>
          item._id === product._id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si no existe, lo agregamos con una cantidad inicial de 1
        updatedCart = [...cartItems, { ...product, cantidad: 1 }];
      }

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      // Mostrar un mensaje de éxito
      swal({
        text: "El producto ha sido agregado al carrito.",
        icon: "success",
      });
    } else {
      swal({
        text: "No se ha agregado el producto al carrito.",
        icon: "info",
      });
    }
  });
};


  return (
    <main>
      <NavBar />
      <div className="flex justify-around border-b-2 border-gray-200 mt-20">
        <div className="w-[30%] ">
          <img src={product.img} alt="" className=""></img>
        </div>
        <div className="w-[30%] ">
          <h1 className="text-3xl bold mt-10">
            {product.nombre} - {product.marca} - {product.modelo}
          </h1>
          <h2 className="text-3xl bold ">${product.precio}</h2>
          <h3 className="text-2xl">Color: {product.color}</h3>
          <p className="text-xl">Lo que tenes que saber sobre este producto:</p>
          <p className="text-xl">{product.info}</p>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className=" flex flex-col justify-evenly items-center border-2 border-gray-200">
            <p>Cantidad de stock: {product.stock}</p>
            <button className="text-green-600 border-2 border-green-600 p-2 rounded-full">
              Comprar ahora
            </button>
            <button
              className="text-green-600 border-2 border-green-600 p-2 rounded-full mt-2"
              onClick={() => handleAddToCart(product)} // Actualización: Agregar al carrito usando localStorage
            >
              Agregar al carrito
            </button>
            <p className="max-w-inherit">
              <span className="text-skyblue-400">Compra Protegida.</span> Recibí
              el producto que esperabas o te devolvemos tu dinero
            </p>
            <p className="max-w-inherit">
              <span className="text-skyblue-400"> Devolución gratis.</span>{" "}
              Tenés 30 días desde que lo recibís
            </p>
          </div>
          <div className="flex flex-col justify-evenly items-center border-2 border-gray-200 mt-10 ">
            <h4>Medios de pago</h4>
            <p>Tarjetas de credito</p>
            <p>Tarjetas de debito</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-20 mb-10">Productos relacionados</h1>
      <div className="sm:flex sm:justify-center flex max-w-[100vw] overflow-x-scroll">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((producto) => (
            <SwiperSlide key={producto._id}>
              <CardProducto producto={producto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="text-3xl mt-20 mb-10">Otros productos del vendedor</h1>
      <div className="sm:flex sm:justify-center flex max-w-[100vw] overflow-x-scroll">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((producto) => (
            <SwiperSlide key={producto._id}>
              <CardProducto producto={producto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
