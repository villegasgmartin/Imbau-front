import compradorImg from '../../assets/Comprador.png';
import vendedorImg from '../../assets/Lavarropa_1.png';
import prestadorImg from '../../assets/Herramienta_1.png';
import NavBar from '../Layouts/NavBar';

export default function Step2() {
	return (
		<>
			<NavBar />
			<div className="min-h-[60vh] bg-[#373463] ">
				<h1 className="text-center text-white text-2xl pt-20 pb-20">
					¿Cómo querés registarte?
				</h1>
				<div className="flex justify-evenly items-center ">
					<a href="/register-comprador" className="flex flex-col justify-center items-center w-96">
						<img src={compradorImg} alt="" className="w-60 mb-5" />
						<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg  hover:bg-white hover:text-[#373463] ">
							Comprador
						</h2>
					</a>

					<a
						href="/register-vendedor"
						className="flex flex-col justify-center items-center w-96"
					>
						<img
							src={vendedorImg}
							alt=""
							className="w-60 mb-5 rounded-full bg-white"
						/>
						<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#373463] ">
							Vendedor de productos
						</h2>
					</a>
					<a
						href="/register-prestador"
						className="flex flex-col justify-center items-center w-96"
					>
						<img
							src={prestadorImg}
							alt=""
							className="w-60 mb-5 rounded-full bg-white"
						/>
						<h2 className="p-4 text-lg thin drop-shadow-3xl text-center text-white border-2 border-white rounded-lg  hover:bg-white hover:text-[#373463] ">
							{' '}
							Prestador de servicios
						</h2>
					</a>
				</div>
				<button className="text-xl text-white ml-60 mt-20 mb-20 hover:text-sky-400 hover:underline">
					{' '}
					<a href="">{'<'} Anterior</a>
				</button>
			</div>
		</>
	);
}
