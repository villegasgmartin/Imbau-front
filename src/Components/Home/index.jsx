import Banner from './Banner';
import Banner2 from './Banner2';
import Slider from './Slider';
import Promotions from './Promotions';

// import ServiceSlider from './ServiceSlider';
import NavBar from '../Layouts/NavBar';
import Banner1 from './Banner1';
// import Banner3 from './Banner3';

export default function Home() {
	const rol = localStorage.getItem('rol')

	return (
		<div>
			{/*<NavBar/>*/}
			<Banner />
			<Promotions />
			<Banner1 />
			<Slider />
			<Banner2 />
			{/* <ServiceSlider/>
			<Banner3 /> */}
		</div>
	);
}
