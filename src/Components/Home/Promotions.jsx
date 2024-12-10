import "../Styles/Home/Promotions.css"
import { Fade } from 'react-awesome-reveal';

export default function Promotions() {
	return (
		<div className="promotions-main-container">
			<Fade  triggerOnce={true} duration={800} delay={300}>
			<div className="promotions-title-container">
				<h2 className="promotions-title">Promociones bancarias</h2>
				{/* <a href="/" className="text-sky-400 hover:underline text-2xl ">
					ver mas
				</a> */}
			</div>
			</Fade>
			<div className="promotions-cards-container">
				<Fade triggerOnce={true} duration={800} delay={300} cascade={true}>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-[#D9D9D9] rounded-[20px]">
					<div className="promotions-day" style={{backgroundColor: "#06023D"}}>
						LUNES
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center">
						<h4 className="ml-5 mb-0 color-main bold">Proximamente</h4>
					</div>
				</li>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-[#D9D9D9] rounded-[20px]">
					<div className="promotions-day" style={{backgroundColor: "#EA8C06"}}>
						MARTES
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center">
						<h4 className="ml-5 mb-0 color-main bold text-center">
							Proximamente
						</h4>
					</div>
				</li>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-[#D9D9D9] rounded-[20px]">
					<div className="promotions-day" style={{backgroundColor: "#065D4A"}}>
						MIÉRCOLES
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center">
						<h4 className="ml-5 mb-0 color-main bold text-center">
							Proximamente
						</h4>
					</div>
				</li>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-[#D9D9D9] rounded-[20px]">
					<div className="promotions-day" style={{backgroundColor: "#E00A14"}}>
						JUEVES
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center">
						<h4 className="ml-5 mb-0 color-main bold text-center">
							Proximamente
						</h4>
					</div>
				</li>
				<li className="h-80 w-60 bg-white ml-15 mr-15 list-none border-2 border-[#D9D9D9] rounded-[20px]">
					<div className="promotions-day viernes" style={{backgroundColor: "#F9C7CA"}}>
						VIERNES
					</div>
					<div className="h-[75%] flex flex-col justify-center items-center">
						<h4 className="ml-5 mb-0 color-main bold text-center">
							Proximamente
						</h4>
					</div>
				</li>
				</Fade>
			</div>
			<div className="flex flex-col sm:hidden ">
				<div className="flex justify-evenly mb-6">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="promotions-day" style={{backgroundColor: "#06023D"}}>
							LUNES
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main text-center ">Proximamente</h4>
							{/* <h4 className="color-main  text-center">Banco ICBC</h4> */}
						</div>
					</li>
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="promotions-day" style={{backgroundColor: "#EA8C06"}}>
							MARTES
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">Proximamente</h4>
							{/* <h4 className="color-main  text-center">Banco Macro</h4> */}
						</div>
					</li>{' '}
				</div>
				<div className="flex justify-evenly mb-6">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="promotions-day" style={{backgroundColor: "#065D4A"}}>
							MIÉRCOLES
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className=" mb-0 color-main text-center ">Proximamente</h4>
							{/* <h4 className="color-main  text-center">Banco HCBC</h4> */}
						</div>
					</li>{' '}
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div  className="promotions-day" style={{backgroundColor: "#E00A14"}}>
							JUEVES
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">Proximamente</h4>
							{/* <h4 className="color-main text-center	  ">
								Banco Credicop
							</h4> */}
						</div>
					</li>{' '}
				</div>
				<div className="flex justify-center">
					<li className="h-48 w-32 bg-white ml-15 mr-15 list-none border-2 border-gray-400 rounded-xl">
						<div className="promotions-day viernes" style={{backgroundColor: "#F9C7CA"}}>
							VIERNES
						</div>
						<div className="h-[75%] flex flex-col justify-center items-center ">
							<h4 className="mb-0 color-main  text-center ">
							Proximamente
							</h4>
							{/* <h4 className="color-main text-center ">
								Tarjeta Naranja
							</h4> */}
						</div>
					</li>
				</div>
			</div>
		</div>
	);
}
