import { useState, useEffect } from 'react';
import CardProducto from './CardProducto'; // Asegúrate de importar el componente CardProducto
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules'; // Importa el módulo de paginación
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions';

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);

  return (
    <div className="bg-[#06023d] sm:h-max sm:relative sm:max-w-[100vw] sm:overflow-x-scroll">
      <div className="text-center sm:flex sm:items-center sm:pt-20 sm:pb-10">
        <h1 className="text-white sm:text-4xl sm:bold ml-10 mr-10">
          PRODUCTOS DESTACADOS
        </h1>
        <a href="/products" className="text-sky-400 sm:text-3xl thin">
          ver más
        </a>
      </div>
      <div className="sm:flex sm:justify-center flex max-w-[100vw] overflow-x-scroll">
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
