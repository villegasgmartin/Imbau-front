import { useState } from 'react';
import bg from '../../assets/Mujer.png';
import swal from 'sweetalert';
import NavBar from '../Layouts/NavBar';
import { postPrestador } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
export default function PrestadorRegister() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [actualIndex, setActualIndex] = useState(1);
	const handleIndex = (s) => {
		setActualIndex(s);
	};
const dispatch = useDispatch();
const [input, setInput] = useState({
	nombre: '',
	correo: '',
	password: '',
	rol: '',
	rubro: '',
	servicio: '',
	titulo: '',
	descripcion: '',
	precio: 0,
	direccion: '',
	Provicia: '',
	Ciudad: ''
});

const handleChange = (e) => {
	setInput({
		...input,
		[e.target.name]: e.target.value
	});
};

const [repeatPass, setRepeatPass] = useState('');
const handleRepeatPass = (e) => {
	setRepeatPass(e.target.value);
};
const handleSubmit = (e) => {
	e.preventDefault();

	// Regular expression para validación de el email
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	// Chequeo de errores

	if (input.nombre.trim() === '') {
		alert('Por favor complete su nombre');
		return;
	} else if (input.email.trim() === '') {
		alert('Por favor ingrese su email');
		return;
	} else if (!emailRegex.test(input.email)) {
		alert('Email no válido');
		return;
	} else if (input.password.trim() === '') {
		alert('Ingrese una contraseña');
		return;
	} else if (input.password.trim() !== repeatPass) {
		alert('Las contraseñas no coinciden');
		return;
	} else if (input.rubro.trim() === '') {
		alert('Por favor ingrese el rubrp');
		return;
	} else if (input.servicio.trim() === '') {
		alert('Por favor ingrese su servicio');
		return;
	} else if (input.descripcion.trim() === '') {
		alert('Por favor ingrese la descripcion de su servicio');
		return;
	} 

	const formData = new FormData();

	// Agregar los otros campos al FormData
	formData.append('nombre', input.nombre);
	formData.append('email', input.email);
	formData.append('password', input.password);
	formData.append('rol', 'USER_SERVICE');
	formData.append('rubro', input.rubro);
	formData.append('servicio', input.servicio);
	formData.append('titulo', input.titulo);
	formData.append('descripcion', input.descripcion);
	formData.append('precio', input.precio);
	formData.append('direccion', input.direccion);
	formData.append('Provincia', input.Provicia);
	formData.append('Ciudad', input.Ciudad);
	swal({
		title: 'Crear perfil?',
		text: `Verifique sus datos antes de continuar`,
		icon: 'warning',
		buttons: ['No', 'Si']
	}).then((respuesta) => {
		if (respuesta) {
			dispatch(postPrestador(formData));

			// Limpiar los input después de ejecutar la función
			setInput({
				nombre: '',
				email: '',
				password: '',
				rol: '',
				rubro: '',
				servicio: '',
				titulo: '',
				descripcion: '',
				precio: 0,
				direccion: '',
				Provicia: '',
				Ciudad: ''
			});
			setRepeatPass('');
			swal({
				text: `Se han registrado sus datos! Inicie sesion para continuar`,
				icon: 'success'
			});

			setTimeout(function () {
				window.location.href = 'http://127.0.0.1:5173/';
			}, 2000);
		} else {
			swal({
				text: 'No se han registardo sus datos',
				icon: 'info'
			});
		}
	});
};

	return (
		<div className="transition duration-700 ">
			<NavBar />
			{actualIndex === 1 ? (
				// primer slider de registro del email
				<div
					style={{
						backgroundImage: `url(${bg})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right'
					}}
					className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] min-h-fit pb-10"
				>
					<div className=" w-[40%] ">
						<div className="h-min-96 rounded-xl ">
							<div className="">
								<h2 className="w-[50%] bg-orange-400 rounded-lg regular m-0 pt-2 pb-2 pl-7 text-xl">
									Prestador de servicios
								</h2>
							</div>
							<div className="bg-white min-h-80  shadow-lg shadow-gray-400 rounded-xl pt-10">
								<h4 className="text-center color-main bold text-2xl">
									Registrate con tu E-mail
								</h4>
								<div className=" mt-5  flex flex-col justify-center items-center ">
									<input
										type="text"
										placeholder="Nombre de usuario"
										className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
										value={input.nombre}
										name="nombre"
										onChange={handleChange}
									></input>
									<input
										type="text"
										placeholder="E-mail"
										className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
										name="email"
										value={input.email}
										onChange={handleChange}
									></input>

									<input
										placeholder="Contraseña"
										className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
										type="password"
										name="password"
										value={input.password}
										onChange={handleChange}
									></input>

									<input
										placeholder="Repetir contraseña"
										className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
										type="password"
										value={repeatPass}
										onChange={handleRepeatPass}
									></input>
									{/* <select
										name="Rubro"
										id=""
										className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
									>
										<option value="">Rubro</option>
										<option value="">Rubro 1</option>
										<option value="">Rubro 2</option>
										<option value="">Rubro 3</option>
										<option value="">Rubro 4</option>
									</select> */}
									<p className="text-sky-400 text-xl">Adjuntar foto DNI</p>
									<button
										onClick={() => handleIndex(2)}
										className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
									>
										Continuar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 2 ? (
				// segundo slider de informacion acerca de la categoria de servicio
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl pt-10 ">
								<div className="flex justify-center items-center mb-4 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%]  mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className="color-main bold text-3xl">
										Empezá describiendo todo sobre tu servicio
									</h4>
									<p className="bold color-main text-xl pt-5 pb-5">
										¿A qué categoría pertenece tu servicio?
									</p>
									<div className=" max-h-80 overflow-y-scroll">
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria1' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria1')}
										>
											Categoria 1
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria2' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria2')}
										>
											Categoria 2
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria3' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria3')}
										>
											Categoria 3
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria4' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria4')}
										>
											Categoria 4
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria5' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria5')}
										>
											Categoria 5
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria6' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria6')}
										>
											Categoria 6
										</button>
										<button
											className={`w-[100%] bg-gray-50 text-gray-600 border-b-2 text-start p-5 ${
												selectedCategory === 'Categoria5' ? 'bg-sky-400' : ''
											}`}
											onClick={() => setSelectedCategory('Categoria7')}
										>
											Categoria 7
										</button>
									</div>
									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(1)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={() => handleIndex(3)}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 3 ? (
				// tercer slider de ubicacion del servicio
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl pt-10 text-center">
								<div className="flex justify-center  items-center mb-4 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%]  mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className=" color-main bold text-3xl ">
										Empezá describiendo todo sobre tu servicio
									</h4>
									<p className="bold color-main text-xl pt-5 pb-5">
										¿Cuál es la ubicación exacta donde ofreces el servicio?
									</p>
									<div className="flex flex-col items-start ml-20">
										<input
											type="text"
											placeholder="Direccion"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2"
										/>

										{/* <p className="text-sm text-gray-400">
										Incluye calle, numero, barrio y ciudad
									</p> */}
										<div className="flex justify-center items-center">
											<input type="checkbox" className="mr-2" />{' '}
											<p className="text-gray-600 mt-4 mb-4">
												Ocultar dirección exacta
											</p>
										</div>
									</div>
									{/* <div className="flex justify-center">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d360647.1260027701!2d-60.72228663870135!3d-32.880786836574345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1710805787709!5m2!1ses-419!2sar"
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										className="w-[90%] h-[40vh] mb-12 mt-12"
										></iframe>
									</div> */}
									<div className="flex flex-col items-start justify-center ml-20">
										<input
											type="text"
											placeholder="Provincia"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 mb-4"
										/>
										<input
											type="text"
											placeholder="Ciudad"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 mb-4"
										/>
										<input
											type="text"
											placeholder="Barrio"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 mb-4"
										/>
									</div>

									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(2)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={() => handleIndex(4)}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 4 ? (
				// cuarto slider de experiencia en el servicio
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl p-20 text-center">
								<div className="flex justify-center  items-center mb-4 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%]  mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className="color-main bold text-3xl">
										Completa las carateristicas de tu servicio
									</h4>
									<p className="thin  text-lg pt-5 pb-5 text-start text-[#06023d]">
										Hacelo para tener una mejor ubicación en los resultados de
										búsqueda y aumentar las posibilidades de que te contraten.
									</p>
									<div className="flex flex-col items-start">
										<input
											type="number"
											placeholder="años de experiencia"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 mb-10"
										/>
										<div className="flex justify-start items-center">
											<p className="mr-5 text-[#06023d]">
												Asesoramiento online?{' '}
											</p>
											<input type="checkbox" className="w-5 h-5 " />
										</div>
									</div>
									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(3)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={() => handleIndex(5)}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 5 ? (
				// quinto slider de titulo y descripcion del servicio
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl p-20 text-center">
								<div className="flex justify-center  items-center mb-4 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%]  mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className="color-main bold text-3xl">
										Agregá un título y una descripción
									</h4>
									<p className="thin text-gray-400 text-lg pt-5 pb-5 text-start">
										Agregá las características que distinguen a tu servicio
									</p>
									<div className="flex flex-col items-start">
										<p>Título (obligatorio)</p>
										<input
											type="text"
											placeholder="años de experiencia"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 "
											max={60}
										/>
										<p className="ml-80">0/60</p>
										<p>Descripción</p>
										<input
											type="text"
											placeholder="años de experiencia"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-20 pl-2 "
											max={300}
										/>
										<p className="ml-80">0/300</p>
										<div className="w-96 h-20 text-red-500 border-x-8 border-y-2 rounded-2xl border-red-500 mt-10 flex justify-center items-center bold">
											No incluyas datos de contacto, e-mail, teléfono,
											direcciones ni enlaces a redes sociales.
										</div>
									</div>
									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(4)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={() => handleIndex(6)}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 6 ? (
				// sexto slider imagen y video del servicio
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl p-20 text-center">
								<div className="flex justify-center items-center mb-6 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-gray-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className="color-main bold text-3xl">
										Subi fotos de tu servicio
									</h4>
									<p className="thin text-gray-400 text-lg pt-5 pb-5 text-start">
										Para no perder exposición, asegurate de que tus fotos no
										contengan textos promocionales, datos de contacto, logos ni
										marcas de agua.
									</p>
									<div className="w-[100%] h-fit p-2 color-main  border-l-8 border-l-orange-400 rounded-2xl  mt-10 flex justify-center items-center thin bg-gray-200 mb-10">
										Revisá que todas las imágenes estén nítidas, bien iluminadas
										y en formato .jpg o .png. Considerá que una buena imagen
										debe medir 1200 x 900 px. De lo contrario, que tenga un
										mínimo de 600 x 400 px.
									</div>
									<div className="flex flex-col items-start ">
										<p className="text-xl mb-2">
											Agregá la foto de tu servicio
										</p>
										<input
											type="file"
											placeholder="agregar fotos"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 text-center "
											max={60}
										/>
										<h4 className="color-main bold text-3xl mt-12">
											¡Podés agregar video!
										</h4>
										<p className="thin text-gray-400 text-lg pb-5 text-start">
											Agregá tu video de YouTube y mostrá de la mejor manera tu
											servicio.
										</p>

										<input
											type="text"
											placeholder="Link de YouTube"
											className="w-96 border-2 border-gray-400 text-gray-400 rounded-xl h-20 pl-2 "
											max={300}
										/>
									</div>
									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(5)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={() => handleIndex(7)}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : actualIndex === 7 ? (
				// septimo slider de condiciones de contratacion
				<div className="w-[99vw] min-h-fit flex justify-center items-start pt-10 pb-10  bg-[#f8f3e0]">
					<div className="w-[40%]">
						<div className="h-min-96 rounded-xl">
							<div className="bg-white min-h-80 shadow-lg shadow-gray-400 rounded-xl p-20 ">
								<div className="flex justify-center  items-center mb-4 ">
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] h-2 mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
									<div className=" border-4 rounded-xl  border-orange-400 w-[12%] mr-2"></div>
								</div>
								<div className="w-[90%] flex flex-col ml-10">
									<h4 className="color-main bold text-3xl">
										Definí las condiciones de contratación
									</h4>

									<p>¿Cuál es el precio?</p>
									<div className="flex justify-center items-center mt-5">
										<select
											name=""
											id=""
											className="w-[20%] border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 mr-10 "
										>
											<option value="">$</option>
											<option value="">u$d</option>
										</select>

										<input
											type="number"
											placeholder="1000"
											className="w-[70%] border-2 border-gray-400 text-gray-400 rounded-xl h-10 pl-2 "
										/>
									</div>
									<div className="w-[100%] h-20 color-main  border-l-8 border-l-orange-400 rounded-2xl  mt-10 flex justify-center items-center thin bg-gray-200 mb-10">
										Si tu servicio no tiene un precio fijo, podés acordarlo con
										la persona interesada luego de que te contacte y cobrá lo
										que corresponda.
									</div>
									<div className="flex justify-evenly">
										<button
											onClick={() => handleIndex(6)}
											className="w-60 h-12  p-2 mt-10 text-red-600 rounded-xl border-2 border-red-600 shadow-lg shadow-gray-400 mb-5 hover:bg-red-600 hover:text-white transition duration-500"
										>
											Atras
										</button>
										<button
											onClick={handleSubmit}
											className="w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500"
										>
											Continuar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
7