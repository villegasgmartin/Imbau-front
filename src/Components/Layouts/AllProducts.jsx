
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAllProducts, getAllProducts1, getAllProducts2, getCategorias } from "../../../redux/actions";

// import categorias from "../../../utils/categorias";
import banner1 from '../../assets/banner-01.jpg'
import banner2 from '../../assets/banner-02.jpg'
import banner3 from '../../assets/banner-03.jpg'
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Autoplay, Pagination } from 'swiper/modules';
import "../Styles/Layouts/AllProducts.css"
import image from '../../assets/Lavarropa-edited.png'


export default function AllProducts () {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllProducts())
    dispatch(getAllProducts1());
    dispatch(getAllProducts2());
    dispatch(getCategorias())
	},[])
    const [selectedCategory, setSelectedCategory] = useState(null); 
    const [selectedCategory1, setSelectedCategory1] = useState(null); 
    const [selectedCategory2, setSelectedCategory2] = useState(null); 

	const products = useSelector((state) => state.allProducts)
  const products1 = useSelector((state) => state.allProducts1);
  const products2 = useSelector((state) => state.allProducts2);
  const categorias = useSelector((state) => state.categorias.categorias)
  console.log(categorias, 'cate')


  const filteredProducts = selectedCategory
      ? products.filter((producto) => producto.categoria === selectedCategory)
      : products;

  const filteredProducts1 = selectedCategory1
         ? products1.filter(
             (producto) => producto.categoria === selectedCategory1
           )
         : products1;

  const filteredProducts2 = selectedCategory2
            ? products2.filter(
                (producto) => producto.categoria === selectedCategory2
              )
            : products2;

    return (
      <div className="flex flex-col ">
        {/*<NavBar />  */} 
        <div className="allProducts-container">
					<h1 className="allProducts-searchTitle">
						¿Qué producto buscás?
					</h1>
					<div className="allProducts-searchContainer">
						<input type="text" placeholder="Nombre del producto"  className="allProducts-input"/>
						<input type="text" placeholder="Categoría del producto" className="allProducts-input" />
						<button className="allProducts-button">Buscar</button>
					</div>
					<div className="allProducts-imageContainer">
            <img src={image} alt="" width={"100%"}/>
          </div>
				</div>
        <h3 className="allProducts-subtitles">
          Productos destacados en tu zona
        </h3>
        <div className="allProducts-buttons-container">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "allProducts-btn-1"
                  : index === 1
                  ? "allProducts-btn-2"
                  : index === 2
                  ? "allProducts-btn-3"
                  : index === 3
                  ? "allProducts-btn-4"
                  : ""
              }`}
              onClick={() => setSelectedCategory(c.categoria)}
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="allProducts-btn-5"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
        </div>
        <div className="slider-main-container" style={{backgroundColor: "white"}}>
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
        <div className="allProducts-banner-container">
          <img src={banner1} alt="publicidad" className="allProducts-banner"/>
        </div>

        <h3 className="allProducts-subtitles">
          Los más vendidos
        </h3>
        <div className="allProducts-buttons-container">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "allProducts-btn-1"
                  : index === 1
                  ? "allProducts-btn-2"
                  : index === 2
                  ? "allProducts-btn-3"
                  : index === 3
                  ? "allProducts-btn-4"
                  : ""
              }`}
              onClick={() => setSelectedCategory(c.categoria)}
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="allProducts-btn-5"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
        </div>
        <div className="slider-main-container" style={{backgroundColor: "white"}}>
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
        <div className="allProducts-banner-container">
          <img src={banner2} alt="publicidad" className="allProducts-banner"/>
        </div>
        <h3 className="allProducts-subtitles">
          Puede interesarte según tus búsquedas
        </h3>
        <div className="allProducts-buttons-container">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "allProducts-btn-1"
                  : index === 1
                  ? "allProducts-btn-2"
                  : index === 2
                  ? "allProducts-btn-3"
                  : index === 3
                  ? "allProducts-btn-4"
                  : ""
              }`}
              onClick={() => setSelectedCategory(c.categoria)}
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="allProducts-btn-5"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
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
        <div className="allProducts-banner-container" style={{marginBottom: "8%"}}>
          <img src={banner3} alt="publicidad" className="allProducts-banner"/>
        </div>
      </div>

    );

}