import { useState, useEffect } from 'react';
import CardProducto from './CardProducto'; // Asegúrate de importar el componente CardProducto
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Autoplay, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions';
import "../Styles/Home/Slider.css"


const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);

  return (
    <div className="slider-main-container">
      <div className="slider-title-container">
        <h2 className="slider-title">
          Productos destacados
        </h2>
        <a href="/products" className="slider-link">
          ver más
        </a>
      </div>
      <Swiper
          modules={[Pagination, Autoplay]} // Incluye el módulo de paginación
          pagination={{ clickable: true }} // Activa la paginación con puntos clicables
          spaceBetween={10} // Reduce el espacio entre tarjetas
          slidesPerView={4} // Siempre muestra 4 tarjetas visibles
          centeredSlides={true} // Centra las tarjetas en la pantalla
          loop={true} // Hace que el carrusel sea infinito
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
        }}
          speed={1000}
          breakpoints={{
            250: {
              slidesPerView: 1, // 1 tarjeta visible en pantallas pequeñas
              
            },
            640: {
              slidesPerView: 1, // 1 tarjeta visible en pantallas pequeñas
              
            },
            720: {
              slidesPerView: 2, // 2 tarjetas visibles en pantallas medianas
              centeredSlides: false,// Centra en pantallas medianas
            },
            1050: {
              slidesPerView: 3,
              centeredSlides: true// 4 tarjetas visibles en pantallas grandes
            },
            1350: {
              slidesPerView: 4, 
              centeredSlides: false,// 4 tarjetas visibles en pantallas grandes
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((producto) => (
            <SwiperSlide key={producto._id}>
              <CardProducto producto={producto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default Slider;
