import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import logo from '../../assets/Isotipo crema.png'
import "../Styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
	return (
		<footer className="footer-main-container">
			<div className="footer-container">
				<div className="footer-info-container">
					<div className="footer-contact-container">
						<h3 className="footer-contact-title">Atencion al cliente</h3>
						<h4 className="footer-contact">0800 122 0338</h4>
						<h4 className="footer-contact">0810 999 3728</h4>
						<h4 className="footer-contact">LU-VI de 09.00 a 18.00</h4>
						<h4 className="footer-contact">SA de 9.00 a 13.00</h4>
						<h4 className="footer-contact">contacto@imbau.com</h4>
					</div>
					<div className="footer-contact-container">
						<a href="/" className="footer-link">Términos y condiciones</a>
						<a href="/" className="footer-link">Vende en Imbau</a>
						<a href="/" className="footer-link">Defensa al consumidor</a>
						<a href="/" className="footer-link">Ayuda</a>
					</div>
					<div className="footer-social-container">
						<a href=""><FacebookIcon sx={{
							fontSize: "50px",
							color: "white",
							transition: "transform 0.2s ease-in-out",
								"&:hover": {
									transform: "scale(1.2)"
								}
						}}/></a>
						<a href=""><InstagramIcon sx={{
							fontSize: "50px",
							color: "#E00A14",
							transition: "transform 0.2s ease-in-out",
								"&:hover": {
									transform: "scale(1.2)"
								}
						}}/></a>
						<a href=""><YouTubeIcon sx={{
							fontSize: "60px",
							color: "#EA8C06",
							transition: "transform 0.2s ease-in-out",
								"&:hover": {
									transform: "scale(1.2)"
								}
						}}/></a>
					</div>
				</div>
				<div className="footer-logo-container">
					<img src={logo} alt="logo"/>
				</div>
			</div>
			<div>
			<p className="footer-copyright">
					Copyright 1927-2023 | Todos los derechos reservados imbau.com.Imbau
					SRL | Rosario | Argentina
			</p>
			</div>
		</footer>
	);
}
