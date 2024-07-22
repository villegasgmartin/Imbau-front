import hombre from '../../assets/Hombre.png';
import mujer from '../../assets/Mujer.png'

import BuyerNavBar from '../Layouts/BuyerNavBar';
import SellerNavBar from '../Layouts/SellerNavBar';
import ServicesNavBar from '../Layouts/ServicesNavBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions';
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
			{rol === 'USER_SERVICE' ? (
				<ServicesNavBar />
			) : rol === 'USER_SELLER' ? (
				<SellerNavBar />
			) : (
				<BuyerNavBar />
			)}

			<div className="w-[99vw] max-h-[80vh] overflow-hidden flex justify-center items-start pt-10 bg-[#f8f3e0] min-h-fit pb-10">
				<img src={hombre} alt="" />
				<div className=" w-[100%] ">
					<div className="h-min-96 rounded-xl ">
						<div className="bg-white min-h-80  shadow-lg shadow-gray-400 rounded-xl pt-10 mt-10 w-[40%] h-fit absolute top-[30%] left-0 right-0 bottom-0 m-auto">
							<h4 className="text-center color-main bold text-2xl">
								Iniciá sesión con tu email
							</h4>
							<div className=" mt-5  flex flex-col justify-center items-center ">
								<input
									type="text"
									placeholder="E-mail"
									className="text-xl color-main  border-2 border-gray-300 mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
									value={input.correo}
									name="correo"
									onChange={handleChange}
								></input>

								<input
									placeholder="Contraseña"
									className="text-xl color-main  border-2 border-gray-300 mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
									type="password"
									name="password"
									value={input.password}
									onChange={handleChange}
								></input>
								<button
									onClick={() => handleSubmit()}
									className="w-60 h-12  p-2 mb-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400  hover:bg-[#06023d] hover:text-white transition duration-500"
								>
									Continuar
								</button>
								<p className="text-[#06023d]">
									Al continuar, aceptás nuestros{' '}
									<span className="bold">
										{' '}
										<a href="" className="underline ">
											términos de uso{' '}
										</a>
										y{' '}
										<a href="" className="underline">
											política de privacidad
										</a>{' '}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<img src={mujer} alt="" />
			</div>
		</div>
	);
}
