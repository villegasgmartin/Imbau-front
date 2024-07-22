import Banner from './Banner';
import Banner2 from './Banner2';
import Slider from './Slider';
import Promotions from './Promotions';
import BuyerNavBar from '../Layouts/BuyerNavBar';
import SellerNavBar from '../Layouts/SellerNavBar';
import ServicesNavBar from '../Layouts/ServicesNavBar';
import ServiceSlider from './ServiceSlider';

export default function Home() {
	const rol = localStorage.getItem('rol')

	return (
		<div>
			{rol === 'USER_SERVICE' ? <ServicesNavBar/> : rol === 'USER_SELLER' ? <SellerNavBar/> : <BuyerNavBar/> }
			
			<Banner />
			<Promotions />
			<Slider />
			<ServiceSlider/>
			<Banner2 />
		</div>
	);
}
