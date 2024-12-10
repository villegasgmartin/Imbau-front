import perfil from '../../assets/perfilGenerico.png'
import "../Styles/PrestadorPanel/PrestadorHeader.css"
import StarIcon from '@mui/icons-material/Star';
import SquareIcon from '@mui/icons-material/Square';

export default function PrestadorHeader () {
    return (
			<div className="prestadorHeader-main-container">
				<div className="prestadorHeader-container">
					<img
						src={perfil}
						alt=""
						className="prestadorHeader-logo-profile"
					/>
					<div className="prestadorHeader-button-container">
						<button className="prestadorHeader-button">
							Agregar otro servicio
						</button>
						<button className="prestadorHeader-button">
							Datos personales
						</button>
					</div>
					<div className="prestadorHeader-info-container">
						<div className='prestadorHeader-first-container'>
							<div className='prestadorHeader-name-container'>
								<h1 className="presatadorHeader-name">Nombre </h1>
								<div><StarIcon style={{color: "#EA8C06", paddingBottom: "3px"}}/><StarIcon style={{color: "#EA8C06", paddingBottom: "3px"}}/><StarIcon style={{color: "#EA8C06", paddingBottom: "3px"}}/><StarIcon style={{color: "#EA8C06", paddingBottom: "3px"}}/></div>
							</div>
							<div className='prestadorHeader-study-container'>
								<SquareIcon sx={{color: "#9D0572", fontSize: { xs: "20px", sm: "45px" }}}/>
								<h3 className='prestadorHeader-study'>Universidad Nacional de Rosario</h3>
							</div>
						</div>
						<h3 className="prestadorHeader-profesion">Profesión</h3>
						<p className="prestadorHeader-adress">Rosario, Santa Fe, Argentina{' '}</p>
					</div>
				</div>
			</div>
		);
}