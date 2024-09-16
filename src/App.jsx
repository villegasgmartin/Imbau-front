import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Layouts
import Footer from './Components/Layouts/Footer';
import Home from './Components/Home';

// Login / Register
import Login from './Components/Login/Login';
import EmailLogin from './Components/Login/EmailLogin';

import RegisterForm from './Components/Register/RegisterForm';

import Servicios from './Components/Servicios';
// import Prestador from './Components/Prestador';
import AllProducts from './Components/Layouts/AllProducts';
import VendedorPanel from './Components/Vendedor/VendedorPanel';
import VendedorNegocio from './Components/Vendedor/VendedorNegocio'
import PrestadorPanel from './Components/Prestador/PrestadorPanel';
import AllServices from './Components/Layouts/AllServices';
import IdProduct from './Components/Layouts/IdProduct';
import CrearProducto from './Components/Vendedor/CrearProducto';
import CrearServicio from './Components/Servicios/CrearServicio';


function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					{/* Rutas generales */}
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<AllProducts />} />
					<Route exact path="/products/:id" element={<IdProduct/>} />
					<Route path="/servicios" element={<AllServices />} />
					<Route path="/login" element={<Login />} />
					<Route path="/email-login" element={<EmailLogin />} />
					{/* Rutas para el registro  */}
					<Route path="/register" element={<RegisterForm />} />

					{/* Rutas de cada tipo de usuario*/}
					{/* Prestador de servicios */}
					{/* <Route path="/prestador-panel" element={<Prestador />} /> */}
					{/* Vendedor */}
					<Route path="/vendedor-panel" element={<VendedorPanel />} />
					<Route path="/vendedor-negocio" element={<VendedorNegocio />} />
					<Route path="/crear-producto" element={<CrearProducto/>} />
					{/* Prestador de servicios */}
					<Route path="/prestador-panel" element={<PrestadorPanel />} />
					<Route path='/crear-servicio' element={<CrearServicio/>} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;
