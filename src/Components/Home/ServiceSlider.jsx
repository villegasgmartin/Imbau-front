import { useEffect, useState } from 'react';

import ServiceHomeCard from './ServiceHomeCard';
import perfImg from '../../assets/perfil.png';

const personas = [
	{
		profesion: 'Médico',
		nombre: 'Juan',
		apellido: 'González',
		rating: 4,
		edad: 35,
		aniosProfesion: 10,
		numeroMatricula: '12345',
		localidad: 'Funes',
		descripcionPersonal:
			'Especialista en medicina interna con 10 años de experiencia.',
		profileImg: perfImg
	},
	{
		profesion: 'Ingeniero',
		nombre: 'María',
		apellido: 'López',
		rating: 5,
		edad: 28,
		aniosProfesion: 6,
		numeroMatricula: '67890',
		localidad: 'Rosario',
		descripcionPersonal:
			'Ingeniera civil enfocada en proyectos de infraestructura sostenible.',
		profileImg: perfImg
	},
	{
		profesion: 'Abogado',
		nombre: 'Roberto',
		apellido: 'Sanchez',
		rating: 3,
		edad: 42,
		aniosProfesion: 15,
		numeroMatricula: '54321',
		localidad: 'Rosario',
		descripcionPersonal:
			'Especializado en derecho corporativo y resolución de conflictos legales.',
		profileImg: perfImg
	},
	{
		profesion: 'Carpintero',
		nombre: 'Federico',
		apellido: 'Fernandez',
		rating: 4,
		edad: 35,
		aniosProfesion: 10,
		numeroMatricula: '12345',
		localidad: 'Funes',
		descripcionPersonal:
			'Especialista en medicina interna con 10 años de experiencia.',
		profileImg: perfImg
	},
	{
		profesion: 'Electricista',
		nombre: 'Gonzalo',
		apellido: 'Paez',
		rating: 5,
		edad: 28,
		aniosProfesion: 6,
		numeroMatricula: '67890',
		localidad: 'Rosario',
		descripcionPersonal:
			'Ingeniera civil enfocada en proyectos de infraestructura sostenible.',
		profileImg: perfImg
	},
	{
		profesion: 'Plomero',
		nombre: 'Carlos',
		apellido: 'Martínez',
		rating: 3,
		edad: 42,
		aniosProfesion: 15,
		numeroMatricula: '54321',
		localidad: 'Rosario',
		descripcionPersonal:
			'Especializado en derecho corporativo y resolución de conflictos legales.',
		profileImg: perfImg
	}
];

export default function ServiceSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(3);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % personas.length);
	};

	const handleResize = () => {
		if (window.innerWidth < 850) {
			setItemsToShow(10);
		} else {
			setItemsToShow(5);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="sm:h-max sm:relative ">
			<div className=" text-center sm:flex sm:items-center sm:pt-20 sm:pb-10">
				<h1 className="color-main  ml-10 mr-10  ">
					SERVICIOS DESTACADOS
				</h1>
				<a href="" className="text-sky-400 sm:text-3xl thin  ">
					ver mas
				</a>
			</div>			
				<div className="sm:flex sm:justify-center flex max-w-[100vw] overflow-x-scroll sm:overflow-x-hidden">
					{personas.slice(currentIndex, currentIndex + itemsToShow).map((p) => (
						<ServiceHomeCard
							key={p.numeroMatricula}
							profesion={p.profesion}
							profileImg={p.profileImg}
							nombre={p.nombre}
							apellido={p.apellido}
							rating={p.rating}
							edad={p.edad}
							aniosProfesion={p.aniosProfesion}
							localidad={p.localidad}
							numeroMatricula={p.numeroMatricula}
							descripcionPersonal={p.descripcionPersonal}
						/>
					))}
					<div className="sm:flex flex-col align-middle items-center justify-center h-96 hidden">
						<button
							onClick={handleNext}
							className="bg-white text-[#0485f0] h-16 w-16 text-3xl  border-sky-400 border-2 rounded-full hover:bg-sky-400 hover:text-white pb-2 flex items-center justify-center"
						>
							&gt;
						</button>
					</div>				
			</div>
		</div>
	);
}
