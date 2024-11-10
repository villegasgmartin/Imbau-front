
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import NavBar from "./NavBar";
import { getAllProducts } from "../../../redux/actions";
import generic from '../../assets/caja test.jpg'
import image from '../../assets/Lavarropa_1.png'
import categorias from "../../../utils/categorias";
import banner2 from '../../assets/banner2.png'
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules'; // Importa el módulo de paginación

export default function AllProducts () {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllProducts())
	},[])
	const products = useSelector((state) => state.allProducts)
    return (
			<div className="flex flex-col ">
				<NavBar/>
				<div className="flex justify-evenly items-center bg-[#f8f3e0] contenedor-productos">
					<h1 className="text-3xl text-[#06023D] bold">
						¿Que  producto buscas?
					</h1>
					{/* <div className="flex flex-col">
						<input type="text" placeholder="Nombre del producto"  className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1 mb-3 w-72	"/>
						<input type="text" placeholder="Categorìa del producto" className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1	" />
						<button className="border-2 border-[#065D4A] text-[#065D4A] rounded-full p-2 w-32 mt-3">Buscar</button>
					</div> */}

					<img src={image} alt="" className="w-96 h-96" />
				</div>
				
				<h2 className="titulos-productos mt-20 text-3xl text-[#06023D] bold ">Productos destacados en tu zona</h2>
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
				<img src={banner2} alt="" className="w-[100vw] mt-10"/>
				
				<h2 className="titulos-productos mt-20 mt-20 text-3xl text-[#06023D] bold">Los mas vendidos</h2>
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
				<img src={banner2} alt="" className="w-[100vw] mt-10"/>
				<h2 className="titulos-productos mt-20 mt-20 text-3xl text-[#06023D] bold">Puede interesarte segun tus busquedas</h2>
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
				<img src={banner2} alt="" className="w-[100vw] mt-10"/>
			</div>
		);
}