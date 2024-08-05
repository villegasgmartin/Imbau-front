import perfil from '../../assets/perfilGenerico.png'
export default function PrestadorHeader () {
    return (
			<div className="w-[70vw] ml-[15vw] flex items-end h-[348px] mt-10 bg-[#ea8c06] rounded-xl">
				<div className="flex justify-between items-end bg-white h-[202px] w-[100%] p-12 rounded-xl ">
					<img
						src={perfil}
						alt=""
						className="absolute top-[28%] w-[127px] rounded-full"
					/>
					<div className="flex justify-around">
						<div>
							<div className="flex justify-start items-center">
								<h1 className="text-2xl text-[#06023D]">Nombre </h1>
								<p className="ml-10">Estrellas</p>
							</div>
							<h3 className="text-base text-[#EA8C06]">Profesion</h3>
							<p className="text-sm text-gray-500">
								Rosario, Santa Fe, Argentina{' '}
							</p>
						</div>
					</div>
					<h3 className="mb-10 text-base text-[#06023D]">Estudios</h3>
					<div className="flex justify-evenly items-start mb-20">
						<button className="w-[225px] h-[37px] rounded-xl bg-[#cddfdb] text-[#065D4A] mr-2 hover:bg-[#065D4A] hover:text-white">
							Agregar otro servicio
						</button>
						<button className="w-[225px] h-[37px] rounded-xl bg-[#cddfdb] text-[#065D4A]  hover:bg-[#065D4A] hover:text-white">
							Datos personales
						</button>
					</div>
				</div>
			</div>
		);
}