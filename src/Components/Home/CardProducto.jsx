/* eslint-disable react/prop-types */
import generic from '../../assets/caja test.jpg'
const CardProducto = ({ producto }) => {
	return (
		<div className="m-5 sm:p-5 px-10 py-2 bg-white sm:text-center mb-20 sm:h-fit sm:min-h-[400px] sm:w-80 rounded-xl flex flex-col justify-evenly border-2 border-gray-400 ">
			<div className='flex items-center justify-center'>
<a href={`/products/${producto._id}`}>
			<img
				src={producto.img}
				alt={producto.nombre}
				className="w-60"
				/>
			</a>
				</div>
			<div className="text-left w-fit">
				<h5 className="text-gray-400 bold">{producto.nombre}</h5>				
				<p className="text-sm"> {producto.categoria} - {producto.subcategoria}</p>
				<p className="bold mt-2">${producto.precio}</p>			
			</div>
		</div>
	);
};

export default CardProducto;
