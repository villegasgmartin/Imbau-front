export default function ServicesBanner() {
	return (
		<div className="flex justify-evenly h-96 bg-[#f8f3e0]">
			<div className="womanImg w-[30vw] "></div>
			<h1 className="w-[30vw] thinItalic text-8xl flex flex-col align-middle justify-center color-main ">
				<strong>Qué servicios buscas?</strong>
			</h1>
			<div className="flex flex-col justify-center align-middle ml-10 w-[20vw]">
				{' '}
				<select
					type="text"
					name=""
					id=""
					placeholder="Localidad"
					className="w-96 h-12 rounded-xl mb-10 text-sky-400 thinItalic "
				>
					{' '}
					<option value="" disabled selected>
						Localidad{' '}
					</option>{' '}
				</select>{' '}
				<select
					type="text"
					name=""
					id=""
					placeholder="Categoria de servicio"
					className="w-96 h-12 rounded-xl mb-10 text-sky-400 thinItalic "
				>
					{' '}
					<option value="" disabled selected>
						Categoria del servicio
					</option>{' '}
				</select>
				<button className="w-80 h-12 shadow-md shadow-gray-400 bg-white text-sky-400 rounded-xl hover:shadow-xl hover:shadow-sky-400 hover:bg-sky-400 hover:text-white transition duration-500 ">
					Buscar
				</button>
			</div>
		</div>
	);
}
