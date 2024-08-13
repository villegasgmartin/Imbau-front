export default function Promotions() {
	return (
		<div className="mb-10">
			<div className="  bold pt-10 pb-10 text-center sm:flex ">
				<h1 className="  color-main sm:text-4xl sm:bold ml-10 mr-10">PROMOCIONES BANCARIAS</h1>
				{/* <a href="/" className="text-sky-400 hover:underline text-2xl ">
					ver mas
				</a> */}
			</div>
			<div className="sm:flex justify-evenly  hidden">
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
					<div className="h-[25%] bg-[#06023d] flex justify-center items-center text-white regular  rounded-xl">
						Lunes
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center ">
						<h4 className="ml-5 mb-0 color-main bold ">10% OFF</h4>
						<h4 className="color-main bold ">Banco ICBC</h4>
					</div>
				</li>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
					<div className="h-[25%] bg-orange-500 flex justify-center items-center text-[#06023d] regular rounded-xl">
						Martes
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center ">
						<h4 className="ml-5 mb-0 color-main bold text-center ">
							15% OFF
						</h4>
						<h4 className="color-main bold ">Banco Macro</h4>
					</div>
				</li>{' '}
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
					<div className="h-[25%] bg-green-800 flex justify-center items-center text-white regular rounded-xl">
						Miercoles
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center ">
						<h4 className="ml-5 mb-0 color-main bold text-center ">
							30% OFF
						</h4>
						<h4 className="color-main bold ">Banco HCBC</h4>
					</div>
				</li>{' '}
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
					<div className="h-[25%] bg-red-600 flex justify-center items-center text-white regular rounded-xl">
						Jueves
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center ">
						<h4 className="ml-5 mb-0 color-main bold text-center ">
							15% OFF
						</h4>
						<h4 className="color-main bold ">Banco Credicop</h4>
					</div>
				</li>{' '}
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
					<div className="h-[25%] bg-pink-300 flex justify-center items-center text-white regular rounded-xl">
						Viernes
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center ">
						<h4 className=" ml-5 mb-0 color-main bold text-center ">
							10% OFF
						</h4>
						<h4 className="color-main bold ">Tarjeta Naranja</h4>
					</div>
				</li>
			</div>
			<div className="flex flex-col sm:hidden ">
				<div className="flex justify-evenly mb-6">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="h-[25%] bg-[#06023d] flex justify-center items-center text-white regular rounded-xl">
							Lunes
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main text-center ">10% OFF</h4>
							<h4 className="color-main  text-center">Banco ICBC</h4>
						</div>
					</li>
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="h-[25%] bg-orange-500 flex justify-center items-center text-[#06023d] regular rounded-xl">
							Martes
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">15% OFF</h4>
							<h4 className="color-main  text-center">Banco Macro</h4>
						</div>
					</li>{' '}
				</div>
				<div className="flex justify-evenly mb-6">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="h-[25%] bg-green-800 flex justify-center items-center text-white regular rounded-xl">
							Miercoles
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className=" mb-0 color-main text-center ">30% OFF</h4>
							<h4 className="color-main  text-center">Banco HCBC</h4>
						</div>
					</li>{' '}
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="h-[25%] bg-red-600 flex justify-center items-center text-white regular text-xl rounded-xl">
							Jueves
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">15% OFF</h4>
							<h4 className="color-main text-center	  ">
								Banco Credicop
							</h4>
						</div>
					</li>{' '}
				</div>
				<div className="flex justify-center">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="h-[25%] bg-pink-300 flex justify-center items-center text-white regular rounded-xl">
							Viernes
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">
								10% OFF
							</h4>
							<h4 className="color-main text-center ">
								Tarjeta Naranja
							</h4>
						</div>
					</li>
				</div>
			</div>
		</div>
	);
}
