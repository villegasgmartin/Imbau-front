import bg from '../../assets/Hombre.png';
import compradorImg from '../../assets/Comprador.png';
import vendedorImg from '../../assets/Lavarropa_1.png';
import prestadorImg from '../../assets/Herramienta_1.png';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  register } from '../../../redux/actions';
import "../Styles/RegisterForm.css"
import NavBar from '../Layouts/NavBar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
				<div className="registerForm-main-container">
					<div className="registerForm-container">
						<h4 className='registerForm-title'>
							Registrate con tu E-mail
						</h4>
						<div className="registerForm-info">
							<input
								type="text"
								placeholder="Nombre de usuario"
								className="registerForm-input"
								value={input.nombre}
								name="nombre"
								onChange={handleChange}
							></input>
							<input
								type="text"
								placeholder="E-mail"
								className="registerForm-input"
								value={input.correo}
								name="correo"
								onChange={handleChange}
							></input>

							<input
								placeholder="Contraseña"
								className="registerForm-input"
								type="password"
								name="password"
								value={input.password}
								onChange={handleChange}
							></input>

							<input
								placeholder="Repetir contraseña"
								className="registerForm-input"
								type="password"
								value={repeatPass}
								onChange={handleRepeatPass}
							></input>
							<div className='registerForm-button-container'>
								<button
									onClick={() => handleIndex(2)}
									className={
										!input.nombre ||
										!input.password ||
										!input.correo ||
										input.password !== repeatPass
											? 'hidden'
											: "registerForm-button"
									}
								>
									Continuar
								</button>
							</div>
						</div>
					</div>
				</div>
			) : index === 2 ? (
				<div className="register-main-container">
					<h1 className="register-title">
						¿Cómo querés registarte?
					</h1>
					<div className="register-container">
						<button
							value="USER_BUYER"
							className={
								input.rol === 'USER_BUYER'
									? 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10 border-2 border-green-400 rounded-xl bg-green-500'
									: 'flex flex-col justify-center items-center w-96 sm:mb-0 mb-10'
							}
							onClick={(e) => handleSelectRole(e)}
						>
							<div className='register-buttonText-container'>
								<div><img src={compradorImg} alt="" className="register-button-img01" /></div>
								<h2 className="register-button-text">
									Comprador
								</h2>
							</div>
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
							<div className='register-buttonText-container'>
								<div className='register-button-img-container'>
									<img
										src={prestadorImg}
										alt=""
										className="register-button-img"
									/>
								</div>
								<h2 className="register-button-text">
									Prestador de servicios
								</h2>
							</div>
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
							<div className='register-buttonText-container'>
								<div className='register-button-img-container'>
									<img
										src={vendedorImg}
										alt=""
										className="register-button-img"
									/>
								</div>
								<h2 className="register-button-text">
									Vendedor de productos
								</h2>
							</div>
						</button>
					</div>
					<div className="register-button-container">
						<button
							className="register-back-button"
							onClick={() => handleIndex(1)}
						><ArrowBackIosIcon/>
							Anterior
						</button>
						<button
							className="register-button"
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
