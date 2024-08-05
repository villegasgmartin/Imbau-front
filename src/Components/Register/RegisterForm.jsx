import bg from '../../assets/Hombre.png';
import compradorImg from '../../assets/Comprador.png';
import vendedorImg from '../../assets/Lavarropa_1.png';
import prestadorImg from '../../assets/Herramienta_1.png';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  register } from '../../../redux/actions';
import NavBar from '../Layouts/NavBar';

export default function RegisterForm() {
	const [index, setIndex] = useState(1);
	const handleIndex = (s) => {
		setIndex(s);
	};

	const rol = localStorage.getItem('rol')

	const dispatch = useDispatch();
	const [input, setInput] = useState({
		nombre: '',
		correo: '',
		password: '',
		rol: ''
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	};

	const handleSelectRole = (e) => {
		const selectedRole = e.currentTarget.value;
		setInput((prevInput) => ({
			...prevInput,
			rol: selectedRole
		}));
	};

	const [repeatPass, setRepeatPass] = useState('');
	const handleRepeatPass = (e) => {
		setRepeatPass(e.target.value);
	};

	useEffect(() => {
		console.log(input);
	}, [input]);

	const handleSubmit = () => {
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

		if (input.nombre.trim() === '') {
			alert('Por favor complete su nombre');
			return;
		} else if (input.correo.trim() === '') {
			alert('Por favor ingrese su email');
			return;
		} else if (!emailRegex.test(input.correo)) {
			alert('Email no válido');
			return;
		} else if (input.password.trim() === '') {
			alert('Ingrese una contraseña');
			return;
		} else if (input.password.trim() !== repeatPass) {
			alert('Las contraseñas no coinciden');
			return;
		}

		swal({
			title: 'Crear perfil?',
			text: `Verifique sus datos antes de continuar`,
			icon: 'warning',
			buttons: ['No', 'Si']
		}).then((respuesta) => {
			if (respuesta) {
				dispatch(register(input));

				setInput({
					nombre: '',
					correo: '',
					password: ''
				});
				setRepeatPass('');
				swal({
					text: `Se han registrado sus datos! Inicie sesión para ingresar a su cuenta!`,
					icon: 'success'
				});

				setTimeout(function () {
					window.location.href = '/';
				}, 3000);
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
		<NavBar/>
			{index === 1 ? (
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
							<div className="bg-white h-[500px]  shadow-lg shadow-gray-400 rounded-xl pt-10">
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
										value={input.correo}
										name="correo"
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
									<button
										onClick={() => handleIndex(2)}
										className={
											!input.nombre ||
											!input.password ||
											!input.correo ||
											input.password !== repeatPass
												? 'hidden'
												: 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
										}
									>
										Continuar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : index === 2 ? (
				<div className="min-h-[60vh] bg-[#373463] ">
					<h1 className="text-center text-white text-2xl pt-20 pb-20">
						¿Cómo querés registarte?
					</h1>
					<div className="flex sm:flex-row flex-col  justify-evenly items-center ">
						<button
							value="USER_BUYER"
							className={
								input.rol === 'USER_BUYER'
									? 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10 border-2 border-green-400 rounded-xl bg-green-500'
									: 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10'
							}
							onClick={(e) => handleSelectRole(e)}
						>
							<img src={compradorImg} alt="" className="w-60 mb-5" />
							<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg  hover:bg-white hover:text-[#373463]">
								Comprador
							</h2>
						</button>

						<button
							value="USER_SELLER"
							className={
								input.rol === 'USER_SELLER'
									? 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10 border-2 border-green-400 rounded-xl bg-green-500'
									: 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10'
							}
							onClick={(e) => handleSelectRole(e)}
						>
							<img
								src={vendedorImg}
								alt=""
								className="w-60 mb-5 rounded-full bg-white"
							/>
							<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#373463] ">
								Vendedor de productos
							</h2>
						</button>

						<button
							value="USER_SERVICE"
							className={
								input.rol === 'USER_SERVICE'
									? 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10 border-2 border-green-400 rounded-xl bg-green-500'
									: 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10'
							}
							onClick={(e) => handleSelectRole(e)}
						>
							<img
								src={prestadorImg}
								alt=""
								className="w-60 mb-5 rounded-full bg-white"
							/>
							<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg  hover:bg-white hover:text-[#373463] ">
								Prestador de servicios
							</h2>
						</button>
					</div>
					<div className="flex flex-between">
						<button
							className="text-xl text-white ml-60 mt-20 mb-20 hover:text-sky-400 hover:underline"
							onClick={() => handleIndex(1)}
						>
							Anterior
						</button>
						<button
							className="text-xl text-white ml-60 mt-20 mb-20 hover:text-sky-400 hover:underline"
							onClick={() => handleSubmit()}
						>
							Continuar
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}
