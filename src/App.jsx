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
import Prestador from './Components/Prestador';
import AllProducts from './Components/Layouts/AllProducts';
import VendedorPanel from './Components/Vendedor/VendedorPanel';


function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					{/* Rutas generales */}
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<AllProducts />} />
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/login" element={<Login />} />
					<Route path="/email-login" element={<EmailLogin />} />
					{/* Rutas para el registro  */}
					<Route path="/register" element={<RegisterForm />} />

					{/* Rutas de cada tipo de usuario*/}
					{/* Prestador de servicios */}
					<Route path="/prestador-panel" element={<Prestador />} />
					{/* Vendedor */}
					<Route path="/vendedor-panel" element={<VendedorPanel />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;