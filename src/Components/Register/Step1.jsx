import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Step1() {
	return (
		<div className="h-max flex justify-evenly items-center bg-[#f8f3e0] min-h-[60vh] z-10 pt-20 pb-20">
			<div className="womanImg w-[30vw] h-[60vh] z-20"></div>
			<div className="flex flex-col items-center justify-evenly border-2 border-white h-content min-w-[30vw] bg-white shadow-xl shadow-gray-400 z-10 ">
				<h2 className="bold color-main text-2xl m-5">
					Elegi como queres registrarte
				</h2>
				<button className="bg-white p-5 w-[50%] flex justify-center items-center border-2 border-black hover:text-white hover:bg-[#06023d] cursor-pointer rounded-3xl transition duration-500 mb-2 ">
					<div className=" text-blue-700 pr-10 z-20 ">
						<FaFacebook className="text-4xl" />
					</div>
					<a href="">Continuar con Facebook</a>
				</button>
				<button className="bg-white p-5 w-[50%] flex justify-center items-center border-2 border-black hover:text-white hover:bg-[#06023d] cursor-pointer rounded-3xl transition duration-500 mb-2">
					<div className=" pr-10 z-20">
						<FcGoogle className="text-4xl" />
					</div>
					<a href="">Continuar con Google</a>
				</button>
				<button className="bg-white p-5 w-[50%] flex justify-center items-center border-2 border-black hover:text-white hover:bg-[#06023d] cursor-pointer rounded-3xl transition duration-500 mb-2">
					<div className=" pr-10 z-20">
						<MdOutlineMail className="text-4xl" />
					</div>
					<a href="">Continuar con email</a>
				</button>
				<button className="w-60 h-12 bg-red-600 p-2 text-white rounded-xl shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-red-500 transition duration-500">
					<a href="/step2">Registrarme</a>
				</button>
				<p className="mb-5">
					Al continuar, aceptas nuestros{' '}
					<a href="" className="underline hover:text-red-500">
						terminos de uso
					</a>{' '}
					y{' '}
					<a href="" className="underline hover:text-red-500">
						politica de privacidaed
					</a>
				</p>
			</div>
			<div className="manImg w-[30vw] h-[60vh] z-20"></div>
		</div>
	);
}
