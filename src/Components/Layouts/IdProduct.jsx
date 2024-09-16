import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../Layouts/NavBar'
import CardProducto from "../Home/CardProducto";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Importa los estilos de la paginación
import { Pagination } from 'swiper/modules'; // Importa el módulo de paginación

export default function IdProduct(){
    const { id } = useParams();
    
    const dispatch = useDispatch()
    useEffect(() => (
        dispatch(getProductById(id)),
        dispatch(getAllProducts())
    ),[])
    const product = useSelector((state) => state.productById)
    const products = useSelector((state) => state.allProducts)
    console.log(product, 'prod');
    
return(
    <main >
        <NavBar/>
    <div className="flex justify-around border-b-2 border-gray-200 mt-20">
                       <div className="w-[30%] ">

          <img src={product.img} alt="" className=""></img>
               </div>
          <div className="w-[30%] ">
                <h1 className="text-3xl bold mt-10">{product.nombre} - {product.marca} - {product.modelo}</h1>
                <h2 className="text-3xl bold ">${product.precio}</h2>
                <h3 className="text-2xl">Color: {product.color}</h3>
                <p className="text-xl">Lo que tenes que saber sobre este producto:</p>
                <p className="text-xl">{product.info}</p>
          </div>    
          <div className="flex flex-col w-[30%]">
          <div className=" flex flex-col justify-evenly items-center border-2 border-gray-200">
            <p>Datos del envio</p>
            <p>Stock disponible/no disponible</p>
            <p>Cantidad de stock</p>
            <button>Comprar ahora</button>
            <button>Agregar al carrito</button>
            <p>Datos de la compra</p>
            <p>Datos de la devolucion</p>
          </div>
          <div className="flex flex-col justify-evenly items-center border-2 border-gray-200 mt-10 ">
            <h4>Medios de pago</h4>
            <p>Tarjetas de credito</p>
            <p>Tarjetas de debito</p>
            </div>
        </div>  
        
    </div>
    <h1 className="text-3xl mt-20 mb-10">Productos relacionados</h1>
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
        <h1 className="text-3xl mt-20 mb-10">Otros productos del vendedor</h1>
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
    </main>
)
}
