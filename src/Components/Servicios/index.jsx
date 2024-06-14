import NavBar from '../Layouts/NavBar';
import FeaturedServices from './FeaturedServices';
import ServicesBanner from './ServicesBanner';

export default function Servicios() {
	return (
		<div>
			<NavBar />
			<ServicesBanner />
			<FeaturedServices />
		</div>
	);
}
