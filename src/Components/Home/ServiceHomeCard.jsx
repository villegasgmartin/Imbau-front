/* eslint-disable react/prop-types */

export default function ServiceHomeCard(props) {
	return (
		<div className="flex flex-col mt-10">			
				<div className="flex sm:justify-evenly flex-col sm:flex-row">
					<h5 className="w-fit bg-orange-400 rounded-lg regular ml-6 m-0 sm:ml-0 sm:pl-4 sm:pr-4 px-4 ">
						{props.profesion}
					</h5>
					<a href="" className="text-sky-400 thinm ml-6 sm:ml-0">
						Ver mas de esta categoría
					</a>
				</div>
				<div className="border-2 rounded-xl sm:min-h-72 min-h-48 mt-1 p-10 sm:w-96 w-60 ml-5 ">
					<div className="flex justify-between align-middle m-0  ">
						<h4 className="color-main bold w-max">
							{props.nombre} {props.apellido} <br /> {props.rating}
						</h4>
						<a href="" className="text-sky-400 thin ">
							Ver perfil
						</a>
					</div>

					<p className="text-gray-400 ">
						{props.edad} años {props.aniosProfesion} de profesión
					</p>

					<p className="text-gray-400 ">{props.localidad}</p>
					<p className="text-gray-400">{props.descripcionPersonal}</p>
				</div>			
		</div>
	);
}