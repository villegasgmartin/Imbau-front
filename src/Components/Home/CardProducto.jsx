/* eslint-disable react/prop-types */
import generic from '../../assets/caja test.jpg'
import "../Styles/Home/CardProducto.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CardProducto = ({ producto }) => {
	return (
		<a href={`/products/${producto._id}`}>
			<div className="cardProduct-container">
					<div className='cardProduct-img-container'>
						<img
							src={producto.img}
							alt={producto.nombre}
							className="productCard-img"
							/>
					</div>
					<div className="productCard-info-container">
						<h5 className="productCard-name">{producto.nombre}</h5>	
						<div>
						<StarIcon sx={{color: "#EA8C06"}}/>
						<StarIcon sx={{color: "#EA8C06"}}/>
						<StarIcon sx={{color: "#EA8C06"}}/>		
						<StarIcon sx={{color: "#EA8C06"}}/>	
						<StarBorderIcon sx={{color: "#EA8C06"}}/>			
						</div>	
						<p className="productCard-category"> {producto.categoria} - {producto.subcategoria}</p>
						<p className="productCard-price">${producto.precio}</p>			
					</div>
			</div>
		</a>
	);
};

export default CardProducto;
