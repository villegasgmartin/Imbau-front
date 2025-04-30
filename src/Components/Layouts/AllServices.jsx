import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules';
import image from '../../assets/Mujer.png'
import { Fade } from "react-awesome-reveal";
import perfImg from '../../assets/perfil.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices, getAllServices1, getAllServices2 } from '../../../redux/actions';
import ServiceHomeCard from '../Home/ServiceHomeCard';
import banner from '../../assets/banner-01.jpg'
import NavBar from './NavBar';
import banner1 from "../../assets/banner-01.jpg";
import banner2 from "../../assets/banner-02.jpg";
import banner3 from "../../assets/banner-03.jpg";


export default function ServiceSlider() {

const dispatch = useDispatch()
useEffect(() => {
  dispatch(getAllServices());
  dispatch(getAllServices1());
  dispatch(getAllServices2());
}, []);

const services = useSelector((state) => state.allServices)
const services1 = useSelector((state) => state.allServices1);
const services2 = useSelector((state) => state.allServices2);
console.log(services1, '1');
console.log(services2,'2');


	return (
    <div className="sm:h-max sm:relative sm:max-w-[100vw] sm:overflow-x-scroll ">
      <NavBar />
      <div className="flex justify-evenly items-center bg-[#f8f3e0]">
        <h1 className="text-3xl text-[#06023D] bold">
          ¿Que <br /> servicio <br /> buscas?
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre del servicio"
            className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1 mb-3 w-72	"
          />
          <input
            type="text"
            placeholder="Categorìa del servicio"
            className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1	"
          />
          <button className="border-2 border-[#065D4A] text-[#065D4A] rounded-full p-2 w-32 mt-3">
            Buscar
          </button>
        </div>
        <img src={image} alt="" className="w-96 h-96" />
      </div>
      <>
        <h3 className="ml-10 mt-20 text-3xl text-[#06023D] bold">
          Servicios destacados <br /> en tu zona
        </h3>
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services.map((p) => (
            <SwiperSlide key={p.uid}>
              <ServiceHomeCard
                uid={p.uid}
                nombre={p.usuario?.nombre}
                experiencia={p.usuario?.experiencia}
                provincia={p.Provicia}
                ciudad={p.Ciudad}
                sobremi={p.usuario?.sobremi}
                categoria={p.rubro}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Fade triggerOnce={true} duration={800} delay={300}>
          <div className="allProducts-banner-container">
            <img
              src={banner1}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      </>
      <>
        <h3 className="ml-10 mt-20 text-3xl text-[#06023D] bold">
          Servicios <br /> recomendados
        </h3>
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services1.map((p) => (
            <SwiperSlide key={p.uid}>
              <ServiceHomeCard
                uid={p.uid}
                nombre={p.usuario?.nombre}
                experiencia={p.usuario?.experiencia}
                provincia={p.Provicia}
                ciudad={p.Ciudad}
                sobremi={p.usuario?.sobremi}
                categoria={p.rubro}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Fade triggerOnce={true} duration={800} delay={300}>
          <div className="allProducts-banner-container">
            <img
              src={banner1}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      </>
      <>
        <h3 className="ml-10 mt-20 text-3xl text-[#06023D] bold">
          Quizas <br /> pueda interesarte
        </h3>
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services2.map((p) => (
            <SwiperSlide key={p.uid}>
              <ServiceHomeCard
                uid={p.uid}
                nombre={p.usuario?.nombre}
                experiencia={p.usuario?.experiencia}
                provincia={p.Provicia}
                ciudad={p.Ciudad}
                sobremi={p.usuario?.sobremi}
                categoria={p.rubro}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Fade triggerOnce={true} duration={800} delay={300}>
          <div className="allProducts-banner-container">
            <img
              src={banner1}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      </>

      <img src={banner} alt="" className="w-[100vw] mt-10" />
    </div>
  );
}
