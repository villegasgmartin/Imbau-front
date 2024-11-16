import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules';
import ServiceHomeCard from './ServiceHomeCard';
import perfImg from '../../assets/perfil.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../../redux/actions';

export default function ServiceSlider() {

const dispatch = useDispatch()
useEffect(() => (
	dispatch(getAllServices())),[])
const services = useSelector((state) => state.allServices)


	return (
    <div className="sm:h-max sm:relative sm:max-w-[100vw] sm:overflow-x-scroll ">
      {/* <div className=" text-center sm:flex sm:items-center sm:pt-20 sm:pb-10">
				<h1 className="color-main  sm:text-4xl sm:bold ml-10 mr-10 ">
					SERVICIOS DESTACADOS
				</h1>
				<a href="/servicios" className="text-sky-400 sm:text-3xl thin  ">
					ver mas
				</a>
			</div>		
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
          {services.map((p) => (
            <SwiperSlide key={p.uid}>
             <ServiceHomeCard						
						nombre={p.usuario?.nombre}
						experiencia={p.usuario?.experiencia}
						provincia={p.Provicia}
						ciudad={p.Ciudad}
						sobremi={p.usuario?.sobremi}
						categoria={p.rubro}			
								/>
            </SwiperSlide>
          ))}
        </Swiper> */}{" "}
     
    </div>
  );
}
