import Banner from './Banner';
import Banner2 from './Banner2';
import Slider from './Slider';
import Promotions from './Promotions';

import ServiceSlider from './ServiceSlider';
import NavBar from '../Layouts/NavBar';
import AdminNavBar from '../Layouts/AdminNavBar';

export default function Home() {
	const rol = localStorage.getItem('rol')

	return (
    <div>
      {rol === 'USER_ADMIN' ? <AdminNavBar /> : <NavBar />}
      <Banner />
      <Promotions />
      <Slider />
      <ServiceSlider />
      <Banner2 />
    </div>
  );
}
