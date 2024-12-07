import banner from '../../assets/banner-01.jpg';
import "../Styles/Banner1.css"

// import preFooter from '../../assets/prefooter.png'
export default function Banner1() {
	return (
		<div className="banner1-img-container">
			<img src={banner} alt="publicidad" className="banner1-img"/>
			{/* <img src={preFooter} alt="" className='w-[70vw] ml-[15vw]'/>
			<p >Cambiar </p> */}
		</div>
	);
}
