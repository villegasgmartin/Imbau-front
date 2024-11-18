import { useState, useEffect } from 'react';
import CardProducto from './CardProducto'; // Asegúrate de importar el componente CardProducto
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules'; // Importa el módulo de paginación
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions';
import "../Styles/Slider.css"

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
      <div className="sm:flex sm:justify-center flex max-w-[100vw]">
        <Swiper
          modules={[Pagination]} // Incluye el módulo de paginación
          pagination={{ clickable: true }} // Activa la paginación con puntos clicables
          spaceBetween={50}
        //   slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 tarjeta visible en pantallas pequeñas
            },
            768: {
              slidesPerView: 2, // 2 tarjetas visibles en pantallas medianas
            },
            1024: {
              slidesPerView: 4, // 4 tarjetas visibles en pantallas grandes
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
    </div>
  );
};

export default Slider;
