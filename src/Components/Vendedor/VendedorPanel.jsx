import NavBar from "../Layouts/NavBar";


export default function VendedorPanel () {
    return (
			<div className="bg-[#f8f3e0] min-h-[100vh]">
				<NavBar />
				
				<main className="p-28 flex flex-col">
					<div>
					<h1 className="text-xl bold color-main">Resumen</h1>
					<p className="text-gray-400">Tu desempeño</p>
					</div>
					<div>
						<div className="flex justify-evenly">
							<div className="w-[521px] h-[124px] bg-white rounded-lg p-1">
								<h6 className="text-blue-500 text-sm">Reputacion</h6>
								<div className="flex justify-evenly items-center p-8">
									<p className="text-xs text-gray-500 flex justify-evenly items-center">
										<span className="text-lg text-black mr-2">10</span>
										Ventas para tener reputacion
									</p>
									<p className="text-xs text-gray-500 flex justify-evenly items-center">
										<span className="text-lg text-black mr-2">0</span>
										Ventas con reclamos
									</p>
									<p className="text-xs text-gray-500 flex justify-evenly items-center">
										<span className="text-lg text-black mr-2">0</span>
										Ventas canceladas
									</p>
									<p className="text-xs text-gray-500 flex justify-evenly items-center">
										<span className="text-lg text-black mr-2">0</span>
										Reclamos en tiempos de entrega
									</p>
								</div>
							</div>
							<div className="w-[305px] h-[124px] bg-white rounded-lg">
								<div className="flex justify-between p-2">
									<h6 className="text-blue-500 text-sm">Metricas de ventas</h6>
									<p className="text-xs text-gray-500">Ultimos 7 dias</p>
								</div>
								<div className="flex justify-evenly p-8">
									<div className="flex flex-col ">
										<p className="text-xs text-gray-500">Ventas Brutas</p>
										<span></span>
									</div>
									<div></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-evenly mt-40">
						<div className="w-[305px] h-[124px] bg-white ">
							<h5 className="text-xl p-2 border-b-2 border-black w-[90%]">
								Contactos por responder
							</h5>
							<p className="text-xs text-gray-500 p-2">
								No tienes preguntas, mensajes ni reclamos por responder
							</p>
						</div>
						<div className="w-[305px] h-[124px] bg-white ">
							<h5 className="text-xl p-2 border-b-2 border-black w-[90%]">
								Ventas para preparar
							</h5>
							<p className="text-xs text-gray-500 p-2">
								No tienes ventas para preparar
							</p>
						</div>

						<div className="w-[305px] h-[197px] bg-white">
							<h5 className="text-xl p-2 border-b-2 border-black w-[90%]">
								Tus ganancias
							</h5>
							<div></div>
						</div>
					</div>
				</main>
			</div>
		);
}