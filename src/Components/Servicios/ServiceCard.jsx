/* eslint-disable react/prop-types */

export default function ServiceCard(props) {
	return (
		<div className="flex flex-col w-[23%]">
			<div className="h-min-96 rounded-xl ">
				<div className="">
					<h3 className="w-[50%] bg-orange-400 rounded-lg regular m-0 pt-2 pb-2 pl-7 text-xl">
						{props.profesion}
					</h3>
				</div>
				<div className="shadow-lg shadow-gray-400 mt-5 p-10">
					<div className="flex justify-start align-middle bold m-0  ">
						<img
							src={props.profileImg}
							alt=""
							width={380}
							className="w-20 h-20 rounded-full mr-8 ml-2 "
						/>
						<h4 className="text-xl color-main bold">
							{props.nombre} {props.apellido} <br /> {props.rating}
						</h4>
					</div>

					<p className="text-lg text-gray-400">
						{props.edad} años {props.aniosProfesion} de profesión
					</p>

					<p className="text-lg text-gray-400">{props.localidad}</p>
					<p className="text-lg text-gray-400">
						Número de matrícula: {props.numeroMatricula}
					</p>
					<p className="text-lg text-gray-400">{props.descripcionPersonal}</p>
				</div>
				<div className="flex justify-evenly mt-6 mb-10">
					<a
						href=""
						className="text-xl w-62 h-16 text-sky-400 bg-white border-3 shadow-lg shadow-gray-400 flex justify-center items-center p-3 rounded-full hover:bg-sky-400 hover:text-white transition duration-500 "
					>
						Ver portfolio
					</a>
					<a
						href=""
						className="text-xl w-62 h-16 text-sky-400 bg-white border-3 shadow-lg shadow-gray-400 flex justify-center items-center p-3 rounded-full hover:bg-sky-400 hover:text-white transition duration-500 "
					>
						Presupuestar
					</a>
				</div>
			</div>
		</div>
	);
}
