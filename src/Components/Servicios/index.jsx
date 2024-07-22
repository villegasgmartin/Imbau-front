import NavBar from '../Layouts/BuyerNavBar';
import FeaturedServices from './FeaturedServices';
import ServicesBanner from './ServicesBanner';

export default function Servicios() {
	return (
		<div>
			{rol === 'USER_SERVICE' ? (
				<ServicesNavBar />
			) : rol === 'USER_SELLER' ? (
				<SellerNavBar />
			) : (
				<BuyerNavBar />
			)}
			<ServicesBanner />
			<FeaturedServices />
		</div>
	);
}
