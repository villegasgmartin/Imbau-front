



import { useState, useEffect } from 'react';
import CardProducto from './CardProducto'; // Asegúrate de importar el componente CardProducto
import productos from '../../utils/ProductsArray'
const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(5);

	const handleNext = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex + itemsToShow) % productos.length
		);
	};

	const handleResize = () => {
		// Ajusta la cantidad de elementos a mostrar en función del ancho de la ventana
		if (window.innerWidth < 768) {
			setItemsToShow(10); // Puedes ajustar este valor según tus necesidades
		} else {
			setItemsToShow(5); // Número predeterminado de elementos a mostrar
		}
	};

	useEffect(() => {
		// Agrega un listener para el evento de cambio de tamaño de la ventana
		window.addEventListener('resize', handleResize);

		// Limpia el listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Llama a handleResize al cargar el componente para establecer el valor inicial
	useEffect(() => {
		handleResize();
	}, []);

	return (
		<div className="bg-[#06023d] sm:h-max sm:relative sm:max-w-[100vw] sm:overflow-x-scroll">
			<div className=" text-center sm:flex sm:items-center sm:pt-20 sm:pb-10">
				<h1 className="text-white sm:text-4xl sm:bold  ml-10 mr-10  ">
					PRODUCTOS DESTACADOS{' '}
				</h1>
				<a href="/products" className="text-sky-400 sm:text-3xl thin  ">
					ver mas
				</a>
			</div>
			<div className="sm:flex sm:justify-center flex max-w-[100vw] overflow-x-scroll">
				{productos
					.slice(currentIndex, currentIndex + itemsToShow)
					.map((producto) => (
						<CardProducto key={producto.id} producto={producto} />
					))}
			</div>
			<div className="absolute top-[50%] left-[92%] sm:flex justify-between  transform -translate-y-1/2 hidden ">
				<button
					onClick={handleNext}
					className="bg-white text-[#0485f0] cursor-pointer text-6xl rounded-full thin pb-3 pl-2 pr-2"
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Slider;
