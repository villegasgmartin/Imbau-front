import NavBar from "../Layouts/NavBar"
import productos from '../../utils/ProductsArray'
export default function AllProducts () {
    return (
			<div>
				<NavBar />
				<section className="flex flex-col bg-[#f8f3e0] sm:flex-row sm:justify-evenly justify-center align-middle pt-20">
					<div className="sm:max-w-[30%] ml-10 sm:ml-0">
						<h3 className="bold color-main">Mesa comedor</h3>
						<p>548 resultados</p>
						<div className="flex">
							<h3 className="mr-6">Cuotas</h3>
							<label className="inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							</label>
						</div>
						<div className="flex">
							<h3 className="mr-6">Envio gratis</h3>
							<label className="inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							</label>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:max-w-[60%] mx-10 my-10 sm:mx-0 ms:my-0">
						{productos?.map((p) => (
							<div
								key={p.id}
								className="bg-white text-start rounded-xl overflow-hidden  "
							>
								<img src={p.imagen} alt={p.nombre} className="w-80 " />
								<div className="p-4">
									<h3 className="text-gray-400 font-bold">
										{p.nombre}
									</h3>
									<p className="text-sm">Calificación: {p.calificacion}</p>
									<p className="text-gray-400 line-through">
										${p.precio}
									</p>
									<p className="text-black font-bold">
										$
										{(
											p.precio -
											(p.precio * p.porcentajeDescuento) / 100
										).toFixed(2)}{' '}
										<span className="text-green-400 ml-2">
											{p.porcentajeDescuento}% OFF
										</span>
									</p>
									<p className="text-black font-bold">
										12 x $
										{(
											p.precio -
											(p.precio * p.porcentajeDescuento) / 100
										).toFixed(2)}{' '}
										/mes
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		);
}