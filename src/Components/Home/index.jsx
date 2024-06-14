import Banner from './Banner';
import Banner2 from './Banner2';

import Slider from './Slider';
import Promotions from './Promotions';
import NavBar from '../Layouts/NavBar';
import ServiceSlider from './ServiceSlider';

export default function Home() {
	return (
		<div>
			<NavBar />
			<Banner />
			<Promotions />
			<Slider />
			<ServiceSlider/>
			<Banner2 />
		</div>
	);
}
