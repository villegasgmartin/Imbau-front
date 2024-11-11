
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import NavBar from "./NavBar";
import { getAllProducts } from "../../../redux/actions";
import generic from '../../assets/caja test.jpg'
import image from '../../assets/Lavarropa-edited.png'
import categorias from "../../../utils/categorias";
import banner2 from '../../assets/banner2.png'
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules'; // Importa el módulo de paginación
import "../Styles/AllProducts.css"


export default function AllProducts () {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllProducts())
	},[])
	const products = useSelector((state) => state.allProducts)
    return (
			<div className="flex flex-col ">
				<NavBar/>
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
				
				<h2 className="allProducts-subtitles">Productos destacados en tu zona</h2>
				{/* <div className="flex justify-evenly m-6">

				{categorias?.map((c, index) => (
					<button className="w-36 h-12 border-2 border-[#EA8C06] rounded-full ">{c.categoria}</button>
				))}
				</div> */}
				<div className="sm:flex sm:justify-center flex max-w-[100vw]">
        <Swiper
        className="my-swiper-container"
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
				<div className="allProducts-banner-container">
          <img src={banner2} alt="publicidad" className="allProducts-banner"/>
        </div>
				
				<h2 className="allProducts-subtitles">Los más vendidos</h2>
				{/* <div className="flex justify-evenly m-6">

{categorias?.map((c, index) => (
	<button className="w-36 h-12 border-2 border-[#EA8C06] rounded-full ">{c.categoria}</button>
))}
</div> */}
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
      <div className="allProducts-banner-container">
          <img src={banner2} alt="publicidad" className="allProducts-banner"/>
      </div>
				<h2 className="allProducts-subtitles">Puede interesarte según tus búsquedas</h2>
				{/* <div className="flex justify-evenly m-6">

{categorias?.map((c, index) => (
	<button className="w-36 h-12 border-2 border-[#EA8C06] rounded-full ">{c.categoria}</button>
))}
</div> */}
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
      <div className="allProducts-banner-container" style={{marginBottom: "8%"}}>
          <img src={banner2} alt="publicidad" className="allProducts-banner"/>
      </div>
			</div>
		);
}