import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules';
import image from '../../assets/Mujer-edited.png'
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
import "../Styles/Layouts/AllServices.css"

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


	return (
    <div className="sm:h-max sm:relative sm:max-w-[100vw] sm:overflow-x-scroll ">
      <NavBar />
      <div className="allServices-container">
        <h1 className="allServices-searchTitle">
          ¿Qué servicio buscás?
        </h1>
        <div className="allServices-imageContainer">
          <img src={image} alt="" width={"100%"}/>
        </div>
      </div>
      <h3 className="allServices-subtitles">
          Servicios destacados en tu zona
      </h3>
      <div>
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
                slidesPerView: 3, // 4 tarjetas visibles en pantallas grandes
              },
            }}
      
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
      </div>
        <Fade triggerOnce={true} duration={800} delay={300}>
          <div className="allServices-banner-container">
            <img
              src={banner1}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      <>
        <h3 className="allServices-subtitles">
          Servicios recomendados
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
              slidesPerView: 3, // 4 tarjetas visibles en pantallas grandes
            },
          }}

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
          <div className="allServices-banner-container">
            <img
              src={banner2}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      </>
      <>
        <h3 className="allServices-subtitles">
          Quizás pueda interesarte
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
              slidesPerView: 3, // 4 tarjetas visibles en pantallas grandes
            },
          }}
        
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
          <div className="allProducts-banner-container" style={{marginBottom: "8%"}}>
            <img
              src={banner3}
              alt="publicidad"
              className="allProducts-banner"
            />
          </div>
        </Fade>
      </>
    </div>
  );
}