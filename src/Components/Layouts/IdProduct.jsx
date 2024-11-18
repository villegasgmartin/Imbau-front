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
import "../Styles/IdProduct.css"
import VisaIcon from "../../assets/PaymentIcons/visa.png"
import AmericanExpressIcon from "../../assets/PaymentIcons/american-express.png"
import MasterCardIcon from "../../assets/PaymentIcons/master-card.png"
import MaestroIcon from "../../assets/PaymentIcons/maestro.png"
import CabalIcon from "../../assets/PaymentIcons/cabal.png"

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
      <div className="idProduct-background">
        <div className="idProduct-main-container">
          <div className="idProduct-container">
              <h1 className="idProduct-nombre-mobile">
                {product.nombre} - {product.marca} - {product.modelo}
              </h1>
            <div className="idProduct-image-container">
              <img src={product.img} alt="" className="idProduct-image"></img>
            </div>
            <div className="idProduct-info-container">
              <h1 className="idProduct-nombre">
                {product.nombre} - {product.marca} - {product.modelo}
              </h1>
              <h2 className="idProduct-precio">${product.precio}</h2>
              <h3 className="idProduct-color">Color: {product.color}</h3>
              <p className="idProduct-text01">Lo que tenes que saber sobre este producto:</p>
              <p className="idProduct-textInfo">{product.info}</p>
            </div>
            <div className="idProduct-compra-container">
              <div className="idProduct-compra">
                <p className="idProduct-stock">Cantidad de stock: {product.stock}</p>
                <button className="idProduct-button-comprar">
                  Comprar ahora
                </button>
                <button
                  className="idProduct-button-agregar"
                  onClick={() => handleAddToCart(product)} // Actualización: Agregar al carrito usando localStorage
                >
                  Agregar al carrito
                </button>
                <p className="idProduct-text02">
                  <span className="idProduct-blue">Compra Protegida.</span> Recibí
                  el producto que esperabas o te devolvemos tu dinero
                </p>
                <p className="idProduct-text03">
                  <span className="idProduct-blue"> Devolución gratis.</span>{" "}
                  Tenés 30 días desde que lo recibís
                </p>
              </div>
              <div className="idProduct-payment-container">
                <h4 className="idProduct-payments">Medios de pago</h4>
                <p className="idProduct-text02">Tarjetas de credito</p>
                <div className="idProduct-card-icon-container" style={{marginBottom: "10px"}}>
                  <img className="idProduct-card-icon" src={VisaIcon} alt="Visa" />
                  <img className="idProduct-card-icon" src={AmericanExpressIcon} alt="American Express" />
                  <img className="idProduct-card-icon" src={MasterCardIcon} alt="Master Card" />
                </div>
                <p className="idProduct-text02">Tarjetas de debito </p>
                <div className="idProduct-card-icon-container">
                  <img className="idProduct-card-icon" src={VisaIcon} alt="Visa Débito" />
                  <img className="idProduct-card-icon" src={MaestroIcon} alt="Maestro" />
                  <img className="idProduct-card-icon" src={MasterCardIcon} alt="Master Card Débito" />
                  <img className="idProduct-card-icon" src={CabalIcon} alt="Cabal Débito" />
                </div>
              </div>
            </div>
          </div>
          <div className="productId-divider"></div>
          <h1 className="idProduct-sliders-titles">Productos relacionados</h1>
          <div className="idProduct-slider-container">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
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
          <div className="productId-divider"></div>
          <h1 className="idProduct-sliders-titles">Otros productos del vendedor</h1>
          <div className="idProduct-slider-container"> 
              <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
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
        </div>
      </div>
    </main>
  );
}
