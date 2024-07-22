import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import logo from '../../assets/Isotipo crema.png'

export default function Footer() {
	return (
		<footer className="bg-[#06023d] text-white pt-8 sm:h-fit ">
			<div className="sm:block hidden">
				<div className="flex justify-evenly ">
					<div className="footer-contact">
						<h3 className="text-white text-xl bold">Atencion al cliente</h3>
						<h4 className="text-gray-500 text-lg">0800 122 0338</h4>
						<h4 className="text-gray-500 text-lg">0810 999 3728</h4>
						<h4 className="text-gray-500 text-lg">LU-VI de 09.00 a 18.00</h4>
						<h4 className="text-gray-500 text-lg">SA de 9.00 a 13.00</h4>
						<h4 className="text-gray-500 text-lg">contacto@imbau.com</h4>
					</div>
					<div className="flex justify-between list-none">
						<div className="flex flex-col justify-evenly items-start w-[25vw]">
							<li className="text-gray-500 text-lg">Terminos y condiciones</li>
							<li className="text-gray-500 text-lg">Vende en Imbau</li>
							<li className="text-gray-500 text-lg">Defensa al consumidor</li>
							<li className="text-gray-500 text-lg">Ayuda</li>
						</div>
						<div className="flex justify-center mt-10">
							<AiOutlineFacebook className="text-white text-7xl mr-5" />
							<AiOutlineInstagram className="text-white text-7xl mr-5" />
							<AiOutlineYoutube className="text-white text-7xl m" />
						</div>
						<div className="footer-logo"></div>
					</div>
				</div>
				<p className="mt-10 ml-32">
					Copyright 1927-2023 | Todos los derechos reservados imbau.com.Imbau
					SRL | Rosario | Argentina
				</p>
			</div>
			<div className="sm:hidden block h-fit">
				<div className="flex flex-col h-fit">
					<div className="flex justify-evenly">
						<div className="footer-contact">
							<h3 className="text-white text-sm bold">Atencion al cliente</h3>
							<h4 className="text-gray-500 text-sm">0800 122 0338</h4>
							<h4 className="text-gray-500  text-sm">0810 999 3728</h4>
							<h4 className="text-gray-500  text-sm">LU-VI de 09.00 a 18.00</h4>
							<h4 className="text-gray-500  text-sm">SA de 9.00 a 13.00</h4>
							<h4 className="text-gray-500  text-sm">contacto@imbau.com</h4>
						</div>
						<div className="flex justify-between list-none">
							<div className="flex flex-col justify-evenly items-start w-[25vw]">
								<li className="text-gray-500  text-sm">
									Terminos y condiciones
								</li>
								<li className="text-gray-500  text-sm">Vende en Imbau</li>
								<li className="text-gray-500 text-sm">Defensa al consumidor</li>
								<li className="text-gray-500  text-sm">Ayuda</li>
							</div>
						</div>
					</div>
					<div className='flex justify-evenly'>
					<div className="flex justify-center mt-10">
						<AiOutlineFacebook className="text-white text-2xl mr-5" />
						<AiOutlineInstagram className="text-white text-2xl mr-5" />
						<AiOutlineYoutube className="text-white text-2xl " />
					</div>
					<img src={logo} alt="" className='w-20'/>					
				</div>
				<p className="text-sm mb-5">
					Copyright 1927-2023 | Todos los derechos reservados imbau.com.Imbau
					SRL | Rosario | Argentina
				</p>
				</div>

			</div>
		</footer>
	);
}
