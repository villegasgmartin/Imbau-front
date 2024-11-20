
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAllProducts, getAllProducts1, getAllProducts2 } from "../../../redux/actions";

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
    dispatch(getAllProducts1());
    dispatch(getAllProducts2());
	},[])
    const [selectedCategory, setSelectedCategory] = useState(null); 
    const [selectedCategory1, setSelectedCategory1] = useState(null); 
    const [selectedCategory2, setSelectedCategory2] = useState(null); 

	const products = useSelector((state) => state.allProducts)
  const products1 = useSelector((state) => state.allProducts1);
  const products2 = useSelector((state) => state.allProducts2);

 
  

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
        <NavBar />  

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
                selectedCategory1 === c.categoria
                  ? "bg-[#EA8C06] text-white"
                  : "border-[#EA8C06]"
              } rounded-full`}
              onClick={() => setSelectedCategory1(c.categoria)} // Establece la categoría seleccionada
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
            {filteredProducts1.map((producto) => (
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
                selectedCategory2 === c.categoria
                  ? "bg-[#EA8C06] text-white"
                  : "border-[#EA8C06]"
              } rounded-full`}
              onClick={() => setSelectedCategory2(c.categoria)} // Establece la categoría seleccionada
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
            {filteredProducts2.map((producto) => (
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