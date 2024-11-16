
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
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
    const [selectedCategory, setSelectedCategory] = useState(null); 
	const products = useSelector((state) => state.allProducts)
    const filteredProducts = selectedCategory
      ? products.filter((producto) => producto.categoria === selectedCategory)
      : products;

    return (
      <div className="flex flex-col ">
        <NavBar />
        <div className="flex justify-evenly items-center bg-[#f8f3e0] ">
          <h1 className="text-3xl text-[#06023D] bold">
            ¿Que <br /> producto <br /> buscas?
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Nombre del producto"
              className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1 mb-3 w-72	"
            />
            <input
              type="text"
              placeholder="Categorìa del producto"
              className="bg-transparent rounded-xl border-2 border-gray-400 text-start p-1	"
            />
            <button className="border-2 border-[#065D4A] text-[#065D4A] rounded-full p-2 w-32 mt-3">
              Buscar
            </button>
          </div>
          <img src={image} alt="" className="w-96 h-96" />
        </div>

        <h3 className="ml-40 mt-20 text-3xl text-[#06023D] bold">
          Productos destacados <br /> en tu zona
        </h3>
        <div className="flex justify-evenly m-6">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`w-36 h-12 border-2 ${
                selectedCategory === c.categoria
                  ? "bg-[#EA8C06] text-white"
                  : "border-[#EA8C06]"
              } rounded-full`}
              onClick={() => setSelectedCategory(c.categoria)} // Establece la categoría seleccionada
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="w-36 h-12 border-2 border-[#EA8C06] rounded-full"
            onClick={() => setSelectedCategory(null)} // Opción para mostrar todos los productos
          >
            Todos
          </button>
        </div>
        <div className="">
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
            {filteredProducts.map((producto) => (
              <SwiperSlide key={producto._id}>
                <CardProducto producto={producto} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src={banner2} alt="" className="w-[100vw] mt-10" />

        <h3 className="ml-40 mt-20 text-3xl text-[#06023D] bold">
          Los mas <br /> vendidos
        </h3>
        <div className="flex justify-evenly m-6">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`w-36 h-12 border-2 ${
                selectedCategory === c.categoria
                  ? "bg-[#EA8C06] text-white"
                  : "border-[#EA8C06]"
              } rounded-full`}
              onClick={() => setSelectedCategory(c.categoria)} // Establece la categoría seleccionada
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="w-36 h-12 border-2 border-[#EA8C06] rounded-full"
            onClick={() => setSelectedCategory(null)} // Opción para mostrar todos los productos
          >
            Todos
          </button>
        </div>
        <div className="">
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
            {filteredProducts.map((producto) => (
              <SwiperSlide key={producto._id}>
                <CardProducto producto={producto} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src={banner2} alt="" className="w-[100vw] mt-10" />
        <h3 className="ml-40 mt-20 text-3xl text-[#06023D] bold">
          Puede interesarte <br /> segun tus busquedas
        </h3>
        <div className="flex justify-evenly m-6">
          {categorias?.map((c, index) => (
            <button
              key={index}
              className={`w-36 h-12 border-2 ${
                selectedCategory === c.categoria
                  ? "bg-[#EA8C06] text-white"
                  : "border-[#EA8C06]"
              } rounded-full`}
              onClick={() => setSelectedCategory(c.categoria)} // Establece la categoría seleccionada
            >
              {c.categoria}
            </button>
          ))}
          <button
            className="w-36 h-12 border-2 border-[#EA8C06] rounded-full"
            onClick={() => setSelectedCategory(null)} // Opción para mostrar todos los productos
          >
            Todos
          </button>
        </div>
        <div className="">
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
            {filteredProducts.map((producto) => (
              <SwiperSlide key={producto._id}>
                <CardProducto producto={producto} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src={banner2} alt="" className="w-[100vw] mt-10" />
      </div>
    );
}