import banner from '../../assets/banner-01.jpg';
import "../Styles/Home/Banner2.css"

// import preFooter from '../../assets/prefooter.png'
export default function Banner2() {
	return (
		<div className="banner2-img-container">
			<img src={banner} alt="" className="banner2-img"/>
			{/* <img src={preFooter} alt="" className='w-[70vw] ml-[15vw]'/>
			<p >Cambiar </p> */}
		</div>
	);
}
