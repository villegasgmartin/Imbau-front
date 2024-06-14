import womanImg from '../../assets/Mujer.png'
export default function Banner() {
	return (
		<>
			<div className="sm:flex justify-evenly h-96 bg-[#f8f3e0] hidden">
				<div className="womanImg w-[30vw] "></div>
				<h1 className="w-[30vw] thinItalic text-6xl flex flex-col align-middle justify-center color-main ">
					Todo lo qué necesitás <strong>para tu hogar</strong>
				</h1>
				<ul className="w-[30vw] flex flex-col justify-evenly align-middle text-2xl color-main italic">
					<li>
						{'-->'} Materiales de <strong>construcción</strong>
					</li>
					<li>
						{'-->'} <strong>Electrodomésticos</strong>
					</li>
					<li>
						{'-->'} <strong>Muebles</strong> de diseño
					</li>
					<li>
						{'-->'} <strong>Decoración</strong>
					</li>
					<li>
						{'-->'} <strong>Profesionales</strong>
					</li>
				</ul>
			</div>
			<div className="sm:hidden flex flex-col bg-[#f8f3e0] h-fit pb-4  ">
				<div className="h-0 ">
					<img src={womanImg} alt="" className="overflow-hidden h-20 " />
				</div>
				<div className="flex flex-col text-center items-center justify-evenly ">
					<h1 className="thinItalic flex flex-col text-3xl color-main text-center mt-10 ">
						Todo lo qué necesitás <strong>para tu hogar</strong>
					</h1>
					<ul className="flex flex-col justify-evenly  text-xl color-main italic">
						<li>
							{'-->'} Materiales de <strong>construcción</strong>
						</li>
						<li>
							{'-->'} <strong>Electrodomésticos</strong>
						</li>
						<li>
							{'-->'} <strong>Muebles</strong> de diseño
						</li>
						<li>
							{'-->'} <strong>Decoración</strong>
						</li>
						<li>
							{'-->'} <strong>Profesionales</strong>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
