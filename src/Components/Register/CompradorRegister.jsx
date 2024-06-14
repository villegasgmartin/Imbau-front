
import bg from '../../assets/Hombre.png';
import swal from 'sweetalert';
import NavBar from '../Layouts/NavBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComprador } from '../../../redux/actions';
export default function CompradorRegister() {
const dispatch = useDispatch()
const [input, setInput] = useState({
	nombre: '',
	correo: '',
	password: '',
	rol: 'USER_BUYER'
});

const handleChange = (e) => {		
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	}

	const [repeatPass, setRepeatPass] = useState('');
	const handleRepeatPass = (e) => {
		setRepeatPass(e.target.value);
	};



	const handleSubmit = () => {		

		// Regular expression para validación de el email
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

		// Chequeo de errores

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
			return}

			// const formData = new FormData();

			// // Agregar los otros campos al FormData
			// formData.append('nombre', input.nombre);					
			// formData.append('correo', input.correo);
			// formData.append('password', input.password);
			// formData.append('rol', 'USER_BUYER');					
		swal({
			title: 'Crear perfil?',
			text: `Verifique sus datos antes de continuar`,
			icon: 'warning',
			buttons: ['No', 'Si']
		}).then((respuesta) => {
			if (respuesta) {
					dispatch(postComprador(input));

					// Limpiar los input después de ejecutar la función
					setInput({						
						nombre: '',						
						correo: '',
						password: ''					
					});
					setRepeatPass('');
				swal({
					text: `Se han registrado sus datos! Inicie sesion para continuar`,
					icon: 'success'
				});

				// setTimeout(function () {
				// 	window.location.href = 'http://127.0.0.1:5173/';
				// }, 2000);
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
							<h2 className="w-[50%] bg-[#065d4a] rounded-lg regular m-0 pt-2 pb-2 pl-7 text-xl">
								Comprador
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
									onClick={() => handleSubmit()}
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
	);
}

