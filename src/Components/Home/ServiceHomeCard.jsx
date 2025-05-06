/* eslint-disable react/prop-types */

import "../Styles/Home/ServiceHomeCard.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

let cardRenderIndex = 0;

export default function ServiceHomeCard(props) {	
	
	const classes = ["cat-color-1", "cat-color-2", "cat-color-3", "cat-color-4"];
	const currentClass = classes[cardRenderIndex % classes.length];
	cardRenderIndex++;

	return (
		<div className="serviceHomeCard-container">			
			<div className="serviceHomeCard-categoryContainer">
			<h5 className={`serviceHomeCard-category ${currentClass}`}>
					{props.categoria}
				</h5>
				<a href="" className="serviceHomeCard-category-link">
					Ver más
				</a>
			</div>
			<div className="serviceHomeCard-profile-container">
				<div className="serviceHomeCard-name-container ">
					<h4 className="serviceHomeCard-name">
						{props.nombre} 
					</h4>
					<a href={`/servicio/${props.uid}`} className="serviceHomeCard-link">
						Ver perfil
					</a>
				</div>
				<div className="serviceHomeCard-info-container">
					<div>
						<StarIcon sx={{color: "#EA8C06"}}/>
						<StarIcon sx={{color: "#EA8C06"}}/>
						<StarIcon sx={{color: "#EA8C06"}}/>		
						<StarIcon sx={{color: "#EA8C06"}}/>	
						<StarBorderIcon sx={{color: "#EA8C06"}}/>			
					</div>	
					<p className="serviceHomeCard-experiencia">{props.experiencia} años de profesión</p>
					<p className="serviceHomeCard-ciudad">{props.provincia} - {props.ciudad}</p>
					<p className="serviceHomeCard-sobremi">{props.sobremi}</p>
				</div>
			</div>			
		</div>
	);
}
