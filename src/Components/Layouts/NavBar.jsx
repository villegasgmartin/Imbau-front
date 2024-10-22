import { useDispatch } from 'react-redux';
import logo from '../../assets/Logotipo crema.png';
import userFem from '../../assets/UserFem.png';
import { useState } from 'react';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { logout } from '../../../redux/actions';

export default function NavBar() {
	const token = localStorage.getItem('token');
	const username = localStorage.getItem('username');
	const userId = localStorage.getItem('userId');
	const rol = localStorage.getItem('rol');
	const dispatch = useDispatch()

	const [navbar, setNavbar] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleLogOut = () => {
		dispatch(logout())
		localStorage.removeItem('token')
		localStorage.removeItem('username');         
		localStorage.removeItem('userId') 
		localStorage.removeItem('rol');
		window.location.href = '/'
	}

	return (
		<nav className="w-full bg-[#06023D] shadow z-50 sm:rounded-lg opacity-90 text-white">
			<div className="justify-between px-4 mx-auto sm:items-center md:px-8 sm:hidden">
				<div>
					<div className="flex items-center justify-around py-3 md:py-5 md:block">
						<div>
							<img src={logo} alt="not found" className="w-36 sm:w-48" />
						</div>

						<div className="md:hidden">
							<button
								className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<div
					className={`flex-1 justify-self-center pb-3 sm:mt-8 md:block md:pb-0 md:mt-0 ${
						navbar ? 'block' : 'hidden'
					}`}
				>
					<div className="flex sm:justify-evenly flex-col sm:flex-row sm:items-center">
						<div className="flex flex-col sm:flex-row sm:justify-evenly">
							<input
								type="text"
								name=""
								id=""
								placeholder="Buscar productos, servicios"
								className="w-[80vw] sm:ml-auto sm:w-96 rounded-xl pl-1 h-8 mb-4 ml-4"
							/>
							<div className="flex sm:justify-evenly sm:items-center sm:flex-row flex-col sm:w-64 ml-4">
								<a href="" className="mb-4 sm:text-2xl sm:mr-6 hover:underline">
									Productos
								</a>
								{/* <a href="" className="mb-4 sm:text-2xl sm:mr-6 hover:underline">
									Servicios
								</a> */}
							</div>
						</div>
						<div className="flex justify-start sm:items-center text-white sm:text-xl ml-4 relative">
							<img src={userFem} alt="not found" className="w-4 mr-2 sm:w-12" />
							{rol === 'USER_BUYER' ? (
								<>
									<div className="flex items-center">
										<p>Hola! {username}</p>
										<button className="ml-2" onClick={handleOpen}>
											<TbTriangleInvertedFilled />
										</button>
									</div>
									{open && (
										<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8">
											<button className="bg-gray-100 m-1 opacity-100">
												Mis compras
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												Mis contrataciones
											</button>
											<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
												Cerrar sesión
											</button>
										</div>
									)}
								</>
							) : rol === 'USER_SELLER' ? (
								<>
									<div className="flex items-center">
										<p>Hola! {username}</p>
										<button className="ml-2" onClick={handleOpen}>
											<TbTriangleInvertedFilled />
										</button>
									</div>
									{open && (
										<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8">
											<button className="bg-gray-100 m-1 opacity-100">
												Mis compras
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												Mis contrataciones
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/vendedor-panel">Mi panel</a>
												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/crear-producto">Crear producto</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="vendedor-negocio">Mi negocio</a>
												
											</button>
											<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
												Cerrar sesión
											</button>
										</div>
									)}
								</>
							) : rol === 'USER_SERVICE' ? (
								<>
									<div className="flex items-center">
										<p>Hola! {username}</p>
										<button className="ml-2" onClick={handleOpen}>
											<TbTriangleInvertedFilled />
										</button>
									</div>
									{open && (
										<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8">
											<button className="bg-gray-100 m-1 opacity-100">
												Mis compras
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												Mis contrataciones
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/prestador-panel">Mi panel</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/prestador-negocio">Mi negocio</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
											<a href="crear-servicio">Crear servicio</a>
											</button>
											<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
												Cerrar sesión
											</button>
										</div>
									)}
								</>
							) : (
								<>
									<a
										href="/register"
										className="hover:underline sm:text-xl mr-2"
									>
										Crea tu cuenta /
									</a>
									<a href="/login" className="hover:underline sm:text-xl">
										Iniciá sesión
									</a>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="hidden sm:flex sm:justify-evenly items-center">
				<div>
					<a href="/"><img src={logo} alt="not found" className="w-36 sm:w-36" /></a>
					
				</div>
				<div className="flex sm:flex-row">
					<input
						type="text"
						name=""
						id=""
						placeholder="Buscar productos, servicios"
						className="sm:ml-auto sm:w-80 rounded-xl pl-1 h-8 mb-4 ml-4"
					/>
					<div className="flex sm:justify-evenly sm:items-center sm:flex-row flex-col sm:w-64 ml-4">
						<a
							href="/products"
							className="mb-4 sm:text-xl sm:mr-6 hover:underline"
						>
							Productos
						</a>
						{/* <a
							href="/servicios"
							className="mb-4 sm:text-xl sm:mr-6 hover:underline"
						>
							Servicios
						</a> */}
					</div>
				</div>
				<div className="text-white sm:text-xl ml-4 flex justify-start relative">
					<img src={userFem} alt="not found" className="w-10 h-10 mr-6" />

					{rol === 'USER_BUYER' ? (
						<>
							<div className="flex items-center">
								<p>Hola! {username}</p>
								<button className="ml-2" onClick={handleOpen}>
									<TbTriangleInvertedFilled />
								</button>
							</div>
							{open && (
								<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8 z-10 h-40">
									<button className="bg-gray-100 m-1 opacity-100 h-[30%]  hover:bg-gray-400 rounded-xl">
										Mis compras
									</button>
									<button className="bg-gray-100 m-1 opacity-100 h-[30%] hover:bg-gray-400 rounded-xl">
										Mis contrataciones
									</button>
									<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
										Cerrar sesión
									</button>
								</div>
							)}
						</>
					) : rol === 'USER_SELLER' ? (
						<>
							<div className="flex items-center">
								<p>Hola! {username}</p>
								<button className="ml-2" onClick={handleOpen}>
									<TbTriangleInvertedFilled />
								</button>
							</div>
							{open && (
								<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8 z-10">
									<button className="bg-gray-100 m-1 opacity-100">
												Mis compras
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												Mis contrataciones
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/vendedor-panel">Mi panel</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
											<a href="vendedor-negocio">Mi negocio</a>
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
											<a href="crear-producto">Crear producto</a>
											</button>
											<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
												Cerrar sesión
											</button>
								</div>
							)}
						</>
					) : rol === 'USER_SERVICE' ? (
						<>
							<div className="flex items-center">
								<p>Hola! {username}</p>
								<button className="ml-2" onClick={handleOpen}>
									<TbTriangleInvertedFilled />
								</button>
							</div>
							{open && (
								<div className="absolute right-0 bg-white flex flex-col justify-evenly opacity-100 text-black text-sm rounded-xl mt-8 z-10">
										<button className="bg-gray-100 m-1 opacity-100">
												Mis compras
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												Mis contrataciones
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/prestador-panel">Mi panel</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
												<a href="/prestador-negocio">Mi negocio</a>												
											</button>
											<button className="bg-gray-100 m-1 opacity-100">
											<a href="crear-servicio">Crear servicio</a>
											</button>
											<button className="bg-gray-100 m-1 opacity-100" onClick={handleLogOut}>
												Cerrar sesión
											</button>
								</div>
							)}
						</>
					) : (
						<>
							<a href="/register" className="hover:underline sm:text-xl mr-2">
								Crea tu cuenta /
							</a>
							<a href="/login" className="hover:underline sm:text-xl">
								Iniciá sesión
							</a>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
