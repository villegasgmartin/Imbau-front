/* eslint-disable react/prop-types */

const CardProducto = ({ producto }) => {
	return (
		<div className="m-5 sm:p-5 px-10 py-2 bg-white sm:text-center mb-20 sm:h-fit sm:min-h-[400px] sm:w-80 rounded-xl flex flex-col justify-evenly ">
			<img
				src={producto.imagen}
				alt={producto.nombre}
				className="w-60 "
			/>
			<div className="text-left w-fit">
				<h5 className="text-gray-400 bold">{producto.nombre}</h5>				
				<p className="text-sm">Calificación: {producto.calificacion}</p>
				<p className="text-gray-400 line-through ">${producto.precio}</p>
				<p className="text-black  bold">
					$
					{(
						producto.precio -
						(producto.precio * producto.porcentajeDescuento) / 100
					).toFixed(2)}{' '}
					<span className=" text-green-400 thin sm:ml-2 ">
						{producto.porcentajeDescuento}% OFF
					</span>
				</p>
				<p className="text-black sm:text-xl sm:bold ">
					12 x{' '}
					{(
						producto.precio -
						(producto.precio * producto.porcentajeDescuento) / 100
					).toFixed(2)}{' '}
					/mes
				</p>
			</div>
		</div>
	);
};

export default CardProducto;
