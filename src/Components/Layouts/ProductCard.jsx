export default function ProductCard () {
    return (
			<div className="product-card text-gray-600 mt-20">
                
				<img src="" alt="" />
				<h3 className=""> Titulo del producto</h3>
				<div>*****</div>
				<h4 className="line-through">Precio de lista</h4>
				<div className="flex justify-evenly items-center">
					<h2 className="color-main"> Precio Final</h2>
					<p className="text-green-700">Descuento</p>
				</div>
				<h5>Precio en Cuotas</h5>
			</div>
		);
}