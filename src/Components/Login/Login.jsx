import hombre from '../../assets/Hombre.png';
import mujer from '../../assets/Mujer.png'
import "../Styles/Login.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions';
import NavBar from '../Layouts/NavBar';
export default function Login() {
	const dispatch = useDispatch();
	const [input, setInput] = useState({		
		correo: '',
		password: '',
		
	});

	const rol = localStorage.getItem('rol')

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	};



	const handleSubmit = () => {
		

		// Regular expression para validación de el email
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

		// Chequeo de errores

         if (input.correo.trim() === '') {
			alert('Por favor ingrese su email');
			return;
		} else if (!emailRegex.test(input.correo)) {
			alert('Email no válido');
			return;
		} else if (input.password.trim() === '') {
			alert('Ingrese una contraseña');
			return;
		} 		
		dispatch(loginUser(input))
			
		};
	

	return (
		<div className="transition duration-700 ">
		<NavBar/>
		<div className="login-main-container">
			<div className="login-container">
				<h4 className="login-title">
					Iniciá sesión con tu email
				</h4>
				<div className="login-info-container">
					<input
						type="text"
						placeholder="E-mail"
						className="login-input"
						value={input.correo}
						name="correo"
						onChange={handleChange}
					></input>
					<input
						placeholder="Contraseña"
						className="login-input"
						type="password"
						name="password"
						value={input.password}
						onChange={handleChange}
					></input>
					<div className='login-button-container'>
						<button
							onClick={() => handleSubmit()}
							className="login-button"
						>
							Iniciar sesión
						</button>
					</div>
					<p className="login-text">
						Al continuar, aceptás nuestros <a href="" className='login-underline'>términos de uso</a> y <a href="" className='login-underline'>política de privacidad</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	);
}
