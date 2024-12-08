import womanImg from '../../assets/Mujer-edited.png'
import "../Styles/Home/Banner.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Banner() {
	return (
		<>
			<div className="banner-container">
				<div className="banner-img-container">
					<img src={womanImg} alt="banner-img" width={"100%"} />
				</div>
				<h1 className="banner-title">
					todo lo que<br/>necesitás<br/><spam className="banner-resaltado">para tu hogar</spam>
				</h1>
				<h1 className="banner-title-movile">
					todo lo que necesitás<br/><spam className="banner-resaltado">para tu hogar</spam>
				</h1>
				<ul className="banner-list-container">
					<li className='banner-list'><ArrowRightAltIcon/> materiales de <spam className="banner-list-resaltado">construcción</spam></li>
					<li className='banner-list'><ArrowRightAltIcon/> <spam className="banner-list-resaltado">electrodomésticos</spam></li>
					<li className='banner-list'><ArrowRightAltIcon/> <spam className="banner-list-resaltado">muebles</spam> de diseño</li>
					<li className='banner-list'><ArrowRightAltIcon/> <spam className="banner-list-resaltado">decoración</spam></li>
					<li className='banner-list'><ArrowRightAltIcon/> <spam className="banner-list-resaltado">profesionales</spam></li>
				</ul>
			</div>
		</>
	);
}