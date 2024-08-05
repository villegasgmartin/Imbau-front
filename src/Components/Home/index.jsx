import Banner from './Banner';
import Banner2 from './Banner2';
import Slider from './Slider';
import Promotions from './Promotions';

import ServiceSlider from './ServiceSlider';
import NavBar from '../Layouts/NavBar';

export default function Home() {
	const rol = localStorage.getItem('rol')

	return (
		<div>
			<NavBar/>
			
			<Banner />
			<Promotions />
			<Slider />
			<ServiceSlider/>
			<Banner2 />
		</div>
	);
}
