import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Home';
import Servicios from './Components/Servicios';
import Login from './Components/Login/Login';
import EmailLogin from './Components/Login/EmailLogin';
import Register from './Components/Register';
import Step2 from './Components/Register/Step2';
import PrestadorRegister from './Components/Register/PrestadorRegister';
import Prestador from './Components/Prestador';
import AllProducts from './Components/Products/AllProducts';
import VendedorRegister from './Components/Register/VendedorRegister';
import CompradorRegister from './Components/Register/CompradorRegister';

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
					<Route path="/register" element={<Register />} />
					<Route path="/step2" element={<Step2 />} />
					<Route path="/register-prestador" element={<PrestadorRegister />} />
					<Route path="/register-vendedor" element={<VendedorRegister />} />
					<Route path="/register-comprador" element={<CompradorRegister />} />

					{/* Rutas de cada tipo de usuario*/}
					<Route path="/prestador" element={<Prestador />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;
