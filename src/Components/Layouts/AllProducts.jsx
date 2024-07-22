import NavBar from "./BuyerNavBar";
import ProductCard from "./ProductCard";

export default function AllProducts () {
    return (
			<div className="flex flex-col ">
				<div className="flex justify-evenly items-center bg-[#f8f3e0]">
					<h1>
						¿Que producto <br /> buscas?
					</h1>
					<div className="flex flex-col">
						<input type="text" placeholder="Nombre del producto" />
						<input type="text" placeholder="Categorìa del producto" />
						<button>Buscar</button>
					</div>
					<img src="" alt="" className="w-[282px] h-[316px]" />
				</div>
				<h3 className="ml-40 mt-40">Productos destacados <br/> en tu zona</h3>
				<section className="flex justify-evenly ">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</section>
                <img src="" alt="" />
				
				<h3 className="ml-40 mt-40">Puede interesarte <br/> segun tus busquedas</h3>
				<section className="flex justify-evenly ">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</section>
                <img src="" alt="" />
			</div>
		);
}